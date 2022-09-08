import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';
import { useState, useEffect } from "react";

const NavMenu = ({ aboutSectionIsVisible }) => {
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {}, [aboutSectionIsVisible]);

    return (
        <NavMenuStyles aboutSectionIsVisible={aboutSectionIsVisible}>
            <div className='navBarContainer'>
                <div className="navBarTitle">
                    <h4>BEN KOSA</h4>
                </div>
                <ul className='navItems'>
                    <li>
                        <NavLink exact to="/"
                                 onClick={() => setShowNav(!showNav) }
                                 role="button"
                                 onKeyDown={ () => setShowNav(!showNav) }
                                 tabIndex={0}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about"
                                 onClick={() => setShowNav(!showNav) }
                                 role="button"
                                 onKeyDown={ () => setShowNav(!showNav) }
                                 tabIndex={0}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects"
                                 onClick={() => setShowNav(!showNav) }
                                 role="button"
                                 onKeyDown={ () => setShowNav(!showNav) }
                                 tabIndex={0}
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'
                                 onClick={() => setShowNav(!showNav) }
                                 role="button"
                                 onKeyDown={ () => setShowNav(!showNav) }
                                 tabIndex={0}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </NavMenuStyles>
    );
};

export default NavMenu;

const NavMenuStyles = styled.div`
  /**  For min-width: 1200px **/
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => props.aboutSectionIsVisible ? "7rem" : "9rem"};
  padding: 1rem 0;
  box-shadow: 0 -1px 0 rgb(255 255 255 / 10%) inset;
  
  background-color: ${props => props.aboutSectionIsVisible ? "white" : "transparent"};
  transition: .4s ease background-color, .4s ease height;
  
  display: flex;
  align-items: center;

  .navBarContainer {
    width: 1170px;
    margin-right: auto;
    margin-left: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  ul {
    text-align: center;
    margin-right: 1rem;
    
    li {
      display: inline-block;
      border-radius: 8px;
      transition: .3s ease background-color;

      &:hover {
        background-color: var(--deep-dark);
      }
    }
      
    a {
      display: inline-block;
      font-family: 'RobotoMono Regular';
      padding: 1rem 1rem;
      font-size: 2rem;
      color: var(--gray-1);
      outline: none;
    }
    
    .active {
      color: ${props => props.aboutSectionIsVisible ? "black" : "white"};;
    }
  }
  
  .navBarTitle {
    display: inline-block;
    font-family: 'Dosis Regular';
    padding: 1rem 1rem;
    font-size: 2.4rem;
    color: ${props => props.aboutSectionIsVisible ? "black" : "white"};
  }
  
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  
  .closeNavIcon {
    display: none;
  }
  
  @media only screen and (max-width: 768px) {
    .hide-item { /* TODO: Change to be horizontal? */
      transform: translateY( calc(-100% - var(--top)) );
    }
    
    .mobile-menu-icon {
      display: block;
    }
    
    .navItems {
      --top: 1rem;
      transition: .3s ease transform;
      background-color: var(--deep-dark);
      padding: 2rem;
      width: 98%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);

      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        color: var(--gray-1);
        
        * {
          pointer-events: none; /* We don't want any pointer events for the svg nor the link inside the div */
        }
      }
      
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
  
  
`