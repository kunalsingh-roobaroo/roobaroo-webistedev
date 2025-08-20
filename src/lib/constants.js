export const staticAlt = "Roobaroo";
export const responsiveImageSizes = `
  (max-width: 640px) 100vw,   /* mobile */
  (max-width: 1024px) 50vw,   /* tablets */
  (max-width: 1536px) 33vw,   /* laptops */
  25vw                        /* desktops */
`;

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


export function formatDate(dateString) {
  const date = new Date(dateString);

  const options = { month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}