import { m } from 'framer-motion';
// @mui
import { Container,Grid,Accordion, Typography, AccordionSummary, AccordionDetails } from '@mui/material';
// components
import Iconify from '../../components/Iconify';
import { varFade } from '../../components/animate';

// ----------------------------------------------------------------------
const QA_List = [
  {
    id: "QA_1",
    value: `panel1`,
    heading: `WHAT IS A CANADA PR (PERMANENT RESIDENCE) VISA?`,
    detail: 'Canada Permanent Residence Visa – Permanent Residency is a visa which allows staying indefinitely by availing all social benefits in a Country of which he/she is not a citizen. Person who is staying in work or student visa cannot be considered as Permanent Resident. When you are a Permanent Resident, you can live outside of the Country but must meet certain residency obligations to maintain your status. People who are granted Permanent Residency in a Country are usually issued Permanent Resident card as an official proof of Permanent Resident status.'
  },
  {
    id: "QA_2",
    value: `panel2`,
    heading: `AN INSIGHT INTO THE CANADA PERMANENT RESIDENT VISA PROCESS`,
    detail: 'Canada has today become the most ideal country to reside and work in. Every year, around 500,000 people migrate to this nation with a permanent residency status. If you also wish to make a new start in Canada, then you will have to attain the Permanent Resident (PR) visa. One can apply for Canada PR visa through various Immigration consultant programs including Spousal PR Sponsorship, Express Entry, Provincial Nominee Program or PNP, Family Sponsorship etc. All these programs have their own guidelines and procedures, which you must strictly follow. However due to our network connections and unique access to resources, your chances of an approved application is extremely high as no other competitor in our industry has access to the resources and network of individuals that we have!'
  },
  {
    id: "QA_3",
    value: `panel3`,
    heading: `WHAT DOES  A CANADAIAN PR BENEFITS OFFER?`,
    detail: "-Social benefits that Canadian citizens receive, including health care coverage -Own property -Live & Study anywhere in Canada     -Main and Spouse dependent get the access to work in any profile    -Apply for Canadian Citizenship    -Get protection under Canadian law and the Canadian Charter of Rights and Freedoms    -Can move freely from province to province    -Free education for all children under 18 years in the Canadian public school system    -Sponsor eligible family members"
  },
]
export default function FaqsList() {
  return (
    <Container sx={{ pt: 1 }}>
      <Grid item md={12}>
        <m.div style={{position:'relative',margin:'auto',width:'fit-content'}}>
          <h1 className="gold-text" data-text="CANADA IMMIGRATION FAQ">
            <span className="gold-text__highlight" data-text="CANADA IMMIGRATION FAQ">CANADA IMMIGRATION FAQ</span>
          </h1>
        </m.div>
        <m.div animate="visible" variants={varFade().in}>
          <Typography variant="h4" sx={{color:"#d2d2d2",textAlign:'center'}}>
          Are you considering moving to Canada but don’t know how to begin.
          </Typography>
        </m.div>
      </Grid>
      <Grid item md={12}>
        <Accordion key='QA_1'>
          <AccordionSummary
            expandIcon={<Iconify icon={'eva:arrow-ios-downward-fill'} width={20} height={20} />}
          >
            <Typography variant="subtitle1">WHAT IS A CANADA PR (PERMANENT RESIDENCE) VISA?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Canada Permanent Residence Visa – Permanent Residency is a visa which allows staying indefinitely by availing all social benefits in a Country of which he/she is not a citizen.<br/>
              Person who is staying in work or student visa cannot be considered as Permanent Resident.<br/>
              When you are a Permanent Resident, you can live outside of the Country but must meet certain residency obligations to maintain your status.<br/>
              People who are granted Permanent Residency in a Country are usually issued Permanent Resident card as an official proof of Permanent Resident status.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion key='QA_2'>
          <AccordionSummary
            expandIcon={<Iconify icon={'eva:arrow-ios-downward-fill'} width={20} height={20} />}
          >
            <Typography variant="subtitle1">AN INSIGHT INTO THE CANADA PERMANENT RESIDENT VISA PROCESS</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Canada has today become the most ideal country to reside and work in. Every year, around 500,000 people migrate to this nation with a permanent residency status.<br/>
              If you also wish to make a new start in Canada, then you will have to attain the Permanent Resident (PR) visa.<br/>
              One can apply for Canada PR visa through various Immigration consultant programs including Spousal PR Sponsorship, Express Entry, Provincial Nominee Program or PNP, Family Sponsorship etc.<br/>
              All these programs have their own guidelines and procedures, which you must strictly follow.<br/>
              However due to our network connections and unique access to resources, your chances of an approved application is extremely high as no other competitor in our industry has access to the resources and network of individuals that we have!</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion key='QA_3'>
          <AccordionSummary
            expandIcon={<Iconify icon={'eva:arrow-ios-downward-fill'} width={20} height={20} />}
          >
            <Typography variant="subtitle1">WHAT DOES  A CANADAIAN PR BENEFITS OFFER?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            -Social benefits that Canadian citizens receive, including health care coverage<br/>
            -Own property<br/>
            -Live & Study anywhere in Canada<br/>
            -Main and Spouse dependent get the access to work in any profile<br/>
            -Apply for Canadian Citizenship<br/>
            -Get protection under Canadian law and the Canadian Charter of Rights and Freedoms<br/>
            -Can move freely from province to province<br/>
            -Free education for all children under 18 years in the Canadian public school system<br/>
            -Sponsor eligible family members
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Container>
  );
}
