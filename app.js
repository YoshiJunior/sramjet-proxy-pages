const form = document.querySelector("#go");
const input = document.querySelector("#url");
const status = document.querySelector("#status");

function normalizeUrl(value) {
  value = value.trim();
  if (!value) return null;
  if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(value)) {
    value = "https://" + value;
  }
  try {
    return new URL(value).href;
  } catch {
    return null;
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const target = normalizeUrl(input.value);
  if (!target) {
    status.textContent = "Enter a valid URL.";
    return;
  }

  const transport = window.PROXY_CONFIG?.transport || "";
  if (!transport || transport.includes("YOUR-WISP-ENDPOINT")) {
    status.textContent =
      "Set your Wisp/transport endpoint in config.js first.";
    return;
  }

  // This starter intentionally does not bundle a third-party transport
  // server or proxy endpoint. Install the current Scramjet client/transport
  // packages from their official project and wire them into this page.
  status.textContent =
    "Transport configured. Add the current Scramjet client bundle to app.js.";
  console.log({ target, transport });
});
