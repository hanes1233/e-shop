
import './App.css';
import Main from './Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './components/authorization/Registration';
import Category from './components/navigation/Category';
import { getAllSections } from './constants/sections';
import ItemsTable from './components/ItemsTable';
import React from 'react';

function App() {

  const sections = getAllSections();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
        <Routes>
          {/* Route for section */}
          {sections.map((section, index) => (
            <Route key={index} path={section.path} element={<Category />} />
          ))}
          {/*Route for categories of each section */}
          {sections.map((section, index) => (
            <React.Fragment key={index}>
              {section.categories.map((category, key) => (
                <Route key={key} path={category.path} element={<ItemsTable />} />
              ))}
            </React.Fragment>
          ))}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
