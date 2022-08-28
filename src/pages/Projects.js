import React, {useEffect, useState} from 'react';
import SectionTitle from "../components/SectionTitle";
import styled from "styled-components";
import {MdSearch} from "react-icons/md";
import ProjectItem from "../components/ProjectItem";
import ProjectInfo from '../assets/data/projects';

// TODO: Make projects be one section and the page called "What I've been up to".
const Projects = () => {
    const projects = ProjectInfo;
    const [filteredProjects, setFilteredProjects] = useState(ProjectInfo)
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        if(searchText === '') return;
        setFilteredProjects(() =>
            ProjectInfo.filter((project) =>
                project.name.toLowerCase().match(searchText.toLowerCase())
            )
        );
    }, [searchText])

    const handleChange = (e) => {
        e.preventDefault();
        setSearchText(e.target.value);
    };

    return (
        <ProjectStyles>
            <div className="container">
                <SectionTitle heading="Projects"
                              subheading="Some of my recent works"
                />
                <div className="projects__searchBar">
                    <form>
                        <input type="text"
                               value={searchText}
                               placeholder="Project Name"
                               onChange={handleChange}
                        />
                        <MdSearch className="searchIcon"/>
                    </form>
                </div>
                <div className="projects__allItems">
                    {filteredProjects.map((project) => (
                        <ProjectItem key={project.id}
                                     title={project.name}
                                     desc={project.desc}
                                     img={project.img}
                        />
                    ))}
                </div>
            </div>
        </ProjectStyles>
    );
};

export default Projects;

const ProjectStyles = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .projects__searchBar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  
  .projects__searchBar .searchIcon path {
    color: var(--deep-dark);
  }
  
  @media only screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    }
  }
`;