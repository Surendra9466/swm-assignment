import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

function Categories() {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        fetch('https://qodapi.azurewebsites.net/api/Categories')
            .then((res) => res.json())
            .then((data) => setApiData(data))
    }, []);

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