const Form = (props) => {
  const { cardInfo, handleChange, handleSubmit, error } = props;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block" htmlFor="cardNumber">Card Number</label>
        <input 
          type="text" 
          id="cardNumber"
          name="cardNumber"
          value={cardInfo.cardNumber}
          onChange={handleChange}
          className="w-full px-3 py-3 border rounded-md"
        />
        {error.cardNumber && <p className="text-red-500">Card number is invalid</p>}
      </div>
      <div>
        <label className="block" htmlFor="cardHolder">Card Holder</label>
        <input 
          type="text" 
          id="cardHolder"
          name="cardHolder"
          value={cardInfo.cardHolder}
          onChange={handleChange}
          className="w-full px-3 py-3 border rounded-md"
        />
        {error.cardHolder && <p className="text-red-500">Card holder is invalid</p>}
      </div>
      <div>
        <label className="block" htmlFor="expiryDate">Expiry Date</label>
        <input 
          type="text" 
          id="expiryDate"
          name="expiryDate"
          value={cardInfo.expiryDate}
          onChange={handleChange}
          className="w-full px-3 py-3 border rounded-md"
          placeholder="DD/MM"
        />
        {error.expiryDate && <p className="text-red-500">Expiry date is invalid</p>}
      </div>
      <div>
        <label className="block" htmlFor="cvv">CVV</label>
        <input 
          type="text" 
          id="cvv"
          name="cvv"
          value={cardInfo.cvv}
          onChange={handleChange}
          className="w-full px-3 py-3 border rounded-md"
        />
        {error.cvv && <p className="text-red-500">CVV is invalid</p>}
      </div>
      <button 
        type="submit"
        className="w-full px-3 py-3 text-white bg-blue-500 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;