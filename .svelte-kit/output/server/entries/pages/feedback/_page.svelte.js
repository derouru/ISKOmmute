import { c as create_ssr_component, j as each, e as escape, b as add_attribute } from "../../../chunks/ssr.js";
const css = {
  code: "#generateBtn.svelte-cfle5g.svelte-cfle5g{font-size:1.4rem;text-align:center;font-weight:600;background-color:#9C293E;color:white;margin-top:1.8rem}.generate-route-btn.svelte-cfle5g.svelte-cfle5g:hover{background-color:#800000}.rating.svelte-cfle5g.svelte-cfle5g{direction:rtl}.rating__input.svelte-cfle5g.svelte-cfle5g{display:none}.rating__label.svelte-cfle5g.svelte-cfle5g{font-size:2em;color:gray;cursor:pointer}.rating__input.svelte-cfle5g:checked~.rating__label.svelte-cfle5g,.rating__input.svelte-cfle5g:hover~.rating__label.svelte-cfle5g{color:gold}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<title data-svelte-h="svelte-hjko01">Iskommute Feedback</title> <div class="container p-10 space-y-4 flex flex-col items-center justify-center h-screen"><h1 data-svelte-h="svelte-cw6aor">Iskommute Feedback</h1> <p data-svelte-h="svelte-qi9jpq">We value your feedback! If you have any suggestions, questions, or encounter any issues while using Iskommute, please don&#39;t hesitate to contact us using the form below. Your input helps us improve Iskommute for everyone.</p> <h2 data-svelte-h="svelte-5etl87">Feedback Form</h2> <p data-svelte-h="svelte-1aeq97f">Rate your experience:</p> <div class="rating flex svelte-cfle5g">${each([5, 4, 3, 2, 1], (number) => {
    return `<input type="radio"${add_attribute("id", `star${number}`, 0)} name="rating"${add_attribute("value", number, 0)} class="rating__input svelte-cfle5g"> <label${add_attribute("for", `star${number}`, 0)} class="rating__label svelte-cfle5g" data-svelte-h="svelte-1wizh81">★</label>`;
  })}</div> <p data-svelte-h="svelte-8eav1b">Feedback:</p> <div class="flex justify-center items-center"><form class="w-full max-w-lg"><textarea required>${escape("")}</textarea></form></div> <button id="generateBtn" class="btn btn-xl variant-filled generate-route-btn svelte-cfle5g" data-svelte-h="svelte-mje0y9">Submit</button> </div>`;
});
export {
  Page as default
};
