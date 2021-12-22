const phoneFabElement = document.querySelector("#phone-fab");
const phoneFabVisibleClass = "page__phone-fab--visible";
const phoneFabOnBottomClass = "page__phone-fab--on-bottom";

const desktopFabElement = document.querySelector("#desktop-fab");
const desktopFabVisibleClass = "page__desktop-fab--visible";

let fabIsVisible = false;

/**
 * Handle the fab initial visibility.
 * 
 * @param {number} currentScrollPosition - The current scroll position.
 */
export function handleInitialFabVisibility(currentScrollPosition) {
    if (currentScrollPosition > 0) {
        phoneFabElement.classList.add(phoneFabVisibleClass);
        desktopFabElement.classList.add(desktopFabVisibleClass);
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
            phoneFabElement.classList.remove(phoneFabVisibleClass);
            desktopFabElement.classList.remove(desktopFabVisibleClass);
            fabIsVisible = false;
        }
        phoneFabElement.classList.add(phoneFabOnBottomClass);
    } else if (currentScrollDirection === "up" && lastScrollDirection === "down") {
        if (!fabIsVisible && currentScrollPosition > 0) {
            phoneFabElement.classList.add(phoneFabVisibleClass);
            desktopFabElement.classList.add(desktopFabVisibleClass);
            fabIsVisible = true;
        }
        phoneFabElement.classList.remove(phoneFabOnBottomClass);
    } else if (currentScrollPosition === 0) {
        phoneFabElement.classList.remove(phoneFabVisibleClass);
        desktopFabElement.classList.remove(desktopFabVisibleClass);
        fabIsVisible = false;
    }
}