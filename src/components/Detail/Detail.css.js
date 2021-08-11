import styled from 'styled-components';

export const DetailsWrapper = styled.section`
  min-height: calc(100vh - 70px);
  padding:0 calc(3.5vw + 5px);
  position: relative;
`;

export const Background = styled.div`
 position: fixed;
  top: 00;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ImageTitle=styled.div`
  margin: 2rem 0;
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
`;

export const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: 1px solid transparent;
  padding: 0px 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;
  transition: all 2.5s easy-in-out;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(249, 249, 249, 0.5);
  }
`;
export const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.2);
  color: white;
  border: 1px solid rgba(249, 249, 249, 0.5);
  &:hover {
    background: rgba(198, 198, 198, 0.8);
  }

`;
export const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid rgba(249, 249, 249, 0.8);
  background: rgba(0,0,0,0.6);
  color: rgb(249, 249, 249);
  cursor: pointer;
  span {
    font-size: 30px;
  }
`;
export const GroupWatchButton = styled(AddButton)`
  background: rgba(0,0,0,0.8);
`;

export const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

export const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 560px;
`
