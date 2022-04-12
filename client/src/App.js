import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import PaymentSuccess from './components/payments/PaymentSuccess';

const App = () => (
  <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/payment_success' element={<PaymentSuccess />} />
    </Routes>
  </>
)

export default App;