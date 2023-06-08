import { Metadata } from 'next';
import { OneFourthLayout, Sidebar } from '@/components';
import { ExperienceList } from '@/components/Experience';
import data from '../../content/data.json';

export const metadata: Metadata = {
  title: 'Resume | Developer Portfolio | Adrian Zinko',
};

const ResumePage = () => {
  return (
    <OneFourthLayout
      childrenLeft={<ExperienceList experiences={data.experiences} />}
      childrenRight={<Sidebar aboutWidget />}
    />
  );
};

export default ResumePage;
