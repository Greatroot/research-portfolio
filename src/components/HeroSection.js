import React from 'react';
import styled from "styled-components";
import HeroImg from '../assets/images/slider-2.jpg';
import PText from "./PText";
import Button from "./Button";
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from "../assets/images/scroll-down-arrow.svg";

const HeroSection = () => {
    return (
        <HeroStyles>
            <div className="hero">
                <div className="hero__img">
                    <img src={HeroImg} alt="hero picture" />
                </div>
                <div className="hero__content">
                    <div className="hero__content_container">
                        <h1 className="hero__heading">
                            <span className="hero__name">Hi, I'm Ben Kosa!</span>
                        </h1>
                        <div className="hero__info">
                            <PText>
                                I am a student at the University of Washington... bla bla bla. Need to fill this out.
                            </PText>
                    </div>
                    </div>
                </div>
            </div>
        </HeroStyles>
    );
};

export default HeroSection;

const HeroStyles = styled.div`
  
  .hero {
    //min-height: 1000px;
    height: 100vh;
    width: 100%;
    text-align: center;
    //display: flex;
    //align-items: center;
    //justify-content: center;
    position: relative;
  }
  
  .hero__content {
    position: absolute;
    top: 0;
    left: 0;
    
    padding-right: 15px;
    padding-left: 15px;
    margin-right: 6vw;
    margin-left: 6vw;
    z-index: 100;
    width: 100%;
    height: 100%;
    
    display: flex;
    align-items: center;
    justify-content: start;
  }
  
  .hero__content__container {
    display: flex;
    flex-direction: column;
    
  }
  
  .hero__heading {
    font-size: 2rem;
    //margin-bottom: -4rem;
    //span {
    //  display: inline-block;
    //  width: 100%;
  }

  .hero__name {
    font-size: 4rem;
    font-family: "Montserrat SemiBold";
    color: #EEEEEE;
  }

  .hero__info {
    //margin-top: -18rem;
    color: #FFFFFF;
  }
  
  .hero__img {
    height: 100vh;
    width: 100%;
    margin: 0 auto;
    z-index: 0;
    //border: 2px solid var(--gray-1);
  }
  
  //.hero__social, .hero__scrollDown {
  //  display: flex;
  //  flex-direction: column;
  //  gap: 2rem;
  //  position: absolute;
  //  bottom: 20px;
  //  width: 50px;
  //}
  //.hero__social {
  //  left: 50px;
  //}
  //.hero__scrollDown {
  //  right: 50px;
  //}
  //.hero__social__indicator, .hero__scrollDown {
  //  width: 50px;
  //
  //  p {
  //    font-size: 1.6rem;
  //    transform: translateY(-70px) rotate(90deg);
  //    letter-spacing: .7rem;
  //    text-transform: uppercase;
  //  }
  //
  //  img {
  //    max-height: 45px;
  //    width: 16px;
  //    margin: 0 auto;
  //    object-fit: contain;
  //  }
  //}
  //  .hero__scrollDown {
  //    img {
  //      max-height: 70px;
  //    }
  //  }
  //  .hero__social__text {
  //    ul {
  //      li {
  //        margin-bottom: 1rem;
  //        a {
  //          display: inline-block;
  //          font-size: 1.6rem;
  //          transform: rotate(-90deg);
  //          letter-spacing: 5px;
  //          margin-bottom: 2rem;
  //        }
  //      }
  //    }
  //  }
    @media only screen and (max-width: 768px) {
      .hero {
        min-height: 750px;
      }
      .hero__heading {
        font-size: 1.4rem;
        margin-bottom: -3rem;
        .hero__name {
          font-size: 4.5rem;
        }
      }
      .hero__img {
        height: 300px;
      }
      .hero__info {
        margin-top: 3rem;
      }
      .hero__social {
        left: 0px;
        bottom: 15%;
        width: 20px;
        .hero__social__indicator {
          width: 20px;
          p {
            font-size: 1.2rem;
          }
          img {
            max-height: 22px;
          }
        }
        .hero__social__text {
          ul {
            li {
              a {
                font-size: 1.2rem;
                margin-bottom: 1rem;
              }
            }
          }
        }
      }
      .hero__scrollDown {
        right: 0;
        width: 20px;
        gap: 1rem;
        p {
          font-size: 1.3rem;
        }
      }
    }
`;