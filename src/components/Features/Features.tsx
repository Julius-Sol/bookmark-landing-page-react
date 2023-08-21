import '../../sass/components/Features.scss'
import featuresSlideData from '../../data/features-data';
import { useState } from 'react'

function Features() {

  const[slideIndex, setSlideIndex] = useState(0);

  const handleSlideSelection = (event:any) =>{
    let res = document.querySelector('.selected');
    res?.classList.remove('selected');
    event.target.classList.add('selected');
    let slideNumber = Number(event.target.attributes[1].value);
    setSlideIndex(slideNumber);
    
  }

  const slideArray = featuresSlideData.map((item,index)=>{
    return(
      <div className='features__slide-cont' key={index}>
        <div className='features__image-container' >
            <img className='features__image' src={item.img} alt="features image" />
            <div className='features__image__blue-bg'></div>
        </div>
        <div className="features__slide">
          <h2 className='features__slide__title'>{item.title}</h2>
          <p className='features__slide__description'>{item.description}
          </p>
          <button className='features__button'>More Info</button>
        </div>
      </div>
    )
  });
  return (
    <section className='features'>
      <div>
        <h1 className='features__title'>Features</h1>
        <p className='features__description'>  Our aim is to make it quick and easy for you to access your favourite websites. 
          Your bookmarks sync between your devices so you can access them on the go.</p>
      </div>
    <div className='features__tab-list'>
      <p className='features__tab-list__tab features__tab-list__tab--borders selected' data-slidenumber={0} onClick={handleSlideSelection}>Simple Bookmarking</p>
      <p className='features__tab-list__tab' onClick={handleSlideSelection} data-slidenumber={1}>Speedy Searching</p>
      <p className='features__tab-list__tab features__tab-list__tab--borders' data-slidenumber={2} onClick={handleSlideSelection}>Easy Sharing</p>
    </div>

    {slideArray[slideIndex]}
    </section>
  )
}

export default Features