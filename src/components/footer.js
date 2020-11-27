import React from 'react'
import {Link} from 'gatsby'
import {faTwitter, faInstagram, faFacebook, faGoodreads } from '@fortawesome/fontawesome-free-brands'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Footer = ()=>{
    return(
        <>  
            <footer className="footer-section">
                <div className="container-gt" id="footer-info">
                    <h1>Roberto Pérez</h1>
                    <p className="param-footer">
                        Roberto Pérez loves to hear from readers. You can reach him via email. 
                        Feel free to send questions about writing, his works, interviews 
                        and other publicity matters.
                    </p> 

                    <nav>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/StrattonPressInc/"
                                   target="_blank">
                                    <FontAwesomeIcon
                                        className='font-awesome'
                                        icon={faFacebook} />
                                </a>
                            </li>

                            <li>
                                <a 
                                    target="_blank"
                                    href="https://twitter.com/strattonpress/">
                                    <FontAwesomeIcon
                                        className='font-awesome'
                                        icon={faTwitter} />
                                </a>
                            </li>

                            <li>
                                <a  
                                    target="_blank"
                                    href="https://www.instagram.com/strattonpress/">
                                    <FontAwesomeIcon
                                        className='font-awesome'
                                        icon={faInstagram} />
                                </a>
                            </li>
                            <li>
                                <a 
                                    target="_blank"
                                    href="https://www.goodreads.com/book/show/53218747-one-full-american-life-of-a-first---generation-immigrant-of-mexican-desc?from_search=true&from_srp=true&qid=1Ff2fTtRQO&rank=2 ">
                                    <FontAwesomeIcon 
                                        className='font-awesome'
                                        icon={faGoodreads} />
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="two-grid-column">
                        <p>Copyright 2020. Stratton Press</p>

                        <ul>
                            <li>
                                <Link to="/privacy-policy">Privacy Policy</Link>
                            </li>

                            <li>
                                <Link to="/terms-and-conditions">Terms & Conditions</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;


