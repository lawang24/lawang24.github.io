(() => {
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");
  const colorPreference = window.matchMedia("(prefers-color-scheme: dark)");

  if (!toggle) return;

  const readSavedTheme = () => {
    try {
      const value = localStorage.getItem("theme");
      return value === "light" || value === "dark" ? value : null;
    } catch (_) {
      return null;
    }
  };

  const resolvedTheme = () =>
    root.dataset.theme === "dark" ? "dark" : "light";

  const updateToggle = () => {
    const nextTheme = resolvedTheme() === "dark" ? "light" : "dark";
    toggle.setAttribute("aria-label", `Switch to ${nextTheme} theme`);
    toggle.setAttribute("title", `Switch to ${nextTheme} theme`);
  };

  const applyTheme = (theme, savePreference = false) => {
    if (theme === "dark") {
      root.dataset.theme = "dark";
    } else {
      delete root.dataset.theme;
    }

    if (savePreference) {
      try {
        localStorage.setItem("theme", theme);
      } catch (_) {}
    }

    updateToggle();
  };

  toggle.addEventListener("click", () => {
    const nextTheme = resolvedTheme() === "dark" ? "light" : "dark";
    applyTheme(nextTheme, true);
  });

  colorPreference.addEventListener("change", (event) => {
    if (!readSavedTheme()) {
      applyTheme(event.matches ? "dark" : "light");
    }
  });

  updateToggle();
})();
