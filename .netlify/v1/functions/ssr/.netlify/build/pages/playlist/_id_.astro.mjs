/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, a as addAttribute, b as createAstro, e as renderTransition } from '../../chunks/astro/server_DYaT8b2Z.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { C as CardPlayButton, $ as $$Layout } from '../../chunks/CardPlayButton_CdzNs7Bl.mjs';
import { a as allPlaylists, s as songs } from '../../chunks/data_Z8nmwM8E.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_DtYv9vPy.mjs';

const $$Time = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<style>
    .Svg-sc-ytk21e-0.dYnaPI {
      filter: grayscale(100%) contrast(150%);
    }
  </style>${maybeRenderHead()}<svg data-encore-id="icon" role="img" height="18" width="18" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI" fill="currentColor"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path><path fill="currentColor" d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path></svg>`;
}, "E:/Cursos/astros/-Spotify/src/icons/Time.astro", void 0);

const $$Astro$1 = createAstro();
const $$MusicsTable = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MusicsTable;
  const { songs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<table class="table-auto text-left min-w-full divide-y-2 divide-gray-500/20"> <thead class=""> <tr class="text-gray-400 text-sm font-light "> <th class="px-4 py-2 font-light">#</th> <th class="px-4 py-2 font-light">Titulo</th> <th class="px-4 py-2 font-light">Album</th> <th class="px-4 py-2 font-light">${renderComponent($$result, "Time", $$Time, {})}</th> </tr> </thead> <tbody> <tr class="h-[16px]"></tr> ${songs.map((song, index) => renderTemplate`<tr class="border-separate border-spacing-0 text-gray-300 text-sm  font-light  hover:bg-white/10 overflow-hidden transition duration-200"> <th class="px-4 py-2 rounded-tl-lg rounded-bl-lg w-5">${index + 1}</th> <th class="px-4 py-2 flex gap-3"> <picture> <img${addAttribute(song.image, "src")}${addAttribute(song.title, "alt")} class="w-11 h-11 "> </picture> <div class="flex flex-col"> <h3 class="text-white text-base font-normal">${song.title}</h3> <span>${song.artists.join(", ")}</span> </div> </th> <th class="px-4 py-2">${song.album}</th> <th class="px-4 py-2 rounded-tr-lg rounded-br-lg">${song.duration}</th> </tr>`)} </tbody> </table>`;
}, "E:/Cursos/astros/-Spotify/src/components/MusicsTable.astro", void 0);

const $$Astro = createAstro();
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const playlist = allPlaylists.find((playlist2) => playlist2.id === id);
  const playListSongs = songs.filter((song) => song.albumId === playlist?.albumId);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Spotify Clone" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="playlist-container" class="relative flex flex-col h-full bg-zinc-900 overflow-x-hidden"${addAttribute(renderTransition($$result2, "lwbbxtwc", "", `playlist ${id} box`), "data-astro-transition-scope")}> <header class="flex flex-row gap-8 px-6 mt-12"> <picture class="aspect-square w-52 h-52 flex-none"> <img${addAttribute(playlist?.cover, "src")}${addAttribute(`Cover of ${playlist?.title}`, "alt")} class="object-cover w-full h-full shadow-lg"${addAttribute(renderTransition($$result2, "447rgqct", "", `playlist ${playlist?.id} image`), "data-astro-transition-scope")}> </picture> <div class="flex flex-col justify-between"> <h2 class="flex flex-1 items-end">Playlist</h2> <div> <h1 class="text-5xl font-bold block text-white"> ${playlist?.title} <span${addAttribute(renderTransition($$result2, "xqvi2465", "", `playlist ${playlist?.id} title`), "data-astro-transition-scope")}></span> </h1> </div> <div class="flex-1 flex items-end"> <div class="text-sm text-gray-300 font-normal"> <div${addAttribute(renderTransition($$result2, "5hvgcehm", "", `playlist ${playlist?.id} artists`), "data-astro-transition-scope")}> <span>${playlist?.artists.join(", ")}</span> </div> <p class="mt-1"> <span class="text-white">${playListSongs.length} canciones</span>,
              3 h aproximadamente
</p> </div> </div> </div> </header> <div class="pl-6 pt-6"> ${renderComponent($$result2, "CardPlayButton", CardPlayButton, { "client:load": true, "id": id, "size": "large", "client:component-hydration": "load", "client:component-path": "E:/Cursos/astros/-Spotify/src/components/CardPlayButton", "client:component-export": "CardPlayButton" })} </div> <div class="relative z-10 px-6 pt-10"></div> <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 -z-[1]"></div> <section class="p-6"> ${renderComponent($$result2, "MusicsTable", $$MusicsTable, { "songs": playListSongs })} </section> </div> ` })}`;
}, "E:/Cursos/astros/-Spotify/src/pages/playlist/[id].astro", "self");

const $$file = "E:/Cursos/astros/-Spotify/src/pages/playlist/[id].astro";
const $$url = "/playlist/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
