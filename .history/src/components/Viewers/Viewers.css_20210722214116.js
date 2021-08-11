import styled from 'styled-components';

export const ViewersWrapper = styled.section`

`;

export const ViewersContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 25px;
  padding: 30px 0 26px;
`;

export const Wrap = styled.div`
   padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    top: 0;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
  }
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    opacity: 0;
  }

  &:hover{
    transform: scale(1.05);
    border-color: rgba(52, 59, 86, 0.8);
    box-shadow: rgba(0, 0, 0, 0.8 ) 0 40px 58px -16px;
    video {
      opacity: 1;
    }
  }
`;