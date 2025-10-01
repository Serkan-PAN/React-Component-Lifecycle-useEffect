import react, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryList from './CategoryList';
import Product from './Product';

export default function SideBar(props) {
  /* ADIM 4: App component'inden gelen propları burada destruct edelim. aynı isimlerle kullanalım */
  const { category, handleCatChange } = props;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products/categories')
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.warn(err));
  }, []);
  return (
    <>
      <div className="side-container">
        <h2>Categories</h2>
        <CategoryList
          categories={categories}
          category={category}
          handleCatChange={handleCatChange}
        />
      </div>
    </>
  );
}
