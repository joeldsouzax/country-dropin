/** @format */

/// <reference types="vite/client" />

/**
 * specify environment variable types
 */
interface ImportMetaEnv {
  readonly VITE_ACCESS_TOKEN: string;
  readonly VITE_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
