function QuotesData({quotesData}) {
    return (
        <div>
            <div>{quotesData.quoteString}</div>
            <div>{quotesData.author}</div>
            <div>{quotesData.tags?.map((item, index) => {
                return (
                    <div key={index}>{item.name}</div>
                )
            })}
            </div>
        </div>
    )
}

export default QuotesData;