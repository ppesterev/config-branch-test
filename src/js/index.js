import { CONFIG_URL } from "./config";

const getSettings = (url) =>
  fetch(url)
    .then((res) => res.json())
    .catch((err) => ({ error: err }));

window.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector("h1");
  getSettings(CONFIG_URL).then((settings) => {
    if (settings.error) {
      return;
    }
    document.title = settings.title;
    heading.textContent = settings.title;
  });
});
