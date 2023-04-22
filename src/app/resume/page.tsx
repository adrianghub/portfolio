import { OneFourthLayout, Sidebar } from '@/core/components';
import { ExperienceList } from '@/modules/resume/components/Experience';
import data from '../../data.json';

const ResumePage = () => {
  return (
    <OneFourthLayout
      childrenLeft={<ExperienceList experiences={data.experiences} />}
      childrenRight={<Sidebar aboutWidget />}
    />
  );
};

export default ResumePage;
