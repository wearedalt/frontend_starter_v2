import test from './partials/alert'

let [a,,b] = [1, 2, 3, 4, 5]

window.addEventListener('DOMContentLoaded', () => {
    console.log(a)
    test();
})



function requireAll(r) {
    r.keys().forEach(r);
}
  
requireAll(require.context('../svg/', true, /\.svg$/));

test();