

function Contact(){

    return(
        <section className="container my-5 py-5 justify-content-center" id="contact">
            <h1 className="text-center mb-4">Get In Touch</h1>
            <div className="row justify-content-center">
                <div className="col-md-5 mb-4 px-5">
                    <div className="card shadow-sm border-0 h-100">
                        <div className="card-body">
                            <h4>Let's Connect</h4>
                            <p>I'm always interested in new opportunities and collaborations. Feel free to reach out!</p>
                            <div className="mb-3 ">
                                <i className="bi bi-envelope me-3"></i>
                                Kareenayadav1088@gmail.com
                            </div>
                            <div className="mb-3">
                                <i className="bi bi-telephone me-3"></i>
                                7428283503
                            </div>
                            <div className="mb-3">
                                <i className="bi bi-geo-alt me-3"></i>
                                Delhi, India                    
                            </div>

                            <div className="pt-5 text-center" >
                                <a href="https://www.linkedin.com/in/kareena-yadav/" className="bi bi-linkedin me-4 fs-1 text-dark" aria-label="LinkedIn" target='blank'></a>
                                <a href="https://github.com/Kareena2070" className="bi bi-github me-4 fs-1 text-dark" aria-label="GitHub" target="blank"></a>
                                <a href="mailto:kareenayadav1088@gmail.com" className="bi bi-envelope-fill  fs-1 text-dark" aria-label="Email" target="blank"></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-5 mb-4 px-5">
                <div className="card shadow-sm border-0 h-100">
                        <div className="card-body">
                            <form action="get">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label> 
                                    <input type="text"  id="name" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label> 
                                    <input type="email"  id="email" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea  id="message" className="form-control"></textarea>
                                </div>

                                <button type="submit" className="btn btn-dark">Send Message</button>

                            </form>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}

export default Contact