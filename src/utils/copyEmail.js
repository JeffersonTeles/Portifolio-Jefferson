const EMAIL = "jeffersontelesdeoliveira@gmail.com";

export const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(EMAIL);
    const toast = document.querySelector(".copy-toast");
    if (toast) {
      toast.classList.add("is-visible");
      setTimeout(() => toast.classList.remove("is-visible"), 1400);
    }
  } catch {
    window.location.href = `mailto:${EMAIL}`;
  }
};
