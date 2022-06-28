import http from "./httpServer";

export const signupUser = (data) => {
  return http.post("/user/register", data);
};
