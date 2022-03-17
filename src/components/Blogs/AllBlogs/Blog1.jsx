import React from "react";
import BlogItem from "../BlogItem";
import styled from 'styled-components';
function BlogsContent() {
  return (
    <Container className="container">
      <BlogItem
        share='Spread the love'
        image="https://lacunaventure.com/wp-content/uploads/2022/02/Guide.jpg"
        title="A GUIDE TO CREATING AN EFFECTIVE IDEA AND BUSINESS PLAN"
        article='A solid business plan should be a blueprint for a successful business. Starting a business is a 
                huge responsibility, you have to work on a lot of things to make it happen in real life. You have to create
                amazing ideas and plan a lot of things inside your head before starting a business. Planning is the first 
                step in a business because without proper planning, we cannot even take decisions nor can we organize things. 
                Some guidelines to create effective ideas and make business plans are:'
                
        heading1='Creative Department:'
        article1='For any successful business operation, there will be employees working all day and night but the 
                  company will have a creative team that assembles creative ideas, creates plans, make designs, and execute 
                  campaigns that encourage a target audience to buy a company’s products and services. Not only that, but the 
                  Creative department also advertises the company’s products and makes marketing and promotions easier.
                  Basically, a creative department plays a huge role in a company’s growth.'

        heading2='Keep a regular Journal:'
        article2 = 'A journal is great for recording thoughts, feelings, and the history of your life. It also is a great way to structure and develop ideation habits. If you don’t keep a journal, start today. You can plan and visualize things in your head and write it in your journal so that you won’t forget them in the future. Keeping a journal is a really good habit that will surely give you fruitful results. The act of taking a business idea and fleshing it out on paper not only makes it tangible and real but also allows for the growth and expansion of that idea.'
        
        heading3='Don’t make unrealistic assumptions:'
        showmore='HOW TO START A BUSINESS WITH LOW INVESTMENT?'
        article3='By their very nature, business plans are full of assumptions. The most important assumption, of course, is that your business will succeed! The best business plans highlight critical assumptions and the worst business plans bury assumptions throughout the plan so no one can tell where the assumptions end and the facts begin. Market size, acceptable pricing, customer purchasing behavior, these all involve assumptions. Wherever possible, make sure you make assumptions that make sense and help you reach your goal in the future.'

            heading4='Do your research:'
            article4='Investigate everything you can about your proposed business before you start writing your business plan–and long before you start the business. You’ll also need to continue your research while you write the business plan since inevitably, things will change as you uncover critical information. Also make sure to consult multiple sources, take ideas thoroughly, write, evaluate and analyze information.'

            heading5='Prioritize your action steps:'
            article5='Once you have your action steps assigned you to have to be ready enough in carving out time for actioning them. An awesome list of tasks that is not executed is worthless. Treat these as any other significant appointments in your daily life. Block out time in the calendar. Engage the ‘do not disturb mode. Let people know that you’ll be unavailable. Basically, do what you need to, in order to keep progressing your idea forward.

            If you find this article useful or if you think someone really needs to see this, then please feel free to share this article.
            Thank you for your valuable time!'
          />

    </Container>
  );
}

export default BlogsContent;
const Container  = styled.div`
font-family:monaster ;
margin-top: 50px;

`
