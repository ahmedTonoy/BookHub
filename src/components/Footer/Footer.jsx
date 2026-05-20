import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <aside>
        <Link to="/">
          <p className="font-bold text-2xl text-white mb-2">BookHub</p>
        </Link>
        <p className="sm:max-w-75">
          At <span className="font-bold">BookHub</span>, we believe every book
          has the power to transform a life, spark a conversation, or transport
          you to an entirely new world. Buy from us and bring happiness with
          knowledge.
        </p>
      </aside>
      <nav>
        <h6 className="font-medium text-xl text-white mb-2">Company</h6>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Our Mission</a>
        <a className="link link-hover">Contact Sales</a>
      </nav>
      <nav>
        <h6 className="font-medium text-xl text-white mb-2">Services</h6>
        <a className="link link-hover">Products & Services</a>
        <a className="link link-hover">Customer Stories</a>
        <a className="link link-hover">Download Apps</a>
      </nav>
      <nav>
        <h6 className="font-medium text-xl text-white mb-2">Information</h6>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Terms & Conditions</a>
        <a className="link link-hover">Join Us</a>
      </nav>
      <nav>
        <h6 className="font-medium text-xl text-white mb-2">Social Links</h6>
        <a className="link link-hover">
          <span className="p-0.5 rounded-full bg-white mr-1">
            <FontAwesomeIcon
              className="text-black"
              icon={faXTwitter}
            ></FontAwesomeIcon>
          </span>
          @BookHub
        </a>
        <a className="link link-hover">
          <span className="p-0.5 rounded-full bg-white mr-1">
            <FontAwesomeIcon
              className="text-black"
              icon={faLinkedinIn}
            ></FontAwesomeIcon>
          </span>
          @BookHub
        </a>
        <a className="link link-hover">
          <span className="p-0.5 rounded-full bg-white mr-1">
            <FontAwesomeIcon
              className="text-black"
              icon={faFacebookF}
            ></FontAwesomeIcon>
          </span>
          @BookHub
        </a>
        <a className="link link-hover">
          <span className="p-0.5 rounded-full bg-white mr-1">
            <FontAwesomeIcon
              className="text-black"
              icon={faEnvelope}
            ></FontAwesomeIcon>
          </span>
          support@bookhub.com
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
