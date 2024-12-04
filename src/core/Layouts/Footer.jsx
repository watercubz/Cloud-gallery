import { Link } from 'react-router-dom';
import Logo from '../../assets/img/MTAAI-core-icon.png';

export default function Footer() {
  return (
    <>
      <footer className="bg-white border-t border-base-content/10">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="flex lg:items-start md:flex-row md:flex-nowrap flex-col">
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <a
                href="#"
                className="flex gap-2 justify-center md:justify-start items-center"
                aria-current="page"
              >
                <img alt="MTAAI-core" src={Logo} className="w-11 h-11" />
                <strong className="font-extrabold tracking-tight text-base md:text-lg">
                  MTAAI-core
                </strong>
              </a>
              <p className="mt-3 text-sm text-base-content/60 whitespace-nowrap text-center">
                Copyright © 2024 - All rights reserved
              </p>
            </div>
            <div className="flex-grow flex flex-wrap justify-center -mb-10 md:mt-0 mt-10 text-center">
              <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                  LINKS
                </div>
                <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                  <a
                    href="mailto:support@profitpage.net"
                    className="link link-hover"
                    aria-label="Contact Support"
                  >
                    Support
                  </a>
                  <a className="link link-hover">Discord</a>
                  <a className="link link-hover">Twitter</a>
                  <a href="#" className="link link-hover">
                    Feedback
                  </a>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                  LEGAL
                </div>
                <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                  <Link to="/terms" className="link link-hover">
                    Terms of services
                  </Link>
                  <Link to="/privacy" className="link link-hover">
                    Privacy policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
