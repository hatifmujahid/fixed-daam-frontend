import { createPortal } from "react-dom";
import { useEffect } from "react";
import { cn } from "@/lib/cn";

function DialogOverlay({ open, onOpenChange, className, children, ...props }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onOpenChange?.(false);
    };
    if (open) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-black/70 backdrop-blur-sm",
        "flex items-center justify-center p-4",
        className
      )}
      onClick={() => onOpenChange?.(false)}
      role="dialog"
      aria-modal="true"
      {...props}
    >
      {children}
    </div>
  );
}

function DialogContent({
  open,
  onOpenChange,
  className,
  children,
  onClick,
  ...props
}) {
  if (!open) return null;

  return (
    <div
      className={cn(
        "relative z-50 w-full max-w-lg rounded-xl border border-border bg-card p-6 text-card-foreground shadow-xl",
        "max-h-[90vh] overflow-y-auto",
        className
      )}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.(e);
      }}
      role="document"
      {...props}
    >
      {children}
    </div>
  );
}

function DialogHeader({ className, ...props }) {
  return (
    <div
      className={cn("mb-4 space-y-1.5", className)}
      {...props}
    />
  );
}

function DialogTitle({ className, ...props }) {
  return (
    <h2
      className={cn("text-lg font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  );
}

function DialogDescription({ className, ...props }) {
  return (
    <p
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

export function Dialog({ open, onOpenChange, children }) {
  const content = (
    <DialogOverlay open={open} onOpenChange={onOpenChange}>
      <DialogContent open={open} onOpenChange={onOpenChange}>
        {children}
      </DialogContent>
    </DialogOverlay>
  );
  return createPortal(content, document.body);
}

export const DialogContentWrapper = DialogContent;

Dialog.Content = DialogContent;
Dialog.Header = DialogHeader;
Dialog.Title = DialogTitle;
Dialog.Description = DialogDescription;
