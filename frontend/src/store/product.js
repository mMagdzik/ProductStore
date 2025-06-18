import { create } from "zustand";

//const [state, setState] = useState([]) GLOBAL STATE
export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "Please fill in all fields" };
    }

    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct), //zamienia obiekt na string w formacie json
    });
    const data = await res.json(); //zamiana odp. JSON na obiekt - parse
    set((state) => ({ products: [...state.products, data.data] }));

    return { success: true, message: "Product crerated successfully" };
  },
}));
