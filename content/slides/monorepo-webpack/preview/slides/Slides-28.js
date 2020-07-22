/* generated by Svelte v3.24.0 */
import {
	SvelteComponent,
	create_component,
	destroy_component,
	detach,
	element,
	init,
	insert,
	mount_component,
	noop,
	safe_not_equal,
	space,
	transition_in,
	transition_out
} from "/svelte/internal.js";

import Notes from "/components/Notes.js";

function create_fragment(ctx) {
	let h2;
	let t1;
	let ul1;
	let t4;
	let notes;
	let current;

	notes = new Notes({
			props: {
				note: "\n- organisational reasons, more ppl maintain, various location\n- unlike babel monorepo, where build tools are monorepo's dependencies, we want a bit extreme, that includes dev deps, such as jest, eslint, etc.\n"
			}
		});

	return {
		c() {
			h2 = element("h2");
			h2.textContent = "🥅 Our goal";
			t1 = space();
			ul1 = element("ul");
			ul1.innerHTML = `<li>Clearly defined dependencies<ul><li>Package can be easily isolated and removed from the monorepo</li></ul></li>`;
			t4 = space();
			create_component(notes.$$.fragment);
		},
		m(target, anchor) {
			insert(target, h2, anchor);
			insert(target, t1, anchor);
			insert(target, ul1, anchor);
			insert(target, t4, anchor);
			mount_component(notes, target, anchor);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(notes.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(notes.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(h2);
			if (detaching) detach(t1);
			if (detaching) detach(ul1);
			if (detaching) detach(t4);
			destroy_component(notes, detaching);
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