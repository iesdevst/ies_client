import ACCOUNTING from '@/assets/imgs/accouting_cardi.png';
import APIINFO from '@/assets/imgs/apiinfo_cardi.png';
import BUSIAD from '@/assets/imgs/busiad_cardi.png';
import DESIGN from '@/assets/imgs/design_cardi.png';
import HOSIM from '@/assets/imgs/hosim_cardi.png';
import HTM from '@/assets/imgs/htm_cardi.png';
import INDUS from '@/assets/imgs/induss_cardi.png';
import IT from '@/assets/imgs/it_cardi.png';
import MKT from '@/assets/imgs/mtk_cardi.png';

export const useTrainingData = (): { data: Array<Program> } => {
  const data: Array<Program> = [
    {
      slug: 'it-office',
      title: 'IT & Office',
      trainings: [
        {
          train: 'Applied Informatics',
          desc: 'Applied informatics refers to the use of computer technology to effectively support human life in various fields. Today, with the rapid development of technology, applied informatics increasingly plays a vital role and directly influences the growth and development of businesses.',
          trainPic: APIINFO,
        },
        {
          train: 'Information Technology',
          desc: "Information technology plays a key role in modern society. It supports economic growth and changes how wealth is created, as well as people's lifestyles and ways of thinking. Using IT to automate production and business has become a major trend in the Fourth Industrial Revolution.",
          trainPic: IT,
        },
        {
          train: 'Industrial & Residential Electrical',
          desc: 'Industrial and residential electrical engineering at the intermediate level is a field that involves performing tasks in both civil and industrial sectors such as repairing electrical and electronic equipment; designing, programming, installing, testing, operating, maintaining, servicing, and repairing electrical, electronic, and automation systems, meeting technical standards and ensuring safety requirements, corresponding to level 4 of the Vietnam National Qualifications Framework.',
          trainPic: INDUS,
        },
      ],
    },
    {
      slug: 'busiMana',
      title: 'Business & Management',
      trainings: [
        {
          train: 'Business Administration',
          desc: 'Business management is the process of working with and through individuals, groups, and other resources such as equipment, capital, and technology to achieve the goals of an enterprise. This is a very important position that requires personnel with high professional expertise, good problem-solving abilities, and skillful communication and behavior.',
          trainPic: HOSIM,
        },
        {
          train: 'Marketing',
          desc: 'The intermediate-level Marketing program helps students understand the basic knowledge and activities involved in bringing products or services from producers to consumers, including market research, understanding customer needs, product development, promotion, and distribution. The program also introduces career opportunities and further study pathways after graduation.',
          trainPic: MKT,
        },
        {
          train: 'Accounting',
          desc: 'Enterprise accounting is an essential part of all companies, organizations, and institutions. Every business needs someone to analyze financial activities, manage revenues and expenses, and handle value-added tax and other financial matters. Therefore, enterprise accountants play an important role and hold an influential position, making accounting a necessary function in every company.',
          trainPic: ACCOUNTING,
        },
      ],
    },
    {
      slug: 'hospitality',
      title: 'Hospitality & Services',
      trainings: [
        {
          train: 'Hospitality Management',
          desc: 'Hotel Management and Business is a field that provides knowledge related to managing and organizing the operations of hotels and hospitality services. It involves overseeing activities such as front desk services, housekeeping, restaurant services, marketing, financial management, and human resources to ensure customer satisfaction while maintaining effective business operations and maximizing profits.',
          trainPic: HTM,
        },
        {
          train: 'Office Administration',
          desc: 'An office secretary is responsible for tasks related to general management and administration in the office. The job also includes handling documents, administrative and personnel duties, records, paperwork, meetings, and receiving guests. Today, office secretary has become a common profession that plays an important role in the operation and management of businesses.',
          trainPic: BUSIAD,
        },
      ],
    },
    {
      slug: 'design',
      title: 'Design & Creativity',
      trainings: [
        {
          train: 'Computer-Aided Design',
          desc: 'The intermediate program in Computer-Aided Artistic Design trains students to use computer software and tools for graphic and artistic design. Students learn graphic design, multimedia, web design, and basic IT applications, and can work in advertising, graphic design, or web design fields after graduation successfully.',
          trainPic: DESIGN,
        },
      ],
    },
  ];

  return { data };
};

export type Training = {
  train: string;
  desc: string;
  trainPic: string;
};

export type Program = {
  slug: string;
  title: string;
  trainings: Array<Training>;
};
