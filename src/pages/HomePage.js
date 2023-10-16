import React from 'react';
import { css } from '@emotion/react';

const HomePageStyle = css`
  h3 {
    font-size: 5rem;
    font-weight: 600;
    text-align: center;
  }
`;

const HomePage = () => {
  return (
    <div css={[HomePageStyle]}>
      <h3 className="title">Wellcome to 4Project!</h3>
    </div>
  );
};

export default HomePage;
