import { OneFourthLayout, Sidebar } from 'core/components';

const seoData = {
  title: 'Buy me a coffee | Adrian Zinko',
  description: 'Buy me a coffee style page [under construction]'
};

const BuyMeACoffeePage = () => {
  return (
    <OneFourthLayout
      childrenLeft={
        <div className="text-center sm:text-left">(under construction)</div>
      }
      childrenRight={<Sidebar />}
    />
  );
};

export default BuyMeACoffeePage;
