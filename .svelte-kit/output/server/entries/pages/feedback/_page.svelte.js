import { c as create_ssr_component, j as each, e as escape, b as add_attribute } from "../../../chunks/ssr.js";
const css = {
  code: "#submitBtn.svelte-5zpw0m.svelte-5zpw0m{font-size:1.4rem;text-align:center;font-weight:600;background-color:#9C293E;color:white;margin-top:1.8rem}.submit-feedback-btn.svelte-5zpw0m.svelte-5zpw0m:hover{background-color:#800000}.rating.svelte-5zpw0m.svelte-5zpw0m{direction:rtl}.rating__input.svelte-5zpw0m.svelte-5zpw0m{display:none}.rating__label.svelte-5zpw0m.svelte-5zpw0m{font-size:2em;color:gray;cursor:pointer}.rating__input.svelte-5zpw0m:checked~.rating__label.svelte-5zpw0m,.rating__input.svelte-5zpw0m:hover~.rating__label.svelte-5zpw0m{color:gold}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<title data-svelte-h="svelte-hjko01">Iskommute Feedback</title> <div class="container p-10 space-y-4 flex flex-col items-center justify-center h-screen"><h1 data-svelte-h="svelte-cw6aor">Iskommute Feedback</h1> <p data-svelte-h="svelte-qi9jpq">We value your feedback! If you have any suggestions, questions, or encounter any issues while using Iskommute, please don&#39;t hesitate to contact us using the form below. Your input helps us improve Iskommute for everyone.</p> <h2 data-svelte-h="svelte-5etl87">Feedback Form</h2> <p data-svelte-h="svelte-1aeq97f">Rate your experience:</p> <div class="rating flex svelte-5zpw0m">${each([5, 4, 3, 2, 1], (number) => {
    return `<input type="radio"${add_attribute("id", `star${number}`, 0)} name="rating"${add_attribute("value", number, 0)} class="rating__input svelte-5zpw0m">  <button class="rating__label svelte-5zpw0m"${add_attribute("id", `stars${number}`, 0)} data-svelte-h="svelte-hs4aro">★</button>`;
  })}</div> <p data-svelte-h="svelte-8eav1b">Feedback:</p> <div class="flex justify-center items-center"><form class="w-full max-w-lg"><textarea id="feedback-txtarea" required>${escape("")}</textarea></form></div> <button id="submitBtn" class="btn btn-xl variant-filled submit-feedback-btn svelte-5zpw0m" data-svelte-h="svelte-r3qmsf">Submit</button> </div>`;
});
export {
  Page as default
};
