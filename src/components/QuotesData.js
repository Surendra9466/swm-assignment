import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function QuotesData({ apiData, title}) {
    const notify = (e) => {
        if(e.target.closest('.tag')) {
            return toast(`You just clicked ${e.target.innerText}`);
        }
    };

    return (
        <section className='quotes-data'>
            <div className='heading'>{title}</div>
            <div className="hero-img"><img src={apiData.background} alt="Quotes background" /></div>
            <div className="quote"><span >Quote: </span> {apiData.quoteString}</div>
            <div className="author"><span >Author: </span> {apiData.author}</div>
            <div onClick={notify}>
                <ToastContainer autoClose={3000}/>
                <div className="tags-wrapper" >{apiData.tags?.map((item, index) => {
                    return (
                        <div className="tag" key={index}>{item.name}</div>
                    )
                })}
                </div>
            </div>
            <p className='msg'>Click on tags to see some magic</p>
        </section>
    )
}

export default QuotesData;