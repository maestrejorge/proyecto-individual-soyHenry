import { createGlobalStyle } from 'styled-components';
import JelligunWoff from './Jelligun Webfont/JelligunRegular.woff';
import JellingunWoff2 from './Jelligun Webfont/JelligunRegular.woff2';

export default createGlobalStyle`
    @font-face {
            font-family: 'Jelligun Regular';
            src: local('Jelligun Regular'), local('JelligunRegular'),
            url(${JelligunWoff}) format('woff2'),
            url(${JellingunWoff2}) format('woff');
            font-weight: 300px;
            font-style: normal;
    }
`;