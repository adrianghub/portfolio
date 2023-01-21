import { OneFourthLayout } from 'core/components';
import { AboutWidget } from 'shared/components';

const ResumePage = () => {
  return (
    <OneFourthLayout
      childrenLeft={
        <div className="text-center sm:text-left">(under construction)</div>
      }
      childrenRight={<AboutWidget />}
    />
  );
};

export default ResumePage;
