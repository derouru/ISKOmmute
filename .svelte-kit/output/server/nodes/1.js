

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CErZHxWR.js","_app/immutable/chunks/scheduler.tyKng7Df.js","_app/immutable/chunks/index.DhJ951SH.js","_app/immutable/chunks/stores.laYEDM6U.js","_app/immutable/chunks/entry.CRayvHsR.js"];
export const stylesheets = [];
export const fonts = [];