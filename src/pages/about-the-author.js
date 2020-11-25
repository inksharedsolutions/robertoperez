import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/author_img.jpg'

const ATB = (props)=>{
	
	return (
		<>
		 	<Layout>
		 		<Nav pathExt={props.path}/>
                 <Banner 
                 spanFirst={`About The`}
                 contextHeading={`Author`}/>


		 		<div className="container">
				    <section className="body-author-contents">

                        <div className="heading-quote">
                            <div className="author-image-container">
                                <img src={AuthorImg} />
                            </div> 

                            <div className="heading-quote">
                                <h4>
                                    
                                </h4>
                                
                                <span className="ata-span-fx">
                                    {/* author quote */}
                                </span>
                            </div>
                        </div>

                        <article 
                            className="article-section" 
                            id="author">

                            <p>
                            Roberto accomplished the following feats as an American of Mexican descent: 
                            </p>

                            <p>
                                * At age nineteen, in May of 1952, in a group class of 580 airmen studying to be logisticians in Cheyenne, Wyoming, during the Korean War, he finished with the top overall grade average and earned a promotion to corporal with less than five months of service.
                            </p>

                            <p>
                                * Assumed a position of leadership for the remainder of his twenty years in the military, earning supervisory and superintendency positions at military bases in four different continents where American armed forces were stationed.
                            </p>

                            <p>
                            In 1956, because he had duties as a logistician handling supplies and equipment for special weapons, he was cleared and awarded a Top Secret Security Clearance under the direction of the Eisenhower administration. He kept the clearance for the remaining fifteen years of service in the US Air Force.
                            </p>
                            <p>
                            In 1963, he earned the Commendation Medal for service in Korea where he trained Korean nationals and American airmen to convert the logistical supply account from a manual accounting system to a punch-card approach that facilitated better service to operational units all over Korea.
                            </p>
                            <p>
                            In 1964, he began taking college courses on an after-work basis until he earned his BA degree from Florida State University in 1971. In 1974, Roberto earned his master’s degree and in 1978 his doctorate in Educational Administration, both degrees from the University of Texas at Austin. All three degrees were earned while working full-time.
                            </p>
                            <p>
                            In 1998, reaching the age of sixty-five, Roberto retired and made his final move, this time back to Maryland. He spent the next seventeen years teaching as an adjunct professor at American University in Washington, DC, and at McDaniel College in Maryland. During the latter years of this period, Roberto also volunteered with the Frederick public schools, also in Maryland, to assist other English language learners and to facilitate at parent-teacher conferences.
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author |  Writer </span>
                                    Roberto Perez
                                </span>
                            </p>
                            
                        </article>
              

                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;