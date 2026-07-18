function applyTheme(theme) {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);

    btn.textContent = theme === "dark"
        ? "Dark Mode"
        : "Light Mode";
}

const btn = document.querySelector("#themeBtn");

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    applyTheme(savedTheme);
} else {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        applyTheme("dark");
    } else {
        applyTheme("light");
    }
}

window.matchMedia("(prefers-color-scheme: dark)")
.addEventListener("change", () => {
    if (!localStorage.getItem("theme")) {
        applyTheme(
            window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light"
        );
    }
});

btn.addEventListener("click", () => {
    const newTheme = document.body.classList.contains("dark")
        ? "light"
        : "dark";

    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
});