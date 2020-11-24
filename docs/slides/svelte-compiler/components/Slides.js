/* generated by Svelte v3.24.0 */
import {
	SvelteComponent,
	append,
	attr,
	binding_callbacks,
	check_outros,
	create_component,
	destroy_component,
	detach,
	element,
	empty,
	group_outros,
	init,
	insert,
	listen,
	mount_component,
	outro_and_destroy_block,
	safe_not_equal,
	set_style,
	space,
	transition_in,
	transition_out,
	update_keyed_each
} from "/svelte/internal.js";

import { slide } from "/svelte/transition.js";

function add_css() {
	var style = element("style");
	style.id = "svelte-g2twga-style";
	style.textContent = "body{overflow:hidden}section.svelte-g2twga{width:100vw;height:100vh;box-sizing:border-box;position:fixed;top:0;left:0;overflow:scroll;transition:transform 0.25s ease-in-out;padding:16px}";
	append(document.head, style);
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	child_ctx[11] = i;
	return child_ctx;
}

// (47:0) {#each slides as Slide, index (index)}
function create_each_block(key_1, ctx) {
	let section;
	let slide_1;
	let index = /*index*/ ctx[11];
	let t;
	let section_id_value;
	let current;
	const assign_slide_1 = () => /*slide_1_binding*/ ctx[4](slide_1, index);
	const unassign_slide_1 = () => /*slide_1_binding*/ ctx[4](null, index);
	let slide_1_props = {};
	slide_1 = new /*Slide*/ ctx[9]({ props: slide_1_props });
	assign_slide_1();

	return {
		key: key_1,
		first: null,
		c() {
			section = element("section");
			create_component(slide_1.$$.fragment);
			t = space();
			attr(section, "id", section_id_value = "page-" + /*index*/ ctx[11]);
			set_style(section, "transform", "translateX(" + (/*index*/ ctx[11] - /*slideIndex*/ ctx[2]) * 100 + "%) scale(" + (/*index*/ ctx[11] === /*slideIndex*/ ctx[2] ? 1 : 0.8) + ")");
			attr(section, "class", "svelte-g2twga");
			this.first = section;
		},
		m(target, anchor) {
			insert(target, section, anchor);
			mount_component(slide_1, section, null);
			append(section, t);
			current = true;
		},
		p(ctx, dirty) {
			if (index !== /*index*/ ctx[11]) {
				unassign_slide_1();
				index = /*index*/ ctx[11];
				assign_slide_1();
			}

			const slide_1_changes = {};
			slide_1.$set(slide_1_changes);

			if (!current || dirty & /*slides*/ 1 && section_id_value !== (section_id_value = "page-" + /*index*/ ctx[11])) {
				attr(section, "id", section_id_value);
			}

			if (!current || dirty & /*slides, slideIndex*/ 5) {
				set_style(section, "transform", "translateX(" + (/*index*/ ctx[11] - /*slideIndex*/ ctx[2]) * 100 + "%) scale(" + (/*index*/ ctx[11] === /*slideIndex*/ ctx[2] ? 1 : 0.8) + ")");
			}
		},
		i(local) {
			if (current) return;
			transition_in(slide_1.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(slide_1.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(section);
			unassign_slide_1();
			destroy_component(slide_1);
		}
	};
}

function create_fragment(ctx) {
	let t;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let each_1_anchor;
	let current;
	let mounted;
	let dispose;
	let each_value = /*slides*/ ctx[0];
	const get_key = ctx => /*index*/ ctx[11];

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	return {
		c() {
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		m(target, anchor) {
			insert(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert(target, each_1_anchor, anchor);
			current = true;

			if (!mounted) {
				dispose = listen(document.body, "keydown", /*onKeyDown*/ ctx[3]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*slides, slideIndex, slideInstances*/ 7) {
				const each_value = /*slides*/ ctx[0];
				group_outros();
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block, each_1_anchor, get_each_context);
				check_outros();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) detach(t);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d(detaching);
			}

			if (detaching) detach(each_1_anchor);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { slides = [] } = $$props;
	let slideInstances = [];
	let slideIndex = 0;
	const hash = window.location.hash;

	if (hash) {
		slideIndex = Number(hash.slice(("page-").length + 1));
	}

	function onKeyDown(event) {
		switch (event.key) {
			case "ArrowLeft":
			case "j":
			case "J":
				{
					prev();
					break;
				}
			case "ArrowRight":
			case "k":
			case "K":
				{
					next();
					break;
				}
		}
	}

	function prev() {
		if (!(currentSlide && typeof currentSlide.prev === "function" && currentSlide.prev())) {
			$$invalidate(2, slideIndex = Math.max(slideIndex - 1, 0));
		}
	}

	function next() {
		if (!(currentSlide && typeof currentSlide.next === "function" && currentSlide.next())) {
			$$invalidate(2, slideIndex = Math.min(slideIndex + 1, slides.length - 1));
		}
	}

	function slide_1_binding($$value, index) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			slideInstances[index] = $$value;
			$$invalidate(1, slideInstances);
			$$invalidate(0, slides);
		});
	}

	$$self.$set = $$props => {
		if ("slides" in $$props) $$invalidate(0, slides = $$props.slides);
	};

	let currentSlide;

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*slideIndex*/ 4) {
			$: window.location.hash = `page-${slideIndex}`;
		}

		if ($$self.$$.dirty & /*slideInstances, slideIndex*/ 6) {
			$: currentSlide = slideInstances[slideIndex];
		}
	};

	return [slides, slideInstances, slideIndex, onKeyDown, slide_1_binding];
}

class Slides extends SvelteComponent {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-g2twga-style")) add_css();
		init(this, options, instance, create_fragment, safe_not_equal, { slides: 0 });
	}
}

export default Slides;