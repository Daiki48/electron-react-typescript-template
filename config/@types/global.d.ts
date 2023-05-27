import { preloadObject } from "../preload";

declare global {
  interface Window {
    api: typeof preloadObject;
  }
}

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
