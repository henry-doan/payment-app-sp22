import { Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const PaymentSuccess = () => {
  const { state } = useLocation()
  const { amount, transactionId } = state 
  return(
    <Container className='text-center'>
      <h1>Thank you for your Purchase!</h1>
      <p>
        You have been successfully charged: { amount }
      </p>
      <p>
        Your transaction id is: { transactionId } Keep for you records
      </p>
      <Link to='/'>Go back home</Link>
    </Container>
  )
}

export default PaymentSuccess;