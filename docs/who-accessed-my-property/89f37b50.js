function noop() { }
function assign(tar, src) {
    // @ts-ignore
    for (const k in src)
        tar[k] = src[k];
    return tar;
}
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function is_function(thing) {
    return typeof thing === 'function';
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
        const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
        return definition[0](slot_ctx);
    }
}
function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn
        ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
        : $$scope.ctx;
}
function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
        const lets = definition[2](fn(dirty));
        if ($$scope.dirty === undefined) {
            return lets;
        }
        if (typeof lets === 'object') {
            const merged = [];
            const len = Math.max($$scope.dirty.length, lets.length);
            for (let i = 0; i < len; i += 1) {
                merged[i] = $$scope.dirty[i] | lets[i];
            }
            return merged;
        }
        return $$scope.dirty | lets;
    }
    return $$scope.dirty;
}
function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
    const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);
    if (slot_changes) {
        const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
        slot.p(slot_context, slot_changes);
    }
}

function append(target, node) {
    target.appendChild(node);
}
function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
}
function detach(node) {
    node.parentNode.removeChild(node);
}
function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
        if (iterations[i])
            iterations[i].d(detaching);
    }
}
function element(name) {
    return document.createElement(name);
}
function svg_element(name) {
    return document.createElementNS('http://www.w3.org/2000/svg', name);
}
function text(data) {
    return document.createTextNode(data);
}
function space() {
    return text(' ');
}
function empty() {
    return text('');
}
function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
}
function attr(node, attribute, value) {
    if (value == null)
        node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
        node.setAttribute(attribute, value);
}
function children(element) {
    return Array.from(element.childNodes);
}
function claim_element(nodes, name, attributes, svg) {
    for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        if (node.nodeName === name) {
            let j = 0;
            const remove = [];
            while (j < node.attributes.length) {
                const attribute = node.attributes[j++];
                if (!attributes[attribute.name]) {
                    remove.push(attribute.name);
                }
            }
            for (let k = 0; k < remove.length; k++) {
                node.removeAttribute(remove[k]);
            }
            return nodes.splice(i, 1)[0];
        }
    }
    return svg ? svg_element(name) : element(name);
}
function claim_text(nodes, data) {
    for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        if (node.nodeType === 3) {
            node.data = '' + data;
            return nodes.splice(i, 1)[0];
        }
    }
    return text(data);
}
function claim_space(nodes) {
    return claim_text(nodes, ' ');
}
function set_data(text, data) {
    data = '' + data;
    if (text.wholeText !== data)
        text.data = data;
}
function set_input_value(input, value) {
    input.value = value == null ? '' : value;
}
function query_selector_all(selector, parent = document.body) {
    return Array.from(parent.querySelectorAll(selector));
}
class HtmlTag {
    constructor(anchor = null) {
        this.a = anchor;
        this.e = this.n = null;
    }
    m(html, target, anchor = null) {
        if (!this.e) {
            this.e = element(target.nodeName);
            this.t = target;
            this.h(html);
        }
        this.i(anchor);
    }
    h(html) {
        this.e.innerHTML = html;
        this.n = Array.from(this.e.childNodes);
    }
    i(anchor) {
        for (let i = 0; i < this.n.length; i += 1) {
            insert(this.t, this.n[i], anchor);
        }
    }
    p(html) {
        this.d();
        this.h(html);
        this.i(this.a);
    }
    d() {
        this.n.forEach(detach);
    }
}

let current_component;
function set_current_component(component) {
    current_component = component;
}

const dirty_components = [];
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
    if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
    }
}
function add_render_callback(fn) {
    render_callbacks.push(fn);
}
let flushing = false;
const seen_callbacks = new Set();
function flush() {
    if (flushing)
        return;
    flushing = true;
    do {
        // first, call beforeUpdate functions
        // and update components
        for (let i = 0; i < dirty_components.length; i += 1) {
            const component = dirty_components[i];
            set_current_component(component);
            update(component.$$);
        }
        dirty_components.length = 0;
        while (binding_callbacks.length)
            binding_callbacks.pop()();
        // then, once components are updated, call
        // afterUpdate functions. This may cause
        // subsequent updates...
        for (let i = 0; i < render_callbacks.length; i += 1) {
            const callback = render_callbacks[i];
            if (!seen_callbacks.has(callback)) {
                // ...so guard against infinite loops
                seen_callbacks.add(callback);
                callback();
            }
        }
        render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
        flush_callbacks.pop()();
    }
    update_scheduled = false;
    flushing = false;
    seen_callbacks.clear();
}
function update($$) {
    if ($$.fragment !== null) {
        $$.update();
        run_all($$.before_update);
        const dirty = $$.dirty;
        $$.dirty = [-1];
        $$.fragment && $$.fragment.p($$.ctx, dirty);
        $$.after_update.forEach(add_render_callback);
    }
}
const outroing = new Set();
let outros;
function transition_in(block, local) {
    if (block && block.i) {
        outroing.delete(block);
        block.i(local);
    }
}
function transition_out(block, local, detach, callback) {
    if (block && block.o) {
        if (outroing.has(block))
            return;
        outroing.add(block);
        outros.c.push(() => {
            outroing.delete(block);
            if (callback) {
                if (detach)
                    block.d(1);
                callback();
            }
        });
        block.o(local);
    }
}

function get_spread_update(levels, updates) {
    const update = {};
    const to_null_out = {};
    const accounted_for = { $$scope: 1 };
    let i = levels.length;
    while (i--) {
        const o = levels[i];
        const n = updates[i];
        if (n) {
            for (const key in o) {
                if (!(key in n))
                    to_null_out[key] = 1;
            }
            for (const key in n) {
                if (!accounted_for[key]) {
                    update[key] = n[key];
                    accounted_for[key] = 1;
                }
            }
            levels[i] = n;
        }
        else {
            for (const key in o) {
                accounted_for[key] = 1;
            }
        }
    }
    for (const key in to_null_out) {
        if (!(key in update))
            update[key] = undefined;
    }
    return update;
}
function get_spread_object(spread_props) {
    return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
}
function create_component(block) {
    block && block.c();
}
function claim_component(block, parent_nodes) {
    block && block.l(parent_nodes);
}
function mount_component(component, target, anchor) {
    const { fragment, on_mount, on_destroy, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    // onMount happens before the initial afterUpdate
    add_render_callback(() => {
        const new_on_destroy = on_mount.map(run).filter(is_function);
        if (on_destroy) {
            on_destroy.push(...new_on_destroy);
        }
        else {
            // Edge case - component was destroyed immediately,
            // most likely as a result of a binding initialising
            run_all(new_on_destroy);
        }
        component.$$.on_mount = [];
    });
    after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
        run_all($$.on_destroy);
        $$.fragment && $$.fragment.d(detaching);
        // TODO null out other refs, including component.$$ (but need to
        // preserve final state?)
        $$.on_destroy = $$.fragment = null;
        $$.ctx = [];
    }
}
function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
        dirty_components.push(component);
        schedule_update();
        component.$$.dirty.fill(0);
    }
    component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
}
function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const prop_values = options.props || {};
    const $$ = component.$$ = {
        fragment: null,
        ctx: null,
        // state
        props,
        update: noop,
        not_equal,
        bound: blank_object(),
        // lifecycle
        on_mount: [],
        on_destroy: [],
        before_update: [],
        after_update: [],
        context: new Map(parent_component ? parent_component.$$.context : []),
        // everything else
        callbacks: blank_object(),
        dirty
    };
    let ready = false;
    $$.ctx = instance
        ? instance(component, prop_values, (i, ret, ...rest) => {
            const value = rest.length ? rest[0] : ret;
            if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                if ($$.bound[i])
                    $$.bound[i](value);
                if (ready)
                    make_dirty(component, i);
            }
            return ret;
        })
        : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    // `false` as a special case of no DOM component
    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
    if (options.target) {
        if (options.hydrate) {
            const nodes = children(options.target);
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.l(nodes);
            nodes.forEach(detach);
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.c();
        }
        if (options.intro)
            transition_in(component.$$.fragment);
        mount_component(component, options.target, options.anchor);
        flush();
    }
    set_current_component(parent_component);
}
class SvelteComponent {
    $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
    }
    $on(type, callback) {
        const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
        callbacks.push(callback);
        return () => {
            const index = callbacks.indexOf(callback);
            if (index !== -1)
                callbacks.splice(index, 1);
        };
    }
    $set() {
        // overridden by instance, if it has props
    }
}

/* src/layout/Header.svelte generated by Svelte v3.24.0 */

function create_fragment(ctx) {
	let header;
	let nav;
	let ul;
	let li0;
	let a0;
	let t0;
	let t1;
	let li1;
	let a1;
	let t2;
	let t3;
	let li2;
	let a2;
	let t4;
	let t5;
	let li3;
	let a3;
	let t6;
	let t7;
	let li4;
	let a4;
	let t8;
	let t9;
	let li5;
	let a5;
	let t10;
	let t11;
	let li6;
	let a6;
	let svg0;
	let path0;
	let t12;
	let a7;
	let svg1;
	let path1;

	return {
		c() {
			header = element("header");
			nav = element("nav");
			ul = element("ul");
			li0 = element("li");
			a0 = element("a");
			t0 = text("Tan Li Hau");
			t1 = space();
			li1 = element("li");
			a1 = element("a");
			t2 = text("About");
			t3 = space();
			li2 = element("li");
			a2 = element("a");
			t4 = text("Writings");
			t5 = space();
			li3 = element("li");
			a3 = element("a");
			t6 = text("Talks");
			t7 = space();
			li4 = element("li");
			a4 = element("a");
			t8 = text("Notes");
			t9 = space();
			li5 = element("li");
			a5 = element("a");
			t10 = text("Newsletter");
			t11 = space();
			li6 = element("li");
			a6 = element("a");
			svg0 = svg_element("svg");
			path0 = svg_element("path");
			t12 = space();
			a7 = element("a");
			svg1 = svg_element("svg");
			path1 = svg_element("path");
			this.h();
		},
		l(nodes) {
			header = claim_element(nodes, "HEADER", { class: true });
			var header_nodes = children(header);
			nav = claim_element(header_nodes, "NAV", {});
			var nav_nodes = children(nav);
			ul = claim_element(nav_nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", { class: true });
			var li0_nodes = children(li0);
			a0 = claim_element(li0_nodes, "A", { href: true, class: true });
			var a0_nodes = children(a0);
			t0 = claim_text(a0_nodes, "Tan Li Hau");
			a0_nodes.forEach(detach);
			li0_nodes.forEach(detach);
			t1 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", { class: true });
			var li1_nodes = children(li1);
			a1 = claim_element(li1_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			t2 = claim_text(a1_nodes, "About");
			a1_nodes.forEach(detach);
			li1_nodes.forEach(detach);
			t3 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", { class: true });
			var li2_nodes = children(li2);
			a2 = claim_element(li2_nodes, "A", { href: true, class: true });
			var a2_nodes = children(a2);
			t4 = claim_text(a2_nodes, "Writings");
			a2_nodes.forEach(detach);
			li2_nodes.forEach(detach);
			t5 = claim_space(ul_nodes);
			li3 = claim_element(ul_nodes, "LI", { class: true });
			var li3_nodes = children(li3);
			a3 = claim_element(li3_nodes, "A", { href: true, class: true });
			var a3_nodes = children(a3);
			t6 = claim_text(a3_nodes, "Talks");
			a3_nodes.forEach(detach);
			li3_nodes.forEach(detach);
			t7 = claim_space(ul_nodes);
			li4 = claim_element(ul_nodes, "LI", { class: true });
			var li4_nodes = children(li4);
			a4 = claim_element(li4_nodes, "A", { href: true, class: true });
			var a4_nodes = children(a4);
			t8 = claim_text(a4_nodes, "Notes");
			a4_nodes.forEach(detach);
			li4_nodes.forEach(detach);
			t9 = claim_space(ul_nodes);
			li5 = claim_element(ul_nodes, "LI", { class: true });
			var li5_nodes = children(li5);
			a5 = claim_element(li5_nodes, "A", { href: true, class: true });
			var a5_nodes = children(a5);
			t10 = claim_text(a5_nodes, "Newsletter");
			a5_nodes.forEach(detach);
			li5_nodes.forEach(detach);
			t11 = claim_space(ul_nodes);
			li6 = claim_element(ul_nodes, "LI", { class: true });
			var li6_nodes = children(li6);

			a6 = claim_element(li6_nodes, "A", {
				"aria-label": true,
				href: true,
				class: true
			});

			var a6_nodes = children(a6);
			svg0 = claim_element(a6_nodes, "svg", { viewBox: true, class: true }, 1);
			var svg0_nodes = children(svg0);
			path0 = claim_element(svg0_nodes, "path", { d: true }, 1);
			children(path0).forEach(detach);
			svg0_nodes.forEach(detach);
			a6_nodes.forEach(detach);
			t12 = claim_space(li6_nodes);

			a7 = claim_element(li6_nodes, "A", {
				"aria-label": true,
				href: true,
				class: true
			});

			var a7_nodes = children(a7);
			svg1 = claim_element(a7_nodes, "svg", { viewBox: true, class: true }, 1);
			var svg1_nodes = children(svg1);
			path1 = claim_element(svg1_nodes, "path", { d: true }, 1);
			children(path1).forEach(detach);
			svg1_nodes.forEach(detach);
			a7_nodes.forEach(detach);
			li6_nodes.forEach(detach);
			ul_nodes.forEach(detach);
			nav_nodes.forEach(detach);
			header_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a0, "href", "/");
			attr(a0, "class", "svelte-f3e4uo");
			attr(li0, "class", "svelte-f3e4uo");
			attr(a1, "href", "/about");
			attr(a1, "class", "svelte-f3e4uo");
			attr(li1, "class", "svelte-f3e4uo");
			attr(a2, "href", "/blogs");
			attr(a2, "class", "svelte-f3e4uo");
			attr(li2, "class", "svelte-f3e4uo");
			attr(a3, "href", "/talks");
			attr(a3, "class", "svelte-f3e4uo");
			attr(li3, "class", "svelte-f3e4uo");
			attr(a4, "href", "/notes");
			attr(a4, "class", "svelte-f3e4uo");
			attr(li4, "class", "svelte-f3e4uo");
			attr(a5, "href", "/newsletter");
			attr(a5, "class", "svelte-f3e4uo");
			attr(li5, "class", "svelte-f3e4uo");
			attr(path0, "d", "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z");
			attr(svg0, "viewBox", "0 0 24 24");
			attr(svg0, "class", "svelte-f3e4uo");
			attr(a6, "aria-label", "Twitter account");
			attr(a6, "href", "https://twitter.com/lihautan");
			attr(a6, "class", "svelte-f3e4uo");
			attr(path1, "d", "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0\n    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07\n    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65\n    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42\n    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22");
			attr(svg1, "viewBox", "0 0 24 24");
			attr(svg1, "class", "svelte-f3e4uo");
			attr(a7, "aria-label", "Github account");
			attr(a7, "href", "https://github.com/tanhauhau");
			attr(a7, "class", "svelte-f3e4uo");
			attr(li6, "class", "social svelte-f3e4uo");
			attr(ul, "class", "svelte-f3e4uo");
			attr(header, "class", "svelte-f3e4uo");
		},
		m(target, anchor) {
			insert(target, header, anchor);
			append(header, nav);
			append(nav, ul);
			append(ul, li0);
			append(li0, a0);
			append(a0, t0);
			append(ul, t1);
			append(ul, li1);
			append(li1, a1);
			append(a1, t2);
			append(ul, t3);
			append(ul, li2);
			append(li2, a2);
			append(a2, t4);
			append(ul, t5);
			append(ul, li3);
			append(li3, a3);
			append(a3, t6);
			append(ul, t7);
			append(ul, li4);
			append(li4, a4);
			append(a4, t8);
			append(ul, t9);
			append(ul, li5);
			append(li5, a5);
			append(a5, t10);
			append(ul, t11);
			append(ul, li6);
			append(li6, a6);
			append(a6, svg0);
			append(svg0, path0);
			append(li6, t12);
			append(li6, a7);
			append(a7, svg1);
			append(svg1, path1);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(header);
		}
	};
}

class Header extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

/* src/layout/Newsletter.svelte generated by Svelte v3.24.0 */

function create_fragment$1(ctx) {
	let div1;
	let h1;
	let t0;
	let t1;
	let h2;
	let t2;
	let t3;
	let form;
	let div0;
	let input0;
	let t4;
	let input1;
	let input1_disabled_value;
	let t5;
	let input2;
	let t6;
	let p;
	let t7;
	let mounted;
	let dispose;

	return {
		c() {
			div1 = element("div");
			h1 = element("h1");
			t0 = text("Subscribe to my newsletter");
			t1 = space();
			h2 = element("h2");
			t2 = text("Get the latest blog posts and project updates delivered right to your inbox");
			t3 = space();
			form = element("form");
			div0 = element("div");
			input0 = element("input");
			t4 = space();
			input1 = element("input");
			t5 = space();
			input2 = element("input");
			t6 = space();
			p = element("p");
			t7 = text("Powered by Buttondown.");
			this.h();
		},
		l(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h1 = claim_element(div1_nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Subscribe to my newsletter");
			h1_nodes.forEach(detach);
			t1 = claim_space(div1_nodes);
			h2 = claim_element(div1_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t2 = claim_text(h2_nodes, "Get the latest blog posts and project updates delivered right to your inbox");
			h2_nodes.forEach(detach);
			t3 = claim_space(div1_nodes);

			form = claim_element(div1_nodes, "FORM", {
				action: true,
				method: true,
				target: true,
				onsubmit: true,
				class: true
			});

			var form_nodes = children(form);
			div0 = claim_element(form_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			input0 = claim_element(div0_nodes, "INPUT", {
				type: true,
				name: true,
				id: true,
				"aria-label": true,
				placeholder: true,
				class: true
			});

			t4 = claim_space(div0_nodes);

			input1 = claim_element(div0_nodes, "INPUT", {
				type: true,
				value: true,
				disabled: true,
				class: true
			});

			div0_nodes.forEach(detach);
			t5 = claim_space(form_nodes);

			input2 = claim_element(form_nodes, "INPUT", {
				type: true,
				value: true,
				name: true,
				class: true
			});

			t6 = claim_space(form_nodes);
			p = claim_element(form_nodes, "P", { class: true });
			var p_nodes = children(p);
			t7 = claim_text(p_nodes, "Powered by Buttondown.");
			p_nodes.forEach(detach);
			form_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(h2, "class", "svelte-1k1s1co");
			attr(input0, "type", "email");
			attr(input0, "name", "email");
			attr(input0, "id", "bd-email");
			attr(input0, "aria-label", "email address");
			attr(input0, "placeholder", "youremail@example.com");
			attr(input0, "class", "svelte-1k1s1co");
			attr(input1, "type", "submit");
			input1.value = "Subscribe";
			input1.disabled = input1_disabled_value = !/*email*/ ctx[0];
			attr(input1, "class", "svelte-1k1s1co");
			attr(div0, "class", "form-item svelte-1k1s1co");
			attr(input2, "type", "hidden");
			input2.value = "1";
			attr(input2, "name", "embed");
			attr(input2, "class", "svelte-1k1s1co");
			attr(p, "class", "svelte-1k1s1co");
			attr(form, "action", "https://buttondown.email/api/emails/embed-subscribe/lihautan");
			attr(form, "method", "post");
			attr(form, "target", "popupwindow");
			attr(form, "onsubmit", "window.open('https://buttondown.email/lihautan', 'popupwindow')");
			attr(form, "class", "embeddable-buttondown-form");
			attr(div1, "class", "form svelte-1k1s1co");
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, h1);
			append(h1, t0);
			append(div1, t1);
			append(div1, h2);
			append(h2, t2);
			append(div1, t3);
			append(div1, form);
			append(form, div0);
			append(div0, input0);
			set_input_value(input0, /*email*/ ctx[0]);
			append(div0, t4);
			append(div0, input1);
			append(form, t5);
			append(form, input2);
			append(form, t6);
			append(form, p);
			append(p, t7);

			if (!mounted) {
				dispose = listen(input0, "input", /*input0_input_handler*/ ctx[1]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*email*/ 1 && input0.value !== /*email*/ ctx[0]) {
				set_input_value(input0, /*email*/ ctx[0]);
			}

			if (dirty & /*email*/ 1 && input1_disabled_value !== (input1_disabled_value = !/*email*/ ctx[0])) {
				input1.disabled = input1_disabled_value;
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div1);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let email;

	function input0_input_handler() {
		email = this.value;
		$$invalidate(0, email);
	}

	return [email, input0_input_handler];
}

class Newsletter extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment$1, safe_not_equal, {});
	}
}

var image = null;

/* src/layout/blog.svelte generated by Svelte v3.24.0 */

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[6] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[6] = list[i];
	return child_ctx;
}

// (33:2) {#each tags as tag}
function create_each_block_1(ctx) {
	let meta;
	let meta_content_value;

	return {
		c() {
			meta = element("meta");
			this.h();
		},
		l(nodes) {
			meta = claim_element(nodes, "META", { name: true, content: true });
			this.h();
		},
		h() {
			attr(meta, "name", "keywords");
			attr(meta, "content", meta_content_value = /*tag*/ ctx[6]);
		},
		m(target, anchor) {
			insert(target, meta, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*tags*/ 4 && meta_content_value !== (meta_content_value = /*tag*/ ctx[6])) {
				attr(meta, "content", meta_content_value);
			}
		},
		d(detaching) {
			if (detaching) detach(meta);
		}
	};
}

// (72:2) {#each tags as tag}
function create_each_block(ctx) {
	let span;
	let t_value = /*tag*/ ctx[6] + "";
	let t;

	return {
		c() {
			span = element("span");
			t = text(t_value);
			this.h();
		},
		l(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, t_value);
			span_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(span, "class", "svelte-2w4dum");
		},
		m(target, anchor) {
			insert(target, span, anchor);
			append(span, t);
		},
		p(ctx, dirty) {
			if (dirty & /*tags*/ 4 && t_value !== (t_value = /*tag*/ ctx[6] + "")) set_data(t, t_value);
		},
		d(detaching) {
			if (detaching) detach(span);
		}
	};
}

function create_fragment$2(ctx) {
	let title_value;
	let meta0;
	let meta1;
	let meta2;
	let meta3;
	let meta4;
	let meta5;
	let meta6;
	let meta7;
	let meta8;
	let meta9;
	let meta10;
	let meta11;
	let meta12;
	let html_tag;

	let raw0_value = `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "Article",
		author: /*jsonLdAuthor*/ ctx[3],
		copyrightHolder: /*jsonLdAuthor*/ ctx[3],
		copyrightYear: "2020",
		creator: /*jsonLdAuthor*/ ctx[3],
		publisher: /*jsonLdAuthor*/ ctx[3],
		description: /*description*/ ctx[1],
		headline: /*title*/ ctx[0],
		name: /*title*/ ctx[0],
		inLanguage: "en"
	})}</script>` + "";

	let html_anchor;
	let html_tag_1;

	let raw1_value = `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"description": "Breadcrumbs list",
		"name": "Breadcrumbs",
		"itemListElement": [
			{
				"@type": "ListItem",
				"item": {
					"@id": "https://lihautan.com",
					"name": "Homepage"
				},
				"position": 1
			},
			{
				"@type": "ListItem",
				"item": {
					"@id": "https%3A%2F%2Flihautan.com%2Fwho-accessed-my-property",
					"name": /*title*/ ctx[0]
				},
				"position": 2
			}
		]
	})}</script>` + "";

	let html_anchor_1;
	let t0;
	let a;
	let t1;
	let t2;
	let header;
	let t3;
	let main;
	let h1;
	let t4;
	let t5;
	let t6;
	let article;
	let t7;
	let footer;
	let newsletter;
	let t8;
	let html_tag_2;
	let raw2_value = "<script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>" + "";
	let html_anchor_2;
	let current;
	document.title = title_value = "" + (/*title*/ ctx[0] + " | Tan Li Hau");
	let each_value_1 = /*tags*/ ctx[2];
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	header = new Header({});
	let each_value = /*tags*/ ctx[2];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const default_slot_template = /*$$slots*/ ctx[5].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[4], null);
	newsletter = new Newsletter({});

	return {
		c() {
			meta0 = element("meta");
			meta1 = element("meta");
			meta2 = element("meta");
			meta3 = element("meta");
			meta4 = element("meta");
			meta5 = element("meta");
			meta6 = element("meta");
			meta7 = element("meta");
			meta8 = element("meta");
			meta9 = element("meta");
			meta10 = element("meta");

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			meta11 = element("meta");
			meta12 = element("meta");
			html_anchor = empty();
			html_anchor_1 = empty();
			t0 = space();
			a = element("a");
			t1 = text("Skip to content");
			t2 = space();
			create_component(header.$$.fragment);
			t3 = space();
			main = element("main");
			h1 = element("h1");
			t4 = text(/*title*/ ctx[0]);
			t5 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t6 = space();
			article = element("article");
			if (default_slot) default_slot.c();
			t7 = space();
			footer = element("footer");
			create_component(newsletter.$$.fragment);
			t8 = space();
			html_anchor_2 = empty();
			this.h();
		},
		l(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-n0q11s\"]", document.head);
			meta0 = claim_element(head_nodes, "META", { name: true, content: true });
			meta1 = claim_element(head_nodes, "META", { name: true, content: true });
			meta2 = claim_element(head_nodes, "META", { name: true, content: true });
			meta3 = claim_element(head_nodes, "META", { name: true, content: true });
			meta4 = claim_element(head_nodes, "META", { name: true, content: true });
			meta5 = claim_element(head_nodes, "META", { name: true, content: true });
			meta6 = claim_element(head_nodes, "META", { name: true, content: true });
			meta7 = claim_element(head_nodes, "META", { name: true, content: true });
			meta8 = claim_element(head_nodes, "META", { name: true, content: true });
			meta9 = claim_element(head_nodes, "META", { name: true, content: true });
			meta10 = claim_element(head_nodes, "META", { name: true, content: true });

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(head_nodes);
			}

			meta11 = claim_element(head_nodes, "META", { itemprop: true, content: true });
			meta12 = claim_element(head_nodes, "META", { itemprop: true, content: true });
			html_anchor = empty();
			html_anchor_1 = empty();
			head_nodes.forEach(detach);
			t0 = claim_space(nodes);
			a = claim_element(nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t1 = claim_text(a_nodes, "Skip to content");
			a_nodes.forEach(detach);
			t2 = claim_space(nodes);
			claim_component(header.$$.fragment, nodes);
			t3 = claim_space(nodes);
			main = claim_element(nodes, "MAIN", { id: true, class: true });
			var main_nodes = children(main);
			h1 = claim_element(main_nodes, "H1", {});
			var h1_nodes = children(h1);
			t4 = claim_text(h1_nodes, /*title*/ ctx[0]);
			h1_nodes.forEach(detach);
			t5 = claim_space(main_nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(main_nodes);
			}

			t6 = claim_space(main_nodes);
			article = claim_element(main_nodes, "ARTICLE", {});
			var article_nodes = children(article);
			if (default_slot) default_slot.l(article_nodes);
			article_nodes.forEach(detach);
			main_nodes.forEach(detach);
			t7 = claim_space(nodes);
			footer = claim_element(nodes, "FOOTER", { class: true });
			var footer_nodes = children(footer);
			claim_component(newsletter.$$.fragment, footer_nodes);
			footer_nodes.forEach(detach);
			t8 = claim_space(nodes);
			html_anchor_2 = empty();
			this.h();
		},
		h() {
			attr(meta0, "name", "description");
			attr(meta0, "content", /*description*/ ctx[1]);
			attr(meta1, "name", "image");
			attr(meta1, "content", image);
			attr(meta2, "name", "og:image");
			attr(meta2, "content", image);
			attr(meta3, "name", "og:title");
			attr(meta3, "content", /*title*/ ctx[0]);
			attr(meta4, "name", "og:description");
			attr(meta4, "content", /*description*/ ctx[1]);
			attr(meta5, "name", "og:type");
			attr(meta5, "content", "website");
			attr(meta6, "name", "twitter:card");
			attr(meta6, "content", "summary_large_image");
			attr(meta7, "name", "twitter:creator");
			attr(meta7, "content", "@lihautan");
			attr(meta8, "name", "twitter:title");
			attr(meta8, "content", /*title*/ ctx[0]);
			attr(meta9, "name", "twitter:description");
			attr(meta9, "content", /*description*/ ctx[1]);
			attr(meta10, "name", "twitter:image");
			attr(meta10, "content", image);
			attr(meta11, "itemprop", "url");
			attr(meta11, "content", "https%3A%2F%2Flihautan.com%2Fwho-accessed-my-property");
			attr(meta12, "itemprop", "image");
			attr(meta12, "content", image);
			html_tag = new HtmlTag(html_anchor);
			html_tag_1 = new HtmlTag(html_anchor_1);
			attr(a, "href", "#content");
			attr(a, "class", "skip svelte-2w4dum");
			attr(main, "id", "content");
			attr(main, "class", "blog svelte-2w4dum");
			attr(footer, "class", "svelte-2w4dum");
			html_tag_2 = new HtmlTag(html_anchor_2);
		},
		m(target, anchor) {
			append(document.head, meta0);
			append(document.head, meta1);
			append(document.head, meta2);
			append(document.head, meta3);
			append(document.head, meta4);
			append(document.head, meta5);
			append(document.head, meta6);
			append(document.head, meta7);
			append(document.head, meta8);
			append(document.head, meta9);
			append(document.head, meta10);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(document.head, null);
			}

			append(document.head, meta11);
			append(document.head, meta12);
			html_tag.m(raw0_value, document.head);
			append(document.head, html_anchor);
			html_tag_1.m(raw1_value, document.head);
			append(document.head, html_anchor_1);
			insert(target, t0, anchor);
			insert(target, a, anchor);
			append(a, t1);
			insert(target, t2, anchor);
			mount_component(header, target, anchor);
			insert(target, t3, anchor);
			insert(target, main, anchor);
			append(main, h1);
			append(h1, t4);
			append(main, t5);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(main, null);
			}

			append(main, t6);
			append(main, article);

			if (default_slot) {
				default_slot.m(article, null);
			}

			insert(target, t7, anchor);
			insert(target, footer, anchor);
			mount_component(newsletter, footer, null);
			insert(target, t8, anchor);
			html_tag_2.m(raw2_value, target, anchor);
			insert(target, html_anchor_2, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			if ((!current || dirty & /*title*/ 1) && title_value !== (title_value = "" + (/*title*/ ctx[0] + " | Tan Li Hau"))) {
				document.title = title_value;
			}

			if (!current || dirty & /*description*/ 2) {
				attr(meta0, "content", /*description*/ ctx[1]);
			}

			if (!current || dirty & /*title*/ 1) {
				attr(meta3, "content", /*title*/ ctx[0]);
			}

			if (!current || dirty & /*description*/ 2) {
				attr(meta4, "content", /*description*/ ctx[1]);
			}

			if (!current || dirty & /*title*/ 1) {
				attr(meta8, "content", /*title*/ ctx[0]);
			}

			if (!current || dirty & /*description*/ 2) {
				attr(meta9, "content", /*description*/ ctx[1]);
			}

			if (dirty & /*tags*/ 4) {
				each_value_1 = /*tags*/ ctx[2];
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
					} else {
						each_blocks_1[i] = create_each_block_1(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(meta11.parentNode, meta11);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}

				each_blocks_1.length = each_value_1.length;
			}

			if ((!current || dirty & /*description, title*/ 3) && raw0_value !== (raw0_value = `<script type="application/ld+json">${JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Article",
				author: /*jsonLdAuthor*/ ctx[3],
				copyrightHolder: /*jsonLdAuthor*/ ctx[3],
				copyrightYear: "2020",
				creator: /*jsonLdAuthor*/ ctx[3],
				publisher: /*jsonLdAuthor*/ ctx[3],
				description: /*description*/ ctx[1],
				headline: /*title*/ ctx[0],
				name: /*title*/ ctx[0],
				inLanguage: "en"
			})}</script>` + "")) html_tag.p(raw0_value);

			if ((!current || dirty & /*title*/ 1) && raw1_value !== (raw1_value = `<script type="application/ld+json">${JSON.stringify({
				"@context": "https://schema.org",
				"@type": "BreadcrumbList",
				"description": "Breadcrumbs list",
				"name": "Breadcrumbs",
				"itemListElement": [
					{
						"@type": "ListItem",
						"item": {
							"@id": "https://lihautan.com",
							"name": "Homepage"
						},
						"position": 1
					},
					{
						"@type": "ListItem",
						"item": {
							"@id": "https%3A%2F%2Flihautan.com%2Fwho-accessed-my-property",
							"name": /*title*/ ctx[0]
						},
						"position": 2
					}
				]
			})}</script>` + "")) html_tag_1.p(raw1_value);

			if (!current || dirty & /*title*/ 1) set_data(t4, /*title*/ ctx[0]);

			if (dirty & /*tags*/ 4) {
				each_value = /*tags*/ ctx[2];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(main, t6);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 16) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[4], dirty, null, null);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(header.$$.fragment, local);
			transition_in(default_slot, local);
			transition_in(newsletter.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(header.$$.fragment, local);
			transition_out(default_slot, local);
			transition_out(newsletter.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			detach(meta0);
			detach(meta1);
			detach(meta2);
			detach(meta3);
			detach(meta4);
			detach(meta5);
			detach(meta6);
			detach(meta7);
			detach(meta8);
			detach(meta9);
			detach(meta10);
			destroy_each(each_blocks_1, detaching);
			detach(meta11);
			detach(meta12);
			detach(html_anchor);
			if (detaching) html_tag.d();
			detach(html_anchor_1);
			if (detaching) html_tag_1.d();
			if (detaching) detach(t0);
			if (detaching) detach(a);
			if (detaching) detach(t2);
			destroy_component(header, detaching);
			if (detaching) detach(t3);
			if (detaching) detach(main);
			destroy_each(each_blocks, detaching);
			if (default_slot) default_slot.d(detaching);
			if (detaching) detach(t7);
			if (detaching) detach(footer);
			destroy_component(newsletter);
			if (detaching) detach(t8);
			if (detaching) detach(html_anchor_2);
			if (detaching) html_tag_2.d();
		}
	};
}

function instance$1($$self, $$props, $$invalidate) {
	let { title } = $$props;
	let { description } = $$props;
	let { tags = [] } = $$props;
	const jsonLdAuthor = { ["@type"]: "Person", name: "Tan Li Hau" };
	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("description" in $$props) $$invalidate(1, description = $$props.description);
		if ("tags" in $$props) $$invalidate(2, tags = $$props.tags);
		if ("$$scope" in $$props) $$invalidate(4, $$scope = $$props.$$scope);
	};

	return [title, description, tags, jsonLdAuthor, $$scope, $$slots];
}

class Blog extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$1, create_fragment$2, safe_not_equal, { title: 0, description: 1, tags: 2 });
	}
}

/* content/blog/who-accessed-my-property/@@page-markup.svelte generated by Svelte v3.24.0 */

function create_default_slot(ctx) {
	let p0;
	let t0;
	let code0;
	let t1;
	let t2;
	let code1;
	let t3;
	let t4;
	let code2;
	let t5;
	let t6;
	let t7;
	let p1;
	let strong0;
	let t8;
	let t9;
	let code3;
	let t10;
	let t11;
	let t12;
	let hr0;
	let t13;
	let p2;
	let strong1;
	let t14;
	let t15;
	let a0;
	let t16;
	let t17;
	let a1;
	let t18;
	let t19;
	let a2;
	let t20;
	let t21;
	let code4;
	let t22;
	let t23;
	let code5;
	let t24;
	let t25;
	let t26;
	let pre0;

	let raw0_value = `
<code class="language-js"><span class="token comment">// setting a property in the &#96;$scope&#96; object triggers</span>
<span class="token comment">// the framework to update the model and the DOM</span>
$scope<span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> <span class="token string">'Hello'</span><span class="token punctuation">;</span></code>` + "";

	let t27;
	let hr1;
	let t28;
	let p3;
	let strong2;
	let t29;
	let t30;
	let a3;
	let code6;
	let t31;
	let t32;
	let t33;
	let p4;
	let code7;
	let t34;
	let t35;
	let t36;
	let p5;
	let t37;
	let code8;
	let t38;
	let t39;
	let code9;
	let t40;
	let t41;
	let code10;
	let t42;
	let t43;
	let code11;
	let t44;
	let t45;
	let t46;
	let ul;
	let li0;
	let p6;
	let code12;
	let t47;
	let t48;
	let p7;
	let code13;
	let t49;
	let t50;
	let t51;
	let p8;
	let strong3;
	let t52;
	let code14;
	let t53;
	let t54;
	let t55;
	let p9;
	let t56;
	let code15;
	let t57;
	let t58;
	let code16;
	let t59;
	let t60;
	let code17;
	let t61;
	let t62;
	let code18;
	let t63;
	let t64;
	let li1;
	let p10;
	let code19;
	let t65;
	let t66;
	let p11;
	let code20;
	let t67;
	let t68;
	let t69;
	let p12;
	let strong4;
	let t70;
	let code21;
	let t71;
	let t72;
	let p13;
	let t73;
	let code22;
	let t74;
	let t75;
	let t76;
	let li2;
	let p14;
	let code23;
	let t77;
	let t78;
	let p15;
	let t79;
	let code24;
	let t80;
	let t81;
	let t82;
	let p16;
	let strong5;
	let t83;
	let code25;
	let t84;
	let t85;
	let li3;
	let p17;
	let code26;
	let t86;
	let t87;
	let p18;
	let t88;
	let code27;
	let t89;
	let t90;
	let t91;
	let p19;
	let strong6;
	let t92;
	let code28;
	let t93;
	let t94;
	let p20;
	let t95;
	let t96;
	let p21;
	let t97;
	let a4;
	let code29;
	let t98;
	let t99;
	let t100;
	let p22;
	let t101;
	let strong7;
	let t102;
	let t103;
	let t104;
	let p23;
	let t105;
	let t106;
	let pre1;

	let raw1_value = `
<code class="language-js"><span class="token keyword">let</span> _value<span class="token punctuation">;</span>
<span class="token known-class-name class-name">Object</span><span class="token punctuation">.</span><span class="token method function property-access">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">'awesome'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
  <span class="token function-variable function">get</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token comment">// highlight-start</span>
    <span class="token keyword">try</span> <span class="token punctuation">&#123;</span>
      <span class="token comment">// intentionally throw an Error to get the call stack</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token comment">// stack is the stack trace, </span>
      <span class="token comment">// containing error message and the stack</span>
      <span class="token keyword">const</span> stack <span class="token operator">=</span> error<span class="token punctuation">.</span><span class="token property-access">stack</span><span class="token punctuation">;</span>
      <span class="token comment">// print the callee stack</span>
      <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>
        stack
          <span class="token punctuation">.</span><span class="token method function property-access">split</span><span class="token punctuation">(</span><span class="token string">'&#92;n'</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token method function property-access">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token method function property-access">join</span><span class="token punctuation">(</span><span class="token string">'&#92;n'</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    <span class="token comment">// highlight-end</span>
    <span class="token keyword">return</span> _value<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>` + "";

	return {
		c() {
			p0 = element("p");
			t0 = text("Say you defined an object ");
			code0 = element("code");
			t1 = text("const obj = { awesome: true }");
			t2 = text(" so that anywhere within your code, you can access the value of ");
			code1 = element("code");
			t3 = text("obj.awesome");
			t4 = text(" as well as modify its value via ");
			code2 = element("code");
			t5 = text("obj.awesome = false");
			t6 = text(".");
			t7 = space();
			p1 = element("p");
			strong0 = element("strong");
			t8 = text("Question");
			t9 = text(": How do you know where and when ");
			code3 = element("code");
			t10 = text("obj.awesome");
			t11 = text(" is being accessed or modified?");
			t12 = space();
			hr0 = element("hr");
			t13 = space();
			p2 = element("p");
			strong1 = element("strong");
			t14 = text("So why is this important?");
			t15 = text(" If you are using frontend framework that does ");
			a0 = element("a");
			t16 = text("2-way binding");
			t17 = text(", eg: ");
			a1 = element("a");
			t18 = text("Angular");
			t19 = text(", ");
			a2 = element("a");
			t20 = text("Vue");
			t21 = text(", do you know how does the framework “watch” your ");
			code4 = element("code");
			t22 = text("state");
			t23 = text(" object? How does the framework knows when to update your DOM when you set some property of the ");
			code5 = element("code");
			t24 = text("state");
			t25 = text(" object?");
			t26 = space();
			pre0 = element("pre");
			t27 = space();
			hr1 = element("hr");
			t28 = space();
			p3 = element("p");
			strong2 = element("strong");
			t29 = text("Answer:");
			t30 = text(" You use ");
			a3 = element("a");
			code6 = element("code");
			t31 = text("Object.defineProperty()");
			t32 = text(".");
			t33 = space();
			p4 = element("p");
			code7 = element("code");
			t34 = text("Object.defineProperty(obj, prop, descriptor)");
			t35 = text(" allows us to define a property to an object with a descriptor for the property being defined.");
			t36 = space();
			p5 = element("p");
			t37 = text("Well, nothing special about defining a property of an object, you can do it easily with ");
			code8 = element("code");
			t38 = text("obj[prop] = value");
			t39 = text(". What so special about this ");
			code9 = element("code");
			t40 = text("Object.defineProperty()");
			t41 = text(" is the ");
			code10 = element("code");
			t42 = text("descriptor");
			t43 = text(" object that you pass in. Lets' take a look at what can be configured through the ");
			code11 = element("code");
			t44 = text("descriptor");
			t45 = text(":");
			t46 = space();
			ul = element("ul");
			li0 = element("li");
			p6 = element("p");
			code12 = element("code");
			t47 = text("enumerable");
			t48 = space();
			p7 = element("p");
			code13 = element("code");
			t49 = text("true");
			t50 = text(" if and only if this property shows up during enumeration of the properties on the corresponding object.");
			t51 = space();
			p8 = element("p");
			strong3 = element("strong");
			t52 = text("Defaults to ");
			code14 = element("code");
			t53 = text("false");
			t54 = text(".");
			t55 = space();
			p9 = element("p");
			t56 = text("If you have a property's ");
			code15 = element("code");
			t57 = text("enumerable");
			t58 = text(" set to ");
			code16 = element("code");
			t59 = text("false");
			t60 = text(", meaning you will not see the property when you do ");
			code17 = element("code");
			t61 = text("Object.keys(obj)");
			t62 = text(" or ");
			code18 = element("code");
			t63 = text("for (const key in obj) { ... }");
			t64 = space();
			li1 = element("li");
			p10 = element("p");
			code19 = element("code");
			t65 = text("writable");
			t66 = space();
			p11 = element("p");
			code20 = element("code");
			t67 = text("true");
			t68 = text(" if and only if the value associated with the property may be changed with an assignment operator.");
			t69 = space();
			p12 = element("p");
			strong4 = element("strong");
			t70 = text("Defaults to ");
			code21 = element("code");
			t71 = text("false");
			t72 = space();
			p13 = element("p");
			t73 = text("This allows us to create ");
			code22 = element("code");
			t74 = text("read-only");
			t75 = text(" property of an object.");
			t76 = space();
			li2 = element("li");
			p14 = element("p");
			code23 = element("code");
			t77 = text("get");
			t78 = space();
			p15 = element("p");
			t79 = text("A function which serves as a getter for the property, or ");
			code24 = element("code");
			t80 = text("undefined");
			t81 = text(" if there is no getter. The return value will be used as the value of the property.");
			t82 = space();
			p16 = element("p");
			strong5 = element("strong");
			t83 = text("Defaults to ");
			code25 = element("code");
			t84 = text("undefined");
			t85 = space();
			li3 = element("li");
			p17 = element("p");
			code26 = element("code");
			t86 = text("set");
			t87 = space();
			p18 = element("p");
			t88 = text("A function which serves as a setter for the property, or ");
			code27 = element("code");
			t89 = text("undefined");
			t90 = text(" if there is no setter. When the property is assigned to, this function is called with one argument (the value being assigned to the property).");
			t91 = space();
			p19 = element("p");
			strong6 = element("strong");
			t92 = text("Defaults to ");
			code28 = element("code");
			t93 = text("undefined");
			t94 = space();
			p20 = element("p");
			t95 = text("So, there you have it. What you need is to define the getter and setter function of the property, and they will be called when the property is accessed or being assigned to a value.");
			t96 = space();
			p21 = element("p");
			t97 = text("You can add a breakpoint via ");
			a4 = element("a");
			code29 = element("code");
			t98 = text("debugger;");
			t99 = text(" in your getter and setter function, to invoke the debugging feature of your development tools to look at the call stack.");
			t100 = space();
			p22 = element("p");
			t101 = text("Another way of looking at the call stack without using a debugger is to ");
			strong7 = element("strong");
			t102 = text("throw an Error");
			t103 = text(" in the getter and setter function.");
			t104 = space();
			p23 = element("p");
			t105 = text("Yes. You hear me right. Throwing an error will allow you to get the call stack when the error is thrown:");
			t106 = space();
			pre1 = element("pre");
			this.h();
		},
		l(nodes) {
			p0 = claim_element(nodes, "P", {});
			var p0_nodes = children(p0);
			t0 = claim_text(p0_nodes, "Say you defined an object ");
			code0 = claim_element(p0_nodes, "CODE", {});
			var code0_nodes = children(code0);
			t1 = claim_text(code0_nodes, "const obj = { awesome: true }");
			code0_nodes.forEach(detach);
			t2 = claim_text(p0_nodes, " so that anywhere within your code, you can access the value of ");
			code1 = claim_element(p0_nodes, "CODE", {});
			var code1_nodes = children(code1);
			t3 = claim_text(code1_nodes, "obj.awesome");
			code1_nodes.forEach(detach);
			t4 = claim_text(p0_nodes, " as well as modify its value via ");
			code2 = claim_element(p0_nodes, "CODE", {});
			var code2_nodes = children(code2);
			t5 = claim_text(code2_nodes, "obj.awesome = false");
			code2_nodes.forEach(detach);
			t6 = claim_text(p0_nodes, ".");
			p0_nodes.forEach(detach);
			t7 = claim_space(nodes);
			p1 = claim_element(nodes, "P", {});
			var p1_nodes = children(p1);
			strong0 = claim_element(p1_nodes, "STRONG", {});
			var strong0_nodes = children(strong0);
			t8 = claim_text(strong0_nodes, "Question");
			strong0_nodes.forEach(detach);
			t9 = claim_text(p1_nodes, ": How do you know where and when ");
			code3 = claim_element(p1_nodes, "CODE", {});
			var code3_nodes = children(code3);
			t10 = claim_text(code3_nodes, "obj.awesome");
			code3_nodes.forEach(detach);
			t11 = claim_text(p1_nodes, " is being accessed or modified?");
			p1_nodes.forEach(detach);
			t12 = claim_space(nodes);
			hr0 = claim_element(nodes, "HR", {});
			t13 = claim_space(nodes);
			p2 = claim_element(nodes, "P", {});
			var p2_nodes = children(p2);
			strong1 = claim_element(p2_nodes, "STRONG", {});
			var strong1_nodes = children(strong1);
			t14 = claim_text(strong1_nodes, "So why is this important?");
			strong1_nodes.forEach(detach);
			t15 = claim_text(p2_nodes, " If you are using frontend framework that does ");
			a0 = claim_element(p2_nodes, "A", { href: true, rel: true });
			var a0_nodes = children(a0);
			t16 = claim_text(a0_nodes, "2-way binding");
			a0_nodes.forEach(detach);
			t17 = claim_text(p2_nodes, ", eg: ");
			a1 = claim_element(p2_nodes, "A", { href: true, rel: true });
			var a1_nodes = children(a1);
			t18 = claim_text(a1_nodes, "Angular");
			a1_nodes.forEach(detach);
			t19 = claim_text(p2_nodes, ", ");
			a2 = claim_element(p2_nodes, "A", { href: true, rel: true });
			var a2_nodes = children(a2);
			t20 = claim_text(a2_nodes, "Vue");
			a2_nodes.forEach(detach);
			t21 = claim_text(p2_nodes, ", do you know how does the framework “watch” your ");
			code4 = claim_element(p2_nodes, "CODE", {});
			var code4_nodes = children(code4);
			t22 = claim_text(code4_nodes, "state");
			code4_nodes.forEach(detach);
			t23 = claim_text(p2_nodes, " object? How does the framework knows when to update your DOM when you set some property of the ");
			code5 = claim_element(p2_nodes, "CODE", {});
			var code5_nodes = children(code5);
			t24 = claim_text(code5_nodes, "state");
			code5_nodes.forEach(detach);
			t25 = claim_text(p2_nodes, " object?");
			p2_nodes.forEach(detach);
			t26 = claim_space(nodes);
			pre0 = claim_element(nodes, "PRE", { class: true });
			var pre0_nodes = children(pre0);
			pre0_nodes.forEach(detach);
			t27 = claim_space(nodes);
			hr1 = claim_element(nodes, "HR", {});
			t28 = claim_space(nodes);
			p3 = claim_element(nodes, "P", {});
			var p3_nodes = children(p3);
			strong2 = claim_element(p3_nodes, "STRONG", {});
			var strong2_nodes = children(strong2);
			t29 = claim_text(strong2_nodes, "Answer:");
			strong2_nodes.forEach(detach);
			t30 = claim_text(p3_nodes, " You use ");
			a3 = claim_element(p3_nodes, "A", { href: true, rel: true });
			var a3_nodes = children(a3);
			code6 = claim_element(a3_nodes, "CODE", {});
			var code6_nodes = children(code6);
			t31 = claim_text(code6_nodes, "Object.defineProperty()");
			code6_nodes.forEach(detach);
			a3_nodes.forEach(detach);
			t32 = claim_text(p3_nodes, ".");
			p3_nodes.forEach(detach);
			t33 = claim_space(nodes);
			p4 = claim_element(nodes, "P", {});
			var p4_nodes = children(p4);
			code7 = claim_element(p4_nodes, "CODE", {});
			var code7_nodes = children(code7);
			t34 = claim_text(code7_nodes, "Object.defineProperty(obj, prop, descriptor)");
			code7_nodes.forEach(detach);
			t35 = claim_text(p4_nodes, " allows us to define a property to an object with a descriptor for the property being defined.");
			p4_nodes.forEach(detach);
			t36 = claim_space(nodes);
			p5 = claim_element(nodes, "P", {});
			var p5_nodes = children(p5);
			t37 = claim_text(p5_nodes, "Well, nothing special about defining a property of an object, you can do it easily with ");
			code8 = claim_element(p5_nodes, "CODE", {});
			var code8_nodes = children(code8);
			t38 = claim_text(code8_nodes, "obj[prop] = value");
			code8_nodes.forEach(detach);
			t39 = claim_text(p5_nodes, ". What so special about this ");
			code9 = claim_element(p5_nodes, "CODE", {});
			var code9_nodes = children(code9);
			t40 = claim_text(code9_nodes, "Object.defineProperty()");
			code9_nodes.forEach(detach);
			t41 = claim_text(p5_nodes, " is the ");
			code10 = claim_element(p5_nodes, "CODE", {});
			var code10_nodes = children(code10);
			t42 = claim_text(code10_nodes, "descriptor");
			code10_nodes.forEach(detach);
			t43 = claim_text(p5_nodes, " object that you pass in. Lets' take a look at what can be configured through the ");
			code11 = claim_element(p5_nodes, "CODE", {});
			var code11_nodes = children(code11);
			t44 = claim_text(code11_nodes, "descriptor");
			code11_nodes.forEach(detach);
			t45 = claim_text(p5_nodes, ":");
			p5_nodes.forEach(detach);
			t46 = claim_space(nodes);
			ul = claim_element(nodes, "UL", {});
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", {});
			var li0_nodes = children(li0);
			p6 = claim_element(li0_nodes, "P", {});
			var p6_nodes = children(p6);
			code12 = claim_element(p6_nodes, "CODE", {});
			var code12_nodes = children(code12);
			t47 = claim_text(code12_nodes, "enumerable");
			code12_nodes.forEach(detach);
			p6_nodes.forEach(detach);
			t48 = claim_space(li0_nodes);
			p7 = claim_element(li0_nodes, "P", {});
			var p7_nodes = children(p7);
			code13 = claim_element(p7_nodes, "CODE", {});
			var code13_nodes = children(code13);
			t49 = claim_text(code13_nodes, "true");
			code13_nodes.forEach(detach);
			t50 = claim_text(p7_nodes, " if and only if this property shows up during enumeration of the properties on the corresponding object.");
			p7_nodes.forEach(detach);
			t51 = claim_space(li0_nodes);
			p8 = claim_element(li0_nodes, "P", {});
			var p8_nodes = children(p8);
			strong3 = claim_element(p8_nodes, "STRONG", {});
			var strong3_nodes = children(strong3);
			t52 = claim_text(strong3_nodes, "Defaults to ");
			code14 = claim_element(strong3_nodes, "CODE", {});
			var code14_nodes = children(code14);
			t53 = claim_text(code14_nodes, "false");
			code14_nodes.forEach(detach);
			strong3_nodes.forEach(detach);
			t54 = claim_text(p8_nodes, ".");
			p8_nodes.forEach(detach);
			t55 = claim_space(li0_nodes);
			p9 = claim_element(li0_nodes, "P", {});
			var p9_nodes = children(p9);
			t56 = claim_text(p9_nodes, "If you have a property's ");
			code15 = claim_element(p9_nodes, "CODE", {});
			var code15_nodes = children(code15);
			t57 = claim_text(code15_nodes, "enumerable");
			code15_nodes.forEach(detach);
			t58 = claim_text(p9_nodes, " set to ");
			code16 = claim_element(p9_nodes, "CODE", {});
			var code16_nodes = children(code16);
			t59 = claim_text(code16_nodes, "false");
			code16_nodes.forEach(detach);
			t60 = claim_text(p9_nodes, ", meaning you will not see the property when you do ");
			code17 = claim_element(p9_nodes, "CODE", {});
			var code17_nodes = children(code17);
			t61 = claim_text(code17_nodes, "Object.keys(obj)");
			code17_nodes.forEach(detach);
			t62 = claim_text(p9_nodes, " or ");
			code18 = claim_element(p9_nodes, "CODE", {});
			var code18_nodes = children(code18);
			t63 = claim_text(code18_nodes, "for (const key in obj) { ... }");
			code18_nodes.forEach(detach);
			p9_nodes.forEach(detach);
			li0_nodes.forEach(detach);
			t64 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", {});
			var li1_nodes = children(li1);
			p10 = claim_element(li1_nodes, "P", {});
			var p10_nodes = children(p10);
			code19 = claim_element(p10_nodes, "CODE", {});
			var code19_nodes = children(code19);
			t65 = claim_text(code19_nodes, "writable");
			code19_nodes.forEach(detach);
			p10_nodes.forEach(detach);
			t66 = claim_space(li1_nodes);
			p11 = claim_element(li1_nodes, "P", {});
			var p11_nodes = children(p11);
			code20 = claim_element(p11_nodes, "CODE", {});
			var code20_nodes = children(code20);
			t67 = claim_text(code20_nodes, "true");
			code20_nodes.forEach(detach);
			t68 = claim_text(p11_nodes, " if and only if the value associated with the property may be changed with an assignment operator.");
			p11_nodes.forEach(detach);
			t69 = claim_space(li1_nodes);
			p12 = claim_element(li1_nodes, "P", {});
			var p12_nodes = children(p12);
			strong4 = claim_element(p12_nodes, "STRONG", {});
			var strong4_nodes = children(strong4);
			t70 = claim_text(strong4_nodes, "Defaults to ");
			code21 = claim_element(strong4_nodes, "CODE", {});
			var code21_nodes = children(code21);
			t71 = claim_text(code21_nodes, "false");
			code21_nodes.forEach(detach);
			strong4_nodes.forEach(detach);
			p12_nodes.forEach(detach);
			t72 = claim_space(li1_nodes);
			p13 = claim_element(li1_nodes, "P", {});
			var p13_nodes = children(p13);
			t73 = claim_text(p13_nodes, "This allows us to create ");
			code22 = claim_element(p13_nodes, "CODE", {});
			var code22_nodes = children(code22);
			t74 = claim_text(code22_nodes, "read-only");
			code22_nodes.forEach(detach);
			t75 = claim_text(p13_nodes, " property of an object.");
			p13_nodes.forEach(detach);
			li1_nodes.forEach(detach);
			t76 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", {});
			var li2_nodes = children(li2);
			p14 = claim_element(li2_nodes, "P", {});
			var p14_nodes = children(p14);
			code23 = claim_element(p14_nodes, "CODE", {});
			var code23_nodes = children(code23);
			t77 = claim_text(code23_nodes, "get");
			code23_nodes.forEach(detach);
			p14_nodes.forEach(detach);
			t78 = claim_space(li2_nodes);
			p15 = claim_element(li2_nodes, "P", {});
			var p15_nodes = children(p15);
			t79 = claim_text(p15_nodes, "A function which serves as a getter for the property, or ");
			code24 = claim_element(p15_nodes, "CODE", {});
			var code24_nodes = children(code24);
			t80 = claim_text(code24_nodes, "undefined");
			code24_nodes.forEach(detach);
			t81 = claim_text(p15_nodes, " if there is no getter. The return value will be used as the value of the property.");
			p15_nodes.forEach(detach);
			t82 = claim_space(li2_nodes);
			p16 = claim_element(li2_nodes, "P", {});
			var p16_nodes = children(p16);
			strong5 = claim_element(p16_nodes, "STRONG", {});
			var strong5_nodes = children(strong5);
			t83 = claim_text(strong5_nodes, "Defaults to ");
			code25 = claim_element(strong5_nodes, "CODE", {});
			var code25_nodes = children(code25);
			t84 = claim_text(code25_nodes, "undefined");
			code25_nodes.forEach(detach);
			strong5_nodes.forEach(detach);
			p16_nodes.forEach(detach);
			li2_nodes.forEach(detach);
			t85 = claim_space(ul_nodes);
			li3 = claim_element(ul_nodes, "LI", {});
			var li3_nodes = children(li3);
			p17 = claim_element(li3_nodes, "P", {});
			var p17_nodes = children(p17);
			code26 = claim_element(p17_nodes, "CODE", {});
			var code26_nodes = children(code26);
			t86 = claim_text(code26_nodes, "set");
			code26_nodes.forEach(detach);
			p17_nodes.forEach(detach);
			t87 = claim_space(li3_nodes);
			p18 = claim_element(li3_nodes, "P", {});
			var p18_nodes = children(p18);
			t88 = claim_text(p18_nodes, "A function which serves as a setter for the property, or ");
			code27 = claim_element(p18_nodes, "CODE", {});
			var code27_nodes = children(code27);
			t89 = claim_text(code27_nodes, "undefined");
			code27_nodes.forEach(detach);
			t90 = claim_text(p18_nodes, " if there is no setter. When the property is assigned to, this function is called with one argument (the value being assigned to the property).");
			p18_nodes.forEach(detach);
			t91 = claim_space(li3_nodes);
			p19 = claim_element(li3_nodes, "P", {});
			var p19_nodes = children(p19);
			strong6 = claim_element(p19_nodes, "STRONG", {});
			var strong6_nodes = children(strong6);
			t92 = claim_text(strong6_nodes, "Defaults to ");
			code28 = claim_element(strong6_nodes, "CODE", {});
			var code28_nodes = children(code28);
			t93 = claim_text(code28_nodes, "undefined");
			code28_nodes.forEach(detach);
			strong6_nodes.forEach(detach);
			p19_nodes.forEach(detach);
			li3_nodes.forEach(detach);
			ul_nodes.forEach(detach);
			t94 = claim_space(nodes);
			p20 = claim_element(nodes, "P", {});
			var p20_nodes = children(p20);
			t95 = claim_text(p20_nodes, "So, there you have it. What you need is to define the getter and setter function of the property, and they will be called when the property is accessed or being assigned to a value.");
			p20_nodes.forEach(detach);
			t96 = claim_space(nodes);
			p21 = claim_element(nodes, "P", {});
			var p21_nodes = children(p21);
			t97 = claim_text(p21_nodes, "You can add a breakpoint via ");
			a4 = claim_element(p21_nodes, "A", { href: true, rel: true });
			var a4_nodes = children(a4);
			code29 = claim_element(a4_nodes, "CODE", {});
			var code29_nodes = children(code29);
			t98 = claim_text(code29_nodes, "debugger;");
			code29_nodes.forEach(detach);
			a4_nodes.forEach(detach);
			t99 = claim_text(p21_nodes, " in your getter and setter function, to invoke the debugging feature of your development tools to look at the call stack.");
			p21_nodes.forEach(detach);
			t100 = claim_space(nodes);
			p22 = claim_element(nodes, "P", {});
			var p22_nodes = children(p22);
			t101 = claim_text(p22_nodes, "Another way of looking at the call stack without using a debugger is to ");
			strong7 = claim_element(p22_nodes, "STRONG", {});
			var strong7_nodes = children(strong7);
			t102 = claim_text(strong7_nodes, "throw an Error");
			strong7_nodes.forEach(detach);
			t103 = claim_text(p22_nodes, " in the getter and setter function.");
			p22_nodes.forEach(detach);
			t104 = claim_space(nodes);
			p23 = claim_element(nodes, "P", {});
			var p23_nodes = children(p23);
			t105 = claim_text(p23_nodes, "Yes. You hear me right. Throwing an error will allow you to get the call stack when the error is thrown:");
			p23_nodes.forEach(detach);
			t106 = claim_space(nodes);
			pre1 = claim_element(nodes, "PRE", { class: true });
			var pre1_nodes = children(pre1);
			pre1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a0, "href", "https://stackoverflow.com/a/13504965");
			attr(a0, "rel", "nofollow");
			attr(a1, "href", "https://angular.io/guide/ajs-quick-reference#ng-model");
			attr(a1, "rel", "nofollow");
			attr(a2, "href", "https://vuejs.org/v2/guide/forms.html");
			attr(a2, "rel", "nofollow");
			attr(pre0, "class", "language-js");
			attr(a3, "href", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty");
			attr(a3, "rel", "nofollow");
			attr(a4, "href", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger");
			attr(a4, "rel", "nofollow");
			attr(pre1, "class", "language-js");
		},
		m(target, anchor) {
			insert(target, p0, anchor);
			append(p0, t0);
			append(p0, code0);
			append(code0, t1);
			append(p0, t2);
			append(p0, code1);
			append(code1, t3);
			append(p0, t4);
			append(p0, code2);
			append(code2, t5);
			append(p0, t6);
			insert(target, t7, anchor);
			insert(target, p1, anchor);
			append(p1, strong0);
			append(strong0, t8);
			append(p1, t9);
			append(p1, code3);
			append(code3, t10);
			append(p1, t11);
			insert(target, t12, anchor);
			insert(target, hr0, anchor);
			insert(target, t13, anchor);
			insert(target, p2, anchor);
			append(p2, strong1);
			append(strong1, t14);
			append(p2, t15);
			append(p2, a0);
			append(a0, t16);
			append(p2, t17);
			append(p2, a1);
			append(a1, t18);
			append(p2, t19);
			append(p2, a2);
			append(a2, t20);
			append(p2, t21);
			append(p2, code4);
			append(code4, t22);
			append(p2, t23);
			append(p2, code5);
			append(code5, t24);
			append(p2, t25);
			insert(target, t26, anchor);
			insert(target, pre0, anchor);
			pre0.innerHTML = raw0_value;
			insert(target, t27, anchor);
			insert(target, hr1, anchor);
			insert(target, t28, anchor);
			insert(target, p3, anchor);
			append(p3, strong2);
			append(strong2, t29);
			append(p3, t30);
			append(p3, a3);
			append(a3, code6);
			append(code6, t31);
			append(p3, t32);
			insert(target, t33, anchor);
			insert(target, p4, anchor);
			append(p4, code7);
			append(code7, t34);
			append(p4, t35);
			insert(target, t36, anchor);
			insert(target, p5, anchor);
			append(p5, t37);
			append(p5, code8);
			append(code8, t38);
			append(p5, t39);
			append(p5, code9);
			append(code9, t40);
			append(p5, t41);
			append(p5, code10);
			append(code10, t42);
			append(p5, t43);
			append(p5, code11);
			append(code11, t44);
			append(p5, t45);
			insert(target, t46, anchor);
			insert(target, ul, anchor);
			append(ul, li0);
			append(li0, p6);
			append(p6, code12);
			append(code12, t47);
			append(li0, t48);
			append(li0, p7);
			append(p7, code13);
			append(code13, t49);
			append(p7, t50);
			append(li0, t51);
			append(li0, p8);
			append(p8, strong3);
			append(strong3, t52);
			append(strong3, code14);
			append(code14, t53);
			append(p8, t54);
			append(li0, t55);
			append(li0, p9);
			append(p9, t56);
			append(p9, code15);
			append(code15, t57);
			append(p9, t58);
			append(p9, code16);
			append(code16, t59);
			append(p9, t60);
			append(p9, code17);
			append(code17, t61);
			append(p9, t62);
			append(p9, code18);
			append(code18, t63);
			append(ul, t64);
			append(ul, li1);
			append(li1, p10);
			append(p10, code19);
			append(code19, t65);
			append(li1, t66);
			append(li1, p11);
			append(p11, code20);
			append(code20, t67);
			append(p11, t68);
			append(li1, t69);
			append(li1, p12);
			append(p12, strong4);
			append(strong4, t70);
			append(strong4, code21);
			append(code21, t71);
			append(li1, t72);
			append(li1, p13);
			append(p13, t73);
			append(p13, code22);
			append(code22, t74);
			append(p13, t75);
			append(ul, t76);
			append(ul, li2);
			append(li2, p14);
			append(p14, code23);
			append(code23, t77);
			append(li2, t78);
			append(li2, p15);
			append(p15, t79);
			append(p15, code24);
			append(code24, t80);
			append(p15, t81);
			append(li2, t82);
			append(li2, p16);
			append(p16, strong5);
			append(strong5, t83);
			append(strong5, code25);
			append(code25, t84);
			append(ul, t85);
			append(ul, li3);
			append(li3, p17);
			append(p17, code26);
			append(code26, t86);
			append(li3, t87);
			append(li3, p18);
			append(p18, t88);
			append(p18, code27);
			append(code27, t89);
			append(p18, t90);
			append(li3, t91);
			append(li3, p19);
			append(p19, strong6);
			append(strong6, t92);
			append(strong6, code28);
			append(code28, t93);
			insert(target, t94, anchor);
			insert(target, p20, anchor);
			append(p20, t95);
			insert(target, t96, anchor);
			insert(target, p21, anchor);
			append(p21, t97);
			append(p21, a4);
			append(a4, code29);
			append(code29, t98);
			append(p21, t99);
			insert(target, t100, anchor);
			insert(target, p22, anchor);
			append(p22, t101);
			append(p22, strong7);
			append(strong7, t102);
			append(p22, t103);
			insert(target, t104, anchor);
			insert(target, p23, anchor);
			append(p23, t105);
			insert(target, t106, anchor);
			insert(target, pre1, anchor);
			pre1.innerHTML = raw1_value;
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(p0);
			if (detaching) detach(t7);
			if (detaching) detach(p1);
			if (detaching) detach(t12);
			if (detaching) detach(hr0);
			if (detaching) detach(t13);
			if (detaching) detach(p2);
			if (detaching) detach(t26);
			if (detaching) detach(pre0);
			if (detaching) detach(t27);
			if (detaching) detach(hr1);
			if (detaching) detach(t28);
			if (detaching) detach(p3);
			if (detaching) detach(t33);
			if (detaching) detach(p4);
			if (detaching) detach(t36);
			if (detaching) detach(p5);
			if (detaching) detach(t46);
			if (detaching) detach(ul);
			if (detaching) detach(t94);
			if (detaching) detach(p20);
			if (detaching) detach(t96);
			if (detaching) detach(p21);
			if (detaching) detach(t100);
			if (detaching) detach(p22);
			if (detaching) detach(t104);
			if (detaching) detach(p23);
			if (detaching) detach(t106);
			if (detaching) detach(pre1);
		}
	};
}

function create_fragment$3(ctx) {
	let layout_mdsvex_default;
	let current;
	const layout_mdsvex_default_spread_levels = [metadata];

	let layout_mdsvex_default_props = {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	};

	for (let i = 0; i < layout_mdsvex_default_spread_levels.length; i += 1) {
		layout_mdsvex_default_props = assign(layout_mdsvex_default_props, layout_mdsvex_default_spread_levels[i]);
	}

	layout_mdsvex_default = new Blog({ props: layout_mdsvex_default_props });

	return {
		c() {
			create_component(layout_mdsvex_default.$$.fragment);
		},
		l(nodes) {
			claim_component(layout_mdsvex_default.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(layout_mdsvex_default, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const layout_mdsvex_default_changes = (dirty & /*metadata*/ 0)
			? get_spread_update(layout_mdsvex_default_spread_levels, [get_spread_object(metadata)])
			: {};

			if (dirty & /*$$scope*/ 1) {
				layout_mdsvex_default_changes.$$scope = { dirty, ctx };
			}

			layout_mdsvex_default.$set(layout_mdsvex_default_changes);
		},
		i(local) {
			if (current) return;
			transition_in(layout_mdsvex_default.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(layout_mdsvex_default.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(layout_mdsvex_default, detaching);
		}
	};
}

const metadata = {
	"title": "Who accessed my property?",
	"date": "2019-03-24T08:00:00Z",
	"description": "How to know when object property get accessed or modified",
	"slug": "who-accessed-my-property",
	"type": "blog"
};

class Page_markup extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment$3, safe_not_equal, {});
	}
}

const app = new Page_markup({
  target: document.querySelector('#app'),
  hydrate: true,
});
