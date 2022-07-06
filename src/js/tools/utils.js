/**
 * List of usefull tools
 *
 * @module utils
 * @example
 * import { ready } from "path/to/utils.js"
 */



/**
 * Execute a callback when element is ready
 *
 * @method ready
 * @access public
 * @param {function} fn - Callback to execute if element is ready
 * @param {nodeElement} [element] - Element on wich check if it's ready
 * @example
 * import { ready } from "path/to/utils.js"
 *
 * ready(() => {
 *   // your code here
 * })
 */
export let ready = function(fn, element = document) {
    element.readyState != "loading"
        ? fn.apply(element)
        : element.addEventListener("DOMContentLoaded", fn.bind(element));
};



/**
 * Return the closest ancestor of an element matching a selector
 *
 * @method closest
 * @access public
 * @param {nodeElement} element
 * @param {string} selector
 * @param {string} [stopSelector="body"]
 * @returns {nodeElement}
 * @example
 * <!-- Considering following HTML structure -->
 * <div classe="foo">
 *    <div class="bar">
 *      <div id="baz">
 *        lorem ipsum
 *      </div>
 *    </div>
 * </div>
 * @example
 * import { closest } from "path/to/utils.js"
 *
 * // It return you `.foo` div
 * closest(document.querySelector('#baz'), '.foo');
 */
let closest = function(element, selector, stopSelector = "body") {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector;
    }
    let retval = null;
    while (element) {
        if (element.matches(selector)) {
            retval = element;
            break;
        } else if (stopSelector && element.matches(stopSelector)) {
            break;
        }
        element = element.parentElement;
    }
    return retval;
};