import React from "react";
import BlogItem from "../BlogItem";
import styled from 'styled-components';
function BlogsContent() {
  return (
    <Container className="container">
      <BlogItem
        image="https://lacunaventure.com/wp-content/uploads/2022/02/invest.jpg"
        title="HOW TO START A BUSINESS WITH LOW INVESTMENT?"
        article='It is very difficult to start a business in the competitive world and mainly it requires huge capital to start a business but if you will think deeply and creatively then you can start your own business with some criteria and also if you’re not financially stable then you can also start implementing some low-cost business ideas. There are many ideas to start a business with low investment, some of them are:'

        heading1='Start Your Own YouTube Channel:'
        article1='Vlogging and creating content is one of the best business ideas which doesn’t require capital and investment, all it requires is a good camera with a good mic system. YouTube is free of cost to create videos and post them. Not only is posting videos free but, inserting ads in the middle of your video will help you profit from your content. Another benefit of having a YouTube Channel is that it allows you to create more of a personal connection with your audience and this also shows a positive effect in your personal life as you become a public figure and many people admire you.'
        
        heading2='Handicraft Business:'
        article2='Handicrafts preserve traditional knowledge and talents and also have different importance in our lives as it promotes the heritage of our country through the use of different indigenous materials. Starting a small handicraft business in Nepal would be a great idea as this will also be a platform for all the uneducated ones as well. You can make something like an ornament or decoration with your own hands and sell it at a good reasonable price. This will obviously be a good business idea with low cost.'
        
        heading3='Online Courses:'
        article3='The ongoing pandemic situation has changed the whole scenario of attaining courses or classes. It is more convenient, time-saving, and cost-effective too. If you’re good at dancing, singing, painting, or anything else you can connect with people online and you can teach them in their respective fields. It’s a very good opportunity for the givers to share their knowledge and their talent and also for the takers to learn something by staying at home. Providing online courses is a very good and comfortable low-cost business idea that definitely has a good scope.'

        heading4='Affiliate marketing:'
        article4='Affiliate marketing is easy and cheap to start, but it takes dedication and a long-term vision to be successful. Essentially, affiliate marketing involves you promoting other companies’ products and services, earning a commission on generated leads. All you need to get started is a blog or website and a specific product or service you would like to promote. However, to be successful in affiliate marketing, you have to attract a lot of visitors to your website and get them to purchase products or services from your affiliate partners.'

        heading5='Meal Planner:'
        article5='Most people love to eat, but not everyone knows how to cook healthy, mouth-watering meals on an affordable budget. As a meal planner, your duties would include creating a list of ingredients, writing easy-to-follow recipes, providing nutritional information, developing a budget plan, and educating your customers. You can also plan a monthly/yearly weight loss/weight gain diet because people actually search for that in today’s time.'
        />
    </Container>
  );
}

export default BlogsContent;
const Container  = styled.div`
margin-top: 100px;

`
