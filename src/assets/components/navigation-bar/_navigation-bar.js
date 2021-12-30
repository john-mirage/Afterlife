const navigationBarElement = document.querySelector("#navigation-bar");
const navigationBarHiddenClass = "page__navigation-bar--hidden";

/**
 * Handle the navigation bar visibility.
 * 
 * @param {number} lastScrollDirection - The last scroll direction.
 * @param {number} currentScrollDirection - The current scroll direction.
 */
export function handleNavigationBarVisibility(lastScrollDirection, currentScrollDirection) {
    if (currentScrollDirection === "down" && lastScrollDirection === "up") {
        navigationBarElement.classList.add(navigationBarHiddenClass);
    } else if (currentScrollDirection === "up" && lastScrollDirection === "down") {
        navigationBarElement.classList.remove(navigationBarHiddenClass);
    }
}
