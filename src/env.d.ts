/// <reference types="astro/client" />

interface Window {
  __nexformBooted?: boolean;
  plausible?: ((...args: unknown[]) => void) & { q?: unknown[][] };
}
