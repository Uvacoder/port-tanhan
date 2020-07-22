/* generated by Svelte v3.24.0 */
import {
	SvelteComponent,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal
} from "/svelte/internal.js";

function create_fragment(ctx) {
	let h1;

	return {
		c() {
			h1 = element("h1");
			h1.textContent = "📚 Recap on module resolution & installation";
		},
		m(target, anchor) {
			insert(target, h1, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(h1);
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