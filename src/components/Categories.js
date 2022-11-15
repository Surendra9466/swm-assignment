import React from 'react';
import { Link } from "react-router-dom"
import Spinner from './Spinner';
import useFetch from "../customHooks/useFetch";

const url = 'https://qodapi.azurewebsites.net/api/Categories';

function Categories() {
    const { isLoading, apiData } = useFetch(url);

    if (isLoading) {
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