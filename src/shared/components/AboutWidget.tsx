import Link from 'next/link';
import { SocialMediaRow } from './SocialMediaRow';

export const AboutWidget = () => (
  <div className="border border-gray-300 rounded-lg px-8 lg:pt-8 pb-4 mt-4 mb-4 pt-4">
    <h3 className="text-xl mb-8 font-semibold border-b border-gray-300 pb-4">
      About Me
    </h3>
    <div className="text-md pb-8">
      <ul>
        <li> {'>'} I do some web stuff in JS.</li>
        <li>
          {'>'} Currently
          <Link
            className="ml-2 animated-link"
            href="https://boldare.com"
            target="_blank"
            rel="norefferer"
          >
            @Boldare
          </Link>
          .
        </li>
        <li>{'>'} Mountains and cats lover.</li>
        <li>
          {'>'} Check out my
          <Link className="ml-2 animated-link" href="/blog">
            blog page
          </Link>
          .
        </li>
      </ul>
    </div>
    <SocialMediaRow />

    <div className="flex justify-center">
      <Link
        href="/assets/resume.pdf"
        target="_blank"
        rel="norefferer"
        className="font-bold text-xl lg:text-xl animated-link"
      >
        resume (pdf)
      </Link>
    </div>
  </div>
);
