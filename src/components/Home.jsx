import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/53f44f04-f9a1-439e-82bd-1fabea198a2a/court-vision-low-next-nature-shoes-N2fFHb.png";


const Home = () => {
  const productList = [
    {
    name:"MacBook", 
    price:120000,
    imgSrc: img1, 
    id: "Apple laptop"
  },
    {
    name:"Air Jordan", 
    price:12000,
     imgSrc: img2,
      id: "Nike Footwear"
  },
];
const dispatch = useDispatch();

 const addToCartHandler = (options) =>{
  console.log(options)
  toast.success("Added to cart")
  dispatch({ type: "addToCart", payload: options });
  dispatch({ type: "calculatePrice" });
 }
  return (
  <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;