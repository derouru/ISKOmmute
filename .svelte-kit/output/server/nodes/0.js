import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.DcVasPK6.js","_app/immutable/chunks/scheduler.Bw6-MMLU.js","_app/immutable/chunks/index.DJvQwRSe.js","_app/immutable/chunks/entry.CpB-muKB.js","_app/immutable/chunks/stores.BIxpo1Mn.js"];
export const stylesheets = ["_app/immutable/assets/0.D9Uuf_om.css"];
export const fonts = [];
