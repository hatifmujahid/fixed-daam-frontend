import { create } from "zustand";

/**
 * Order: { id, items: [{ productId, name, price, quantity, merchantId? }], total, qrValue, status: 'locked'|'ready'|'delivered', createdAt }
 */
export const useOrdersStore = create((set, get) => ({
  orders: [],
  addOrder: (orderPayload) => {
    const id = `ORD-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const order = {
      id,
      items: orderPayload.items.map((i) => ({
        productId: i.productId,
        name: i.name,
        price: i.price,
        quantity: i.quantity,
        merchantId: i.merchantId ?? null,
      })),
      total: orderPayload.total,
      qrValue: orderPayload.qrValue ?? id,
      status: "locked",
      createdAt: new Date().toISOString(),
    };
    set((state) => ({ orders: [order, ...state.orders] }));
    return order;
  },
  markReady: (orderId) =>
    set((state) => ({
      orders: state.orders.map((o) =>
        o.id === orderId && o.status === "locked" ? { ...o, status: "ready" } : o
      ),
    })),
  markDelivered: (orderId) =>
    set((state) => ({
      orders: state.orders.map((o) =>
        o.id === orderId ? { ...o, status: "delivered" } : o
      ),
    })),
  getOrdersForMerchant: (merchantId) =>
    get().orders.filter((o) =>
      o.items.some((i) => i.merchantId === merchantId)
    ),
}));
