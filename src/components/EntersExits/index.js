import React from "react";
import "./styles.css";

export default function EntersExits({ transactions }) {
  return (
    <div className="form-info-group-enters-exits">
      {transactions.map((transaction, index) => {
        return (
          <div key={index} className="card">
            <p>Nome: {transaction.name}</p>
            {transaction.quantity > 0 ? (
              <p>Quantidade: {transaction.quantity}</p>
            ) : (
              <p>Quantidade: {transaction.quantity * -1}</p>
            )}
            <p>Valor: R${transaction.price.toFixed(2)}</p>
          </div>
        );
      })}
    </div>
  );
}
