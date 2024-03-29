import { loginRequired, register, login, verification } from "../controllers/userControllers";
import { getAllCart, addToCart, removeFromCart } from "../controllers/keranjangControllers";
import { createPayment, getAllPayment, getOnePayment } from "../controllers/paymentControllers";
import { postOneProduct, getAllProduct } from "../controllers/adminControllers";

const routes = (app) => {
  app.route("/auth/register").post(register);

  app.route("/login").post(login);

  app.route("/keranjang")
    .post(loginRequired, addToCart)
    .delete(loginRequired, removeFromCart)
    .get(loginRequired, getAllCart);
  app.route("/admin/product")
    .post(loginRequired, postOneProduct)
    .get(loginRequired, getAllProduct);

  app.route("/payment")
    .post(loginRequired, createPayment)
    .get(loginRequired, getAllPayment);

  app.route("/payment/detail/:idPayment")
    .get(loginRequired, getOnePayment);

  app.route("/verification")
    .post(verification)
};

export default routes;

