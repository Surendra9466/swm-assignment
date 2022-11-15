import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function QuotesData({ quotesData }) {
    const notify = (e) => {
        return toast(`You just clicked ${e.target.innerText}`);
    };

    return (
        <section className='quotes-data'>
            <div className="hero-img"><img src={quotesData.background} alt="Quotes background" /></div>
            <div className="quote"><span >Quote : </span> {quotesData.quoteString}</div>
            <div className="author"><span >Author : </span> {quotesData.author}</div>
            <div onClick={notify}>
                <ToastContainer autoClose={3000}/>
                <div className="tags-wrapper" >{quotesData.tags?.map((item, index) => {
                    return (
                        <div className="tag" key={index}>{item.name}</div>
                    )
                })}
                </div>
            </div>
        </section>
    )
}

export default QuotesData;