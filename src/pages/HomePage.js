import React from 'react';
import { css } from '@emotion/react';

const HomePageStyle = css`
  h3 {
    font-size: 3rem;
    font-weight: 500;
    text-align: center;
    margin: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const HomePage = () => {
  return (
    <div css={[HomePageStyle]}>
      <br></br>
      <h3 className="title">Home Page nya belum dibuat...!</h3>
    </div>
  );
};

export default HomePage;
