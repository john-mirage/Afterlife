const fabElement = document.querySelector("#fab");
const fabVisibleClass = "page__fab--visible";

let fabIsVisible = false;

/**
 * Handle the fab initial visibility.
 * 
 * @param {number} currentScrollPosition - The current scroll position.
 */
export function handleInitialFabVisibility(currentScrollPosition) {
    if (currentScrollPosition > 0) {
        fabElement.classList.add(fabVisibleClass);
        fabIsVisible = true;
    }
}

/**
 * Handle the fabs.
 * 
 * @param {number} lastScrollDirection - The last scroll direction.
 * @param {number} currentScrollDirection - The current scroll direction.
 * @param {number} currentScrollPosition - The current scroll position.
 */
export function handleFab(lastScrollDirection, currentScrollDirection, currentScrollPosition) {
    if (currentScrollDirection === "down" && lastScrollDirection === "up") {
        if (fabIsVisible) {
            fabElement.classList.remove(fabVisibleClass);
            fabIsVisible = false;
        }
    } else if (currentScrollDirection === "up" && lastScrollDirection === "down") {
        if (!fabIsVisible && currentScrollPosition > 0) {
            fabElement.classList.add(fabVisibleClass);
            fabIsVisible = true;
        }
    } else if (currentScrollPosition === 0) {
        fabElement.classList.remove(fabVisibleClass);
        fabIsVisible = false;
    }
}

/**
 * Handle the fab action on click.
 */
export function handleFabAction() {
    fabElement.addEventListener("click", () => {
        window.scrollTo(0, 0);
    });
}