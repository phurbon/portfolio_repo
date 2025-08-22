export const getImageUrl = (path) => {
  const baseUrl = import.meta.env.BASE_URL || '/';
  return `${baseUrl}assets/${path}`;
};
