import React from "react";
import reza from "../assets/reza.png";

export const About = () => {
  return (
    <div className="flex flex-col max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mx-auto p-12 max-w-7xl">
        <img src={reza} className="h-auto w-96 rounded-xl"></img>

        <div className="lg:w-1/2">
          <p className="text-3xl lg:text-4xl text-orange font-bold py-4">
            Konnichiwa, fellow designers!
          </p>
          <p className="text-xl font-semibold py-4">
            I'm a UX designer based in Jakarta, Indonesia. I'm into sports,
            reading books, and playing games.
          </p>
          <span>
            As a designer, I'm deeply interested in creating apps that have a
            <span className="text-hijau px-1 font-semibold">
              positive impact on users
            </span>
            I also enjoy
            <span className="text-orange px-1 font-semibold">
              understanding users' feelings, what they go through when using an
              application, and ensuring they have an even better experience.
            </span>
          </span>
        </div>
      </div>
      <hr className="border-b-2 border-hijau mb-4" />
      <div className="flex flex-col lg:flex-row justify-start gap-4 lg:gap-24 p-12">
        <div className="flex flex-col lg:w-1/2">
          <div className="">
            <p className="text-orange text-xl font-bold">Experience</p>
            <p className="font-semibold">Kementerian Keuangan</p>
            <p className="text-hijau">UX Designer</p>
            <p className="text-ungu">2024 - Present</p>
          </div>
          <div className="my-2">
            <p className="font-semibold">Sekretariat Daerah Deli Serdang</p>
            <p className="text-hijau">Senior Office Operator Computer</p>
            <p className="text-ungu">2022 - 2024</p>
          </div>
          <div className="my-2">
            <p className="font-semibold">
              Dinas Tenaga Kerja, Koperasi dan Usaha Mikro
            </p>
            <p className="text-hijau">IT Staff</p>
            <p className="text-ungu">2020 - 2021</p>
          </div>
        </div>
        <div className="flex flex-col lg:w-1/2">
          <span>
            <p className="text-orange text-xl font-bold">Education</p>
            <p>Universitas Sumatera Utara</p>
            <p>SMAN 1 Medan</p>
          </span>
          <span className="my-4">
            <p className="text-orange text-xl font-bold">Skills</p>
            <p>Design:</p>
            <p>
              User Research, User Interviews, User Flows, Wireframing,
              Prototyping, Competitive Analyst, Usability Testing
            </p>
          </span>
        </div>
      </div>
      <hr className="border-b-2 border-hijau mb-4" />
      <div className="p-12">
        <p className="text-orange text-xl font-bold">Skills</p>

        <p className="my-2">
          Hey there! I'm a computer science graduate from the University of
          North Sumatra, nestled in the bustling city of Medan, the third
          largest city in Indonesia. Back in 2020, while cruising through my
          eighth semester, I dove headfirst into the world of IT as an IT Staff
          at a government agency in a district about a 2-hour ride from Medan.
        </p>
        <p className="my-2">
          Fast forward to 2021, post-graduation vibes kicked in, and I landed a
          gig as a senior office operator computer at the Secretariat of one of
          the largest districts in North Sumatra. In my rookie year, I decided
          to spice things up and dived into a Google UX Design Professional
          course. Turns out, I was hooked!
        </p>
        <p className="my-2">
          Throughout the journey, I tinkered on several projects, hustling my
          way through and clinching that sweet graduation in late 2022. And now,
          here I am in 2024, rocking the boat as a UX Designer at the Ministry
          of Finance, nestled in the heart of Central Jakarta.
        </p>
      </div>
    </div>
  );
};
