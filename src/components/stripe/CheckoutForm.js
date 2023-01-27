
import React, { useEffect, useState } from 'react';
import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Button, TextField, Stack } from '@mui/material';
import isEmail from 'validator/lib/isEmail';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
// utils
// import axios from '../../utils/axios';
// components
import { MotionViewport, varFade } from '../animate';

const StyledButton = styled(Button)`
  color: #fff;
  padding: 6px 12px;
  &:hover {
    background-color:#e50000;
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
  }
  &:focus {
    background-color:#e50000;
  }
`;

export default function CheckoutForm(param) {
  const [email, setEmail] = useState('');
  // const [locAmount, setLocAmount] = useState(param.payamount);
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  // const myurl = param.paymentname == 'Schedule Call' ? 'payshedulecall' : 'paypermanentresidency'
  // const stripe_intent_api = () => {
  //   axios.post('/api/create-payment-intent',{
  //     amount: locAmount,
  //     payment_intent_id: param.paymentIntent,
  //   }).then((response)=>{
  //     console.log(response.data.id);
  //   });
  // }
  useEffect(() => {
      if (!stripe) {
          return;
      }

      //Grab the client secret from url params
      const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
      );
      if (!clientSecret) {
        return;
      }

      stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
        switch (paymentIntent.status) {
          case 'succeeded':
          setMessage('Payment succeeded!');
          break;
          case 'processing':
          setMessage('Your payment is processing.');
          break;
          case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.');
          break;
          default:
          setMessage('Something went wrong.');
          break;
        }
        setEmail(paymentIntent.receipt_email);
      });
  }, [stripe]);

  // const handleAmount = async (val) => {
  //   setLocAmount(val);
  //   stripe_intent_api();
  // };
  const changeEmail = async (val) => {
    setEmail(val);
    if(isEmail(val)){
      setEmailError(false);
    }
    else{
      setEmailError(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(emailError){
      return;
    }

    if (!stripe || !elements) {
      console.log('not loaded');
      // Stripe.js has not yet loaded.
      return;
    }

    setIsLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: location.href,
        receipt_email: email,
        // confirm: true,
        // shipping: {
        //   address: { city: 'NY' },
        //   name: 'Shipping user',
        // },
        payment_method_data: {
          billing_details: {
            name: 'ImmigrateCanada',
          },
        },
      },
    });

    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
    } else {
      setMessage('An unexpected error occured.');
    }

    setIsLoading(false);
  };
  const paymentElementOptions = {
    layout: "tabs"
  }
  return (
      <form id="payment-form" onSubmit={handleSubmit} className="m-auto">
        <Stack component={MotionViewport}  spacing={3}>
            <m.div variants={varFade().inUp} style={{width:'100%',height:'56',padding:'15px',fontSize:'1em',fontWeight:'900'}}>
              {param.paymentname} : ${param.payamount}
              {/* <TextField fullWidth label="Schedule Payment" value={locAmount} disabled={true} /> */}
            </m.div>
            <m.div variants={varFade().inUp}>
              <TextField fullWidth label="Email address" value={email}
                onChange={(e) => changeEmail(e.target.value)}
                error={!!emailError}
                helperText={emailError ? 'Email must be a valid email address' : ''}
               />
            </m.div>

            <PaymentElement id="payment-element" options={paymentElementOptions} />
            <m.div variants={varFade().inUp}>
                <StyledButton onClick={handleSubmit} fullWidth size="large" variant="contained" disabled={isLoading || !stripe || !elements}>
                    {isLoading ? (
                        'Loading...'
                    ) : (
                        'Pay now'
                    )}
                </StyledButton>
            </m.div>
        </Stack>
        
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
  );
}
