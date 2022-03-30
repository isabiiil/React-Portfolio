import React from 'react';
import sunset from '../assets/sunset.jpg';
import '../App.css';

export default function Landing() {

  const styles={
    image: {
      backgroundSize: 'cover',
      width: '100vw',
      height: '100vh',
      position: 'absolute',
      filter: 'blur(8px)',
    },
    center: {
      margin: '0 auto',
      fontSize: '4vw'
    }
  }

  return (
    <>
      <img src={sunset} alt="Pink Sunset from Bonita Springs, Florida" style={styles.image} />
      <div style={styles.center}>
        <p>Hi! I'm</p>
        <div className="scroller">
          <span>
            Isabel<br/>
            a CS undergrad<br />
            a product manager<br/>
            a hackathon enthusiast
          </span>
        </div>
      </div>
    </>
  );
}