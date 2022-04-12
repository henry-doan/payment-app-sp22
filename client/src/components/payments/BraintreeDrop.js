import { useState, useEffect } from 'react';
import { Container, Spinner, Button } from 'react-bootstrap';
import braintree from 'braintree-web-drop-in';
import BraintreeDropin from 'braintree-dropin-react';
import BraintreeSubmitButton from './BraintreeSubmitButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BraintreeDrop = ({ amount }) => {
  const [loaded, setLoad] = useState(false)
  const [token, setToken] = useState('')

  const navigate = useNavigate()

  useEffect( () => {
    axios.get('/api/braintree_token')
      .then( res => {
        const { data: token } = res 
        setToken(token)
        setLoad(true)
      })
      .catch( err => {
        console.log('Error Setting up Payment. Try again!')
      })
  }, [])

  const handlePaymentMethod = (payload) => {
    axios.post('/api/payment', { amount, ...payload })
      .then( res => {
        const { data: transactionId } = res 
        navigate('/payment_success', { state: { amount, transactionId } } )
      })
      .catch( err => {
        console.log('Error Setting up Payment. Try again!')
      })
  }

  return (
    <>
      { loaded ?
        <Container>
          <BraintreeDropin
            braintree={braintree}
            authorizationToken={token}
            handlePaymentMethod={handlePaymentMethod}
            renderSubmitButton={BraintreeSubmitButton}
          />
        </Container>
        :
        <Container>
          <Button
            variant='primary'
            disabled
          >
            <Spinner
              as='span'
              animation="grow"
              size='sm'
              role='status'
              aria-hidden='true'
            />
              Payment Experience. Please Wait...
          </Button>
        </Container>
      }
    </>
  )
}

export default BraintreeDrop;