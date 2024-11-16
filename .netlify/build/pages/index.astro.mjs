/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderComponent, e as renderTransition, b as createAstro } from '../chunks/astro/server_DYaT8b2Z.mjs';
import 'kleur/colors';
import 'html-escaper';
import { C as CardPlayButton, $ as $$Layout } from '../chunks/CardPlayButton_CdzNs7Bl.mjs';
import { p as playlists } from '../chunks/data_Z8nmwM8E.mjs';
import { p as push, a as pop } from '../chunks/_@astro-renderers_DtYv9vPy.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_DtYv9vPy.mjs';
import 'esm-env';

const CONTENT_REGEX = /[&<]/g;

/**
 * @template V
 * @param {V} value
 * @param {boolean} [is_attr]
 */
function escape_html(value, is_attr) {
	const str = String(value ?? '');

	const pattern = CONTENT_REGEX;
	pattern.lastIndex = 0;

	let escaped = '';
	let last = 0;

	while (pattern.test(str)) {
		const i = pattern.lastIndex - 1;
		const ch = str[i];
		escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
		last = i + 1;
	}

	return escaped + str.substring(last);
}

const $$Astro = createAstro();
const $$PlayListItemCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PlayListItemCard;
  const { playlist } = Astro2.props;
  const { id, cover, title, artists, color } = playlist;
  const artistsString = artists.join(", ");
  return renderTemplate`${maybeRenderHead()}<article class="group relative hover:bg-zinc-800 shadow-lg hover:shadow-xl bg-zinc-500/30 rounded-md ransi transition-all duration-300"> <div${addAttribute(`absolute right-4 bottom-20 translate-y-4
    transition-all duration-500 opacity-0
    group-hover:translate-y-0 group-hover:opacity-100
    z-10`, "class")}> ${renderComponent($$result, "CardPlayButton", CardPlayButton, { "id": id, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "E:/Cursos/astros/-Spotify/src/components/CardPlayButton", "client:component-export": "CardPlayButton" })} </div> <a${addAttribute(`/playlist/${id}`, "href")} class="playlist-item transition-all duration-300 flex relative p-2 overflow-hidden gap-2 pb-6 rounded-md w-44 flex-col"${addAttribute(renderTransition($$result, "iyk6g74u", "", `playlist ${id} box`), "data-astro-transition-scope")}> <picture class="aspect-square w-full h-auto flex-none"> <img${addAttribute(cover, "src")}${addAttribute(`Cover of ${title} by ${artistsString}`, "alt")} class="object-cover w-full h-full rounded-md"${addAttribute(renderTransition($$result, "ogeug6cu", "", `playlist ${id} image`), "data-astro-transition-scope")}> </picture> <div class="flex flex-auto flex-col px-2"> <h4 class="text-white text-sm"${addAttribute(renderTransition($$result, "ls2g7uvg", "", `playlist ${id} title`), "data-astro-transition-scope")}> ${title} </h4> <span class="text-xs text-gray-400"${addAttribute(renderTransition($$result, "b2lel7vz", "", `playlist ${id} artists`), "data-astro-transition-scope")}> ${artistsString} </span> </div> </a> </article>`;
}, "E:/Cursos/astros/-Spotify/src/components/PlayListItemCard.astro", "self");

function Greeting($$payload, $$props) {
	push();

	const currentTime = new Date();
	const currentHour = currentTime.getHours();
	let greeting = "";

	if (currentHour < 12) {
		greeting = "Buenos Dias";
	} else if (currentHour < 18) {
		greeting = "Buenas Tardes";
	} else {
		greeting = "Buenas Noches";
	}

	$$payload.out += `<h1 class="text-3xl font-bold">${escape_html(greeting)}</h1>`;
	pop();
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Spotify clone" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="playlist-container" class="relative transition-all duration-1000 min-h-full bg-green-600 rounded-lg"> <div class="relative z-10 px-6 pt-10"> <!-- <h1 class="text-2xl font-bold">Buenos dias</h1> --> ${renderComponent($$result2, "Greeting", Greeting, {})} <div class="flex flex-wrap mt-6 gap-4"> ${playlists.map((playlist) => renderTemplate`${renderComponent($$result2, "PlayListItemCard", $$PlayListItemCard, { "playlist": playlist })}`)} </div> </div> <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 "></div> </div> ` })} `;
}, "E:/Cursos/astros/-Spotify/src/pages/index.astro", void 0);

const $$file = "E:/Cursos/astros/-Spotify/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
