export default function useIsAdmin() {
  if (sessionStorage.getItem("isAdmin"))
    return sessionStorage.getItem("isAdmin");
  return null;
}
