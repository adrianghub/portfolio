import Image from 'next/image';

interface PostAuthorProps {
  name: string;
  avatarUrl: string;
}

export const PostAuthor = ({ name, avatarUrl }: PostAuthorProps) => (
  <>
    <Image
      unoptimized
      loader={({ src }) => src}
      src={avatarUrl}
      width="30px"
      height="30px"
      alt={name}
    />
    <p className="inline align-middle text-gray-700 ml-2 text-sm md:text-lg">
      {name}
    </p>
  </>
);