import styled, { injectGlobal } from 'styled-components';
import { Colors } from '../variables';
import { media } from '../helpers/media-query';

injectGlobal`
  @font-face {
    font-family: 'Lato', sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&subset=latin-ext');
  }

  * {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
  }
`;

export const GlobalWrapper = styled.div`
  max-width: 1450px;
  margin: 0 auto;
  padding: 4vh 4vw;
  border: 2vh solid ${Colors.oniku};
  height: 100vh;
  box-sizing: border-box;
  overflow-y: scroll;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
  }
  ${media.phone`
    padding-bottom: 0;
  `};
`;
