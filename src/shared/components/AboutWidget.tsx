import Link from 'next/link';
import { SocialMediaRow } from './SocialMediaRow';

export const AboutWidget = () => (
  <>
    <h3 className="mb-8 pb-2 prose prose-xl border-b border-gray-300">
      About Me
    </h3>
    <div className="prose pb-8">
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
      <Link
        href="/assets/resume.pdf"
        target="_blank"
        rel="norefferer"
        className="prune animated-link font-bold"
      >
        resume (pdf)
      </Link>
    </div>
  </>
);
