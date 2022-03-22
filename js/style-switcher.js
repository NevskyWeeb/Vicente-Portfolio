/* ============================= Toggle Style Switcher ============================= */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide Style Switcher On Scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

/* ============================= Theme Colors ============================= */
const alternativeStyle = document.querySelectorAll(".alternate-style");
const colorSelection = document.querySelectorAll(".colorSelection");


function setActiveStyle(color) {
    alternativeStyle.forEach((style) => {
        colorSelection.forEach((selections) => {
            if (color === style.getAttribute("title")) {
                style.removeAttribute("disabled");
                if (color == "color-1") {
                    localStorage.setItem('colors', 1);
                    if (selections.classList.contains("color-1"))
                        selections.classList.add("selected");
                }
                else if (color == "color-2") {
                    localStorage.setItem('colors', 2);
                    if (selections.classList.contains("color-2"))
                        selections.classList.add("selected");
                }
                else if (color == "color-3") {
                    localStorage.setItem('colors', 3);
                    if (selections.classList.contains("color-3"))
                        selections.classList.add("selected");
                }
                else if (color == "color-4") {
                    localStorage.setItem('colors', 4);
                    if (selections.classList.contains("color-4"))
                        selections.classList.add("selected");
                }
                else if (color == "color-5") {
                    localStorage.setItem('colors', 5);
                    if (selections.classList.contains("color-5"))
                        selections.classList.add("selected");
                }
            }
            else {
                style.setAttribute("disabled", "true");
                if (color == "color-1") {
                    if (!selections.classList.contains("color-1"))
                        selections.classList.remove("selected");
                }
                else if (color == "color-2") {
                    if (!selections.classList.contains("color-2"))
                        selections.classList.remove("selected");
                }
                else if (color == "color-3") {
                    if (!selections.classList.contains("color-3"))
                        selections.classList.remove("selected");
                }
                else if (color == "color-4") {
                    if (!selections.classList.contains("color-4"))
                        selections.classList.remove("selected");
                }
                else if (color == "color-5") {
                    if (!selections.classList.contains("color-5"))
                        selections.classList.remove("selected");
                }
            }
        });
    });
}

/* ============================= Theme Light and Dark Mode ============================= */
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem('darkTheme', 1);
    }
    else {
        localStorage.setItem('darkTheme', 0);
    }
});

window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});

/* ============================= Load Stored Items ============================= */
// Theme
const lastTheme = localStorage.getItem('darkTheme');

if (lastTheme == 1) {
    document.body.classList.toggle("dark")
    dayNight.querySelector("i").classList.add("fa-sun");
}
else if (lastTheme == 0) {
    document.body.classList.remove("dark")
    dayNight.querySelector("i").classList.add("fa-moon");
}
else {
    document.body.classList.remove("dark")
    dayNight.querySelector("i").classList.add("fa-moon");
}

// Colors
let selectedColor;
const lastColor = localStorage.getItem("colors");

if (lastColor == 1) {
    selectedColor = 'color-1';
    alternativeStyle.forEach((style) => {
        colorSelection.forEach((selections) => {
            if (selectedColor === style.getAttribute("title")) {
                style.removeAttribute("disabled");
                if (selections.classList.contains("color-1"))
                    selections.classList.add("selected");
            }
            else {
                style.setAttribute("disabled", "true");
            }
        });
    });
}
else if (lastColor == 2) {
    selectedColor = 'color-2';
    alternativeStyle.forEach((style) => {
        colorSelection.forEach((selections) => {
            if (selectedColor === style.getAttribute("title")) {
                style.removeAttribute("disabled");
                if (selections.classList.contains("color-2"))
                    selections.classList.add("selected");
            }
            else {
                style.setAttribute("disabled", "true");
            }
        });
    });
}
else if (lastColor == 3) {
    selectedColor = 'color-3';
    alternativeStyle.forEach((style) => {
        colorSelection.forEach((selections) => {
            if (selectedColor === style.getAttribute("title")) {
                style.removeAttribute("disabled");
                if (selections.classList.contains("color-3"))
                    selections.classList.add("selected");
            }
            else {
                style.setAttribute("disabled", "true");
            }
        });
    });
}
else if (lastColor == 4) {
    selectedColor = 'color-4';
    alternativeStyle.forEach((style) => {
        colorSelection.forEach((selections) => {
            if (selectedColor === style.getAttribute("title")) {
                style.removeAttribute("disabled");
                if (selections.classList.contains("color-4"))
                    selections.classList.add("selected");
            }
            else {
                style.setAttribute("disabled", "true");
            }
        });
    });
}
else if (lastColor == 5) {
    selectedColor = 'color-5';
    alternativeStyle.forEach((style) => {
        colorSelection.forEach((selections) => {
            if (selectedColor === style.getAttribute("title")) {
                style.removeAttribute("disabled");
                if (selections.classList.contains("color-5"))
                    selections.classList.add("selected");
            }
            else {
                style.setAttribute("disabled", "true");
            }
        });
    });
}
else {
    selectedColor = 'color-1';
    alternativeStyle.forEach((style) => {
        colorSelection.forEach((selections) => {
            if (selectedColor === style.getAttribute("title")) {
                style.removeAttribute("disabled");
                if (selections.classList.contains("color-1"))
                    selections.classList.add("selected");
            }
            else {
                style.setAttribute("disabled", "true");
            }
        });
    });
}
