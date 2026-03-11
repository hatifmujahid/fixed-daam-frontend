import clsx from "classnames";

/**
 * Merges class names. Use for conditional or combined Tailwind classes.
 * @param {...import("classnames").ArgumentArray} args - Class names or arrays/objects
 * @returns {string}
 */
export function cn(...args) {
  return clsx(args);
}
