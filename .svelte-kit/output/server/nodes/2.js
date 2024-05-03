

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Nvi9F78H.js","_app/immutable/chunks/scheduler.8oj3oVuN.js","_app/immutable/chunks/each.CZZS8ilc.js","_app/immutable/chunks/index.Duw61gZK.js","_app/immutable/chunks/entry.DBeCBiMI.js","_app/immutable/chunks/stores.9kBHBQdw.js"];
export const stylesheets = ["_app/immutable/assets/2.D-6LN_p5.css"];
export const fonts = [];
