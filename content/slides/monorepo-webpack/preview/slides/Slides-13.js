/* generated by Svelte v3.24.0 */
import {
	SvelteComponent,
	attr,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	space
} from "/svelte/internal.js";

function create_fragment(ctx) {
	let h2;
	let t1;
	let pre;

	let raw_value = `
<code class="language-sh">symbolink_link_1 --&gt; actual/location/file</code>` + "";

	return {
		c() {
			h2 = element("h2");
			h2.textContent = "🔗 Symlink";
			t1 = space();
			pre = element("pre");
			attr(pre, "class", "language-sh");
		},
		m(target, anchor) {
			insert(target, h2, anchor);
			insert(target, t1, anchor);
			insert(target, pre, anchor);
			pre.innerHTML = raw_value;
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(h2);
			if (detaching) detach(t1);
			if (detaching) detach(pre);
		}
	};
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Component;