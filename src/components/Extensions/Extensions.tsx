import '../../sass/components/Extension.scss'
import extensionArrayData from '../../data/extension-data';
import dotsImg from '../../assets/bg-dots.svg'

function Extensions() {

  const extensionsInfo = extensionArrayData.map((item)=>{
    return(
      <article className='ext__card'>
        <img className='ext__card__img'src={item.image} alt="icon" />
        <h2 className='ext__card__title'>{item.title}</h2>
        <p className='ext__card__description'>{item.subTitle}</p>
        <img className='ext__card__dots'src={dotsImg} alt="dots" />
        <button className='ext__card__button'>{item.buttonText}</button>
      </article>
    )
  })
  return (
    <section className="ext">
      <h1 className="ext__title">Download the extension</h1>
      <p className="ext__description"> We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>

      <section>
        {extensionsInfo}
      </section>
    </section>
  )
}

export default Extensions