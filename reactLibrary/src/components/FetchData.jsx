import {useEffect, useState} from 'react';
import {path} from "../config.js";

function FetchData() {

    const [exportData, setExportData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async function getData() {
            console.log('getData')
            try {
                const response = await fetch(path);
                if (!response.ok)
                    throw Error(`Data fetch error! ${response.status}`);
                data = await response.json();

            } catch (error) {
                console.log('ProductList fetch error:', error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    if (loading === false)
        return (
            setExportData(data);
        );
}

export default FetchData;