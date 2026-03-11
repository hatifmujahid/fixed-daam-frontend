import { Button } from "@/components/ui/Button";

/**
 * Footer for dialog forms: Cancel + Submit with loading state.
 */
export function DialogFormFooter({
  onCancel,
  submitText = "Save",
  isLoading = false,
}) {
  return (
    <div className="flex justify-end gap-2 pt-4 border-t border-border mt-4">
      <Button variant="secondary" type="button" onClick={onCancel} disabled={isLoading}>
        Cancel
      </Button>
      <Button variant="primary" type="submit" disabled={isLoading}>
        {isLoading ? "Saving…" : submitText}
      </Button>
    </div>
  );
}
