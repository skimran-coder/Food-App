import { Left_SVG, Right_SVG } from "../Constant";


const ScrollX = () => {
    return(
        <div className="flex gap-4 pr-8 pt-8">
                <span className="bg-Gainsboro rounded-full p-2 cursor-pointer">{Left_SVG}</span>
                <span className="bg-Gainsboro rounded-full p-2 ">{Right_SVG}</span>
        </div>
    )
}

export default ScrollX;