import React from 'react';
import Footer from '../components/footer';

const footerProps = {
  url: 'https://github.com/BrontosaurusTails/Sovereign',
  date: new Date().getFullYear()
}

export default () => (
  <div>
    <p>Hello World!</p>
    <Footer {...footerProps} />
  </div>
);
