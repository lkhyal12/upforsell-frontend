export function getErrorMsg(err) {
  return err?.response?.data?.message || err?.message || "Something went wrong";
}

export function generateGuestId() {
  let guestId = localStorage.getItem("guestId");

  if (!guestId) {
    guestId = `guest_${crypto.randomUUID()}`;
    localStorage.setItem("guestId", guestId);
  }

  return guestId;
}
