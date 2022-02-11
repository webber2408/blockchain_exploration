import { TransactionContext } from "./context/TransactionContext";
import React, { useContext } from "react";

const App = () => {
  const {
    connectWallet,
    currentAccount,
    sendTransaction,
    transactionCount,
    isLoading,
    formData,
    setFormData,
    handleChange,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;
    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) {
      return;
    }

    sendTransaction();
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Blockchain App!</h1>
      {!currentAccount ? (
        <button onClick={connectWallet}>Connect Wallet!</button>
      ) : (
        "Account Connected => " + currentAccount
      )}

      <br />
      <br />
      <input
        type="text"
        onChange={(e) => handleChange(e, "addressTo")}
        placeholder="Address To"
        className="border"
        name="addressTo"
      />
      <br />
      <input
        type="number"
        step={0.001}
        onChange={(e) => handleChange(e, "amount")}
        placeholder="Amount (ETH)"
        className="border"
        name="amount"
      />
      <br />
      <input
        type="text"
        onChange={(e) => handleChange(e, "keyword")}
        placeholder="Keyword (GIF)"
        className="border"
        name="keyword"
      />
      <br />
      <input
        type="text"
        onChange={(e) => handleChange(e, "message")}
        placeholder="Message"
        className="border"
        name="message"
      />
      <br />
      {isLoading ? (
        "Sending Now ...."
      ) : (
        <button onClick={handleSubmit}>Send Now!</button>
      )}
    </div>
  );
};

export default App;
