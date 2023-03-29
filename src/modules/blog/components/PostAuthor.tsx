import Image from 'next/image';

interface PostAuthorProps {
  name: string;
  avatarUrl: string;
}

export const PostAuthor = ({ name, avatarUrl }: PostAuthorProps) => (
  <>
    <Image
      src={avatarUrl}
      width="30"
      height="30"
      alt={name}
      placeholder="blur"
    />
    <p className="inline align-middle text-accent ml-2 text-sm md:text-lg">
      {name}
    </p>
  </>
);
