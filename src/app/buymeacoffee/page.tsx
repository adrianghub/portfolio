import { OneFourthLayout, Sidebar } from 'core/components';
import CoffeeForm from 'modules/buymeacoffee/components/CoffeeForm';

const BuyMeACoffeePage = () => {
  return (
    <OneFourthLayout
      title={'Caffè latte donation ;)'}
      childrenLeft={
        <div className="text-center sm:text-left">
          <CoffeeForm />
        </div>
      }
      childrenRight={<Sidebar />}
    />
  );
};

export default BuyMeACoffeePage;
