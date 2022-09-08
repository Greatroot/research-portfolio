import React, { useEffect, useRef } from 'react';
import SectionTitle from "./SectionTitle";
import PText from "./PText";
import Button from "./Button";
import AboutImg from '../assets/images/about-sec-img.png';
import styled from "styled-components";

// TODO: Replace this placeholder image with one of my own.
const AboutSection = ({ setSectionIsVisible }) => {
    const aboutSectionRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setSectionIsVisible(entry.isIntersecting);
            console.log("entry: ", entry)
        });
        observer.observe(aboutSectionRef.current);
    })

    return (
        <AboutSectionStyle ref={aboutSectionRef}>
            <div className="container">
                <div className="aboutMe">
                    <SectionTitle subheading="Let me introduce myself"
                                  heading="About me"
                    />
                    <PText>
                        My name is Ben Kosa and I am a computer
                        science undergraduate at the University of
                        Washington - Seattle and have a passion for
                        programming and building technology that
                        can make a difference in people's lives.
                        Write a few paragraphs for this...
                    </PText>
                    <div className="aboutSection__buttons">
                        <Button btnLink="/projects"
                                btnText="Works" />
                        <Button btnLink="/about"
                                btnText="Read More"
                                outline />

                    </div>
                </div>
                <div className="aboutSection__right">
                    <img src={AboutImg} alt="" />
                </div>
            </div>
        </AboutSectionStyle>
    );
};

export default AboutSection;

const AboutSectionStyle = styled.div`
  padding: 10rem 0;
  margin-top: 0.5rem;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutMe, .recentNews {
    flex: 1;
  }
  .section__title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left, .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section__title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0;
      .button-wrapper, a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;