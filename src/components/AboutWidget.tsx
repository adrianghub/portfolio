import { SOCIAL_MEDIA } from 'data';
import * as RemixIcons from 'react-icons/ri';

const DynamicRemixIcon = ({
  name,
  additionalClasses
}: {
  name?: string;
  additionalClasses: string;
}) => {
  if (!name) {
    return null;
  }

  const IconComponent = RemixIcons[name as keyof typeof RemixIcons];

  return <IconComponent className={additionalClasses} />;
};

export const AboutWidget = () => (
  <div className="pt-4 pb-8">
    <h3 className="text-xl mb-8 font-semibold border-b border-gray-300 pb-4">
      About Me
    </h3>
    <p className="text-md pb-8">
      <span className="mr-1">
        I do some web stuff primarly using JS. Currently
      </span>
      <a
        className="animated-link"
        href="https://boldare.com"
        target="_blank"
        rel="norefferer"
      >
        @Boldare
      </a>
      . Moutains and cats lover. Check out my{' '}
      <a
        className="animated-link"
        target="_blank"
        rel="norefferer"
        href="/assets/resume.pdf"
      >
        resume
      </a>
      .
    </p>
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
            additionalClasses={`social-icon ${!lastIcon ? 'mr-4' : ''}`}
          />
        </a>
      ))}
    </div>
  </div>
);
