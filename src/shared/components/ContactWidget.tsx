import Link from 'next/link';
import { SocialMediaRow } from './SocialMediaRow';

export const ContactWidget = () => (
  <>
    <h3 className="mb-8 py-2 prose prose-xl border-b border-gray-300">
      Contact
    </h3>

    <SocialMediaRow />

    <div className="flex justify-center">
      <Link
        href="/resume"
        className="animated-link font-bold text-xl lg:text-xl"
      >
        Resume
      </Link>
    </div>
  </>
);
