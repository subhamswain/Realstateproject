// Value.jsx
import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from '../../utils/accordion';
import './Value.css';

const CustomAccordionItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <AccordionItem className={`accordionItem ${expanded ? 'expanded' : 'collapsed'}`} uuid={item.id}>
      <AccordionItemHeading>
        <AccordionItemButton className='flexCenter accordionButton' onClick={toggleAccordion}>
          <div className='flexCenter icon'>{item.icon}</div>
          <span className='primaryText'>{item.heading}</span>
          <div className='flexCenter icon'>
            <MdOutlineArrowDropDown size={20} />
          </div>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <p className='secondaryText'>{item.detail}</p>
      </AccordionItemPanel>
    </AccordionItem>
  );
};

const Value = () => {
    return (
      <section className='v-wrapper'>
      <div className='paddings innerWidth flexCenter v-container'>
        <div className='v-left'>
          <div className='image-container'>
            <img src="./value.png" alt="" />
          </div>
        </div>
        <div className='flexColStart v-right'>
          <span className='orangeText'>Our Value</span>
          <span className='primaryText'>Value we give to you</span>
          <span className='secondaryText'>We are always ready to help by providing the best services for you.<br/>
            We believe a good place to live can make our life better.
          </span>
          <Accordion className='accordion' allowMultipleExpanded={false} preExpanded={[0]}>
        {data.map((item) => <CustomAccordionItem key={item.id} item={item} />)}
      </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Value;
