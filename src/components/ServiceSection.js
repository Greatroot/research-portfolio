import React from 'react';
import SectionTitle from "./SectionTitle";
import ServicesSectionItem from "./ServicesSectionItem";
import styled from "styled-components";
import {MdDesktopMac} from "react-icons/md";

const ServiceSection = () => {
    return (
        <ServicesSectionStyles>
            <div className="container">
                <SectionTitle heading="Services"
                              subheading="what I will do for you"/>
                <div className="services__allItems">
                    <ServicesSectionItem icon={ <MdDesktopMac /> }
                                         title='web design'
                                         desc="Lorem Ipsum is simply dummy text of the
                                         printing and type setting industry. Lorem Ipsum has been the industry's ok."
                    />
                    <ServicesSectionItem />
                    <ServicesSectionItem />
                </div>
            </div>
        </ServicesSectionStyles>
    );
};

export default ServiceSection;

const ServicesSectionStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    } 
  }
`