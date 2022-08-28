import React from 'react';
import styled from "styled-components";

const SectionTitle = ({ subheading = 'This is subheading', heading = 'This is heading',}) => {

    // See how we are injecting the styles from a parent component here (i.e. AboutSection).
    return (
        <SectionTitleStyle className="section__title">
            <p>{subheading}</p>
            <h2>{heading}</h2>
        </SectionTitleStyle>
    );
};

export default SectionTitle;

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
    font-family: 'RobotoMono Regular';
    font-size: 2rem;
  }
  h2 {
    font-family: 'Montserrat Bold';
    font-size: 6rem;
    margin-top: .5rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 3.6rem;
    }
  }
`;