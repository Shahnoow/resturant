export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("user") !== "Undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  return userInfo;
};
