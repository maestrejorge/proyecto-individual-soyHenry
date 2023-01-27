import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
:root{
    --fondo: #E3DCCC;
    --black: #000;
    --white: #fff;
    --text1: rgba(0,0,0,.8);
    --text2: rgba(0,0,0,.8);
    --text3: #666;

    --linen: #E3DCCC;
    --oyster: #CBB69B;
    --pewter: #726253;
    --lemontea: #e1b80d;
    --yellow: #fff159;
    

    --family: 'Jelligun Regular'
}
*{
    margin:0;
    padding:0;
    box-sizing:border-box;

}
h1,h2,h3,h4,h5,h6 {
    color: var( --pewter);
    font-weight: inherit;
    font-size: small;
}
html{
    min-height: 100%;
    background-color: var(--fondo);
}
*,button,input{
    border:0;
    background-color: none;
    font-family: 'Jelligun Regular';  
}


`