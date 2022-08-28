import React from 'react';
import SectionTitle from "./SectionTitle";
import styled from "styled-components";
import ContactInfoSection from "./ContactInfoSection";
import {MdEmail, MdLocalPhone} from "react-icons/md";
import ContactForm from "./ContactForm";

const ContactSection = () => {
    return (
        <ContactSectionStyle>
            <div className="container">
                <SectionTitle subheading="Get in touch"
                              heading="Contact"

                />
                <div className="contactSection__wrapper">
                    <div className="left">
                        <ContactInfoSection icon={<MdLocalPhone />}
                                            text="360-763-2090"
                        />
                        <ContactInfoSection icon={<MdEmail />}
                                            text="b.kkosa2@gmail.com"
                        />
                        <ContactInfoSection icon={<MdEmail />}
                                            text="bkosa2@uw.edu"
                        />
                        <ContactInfoSection icon={<MdEmail />}
                                            text="bkosa2@cs.washington.edu"
                        />
                        <ContactInfoSection text="Seattle, Washington" />
                    </div>
                    <div className="right">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </ContactSectionStyle>
    );
};

export default ContactSection;

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
  }
  
  @media only screen and (max-width: 900px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left, .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`