import { create } from "zustand";

/**
 * Merchant inventory. Product: { id, merchantId, merchantName, name, description, price, category, stock, images[], createdAt }
 */
export const useInventoryStore = create((set, get) => ({
  products: [],

  addProduct: (payload) => {
    const id = `inv-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const product = {
      id,
      merchantId: payload.merchantId,
      merchantName: payload.merchantName,
      name: payload.name,
      description: payload.description ?? "",
      price: Number(payload.price),
      category: payload.category,
      stock: Math.max(0, Math.floor(Number(payload.stock) || 0)),
      images: Array.isArray(payload.images) ? payload.images.filter(Boolean) : [],
      createdAt: new Date().toISOString(),
    };
    set((state) => ({ products: [product, ...state.products] }));
    return product;
  },

  updateProduct: (id, payload) =>
    set((state) => ({
      products: state.products.map((p) =>
        p.id !== id
          ? p
          : {
              ...p,
              ...payload,
              name: payload.name ?? p.name,
              description: payload.description ?? p.description,
              price: payload.price != null ? Number(payload.price) : p.price,
              category: payload.category ?? p.category,
              stock: payload.stock != null ? Math.max(0, Math.floor(Number(payload.stock))) : p.stock,
              images: Array.isArray(payload.images) ? payload.images.filter(Boolean) : p.images,
            }
      ),
    })),

  removeProduct: (id) =>
    set((state) => ({ products: state.products.filter((p) => p.id !== id) })),

  getByMerchant: (merchantId) =>
    get().products.filter((p) => p.merchantId === merchantId),

  getProductById: (id) => get().products.find((p) => p.id === id),
}));
