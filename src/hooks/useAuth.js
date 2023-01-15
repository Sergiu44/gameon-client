export default function useAuth(options) {
  return window.sessionStorage.getItem("token")
    ? {
        ...options,
        Authorization: "Bearer " + window.sessionStorage.getItem("token"),
      }
    : options;
}
