import { OneFourthLayout, Sidebar } from '@/core/components';
import CoffeeForm from '@/modules/buymeacoffee/components/CoffeeForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BuyMeACoffee | Developer Portfolio | Adrian Zinko',
};

const BuyMeACoffeePage = () => {
  return (
    <OneFourthLayout
      title={'Buy me a coffee'}
      headingClasses={'mb-16'}
      childrenLeft={<CoffeeForm />}
      childrenRight={<Sidebar aboutWidget />}
    />
  );
};

export default BuyMeACoffeePage;
