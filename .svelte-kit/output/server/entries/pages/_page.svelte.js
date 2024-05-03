import { c as create_ssr_component, e as escape, j as each, b as add_attribute } from "../../chunks/ssr.js";
import "../../chunks/client.js";
const css = {
  code: ".wdywtg-text.svelte-w7eyyb{font-size:1.4rem;text-align:center;font-weight:700;margin-bottom:1.8rem}#generateBtn.svelte-w7eyyb{font-size:1.4rem;text-align:center;font-weight:600;background-color:#9C293E;color:white;margin-top:1.8rem}.generate-route-btn.svelte-w7eyyb:hover{background-color:#800000}.select.svelte-w7eyyb{border-color:#979797;background-color:#F2F2F2;text-align:center;font-weight:600;color:#979797;border-radius:20px}",
  map: null
};
let startPlaceHolder = "Choose starting point...";
let endPlaceHolder = "Choose destination...";
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
  $$result.css.add(css);
  return `<div class="container p-10 space-y-4 flex flex-col items-center justify-center h-screen"><h1 class="wdywtg-text svelte-w7eyyb" data-svelte-h="svelte-tha1lq">Where do you want to go?</h1> <select id="select-start" class="select svelte-w7eyyb">${`<option value="" disabled selected>${escape(startPlaceHolder)}</option>`}${each(options, (option) => {
    return `<option${add_attribute("value", option.value, 0)}>${escape(option.label)}</option>`;
  })}</select> <select id="select-dest" class="select svelte-w7eyyb">${`<option value="" disabled selected>${escape(endPlaceHolder)}</option>`}${each(options, (option) => {
    return `<option${add_attribute("value", option.value, 0)}>${escape(option.label)}</option>`;
  })}</select> <button id="generateBtn" class="btn btn-xl variant-filled generate-route-btn svelte-w7eyyb" data-svelte-h="svelte-hk4u2p">Generate Route</button> </div>`;
});
export {
  Page as default
};
