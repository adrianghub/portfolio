import {
  RiGithubFill,
  RiLinkedinBoxLine,
  RiInstagramLine,
  RiTwitterLine
} from 'react-icons/ri';

const AboutWidget = () => (
  <div className="pt-4 pb-8">
    <h3 className="text-xl mb-8 font-semibold border-b border-gray-300 pb-4">
      About Me
    </h3>
    <p className="text-md pb-8">
      I do some web stuff primarly using JS. Currently
      <a href="https://boldare.com" target="_blank" rel="norefferer">
        @Boldare
      </a>
      . Moutains and cats lover.
    </p>
    <div className="flex justify-center">
      <RiGithubFill className="social-icon mr-4" />
      <RiLinkedinBoxLine className="social-icon mr-4" />
      <RiInstagramLine className="social-icon mr-4" />
      <RiTwitterLine className="social-icon" />
    </div>
  </div>
);

export default AboutWidget;
