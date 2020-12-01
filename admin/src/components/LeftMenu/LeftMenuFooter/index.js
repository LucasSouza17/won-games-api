import React from 'react';
import Wrapper from './Wrapper';

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        Powered by &nbsp;
        <a key="website" href="https://www.linkedin.com/in/lucassouza17/" target="_blank" rel="noopener noreferrer">
          Lucas Souza
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
