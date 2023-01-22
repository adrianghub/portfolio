import { OneFourthLayout, Sidebar } from 'core/components';

const ResumePage = () => {
  return (
    <OneFourthLayout
      childrenLeft={
        <div className="text-center sm:text-left">(under construction)</div>
      }
      childrenRight={<Sidebar aboutWidget />}
    />
  );
};

export default ResumePage;
