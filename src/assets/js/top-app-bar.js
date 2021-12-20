import { debounce } from "./utils/debounce";

const topAppBar = {
    domElement: document.querySelector(".top-app-bar"),
    shadowClass: "top-app-bar--with-shadow",
    hasShadow: false,
    timeout: false,
    timeoutDuration: 250,
};

export function handleTopAppBar() {
    window.addEventListener("scroll", () => {
        debounce(
            topAppBar.timeout,
            topAppBar.timeoutDuration,
            handleTopAppBarShadow
        );
    });
}

function handleTopAppBarShadow() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 64 && !topAppBar.hasShadow) {
        topAppBar.domElement.classList.add(topAppBar.shadowClass);
        topAppBar.hasShadow = true;
    } else if (scrollPosition <= 64 && topAppBar.hasShadow) {
        topAppBar.domElement.classList.remove(topAppBar.shadowClass);
        topAppBar.hasShadow = false;
    }
}