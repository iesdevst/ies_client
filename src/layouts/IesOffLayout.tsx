import { Outlet } from 'react-router-dom';
import OffSidebar from './components/OffSidebar';
import ContactKey from '@/pages/home/components/ContactKey';

const TrainingLayout = () => {
  return (
    <section className=' min-h-screen'>
      <div className='flex'>
        <aside className='w-70 h-screen'>
          <OffSidebar />
        </aside>

        <main className='flex-1'>
          <Outlet />
        </main>
      </div>

      <ContactKey />
    </section>
  );
};

export default TrainingLayout;
