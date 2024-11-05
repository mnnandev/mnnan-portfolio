import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  return (
    <>
      <article className="contact active">
  <header>
    <h2 className="h2 article-title mt20">Contact</h2>
  </header>
  <section className="contact-form">
    <h3 className="h3 form-title">Contact Form</h3>
    <form action="#" className="form">
      <div className="input-wrapper">
        <input
          type="text"
          name="fullname"
          className="form-input"
          placeholder="Full name"
          required=""
          data-form-input=""
        />
        <input
          type="email"
          name="email"
          className="form-input"
          placeholder="Email address"
          required=""
          data-form-input=""
        />
      </div>
      <textarea
        name="message"
        className="form-input"
        placeholder="Your Message"
        required=""
        data-form-input=""
        defaultValue={""}
      />
      <button className="form-btn" type="submit">
      <FaPaperPlane   className='text-[#ffda6b]'/>
        <span>Send Message</span>
      </button>
    </form>
  </section>
</article>

    </>
  )
}

export default Contact
