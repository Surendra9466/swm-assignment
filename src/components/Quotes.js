import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import QuotesData from './QuotesData';
import Spinner from './Spinner';

function Quotes() {
    const [quotesData, setQuotesData] = useState({});
    const [loader, setLoader] = useState(true);
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://qodapi.azurewebsites.net/api/Quote/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setQuotesData(data)
                setLoader(false);
            })
    }, [])
    if (loader) {
        return <div className='loader'><Spinner /></div>
    }
    return (
        <div className='quotes-wrapper'>
            {quotesData ? <QuotesData quotesData={quotesData} />
                : null
            }
        </div>
    )
}

export default Quotes;