import Link from 'next/link';
import { SocialMediaRow } from './SocialMediaRow';

export const AboutWidget = () => (
  <div className="pt-8 lg:pt-0 pb-8">
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
          <Link className="mx-2 animated-link" href="/resume">
            resume
          </Link>
          or
          <Link className="ml-2 animated-link" href="/blog">
            blog page
          </Link>
          .
        </li>
      </ul>
    </div>
    <SocialMediaRow />
  </div>
);
