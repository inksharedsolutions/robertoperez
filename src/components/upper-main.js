import React,{useEffect, useRef, useState} from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/author/author_img.jpg'

const UpperMain =()=>{


    const elemBanner = useRef(null);
    const [stateUpper, statFunc] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', scrollEffect);
    });

    const scrollEffect = (e)=>{
        let axisY =window.scrollY;

        if(axisY > 500 ){
            statFunc(true);
        }
    }   
    
    
    return  (
        <>
            <section className={`upper-main upper-style`}>
                <div className="container-gt">

                    <div className="grid-two-columns" >
                        <div className={`img-wrapper-form ${stateUpper && 'image-author'}`}>
                            <img src={AuthorImg} alt="author-image"/>
                        </div>

                        <div classNames="content-img-wrapper">
                            <section className="content-wrapper-body">
                                <h1>Roberto Perez</h1>
                                <span>Author & Writer</span>

                                <p>
                                    In 1956, because he had duties as a logistician handling supplies and equipment for special weapons, he was cleared and awarded a Top Scret Security Clearance under the direction of the Eisenhower administration. He kept the clearance for the remaining fifteen years of service in the US Air Force.
                                </p>

                                <button>
                                    <Link to="/about-the-author">
                                        Read More
                                    </Link>
                                </button>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UpperMain