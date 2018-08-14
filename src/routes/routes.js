import Home from "./../components/Home";
import Contact from "./../components/Contact"

const indexRoutes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  { redirect: true, path: "/", to: "/home", name: "Chat Bot" }
];

export default indexRoutes;
