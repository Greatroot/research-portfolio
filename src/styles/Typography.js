import { createGlobalStyle } from "styled-components";
import RobotoMonoRegular from '../assets/fonts/RobotoMono-Regular.ttf';
import MontserratSemiBold from '../assets/fonts/Montserrat-SemiBold.ttf';
import MontserratBold from '../assets/fonts/Montserrat-Bold.ttf';

import DosisRegular from '../assets/fonts/Dosis-Regular.ttf';
import DosisSemiBold from '../assets/fonts/Dosis-SemiBold.ttf';
import DosisBold from '../assets/fonts/Dosis-Bold.ttf';

import OpenSansRegular from '../assets/fonts/OpenSans-Regular.ttf';
import OpenSansSemiBold from '../assets/fonts/OpenSans-SemiBold.ttf';
import OpenSansBold from '../assets/fonts/OpenSans-Bold.ttf';



const Typography = createGlobalStyle`
  @font-face {
    font-family: 'RobotoMono Regular';
    src: url(${RobotoMonoRegular});
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Montserrat SemiBold';
    src: url(${MontserratSemiBold});
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Montserrat Bold';
    src: url(${MontserratBold});
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Dosis Regular';
    src: url(${DosisRegular});
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Dosis SemiBold';
    src: url(${DosisSemiBold});
    font-style: normal;
  }

  @font-face {
    font-family: 'Dosis Bold';
    src: url(${DosisBold});
    font-style: normal;
  }

  @font-face {
    font-family: 'OpenSans Regular';
    src: url(${OpenSansRegular});
    font-style: normal;
  }

  @font-face {
    font-family: 'OpenSans SemiBold';
    src: url(${OpenSansSemiBold});
    font-style: normal;
  }

  @font-face {
    font-family: 'OpenSans Bold';
    src: url(${OpenSansBold });
    font-style: normal;
  }
  
  html {
    //font-family: 'RobotoMono Regular';
    //color: var(--gray-1);
  }
  
  * {
    //font-family: 'RobotoMono Regular';
    //color: var(--gray-1);
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Dosis SemiBold';
  }
  
  h2::after {
    background: #444444 none repeat scroll 0 0;
    bottom: 0;
    content: "";
    display: block;
    font-size: 20px;
    height: 2px;
    left: 0;
    position: absolute;
    right: 0;
  }
`;

export default Typography;