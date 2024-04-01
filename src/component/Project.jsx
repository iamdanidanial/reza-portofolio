import React from "react";
import thumbnailweb from "../assets/thumbnailweb.png";
import thumbnailmangaplus from "../assets/thumbnailmangaplus.png";
import thumbnailinflux from "../assets/ThumbnailInflux.png";
import { Link } from "react-router-dom";

export const Project = () => {
  const dataProject = [
    {
      title: "Web Visualization Data",
      description:
        "A small-scale mini project visualizing the budget data of each region in Indonesia.",
      image: thumbnailweb,
      link: "/",
    },
    {
      title: "Redesign Mangaplus Mobile App",
      description:
        "Redesigning the Mangaplus mobile application, an official app for reading manga from Shueisha.",
      image: thumbnailmangaplus,
      link: "/mangaplus",
    },
    {
      title: "Influx.co, Job Finder",
      description:
        "A component of the mini project in Google Professional UX Design, creating an application for job searching.",
      image: thumbnailinflux,
      link: "",
    },
  ];
  return (
    <div className="flex mx-auto flex-col justify-center lg:py-8 px-4 lg:px-24">
      {dataProject.map((item) => (
        <div className="flex lg:flex-row flex-col justify-between items-center">
          <div className="lg:w-1/2 p-2 lg:p-6 text-start">
            <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
            <hr className="border-b-2 border-gray-800 mb-4 w-3/5" />
            <p className="text-gray-700">{item.description}</p>
            <Link to={item.link}>
              <button class=" font-bold  rounded flex items-center my-4">
                View Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </button>
            </Link>
          </div>
          <div className="lg:w-1/2 p-2 lg:p-6">
            <img
              src={item.image}
              alt="Gambar Contoh"
              className="max-w-full h-96"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
