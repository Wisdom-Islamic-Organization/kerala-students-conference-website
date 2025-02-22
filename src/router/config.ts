const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: "/login",
    exact: true,
    component: "Login",
  },
  {
    path: "/register",
    exact: true,
    component: "Register",
  },
  {
    path: "/admin",
    exact: true,
    component: "Admin",
    protected: true,
  },
  {
    path: "/:examId",
    exact: true,
    component: "Exams",
  }
];

export default routes;
