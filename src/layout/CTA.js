import React from "react";
import Button from "../components/Button";

function CTA() {
  return (
    <section id="cta" className="bg-primaryColor">
      {/* Flex Container */}
      <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-25 md:flex-row md:space-y-0">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-center text-white md:text-4xl md:max-w-xl md:text-left">
          Simplify how your team works today
        </h2>
        {/* Button */}
        <Button className="hidden p-3 px-6 bg-white text-primaryColor hover:bg-PrimaryColorLight hover:text-white" />
      </div>
    </section>
  );
}

export default CTA;
