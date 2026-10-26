function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-auto" data-bs-theme="dark">
      <div className="container text-center text-md-start">
        <div className="row text-center text-md-start">
          
          {/* Column 1: Brand Info */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-success">
              ArtiSundr
            </h5>
            <p>
              Chaley jaein!!Jaldi se Chale Jaein!, Hum nhi chahte aap ka mantik Saltunan hil jae!!
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold">Fori Links</h5>
            <p>
              <a href="#" className="text-light text-decoration-none">Apni chat</a>
            </p>
            <p>
              <a href="#" className="text-light text-decoration-none">Tareef</a>
            </p>
            <p>
              <a href="#" className="text-light text-decoration-none">Kamkaaj</a>
            </p>
            <p>
              <a href="#" className="text-light text-decoration-none">Contact</a>
            </p>
          </div>

          {/* Column 3: Useful Links */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold">Links</h5>
            <p>
              <a href="#" className="text-light text-decoration-none">Your Account</a>
            </p>
            <p>
              <a href="#" className="text-light text-decoration-none">Become an KuchuPuchu</a>
            </p>
            <p>
              <a href="#" className="text-light text-decoration-none">Shipping Rates</a>
            </p>
            <p>
              <a href="#" className="text-light text-decoration-none">Help</a>
            </p>
          </div>

          {/* Column 4: Contact */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold">Contact</h5>
            <p>
              <i className="bi bi-house-door me-2"></i> Bhens Colony, NY 10012, Karachi
            </p>
            <p>
              <i className="bi bi-envelope me-2"></i> KuchuPuchu@pookie.com
            </p>
            <p>
              <i className="bi bi-phone me-2"></i> +9233445566
            </p>
            <p>
              <i className="bi bi-printer me-2"></i> +9233556644
            </p>
          </div>

        </div>

        <hr className="mb-4" />

        {/* Bottom Section: Copyright */}
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p className="text-center text-md-start mb-0">
              © {new Date().getFullYear()} Copyright: 
              <a href="#" className="text-success text-decoration-none ms-1">
                Szabist-Se-Panga.com
              </a>
            </p>
          </div>

          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-end">
              <a href="#" className="btn btn-outline-light btn-floating m-1 btn-sm" role="button">
                Terms
              </a>
              <a href="#" className="btn btn-outline-light btn-floating m-1 btn-sm" role="button">
                Privacy
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;