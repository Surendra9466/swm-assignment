import Reat, { useEffect, useState } from 'react'
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
    console.log(quotesData)
    if (loader) {
        return <Spinner />
    }
    return (
        <section>
            {quotesData ? <QuotesData quotesData={quotesData} />
                : null}
        </section>
    )
}

export default Quotes;