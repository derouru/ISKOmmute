

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.B_gQjmyt.js","_app/immutable/chunks/scheduler.LT7sLr-n.js","_app/immutable/chunks/index.DHq8Uwyc.js","_app/immutable/chunks/entry.BERAyqz4.js","_app/immutable/chunks/stores.DFFaEo1b.js"];
export const stylesheets = ["_app/immutable/assets/2.D-6LN_p5.css"];
export const fonts = [];
