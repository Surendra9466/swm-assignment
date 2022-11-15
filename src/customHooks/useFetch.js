import { useEffect, useState } from 'react'

function useFetch(url){
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState(null);
    
    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setApiData(data)
                setIsLoading(false);
            })
    }, [url])

    return { isLoading, apiData};


}

export default useFetch;