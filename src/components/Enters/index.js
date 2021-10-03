import React from "react";
import "./styles.css";

export default function Card({ transactions }) {
  return (
    <>
      <h6>Entradas</h6>
      <div className="form-info-group-enters">
        {transactions.map((transaction, index) => {
          return (
            <div>
              {transaction.quantity > 0 && (
                <div key={index} className="card">
                  <p>Nome: {transaction.name}</p>
                  <p>Quantidade: {transaction.quantity}</p>
                  <p>Valor: R${transaction.price.toFixed(2)}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
