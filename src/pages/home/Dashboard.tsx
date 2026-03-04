import NewAndEvent from './components/NewAndEvent';
import SlideCusIes from './components/SlideCusIes';
import TrainingSl from './components/TrainingSl';
import VidPrIes from './components/VidPrIes';

const Dashboard: React.FC = () => {
  return (
    <>
      <SlideCusIes />
      <VidPrIes />
      <TrainingSl />
      <NewAndEvent />
    </>
  );
};

export default Dashboard;
