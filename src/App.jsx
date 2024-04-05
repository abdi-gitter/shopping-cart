import { useState } from 'react';
import './App.css';
import Prices from './components/Prices';
import ProductCard from './components/ProductCard';
import data from './data';
import { Row } from 'react-bootstrap';
import FormModal from './components/FormModal';

function App() {
  const [products, setProducts] = useState(data);
  const [search, setSearch] = useState('');

  const updateAmount = (id, num) => {
    const index = products.findIndex((item) => item.id === id);
    let temp = [...products];
    temp[index].amount = temp[index].amount + num;
    if (temp[index].amount === 0) {
      temp = temp.filter((item) => item.id !== id);
      // temp.splice(index, 1);
    }
    setProducts(temp);
  };

  const addProduct = (formData) => {
    setProducts([
      ...products,
      {
        id: Math.ceil(Math.random() * 10000),
        title: formData.title,
        price: +formData.price,
        amount: +formData.amount,
        image: formData.image,
        discountPercentage: Math.ceil(Math.random() * 25),
      },
    ]);
  };

  console.log(products);

  return (
    <>
      <div className="container-fluid">
        <FormModal addProduct={addProduct} />
        <div className="text-center">
          <h1>Shopping Cart</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Row xs={1}>
          {products
            .filter((item) =>
              item.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((item) => (
              <ProductCard
                key={item.id}
                {...item}
                updateAmount={updateAmount}
              />
            ))}
          {/* <ProductCard />
        <ProductCard />
      <ProductCard /> */}
        </Row>
        <Prices products={products} />
      </div>
    </>
  );
}

export default App;
