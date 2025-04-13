import useFormStore from './store/useFormStore';
import pages from './pages'

const Router = () => {
  const currentStep = useFormStore(store => store.step)
  const CurrentPage = pages[currentStep - 1]

  return (
    <CurrentPage />
  );
};

export default Router;
