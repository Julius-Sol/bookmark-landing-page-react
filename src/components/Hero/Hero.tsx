
import heroImg from '../../assets/illustration-hero.svg'
import '../../sass/components/Hero.scss'

function Hero() {
  return(
    <>
      <section className="hero">
        <div className='hero__image-container'>
          <img className='hero__image' src={heroImg} alt="Hero i0mage" />
          <div className='blue-bg'></div>
        </div>

        <div>
          <h1 className='hero__title'>A Simple Bookmark Manager</h1>
          <p className='hero__description'>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
          </p>
          <div className='hero__button-container'>
            <button className='hero__button-container__chrome'>Get it on Chrome</button>
            <button className='hero__button-container__firefox'>  Get it on Firefox</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero