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
                {/* <div id="map"><iframe style="width: 100%; height: 520px;" frameBorder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=622&amp;height=520&amp;hl=en&amp;q=29,%20Neftchi%20Gurban%20street%20Sabayil%20district,%20Baku%201003%20Baku+(AutoPart)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div> */}
              </div>
        </section>
  )
}

export default Contact