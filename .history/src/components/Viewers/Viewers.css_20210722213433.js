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
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.69) 0 26px 30px -10px, rgba(0, 0, 0, 0.73) 0 16px 10px -10px;
  cursor: pointer;
  transition: all .25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    video {
      opacity: 1;
    }
  }
`;