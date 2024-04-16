import { Outlet } from "react-router-dom";
import { aboutMe, aboutUs, featuresDesc } from "../Constant";
import { useState } from "react";

const Section = ({title, description}) =>{
    const [isVisible, setIsVisible] = useState(false)

   return (
   <div className="my-4">
    <div className={`flex justify-between items-center bg-stone-700 pl-4 rounded-t-md  ${!isVisible ? "border-b-4 border-myYellow" : "border-none"}`}>
        <h2 className={`text-2xl font-bold py-1 font-serif transition-all duration-300 ${isVisible ? "text-white" : "text-stone-300"}`}>{title}</h2>
        {
          !isVisible ?  
          <i class="fa-solid fa-angle-down text-2xl pr-4 cursor-pointer transition-all duration-300" onClick={() =>{
            setIsVisible(!isVisible)
          }}></i> 
          :
          <i class="fa-solid fa-angle-up text-2xl pr-4 cursor-pointer transition-all duration-300" onClick={() =>{
            setIsVisible(!isVisible)
          }}></i>
        } 
    </div>
    <div className={`bg-stone-600 rounded-b-md ${isVisible ? "border-b-8 border-myYellow" : "border-none"}`}>
    {
        isVisible && <p className="font-thin text-base ease-out duration-1000 px-4 py-2 text-white font-serif">{description}</p>
    }
    </div>

     </div>
  
)
}

const About = () => {
    return(
        <div className="w-3/5 m-auto my-4 min-h-full">
            <Section title={"Features"} description={featuresDesc}/>
            <Section title={"About Us"} description={aboutUs}/>
            <Section title={"About Me"} description={aboutMe}/>

            <Outlet />

        </div>
    )
}

export default About;