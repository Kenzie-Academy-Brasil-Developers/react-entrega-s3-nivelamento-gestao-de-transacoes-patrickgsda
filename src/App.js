import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Enters from "./components/Enters";
import Exits from "./components/Exits";
import EntersExits from "./components/EntersExits";

function App() {
  const [transactions, setTransactions] = useState([
    { name: "banana", quantity: 100, price: 5 },
    { name: "morango", quantity: -10, price: 2 },
    { name: "laranja", quantity: 50, price: 6 },
  ]);

  const [isEnter, setIsEnter] = useState(false);

  const [prodName, setProdName] = useState("");
  const [prodPrice, setProdPrice] = useState("");
  const [prodQuant, setProdQuant] = useState("");

  const reducer = (Total, currentValue) => Total + currentValue;

  function addProd(e) {
    e.preventDefault();
    setTransactions([
      ...transactions,
      {
        name: prodName,
        price: parseFloat(prodPrice),
        quantity: parseInt(prodQuant),
      },
    ]);
  }

  function hidden() {
    if (isEnter === false) {
      setIsEnter(true);
    } else if (isEnter === true) {
      setIsEnter(false);
    }
  }

  return (
    <div className="App">
      <div className="App-content">
        <h1>Controle de Transações</h1>
        <div className="App-form-sale">
          {isEnter === true ? (
            <form className="App-header" onSubmit={addProd}>
              <h6>Adicionar entradas</h6>
              <Input
                required={true}
                value={prodName}
                onChange={(e) => setProdName(e.target.value)}
                placeholder="Nome"
              />
              <Input
                required={true}
                value={prodPrice}
                type="number"
                onChange={(e) => setProdPrice(e.target.value)}
                placeholder="Preço"
                min="0"
              />
              <Input
                required={true}
                value={prodQuant}
                type="number"
                onChange={(e) => setProdQuant(e.target.value)}
                placeholder="Quantidade"
                min="1"
              />
              <div className="form-group-submitSale">
                <Button type="submit">Adicionar</Button>
                {isEnter === true ? (
                  <Button type="button" onClick={() => hidden()}>
                    Saídas
                  </Button>
                ) : (
                  <Button type="button" onClick={() => hidden()}>
                    Entradas
                  </Button>
                )}
              </div>
            </form>
          ) : (
            <form className="App-header" onSubmit={addProd}>
              <h6>Adicionar saidas</h6>
              <Input
                required={true}
                value={prodName}
                onChange={(e) => setProdName(e.target.value)}
                placeholder="Nome"
              />
              <Input
                required={true}
                value={prodPrice}
                type="number"
                onChange={(e) => setProdPrice(e.target.value)}
                placeholder="Preço"
                min="0"
              />
              <Input
                required={true}
                value={prodQuant}
                type="number"
                onChange={(e) => setProdQuant(e.target.value)}
                placeholder="Quantidade"
                max="-1"
              />
              <div className="form-group-submitSale">
                <Button type="submit">Adicionar</Button>
                {isEnter === true ? (
                  <Button type="button" onClick={() => hidden()}>
                    Saídas
                  </Button>
                ) : (
                  <Button type="button" onClick={() => hidden()}>
                    Entradas
                  </Button>
                )}
              </div>
            </form>
          )}
        </div>
        {transactions.length > 0 && (
          <div className="group-products">
            {isEnter === true ? (
              <div>
                <Enters transactions={transactions} />
                <p>
                  Quantidade total de frutas:{" "}
                  {transactions
                    .map((transaction) => {
                      if (transaction.quantity > 0) {
                        return transaction.quantity;
                      }
                      return 0;
                    })
                    .reduce(reducer, 0)}
                </p>
                <p>
                  Valor total: R$
                  {transactions
                    .map((transaction) => {
                      if (transaction.quantity > 0) {
                        return transaction.price;
                      }
                      return 0;
                    })
                    .reduce(reducer, 0)}
                </p>
              </div>
            ) : (
              <div>
                <Exits transactions={transactions} />
                <p>
                  Quantidade total de frutas:{" "}
                  {transactions
                    .map((transaction) => {
                      if (transaction.quantity < 0) {
                        return transaction.quantity * -1;
                      }
                      return 0;
                    })
                    .reduce(reducer, 0)}
                </p>
                <p>
                  Valor total: R$
                  {transactions
                    .map((transaction) => {
                      if (transaction.quantity < 0) {
                        return transaction.price;
                      }
                      return 0;
                    })
                    .reduce(reducer, 0)}
                </p>
              </div>
            )}
          </div>
        )}
        <h6>Todas as Movimentações</h6>
        <EntersExits transactions={transactions} />
      </div>
    </div>
  );
}

export default App;
