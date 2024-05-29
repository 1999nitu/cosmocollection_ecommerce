export default function Contact1(){
    return(
        <>
             <div className="col-md-6 contact-form">
            <h4 className="white-w3ls">
              Contact <span>Form</span>
            </h4>
            <form action="#" method="post">
              <div className="styled-input agile-styled-input-top">
                <input type="text" name="Name" required="" />
                <label>Name</label>
                <span />
              </div>
              <div className="styled-input">
                <input type="email" name="Email" required="" />
                <label>Email</label>
                <span />
              </div>
              <div className="styled-input">
                <input type="text" name="Subject" required="" />
                <label>Subject</label>
                <span />
              </div>
              <div className="styled-input">
                <textarea name="Message" required="" defaultValue={""} />
                <label>Message</label>
                <span />
              </div>
              <input type="submit" defaultValue="SEND" />
            </form>
          </div>
        </>
    )
}