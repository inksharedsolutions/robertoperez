import React,{useEffect, useRef} from 'react'
import {Link} from 'gatsby'
import  ImgBanner from '../../static/book/two_perspective_book.png'

const Banner = ()=>{

    const elemBanner = useRef(null);

    useEffect(() => {

    });
 

    return (
        <>
            <section className="banner-section">

                    <div className="grid-two-layout-col">
                        <div className="wrapper-bg-left">
                            <div className="left-col">
                                <div className="banner-content-wrapper">
                                    <h1>
                                        <span className="first-block">
                                            <span>
                                                ONE FULL
                                            </span>
                                        </span>

                                        <span className="second-block">
                                            <span id="color-o">
                                             AMERICAN LIFE
                                            </span>
                                        </span>
                                    </h1>
                                    <p>
                                        Donald Trump’s blatant prejudice against people of color instilled in Roberto a desire to tell his family’s story. Because his parents and family spoke only Spanish at home, Roberto became an English language learner, as did his eleven siblings. 
                                    </p>

                                    <button>
                                        <Link to="/about-the-book">
                                            Read More
                                        </Link>
                                    </button>
                               
                                </div>
                            </div>
                        </div>

                        <div className="wrapper-bg-right">
                            <div className="right-col banner-img-col">

                                <div className="img-banner-wrapper" ref={elemBanner}>
                                    <img src={ImgBanner}/>
                                </div>

                            </div>
                        </div>
                    </div>

            </section>
        </>
    )
}

export default Banner;