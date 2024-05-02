import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.Dpx2Lo8Z.js","_app/immutable/chunks/scheduler.LT7sLr-n.js","_app/immutable/chunks/index.DHq8Uwyc.js","_app/immutable/chunks/entry.BERAyqz4.js","_app/immutable/chunks/stores.BDB-LBog.js","_app/immutable/chunks/stores.DFFaEo1b.js"];
export const stylesheets = ["_app/immutable/assets/0.C2vF8oAA.css"];
export const fonts = [];
