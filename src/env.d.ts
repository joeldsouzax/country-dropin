/** @format */

/// <reference types="vite/client" />

/**
 * specify environment variable types
 */
interface ImportMetaEnv {
  readonly VITE_ACCESS_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
