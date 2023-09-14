import { createContext } from "react";

const UserContext = createContext({
  // default value
  loggedInUser: "default",
});

export default UserContext;
