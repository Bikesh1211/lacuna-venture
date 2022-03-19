import React from 'react'
import BlogItem from '../BlogItem'
import styled from 'styled-components';
import blogImg6 from '../../../assets/img/blog6.jpg'
import blogImg6_1 from '../../../assets/img/blog6-1.jpg'
import blogImg6_2 from '../../../assets/img/blog6-2.jpg'
import mahendra_gautam from '../../../assets/img/mahendra-gautam.jpg'

function Blog6() {
  return (
    <div>
        <BlogItem
        image={blogImg6}
        title='STARTUPS, FAILING BUSINESSES, AND THE TOUGHEST DECISIONS'
        article='Since, the global pandemic hit the world; horrendous outline for terrible economic crisis high unemployment rate is all around. Businesses are experiencing critical economic crisis as they are struggling to sustain and operate their businesses. As most of the businesses are devastated to generate revenue to operate and sustain their business due to the ongoing lockdown and are on the verge to shut down their business for better or worse.'

        article1='The global pandemic, economic collapse and the moral injuries has been brutal to many young entrepreneurs and the startups. As, startups and existing businesses are affected by the lockdown which has resulted in low revenue generation, we can picturize the economic crisis for a developing nation like Nepal.'

        heading2='Consistent adaptation is of central significance with regards to our achievements in business or in life when all is said in done. So, to overcome these challenges, entrepreneurs have to adapt to the market changes accordingly to sustain their business hit by the Covid 19.'

        image2={blogImg6_1}

        heading3='Architect your project with your crucial general vision'
        
        article3='One of the main reasons that businesses fail is that there is little or no market for the product or services that they have created. The market timing is unfavorable. You may be a few years ahead of your market, and they are not yet ready for your specific solution. Considering the challenges and the market changes, it’s very important for startups to adapt to their business model strategy. Adapting to the marketing changes along with your strategic business model will be a bonus point for the entrepreneurs to stand out in the competition and sustain their businesses. There is always a solution to outshine your business despite competitors and that is being confident and sticking to a good marketing strategy.'

        heading4='Get your business online'
        article4='While the whole world is going online, digital transformation is of prime importance for every company. We know it’s a little complex and demands hard work at the beginning, that’s why we are here to help you! From website development to business promotional activities, we offer a wide range of services for you to get recognized!

        Making your business available online helps you generate leads and promote your business profile which will boost your business and uncover immense opportunities and unlock growth, leveraging customer outreach with digital support. From the moment you go live, make sure you will have hiking customer traffic and offer creative marketing strategies to accelerate success.'

        heading5='Reach out to your customers and build trust that you are along with them in the journey'
        article5='Communication is an important part of any good relationship, and it’s especially important when it comes to customer relationships. Existing in the market needs residing in the thought of customers! So, brands your product and service with everlasting appreciation that helps you outstand the competition! Launching your business or investing so much on your business do not guarantee the success of your company. If you want your startup to reach a whole new level, you need to satisfy the most important group here and it’s none other than your customers.'

        heading6='Allocations of resources'
        article6='Startups that run out of resources usually do so because the founders do not want to give up a piece of the pie, the budgets were not properly allocated and planned, the burn rates skyrockets, or it simply took longer than expected to raise the first round.

        Failure does not happen by chance. It all starts with ignorance, which can be remedied. Startups will continue to lead innovation in the future so, make sure you make plans and policies accordingly for at least a year and keep the communication transparent with your employees and stakeholders or investors.'

        image3={blogImg6_2}

        article7='However, startups or entrepreneurs might witness difficulty in securing the capital to operate their businesses and sustain their businesses. With ongoing lockdown and the pandemic, investors might take longer time to trust your business model and fund for your model following the due diligence procedure. This might be a great opportunity for the willing entrepreneurs and startups to turn over the fortune, if you look at the previous events of economic crisis. So, many investors will be looking for creative and innovative business models that they want to invest in and secure their investments. So, it’s always important to analyze our business model and create our opportunities accordingly to the market changes.'
        article8='Let me introduce you Lacuna Venture Sustainable Business Services. To optimize technology, we have developed one of the only fully enhanced feature services, startup workshop, allowing business owner to launch their business online and outreach the customers. Go hand in hand with your mission and vision to grow your business and get it online. We aim to familiarize sustainable start-up ideas to enthusiasts addressing the prospects of “The Entrepreneurship”. When it comes to new talent, the door should be opened equally to each and every individual. While having many opportunities for success, not providing equal opportunities and resources to these young people has resulted in their failure in their startups multiple times.'
        heading9='Secure Investment for your start-up'
        article9='We, assist members with understanding the procedure, difficulties and transition of the entrepreneurship with a focal point of building up a field-tested strategy that can be introduced to financial specialists.'

        heading10='Creating opportunities'
        article10='Our team incorporates numerous mini-presentations, exercise, mentorship and ideas sharing to empower members to change their business thoughts into noteworthy field-tested strategy.'
        
        heading11='Encourage and promote young entrepreneurs'
        article11='Do you have an idea that can impact socially? You’re just a step back. If you have an idea that can impact socially but scared to ignite your startup, there is nothing you need to be worried about. Our microbusiness revolution workshop furnishes the young talents and dreams with the resources required to sustain your business startups and provide support in networking your organization with clients.'

        heading12='The global pandemic, economic crisis and the moral injuries are proof that we as a whole are on a similar side I.e., the suffering and the survival. And always remember that your mental health is always important than your career and the most important thing right now is to look out for and help each other in any possible way. Stay safe and stay healthy. As the silver lining, this time too will pass on time.'
        
        />

<Message className="container">
          <div id="message-from-ceo">
            <div>

          <img src={mahendra_gautam} alt="" />
            </div>


          <p>
          <a href="#mg">Mahendra Gautam</a> <br />
          Founder & CEO of Lacuna Venture is a willing entrepreneur with plenty to say about how the entrepreneurship work for startups: A lot has changed since he was a child. He remembers all his childhood dreams being realized from young age onwards and seeing what went on when they crossed over into reality – we have seen these things in action (including successful businesses). Nowadays technology enables startup founders such as him time to develop their strategy along lines of best practices that will create lasting impacts — creating jobs while lowering barriers towards entry among others. Learn more at  https://www.lacunaventure.com.
          {/* EMAIL LOGO */}
          </p>
          </div>
        </Message>
        
    </div>
  )
}

export default Blog6
const Message = styled.div`
#message-from-ceo{

  display:grid ;
  grid-template-columns:.5fr 5fr;
}
p{
  width:70%;
  border:1px solid gray ;
  box-sizing: border-box;
  padding: 10px;
}
 @media (max-width:990px){
   p{
     width:100% ;
   }
 }
img{
  width:5em ;
  border-radius:50% ;
  height:5em ;
  object-fit:cover ;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all 1s ease ;

  &:hover{
    transform:scale(1.4) ;
  
  }
}
`