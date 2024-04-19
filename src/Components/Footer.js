import { useContext } from "react";
import userContext from "../utils/userContext";


const Footer = () =>{
    const {dev} = useContext(userContext)
    
    return(

        <footer className="footer px-20 w-[100%] text-center  py-4  text-white bg-myBlack">

            <div className="footer-section flex justify-between items-center w-3/4 mx-auto">
            <p className="text-sm">&copy; {new Date().getFullYear()} Sk. Imran Hussain</p>
            
        <div className="footer-section-container flex gap-6 text-2xl ">
            
            
            
                <a href="https://www.linkedin.com/in/sk-imran-hussain/" target="_blank"><i className="fa-brands fa-linkedin icon  cursor-pointer hover:text-myYellow transition-all duration-300 text-xl" ></i></a>
                <a href="https://github.com/skimran-coder" target="_blank"><i className="fa-brands fa-github icon cursor-pointer hover:text-myYellow text-xl transition-all duration-300 "></i></a>
                <a href="https://twitter.com/skimranhussain" target="_blank"><i className="fa-brands fa-x-twitter icon cursor-pointer text-xl hover:text-myYellow transition-all duration-300"></i></a>
                <a href="https://www.instagram.com/skimranhussain4/" target="_blank"><i className="fa-brands fa-instagram icon cursor-pointer text-xl hover:text-myYellow transition-all duration-300"></i></a>
                <a href="mailto:skimranhussain4.com"  target="_blank"><i className="fa-regular fa-envelope icon cursor-pointer hover:text-myYellow text-xl transition-all duration-300 "></i></a>
            
        </div>

        <ul className="flex space-x-4 mt-4 md:mt-0">
                <li><a href="#" className="text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-sm">Terms of Service</a></li>
                <li><a href="#" className="text-sm">Cookie Policy</a></li>
            </ul>
    </div>
        </footer>
    )
}

export default Footer;

{/* <footer className="bg-gray-900 text-white py-8">
    <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
                <h3 className="text-lg font-semibold mb-4">About Us</h3>
                <p className="text-sm">Discover our story and mission. Learn more about our team and the services we offer.</p>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p className="text-sm">Have questions or feedback? Reach out to our customer support team. We're here to help!</p>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <ul className="flex space-x-4">
                    <li><a href="#" className="text-sm">Facebook</a></li>
                    <li><a href="#" className="text-sm">Twitter</a></li>
                    <li><a href="#" className="text-sm">Instagram</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
                <p className="text-sm">Stay updated with our latest news, promotions, and special offers by subscribing to our newsletter.</p>
                <form className="mt-4">
                    <input type="email" placeholder="Your email address" className="block w-full px-4 py-2 rounded-md border-none bg-gray-800 text-white text-sm"/>
                    <button type="submit" className="block w-full mt-2 px-4 py-2 bg-yellow-500 rounded-md hover:bg-yellow-600 transition-colors duration-300 text-white text-sm">Subscribe</button>
                </form>
            </div>
        </div>
        <hr className="my-8 border-gray-700"/>
        <p className="text-sm text-center">&copy; {new Date().getFullYear()} Your Food Delivery App. All rights reserved.</p>
    </div>
</footer> */}
