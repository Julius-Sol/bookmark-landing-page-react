import '../../sass/components/Contact.scss'
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
  email: string,
};

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);



  return (
    <section className="contact">
      <div className="contact__container">
        <span className="contact__joined-text">35,000+ already joined</span>
        <h1 className="contact__title">Stay up-to-date with what we’re doing</h1>
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className={errors.email?.message ? "contact__error-cont" : ""}>
            <input className={errors.email?.message ? "contact__email" : "contact__email spacing"} {...register("email" ,{required: "Whoops, email field cannot be empty",pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Whoops, make sure its an email' } })} id="email" placeholder='Enter your email address' />
            <p className='contact__error-msg'>{errors.email?.message}</p>
          </div>
          <button className="contact__button">Contact Us</button>
        </form>
      </div>
    </section>
  )
}


export default Contact