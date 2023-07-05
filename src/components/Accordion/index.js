import React from 'react';
import { block } from "million/react";


const AccordionBlock =  ({text}) => {
  return (
    <div>{text}</div>
  )
}

const Accordion = block(AccordionBlock)



export default Accordion