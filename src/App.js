import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Enters from "./components/Enters";
import Exits from "./components/Exits";
import iconSale from "./images/salew.svg";

function App() {
  const [transactions, setTransactions] = useState([
    { name: "banana", quantity: 100, price: 5 },
    { name: "morango", quantity: -10, price: 2 },
    { name: "laranja", quantity: 50, price: 6 },
  ]);

  const [sale, setSale] = useState([]);
  const [saleOk, setSaleOk] = useState(false);
  const [saleTotal, setSaleTotal] = useState(0);
  const [discTotal, setDiscTotal] = useState(0);

  const [prodCode, setProdrCode] = useState("");
  const [prodName, setProdName] = useState("");
  const [prodDescrip, setProdDescrip] = useState("");
  const [prodPrice, setProdPrice] = useState("");
  const [prodDiscount, setProdDiscount] = useState("");

  function totalSale(product) {
    const reducer = (cartTotal, currentValue) => cartTotal + currentValue;
    setSaleTotal(sale.map((sale) => sale.price).reduce(reducer, product));
  }

  function totalDiscSale(product) {
    const reducer = (cartTotal, currentValue) => cartTotal + currentValue;
    setDiscTotal(sale.map((sale) => sale.discount).reduce(reducer, product));
  }

  function remSale(id) {
    const arrayProductDeleted = sale.filter((product) => product.code !== id);
    const removedItem = sale.find((sale) => sale.code === id);
    setSale([...arrayProductDeleted]);

    totalSale(-removedItem.price);
    totalDiscSale(-removedItem.discount);
  }

  function addProd(e) {
    e.preventDefault();
    setTransactions([
      ...transactions,
      {
        name: prodName,
        price: parseFloat(prodPrice),
        quantity: parseInt(prodDiscount),
      },
    ]);
  }

  function remProds(id) {
    const arrayProductDeleted = transactions.filter(
      (product) => product.code !== id
    );
    setTransactions([...arrayProductDeleted]);

    const productInSale = sale.find((sale) => sale.code === id);
    if (productInSale) {
      remSale(id);
    }
  }

  function hiddenSale() {
    if (saleOk === false) {
      setSaleOk(true);
    } else if (saleOk === true) {
      setSaleOk(false);
    }
  }

  return (
    <div className="App">
      <div className="App-content">
        <h1>Controle de Transações</h1>
        <div className="App-form-sale">
          <form className="App-header" onSubmit={addProd}>
            <h6>Adicionar novos produtos</h6>
            <Input
              required={true}
              value={prodCode}
              type="number"
              onChange={(e) => setProdrCode(e.target.value)}
              placeholder="Código"
            />
            <Input
              required={true}
              value={prodName}
              onChange={(e) => setProdName(e.target.value)}
              placeholder="Nome"
            />
            <Input
              required={true}
              value={prodDescrip}
              onChange={(e) => setProdDescrip(e.target.value)}
              placeholder="Descrição"
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
              value={prodDiscount}
              type="number"
              onChange={(e) => setProdDiscount(e.target.value)}
              placeholder="Desconto"
              min="0"
            />
            <div className="form-group-submitSale">
              <Button type="submit">Adicionar</Button>
              {sale.length > 0 && (
                <>
                  <img
                    onClick={() => hiddenSale()}
                    className="iconSale"
                    src={iconSale}
                    alt="Sale"
                  />
                  <span
                    onClick={() => hiddenSale()}
                    className="count-sale-prods"
                  >
                    {sale.length}
                  </span>
                </>
              )}
            </div>
          </form>
        </div>
        {transactions.length > 0 && (
          <div>
            <h6>Produtos</h6>
            <Enters transactions={transactions} />
            <Exits transactions={transactions} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
