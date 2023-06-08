interface SocialMediaDataProps {
  name: string;
  href: string;
  iconName?: string;
  lastIcon?: boolean;
}

export const LINKEDIN_URL = 'https://www.linkedin.com/in/adrian-zinko';
export const RESUME_URL =
  'https://azinko.s3.eu-central-1.amazonaws.com/CV_ADRIAN_ZINKO.pdf';

export const SOCIAL_MEDIA: SocialMediaDataProps[] = [
  {
    name: 'Github',
    href: 'https://github.com/adrianghub',
    iconName: 'RiGithubFill'
  },
  {
    name: 'LinkedIn',
    href: LINKEDIN_URL,
    iconName: 'RiLinkedinBoxLine'
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/AdrianZinko',
    iconName: 'RiTwitterLine'
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/_drianko',
    iconName: 'RiInstagramLine'
  },
  {
    name: 'Gmail',
    href: 'mailto:hello@adrianzinko.com',
    iconName: 'RiMailLine',
    lastIcon: true
  }
];

export const OPEN_GRAPH_IMAGES = {
  images: [
    'https://azinko.s3.eu-central-1.amazonaws.com/az-portfolio-design.png'
  ]
};
