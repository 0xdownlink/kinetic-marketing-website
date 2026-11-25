/**
 * Joins class names, skipping empty ones. CSS module lookups are typed
 * `string | undefined` under noUncheckedIndexedAccess, so they go through here
 * rather than a template literal.
 */
export function cx(
  ...names: readonly (string | false | null | undefined)[]
): string {
  return names.filter(Boolean).join(" ");
}
