exports.bind = (server) => {
  server.get("/product/:id", (req, res) => {
    res.send(`product #${req.params.id}`);
  });

  server.post("/products", (req, res) => {
    const myProduct = req.body;
    res.send(`product #${myProduct.reference}`);
  });
};
