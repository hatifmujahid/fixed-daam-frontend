import { QRCodeSVG } from "qrcode.react";
import { useOrdersStore } from "@/stores/ordersStore";
import { toast } from "sonner";

export function OrderCard({ order }) {
  const markDelivered = useOrdersStore((s) => s.markDelivered);
  const isDelivered = order.status === "delivered";
  const isReady = order.status === "ready";

  const statusLabel =
    order.status === "delivered"
      ? "Delivered"
      : order.status === "ready"
        ? "Ready for pickup"
        : "Preparing";

  const handleGetDelivered = () => {
    markDelivered(order.id);
    toast.success("Order marked as collected.");
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                isDelivered ? "bg-slate-100 text-slate-600" : isReady ? "bg-blue-100 text-blue-800" : "bg-amber-100 text-amber-800"
              }`}
            >
              {statusLabel}
            </span>
          </div>
          <p className="mt-2 text-sm text-slate-600">
            {new Date(order.createdAt).toLocaleString(undefined, {
              dateStyle: "medium",
              timeStyle: "short",
            })}
          </p>
          <p className="mt-2 font-semibold text-slate-900">${Number(order.total).toFixed(2)}</p>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            {order.items.map((item, i) => (
              <li key={i}>
                {item.name} × {item.quantity}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center gap-3 sm:shrink-0">
          <div className="rounded-xl border border-slate-200 bg-white p-2">
            <QRCodeSVG value={order.qrValue} size={120} />
          </div>
          {!isDelivered ? (
            isReady ? (
              <button
                type="button"
                onClick={handleGetDelivered}
                className="min-h-[44px] rounded-2xl bg-primary px-4 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:shadow-primary/35 hover:bg-orange-600 transition-all touch-manipulation"
              >
                Mark as collected
              </button>
            ) : (
              <p className="text-center text-sm text-slate-500 max-w-[140px]">Store is preparing. Show QR when ready for pickup.</p>
            )
          ) : (
            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600">
              Delivered
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
