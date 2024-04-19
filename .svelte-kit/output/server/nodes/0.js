import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.CfaBR248.js","_app/immutable/chunks/scheduler.tyKng7Df.js","_app/immutable/chunks/index.DhJ951SH.js","_app/immutable/chunks/entry.C-M1Apjt.js","_app/immutable/chunks/stores.4Tg6G7m3.js","_app/immutable/chunks/stores.CYGu1OVp.js"];
export const stylesheets = ["_app/immutable/assets/0.D9Uuf_om.css"];
export const fonts = [];
