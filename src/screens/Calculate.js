import React, { useState } from 'react';
import './Calculate.css'; 
import pinkHeartIcon from '../components/img/pink-heart-icon.png'; 
import loveIcon from '../components/img/love.png'; 

const Calculate = ({ oScore, setOScore }) => {
  const [yourName, setYourName] = useState('');
  const [partnerName, setPartnerName] = useState('');
  const [resultCalculated, setResultCalculated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!resultCalculated && yourName && partnerName) {
      const score = calculateO(yourName, partnerName);
      setOScore(score);
      setResultCalculated(true);
    }
  };

  const calculateO = (yourName, partnerName) => {
    return Math.floor(Math.random() * 101);
  };
  

  const handleRefresh = () => {
    setYourName('');
    setPartnerName('');
    setResultCalculated(false);
    setOScore(0);
  };

  return (
    <div className="calculate-container">
      <img src={loveIcon} alt="Love Icon" className="love-icon" />
      <form onSubmit={handleSubmit}>
        <label className="name">
          Your Name:
          <input type="text" value={yourName} onChange={(e) => setYourName(e.target.value)} />
        </label>
        <label className="name">
          Partner's Name:
          <input type="text" value={partnerName} onChange={(e) => setPartnerName(e.target.value)} />
        </label>
        <div className="button-container">
          <button type="submit" className="calculate-button">
            Calculate
          </button>
          <button type="button" className="refresh-button" onClick={handleRefresh}>
            Refresh
          </button>
        </div>
      </form>
      <img src={pinkHeartIcon} alt="Pink Heart Icon" className="heart-icon" />
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${oScore}%` }} />
      </div>
      {resultCalculated && (
        <p className="result-text-large">Your Score: {oScore}</p>
      )}
      {!resultCalculated && (
        <p className="error-text">Please enter names and calculate to see the result</p>
      )}
    </div>
  );
};

export default Calculate;



