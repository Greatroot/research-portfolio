import React from 'react';
import styled from "styled-components";

const PText = ({ children }) => {
    return (
        <PStyle className="para">
            <p>{ children }</p>
        </PStyle>
    );
};

export default PText;

const PStyle = styled.div`
    max-width: 500px;
    margin: 0 auto;
    font-size: 1.8rem;
    line-height: 2rem;
    
    @media-only screen and (max-width: 768px) {
      font-size: 2.1rem;
    )
`