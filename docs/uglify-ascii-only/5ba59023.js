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
function get_current_component() {
    if (!current_component)
        throw new Error(`Function called outside component initialization`);
    return current_component;
}
function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
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

var __build_img_webp__6 = "5824c5e3e9173f25.webp";

var __build_img__6 = "5824c5e3e9173f25.png";

var __build_img_webp__5 = "4a468cb0933b0473.webp";

var __build_img__5 = "4a468cb0933b0473.png";

var __build_img_webp__4 = "cec8624969909357.webp";

var __build_img__4 = "cec8624969909357.png";

var __build_img_webp__3 = "e40d56e0e272da42.webp";

var __build_img__3 = "e40d56e0e272da42.png";

var __build_img_webp__2 = "aeb3ba002a361331.webp";

var __build_img__2 = "aeb3ba002a361331.png";

var __build_img_webp__1 = "7afb27b2027d0eb4.webp";

var __build_img__1 = "7afb27b2027d0eb4.png";

var __build_img_webp__0 = "adf2abda876019fd.webp";

var __build_img__0 = "adf2abda876019fd.png";

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
	let t12;
	let t13;
	let li7;
	let a7;
	let svg0;
	let path0;
	let t14;
	let a8;
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
			t6 = text("Videos");
			t7 = space();
			li4 = element("li");
			a4 = element("a");
			t8 = text("Talks");
			t9 = space();
			li5 = element("li");
			a5 = element("a");
			t10 = text("Notes");
			t11 = space();
			li6 = element("li");
			a6 = element("a");
			t12 = text("Newsletter");
			t13 = space();
			li7 = element("li");
			a7 = element("a");
			svg0 = svg_element("svg");
			path0 = svg_element("path");
			t14 = space();
			a8 = element("a");
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
			t6 = claim_text(a3_nodes, "Videos");
			a3_nodes.forEach(detach);
			li3_nodes.forEach(detach);
			t7 = claim_space(ul_nodes);
			li4 = claim_element(ul_nodes, "LI", { class: true });
			var li4_nodes = children(li4);
			a4 = claim_element(li4_nodes, "A", { href: true, class: true });
			var a4_nodes = children(a4);
			t8 = claim_text(a4_nodes, "Talks");
			a4_nodes.forEach(detach);
			li4_nodes.forEach(detach);
			t9 = claim_space(ul_nodes);
			li5 = claim_element(ul_nodes, "LI", { class: true });
			var li5_nodes = children(li5);
			a5 = claim_element(li5_nodes, "A", { href: true, class: true });
			var a5_nodes = children(a5);
			t10 = claim_text(a5_nodes, "Notes");
			a5_nodes.forEach(detach);
			li5_nodes.forEach(detach);
			t11 = claim_space(ul_nodes);
			li6 = claim_element(ul_nodes, "LI", { class: true });
			var li6_nodes = children(li6);
			a6 = claim_element(li6_nodes, "A", { href: true, class: true });
			var a6_nodes = children(a6);
			t12 = claim_text(a6_nodes, "Newsletter");
			a6_nodes.forEach(detach);
			li6_nodes.forEach(detach);
			t13 = claim_space(ul_nodes);
			li7 = claim_element(ul_nodes, "LI", { class: true });
			var li7_nodes = children(li7);

			a7 = claim_element(li7_nodes, "A", {
				"aria-label": true,
				href: true,
				class: true
			});

			var a7_nodes = children(a7);

			svg0 = claim_element(
				a7_nodes,
				"svg",
				{
					viewBox: true,
					width: true,
					height: true,
					class: true
				},
				1
			);

			var svg0_nodes = children(svg0);
			path0 = claim_element(svg0_nodes, "path", { d: true }, 1);
			children(path0).forEach(detach);
			svg0_nodes.forEach(detach);
			a7_nodes.forEach(detach);
			t14 = claim_space(li7_nodes);

			a8 = claim_element(li7_nodes, "A", {
				"aria-label": true,
				href: true,
				class: true
			});

			var a8_nodes = children(a8);

			svg1 = claim_element(
				a8_nodes,
				"svg",
				{
					viewBox: true,
					width: true,
					height: true,
					class: true
				},
				1
			);

			var svg1_nodes = children(svg1);
			path1 = claim_element(svg1_nodes, "path", { d: true }, 1);
			children(path1).forEach(detach);
			svg1_nodes.forEach(detach);
			a8_nodes.forEach(detach);
			li7_nodes.forEach(detach);
			ul_nodes.forEach(detach);
			nav_nodes.forEach(detach);
			header_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a0, "href", "/");
			attr(a0, "class", "svelte-1axnxyd");
			attr(li0, "class", "svelte-1axnxyd");
			attr(a1, "href", "/about");
			attr(a1, "class", "svelte-1axnxyd");
			attr(li1, "class", "svelte-1axnxyd");
			attr(a2, "href", "/blogs");
			attr(a2, "class", "svelte-1axnxyd");
			attr(li2, "class", "svelte-1axnxyd");
			attr(a3, "href", "/videos");
			attr(a3, "class", "svelte-1axnxyd");
			attr(li3, "class", "svelte-1axnxyd");
			attr(a4, "href", "/talks");
			attr(a4, "class", "svelte-1axnxyd");
			attr(li4, "class", "svelte-1axnxyd");
			attr(a5, "href", "/notes");
			attr(a5, "class", "svelte-1axnxyd");
			attr(li5, "class", "svelte-1axnxyd");
			attr(a6, "href", "/newsletter");
			attr(a6, "class", "svelte-1axnxyd");
			attr(li6, "class", "svelte-1axnxyd");
			attr(path0, "d", "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z");
			attr(svg0, "viewBox", "0 0 24 24");
			attr(svg0, "width", "1em");
			attr(svg0, "height", "1em");
			attr(svg0, "class", "svelte-1axnxyd");
			attr(a7, "aria-label", "Twitter account");
			attr(a7, "href", "https://twitter.com/lihautan");
			attr(a7, "class", "svelte-1axnxyd");
			attr(path1, "d", "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0\n    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07\n    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65\n    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42\n    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22");
			attr(svg1, "viewBox", "0 0 24 24");
			attr(svg1, "width", "1em");
			attr(svg1, "height", "1em");
			attr(svg1, "class", "svelte-1axnxyd");
			attr(a8, "aria-label", "Github account");
			attr(a8, "href", "https://github.com/tanhauhau");
			attr(a8, "class", "svelte-1axnxyd");
			attr(li7, "class", "social svelte-1axnxyd");
			attr(ul, "class", "svelte-1axnxyd");
			attr(header, "class", "svelte-1axnxyd");
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
			append(a6, t12);
			append(ul, t13);
			append(ul, li7);
			append(li7, a7);
			append(a7, svg0);
			append(svg0, path0);
			append(li7, t14);
			append(li7, a8);
			append(a8, svg1);
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

/* src/layout/CarbonAd.svelte generated by Svelte v3.24.0 */

function instance$1($$self) {
	onMount(() => {
		setTimeout(
			() => {
				if (window.innerWidth > 1080) {
					const script = document.createElement("script");
					script.async = true;
					script.type = "text/javascript";
					script.src = "//cdn.carbonads.com/carbon.js?serve=CE7ITK3E&placement=lihautancom";
					script.id = "_carbonads_js";
					document.body.appendChild(script);
				}
			},
			5000
		);

		return () => {
			try {
				const ad = document.getElementById("carbonads");
				ad.parentNode.removeChild(ad);
			} catch(error) {
				
			} // ignore them
		};
	});

	return [];
}

class CarbonAd extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$1, null, safe_not_equal, {});
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

// (34:2) {#each tags as tag}
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

// (73:2) {#each tags as tag}
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
			attr(span, "class", "svelte-142ghl5");
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
				"name": "Homepage",
				"position": 1
			},
			{
				"@type": "ListItem",
				"item": {
					"@id": "https%3A%2F%2Flihautan.com%2Fuglify-ascii-only",
					"name": /*title*/ ctx[0]
				},
				"name": /*title*/ ctx[0],
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
	let carbonad;
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
	carbonad = new CarbonAd({});

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
			create_component(carbonad.$$.fragment);
			this.h();
		},
		l(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-15e3uyc\"]", document.head);
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
			t8 = claim_space(footer_nodes);
			claim_component(carbonad.$$.fragment, footer_nodes);
			footer_nodes.forEach(detach);
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
			attr(meta11, "content", "https%3A%2F%2Flihautan.com%2Fuglify-ascii-only");
			attr(meta12, "itemprop", "image");
			attr(meta12, "content", image);
			html_tag = new HtmlTag(html_anchor);
			html_tag_1 = new HtmlTag(html_anchor_1);
			attr(a, "href", "#content");
			attr(a, "class", "skip svelte-142ghl5");
			attr(main, "id", "content");
			attr(main, "class", "blog svelte-142ghl5");
			attr(footer, "class", "svelte-142ghl5");
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
			append(footer, t8);
			mount_component(carbonad, footer, null);
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
						"name": "Homepage",
						"position": 1
					},
					{
						"@type": "ListItem",
						"item": {
							"@id": "https%3A%2F%2Flihautan.com%2Fuglify-ascii-only",
							"name": /*title*/ ctx[0]
						},
						"name": /*title*/ ctx[0],
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
			transition_in(carbonad.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(header.$$.fragment, local);
			transition_out(default_slot, local);
			transition_out(newsletter.$$.fragment, local);
			transition_out(carbonad.$$.fragment, local);
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
			destroy_component(carbonad);
		}
	};
}

function instance$2($$self, $$props, $$invalidate) {
	let { title = "" } = $$props;
	let { description = "" } = $$props;
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
		init(this, options, instance$2, create_fragment$2, safe_not_equal, { title: 0, description: 1, tags: 2 });
	}
}

/* content/blog/uglify-ascii-only/@@page-markup.svelte generated by Svelte v3.24.0 */

function create_default_slot(ctx) {
	let section0;
	let ul;
	let li;
	let a0;
	let t0;
	let t1;
	let p0;
	let t2;
	let t3;
	let p1;
	let t4;
	let t5;
	let p2;
	let picture0;
	let source0;
	let source1;
	let img0;
	let t6;
	let p3;
	let t7;
	let t8;
	let p4;
	let picture1;
	let source2;
	let source3;
	let img1;
	let t9;
	let p5;
	let t10;
	let t11;
	let p6;
	let picture2;
	let source4;
	let source5;
	let img2;
	let t12;
	let p7;
	let t13;
	let code0;
	let t14;
	let t15;
	let t16;
	let p8;
	let picture3;
	let source6;
	let source7;
	let img3;
	let t17;
	let p9;
	let t18;
	let t19;
	let p10;
	let t20;
	let a1;
	let t21;
	let t22;
	let t23;
	let p11;
	let picture4;
	let source8;
	let source9;
	let img4;
	let t24;
	let p12;
	let t25;
	let t26;
	let hr0;
	let t27;
	let p13;
	let t28;
	let strong0;
	let t29;
	let t30;
	let strong1;
	let t31;
	let t32;
	let t33;
	let p14;
	let t34;
	let code1;
	let t35;
	let t36;
	let t37;
	let p15;
	let t38;
	let a2;
	let t39;
	let t40;
	let a3;
	let t41;
	let t42;
	let t43;
	let p16;
	let picture5;
	let source10;
	let source11;
	let img5;
	let t44;
	let p17;
	let t45;
	let a4;
	let t46;
	let t47;
	let t48;
	let p18;
	let picture6;
	let source12;
	let source13;
	let img6;
	let t49;
	let p19;
	let t50;
	let code2;
	let t51;
	let t52;
	let a5;
	let t53;
	let t54;
	let code3;
	let t55;
	let t56;
	let code4;
	let t57;
	let t58;
	let code5;
	let t59;
	let t60;
	let code6;
	let t61;
	let t62;
	let t63;
	let pre;

	let raw_value = `<code class="language-js"><span class="token keyword">const</span> UglifyJsPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'uglifyjs-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">//...</span>
  optimization<span class="token punctuation">:</span> <span class="token punctuation">&#123;</span>
    minimizer<span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token class-name">UglifyJsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
      uglifyOptions<span class="token punctuation">:</span> <span class="token punctuation">&#123;</span>
<span class="prism-highlight-code-line">        output<span class="token punctuation">:</span> <span class="token punctuation">&#123;</span></span>
<span class="prism-highlight-code-line">          <span class="token comment">// true for &#96;ascii_only&#96;</span></span>
<span class="prism-highlight-code-line">          ascii_only<span class="token punctuation">:</span> <span class="token boolean">true</span></span>
<span class="prism-highlight-code-line">        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span></span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>` + "";

	let t64;
	let hr1;
	let t65;
	let section1;
	let h2;
	let a6;
	let t66;
	let t67;
	let hr2;
	let t68;
	let p20;
	let t69;
	let code7;
	let t70;
	let t71;
	let t72;
	let p21;
	let t73;
	let em;
	let t74;
	let t75;
	let code8;
	let t76;
	let t77;

	return {
		c() {
			section0 = element("section");
			ul = element("ul");
			li = element("li");
			a0 = element("a");
			t0 = text("TIL: UglifyJs ascii_only option, use it when you want to escape Unicode characters.");
			t1 = space();
			p0 = element("p");
			t2 = text("The background story");
			t3 = space();
			p1 = element("p");
			t4 = text("I was working on a chrome extension, and trying to add some emojis 😍😀😎 into the extension, however I realised the 😍😀😎 are not rendered correctly!");
			t5 = space();
			p2 = element("p");
			picture0 = element("picture");
			source0 = element("source");
			source1 = element("source");
			img0 = element("img");
			t6 = space();
			p3 = element("p");
			t7 = text("And so I inspect the source code loaded into the chrome extension, it wasn’t loaded correctly as well!");
			t8 = space();
			p4 = element("p");
			picture1 = element("picture");
			source2 = element("source");
			source3 = element("source");
			img1 = element("img");
			t9 = space();
			p5 = element("p");
			t10 = text("And so I think, probably the encoding issue was caused by the webpack compilation, but, my compiled code looks exactly fine!");
			t11 = space();
			p6 = element("p");
			picture2 = element("picture");
			source4 = element("source");
			source5 = element("source");
			img2 = element("img");
			t12 = space();
			p7 = element("p");
			t13 = text("So, most likely is a decoding issue when the emoji code get loaded into chrome extension. So I manually changed the emoji in the compiled code to ");
			code0 = element("code");
			t14 = text("\\ud83d\\ude0d");
			t15 = text(" (unicode for 😍). Guess what? The emoji is showing correctly in the chrome extension!");
			t16 = space();
			p8 = element("p");
			picture3 = element("picture");
			source6 = element("source");
			source7 = element("source");
			img3 = element("img");
			t17 = space();
			p9 = element("p");
			t18 = text("So I changed my source code to manually type in the unicode, and compiled it using webpack. To my surprise, the unicode was compiled back into the emoji (😍) it represents!");
			t19 = space();
			p10 = element("p");
			t20 = text("I googled around and I found ");
			a1 = element("a");
			t21 = text("this fix for babel-generator");
			t22 = text(":");
			t23 = space();
			p11 = element("p");
			picture4 = element("picture");
			source8 = element("source");
			source9 = element("source");
			img4 = element("img");
			t24 = space();
			p12 = element("p");
			t25 = text("I checked my babel version, and it had included this fix. So what went wrong?");
			t26 = space();
			hr0 = element("hr");
			t27 = space();
			p13 = element("p");
			t28 = text("My colleague reminded me that during webpack compilation, there are 2 phases, the ");
			strong0 = element("strong");
			t29 = text("transpilation");
			t30 = text(" (via babel) and the ");
			strong1 = element("strong");
			t31 = text("minification");
			t32 = text(" (via uglify plugin).");
			t33 = space();
			p14 = element("p");
			t34 = text("So I disabled the optimisation in webpack config, and noticed that my compiled code contains the original unicode string (");
			code1 = element("code");
			t35 = text("\\ud83d\\ude0d");
			t36 = text("), instead of the emoji (😍) string. So the unicode string was converted to emoji string during minification!");
			t37 = space();
			p15 = element("p");
			t38 = text("So I went to my favourite ");
			a2 = element("a");
			t39 = text("Online JavaScript Minifier");
			t40 = text(" (by ");
			a3 = element("a");
			t41 = text("skalman");
			t42 = text(") to try it out.");
			t43 = space();
			p16 = element("p");
			picture5 = element("picture");
			source10 = element("source");
			source11 = element("source");
			img5 = element("img");
			t44 = space();
			p17 = element("p");
			t45 = text("After some googling, I ");
			a4 = element("a");
			t46 = text("found this issue");
			t47 = text(" which described my scenario perfectly.");
			t48 = space();
			p18 = element("p");
			picture6 = element("picture");
			source12 = element("source");
			source13 = element("source");
			img6 = element("img");
			t49 = space();
			p19 = element("p");
			t50 = text("Turned out there is a ");
			code2 = element("code");
			t51 = text("ascii_only");
			t52 = text(" for ");
			a5 = element("a");
			t53 = text("output options");
			t54 = text(", and it is default to ");
			code3 = element("code");
			t55 = text("false");
			t56 = text(". So I set ");
			code4 = element("code");
			t57 = text("ascii_only");
			t58 = text(" to ");
			code5 = element("code");
			t59 = text("true");
			t60 = text(", ran webpack, and checked my compiled code, it contained the unicode string (");
			code6 = element("code");
			t61 = text("\\ud83d\\ude0d");
			t62 = text(")! And even when I wrote emoji string (😍) in my source code, it got compiled to unicode as well.");
			t63 = space();
			pre = element("pre");
			t64 = space();
			hr1 = element("hr");
			t65 = space();
			section1 = element("section");
			h2 = element("h2");
			a6 = element("a");
			t66 = text("TIL: UglifyJs ascii_only option, use it when you want to escape Unicode characters.");
			t67 = space();
			hr2 = element("hr");
			t68 = space();
			p20 = element("p");
			t69 = text("Why is there a ");
			code7 = element("code");
			t70 = text("ascii_only");
			t71 = text(" option?");
			t72 = space();
			p21 = element("p");
			t73 = text("My guess is that it takes less space for a unicode character (16–17bit) than the escaped ascii characters (6 ");
			em = element("em");
			t74 = text("8 bit — 12");
			t75 = text(" bit), that’s why using unicode character is the default option (");
			code8 = element("code");
			t76 = text("ascii_only=false");
			t77 = text(").");
			this.h();
		},
		l(nodes) {
			section0 = claim_element(nodes, "SECTION", {});
			var section0_nodes = children(section0);

			ul = claim_element(section0_nodes, "UL", {
				class: true,
				id: true,
				role: true,
				"aria-label": true
			});

			var ul_nodes = children(ul);
			li = claim_element(ul_nodes, "LI", {});
			var li_nodes = children(li);
			a0 = claim_element(li_nodes, "A", { href: true });
			var a0_nodes = children(a0);
			t0 = claim_text(a0_nodes, "TIL: UglifyJs ascii_only option, use it when you want to escape Unicode characters.");
			a0_nodes.forEach(detach);
			li_nodes.forEach(detach);
			ul_nodes.forEach(detach);
			section0_nodes.forEach(detach);
			t1 = claim_space(nodes);
			p0 = claim_element(nodes, "P", {});
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "The background story");
			p0_nodes.forEach(detach);
			t3 = claim_space(nodes);
			p1 = claim_element(nodes, "P", {});
			var p1_nodes = children(p1);
			t4 = claim_text(p1_nodes, "I was working on a chrome extension, and trying to add some emojis 😍😀😎 into the extension, however I realised the 😍😀😎 are not rendered correctly!");
			p1_nodes.forEach(detach);
			t5 = claim_space(nodes);
			p2 = claim_element(nodes, "P", {});
			var p2_nodes = children(p2);
			picture0 = claim_element(p2_nodes, "PICTURE", {});
			var picture0_nodes = children(picture0);
			source0 = claim_element(picture0_nodes, "SOURCE", { type: true, srcset: true });
			source1 = claim_element(picture0_nodes, "SOURCE", { type: true, srcset: true });

			img0 = claim_element(picture0_nodes, "IMG", {
				title: true,
				alt: true,
				"data-src": true,
				loading: true
			});

			picture0_nodes.forEach(detach);
			p2_nodes.forEach(detach);
			t6 = claim_space(nodes);
			p3 = claim_element(nodes, "P", {});
			var p3_nodes = children(p3);
			t7 = claim_text(p3_nodes, "And so I inspect the source code loaded into the chrome extension, it wasn’t loaded correctly as well!");
			p3_nodes.forEach(detach);
			t8 = claim_space(nodes);
			p4 = claim_element(nodes, "P", {});
			var p4_nodes = children(p4);
			picture1 = claim_element(p4_nodes, "PICTURE", {});
			var picture1_nodes = children(picture1);
			source2 = claim_element(picture1_nodes, "SOURCE", { type: true, srcset: true });
			source3 = claim_element(picture1_nodes, "SOURCE", { type: true, srcset: true });

			img1 = claim_element(picture1_nodes, "IMG", {
				title: true,
				alt: true,
				"data-src": true,
				loading: true
			});

			picture1_nodes.forEach(detach);
			p4_nodes.forEach(detach);
			t9 = claim_space(nodes);
			p5 = claim_element(nodes, "P", {});
			var p5_nodes = children(p5);
			t10 = claim_text(p5_nodes, "And so I think, probably the encoding issue was caused by the webpack compilation, but, my compiled code looks exactly fine!");
			p5_nodes.forEach(detach);
			t11 = claim_space(nodes);
			p6 = claim_element(nodes, "P", {});
			var p6_nodes = children(p6);
			picture2 = claim_element(p6_nodes, "PICTURE", {});
			var picture2_nodes = children(picture2);
			source4 = claim_element(picture2_nodes, "SOURCE", { type: true, srcset: true });
			source5 = claim_element(picture2_nodes, "SOURCE", { type: true, srcset: true });

			img2 = claim_element(picture2_nodes, "IMG", {
				title: true,
				alt: true,
				"data-src": true,
				loading: true
			});

			picture2_nodes.forEach(detach);
			p6_nodes.forEach(detach);
			t12 = claim_space(nodes);
			p7 = claim_element(nodes, "P", {});
			var p7_nodes = children(p7);
			t13 = claim_text(p7_nodes, "So, most likely is a decoding issue when the emoji code get loaded into chrome extension. So I manually changed the emoji in the compiled code to ");
			code0 = claim_element(p7_nodes, "CODE", {});
			var code0_nodes = children(code0);
			t14 = claim_text(code0_nodes, "\\ud83d\\ude0d");
			code0_nodes.forEach(detach);
			t15 = claim_text(p7_nodes, " (unicode for 😍). Guess what? The emoji is showing correctly in the chrome extension!");
			p7_nodes.forEach(detach);
			t16 = claim_space(nodes);
			p8 = claim_element(nodes, "P", {});
			var p8_nodes = children(p8);
			picture3 = claim_element(p8_nodes, "PICTURE", {});
			var picture3_nodes = children(picture3);
			source6 = claim_element(picture3_nodes, "SOURCE", { type: true, srcset: true });
			source7 = claim_element(picture3_nodes, "SOURCE", { type: true, srcset: true });

			img3 = claim_element(picture3_nodes, "IMG", {
				title: true,
				alt: true,
				"data-src": true,
				loading: true
			});

			picture3_nodes.forEach(detach);
			p8_nodes.forEach(detach);
			t17 = claim_space(nodes);
			p9 = claim_element(nodes, "P", {});
			var p9_nodes = children(p9);
			t18 = claim_text(p9_nodes, "So I changed my source code to manually type in the unicode, and compiled it using webpack. To my surprise, the unicode was compiled back into the emoji (😍) it represents!");
			p9_nodes.forEach(detach);
			t19 = claim_space(nodes);
			p10 = claim_element(nodes, "P", {});
			var p10_nodes = children(p10);
			t20 = claim_text(p10_nodes, "I googled around and I found ");
			a1 = claim_element(p10_nodes, "A", { href: true, rel: true });
			var a1_nodes = children(a1);
			t21 = claim_text(a1_nodes, "this fix for babel-generator");
			a1_nodes.forEach(detach);
			t22 = claim_text(p10_nodes, ":");
			p10_nodes.forEach(detach);
			t23 = claim_space(nodes);
			p11 = claim_element(nodes, "P", {});
			var p11_nodes = children(p11);
			picture4 = claim_element(p11_nodes, "PICTURE", {});
			var picture4_nodes = children(picture4);
			source8 = claim_element(picture4_nodes, "SOURCE", { type: true, srcset: true });
			source9 = claim_element(picture4_nodes, "SOURCE", { type: true, srcset: true });

			img4 = claim_element(picture4_nodes, "IMG", {
				title: true,
				alt: true,
				"data-src": true,
				loading: true
			});

			picture4_nodes.forEach(detach);
			p11_nodes.forEach(detach);
			t24 = claim_space(nodes);
			p12 = claim_element(nodes, "P", {});
			var p12_nodes = children(p12);
			t25 = claim_text(p12_nodes, "I checked my babel version, and it had included this fix. So what went wrong?");
			p12_nodes.forEach(detach);
			t26 = claim_space(nodes);
			hr0 = claim_element(nodes, "HR", {});
			t27 = claim_space(nodes);
			p13 = claim_element(nodes, "P", {});
			var p13_nodes = children(p13);
			t28 = claim_text(p13_nodes, "My colleague reminded me that during webpack compilation, there are 2 phases, the ");
			strong0 = claim_element(p13_nodes, "STRONG", {});
			var strong0_nodes = children(strong0);
			t29 = claim_text(strong0_nodes, "transpilation");
			strong0_nodes.forEach(detach);
			t30 = claim_text(p13_nodes, " (via babel) and the ");
			strong1 = claim_element(p13_nodes, "STRONG", {});
			var strong1_nodes = children(strong1);
			t31 = claim_text(strong1_nodes, "minification");
			strong1_nodes.forEach(detach);
			t32 = claim_text(p13_nodes, " (via uglify plugin).");
			p13_nodes.forEach(detach);
			t33 = claim_space(nodes);
			p14 = claim_element(nodes, "P", {});
			var p14_nodes = children(p14);
			t34 = claim_text(p14_nodes, "So I disabled the optimisation in webpack config, and noticed that my compiled code contains the original unicode string (");
			code1 = claim_element(p14_nodes, "CODE", {});
			var code1_nodes = children(code1);
			t35 = claim_text(code1_nodes, "\\ud83d\\ude0d");
			code1_nodes.forEach(detach);
			t36 = claim_text(p14_nodes, "), instead of the emoji (😍) string. So the unicode string was converted to emoji string during minification!");
			p14_nodes.forEach(detach);
			t37 = claim_space(nodes);
			p15 = claim_element(nodes, "P", {});
			var p15_nodes = children(p15);
			t38 = claim_text(p15_nodes, "So I went to my favourite ");
			a2 = claim_element(p15_nodes, "A", { href: true, rel: true });
			var a2_nodes = children(a2);
			t39 = claim_text(a2_nodes, "Online JavaScript Minifier");
			a2_nodes.forEach(detach);
			t40 = claim_text(p15_nodes, " (by ");
			a3 = claim_element(p15_nodes, "A", { href: true, rel: true });
			var a3_nodes = children(a3);
			t41 = claim_text(a3_nodes, "skalman");
			a3_nodes.forEach(detach);
			t42 = claim_text(p15_nodes, ") to try it out.");
			p15_nodes.forEach(detach);
			t43 = claim_space(nodes);
			p16 = claim_element(nodes, "P", {});
			var p16_nodes = children(p16);
			picture5 = claim_element(p16_nodes, "PICTURE", {});
			var picture5_nodes = children(picture5);
			source10 = claim_element(picture5_nodes, "SOURCE", { type: true, srcset: true });
			source11 = claim_element(picture5_nodes, "SOURCE", { type: true, srcset: true });

			img5 = claim_element(picture5_nodes, "IMG", {
				title: true,
				alt: true,
				"data-src": true,
				loading: true
			});

			picture5_nodes.forEach(detach);
			p16_nodes.forEach(detach);
			t44 = claim_space(nodes);
			p17 = claim_element(nodes, "P", {});
			var p17_nodes = children(p17);
			t45 = claim_text(p17_nodes, "After some googling, I ");
			a4 = claim_element(p17_nodes, "A", { href: true, rel: true });
			var a4_nodes = children(a4);
			t46 = claim_text(a4_nodes, "found this issue");
			a4_nodes.forEach(detach);
			t47 = claim_text(p17_nodes, " which described my scenario perfectly.");
			p17_nodes.forEach(detach);
			t48 = claim_space(nodes);
			p18 = claim_element(nodes, "P", {});
			var p18_nodes = children(p18);
			picture6 = claim_element(p18_nodes, "PICTURE", {});
			var picture6_nodes = children(picture6);
			source12 = claim_element(picture6_nodes, "SOURCE", { type: true, srcset: true });
			source13 = claim_element(picture6_nodes, "SOURCE", { type: true, srcset: true });

			img6 = claim_element(picture6_nodes, "IMG", {
				title: true,
				alt: true,
				"data-src": true,
				loading: true
			});

			picture6_nodes.forEach(detach);
			p18_nodes.forEach(detach);
			t49 = claim_space(nodes);
			p19 = claim_element(nodes, "P", {});
			var p19_nodes = children(p19);
			t50 = claim_text(p19_nodes, "Turned out there is a ");
			code2 = claim_element(p19_nodes, "CODE", {});
			var code2_nodes = children(code2);
			t51 = claim_text(code2_nodes, "ascii_only");
			code2_nodes.forEach(detach);
			t52 = claim_text(p19_nodes, " for ");
			a5 = claim_element(p19_nodes, "A", { href: true, rel: true });
			var a5_nodes = children(a5);
			t53 = claim_text(a5_nodes, "output options");
			a5_nodes.forEach(detach);
			t54 = claim_text(p19_nodes, ", and it is default to ");
			code3 = claim_element(p19_nodes, "CODE", {});
			var code3_nodes = children(code3);
			t55 = claim_text(code3_nodes, "false");
			code3_nodes.forEach(detach);
			t56 = claim_text(p19_nodes, ". So I set ");
			code4 = claim_element(p19_nodes, "CODE", {});
			var code4_nodes = children(code4);
			t57 = claim_text(code4_nodes, "ascii_only");
			code4_nodes.forEach(detach);
			t58 = claim_text(p19_nodes, " to ");
			code5 = claim_element(p19_nodes, "CODE", {});
			var code5_nodes = children(code5);
			t59 = claim_text(code5_nodes, "true");
			code5_nodes.forEach(detach);
			t60 = claim_text(p19_nodes, ", ran webpack, and checked my compiled code, it contained the unicode string (");
			code6 = claim_element(p19_nodes, "CODE", {});
			var code6_nodes = children(code6);
			t61 = claim_text(code6_nodes, "\\ud83d\\ude0d");
			code6_nodes.forEach(detach);
			t62 = claim_text(p19_nodes, ")! And even when I wrote emoji string (😍) in my source code, it got compiled to unicode as well.");
			p19_nodes.forEach(detach);
			t63 = claim_space(nodes);
			pre = claim_element(nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			pre_nodes.forEach(detach);
			t64 = claim_space(nodes);
			hr1 = claim_element(nodes, "HR", {});
			t65 = claim_space(nodes);
			section1 = claim_element(nodes, "SECTION", {});
			var section1_nodes = children(section1);
			h2 = claim_element(section1_nodes, "H2", {});
			var h2_nodes = children(h2);
			a6 = claim_element(h2_nodes, "A", { href: true, id: true });
			var a6_nodes = children(a6);
			t66 = claim_text(a6_nodes, "TIL: UglifyJs ascii_only option, use it when you want to escape Unicode characters.");
			a6_nodes.forEach(detach);
			h2_nodes.forEach(detach);
			t67 = claim_space(section1_nodes);
			hr2 = claim_element(section1_nodes, "HR", {});
			t68 = claim_space(section1_nodes);
			p20 = claim_element(section1_nodes, "P", {});
			var p20_nodes = children(p20);
			t69 = claim_text(p20_nodes, "Why is there a ");
			code7 = claim_element(p20_nodes, "CODE", {});
			var code7_nodes = children(code7);
			t70 = claim_text(code7_nodes, "ascii_only");
			code7_nodes.forEach(detach);
			t71 = claim_text(p20_nodes, " option?");
			p20_nodes.forEach(detach);
			t72 = claim_space(section1_nodes);
			p21 = claim_element(section1_nodes, "P", {});
			var p21_nodes = children(p21);
			t73 = claim_text(p21_nodes, "My guess is that it takes less space for a unicode character (16–17bit) than the escaped ascii characters (6 ");
			em = claim_element(p21_nodes, "EM", {});
			var em_nodes = children(em);
			t74 = claim_text(em_nodes, "8 bit — 12");
			em_nodes.forEach(detach);
			t75 = claim_text(p21_nodes, " bit), that’s why using unicode character is the default option (");
			code8 = claim_element(p21_nodes, "CODE", {});
			var code8_nodes = children(code8);
			t76 = claim_text(code8_nodes, "ascii_only=false");
			code8_nodes.forEach(detach);
			t77 = claim_text(p21_nodes, ").");
			p21_nodes.forEach(detach);
			section1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a0, "href", "#til-uglifyjs-ascii-only-option-use-it-when-you-want-to-escape-unicode-characters");
			attr(ul, "class", "sitemap");
			attr(ul, "id", "sitemap");
			attr(ul, "role", "navigation");
			attr(ul, "aria-label", "Table of Contents");
			attr(source0, "type", "image/webp");
			attr(source0, "srcset", __build_img_webp__0);
			attr(source1, "type", "image/jpeg");
			attr(source1, "srcset", __build_img__0);
			attr(img0, "title", "null");
			attr(img0, "alt", "The 😍😍😀😀isn’t rendered correctly in chrome extension");
			attr(img0, "data-src", __build_img__0);
			attr(img0, "loading", "lazy");
			attr(source2, "type", "image/webp");
			attr(source2, "srcset", __build_img_webp__1);
			attr(source3, "type", "image/jpeg");
			attr(source3, "srcset", __build_img__1);
			attr(img1, "title", "null");
			attr(img1, "alt", "problem with the source too");
			attr(img1, "data-src", __build_img__1);
			attr(img1, "loading", "lazy");
			attr(source4, "type", "image/webp");
			attr(source4, "srcset", __build_img_webp__2);
			attr(source5, "type", "image/jpeg");
			attr(source5, "srcset", __build_img__2);
			attr(img2, "title", "null");
			attr(img2, "alt", "The compiled code seems okay!");
			attr(img2, "data-src", __build_img__2);
			attr(img2, "loading", "lazy");
			attr(source6, "type", "image/webp");
			attr(source6, "srcset", __build_img_webp__3);
			attr(source7, "type", "image/jpeg");
			attr(source7, "srcset", __build_img__3);
			attr(img3, "title", "null");
			attr(img3, "alt", "😍!");
			attr(img3, "data-src", __build_img__3);
			attr(img3, "loading", "lazy");
			attr(a1, "href", "https://github.com/babel/babel/pull/4478");
			attr(a1, "rel", "nofollow");
			attr(source8, "type", "image/webp");
			attr(source8, "srcset", __build_img_webp__4);
			attr(source9, "type", "image/jpeg");
			attr(source9, "srcset", __build_img__4);
			attr(img4, "title", "null");
			attr(img4, "alt", "babel issue");
			attr(img4, "data-src", __build_img__4);
			attr(img4, "loading", "lazy");
			attr(a2, "href", "https://skalman.github.io/UglifyJS-online/");
			attr(a2, "rel", "nofollow");
			attr(a3, "href", "https://github.com/skalman");
			attr(a3, "rel", "nofollow");
			attr(source10, "type", "image/webp");
			attr(source10, "srcset", __build_img_webp__5);
			attr(source11, "type", "image/jpeg");
			attr(source11, "srcset", __build_img__5);
			attr(img5, "title", "null");
			attr(img5, "alt", "online javasript minifier");
			attr(img5, "data-src", __build_img__5);
			attr(img5, "loading", "lazy");
			attr(a4, "href", "https://github.com/mishoo/UglifyJS2/issues/490");
			attr(a4, "rel", "nofollow");
			attr(source12, "type", "image/webp");
			attr(source12, "srcset", __build_img_webp__6);
			attr(source13, "type", "image/jpeg");
			attr(source13, "srcset", __build_img__6);
			attr(img6, "title", "null");
			attr(img6, "alt", "why uglifyjs always compress unicode characters to utf8");
			attr(img6, "data-src", __build_img__6);
			attr(img6, "loading", "lazy");
			attr(a5, "href", "https://github.com/mishoo/UglifyJS2#output-options");
			attr(a5, "rel", "nofollow");
			attr(pre, "class", "language-js");
			attr(a6, "href", "#til-uglifyjs-ascii-only-option-use-it-when-you-want-to-escape-unicode-characters");
			attr(a6, "id", "til-uglifyjs-ascii-only-option-use-it-when-you-want-to-escape-unicode-characters");
		},
		m(target, anchor) {
			insert(target, section0, anchor);
			append(section0, ul);
			append(ul, li);
			append(li, a0);
			append(a0, t0);
			insert(target, t1, anchor);
			insert(target, p0, anchor);
			append(p0, t2);
			insert(target, t3, anchor);
			insert(target, p1, anchor);
			append(p1, t4);
			insert(target, t5, anchor);
			insert(target, p2, anchor);
			append(p2, picture0);
			append(picture0, source0);
			append(picture0, source1);
			append(picture0, img0);
			insert(target, t6, anchor);
			insert(target, p3, anchor);
			append(p3, t7);
			insert(target, t8, anchor);
			insert(target, p4, anchor);
			append(p4, picture1);
			append(picture1, source2);
			append(picture1, source3);
			append(picture1, img1);
			insert(target, t9, anchor);
			insert(target, p5, anchor);
			append(p5, t10);
			insert(target, t11, anchor);
			insert(target, p6, anchor);
			append(p6, picture2);
			append(picture2, source4);
			append(picture2, source5);
			append(picture2, img2);
			insert(target, t12, anchor);
			insert(target, p7, anchor);
			append(p7, t13);
			append(p7, code0);
			append(code0, t14);
			append(p7, t15);
			insert(target, t16, anchor);
			insert(target, p8, anchor);
			append(p8, picture3);
			append(picture3, source6);
			append(picture3, source7);
			append(picture3, img3);
			insert(target, t17, anchor);
			insert(target, p9, anchor);
			append(p9, t18);
			insert(target, t19, anchor);
			insert(target, p10, anchor);
			append(p10, t20);
			append(p10, a1);
			append(a1, t21);
			append(p10, t22);
			insert(target, t23, anchor);
			insert(target, p11, anchor);
			append(p11, picture4);
			append(picture4, source8);
			append(picture4, source9);
			append(picture4, img4);
			insert(target, t24, anchor);
			insert(target, p12, anchor);
			append(p12, t25);
			insert(target, t26, anchor);
			insert(target, hr0, anchor);
			insert(target, t27, anchor);
			insert(target, p13, anchor);
			append(p13, t28);
			append(p13, strong0);
			append(strong0, t29);
			append(p13, t30);
			append(p13, strong1);
			append(strong1, t31);
			append(p13, t32);
			insert(target, t33, anchor);
			insert(target, p14, anchor);
			append(p14, t34);
			append(p14, code1);
			append(code1, t35);
			append(p14, t36);
			insert(target, t37, anchor);
			insert(target, p15, anchor);
			append(p15, t38);
			append(p15, a2);
			append(a2, t39);
			append(p15, t40);
			append(p15, a3);
			append(a3, t41);
			append(p15, t42);
			insert(target, t43, anchor);
			insert(target, p16, anchor);
			append(p16, picture5);
			append(picture5, source10);
			append(picture5, source11);
			append(picture5, img5);
			insert(target, t44, anchor);
			insert(target, p17, anchor);
			append(p17, t45);
			append(p17, a4);
			append(a4, t46);
			append(p17, t47);
			insert(target, t48, anchor);
			insert(target, p18, anchor);
			append(p18, picture6);
			append(picture6, source12);
			append(picture6, source13);
			append(picture6, img6);
			insert(target, t49, anchor);
			insert(target, p19, anchor);
			append(p19, t50);
			append(p19, code2);
			append(code2, t51);
			append(p19, t52);
			append(p19, a5);
			append(a5, t53);
			append(p19, t54);
			append(p19, code3);
			append(code3, t55);
			append(p19, t56);
			append(p19, code4);
			append(code4, t57);
			append(p19, t58);
			append(p19, code5);
			append(code5, t59);
			append(p19, t60);
			append(p19, code6);
			append(code6, t61);
			append(p19, t62);
			insert(target, t63, anchor);
			insert(target, pre, anchor);
			pre.innerHTML = raw_value;
			insert(target, t64, anchor);
			insert(target, hr1, anchor);
			insert(target, t65, anchor);
			insert(target, section1, anchor);
			append(section1, h2);
			append(h2, a6);
			append(a6, t66);
			append(section1, t67);
			append(section1, hr2);
			append(section1, t68);
			append(section1, p20);
			append(p20, t69);
			append(p20, code7);
			append(code7, t70);
			append(p20, t71);
			append(section1, t72);
			append(section1, p21);
			append(p21, t73);
			append(p21, em);
			append(em, t74);
			append(p21, t75);
			append(p21, code8);
			append(code8, t76);
			append(p21, t77);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(section0);
			if (detaching) detach(t1);
			if (detaching) detach(p0);
			if (detaching) detach(t3);
			if (detaching) detach(p1);
			if (detaching) detach(t5);
			if (detaching) detach(p2);
			if (detaching) detach(t6);
			if (detaching) detach(p3);
			if (detaching) detach(t8);
			if (detaching) detach(p4);
			if (detaching) detach(t9);
			if (detaching) detach(p5);
			if (detaching) detach(t11);
			if (detaching) detach(p6);
			if (detaching) detach(t12);
			if (detaching) detach(p7);
			if (detaching) detach(t16);
			if (detaching) detach(p8);
			if (detaching) detach(t17);
			if (detaching) detach(p9);
			if (detaching) detach(t19);
			if (detaching) detach(p10);
			if (detaching) detach(t23);
			if (detaching) detach(p11);
			if (detaching) detach(t24);
			if (detaching) detach(p12);
			if (detaching) detach(t26);
			if (detaching) detach(hr0);
			if (detaching) detach(t27);
			if (detaching) detach(p13);
			if (detaching) detach(t33);
			if (detaching) detach(p14);
			if (detaching) detach(t37);
			if (detaching) detach(p15);
			if (detaching) detach(t43);
			if (detaching) detach(p16);
			if (detaching) detach(t44);
			if (detaching) detach(p17);
			if (detaching) detach(t48);
			if (detaching) detach(p18);
			if (detaching) detach(t49);
			if (detaching) detach(p19);
			if (detaching) detach(t63);
			if (detaching) detach(pre);
			if (detaching) detach(t64);
			if (detaching) detach(hr1);
			if (detaching) detach(t65);
			if (detaching) detach(section1);
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
	"title": "The `ascii_only` option in uglify-js",
	"date": "2018-10-27T08:00:00Z",
	"description": "that get my emoji showing in my chrome extension",
	"slug": "uglify-ascii-only",
	"type": "blog"
};

class Page_markup extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment$3, safe_not_equal, {});
	}
}

setTimeout(() => {
  const app = new Page_markup({
    target: document.querySelector('#app'),
    hydrate: true,
  });

  if (document.querySelector('.twitter-tweet')) {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://platform.twitter.com/widgets.js';
    script.charset = 'utf-8';
    document.body.appendChild(script);
  }

  // TODO
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src;
    });
  } else {
    const script = document.createElement('script');
    script.src =
      'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js';
    document.body.appendChild(script);
  }
}, 3000);
