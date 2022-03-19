import React from 'react'
import BlogItem from '../BlogItem'
import styled from 'styled-components';
import { Slide } from 'react-reveal';
function Blog7() {
  return (
    <div>
      <BlogItem
      image='https://lacunaventure.com/wp-content/uploads/2021/05/failure.jpg'
      title='WHY DO STARTUPS IN NEPAL FAIL?'

      heading1=' “When you take risks you learn that there will be times when you succeed and there will be times when you fail, and both are equally important.” '

      heading2='WHAT IS STARTUP?'
      article2='Startups just aren’t about starting a new business and working on it. A startup is when an individual tries to start their own business or a field that can be both profitable or non-profitable. There is no age barrier when it comes to starting a new business.

      A startup is a business that is still in its early stages of growth. 1-3 entrepreneurs or an individual usually start these businesses with the aim of capitalizing on a perceived consumer need by creating a viable product, service, or platform.'

      heading3='WHY DO STARTUPS IN NEPAL FAIL? '
      article3='There are many reasons why startups in Nepal fail. A Lot of individuals and entrepreneurs have faced failure in their business despite being so close to success. Let me tell you why a business fails.

      According to data released by the Small Business Administration (SBA) in 2018, about one-fifth of all business startups fail in the first year, half of all employer institutions fail within five years, and only about one-third survive ten years or more.'

      article4={
        <>
          There are many reasons why startups in Nepal fail. A Lot of individuals and entrepreneurs have faced failure in their business despite being so close to success. Let me tell you why a business fails.

According to data released by the Small Business Administration (SBA) in 2018, about one-fifth of all business startups fail in the first year, half of all employer institutions fail within five years, and only about one-third survive ten years or more.
        </>
      }
      heading5={
        <>

        1. LACK OF OPPORTUNITIES PROVIDED TO YOUNG ENTREPRENEURS <br />
          YOUR OPPORTUNITY IS YOU !!!

        </>
      }
      article5={
        <>
        When it comes to new talent, the door should be opened equally to each and every individual. There have been several instances where young people’s proposals have been dismissed solely due to their age. 

While having many opportunities for success, not providing equal opportunities and resources to these young people has resulted in their failure in their startups multiple times. This can be looked as one of the major reasons why startups in Nepal fail. 
            <br />
            <b>

          <em>When the door itself is closed before it’s opened how can someone ever be able to get inside the door of success?</em>
            </b>
        </>
      }
      heading6='2. LACK OF KNOWLEDGE'
      article6='There are thousands of individuals in Nepal who have the best talents and ideas but the reason why their startup business fails is due to not having enough knowledge on how to implement these ideas.

      Starting a business is a high-risk, high-reward undertaking. As a result, having a clear business strategy and a stronger business model is important for all companies. There must be short-term and long-term objectives for up to ten years. 
      
      Many small businesses in Nepal have failed as a result of fundamental flaws in their business planning and lack of knowledge about business tactics. Knowledge doesn’t just involve knowing how to start a business but also about what are the consequences that can cause a failure of a startup business.'

      heading7='3. LACK OF CONFIDENCE'
      article7={
        <>
        People usually take a step back when a startup fails due to a large number of competitors. They are also frustrated by the fact that their company is unable to adapt to market changes due to intense competition. Here, a person forgets that every business on the market was once a startup.

When there is no confidence it is obvious that the competitors that you look at are seen as strong and your business as a weak one!!! 


        </>
      }
      heading8='4. COMPETITION'
      article8={
        <>
        Startups usually fail due to a large number of competitors in the market.

Wesabe, a failed online personal financial management service that was outperformed by Mint, is a well-known example. Mint assessed the shortcomings of Wesabe’s MVP and launched the platform only after developing a better solution. 

Among other things, this gave Mint a competitive advantage. Wesabe was more powerful than Mint and had more features, but it was more difficult to use.

This can be taken as a reference on why businesses fail. But, there is always a solution to outshine your business despite competitors, and that is being confident and sticking to a good marketing strategy.

        </>
      }

      heading9='5. MARKET PROBLEMS'
      article9={
        <>
        One of the main reasons that businesses fail is that there is little or no market for the product that they have created. The market timing is incorrect. You may be a few years ahead of your market, and they are not yet ready for your specific solution. 
        </>
        
      }
      heading10='6. LACK OF CUSTOMER INTERACTION'
      article10={
        <>
        A typical Nepali startup will spend months developing a product that is on par with the best in the world, but it is not something customers require. When most entrepreneurs first start out, they forget that they need to create solutions for people’s problems, not go looking for problems after they’ve created a solution.

Launching your business or investing so much in your business does not guarantee the success of your company. If you want your startup to reach a whole new level, you need to satisfy the most important group here and it’s none other than your customers.

Lack of interaction with your customers and not meeting their needs arises in the failure of the business. When you launch your business you need to make sure that you promise and fulfill what your customers need. In this way, your customers will support you from the very first day until the very last day.
        </>
      }

      heading11='7. ALLOCATION OF RESOURCES'
      article11={
        <>
        Startups frequently fail because they do not have a proper plan in place for how many people they need to hire, when is the best time to hire, and which teams should be invested in at the outset.

Startups that run out of resources usually do so because the founders do not want to give up a piece of the pie, the budgets were not properly planned, the burn rate was too high, or it simply took longer than expected to raise the first round.

Failure does not happen by chance. It all starts with ignorance, which can be remedied.

Startups will continue to lead innovation in the future. Though some of the statistics may not sound encouraging, it is possible to create a product that will change the world and make your dreams come true with careful planning and a lot of determination.
        </>
      }
      
      
      />

      

<div className="container">

<Slide up>

        <Form action="">
      <div className="mb-3">
        <div className="row">
          <div className="col-xl-8">
                      <label for="exampleFormControlInput1" class="form-label">First Name</label>
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="First Name" />
                      
                      <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Last Name" />

                      <label for="exampleFormControlInput1" class="form-label">Email address</label>
                      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    <div className="mb-3">
                      <label for="exampleFormControlTextarea1" class="form-label">Comments</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder='Your Message' required></textarea>
                    </div>
                    </div>
                    </div>
        </div>
        <button type='submit'>Submit</button>
        </Form>
        </Slide>
</div>


      </div>
      

  )
}

export default Blog7
const Form = styled.form` 
    button{
      background-color:#FA7525 ;
      border:none ;
      border-radius:10px ;
      padding:10px ;
      padding-left:20px ;
      padding-right:20px ;
      &:hover{
        background-color:#FF790A ;
      }
    }
    margin-bottom:50px ;


`