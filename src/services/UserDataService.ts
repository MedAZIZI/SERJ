import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/auth");
  }

  get() {
    return http.get("/auth/user");
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
