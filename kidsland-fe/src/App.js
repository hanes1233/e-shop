
import './App.css';
import Main from './Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './components/authorization/Registration';
import Category from './components/navigation/Category';
import ItemsTable from './components/ItemsTable';
import React, { useEffect, useState } from 'react';
import { apiGet } from './utils/api';
import LoadingPage from './components/design/LoadingPage';

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    apiGet("/api/v1/categories").then((data) => {
      if (data != null) {
        setCategories(data.categories)
      } else {
        setCategories(null);
      }
    });
  }, []);

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
                  <Route key={key} path={category.url + subcategory.url} element={<ItemsTable />} />
                ))}
              </React.Fragment>
            ))}
          </Routes>
        }

      </BrowserRouter>
    </>
  )
}

export default App;
