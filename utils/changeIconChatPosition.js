export function chageIconChatPosition() {
  setTimeout(() => {
    if (typeof window) {
      const iconChat = document.getElementById(
        "hubspot-messages-iframe-container"
      );
      if (iconChat) {
        iconChat.style.marginBottom = "50px";
        if (iconChat.style.height === "100%") {
          iconChat.style.marginBottom = "0px";
        }
      }
    }
  }, 10000);
}
