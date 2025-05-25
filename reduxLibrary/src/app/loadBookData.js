import {dataURL} from "../config.js";

export default async function getData() {
    console.log('1');
    try {
        let response = await fetch(dataURL);
        console.log('loadBookData:', response.json())
        return await response.json();
    } catch(error) {
        console.log('An error has occurred:',error);
    }
};