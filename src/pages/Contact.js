import "./Contact.css";

function Contact() {
  return (
    <div className="contactPage">
      <h1> Get in touch</h1>
      <div className="contentSection">
        <div className="contactDiv" id="phone">
          <img
            alt="phone icon"
            src="https://www.iconpacks.net/icons/1/free-phone-icon-1-thumb.png"
            width="80px"
          />
          <h3>Phone</h3>
          <h4>Call us at:</h4>
          <p>+1 202-918-2132</p>
          <p>
            Mon-Fri
            <br /> 7:00AM - 7:00 PM
          </p>
          <p>
            Sat
            <br /> 10:00AM - 5:00 PM
          </p>
          <p>
            Sun
            <br /> Closed
          </p>
        </div>
        <div className="contactDiv" id="address">
          <img
            alt="pinpoint icon"
            src="https://cdn0.iconfinder.com/data/icons/office-line-8/100/Location-512.png"
            width="80px"
          />
          <h3>Address</h3>
          <h4>Send something to:</h4>
          <p>5 React website, GRP PRCT, United Kingdom</p>
        </div>
        <div className="contactDiv" id="email">
          <img
            alt="email icon"
            src="https://cdn3.iconfinder.com/data/icons/system-basic-vol-5/20/icon-send-email-message-paper-plane-2-1024.png"
            width="80px"
          />
          <h3>Email</h3>
          <h4>Email us at:</h4>
          <p>randomemail@react.com</p>
        </div>

        <div id="form">
          <img
            alt="message bubble icon"
            src="https://cdn0.iconfinder.com/data/icons/mobile-basic-vol-1/32/Chat-512.png"
            width="80px"
          />
          <h3>Message us </h3>
          <form className="contactForm">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter name here..." />
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Enter email here..." />
            <label htmlFor="subject">Message Subject</label>
            <select>
              <option value="CustomerService">Customer Service</option>
              <option value="Booking">Booking </option>

              <option value="other">Other</option>
            </select>
            <label htmlFor="subject">Message</label>
            <input
              type="text"
              id="messageInput"
              placeholder="Enter your message here..."
            />
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
