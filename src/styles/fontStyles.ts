import { createGlobalStyle } from 'styled-components';
import RobotoWoff from './fonts/Roboto-Regular.woff';
import RobotoEot from './fonts/Roboto-Regular.eot';
import RobotoSvg from './fonts/Roboto-Regular.svg';
import RobotoWoff2 from './fonts/Roboto-Regular.woff2';
import RobotoTtf from './fonts/Roboto-Regular.ttf';



const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoWoff}) format('woff'),
       url(${RobotoEot}) format('eot'),
       url(${RobotoSvg}) format('svg'),
       url(${RobotoWoff2}) format('woff2'),
       url(${RobotoTtf}) format('ttf');
}
`;

export default FontStyles;