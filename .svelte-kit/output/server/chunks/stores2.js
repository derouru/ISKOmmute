import { w as writable } from "./index.js";
const splashScreenStore = writable(true);
const startValue = writable(true);
const endValue = writable(true);
export {
  startValue as a,
  endValue as e,
  splashScreenStore as s
};
