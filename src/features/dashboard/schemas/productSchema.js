import { z } from "zod";

export const productFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(200, "Name is too long"),
  description: z.string().max(2000, "Description is too long").optional(),
  price: z.coerce.number().min(0, "Price must be 0 or more"),
  category: z.string().min(1, "Category is required"),
  stock: z.coerce.number().int().min(0, "Stock must be 0 or more"),
  storeName: z.string().min(1, "Store name is required").max(100).optional(),
  imageUrls: z.string().optional(),
});

/** Parse imageUrls string into array of trimmed non-empty URLs */
export function parseImageUrls(imageUrls) {
  if (!imageUrls || typeof imageUrls !== "string") return [];
  return imageUrls
    .split(/[\n,]+/)
    .map((s) => s.trim())
    .filter(Boolean);
}
