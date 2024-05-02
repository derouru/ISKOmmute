import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
const css = {
  code: "#generateBtn.svelte-wi45s4{font-size:1.4rem;text-align:center;font-weight:600;background-color:#9C293E;color:white;margin-top:1.8rem}.generate-route-btn.svelte-wi45s4:hover{background-color:#800000}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<title data-svelte-h="svelte-hjko01">Iskommute Feedback</title> <div class="container p-10 space-y-4 flex flex-col items-center justify-center h-screen"><h1 data-svelte-h="svelte-cw6aor">Iskommute Feedback</h1> <p data-svelte-h="svelte-qi9jpq">We value your feedback! If you have any suggestions, questions, or encounter any issues while using Iskommute, please don&#39;t hesitate to contact us using the form below. Your input helps us improve Iskommute for everyone.</p> <h2 data-svelte-h="svelte-5etl87">Feedback Form</h2> <div class="flex justify-center items-center"><form class="w-full max-w-lg"><textarea required>${escape("")}</textarea></form></div> <button id="generateBtn" class="btn btn-xl variant-filled generate-route-btn svelte-wi45s4" data-svelte-h="svelte-mje0y9">Submit</button> </div>`;
});
export {
  Page as default
};
