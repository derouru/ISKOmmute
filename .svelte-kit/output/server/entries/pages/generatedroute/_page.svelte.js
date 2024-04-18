import { c as create_ssr_component, b as add_attribute } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import "mapbox-gl";
import { a as startValue, e as endValue } from "../../../chunks/stores2.js";
const css = {
  code: "#map.svelte-xa0nbw{width:100vw;height:100vh;margin-top:10vh}#back_button.svelte-xa0nbw{position:absolute;margin-top:5%;margin-left:5%;color:blue}#doneBtn.svelte-xa0nbw{position:absolute;margin-top:5%;margin-left:75%;color:blue;font-size:1em;padding:0.5em 1em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  startValue.subscribe((value) => {
  });
  endValue.subscribe((value) => {
  });
  let mapElement;
  $$result.css.add(css);
  return `<a id="back_button" href="../" class="svelte-xa0nbw" data-svelte-h="svelte-3kyawm">Back</a> <button id="doneBtn" class="btn btn-xl variant-filled svelte-xa0nbw" data-svelte-h="svelte-1ra8gha">Done</button> <div id="map" class="svelte-xa0nbw"${add_attribute("this", mapElement, 0)}></div>`;
});
export {
  Page as default
};
