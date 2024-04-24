export function isUserLogin() {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? user : null;
}

export function logout() {
  localStorage.removeItem("user");
}
