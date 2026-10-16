export function getErrorMsg(err) {
  return err?.response?.data?.message || err?.message || "Something went wrong";
}
