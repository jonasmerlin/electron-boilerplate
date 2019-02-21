import styled from 'styled-components';

const Page = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${ props => props.theme.colors.warmGrey04 };
  color: ${ props => props.theme.colors.hardCourtDarkBlue };
  box-shadow:  ${ props => props.theme.shadows.level01 };
`

export default Page;
