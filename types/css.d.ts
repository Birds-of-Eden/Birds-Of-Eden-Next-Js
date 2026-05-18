// Allow side-effect imports for global CSS in TS (Next.js handles bundling).
declare module "*.css";
declare module "*.scss";
declare module "*.sass";
declare module "*.less";

// Some packages expose CSS entrypoints without TS declarations.
declare module "@splidejs/react-splide/css";

