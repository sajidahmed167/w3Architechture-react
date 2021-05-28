const Contact = () => {
    return (
        <div className="d-flex justify-content-center">
            <div id="contact" className="m-5">
                <h2>Contact</h2>
                <hr />
                <p className="para">Lets get in touch and talk about your next project.</p>
                <form>
                    <div className="mb-4">
                        <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="mb-4">
                        <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="mb-4">
                        <input type="text" className="form-control" placeholder="Subject" />
                    </div>
                    <div className="mb-4">
                        <input type="text" className="form-control" placeholder="Comment" />
                    </div>
                    <button className="btn btn-dark mt-3">Send Message</button>
                </form>
                <div className="mb-5 mt-5 ">
                    <img src="img/map.jpg" className="img1" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact
