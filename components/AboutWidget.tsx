import {
  RiGithubFill,
  RiLinkedinBoxLine,
  RiInstagramLine,
  RiTwitterLine,
} from "react-icons/ri";

const AboutWidget = () => (
  <div className="shadow-lg rounded-lg p-8 mb-8">
    <h3 className="text-xl mb-8 font-semibold border-b pb-4">About Me</h3>
    <div className="flex justify-center">
      <RiGithubFill className="social-icon mr-4" />
      <RiLinkedinBoxLine className="social-icon mr-4" />
      <RiInstagramLine className="social-icon mr-4" />
      <RiTwitterLine className="social-icon" />
    </div>
  </div>
);

export default AboutWidget;
