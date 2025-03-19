import { useState } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import './App.css'

function App() {
  const [products] = useState([
    {
      id: 1,
      name: "Web Development Package",
      price: "800-4000",
      description:
        "Price range depends on business needs. All packages include: a custom website, domain, hosting, and SEO optimization.",
    },
    {
      id: 2,
      name: "Mobile App Development",
      price: "1000-5000",
      description:
        "Price range depends on business needs. All packages include: Conceptualization and design, development, testing, and deployment.",
    },
    {
      id: 3,
      name: "Digital Marketing",
      price: "500-2000",
      description:
        "Price range depends on business needs. All packages include: SEO, Social Media Management, and Email Marketing.",
    },
    {
      id: 4,
      name: "Cloud Services",
      price: "500-2000",
      description:
        "Price range depends on business needs. All packages include: Cloud Migration, Cloud Security, Data Storage, Virtualization, and Cloud Monitoring.",
    },
  ]);

  const [productName, setProductName] = useState("");

  return (
    <div>
      <ProductList allProducts={products} />

      <ProductForm
        newProductName={productName}
        newSetProductName={setProductName}
      />
    </div>
  );
}

export default App;
