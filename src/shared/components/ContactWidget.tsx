import Link from 'next/link';
import { SocialMediaRow } from './SocialMediaRow';

export const ContactWidget = () => (
  <>
    <div className="pt-8 lg:pt-0">
      <h3 className="text-xl mb-8 font-semibold border-b border-gray-300 pb-4">
        Contact
      </h3>

      <SocialMediaRow />
    </div>

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
