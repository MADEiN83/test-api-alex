const HomeRoutes = require("./home");
const ProductRoutes = require("./product");

const routesArray = [HomeRoutes, ProductRoutes];

exports.bind = (server) => {
  routesArray.forEach((routes) => routes.bind(server));
};
