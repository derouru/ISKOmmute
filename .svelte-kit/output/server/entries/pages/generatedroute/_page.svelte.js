import { c as create_ssr_component, e as escape, k as each, b as add_attribute } from "../../../chunks/ssr.js";
let startPlaceHolder = "Choose starting point";
let endPlaceHolder = "Choose destination";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let options = [
    {
      value: "Alumni Engineers Centennial Hall",
      label: "Alumni Engineers Centennial Hall"
    },
    {
      value: "Ang Bahay ng Alumni",
      label: "Ang Bahay ng Alumni"
    },
    { value: "Area 2", label: "Area 2" },
    {
      value: "Asian Institute of Tourism",
      label: "Asian Institute of Tourism"
    },
    {
      value: "Benitez Hall",
      label: "Benitez Hall"
    },
    {
      value: "Carillon Tower",
      label: "Carillon Tower"
    },
    {
      value: "Church of the Risen Lord",
      label: "Church of the Risen Lord"
    },
    {
      value: "Gyud Food Hub",
      label: "Gyud Food Hub"
    },
    {
      value: "Institute of Mathematics",
      label: "Institute of Mathematics"
    }
  ];
  return `<div class="container p-10 space-y-4 flex flex-col items-center justify-center h-screen"><h1 data-svelte-h="svelte-1b99i7w">Placeholder Page for /generatedroute</h1> <select class="select">${`<option value="" disabled selected>${escape(startPlaceHolder)}</option>`}${each(options, (option) => {
    return `<option${add_attribute("value", option.value, 0)}>${escape(option.label)}</option>`;
  })}</select> <select class="select">${`<option value="" disabled selected>${escape(endPlaceHolder)}</option>`}${each(options, (option) => {
    return `<option${add_attribute("value", option.value, 0)}>${escape(option.label)}</option>`;
  })}</select> <button class="btn btn-xl variant-filled" data-svelte-h="svelte-swk9rg">Generate Route</button></div>`;
});
export {
  Page as default
};
