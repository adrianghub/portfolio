import { SOCIAL_MEDIA } from 'shared/data';
import * as RemixIcons from 'react-icons/ri';

const DynamicRemixIcon = ({
  name,
  classes
}: {
  name?: string;
  classes: string;
}) => {
  if (!name) {
    return null;
  }

  const IconComponent = RemixIcons[name as keyof typeof RemixIcons];

  return <IconComponent className={classes} />;
};

export const SocialMediaRow = () => (
  <div className="flex justify-center">
    {SOCIAL_MEDIA.map(({ name, href, iconName, lastIcon }) => (
      <a
        key={name}
        className="hover:text-gray-500 duration-200"
        href={href}
        target="_blank"
        rel="norefferer"
      >
        <DynamicRemixIcon
          name={iconName}
          classes={`social-icon ${!lastIcon ? 'mr-4' : ''}`}
        />
      </a>
    ))}
  </div>
);
