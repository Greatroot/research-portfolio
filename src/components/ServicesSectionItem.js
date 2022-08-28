import React from 'react';
import { MdDesktopMac } from "react-icons/md";
import PText from "./PText";
import styled from "styled-components";

// TODO: Change the icon if you want to make them more personal.
const ServicesSectionItem = ({ icon = <MdDesktopMac />,
                               title = "Web Design",
                               desc = "Lorem Ipsum is simply dummy text of the " +
                               "printing and typesetting industry. Lorem Ipsum has " +
                               "been the industry's standard dummy text ever since " +
                               "the 1500s, when an unknown printer took a galley of " +
                               "type and scrambled it to make a type specimen book.",
}) => {
    return (
        <ItemStyles>
            <div className="servicesItem__icon">{icon}</div>
            <div className="servicesItem__title">{title}</div>
            <PText>{desc}</PText>
        </ItemStyles>
    );
};

export default ServicesSectionItem;

const ItemStyles = styled.div`
  text-align: center;
  .servicesItem__icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }
`