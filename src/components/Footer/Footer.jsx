import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Surya</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#qualification" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#testimonial" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">

            <a href="https://www.linkedin.com/in/k-surya-4425a22ba/" className="footer__social-link" target="_blank">
        <i class="uil uil-linkedin"></i>
        </a>

        <a href="https://github.com/surya26012004" className="footer__social-link" target="_blank">
        <i class="uil uil-github"></i>
        </a>

        <a href="https://x.com/Surya17168510" className="footer__social-link" target="_blank">

        <i class="uil uil-twitter"></i>
        </a>
        <a href="https://www.upwork.com/freelancers/~01c549e59fb989a93f" className="footer__social-link" target="_blank">upwork
        <i class="fa-brands fa-square-upwork"></i>
</a>
        </div>

        <span className='footer__copy'>
            &#169; surya. All rights reserved
        </span>
        </div>
    </footer>
  )
}

export default Footer
