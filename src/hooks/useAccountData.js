export default function useAccountData() {
  if (sessionStorage.getItem("firstName") || sessionStorage.getItem("lastName"))
    return (
      sessionStorage.getItem("firstName") +
      " " +
      sessionStorage.getItem("lastName")
    );
  return null;
}
