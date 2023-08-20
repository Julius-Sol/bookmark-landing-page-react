import '../../sass/components/Contact.scss'

function Contact() {
  return (
    <section className="contact">
      <div className="contact__container">
        <span className="contact__joined-text">35,000+ already joined</span>
        <h1 className="contact__title">Stay up-to-date with what we’re doing</h1>
        <form >
          <input className="contact__email" type="email" name="email" id="email" placeholder='Enter your email address'/>
          <button className="contact__button">Contact Us</button>
        </form>
      </div>
    </section>
  )
}

export default Contact