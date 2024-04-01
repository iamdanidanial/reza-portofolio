import React from "react";
import section from "../assets/section.png";
import affirnityMaps from "../assets/Affinity Maps.png";
import appStore from "../assets/Appstore.png";
import homePageDesign from "../assets/Redesign - Homepage.png";
import browsePage from "../assets/Redesign - Browse Page.png";
import filterPage from "../assets/Redesign - Filter.png";
import sectionPage from "../assets/section.png";

export const Mangaplus = () => {
  return (
    <div className="flex flex-col mx-auto">
      <div className="flex mx-auto bg-ungu p-12 w-full justify-center items-center">
        <p className="text-white text-6xl">Redesign Mangaplus Mobile App </p>
      </div>
      <div className="flex justify-center items-center">
        <img src={section} className="w-10/12 p-4 "></img>
      </div>
      <p className="font-bold text-4xl text-start px-24">Project Overview</p>
      <div className="flex gap-12 mx-auto justify-center px-24 py-4">
        <p className="w-1/2">
          About: Manga Plus by Shueisha is the official platform for reading
          manga from Shueisha Inc and is available globally. Manga Plus by
          Shueisha publishes some of the world's best manga such as Naruto,
          Dragon Ball, One Piece, Bleach, and many more. Operated directly by
          Shueisha, a Japanese publishing company that collaborates with manga
          artists, this application enables readers to enjoy a wide array of
          captivating manga from around the world, in various languages, and
          simultaneously with their release in Japan, eliminating any time
          differences.
        </p>
        <span className="w-1/2">
          <p>
            <b>Project Type: </b>Redesign, UI/UX
          </p>
          <p>
            <p>Case study timing:</p> 6 weeks
          </p>
          <p>
            <b>Role:</b>UI/UX Designer, UX Researcher
          </p>
          <p>
            <b>Tools:</b>Figma, Figjam, Useberry
          </p>
        </span>
      </div>
      <div className="flex flex-col mx-auto bg-kuning p-4 gap-12 w-full justify-center items-center">
        <p className=" text-6xl">QUICK LINKS </p>
        <div className="flex gap-12 mx-auto items-center">
          <a
            href="https://www.figma.com/proto/KUKNlHJitiIijyW3WmDYlR/Mangaplus-Project?type=design&node-id=103-3&t=7bJWvzTMUC9Ec9LE-1&scaling=scale-down&page-id=102%3A2&starting-point-node-id=103%3A3&show-proto-sidebar=1&mode=design"
            target="_blank"
            rel="noopener noreferrer"
            class="border border-black p-4"
          >
            Final Prototyping
          </a>

          <a
            href="https://docs.google.com/spreadsheets/d/1tUTESyYgg_cJLWYz_FESjeCyHxwDODOkLXAes2TFyZs/edit#gid=0"
            target="_blank"
            rel="noopener noreferrer"
            class="border border-black p-4"
          >
            Discussion Guide
          </a>

          <a
            href="https://docs.google.com/spreadsheets/d/1FmuxObgmj3oIsW7POVrO_XHRmrFMrQTtMVShjv-4S0c/edit#gid=0"
            target="_blank"
            rel="noopener noreferrer"
            class="border border-black p-4"
          >
            UT Script
          </a>
        </div>
      </div>
      <div className="flex flex-col mx-auto p-4 w-full gap-2 max-w-3xl">
        <p className="font-bold text-4xl text-center">THE DESIGN BRIEF</p>
        <p className="font-semibold text-lg">
          PROBLEM ASSUMPTIONS BASED ON OBSERVATIONS
        </p>
        <p>
          The homepage, or updates page, presents a notable challenge with its
          overcrowded and poorly organized layout, creating difficulty for users
          to navigate smoothly. Within this cluttered interface, users are
          inundated with an overwhelming amount of information spanning updates
          from the past 2 days, past 3 days, and even the past 7 days (a week),
          contributing to a disjointed user experience. Furthermore, locating
          the search button, especially for users with favorite manga, proves
          cumbersome as it is tucked away on the third page (browse), disrupting
          the seamless flow of content discovery. Even on the browse page, while
          users encounter options for "All" and "Hottest," the absence of a
          filter feature within the "All" section diminishes the browsing
          experience by limiting users' ability to refine search results
          effectively. Additionally, the profile menu, essential for managing
          saved favorite manga, is hidden within the settings on the myshelf
          page, causing unnecessary frustration for users seeking to view and
          edit their profiles. Lastly, the absence of an offline reading feature
          further detracts from the overall user experience, preventing users
          from enjoying their favorite manga without an internet connection.
        </p>
      </div>
      <div className="flex flex-col mx-auto bg-kuning p-4 gap-4 w-full justify-center items-center">
        <p className="text-6xl">DEFINE</p>
        <hr className="border-b-2 border-gray-800 mb-4 w-3/5" />
        <div className="flex gap-12 mx-auto items-center">
          <p>In this section</p>

          <ul class="list-decimal">
            <li>Validate Problem</li>
            <li>In-depth Interview</li>
            <li>Affinity Diagram</li>
            <li>Problem Priority</li>
            <li>How Might We</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col lg:max-w-7xl justify-center items-center mx-auto py-12 gap-12">
        <p className="text-center font-semibold">VALIDATE PROBLEM</p>
        <p>
          Following my personal observations within the application, I proceeded
          to validate the identified issues through comprehensive research,
          including analyzing reviews on both the Play Store and App Store, as
          well as conducting in-depth interviews. Through these interviews, I
          sought to confirm the pain points experienced by users while utilizing
          the Mangaplus app, thereby identifying key areas requiring resolution.
          Here are some reviews from the Google Play Store that highlight pain
          points:
        </p>
        <img src={appStore} className=""></img>
      </div>

      <div className="flex flex-col max-w-7xl justify-center mx-auto py-12 gap-12">
        <p className="text-center font-semibold">IN-DEPTH INTERVIEW</p>
        <p>
          Objective: My aim is to uncover the motivations, habits, pain points,
          and barriers encountered while using the Mangaplus app. I conduct
          in-depth interviews to delve deeply into these issues and identify
          their underlying causes. Following the interviews, I analyze the
          insights gathered and represent them using an affinity diagram. This
          method allows me to discern patterns of thought by organizing and
          clustering language-based information into cohesive relationships.
        </p>
        <img src={affirnityMaps} className=""></img>

        <p className="text-center font-semibold">PROBLEM PRIORITY</p>
        <ul className="list-disc">
          <li>
            Lack of Search Button: Users encounter difficulty in locating the
            search button, hindering their ability to find desired manga easily.
            Addressing this issue is paramount as it directly impacts user
            satisfaction and should be prioritized for improvement.
          </li>
          <li>
            Genre Filtering/Categorization: With a plethora of manga available,
            categorizing them by genre is crucial for enhancing user experience.
            The absence of genre categories poses a challenge for users in
            discovering manga of interest, making it imperative to prioritize
            this aspect for improvement
          </li>
          <li>
            Absence of Offline Reading and Download Features: The inclusion of
            offline reading and manga download functionalities is essential for
            a manga reading app. Offline reading allows users to conserve
            internet data, ensures seamless reading experiences without
            buffering, and offers the flexibility to enjoy manga anytime,
            anywhere. While addressing this issue is important, it should be
            considered a secondary priority after resolving more critical
            issues.
          </li>
          <li>
            Manga Reading Navigation Options: Providing diverse navigation
            options for manga reading is an important consideration. Users'
            preferences for reading manga from left to right, right to left, or
            horizontally vary, contributing to a personalized and improved user
            experience. While not a direct hindrance to manga consumption,
            addressing this issue should be a tertiary priority for enhancement.
          </li>
        </ul>

        <p className="text-center font-semibold">HOW MIGHT WE</p>
        <ul className="list-disc">
          <li>
            How might we make the search feature easy for users to find so they
            can find the manga they are looking for faster?
          </li>
          <li>
            How might we provide filter features and categories based on genres
            to make it easier for users to find the manga they like?
          </li>
          <li>
            How might we provide the download feature to increase user
            flexibility in reading manga?
          </li>
          <li>
            How might we improve navigation while reading manga to make it
            easier for users to read manga based on their habits?
          </li>
        </ul>
      </div>
      <div className="flex flex-col mx-auto bg-kuning p-4 gap-12 w-full justify-center items-center">
        <p className=" text-6xl">IDEATE</p>
        <div className="flex gap-12 mx-auto items-center">
          <button className="border border-black p-4">In this section</button>
          <button className="border border-black p-4">Suggested Design</button>
        </div>
      </div>

      <div className="flex flex-col mx-auto p-4 gap-12 w-full justify-center items-center">
        <p className="text-6xl">Change 1</p>
        <div className="flex gap-12 max-w-7xl">
          <img src={homePageDesign} className="w-1/2 h-96"></img>

          <p>
            Users have highlighted the absence of a search feature as a hurdle
            in manga discovery. To enhance user experience, the homepage design
            has been enhanced to incorporate a search bar directly on the
            homepage. This improvement aims to facilitate quick and efficient
            manga searches, eliminating the need for users to sift through
            titles individually.
          </p>
        </div>
      </div>

      <div className="flex flex-col mx-auto p-4 gap-12 w-full justify-center items-center">
        <p className="text-6xl">Change 2</p>
        <div className="flex gap-12 max-w-7xl">
          <img src={browsePage} className="w-1/2 h-96"></img>

          <p>
            In the previous design, the search feature was located within the
            browse menu, which solely presented all available manga titles.
            However, users seeking manga recommendations or unsure about their
            reading preferences often desire insight into popular searches by
            fellow readers. To address this, the proposed design showcases a
            list of trending searches, supplemented by a search history feature.
            This enhancement aims to streamline the manga discovery process,
            providing users with easier access to previously searched titles and
            popular manga recommendations.
          </p>
        </div>
      </div>

      <div className="flex flex-col mx-auto p-4 gap-12 w-full justify-center items-center max-w-7xl">
        <p className="text-6xl">Change 3</p>
        <img src={filterPage} className="w-1/2 h-96"></img>

        <p>
          An essential feature in a manga reading app is the ability to filter
          or categorize manga based on genre, given the vast array of available
          titles. To streamline manga discovery, the Suggested Browse Page now
          includes a filter option to categorize manga by genre. This addition
          aims to assist users in easily locating the manga they wish to read,
          enhancing their overall experience with the app.
        </p>
      </div>
      <div className="flex flex-col mx-auto p-4 gap-12 w-full justify-center items-center max-w-7xl">
        <p className="text-6xl">Change 4</p>
        <img src={sectionPage} className="w-1/2 h-96"></img>

        <p>
          Users have expressed difficulty in recommending the app to e-reader
          and Kindle users due to the lack of manga download or offline reading
          features. In response, the suggested design introduces a download
          feature to cater to users' needs. This addition aims to facilitate
          uninterrupted manga reading experiences, particularly for users
          seeking to avoid buffering, conserve data quotas, or access manga in
          areas with poor signal reception. By enhancing flexibility, it is
          anticipated that this feature will elevate the usability of the app.
        </p>
      </div>

      <div className="flex flex-col mx-auto bg-kuning p-4 gap-4 w-full justify-center items-center">
        <p className="text-6xl">Validate Solution</p>
        <hr className="border-b-2 border-gray-800 mb-4 w-3/5" />
        <div className="flex gap-12 mx-auto items-center">
          <p>In this section</p>

          <ul class="list-decimal">
            <li>Usability Testing</li>
            <li>Scenario & Task</li>
            <li>SUS Score</li>
            <li>Success Rate</li>
            <li>Task Completion Time</li>
          </ul>

          <ol class="list-decimal" start="6">
            <li>Misclicks & Heatmaps</li>
            <li>Problems</li>
            <li>Suggestions for improvement</li>
            <li>Design Evalution</li>
            <li>What i learned</li>
          </ol>
        </div>
      </div>
      <div className="flex flex-col mx-auto py-12 justify-center items-center">
        <p className="py-4">
          To view the full process and results of the usability testing, you can
          click on the link below.
        </p>
        <a
          href="https://drive.google.com/file/d/1dO4CGNGftE8w8Fn7XChWDAmH77yUbscc/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-blue-500 hover:bg-blue-700 w-1/2 text-white font-bold py-2 px-4 rounded text-center"
        >
          Usability Testing
        </a>
      </div>
    </div>
  );
};
