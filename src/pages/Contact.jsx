import React from "react";
import contact from "../assets/contact.gif";

export const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center max-w-7xl p-2">
      <p className="animate-marquee text-orange font-bold text-7xl p-12">
        LET'S WORK TOGETHER
      </p>
      <img src={contact} className="py-2 h-96"></img>
      <p>alisiraj.fachreza@gmail.com</p>
    </div>
  );
};
