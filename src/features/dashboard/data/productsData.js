/** Mock products with relevant stock images (Lorem Flickr by keyword). */

const CATEGORIES = ["Electronics", "Groceries", "Home", "Fashion", "Sports"];

const PRODUCTS = [
  {
    id: "1",
    merchantId: null,
    merchantName: "TechHub",
    name: "Wireless Bluetooth Headphones",
    description: "Premium over-ear headphones with noise cancellation. 30-hour battery, comfortable for all-day use.",
    price: 89.99,
    category: "Electronics",
    merchantName: "TechHub",
    stock: 24,
    images: [
      "https://loremflickr.com/800/600/headphones,wireless?lock=1",
      "https://loremflickr.com/800/600/headphones,earphones?lock=2",
      "https://loremflickr.com/800/600/headphones,music?lock=3",
    ],
  },
  {
    id: "2",
    merchantId: null,
    merchantName: "FreshMart",
    name: "Organic Olive Oil 500ml",
    description: "Cold-pressed extra virgin olive oil. Perfect for cooking and dressings.",
    price: 12.49,
    category: "Groceries",
    stock: 150,
    images: [
      "https://loremflickr.com/800/600/olive,oil,bottle?lock=1",
      "https://loremflickr.com/800/600/olive,oil,cooking?lock=2",
    ],
  },
  {
    id: "3",
    merchantId: null,
    merchantName: "HomeStyle",
    name: "Minimalist Desk Lamp",
    description: "LED desk lamp with adjustable brightness and warm/cool light modes.",
    price: 45.0,
    category: "Home",
    merchantName: "HomeStyle",
    stock: 42,
    images: [
      "https://loremflickr.com/800/600/desk,lamp?lock=1",
      "https://loremflickr.com/800/600/lamp,light?lock=2",
      "https://loremflickr.com/800/600/desk,lamp,led?lock=3",
    ],
  },
  {
    id: "4",
    merchantId: null,
    name: "Cotton Crew Neck T-Shirt",
    description: "100% organic cotton, available in multiple colors. Classic fit.",
    price: 24.99,
    category: "Fashion",
    merchantName: "UrbanWear",
    stock: 200,
    images: [
      "https://loremflickr.com/800/600/tshirt,cotton?lock=1",
      "https://loremflickr.com/800/600/tshirt,clothing?lock=2",
    ],
  },
  {
    id: "5",
    merchantId: null,
    name: "Running Shoes Lightweight",
    description: "Breathable mesh upper, cushioned sole. Ideal for daily runs.",
    price: 79.99,
    category: "Sports",
    merchantName: "RunFast",
    stock: 38,
    images: [
      "https://loremflickr.com/800/600/running,shoes?lock=1",
      "https://loremflickr.com/800/600/sneakers,shoes?lock=2",
      "https://loremflickr.com/800/600/running,shoes,sport?lock=3",
    ],
  },
  {
    id: "6",
    merchantId: null,
    name: "Smart Watch Pro",
    description: "Heart rate, GPS, 50m water resistant. 7-day battery.",
    price: 199.99,
    category: "Electronics",
    merchantName: "TechHub",
    stock: 15,
    images: [
      "https://loremflickr.com/800/600/smartwatch,watch?lock=1",
      "https://loremflickr.com/800/600/smartwatch,wrist?lock=2",
    ],
  },
  {
    id: "7",
    merchantId: null,
    name: "Honey Jar 350g",
    description: "Pure wildflower honey from local beekeepers. No additives.",
    price: 8.99,
    category: "Groceries",
    merchantName: "FreshMart",
    stock: 80,
    images: [
      "https://loremflickr.com/800/600/honey,jar?lock=1",
    ],
  },
  {
    id: "8",
    merchantId: null,
    name: "Throw Pillow Set of 2",
    description: "Soft velvet cover, decorative for sofa or bed.",
    price: 32.0,
    category: "Home",
    merchantName: "HomeStyle",
    stock: 56,
    images: [
      "https://loremflickr.com/800/600/throw,pillow?lock=1",
      "https://loremflickr.com/800/600/cushion,pillow,sofa?lock=2",
    ],
  },
  {
    id: "9",
    merchantId: null,
    name: "Yoga Mat Non-Slip",
    description: "6mm thick, eco-friendly TPE material. Includes carry strap.",
    price: 29.99,
    category: "Sports",
    merchantName: "RunFast",
    stock: 90,
    images: [
      "https://loremflickr.com/800/600/yoga,mat?lock=1",
      "https://loremflickr.com/800/600/yoga,mat,fitness?lock=2",
    ],
  },
  {
    id: "10",
    merchantId: null,
    name: "Denim Jacket Classic",
    description: "Medium wash denim, durable and timeless style.",
    price: 69.99,
    category: "Fashion",
    merchantName: "UrbanWear",
    stock: 28,
    images: [
      "https://loremflickr.com/800/600/denim,jacket?lock=1",
      "https://loremflickr.com/800/600/denim,jacket,clothing?lock=2",
    ],
  },
];

/** All products for buyers: seed PRODUCTS + merchant inventory. */
export function getAllProducts(inventoryProducts = []) {
  return [...PRODUCTS, ...inventoryProducts];
}

export { PRODUCTS, CATEGORIES };
