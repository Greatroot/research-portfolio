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
                    <SectionTitle heading="About me"/>
                    <PText>
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC,
                        making it over 2000 years old. Richard McClintock, a Latin professor
                        at Hampden-Sydney College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage, and going through the
                        cites of the word in classical literature, discovered the undoubtable source.
                        Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum
                        et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                        This book is a treatise on the theory of ethics, very popular during the Renaissance.
                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
                        from a line in section 1.10.32.
                    </PText>
                </div>
                <div className="recentNews">
                    <SectionTitle heading="Recent News"/>
                    <PText>
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC,
                        making it over 2000 years old. Richard McClintock, a Latin professor
                        at Hampden-Sydney College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage, and going through the
                        cites of the word in classical literature, discovered the undoubtable source.
                        Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum
                        et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                        This book is a treatise on the theory of ethics, very popular during the Renaissance.
                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
                        from a line in section 1.10.32.
                    </PText>
                </div>
            </div>
        </AboutSectionStyle>
    );
};

export default AboutSection;

const AboutSectionStyle = styled.div`
  padding: 10rem 0;
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
    margin: 0 5rem;
  }
  .aboutMe {
    flex: 3;
  }

  .recentNews {
    flex: 1;
  }
  
  .section__title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
    font-family: 'OpenSans Regular';
    font-size: 1.4rem;
  }
  //.aboutSection__buttons {
  //  display: flex;
  //  align-items: center;
  //  justify-content: flex-start;
  //  gap: 2rem;
  //  margin-top: 2rem;
  //}
  
  //@media only screen and (max-width: 950px) {
  //  .aboutSection__left {
  //    flex: 4;
  //  }
  //  .aboutSection__right {
  //    flex: 3;
  //  }
  //}
  //
  //@media only screen and (max-width: 768px) {
  //  .container {
  //    flex-direction: column;
  //    text-align: center;
  //  }
  //  .aboutSection__left, .aboutSection__right {
  //    width: 100%;
  //  }
  //  .aboutSection__right {
  //    margin-top: 3rem;
  //  }
  //  .section__title {
  //    text-align: center;
  //  }
  //  .para {
  //    margin: 0 auto;
  //  }
  //  .aboutSection__buttons {
  //    flex-direction: column;
  //    gap: 0;
  //    .button-wrapper, a {
  //      width: 100%;
  //      text-align: center;
  //    }
  //  }
  //}
`;