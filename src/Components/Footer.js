const Footer = () =>{
    return(
        <div className="footer px-20 w-[100%] text-center py-4  text-white bg-myBlack">
            <div class="footer-section flex justify-between w-3/4 mx-auto">
        <div class="footer-faded-text">
            <h2 className="text-xl">© 2024 Sk. Imran Hussain</h2>
        </div>
        <div class="footer-section-container flex gap-6 text-2xl ">
            
            
                <a href="https://www.linkedin.com/in/sk-imran-hussain/" target="_blank"><i class="fa-brands fa-linkedin icon  cursor-pointer hover:text-myYellow transition-all duration-300" ></i></a>
                <a href="https://github.com/skimran-coder" target="_blank"><i class="fa-brands fa-github icon cursor-pointer hover:text-myYellow transition-all duration-300"></i></a>
                <a href="https://twitter.com/skimranhussain" target="_blank"><i class="fa-brands fa-x-twitter icon cursor-pointer hover:text-myYellow transition-all duration-300"></i></a>
                <a href="https://www.instagram.com/skimranhussain4/" target="_blank"><i class="fa-brands fa-instagram icon cursor-pointer hover:text-myYellow transition-all duration-300"></i></a>
                <a href="mailto:skimranhussain4.com"  target="_blank"><i class="fa-regular fa-envelope icon cursor-pointer hover:text-myYellow transition-all duration-300"></i></a>
            
        </div>
    </div>
        </div>
    )
}

export default Footer;