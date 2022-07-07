import React, {useState, useEffect} from 'react';
import SearchBar from './component/SearchBar'
import './App.css';

function App() {

  const [productState, setProductState] = useState([]);

  useEffect(() => {

    fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
              const newProductState = json.map((product) => {
                  return product.title
              })
            setProductState(newProductState)
            })


  }, [])

  const hasProducts = productState.length > 0

  return (

    <div>
          {hasProducts ? <SearchBar Item={productState} /> : "Loading"}
    </div>
  );
}

export default App;
