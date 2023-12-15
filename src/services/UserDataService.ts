import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/auth");
  }

  get() {
    return http.get("/user/get");
  }

  signup(data: any) {
    return http.post("/auth/signup", data);
  }

  login(data: any) {
    return http.post("/auth/login", data);
  }

  update(data: any) {
    return http.put("/auth/editUser", data);
  }

  requestResetPassword(data: any) {
    return http.post("/auth/requestResetPassword", data)
  }

  associateJob(data: any) {
    return http.post("/user/associate", data)
  }

  verifyCode(data: any) {
    return http.post("/auth/verifyCode", data)
  }

  resetPassword(data: any) {
    return http.post("/auth/resetPassword", data)
  }

  getConversation(data: any) {
    return http.get("/user/conv")
  }
/*
  update(id: any, data: any) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id: any) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title: any) {
    return http.get(`/tutorials?title=${title}`);
  }*/
}

export default new TutorialDataService();
