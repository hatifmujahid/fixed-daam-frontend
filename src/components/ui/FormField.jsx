/**
 * FormField — label, optional hint, error message, and child input.
 * @param {Object} props
 * @param {string} [props.label]
 * @param {boolean} [props.required]
 * @param {string} [props.error]
 * @param {string} [props.id]
 * @param {string} [props.hint]
 * @param {React.ReactNode} [props.children]
 */
export function FormField({
  label,
  required,
  error,
  id,
  hint,
  children,
}) {
  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-foreground"
        >
          {label}
          {required && <span className="text-primary ml-0.5">*</span>}
        </label>
      )}
      {children}
      {hint && !error && (
        <p className="text-xs text-muted-foreground">{hint}</p>
      )}
      {error && (
        <p className="text-xs text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
