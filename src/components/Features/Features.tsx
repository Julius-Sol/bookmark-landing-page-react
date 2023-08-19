import '../../sass/components/Features.scss'
import tab1Img from '../../assets/illustration-features-tab-1.svg'

function Features() {
  return (
    <section className='features'>
      <h1 className='features__title'>Features</h1>
      <p className='features__description'>  Our aim is to make it quick and easy for you to access your favourite websites. 
  Your bookmarks sync between your devices so you can access them on the go.</p>
    <div className='features__tab-list'>
      <p className='features__tab-list__tab features__tab-list__tab--borders selected'>Simple Bookmarking</p>
      <p className='features__tab-list__tab'>Speedy Searching</p>
      <p className='features__tab-list__tab features__tab-list__tab--borders'>Easy Sharing</p>
    </div>

    <div className='features__image-container'>
        <img className='features__image' src={tab1Img} alt="features image" />
        <div className='features__image__blue-bg'></div>
    </div>
    <div className="features__slide">
      <h2 className='features__slide__title'>Bookmark in one click</h2>
      <p className='features__slide__description'>Organize your bookmarks however you like. Our simple drag-and-drop interface 
  gives you complete control over how you manage your favourite sites.</p>
    </div>
    </section>
  )
}

export default Features