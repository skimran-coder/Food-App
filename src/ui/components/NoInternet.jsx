
const NoInternet = () => {
    return(
        <div className="flex flex-col gap-8 justify-center items-center w-full h-full">

            <i class="fa-solid fa-wifi-slash w-24 text-black"></i>
            <h2 className="font-bold text-red-600 text-4xl">Sorry! You are offline. 
            </h2>
        </div>
    )
}

export default NoInternet;