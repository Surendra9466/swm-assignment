import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import Spinner from './Spinner';


function Categories() {
    const [apiData, setApiData] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        fetch('https://qodapi.azurewebsites.net/api/Categories')
            .then((res) => res.json())
            .then((data) => {
                setApiData(data)
                setLoader(false);
            })
    }, []);

    if (loader) {
        return <div className='loader'><Spinner /></div>
    }

    return (
        <div className='categories'>
            <ul>
                {apiData?.map((item, index) => {
                    return <li key={index}><Link to={item.name}>{item.name}</Link></li>
                })}
            </ul>
        </div>
    )
}
export default Categories;