import http from "./httpServer";

export const loginUser = (data) => {
  return http.post("/user/login", data);
};
