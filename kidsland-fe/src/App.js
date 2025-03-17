
import './App.css';
import Main from './Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './components/authorization/Registration';
import Category from './components/navigation/Category';

function App() {

  const categories = ['/toys', '/dress', '/shoes', '/accessories', '/furniture', '/baby', '/sport'];

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/registration" element={<Registration />} />
          {categories.map((category, index) => {
            return <Route key={index} path={category} element={<Category />} />
          })}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
