import { aboutMe, aboutUs, featuresDesc } from "../../Constant";
import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="my-4">
      <div
        className={`flex justify-between items-center bg-stone-700 pl-4 rounded-t-md cursor-pointer  ${
          !isVisible ? "border-b-4 border-myYellow" : "border-none"
        }`}
        onClick={() => {
          setIsVisible();
        }}
      >
        <h2
          className={`text-2xl font-bold py-1 font-serif  transition-all duration-300 ${
            isVisible ? "text-white" : "text-stone-300"
          }`}
        >
          {title}
        </h2>
        {!isVisible ? (
          <i
            className={`fa-solid fa-angle-down text-2xl pr-4  transition-all duration-300 ${
              isVisible ? "text-white" : "text-stone-300"
            }`}
          ></i>
        ) : (
          <i
            className={`fa-solid fa-angle-up text-2xl pr-4  transition-all duration-300 ${
              isVisible ? "text-white" : "text-stone-300"
            }`}
          ></i>
        )}
      </div>
      <div
        className={`bg-stone-600 rounded-b-md ${
          isVisible ? "border-b-8 border-myYellow" : "border-none"
        }`}
      >
        {isVisible && (
          <p className="font-thin text-base ease-out duration-1000 px-4 py-2 text-white font-serif">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

const About = () => {
  const [visibleSection, setVisibleSection] = useState(
    localStorage ? localStorage.getItem("visibleSection") : "showFeature"
  );

  return (
    <section className="w-3/5 m-auto my-4 min-h-full">
      <Section
        title={"Features"}
        description={featuresDesc}
        isVisible={visibleSection === "showFeature"}
        setIsVisible={() => {
          if (visibleSection !== "showFeature") {
            localStorage.setItem("visibleSection", "showFeature");
            setVisibleSection("showFeature");
          } else {
            localStorage.setItem("visibleSection", null);
            setVisibleSection(localStorage.getItem("visibleSection"));
          }
        }}
      />

      <Section
        title={"About Us"}
        description={aboutUs}
        isVisible={visibleSection === "showAboutUs"}
        setIsVisible={() => {
          if (visibleSection !== "showAboutUs") {
            localStorage.setItem("visibleSection", "showAboutUs");
            setVisibleSection("showAboutUs");
          } else {
            localStorage.setItem("visibleSection", null);
            setVisibleSection(localStorage.getItem("visibleSection"));
          }
        }}
      />

      <Section
        title={"About Me"}
        description={aboutMe}
        isVisible={visibleSection === "showAboutMe"}
        setIsVisible={() => {
          if (visibleSection !== "showAboutMe") {
            localStorage.setItem("visibleSection", "showAboutMe");
            setVisibleSection("showAboutMe");
          } else {
            localStorage.setItem("visibleSection", null);
            setVisibleSection(localStorage.getItem("visibleSection"));
          }
        }}
      />
    </section>
  );
};

export default About;
