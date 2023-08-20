import {useState} from 'react'
import arrowIcon from '../../assets/icon-arrow.svg'

function FaqTab(props : any) {

  const [faqClose,setFaqClose] = useState(true);
  

  const handleFaqClick = ()=>{
    setFaqClose(prev=>!prev)
  }
  
  return (
    <article>
      <div className='faq__tab'>
        <div className="faq__tab__cont">
          <h1 className='faq__question'>{props.item.question}</h1>
          {faqClose ? <img className='faq__arrow' src={arrowIcon} alt="arrow" onClick={handleFaqClick}/> : <img className='faq__arrow--close' src={arrowIcon} alt="arrow" onClick={handleFaqClick}/>}
        </div>
        <p className={faqClose ? 'faq__answer hidden' : 'faq__answer'}>{props.item.answer}</p>
      </div>
    </article>
  )
}

export default FaqTab