export const getImageUrl = (path) => {
  const baseUrl = (import.meta.env.BASE_URL || "/").replace(/\/?$/, "/");
  const cleanPath = String(path || "").replace(/^\/+/, "");

  // If the caller already passed "assets/...", don't double-prefix it.
  const assetPath = cleanPath.startsWith("assets/") ? cleanPath : `assets/${cleanPath}`;
  return `${baseUrl}${assetPath}`;
};
