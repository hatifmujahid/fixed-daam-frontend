import { useEffect } from "react";
import { useForm } from "react-hook-form";

/**
 * Form tied to dialog open state; resets when dialog opens, optionally with initial data.
 */
export function useDialogForm({
  open,
  defaultValues,
  initialData,
  resolver,
  mode = "onSubmit",
}) {
  const form = useForm({
    defaultValues,
    resolver,
    mode,
  });

  useEffect(() => {
    if (open) {
      if (initialData) {
        form.reset(initialData);
      } else {
        form.reset(defaultValues);
      }
    }
  }, [open, initialData, defaultValues, form]);

  return form;
}
