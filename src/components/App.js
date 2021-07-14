import React from 'react';

import logoSVG from '../assets/m_logo.svg';

function App() {
  return (
    <main className="landing-container">
      <header className="header">
        <img src={logoSVG} height={52} width={52} />
        <nav className="nav">
          <ul className="nav-items">
            <li className="nav-item">about me</li>
            <li className="nav-item">work</li>
            <li className="nav-item">photography</li>
          </ul>
        </nav>
        <nav className="mobile-nav">
        </nav>
      </header>
      <section className="landing-content">
        <p className="sub-title">who <span className="strikethrough">what</span> the hell is a</p>
        <h1 className="title">UX ENGINEER?</h1>
        <div className="sub-title-detail-container">
          <p><i>Creator</i></p>
          <p className="data-point">Mike Bettencourt</p>
        </div>
        <div className="sub-title-detail-container">
          <p><i>Volume</i></p>
          <p className="data-point">01</p>
        </div>
        <div className="sub-title-detail-container">
          <p><i>Year</i></p>
          <p className="data-point">2021</p>
        </div>
        <div className="sub-title-detail-container">
          <p><i>Location</i></p>
          <p className="data-point">Boston, MA</p>
        </div>
      </section>
      <div className="fab">
        Continue ↓
      </div>
    </main>
  );
}

export default App;

