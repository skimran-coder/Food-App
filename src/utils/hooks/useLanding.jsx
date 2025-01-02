import { useEffect, useState } from "react"
import { LANDING_API_URL } from "../../Constant"

const useLanding = () => {
    const [data, setData] = useState(null)

    async function getLanding() {
        try {
            const data = await fetch (LANDING_API_URL)
            const json = await data.json()
            setData(json?.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        getLanding()
    },[])

    return data;
}

export default useLanding;