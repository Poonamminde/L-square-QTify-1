import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./faqs.css";

const SimpleAccordion = () => {
  return (
    <div className="faqs-container">
      <h1 className="faqs-heading">FAQs</h1>
      <Accordion
        className="accordion-item"
        style={{
          backgroundColor: "#121212",
          color: "#ffffff",
          border: "1px solid #ffffff",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#34c94b" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion Item 1</Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{ backgroundColor: "#ffffff", color: "#121212" }}
        >
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="accordion-item"
        style={{
          backgroundColor: "#121212",
          color: "#ffffff",
          border: "1px solid #ffffff",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#34c94b" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion Item 1</Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{ backgroundColor: "#ffffff", color: "#121212" }}
        >
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="accordion-item"
        style={{
          backgroundColor: "#121212",
          color: "#ffffff",
          border: "1px solid #ffffff",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#34c94b" }} />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Accordion Item 1</Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{ backgroundColor: "#ffffff", color: "#121212" }}
        >
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SimpleAccordion;
