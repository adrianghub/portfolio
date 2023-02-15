interface SocialMediaDataProps {
  name: string;
  href: string;
  iconName?: string;
  lastIcon?: boolean;
}

export const SOCIAL_MEDIA: SocialMediaDataProps[] = [
  {
    name: 'Github',
    href: 'https://github.com/adrianghub',
    iconName: 'RiGithubFill'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/adrian-zinko',
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
