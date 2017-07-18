import React from 'react';

export default () => {
  const date = new Date().getFullYear();

  return (
      <footer>
        <p>
          <span><a href="https://github.com/BrontosaurusTails/Sovereign">github</a></span>
          <span> | {date}</span>
        </p>
      </footer>
  );
}
