import { c as create_ssr_component, e as escape, j as each, b as add_attribute } from "../../chunks/ssr.js";
import "../../chunks/client.js";
let startPlaceHolder = "Choose starting point";
let endPlaceHolder = "Choose destination";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let options = [
    {
      value: "AECH",
      label: "Alumni Engineers Centennial Hall"
    },
    {
      value: "CSLib",
      label: "College of Science Library"
    },
    {
      value: "EEEI",
      label: "Electrical and Electronics Engineering Institute"
    },
    {
      value: "IMath",
      label: "Institute of Mathematics"
    },
    {
      value: "IESM",
      label: "Institute of Environmental Science and Meterology"
    },
    {
      value: "NIGS",
      label: "National Institute of Geological Sciences"
    }
  ];
  return `<div class="container p-10 space-y-4 flex flex-col items-center justify-center h-screen"><h1 data-svelte-h="svelte-1c5s7cv">Where do you want to go?</h1> <select id="select-start" class="select">${`<option value="" disabled selected>${escape(startPlaceHolder)}</option>`}${each(options, (option) => {
    return `<option${add_attribute("value", option.value, 0)}>${escape(option.label)}</option>`;
  })}</select> <select id="select-dest" class="select">${`<option value="" disabled selected>${escape(endPlaceHolder)}</option>`}${each(options, (option) => {
    return `<option${add_attribute("value", option.value, 0)}>${escape(option.label)}</option>`;
  })}</select> <button id="generateBtn" class="btn btn-xl variant-filled" data-svelte-h="svelte-a4qf2n">Generate Route</button></div>`;
});
export {
  Page as default
};
