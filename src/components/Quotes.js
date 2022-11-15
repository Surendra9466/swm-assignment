import { useParams } from "react-router-dom"
import QuotesData from './QuotesData';
import Spinner from './Spinner';
import useFetch from "../customHooks/useFetch";
const url = 'https://qodapi.azurewebsites.net/api/Quote/'

function Quotes() {
    const { id } = useParams();
    const { isLoading, apiData } = useFetch(`${url}/${id}`);

    if (isLoading) {
        return <div className='loader'><Spinner /></div>
    }

    return (
        <div className='quotes-wrapper'>
            {apiData ? <QuotesData apiData={apiData} title={id}/>
                : null
            }
        </div>
    )
}

export default Quotes;