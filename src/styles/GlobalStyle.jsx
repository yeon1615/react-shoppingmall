import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

${reset}

@font-face {
    font-family: 'SpoqaHanSansNeo-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');
    font-weight: 400;
}

:root {
    --main-color : #6327FE;
    --main-bg-color: #F2F2F2;
    --main-text-color : #333333;
    font-family: 'SpoqaHanSansNeo-Regular';
}

button {
    padding: 0;
    border: none;
    background: inherit ;
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
}

h2,h3,p {
    color: var(--main-text-color);
}

span {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: var(--main-text-color);
}

* {
    box-sizing: border-box;
}
`;

export default GlobalStyle;
