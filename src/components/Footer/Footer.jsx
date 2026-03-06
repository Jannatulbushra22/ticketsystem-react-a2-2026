import React from 'react'

const Footer = () => {
  return (
    <footer>
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
  <nav>
    <h className="footer-title">CS — Ticket System</h>
    <p class="text-small">
      CS — Ticket System is a widely used <br/>
      and trusted open source support <br/>
      ticketing system.Easily scale and <br/>
      streamline your customer service<br/>
       and drastically improve your<br/>
        customer's experience.
    </p>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Our Mission</a>
    <a className="link link-hover">Contact Saled</a>
  </nav>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Products & Services</a>
    <a className="link link-hover">Customer Stories</a>
    <a className="link link-hover">Download Apps</a>
  </nav>
  <nav>
    <h6 className="footer-title">Information</h6>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Terms & Conditions</a>
    <a className="link link-hover">Join Us</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social Links</h6>
    <a className="link link-hover"><i class="fa-brands fa-twitter"></i><i class="fa-regular fa-copyright"></i>CS — Ticket System</a>
    <a className="link link-hover"><i class="fa-brands fa-linkedin"></i><i class="fa-regular fa-copyright"></i>CS — Ticket System</a>
    <a className="link link-hover"><i class="fa-brands fa-facebook"></i><i class="fa-regular fa-copyright"></i>CS — Ticket System</a>
    <a className="link link-hover"><i class="fa-brands fa-instagram"></i><i class="fa-regular fa-copyright"></i>CS — Ticket System</a>
  </nav>
</footer>
    <div class=" text-white-500 text-center bg-black">
            <p><i class="fa-regular fa-copyright"></i>2025 CS — Ticket System. All rights reserved.</p>

    </div>
    </footer>
  );
}

export default Footer;