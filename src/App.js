import {Routes,Route} from 'react-router-dom';
import About from './Components/About';
import { AuthProvider } from './Components/Auth';
import { FeaturedProducts } from './Components/FeaturedProducts';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import { NewProducts } from './Components/NewProducts';
import NoMatch from './Components/NoMatch';
import OrderSummary from './Components/OrderSummary';
import { Products } from './Components/Products';
import { Profile } from './Components/Profie';
import RequireAuth from './Components/RequireAuth';
import { UserDetails } from './Components/UserDetails';
import { Users } from './Components/Users';
import Warning from './Components/Warning';

function App() {
  return (
    <>
    <AuthProvider>
    <Navbar />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path="/Order-Summary" element={<OrderSummary />} />
    <Route path="products" element={<Products />}>
      <Route path="featured" element={<FeaturedProducts />} />
      <Route path="new" element={<NewProducts />} />
    </Route>
    <Route path='users' element={<Users />} >
        <Route path=':userId' element={<UserDetails />} />
    </Route>
    <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>} />
    <Route path='*' element={<NoMatch />} />
    <Route path='login' element={<Login />} />
    <Route path='warning' element={<Warning />} />
   </Routes>
   </AuthProvider>

   </>
  );
}

export default App;
