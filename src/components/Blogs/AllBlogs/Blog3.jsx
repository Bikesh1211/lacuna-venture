import BlogItem from "../BlogItem"
import styled from 'styled-components';
import blogImg3 from '../../../assets/img/blog3.jpg'
import mahendra_gautam from '../../../assets/img/mahendra-gautam.jpg'


function Blog3() {
  return (
    <div>
        <BlogItem
            image={blogImg3}
            title='WHY ARE AUDIENCE GETTING ADDICTED TO LACUNA MART NOWADAYS?'
            blogDate='October 14, 2021'

            article='Why Are Audience Getting Addicted to Lacuna Mart Nowadays?
                     We believe that the shopping experience should also be fun and we feel that shopping is the best fun. Since its opening in 2020, Lacuna Mart has grown to be one of the most well-known and respected independent brands and has been selling its own range of fashionable fashion to clients around the world.'

            article1='We believe that the very best in style is available at a very reasonable price to all our satisfied customers, so we offer a wide variety of styles and prices to suit all budgets. Our long-term vision is to provide the very best products and services to our customers, ensuring that you have a great shopping experience.

            The only thing that matters is that we wish to offer our customers the best in fashion and shopping experience. Our mission is to create a positive, atmosphere where our customers can feel comfortable shopping with us.'

            article2='When we moved into the neighborhood, it was people like you who made us feel welcome. We stand by our promise to offer a range of products that continue to make an impact and are at the forefront of innovation. You help to make that possible.

            The brand was founded in 2020 with the mission of showcasing a full range of fashionable clothing at affordable prices. With our extensive range of clothing, we give our clients maximum choice to find the exact look they are looking for at every moment. Our collection is constantly evolving with a focus on the latest trends and materials, designed in an effort to take their wardrobe to the next level.'

            article3='The business is run by a team that enjoys an excellent working relationship with our customers. The store is equipped with a variety of clothing that is designed to suit every budget of the customers. Whether it is casual wear, sport, dress, formal wear or special occasion clothing, we are very happy with our selection of clothes and we believe that our customer service is very fast and friendly.

            We are very happy with the quality and service that we provide, and we also believe that our customers are very happy with the style that we have chosen for them. Our customers have been very happy with their wardrobe and we believe that our customers would like to give us the opportunity to develop their own style.'

            article4='This is why Lacuna Mart is so Famous!

            Being a fashion brand with a distinct attitude to quality, uniqueness, and excellence, we believe that fashion should be dynamic and inspiring. We are constantly looking for creative ways to keep the trends going and to help you find the best pieces for your special occasion.
            
            With our expert team, we are able to provide you with the best selection for the very best price. We believe that a good designer should be creative and our team of designers is the best of the best, so you can have the most amazing outfits.
            
            Focusing on the very latest in affordable fashion styles, both attire, and stunning accessories, we feature thousands of the newest product lines, providing maximum choice and convenience to our discerning clientele from all over the world. We also aim to provide an extensive range of high-quality, trendy fashion clothing together with a professional dedicated service to our valued customers from all over the world.'

            article5='To help our customers find the perfect outfit to display their individuality, we present our customers with the opportunity to purchase the same apparel and accessories in a few different colors, styles, sizes, designs, and styles for their personal style that they can always look forward to wearing together. Our aim is to provide our customers with a complete range of clothes and clothing accessories to suit all sorts of occasions.

            We always strive to provide our valued customers with a quality shopping experience. We believe that the most important thing is for customers to enjoy shopping with us and to feel the best possible shopping experience with our price. We always strive to serve and cater to our client’s needs and objectives.'

            article6='We always attempt to serve our clients with the utmost professionalism. So, we thank you for your time and consideration. We hope to become your favorite business. Thank you for your support.

            We are the ideal destination to shop and order online and receive instant delivery of your clothing at an incredibly low price. We provide the ultimate shopping experience that anyone can appreciate- from the very simplest website to the very finest quality garments for the very highest standards. Our team of designers and professionals is committed to working with you to provide the utmost in your shopping experience.
            
            “We hope you enjoy our services as much as we enjoy offering them to you.”- Lacuna Mart Family'
        />
        <Message className="container">
          <div id="message-from-ceo">
          <img src={mahendra_gautam} alt="" />
          <p>
          <a href="">Mahendra Gautam</a> <br />
          Founder & CEO of Lacuna Venture is a willing entrepreneur with plenty to say about how the entrepreneurship work for startups: A lot has changed since he was a child. He remembers all his childhood dreams being realized from young age onwards and seeing what went on when they crossed over into reality – we have seen these things in action (including successful businesses). Nowadays technology enables startup founders such as him time to develop their strategy along lines of best practices that will create lasting impacts — creating jobs while lowering barriers towards entry among others. Learn more at  https://www.lacunaventure.com.
          {/* EMAIL LOGO */}
          </p>
            </div>
            <div>
          </div>
        </Message>
        
    </div>
  )
}

export default Blog3
const Message = styled.div`
#message-from-ceo{
  display:flex ;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width:70%;
  box-sizing:border-box ;
  padding:10px ;
  display:grid;
  background-color:#F5F7FB ;
  @media (max-width:990px){
    width:100% ;
  }
}
p{
  /* width:70%; */
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
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
  transition: all 1s ease ;

  &:hover{
    transform:rotate(-30deg);
  
  }
}
`