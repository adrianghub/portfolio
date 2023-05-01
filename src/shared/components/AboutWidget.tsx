import Link from 'next/link';
import { SocialMediaRow } from './SocialMediaRow';
import { BsNewspaper } from 'react-icons/bs';
import { RESUME_URL } from '../data';

export const AboutWidget = () => (
  <>
    <h3 className="mb-8 pb-2 prose prose-xl border-b border-gray-300">
      About Me
    </h3>
    <div className="prose pb-8 text-primary">
      <ul>
        <li> I do some web stuff in JS.</li>
        <li>
          Currently
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
        <li> Mountains and cats lover.</li>
        <li>
          Check out my
          <Link className="ml-2 animated-link" href="/blog">
            blog page
          </Link>
          .
        </li>
      </ul>
    </div>
    <SocialMediaRow />

    <div className="flex justify-center">
      <a
        href={RESUME_URL}
        target="_blank"
        rel="norefferer noreferrer"
        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-secondary hover:bg-transparent hover:text-secondary hover:border-secondary transition-all duration-300 ease-in-out"
      >
        <span>resume (pdf)</span>
        <BsNewspaper className="ml-2" />
      </a>
    </div>
  </>
);
