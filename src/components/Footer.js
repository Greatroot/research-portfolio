import React from 'react';
import PText from "./PText";
import FooterCol from "./FooterCol";
import styled from "styled-components";

const Footer = () => {
    return (
        <FooterStyles>
            <div className="container">
                <div className="footer__col1">
                    <h1 className="footer__col1__title">Ben Kosa</h1>
                    <PText> {/* TODO: Please fix this before making this live. */}
                        A computer science undergrad at the University of
                        Washington from Olympia, Washington. I'm very
                        passionate about programming, triathlons, the
                        deaf community and ASL. I'm also very passionate about
                        helping people, so if anyone ever needs help or wants to
                        work together on something that has anything listed above
                        or more, don't hesitate to ask!
                    </PText>
                </div>
                <div className="footer__col2">
                    <FooterCol heading="Important Links"
                               links={[
                                   {
                                       title: "Home",
                                       path: '/',
                                       type: 'Link',
                                   },
                                   {
                                       title: "About",
                                       path: '/about',
                                       type: 'Link',
                                   },
                                   {
                                       title: "Projects",
                                       path: '/projects',
                                       type: 'Link',
                                   },
                                   {
                                       title: "Contact",
                                       path: '/contact',
                                       type: 'Link',
                                   },
                               ]}
                    />
                </div>
                <div className="footer__col3">
                    <FooterCol heading="Contact Info"
                               links={[ // We're leaving the type blank so that is is read as an anchor tag
                                   {
                                       title: '360-763-2090',
                                       path: 'tel:3607632090'
                                   },
                                   {
                                       title: 'b.kkosa2@gmail.com',
                                       path: 'mailto:b.kkosa2@gmail.com'
                                   },
                                   {
                                       title: 'bkosa2@uw.edu',
                                       path: 'mailto:bkosa2@uw.edu'
                                   },
                                   {
                                       title: 'bkosa2@cs.washington.edu',
                                       path: 'mailto:bkosa2@cs.washington.edu'
                                   },

                               ]}
                    />
                </div>
                <div className="footer__col4">
                    <FooterCol heading="Social Links"
                               links={[
                                   {
                                       title: 'LinkedIn',
                                       path: 'https://www.linkedin.com/in/ben-kosa-2b04251ab/'
                                   },
                                   {
                                       title: 'GitHub',
                                       path: 'https://github.com/Greatroot'
                                   },
                                   {
                                       title: 'Instagram',
                                       path: 'https://www.instagram.com/bkosa2/'
                                   },
                                   {
                                       title: 'Facebook',
                                       path: 'https://www.facebook.com/ben.kosa.52'
                                   },
                               ]}
                    />
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <PText>@ 2021 - Ben Kosa | Designed by web cifar</PText>
                </div>
            </div>
        </FooterStyles>
    );
};

export default Footer;

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
    .para {
      text-align: left;
    }
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--deep-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .footer__col1 {
      .para {
        text-align: center;
      }
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;