function QuotesData({ quotesData }) {
    return (
        <section className='quotes-data'>
            <div className="hero-img"><img src={quotesData.background} alt="Quotes background" /></div>
            <div className="quote"><span >Quote : </span> {quotesData.quoteString}</div>
            <div className="author"><span >Author : </span> {quotesData.author}</div>
            <div className="tags-wrapper">{quotesData.tags?.map((item, index) => {
                return (
                    <div className="tag" key={index}>{item.name}</div>
                )
            })}
            </div>
        </section>
    )
}

export default QuotesData;