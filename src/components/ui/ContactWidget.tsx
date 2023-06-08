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
        href="/blog"
        className="mr-5 prose font-bold text-primary hover:text-accent duration-200"
      >
        Blog
      </Link>

      <Link href="/resume" className="prose animated-link font-bold">
        Resume
      </Link>
    </div>
  </>
);
