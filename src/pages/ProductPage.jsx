// import React from "react";

// const products = [
//   {
//     name: "Sauce Labs Backpack",
//     price: "$29.99",
//     image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab61",
//   },
//   {
//     name: "Sauce Labs Bike Light",
//     price: "$9.99",
//     image: "https://images.unsplash.com/photo-1580910051070-c8f6c2fca3f0",
//   },
//   {
//     name: "Sauce Labs Bolt T-Shirt",
//     price: "$15.99",
//     image: "https://images.unsplash.com/photo-1580237817481-3c09257b2ab0",
//   },
//   {
//     name: "Sauce Labs Fleece Jacket",
//     price: "$49.99",
//     image: "https://images.unsplash.com/photo-1612159102920-f60a8e65d3c7",
//   },
//   {
//     name: "Sauce Labs Onesie",
//     price: "$7.99",
//     image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a",
//   },
//   {
//     name: "Sauce Labs Hoodie",
//     price: "$39.99",
//     image: "https://images.unsplash.com/photo-1585386959984-a4155224a1a2",
//   },
// ];

// const ProductPage = () => {
//   return (
//     <div className="container py-4">
//       <h2 className="text-center mb-4">Our Products</h2>
//       <div className="row g-4">
//         {products.map((product, index) => (
//           <div className="col-md-4" key={index}>
//             <div className="card h-100 shadow-sm">
//               <img
//                 src={product.image}
//                 className="card-img-top"
//                 alt={product.name}
//                 style={{ height: "300px", objectFit: "cover" }}
//               />
//               <div className="card-body d-flex flex-column justify-content-between">
//                 <h5 className="card-title">{product.name}</h5>
//                 <p className="card-text">{product.price}</p>
//                 <button className="btn btn-primary mt-auto w-100">Add to Cart</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;
// import React from "react";
// import './ProductPage.css';

// const products = [
//   {
//     id: 1,
//     name: "Classic White T-Shirt",
//     price: "$19.99",
//     image: "https://images.unsplash.com/photo-1585386959984-a4155224a1a1"
//   },
//   {
//     id: 2,
//     name: "Denim Jacket",
//     price: "$59.99",
//     image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
//   },
//   {
//     id: 3,
//     name: "Black Hoodie",
//     price: "$39.99",
//     image: "https://images.unsplash.com/photo-1618354691321-fc3f13a24b43"
//   },
//   {
//     id: 4,
//     name: "Floral Summer Dress",
//     price: "$44.99",
//     image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
//   },
//   {
//     id: 5,
//     name: "Casual Sneakers",
//     price: "$69.99",
//     image: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f"
//   },
//   {
//     id: 6,
//     name: "Chino Pants",
//     price: "$34.99",
//     image: "https://images.unsplash.com/photo-1602810318383-e2d62d83f5af"
//   }
// ];

// function ProductPage() {
//   return (
//     <div className="product-page">
//       <h2>Our Clothing Collection</h2>
//       <div className="product-grid">
//         {products.map(product => (
//           <div key={product.id} className="product-card">
//             <img src={`${product.image}?w=400`} alt={product.name} />
//             <h3>{product.name}</h3>
//             <p>{product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductPage;
import React from 'react';
import './ProductPage.css';

const products = [
    {
      id: 1,
      name: 'Classic White T-Shirt',
      price: 19.99,
      image: 'https://source.unsplash.com/featured/?white,tshirt',
    },
    {
      id: 2,
      name: 'Denim Jacket',
      price: 59.99,
      image: 'https://source.unsplash.com/featured/?denim,jacket',
    },
    {
      id: 3,
      name: 'Black Hoodie',
      price: 39.99,
      image: 'https://source.unsplash.com/featured/?black,hoodie',
    },
    {
      id: 4,
      name: 'Floral Summer Dress',
      price: 44.99,
      image: 'https://source.unsplash.com/featured/?floral,dress',
    },
    {
      id: 5,
      name: 'Casual Sneakers',
      price: 69.99,
      image: 'https://source.unsplash.com/featured/?casual,sneakers',
    },
    {
      id: 6,
      name: 'Chino Pants',
      price: 34.99,
      image: 'https://source.unsplash.com/featured/?chino,pants',
    },
  ];
  

const ProductList = () => {
  return (
    <div className="product-container">
      <h2 className="product-title">Our Clothing Collection</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
