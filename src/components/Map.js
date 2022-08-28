import React from 'react';
import PText from "./PText";
import styled from "styled-components";
import MapImg from '../assets/images/map2.png';

const Map = () => {
    return (
        <MapStyles>
            <div className="container">
                <div className="map__card">
                    <h3 className="map__card__heading">Where I eat, breathe, and sleep (among other things)</h3>
                        <PText>The University of Washington - Seattle</PText>
                        <a href="https://www.google.com/maps/place/University+
                        of+Washington/@47.6553387,-122.3057139,17z/data=!3m1!4
                        b1!4m5!3m4!1s0x549014929d8535eb:0x6b742c7901b82ba3!8m2!
                        3d47.6553351!4d-122.3035199"
                           target="_blank"
                           rel="noreferrer"
                           className="map__card__link"
                        >
                            Open in Google Maps
                        </a>
                </div>
            </div>
        </MapStyles>
    );
};

export default Map;

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat center / cover;
  min-height: 700px;
  .container {
    position: absolute;
    min-height: 700px;
  }
  .map__card {
    position: absolute;
    right: 2%;
    top: 21%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  // TODO: Fix the image and card sync when past 1550px.
  @media only screen and (min-width: 1550px) {
    .map__card {
      position: absolute;
      left: 60vw;
    }
  }
  
  @media only screen and (max-width: 1000px) {
    min-height: 450px;
    .container {
      min-height: 450px;
    }
    
    .map__card {
      right: 5%;
      bottom: 15%;
    }
  }
  
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
    .map__card {
      
    }
  }
  
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`