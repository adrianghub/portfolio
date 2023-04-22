import { LINKEDIN_URL } from '@/shared/data';
import Link from 'next/link';

interface Experience {
  id: string;
  company: string;
  position: string;
  website: string;
  startDate: string;
  endDate: string;
  typeOfEmployment: string;
  summary: string;
  skills: string[];
}

export const ExperienceList = ({
  experiences
}: {
  experiences: Experience[];
}) => (
  <div className="pb-8">
    <div className="mx-auto">
      <h2 className="prose-2xl font-semibold mb-4 dark:text-white">
        Recent Experience
      </h2>
      <p className="prose dark:text-white">
        Full list is available on my{' '}
        <Link
          className="animated-link !underline hover:font-bold"
          href={LINKEDIN_URL}
          target="_blank"
          rel="norefferer"
        >
          LinkedIn
        </Link>{' '}
        profile
      </p>
      {experiences.map((item) => (
        <ExperienceCard key={item.id} experience={item} />
      ))}
    </div>
  </div>
);

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const {
    company,
    position,
    website,
    startDate,
    endDate,
    typeOfEmployment,
    summary,
    skills
  } = experience;

  return (
    <div className="mx-auto my-8 rounded-lg shadow-md overflow-hidden">
      <div className="bg-gray-200 px-4 py-3 ">
        <h3 className="text-lg font-semibold dark:text-black">{company}</h3>
        <p className="text-gray-600">{position}</p>
        <Link
          className="animated-link underline dark:text-black hover:font-bold"
          href={website}
          target="_blank"
          rel="norefferer"
        >
          Website
        </Link>
      </div>
      <div className="bg-white px-4 py-3">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <p className="text-gray-600">
            {startDate} - {endDate === 'current' ? 'Present' : endDate}
          </p>
          <p className="text-gray-600">{typeOfEmployment}</p>
        </div>
        <p className="text-gray-600">{summary}</p>
        <div className="flex flex-wrap mt-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="mr-2 mb-2 px-2 py-1 bg-gray-200 rounded-full text-gray-700 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
