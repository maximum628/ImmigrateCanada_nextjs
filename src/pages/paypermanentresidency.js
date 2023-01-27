import { useState,useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { m } from 'framer-motion';
// next
// import { useRouter } from 'next/router';
// @mui
import { styled,useTheme } from '@mui/material/styles';
import { Grid,Card,CardContent } from '@mui/material';
// utils
import axios from '../utils/axios';
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
import { MotionViewport,varFade } from '../components/animate';
import {CheckoutForm} from '../components/stripe';

// ----------------------------------------------------------------------

const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const RootStyle = styled('div')(({ theme }) => ({
  backgroundImage:'url(/assets/images/payment/Business-Wave-PPT-Backgrounds.jpg)',
  backgroundSize:'100% 100%',
  paddingTop: theme.spacing(6),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(6),
  },
}));

// ----------------------------------------------------------------------

StripePayment.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function StripePayment() {
  const theme = useTheme();
  const [clientSecret, setClientSecret] = useState('');
  const [paymentIntent, setPaymentIntent] = useState('');
  const stripe_intent_api = () => {
    axios.post('/api/create-payment-intent',{
      amount: 3999.99,
      description: 'Permanent Residency',
      payment_intent_id: '',
    }).then((response)=>{
      setClientSecret(response.data.client_secret);
      setPaymentIntent(response.data.id);

    });
  }
  
  useEffect(() => {
    stripe_intent_api();
  }, []);
  const appearance = {
    theme: 'stripe',
    labels: 'floating',
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
    <Page title="Payment">
      <RootStyle>
        <Grid container component={MotionViewport} spacing={0}>
          <Grid item xs={12} md={12} lg={12} sx={{padding:theme.spacing(2)}}>
            <m.div variants={varFade().inLeft}>
              <Card dir="ltr" sx={{ width:'350px',margin:'0px auto' }}>
                {/* <CardHeader title="Booking" /> */}
                <CardContent>
                  {clientSecret && (
                    <Elements options={options} stripe={stripe}>
                      <CheckoutForm paymentIntent={paymentIntent} paymentname='Permanent Residency' payamount={3999.99} />
                    </Elements>
                  )}
                </CardContent>
              </Card>
            </m.div>
          </Grid>
        </Grid>
      </RootStyle>
    </Page>
  );
}
