
import './App.css';
import Main from './Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './components/auth/Registration';
import Category from './components/navigation/Category';
import ItemsTable from './components/shop/ItemsTable';
import React, { useEffect, useState } from 'react';
import { apiGet } from './utils/api';
import LoadingPage from './components/design/UIStates/LoadingPage';
import NoData from './components/design/UIStates/NoData';
import Cart from './components/shop/Cart';

function App() {
  const [categories, setCategories] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    if (!isLoaded) {

      apiGet("/api/v1/categories").then((data) => {
        if (data != null) {
          setCategories(data.categories)
          setIsLoaded(true);
        } else {
          setCategories(null);
          const refreshInterval = setInterval(() => {
            if (!categories && !isRefreshing) {
              setIsRefreshing(true);
              window.location.reload();
            }
          }, 5000);

          return () => clearInterval(refreshInterval);
        }
      });
    }
  }, [categories, isRefreshing, isLoaded]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main categories={categories} />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        {!categories ? <LoadingPage />
          : <Routes>
            {/* Route for section */}
            {categories.map((category, index) => (
              <Route key={index} path={category.url} element={<Category category={category} />} />
            ))}
            {/*Route for categories of each section */}
            {categories.map((category, index) => (
              <React.Fragment key={index}>
                {category.subcategories.map((subcategory, key) => (
                  <Route key={key} path={category.url + '/' + subcategory.url} element={<ItemsTable url={`${category.url}/${subcategory.url}`} />} />
                ))}
              </React.Fragment>
            ))}
            <Route path='/notfound' element={<NoData />} />
          </Routes>
        }
      </BrowserRouter>
    </>
  )
}

export default App;
