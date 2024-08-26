import React, { useEffect, useState } from "react";
import axios from 'axios';

const PizzaList = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9090/api/pizza')
    .then((response) => {
        setPizzas(response.data)
    })
    .catch((err) => console.error(err));
  },[])
  return (
    <div className="pizza-container">
      <h1>피자메뉴</h1>
      <ul>
        {pizzas.map(pizza => (
            <li key={pizza}>
                <div className="pizza-name">{pizza.name}</div>
                <div className="pizza-description">{pizza.description}</div>
                <div className="pizza-price">{pizza.price}</div>
                <button>상세보기</button>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzaList;
