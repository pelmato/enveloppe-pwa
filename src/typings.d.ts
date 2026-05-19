// Fallback ambient declarations for pouchdb packages
// These are overridden by @types/pouchdb* if installed, but prevent TS7016
// when those packages are unavailable or incompatible.
declare module 'pouchdb-browser';
declare module 'pouchdb-find';
