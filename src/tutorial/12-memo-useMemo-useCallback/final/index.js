import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useFetch } from '../../9-custom-hooks/final/2-useFetch';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products';

// every time props or state changes, component re-renders
const calculateMostExpensive = (data) => {
  console.log('hello');

  return (
    data.reduce((total, item) => {
      return item.fields.price > total ? item.fields.price : total;
    }, 0) / 100
  );
};

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const addToCart = useCallback(() => {
    setCart(cart + 1);
    console.log(`this is a cart: ${cart}`);
  }, [cart]);
  //NOTE: 3. here we are using useCallback hook for a regular function, it checkes if the (dependency array) has changed or not. If it hasn't changed then it will not be rerendered
  //NOTE: 4. cart here is dependency array. ANd that means that the function will be recreated only if we update the cart value. If we leave it empty then the function will never be recreated. If we skip the dependency array then it will work in the same way as without useCallback hook (always recreates)

  const mostExpensive = useMemo(
    () => calculateMostExpensive(products),
    [products]
  );
  //NOTE: 5.useMemo deals with a value. so the value will be recalculated only if products have changed
  //NOTE:6 React.memo is for props of function, useMemo is for values

  return (
    <>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{ marginTop: '3rem' }}>cart: {cart}</h1>
      <h1>Most expensive ${mostExpensive}</h1>
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

const BigList = React.memo(({ products, addToCart }) => {
  //NOTE: 1. memo is memorising the props of components, if it is doesn't change then the component doesn't rerender even though we use useState that causes the rerender

  //NOTE: 2. every time we click the counter the page rerenders and AddtoCart function is recreating from the scratch, and that react thinks that it has changed. And being a parameter of BigList with React.memo it causes rerendereing of this componenet
  useEffect(() => {
    console.count('big list called');
  });
  return (
    <section className="products">
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        );
      })}
    </section>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
  useEffect(() => {
    console.count('single item called');
  });
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>Add to cart!</button>
    </article>
  );
};
export default Index;
