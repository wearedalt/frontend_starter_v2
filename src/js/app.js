function requireAll(r) {
    r.keys().forEach(r);
}
  
requireAll(require.context('../svg/', true, /\.svg$/));

import { ready } from "./tools/utils.js";
import './tools/fakeLink';

import test from './partials/test'

ready(() => {
    test()
})