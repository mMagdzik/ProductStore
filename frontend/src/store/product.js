import { create } from "zustand";


//const [state, setState] = useState([]) GLOBAL STATE
export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
}))