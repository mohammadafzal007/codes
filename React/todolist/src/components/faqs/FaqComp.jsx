import React from 'react';
import Faqques from './Faqques';

const FaqComp = () => {
  const faqs = [
    {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones 6 more than a human",
    },
    {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
    },
    {
    question: "How long do cats live",
    answer: "Outdoor cats live 5 years on average. Indoor"
    },
    ];
  return (
    <div>
      <div className="header">
        <h1>Frequenlty Asked Questions</h1>
      </div>
        <div className="questions">
            {
faqs.map((ele,index)=>{
  return (
    <Faqques ele={ele} index={index}/>
  )
})
            }
        </div>
    </div>
  )
}

export default FaqComp;