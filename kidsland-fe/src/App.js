
import './App.css';
import Main from './Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './components/authorization/Registration';
import Category from './components/navigation/Category';
import { getAllSections } from './constants/sections';
import ItemsTable from './components/ItemsTable';

function App() {

  const categories = ['/toys', '/dress', '/shoes', '/accessories', '/furniture', '/baby', '/sport'];
  const sections = getAllSections();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/registration" element={<Registration />} />
          {/* {categories.map((category, index) => {
            return <Route key={index} path={category} element={<Category />} />
          })} */}
          {sections.map((section, index) => {
            return <Route key={index} path={section.path} element={<Category />} >
              {section.categories.map((category, key) => {
                return <Route key={key} path={category.path} element={<ItemsTable />} />
              })}
            </Route>
          })}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
