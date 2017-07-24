import React from 'react';

export default ({url, date}) => {
  return (
      <footer>
        <p>
          <span><a href={url}>github</a></span>
          <span> | {date}</span>
        </p>
      </footer>
  );
}
