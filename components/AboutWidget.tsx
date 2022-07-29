import { SOCIAL_MEDIA } from 'data';
import {
  RiGithubFill,
  RiLinkedinBoxLine,
  RiInstagramLine,
  RiTwitterLine
} from 'react-icons/ri';

export const AboutWidget = () => (
  <div className="pt-4 pb-8">
    <h3 className="text-xl mb-8 font-semibold border-b border-gray-300 pb-4">
      About Me
    </h3>
    <p className="text-md pb-8">
      <span className="mr-1">
        I do some web stuff primarly using JS. Currently
      </span>
      <a
        className="animated-link"
        href="https://boldare.com"
        target="_blank"
        rel="norefferer"
      >
        @Boldare
      </a>
      . Moutains and cats lover. Check out my{' '}
      <a
        className="animated-link"
        target="_blank"
        rel="norefferer"
        href="/resume.pdf"
      >
        resume
      </a>
      .
    </p>
    <div className="flex justify-center">
      <a
        className="hover:text-gray-500 duration-200"
        href={SOCIAL_MEDIA.GH_HREF}
        target="_blank"
        rel="norefferer"
      >
        <RiGithubFill className="social-icon mr-4" />
      </a>
      <a
        className="hover:text-gray-500 duration-200"
        href={SOCIAL_MEDIA.LINKEDIN_HREF}
        target="_blank"
        rel="norefferer"
      >
        <RiLinkedinBoxLine className="social-icon mr-4" />
      </a>
      <a
        className="hover:text-gray-500 duration-200"
        href={SOCIAL_MEDIA.INSTA_HREF}
        target="_blank"
        rel="norefferer"
      >
        <RiInstagramLine className="social-icon mr-4" />
      </a>
      <a
        className="hover:text-gray-500 duration-200"
        href={SOCIAL_MEDIA.TWITTER_HREF}
        target="_blank"
        rel="norefferer"
      >
        <RiTwitterLine className="social-icon" />
      </a>
    </div>
  </div>
);
