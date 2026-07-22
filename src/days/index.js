import day20260721 from "./2026-07-21.js?v=20260722d";
import day20260722 from "./2026-07-22.js?v=20260722d";

export const days = {
  [day20260721.id]: day20260721,
  [day20260722.id]: day20260722
};

export function getSelectedDay() {
  const id = new URLSearchParams(location.search).get("day") || day20260722.id;
  return days[id] || day20260722;
}
