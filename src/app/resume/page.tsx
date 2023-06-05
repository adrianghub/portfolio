import { OneFourthLayout, Sidebar } from '@/core/components';
import { ExperienceList } from '@/modules/resume/components/Experience';
import { Metadata } from 'next';
import data from '../../data.json';

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
