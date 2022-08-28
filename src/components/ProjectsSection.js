import React from 'react';
import SectionTitle from "./SectionTitle";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation } from "swiper";
import projects from "../assets/data/projects";
import ProjectItem from "./ProjectItem";
import styled from "styled-components";
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation]);

const ProjectsSection = () => {
    return (
        <ProjectSectionStyle>
            <div className="container">
                <SectionTitle heading="Projects" subheading="some of my recent works" />
                <div className="projects__allItems">
                    <Swiper spaceBetween={30} slidesPerView={1} navigation
                            breakpoints={
                                { // When window width is >= 640px
                                    640: {
                                        slidesPerView: 1,
                                    }, // When window width is >= 768px
                                    768: {
                                        slidesPerView: 2,
                                    }, // when the window width is >= 1200px
                                    1200: {
                                        slidesPerView: 3,
                                    },
                                }
                            }
                    >
                        { projects.map((project, index) => {
                            if(index >= 5) { // How we make it so that only 5 items are visible on the screen at one time.
                                return;
                            }
                            return(
                                <SwiperSlide key={project.id}>
                                    <ProjectItem img={project.img}
                                                 title={project.name}
                                                 desc={project.desc}
                                    />
                                </SwiperSlide>
                            );
                        }) }
                    </Swiper>
                </div>
            </div>
        </ProjectSectionStyle>
    );
};

export default ProjectsSection;

const ProjectSectionStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper-container {
    padding-top: 8rem;
    max-width: 100%;
  }
  
  .swiper-button-prev,.swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: var(--deep-dark);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
  }
  
  .swiper-button-next {
    right: 0;
  }
  
  .swiper-button-prev::after, .swiper-button-next::after {
    font-size: 2rem;
  }
  
  @media only screen and (max-width: 758px) {
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
      
      .projectItem__img {
        width: 100%;
      }
    }
  }
  
`;