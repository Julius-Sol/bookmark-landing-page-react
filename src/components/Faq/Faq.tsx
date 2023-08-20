import FaqTab from './FaqTab'
import '../../sass/components/Faq.scss'
import faqArrayData from '../../data/faq-data'

function Faq() {

  const fqaComponent = faqArrayData.map((item, index)=>{
    return(
      <FaqTab item={item} key ={index}/>
    )
  })

  return (
    <section className='faq'>
      <h1 className='faq__title'>Frequently Asked Questions</h1>
      <p className='faq__description'>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
      {fqaComponent}

      <button className='faq__button'>More Info</button>
    </section>
  )
}

export default Faq