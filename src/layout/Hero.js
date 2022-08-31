import React from "react";
import Button from "../components/Button";

function Hero() {
  return (
    <section id="hero">
      {/*flex Container*/}
      <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
        {/*Left item*/}
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center text-brightBlueLight md:text-5xl md:text-left">
            Bring everyone together to build better products
          </h1>
          <p className="max-w-sm text-center text-brightBlueSupLight md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button className="hidden p-3 px-6 bg-primaryColor hover:bg-PrimaryColorLight" />
          </div>
        </div>
        {/*Images */}
        <div class="md:w-1/2">
          <img src={require("../assets/images/Programming.png")} alt="alpha" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
