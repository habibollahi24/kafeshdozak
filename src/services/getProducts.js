import http from "./httpServer";

export const getProducts = () => {
  return http.get("/product");
};
