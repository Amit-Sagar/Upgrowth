import React from "react";
import Accordion from "../common/Accordian";

const FrequentlyAskedSection = () => {
  const list = [
    {
      title: "How are you different from other SaaS marketing agencies?",
      content: `<div>
       <p>We know SaaS inside and out — we’ve worked with enterprise B2B and B2C software clients as well as startups. From a giant like Amazon to B2B platforms like Recurly and Lever, our experienced team has moved the needle for multiple clients. </p>
       <p>While we have years of SaaS agency experience, we definitely don’t use one formulaic strategy for each client. We will use a unique combination of digital marketing best practices, growth hacks, cutting-edge technology and meaningful data to inform and customize our marketing blueprint for your business.</p>
       <p>Finally, our location is in the heart of Silicon Beach — meaning we’re on the cutting-edge of the tech scene, up-to-date on SaaS marketing trends, and local to many of the SaaS businesses we work with.</p>    
      </div>`,
    },
    {
      title:
        "How is digital marketing for SaaS companies different from traditional digital marketing for other businesses?",
      content: `<div> Traditional digital marketing for businesses often has many goals, including making a sale, earning an email address, or even raising brand awareness. For SaaS companies, though, almost every digital marketing dollar spent can be traced back to one unifying goal: to convince prospects to sign up for a free trial, demo or a paid version of your software platform.</div>`,
    },
    {
      title: "What services does a SaaS marketing agency provide?",
      content: `<div>
      A SaaS marketing agency typically offers services like SEO, content strategy, creation & marketing, PPC advertising, social media management, email marketing, inbound marketing, influencer marketing, lead nurturing, market analysis, brand strategy, user experience optimization, data analysis and performance analytics.
      </div>`,
    },
    {
      title: "How to choose the best SaaS marketing agency?",
      content: `<div>To choose the best SaaS marketing agency, consider their expertise in the SaaS field, track record with similar companies, understanding of the best marketing channel, range of services offered, transparency in reporting and communication, and testimonials from past SaaS clients.</div>`,
    },
    {
      title: "What are the benefits of hiring a SaaS marketing agency?",
      content: `<div>Hiring a SaaS marketing agency offers benefits such as specialized industry knowledge, access to experienced marketing professionals, ability to scale marketing efforts quickly (especially with marketing automation), fresh perspectives on your marketing strategy, and more time for you to focus on core business operations.</div>`,
    },
    {
      title: "Can a SaaS marketing agency help with lead generation?",
      content: `<div>You bet! A SaaS marketing agency can certainly help with lead gen by implementing targeted marketing strategies such as content creation and marketing, SEO, PPC campaigns, social media advertising, and email marketing, all designed to attract and convert potential customers into leads.</div>`,
    },
  ];
  return (
    <div className="w-[70%] mx-auto mt-10 mb-24">
      <h1 className="text-4xl text-center font-bold mb-10">
        Frequently Asked Questions
      </h1>
      <Accordion items={list} />
      <p className="text-center mt-10">If you were unable to find the answer you've been looking for, do not hesitate to get in touch and ask us directly.</p>
    </div>
  );
};

export default FrequentlyAskedSection;
