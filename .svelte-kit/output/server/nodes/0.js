import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.D6qgj58-.js","_app/immutable/chunks/scheduler.8oj3oVuN.js","_app/immutable/chunks/index.Duw61gZK.js","_app/immutable/chunks/entry.DKGQwVBI.js","_app/immutable/chunks/stores.C232y7Cg.js","_app/immutable/chunks/stores.CbPsz-nn.js"];
export const stylesheets = ["_app/immutable/assets/0.C2vF8oAA.css"];
export const fonts = [];
