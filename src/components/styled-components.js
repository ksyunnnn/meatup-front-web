import styled, { injectGlobal } from 'styled-components';
import { Colors, FontSize } from '../variables';
import { media } from '../helpers/media-query';

injectGlobal`
  @font-face {
    font-family: 'Lato', sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&subset=latin-ext')!important;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    font-size: ${FontSize.medium};
    font-weight: 300;
  }
`;

export const GlobalWrapper = styled.div`
  max-width: 1450px;
  margin: 0 auto;
  padding: 4vh 4vw;
  color: ${Colors.black}
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

export const InputContainer = styled.div`
  position: relative;
  top: 35vh;
  left: 10vw;
  width: 50vw;
  .label {
    margin-bottom: 8px;
  }
`;

export const Input = styled.input`
  display: inline-block;
  font-weight: 100;
  border: 0;
  outline: 0;
  font-size: ${FontSize.large};
  width: 100%;
  ${props =>
    props.withStrings
      ? `
    width: auto;
    }`
      : ''};
`;

export const InputTitle = styled.div`
  margin-bottom: 8px;
`;

export const InputStrings = styled.span`
  color: ${Colors.grayLight};
  font-size: ${FontSize.large};
  font-weight: 100;
`;

export const SubmitButton = styled.input`
  display: block;
  margin: 24px 0;
  border: none;
  outline: 0;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 2px;
  font-size: ${FontSize.small};
  background: ${Colors.oniku};
  color: ${Colors.white};
  opacity: 0.6;
  ${props =>
    props.active
      ? `
    opacity: 1;
    :hover {
      background: ${Colors.onikuDark};
    }`
      : ''};
`;
