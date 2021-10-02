import React from "react";
import "./styles.css";

export default function Card({ transactions }) {
  return (
    <div className="form-info-group">
      {transactions.map((transaction, index) => {
        return (
          <div key={index} className="card">
            <p>{transaction.name}</p>
            <p>R$ {transaction.quantity}</p>
            <p>R$ {transaction.price.toFixed(2)}</p>
          </div>
        );
      })}
    </div>
  );
}
