import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.CKq1j7UD.js","_app/immutable/chunks/scheduler.tyKng7Df.js","_app/immutable/chunks/index.DhJ951SH.js","_app/immutable/chunks/entry.BspS5fTP.js","_app/immutable/chunks/stores.r0GZvXTp.js","_app/immutable/chunks/stores.DAN5qcGm.js"];
export const stylesheets = ["_app/immutable/assets/0.D9Uuf_om.css"];
export const fonts = [];
