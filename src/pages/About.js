import React from 'react';
import PText from "../components/PText";
import Button from "../components/Button";
import AboutImg from '../assets/images/about-page-img.png';
import styled from "styled-components";
import AboutInfoItem from "../components/AboutInfoItem";
import ContactBanner from "../components/ContactBanner";

const About = () => {
    return (
        <AboutPageStyles>
            <div className="container">
                <div className="top-section">
                    <div className="left">
                        <p className="about__subheading">
                            Hi, I am <span>Ben Kosa</span>
                        </p>
                        <h2 className="about__heading">A CS undergrad student at the University of Washington</h2>
                        <div className="about__info">
                            <PText>
                                I am from Olympia, Washington: the capital of Washington
                                State and a beautiful place that I will always hold dear.
                                I'm also proud to call Seattle, Washington my home and is
                                where I currently am studying computer science as an undergrad
                                at the University of Washington. I love to program, compete in
                                triathlons, run and bike around Seattle, and Deaf culture.
                                <br /> <br />
                                I've been coding ever since I was in high school and has always
                                been a passion of mine ever since. And because it is also a passion
                                of mine to build things and help others, coding has become this amazing space
                                for me to do those things.
                                <br /> <br />
                                I was raised by a deaf father and a mother with Usher Syndrome, a condition characterized
                                by total deafness and vision loss that worsens over time. Because of this
                                I come from both the hearing and deaf worlds and am what's known as a CODA
                                (Child of Deaf Adult). This means that I was raised to be ASL fluent in an
                                American Sign Language signing household and have a strong passion for the language.
                                A passion so strong in fact that I have worked my way up over the past year
                                in the ASL Club at the University of Washington and am now the club's
                                proud president.
                                <br /> <br />
                                Although growing up was nowhere nearly as hard as my two deaf parents growing
                                up in a hearing society, I did have to mature quicker than most.
                                Whether it was because I had to interpret for my parents
                                from an early age or take the place of my mom when it came
                                to being the other driving parent (so I drove her and my sister
                                around everywhere for things like groceries, errands, school,
                                extracurriculars, etc.), having a deaf father and a DeafBlind
                                mother always presented challenges when I was growing up.
                            </PText>
                        </div>
                        <Button btnText="Checkout my Resume!" btnLink="#" />
                    </div>
                    <div className="right">
                        <img src={AboutImg} alt="Ben Kosa Img" />
                    </div>
                </div>
                <div className="about__info__items">
                    <div className="about__info__item">
                        <h1 className="about__info__heading">Education</h1>
                        <AboutInfoItem  title="School"
                                        items={[`Olympia High School, Olympia, WA `,]}
                        />
                        <AboutInfoItem  title="College"
                                        items={['The University of Washington - Seattle',]}
                        />
                    </div>
                    <div className="about__info__item">
                        <h1 className="about__info__heading">My Skills</h1>
                        <AboutInfoItem  title="Frontend"
                                        items={['HTML', 'CSS', 'JS', 'React & Gatsby',]}
                        />
                        <AboutInfoItem  title="Backend"
                                        items={['Node', 'Express', 'Airtable', 'MySQL']}
                        />
                        <AboutInfoItem  title="Design"
                                        items={['Figma', 'AdobeXD']}
                        />
                    </div>
                    {/* TODO: Personalize this more */}
                </div>
            </div>
            <ContactBanner />
        </AboutPageStyles>
    );
};

export default About;

const AboutPageStyles = styled.div`
    padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
      font-size: 1.4rem; // TODO: Play around with the font size and styling.
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
      height: 100%;
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading: 2.8rem;
  }
`