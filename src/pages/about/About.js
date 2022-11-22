import React from "react";
import HappinessImage from "../../assets/images/happines.png";
import EmployeesImage from "../../assets/images/employees.png";
import VisionFrame from "../../assets/images/vision-frame.png";
import MissionFrame from "../../assets/images/mission-frame.png";
import TeaTable from "../../assets/images/teaandtable.png";
import "./about.scss";
import InfoSection from "../../components/InfoSection";

const infoListContent = [
  {
    title: "History",
    description: [
      `Alba Clothings started its production in the year 1994 at Vaikom, Kottayam District, Kerala. In a span of 25 years, it is our relentless faith with dedicated effort, focused on success, holding tightly on to business ethics and values that enabled Alba Clothings to soar to make a definite mark in the Textile Industry. The impeccable product quality has always ensured customer satisfaction which has emarkably promoted ALBA brand to reach to the present stage.`,
      `By 2019, over a period of 25 years, ALBA could spread its wings over the Kerala Textile Industry, a part of Tamil Nadu and the Middle-East by acquiring a considerable market share in the innerwear segment. Now ALBA has become a popular Brand. High quality ALBA products are currently available in considerably a good number of Retail outlets in Kerala, Tamil Nadu & in the Middle-Easy at an affordable price.`,
      `ALBA Registered Offices are located in Vaikom & Irumpanam, Kerala and Tirupur, Tamil Nadu. And Warehous is located in Vaikom, Kerala and the production units are based in Tirupur, Tamil Nadu. The production is being carried out in about 14 leading stitching units with International Standards and expertise under stringent quality control.`,
    ],
  },
  {
    title: `Why The Brand Name Alba?`,
    description: [
      `Alba is a given name of Latin origin meaning ‘white’. In Spanish and Italian the name means ‘Sunrise’. Sunrise indicates light, freshness, warmth and closeness. Among our garments the innerwear is the closest to our body. It gives the freshness, warmth, comfort and confidence for a fresh start. And we also intent the brand name Alba to stay in the minds of our customers as a simple and memorable experience.`,
    ],
  },
  {
    title: `Why The Brand Name Alba?`,
    description: [
      `Alba is a given name of Latin origin meaning ‘white’. In Spanish and Italian the name means ‘Sunrise’. Sunrise indicates light, freshness, warmth and closeness. Among our garments the innerwear is the closest to our body. It gives the freshness, warmth, comfort and confidence for a fresh start. And we also intent the brand name Alba to stay in the minds of our customers as a simple and memorable experience.`,
    ],
  },
];
const happinesList = [
  {
    content:
      "Listen to them. We give opportunities for them to express their views- personal and official.",
  },
  {
    content:
      "Appreciate the employees for the effort put in verbally and also through incentives, awards, accolades and public acknowledgements in meetings.",
  },
  {
    content:
      "Organise training programmes to enhance their professional skills, and also for personal re engineering to build strong self- esteem, develop interpersonal, social, team communication skills and attitude.",
  },
  {
    content:
      "The work environment is made proactive, positive, calm, joyful, effective, productive and enjoyable through meditation and other Self Building activities.",
  },
  {
    content:
      "Timely Financial assistance is rendered as a part of employee welfare scheme as and when required.",
  },
];

function About() {
  return (
    <div className="main-content col-10 px-0">
      <div className="d-flex flex-column align-items-center justify-content-center py-5">
        <h1 className="primary_color text-center happiness-header heading-1">
          Happiness Is Our Culture
        </h1>
        <p className="text-center text_dark_gray mt-3">
          The productivity and prosperity of an organisation is the reflection
          of the happiness and contentment of its employees. We believe that is
          what builds a family and the nation too. Happy employees are not just
          an asset to the organisation, but the love, contentment and enthusiasm
          they display build the whole world.So it is our prime responsibility
          to give a conducive, happy work culture for our employees, a climate
          which gives them opportunities for self growth and skill development.
        </p>
        <img className="mt-5" src={HappinessImage} alt="happiness" />
      </div>
      <div className="row py-5">
        <div className="col-md-6">
          <img className="img-fluid" src={EmployeesImage} alt="Employees" />
        </div>
        <div className="col-md-6">
          <h4 className="heading-2">
            What Do We Do To Make Our Employees Stay Happy And Satisfied ?
          </h4>
          <ul className="happiness-list mt-4">
            {happinesList.map((item, index) => (
              <li key={index}>
                <p>{item.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row py-5">
        <div className="col-md-7 my-1">
          <div className="d-flex h-100 flex-column justify-content-between">
            <div className="vision-frame">
              <div className="row h-100 justify-content-center align-items-center">
                <div className="col-md-10">
                  <h4 className="color-white heading-2">Our Vision</h4>
                  <p className="color-white">
                    Our vision is to provide prime value to customers by
                    delivering supreme quality undergarments in the global
                    market with the intent to touch the lives of our employees,
                    immediate society and the world community with the
                    understanding -‘we exist because they exist’.
                  </p>
                </div>
              </div>
            </div>
            <div className="tea-cup "></div>
          </div>
        </div>
        <div className="col-md-5 my-1">
          <div className="mission-frame ">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-md-10">
                <h4 className="color-white heading-2">Our Mission</h4>
                <p className="color-white">
                  Our mission is to put in effort wholeheartedly to:
                </p>
                <ul className="ps-4 ">
                  <li className="color-white">
                    Ensure the quality of the product excellence through
                    monitoring at every stages of production till delivery and
                    customer satisfaction.
                  </li>
                  <li className="color-white">
                    Focus on widening the business every year through a
                    progressive approach of associating with prospective textile
                    shops, appointing distributors and contracting with business
                    agents.
                  </li>
                  <li className="color-white">
                    Share part of the profit to ensure the welfare of the
                    employees, society & the environment.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row py-5">
        <div className="col-md-12">
          <h1 className="text-black text-center heading-1">Corporate Info</h1>
          {infoListContent.map((list) => (
            <div className="my-5">
              <InfoSection title={list.title} description={list.description} />
            </div>
          ))}
          <div className="my-5">
            <div className="video-bg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
