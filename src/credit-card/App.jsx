import { useState } from 'react';
import './App.css';

import Form from './components/Form';

const App = () => {
  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: ''
  });
  const [error, setError] = useState({
    cardNumber: false,
    cardHolder: false,
    expiryDate: false,
    cvv: false,
  });
  const [showCard, setShowCard] = useState(false);

  const handleChange = (e) => {
    if(e.target.name === 'cardNumber' && e.target.value.length > 16) {
      setError({
        ...error,
        cardNumber: true,
      });
      return;
    }
    if(e.target.name === 'cardHolder' && e.target.value.length > 20) {
      setError({
        ...error,
        cardHolder: true,
      });
      return;
    }
    if(e.target.name === 'expiryDate' && e.target.value.length > 5) {
      setError({
        ...error,
        expiryDate: true,
      });
      return;
    }
    if(e.target.name === 'cvv' && e.target.value.length > 3) {
      setError({
        ...error,
        cvv: true,
      });
      return;
    }
    setError({
      cardNumber: false,
      cardHolder: false,
      expiryDate: false,
      cvv: false,
    });
    setCardInfo({
      ...cardInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCard(false);
    for(let key in cardInfo) {
      if(!cardInfo[key]) {
        return setError({
          ...error,
          [key]: true,
        });
      }
    }
    console.log(error)
    for(let key in error) {
      if(error[key]) return;
    }
    console.log(cardInfo);
    setShowCard(true);
  }

  return (
    <div className="section container flex flex-row gap-4 justify-center">
      <dir>
        <h1>Credit Card</h1>
        <Form 
          cardInfo={cardInfo}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          error={error}
        />
      </dir>
      {showCard && (
        <div className="card">
          <div className="card__number"><span className="font-bold">Card Number: </span>{cardInfo.cardNumber}</div>
          <div className="card__holder"><span className="font-bold">Card Holder: </span>{cardInfo.cardHolder}</div>
          <div className="card__expiry-date"><span className="font-bold">Card Date: </span>{cardInfo.expiryDate}</div>
          <div className="card__cvv"><span className="font-bold">Card CVV: </span>{cardInfo.cvv}</div>
        </div>
      )}
    </div>
  );
}

export default App;