/**
 * Draft content (anything still in [brackets]) renders only in local dev —
 * `npm run dev` shows it so we can fill it in; the deployed build hides it.
 */
export const SHOW_DRAFTS = import.meta.env.DEV;
