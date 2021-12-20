/**
 * Execute a function after a specific amount of time.
 * 
 * @param {boolean|Timeout} timeout - The timeout object. 
 * @param {number} timeoutDuration - The timeout duration in ms.
 * @param {function} listener - The listener to be executed by the timeout.
 */
export function debounce(
    timeout,
    timeoutDuration,
    listener
) {
    clearTimeout(timeout);
    setTimeout(listener, timeoutDuration);
}