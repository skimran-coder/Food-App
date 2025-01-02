import { createContext } from "react";


const userContext = createContext({
    dev: {
        name : "Sk. Imran Hussain",
        email: "skimranhussain4@gmail.com"
    }
}) 

export default userContext;