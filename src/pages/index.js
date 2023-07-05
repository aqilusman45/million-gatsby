import React from "react";
import { For } from "million/react";
import Accordion from "../components/Accordion";

const index = () => {
  const faqsState = [
    { node: "1" },
    { node: "2" },
    { node: "3" },
    { node: "4" },
    { node: "5" },
  ];
  return (
    <div>
      <For each={faqsState}>{({ node }) => <Accordion text={node} />}</For>
    </div>
  );
};

export default index;
