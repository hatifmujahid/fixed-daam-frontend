import { cn } from "@/lib/cn";
import {
  BUTTON_PRIMARY_CLASS,
  BUTTON_SECONDARY_CLASS,
  BUTTON_TERTIARY_CLASS,
} from "@/lib/styles";

const variantClasses = {
  primary: BUTTON_PRIMARY_CLASS,
  secondary: BUTTON_SECONDARY_CLASS,
  tertiary: BUTTON_TERTIARY_CLASS,
};

/**
 * Button — primary (orange), secondary (border), or tertiary (ghost).
 * @param {Object} props
 * @param {"primary"|"secondary"|"tertiary"} [props.variant="primary"]
 * @param {React.ReactNode} [props.children]
 * @param {string} [props.className]
 */
export function Button({
  variant = "primary",
  className,
  children,
  ...rest
}) {
  const base = variantClasses[variant] ?? variantClasses.primary;
  return (
    <button type="button" className={cn(base, className)} {...rest}>
      {children}
    </button>
  );
}
