import { useState, useCallback } from "react";
import { toast } from "sonner";

/**
 * Wraps an async API call with loading state and success/error toasts.
 */
export function useApiAction(apiFn, successMessage, errorMessage) {
  const [isLoading, setIsLoading] = useState(false);

  const execute = useCallback(
    async (...args) => {
      setIsLoading(true);
      try {
        const result = await apiFn(...args);
        if (successMessage) toast.success(successMessage);
        return result;
      } catch (err) {
        const msg = err?.response?.data?.message ?? err?.message ?? errorMessage;
        toast.error(msg);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [apiFn, successMessage, errorMessage]
  );

  return { execute, isLoading };
}
