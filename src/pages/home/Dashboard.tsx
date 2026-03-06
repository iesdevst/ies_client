import CareerGuid from './components/CareerGuid';
import ContactKey from './components/ContactKey';
import FieldOfStudy from './components/FieldOfStudy';
import InternCollab from './components/InternCollab';
import NewAndEvent from './components/NewAndEvent';
import PartnerSl from './components/PartnerSl';
import SlideCusIes from './components/SlideCusIes';
import StuComment from './components/StuComment';
import TrainingSl from './components/TrainingSl';
import TrainPro from './components/TrainPro';
import VaM from './components/VaM';
import VidPrIes from './components/VidPrIes';

const Dashboard: React.FC = () => {
  return (
    <>
      <SlideCusIes />
      <VidPrIes />
      <TrainingSl />
      <NewAndEvent />
      <FieldOfStudy />
      <TrainPro />
      <InternCollab />
      <PartnerSl />
      <StuComment />
      <CareerGuid />
      <VaM />
      <ContactKey />
    </>
  );
};

export default Dashboard;
