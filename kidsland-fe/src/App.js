
import './App.css';
import Main from './Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './components/authorization/Registration';
import Category from './components/navigation/Category';
import ItemsTable from './components/ItemsTable';
import React, { useEffect, useState } from 'react';
import { apiGet } from './utils/api';
import LoadingPage from './components/design/LoadingPage';
import Logo from './components/design/Logo';
import NoData from './components/design/NoData';

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
          <Route path="/" element={<Main categories={categories} />} />
          <Route path="/registration" element={<Registration />} />
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
                  <Route key={key} path={category.url + '/' + subcategory.url} element={<ItemsTable url={`${category.url}/${subcategory.url}`}/>} />
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
