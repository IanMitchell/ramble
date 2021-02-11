export default function formatDate(date) {
  const value = new Date(date);
  return value.toLocaleString();
}
