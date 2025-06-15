
export const getProducts = async(req, res) => {
    try {
        const products = await Product.find({}); //empty object - fetch all the products
        res.status(200).json({ success: true, data: products })
    }   catch (error) {
        console.log("error in fetching:", error.message)
        res.status(500).json({ success: false, message: "Server Error"})
    }
}