import day20260721 from "./2026-07-21.js";

export const days = {
  [day20260721.id]: day20260721
};

export function getSelectedDay() {
  const id = new URLSearchParams(location.search).get("day") || day20260721.id;
  return days[id] || day20260721;
}
