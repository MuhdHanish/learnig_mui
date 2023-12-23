import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export const MUIAccordian = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(
          _event: React.SyntheticEvent<Element, Event>,
          isExpanded: boolean
        ) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordian 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat unde
            quisquam ipsum adipisci numquam culpa, fugit sed molestias voluptate
            dolor cum? Quasi aut dolorem voluptates sunt laboriosam quaerat
            sequi cupiditate.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(
          _event: React.SyntheticEvent<Element, Event>,
          isExpanded: boolean
        ) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordian 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat unde
            quisquam ipsum adipisci numquam culpa, fugit sed molestias voluptate
            dolor cum? Quasi aut dolorem voluptates sunt laboriosam quaerat
            sequi cupiditate.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(
          _event: React.SyntheticEvent<Element, Event>,
          isExpanded: boolean
        ) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordian 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat unde
            quisquam ipsum adipisci numquam culpa, fugit sed molestias voluptate
            dolor cum? Quasi aut dolorem voluptates sunt laboriosam quaerat
            sequi cupiditate.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
