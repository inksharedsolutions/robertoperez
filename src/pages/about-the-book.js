import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/book/two_perspective_book.png'
import Book2 from '../../static/book/two_perspective_book_02.png'


const ATB = (props)=>{


    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'roberto-perez-1',
	  config: { identifier:  12, slug}
    }
    

	return (
		<>
		 	<Layout>
		 		<Nav pathExt={props.path}/>
            
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                 
                 />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`One Full American Life of a First Generation Immigrant of Mexican Descent`,
                                    spanTitle: '',
                                    imgSrc: Book1,
                                    id:'the_gifted_one',
                                    content:
                                    `Donald Trump’s blatant prejudice against people of color instilled in Roberto a desire to tell his family’s story. Because his parents and family spoke only Spanish at home, Roberto became an English language learner, as did his eleven siblings. 

                                    Growing up in the city, Roberto did not wait to be drafted as most eighteen-year-olds were, whether or not they were still in high school. He dropped out of high school to volunteer for the US Air Force soon after the Korean War started. He spent twenty years serving in supervisory and superintendency positions wherever he was assigned. Eight Pérez men from this family wore the American uniform during times of war. Roberto adds, “We were more than volunteers for the armed forces. We were teachers, school principals, college professors, counselors, nutritionists, lawyers, and craftsmen who have businesses and employ dozens of Americans.” 
                                    
                                    Still, three brothers fought during WWII. Roberto and one other brother served during the Korean and Vietnam conflicts. Four of Roberto’s nephews saw action in Vietnam and in the Gulf War. None entered military service because they were gung ho and patriotic. They did it because they were contributors to the country they love and wanted to carry their weight.
                                    `,
                                    
                                    ebooks:{
                                        stratton : '',
                                        barnes: 'https://www.barnesandnoble.com/w/one-full-american-life-of-a-first-generation-immigrant-of-mexican-descent-roberto-p-rez/1136857032?ean=9781643459806',
                                        amazon :'https://www.amazon.com/One-Full-American-Life-First-ebook/dp/B0873Y3J4L/ref=sr_1_1?dchild=1&keywords=9781643459806&qid=1588018269&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/One-Full-American-Life-First/dp/1643459791/ref=sr_1_1?dchild=1&keywords=9781643459790&qid=1588018285&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/one-full-american-life-of-a-first-generation-immigrant-of-mexican-descent-roberto-p-rez/1136857032?ean=9781643459790',
                                        booksamillion:'https://www.booksamillion.com/p/One-Full-American-Life-First/Roberto-Prez/9781643459790?id=8049069540563&_ga=2.175121314.144254833.1606293192-2145380449.1604906972#',
                                    }
                                }}
                            />
			    {/*Stratton Link: https://www.stratton-press.com/books/one-full-american-life-of-a-first-generation-immigrant-of-mexican-descent/*/}
                            <div className="commentSection" >
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                    </div>	
                </main>
		 	</Layout>
		</>
	)
}


export default ATB;
