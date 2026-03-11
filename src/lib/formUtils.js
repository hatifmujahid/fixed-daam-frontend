/**
 * Trims string values in an object (for form data before API submit).
 * @param {Record<string, unknown>} data
 * @returns {Record<string, unknown>}
 */
export function trimFormData(data) {
  if (!data || typeof data !== "object") return data;
  const out = {};
  for (const [key, value] of Object.entries(data)) {
    out[key] =
      typeof value === "string" ? value.trim() : Array.isArray(value) ? value.map((v) => (typeof v === "string" ? v.trim() : v)) : value;
  }
  return out;
}

/**
 * Converts a string to title case.
 * @param {string} str
 * @returns {string}
 */
export function toTitleCase(str) {
  if (!str || typeof str !== "string") return str;
  return str.replace(/\w\S*/g, (s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase());
}
