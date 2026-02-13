export default function dateFormatter(publishedAt: string) {
  const date = new Date(publishedAt);
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
