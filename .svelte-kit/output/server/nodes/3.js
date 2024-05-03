

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/feedback/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.VF19eVft.js","_app/immutable/chunks/scheduler.8oj3oVuN.js","_app/immutable/chunks/each.CZZS8ilc.js","_app/immutable/chunks/index.Duw61gZK.js"];
export const stylesheets = ["_app/immutable/assets/3.DJJGxg4Q.css"];
export const fonts = [];
