import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <section>
            <div className='contact_main'>
                <div className="contact-title">
                    <h1>Contact</h1>
                </div>
                <div className='contact_main_container'>
                  <div className="contact_left">
                    <h2>Tell Us Your Message</h2>
                    <div className="name_phone">
                      <input type="text"  placeholder='Fullname ' />
                      <input type="text" placeholder='Number ' />
                    </div>
                    <div className="name_phone">
                      <input type="email" placeholder='Email ' />
                      <input type="text" placeholder='Subject ' />
                    </div>
                    <textarea className="message_inp" placeholder="Message" cols="30" rows="10"></textarea>
                    <button className='send_msg_btn'>Send Message</button>
                  </div>
                  <div className="contact_right">
                    <h2>Contact Us</h2>
                    <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human.</p>
                    <p>Address : 29, Neftchi Gurban street Sabayil district, Baku 1003</p>
                    <p>Email: autopart@gmail.com</p>
                    <p>Phone: +994706696931</p>
                    <h5>Working hours</h5>
                    <p>Monday – Saturday: 08AM – 22PM</p>
                  </div>
                </div>
                <div style={{width: "100%", padding: "100px 0 100px 0"}}><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%C6%8Fsas%20bina,%2025%20H%C3%BCseyn%20Cavid%20Prospekti,%20Bak%C4%B1%201073+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe></div>
              </div>
        </section>
  )
}

export default Contact