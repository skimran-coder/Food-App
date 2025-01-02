const Footer = () => {
  return (
    <footer className="footer px-20 w-[100%] text-center  py-4  text-white bg-myBlack">
      <div className="footer-section flex justify-between items-center w-3/4 mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Sk. Imran Hussain
        </p>

        <div className="footer-section-container flex gap-6 text-2xl ">
          <a
            href="https://www.linkedin.com/in/sk-imran-hussain/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin icon  cursor-pointer hover:text-myYellow transition-all duration-300 text-xl"></i>
          </a>
          <a href="https://github.com/skimran-coder" target="_blank">
            <i className="fa-brands fa-github icon cursor-pointer hover:text-myYellow text-xl transition-all duration-300 "></i>
          </a>
          <a href="https://twitter.com/skimranhussain" target="_blank">
            <i className="fa-brands fa-x-twitter icon cursor-pointer text-xl hover:text-myYellow transition-all duration-300"></i>
          </a>
          <a href="https://www.instagram.com/skimranhussain4/" target="_blank">
            <i className="fa-brands fa-instagram icon cursor-pointer text-xl hover:text-myYellow transition-all duration-300"></i>
          </a>
          <a href="mailto:skimranhussain4.com" target="_blank">
            <i className="fa-regular fa-envelope icon cursor-pointer hover:text-myYellow text-xl transition-all duration-300 "></i>
          </a>
        </div>

        <ul className="flex space-x-4 mt-4 md:mt-0">
          <li>
            <a href="#" className="text-sm">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="text-sm">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="text-sm">
              Cookie Policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
