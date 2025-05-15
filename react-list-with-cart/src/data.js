/*
TODO:
    - Create and move data to config file ✅
*/

import {path} from "./config.js";

export let data;
const dataLoaded = new Event('dataLoaded');

(async function importJSON() {
    try {
        const response = await fetch(path);
        if (!response.ok)
            throw new Error(`${response.status}`);
        data = await response.json();
        window.dispatchEvent(dataLoaded);
    } catch (error) {
        console.log(error.message);
    }
    return data;
})();