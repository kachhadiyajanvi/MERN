const getProduct = (req, res) => {
    res.send("get product Called")
}

const postProduct = (req, res) => {
    res.send("post product Called")
}

export { getProduct, postProduct }