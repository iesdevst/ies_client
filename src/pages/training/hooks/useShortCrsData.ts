import ASC from '@/assets/imgs/ai_app_sc.png';
import BSC from '@/assets/imgs/baking_sc.png';
import CSC from '@/assets/imgs/cooking_pro_sc.png';
import MSC from '@/assets/imgs/mixology_sc.png';
import { ShortCrsTypeEnum } from '@/utils';

export const useShortCrsData = (): { data: Array<DetailShortCrs> } => {
  const data: Array<DetailShortCrs> = [
    {
      shortCrsTit: 'Beverage Preparation',
      shortCrsType: ShortCrsTypeEnum.Mixology,
      imgDetail: MSC,
      overview: {
        intro:
          'Beverage preparation is the art and science of creating drinks, including coffee, tea, cocktails, and other beverages, to meet both taste and aesthetic standards. In today’s fast-growing hospitality and food service industry, skilled beverage professionals play a vital role in enhancing customer experience and business success.',
        objective:
          'The Beverage Preparation program at Saigon Informatics Economics Intermediate School – IES College equips students with both theoretical knowledge and practical skills in drink making, bartending, coffee art, and beverage presentation.\nAfter completing the program, students can professionally prepare a wide range of beverages, create unique drink recipes, manage beverage stations, and provide high-quality service in cafes, restaurants, hotels, and other hospitality establishments.',
        decs: 'Graduates of the Beverage Preparation program can work as professional staff in:\n- Cafes and coffee shops\n- Restaurants and bars\n- Hotels and resorts\n- Catering services and event management companies\n- Beverage product companies and distributors',
        career:
          'After graduation, students can pursue careers as:\n- Bartenders and mixologists\n- Coffee and tea specialists\n- Beverage station managers\n- Baristas in cafes and coffee chains\n- Beverage trainers or instructors\n- Product consultants for beverage companies\n- Event beverage coordinators and catering staff',
      },

      info: {
        require:
          'Graduated from Lower Secondary School (THCS).\n Completed the High School (THPT) program or equivalent.\n Full-time students currently studying at Intermediate Schools, Colleges, or Universities.',
        method:
          'Admission is based on Lower Secondary School academic transcripts (THCS).\nNo entrance examination required.',
      },
      apply: {
        requirement:
          'With the goal of creating opportunities for all students to study, Saigon Informatics Economics Intermediate School – IES College offers reasonable tuition fees suitable for most students today:\n\nFor students who graduated from Lower Secondary School (THCS):\n\n- General education tuition: 450,000 VND/month\n- Major tuition: 1,992,000 VND/month (The school supports procedures for students to receive a 100% tuition subsidy for the major from the local Department of Labor, Invalids and Social Affairs.)\n\nFor students who have completed High School (THPT) or higher:\n\n- Major tuition: 1,992,000 VND/month',
        document:
          "Application form for admission (according to the school's template)\n Lower Secondary School Graduation Certificate or temporary graduation certificate (original and 2 notarized copies)\n Lower Secondary School academic transcript (original and 2 notarized copies)\n Citizen identification Card (2 notarized copies)\n Birth certificate (1 notarized copy) Photos size 3*4 and 4*6 (6 photos each, taken within the last 6 months; full name, date of birth, and address written on the back)",
        work: 'Application submission address:\n\nNo. 98 Pham Van Chieu Street, Ward Thong Tay Hoi, Ho Chi Minh City.\n\nWorking hours:\n\nFrom Monday to Saturday morning\n\n- Morning: 8:00 AM – 12:00 PM\n- Afternoon: 1:00 PM – 5:00 PM',
      },
    },

    {
      shortCrsTit: 'Professional Cooking',
      shortCrsType: ShortCrsTypeEnum.Cooking,
      imgDetail: CSC,
      overview: {
        intro:
          'Cooking is both an art and a science, combining creativity, technique, and knowledge of ingredients to prepare meals that are nutritious, flavorful, and visually appealing. Skilled cooks are essential in the culinary and hospitality industry, contributing to customer satisfaction and the success of food service businesses.',
        objective:
          'The Cooking program at Saigon Informatics Economics Intermediate School – IES College provides students with comprehensive knowledge and practical skills in food preparation, kitchen management, and culinary techniques.\nAfter completing the program, students can plan menus, prepare dishes across various cuisines, maintain hygiene standards, and efficiently manage kitchen operations in professional environments.',
        decs: 'Graduates of the Cooking program can work in:\n- Restaurants and hotels\n- Catering and banquet services\n- Cafes, bistros, and coffee shops with food services\n- Culinary schools and cooking workshops\n- Food production and processing companies',
        career:
          'After graduation, students can pursue careers as:\n- Professional chefs and cooks\n- Sous chefs or kitchen assistants\n- Pastry and dessert specialists\n- Kitchen supervisors or managers\n- Culinary instructors or trainers\n- Food product developers or testers\n- Caterers for events and private functions',
      },

      info: {
        require:
          'Graduated from Lower Secondary School (THCS).\n Completed the High School (THPT) program or equivalent.\n Full-time students currently studying at Intermediate Schools, Colleges, or Universities.',
        method:
          'Admission is based on Lower Secondary School academic transcripts (THCS).\nNo entrance examination required.',
      },
      apply: {
        requirement:
          'With the goal of creating opportunities for all students to study, Saigon Informatics Economics Intermediate School – IES College offers reasonable tuition fees suitable for most students today:\n\nFor students who graduated from Lower Secondary School (THCS):\n\n- General education tuition: 450,000 VND/month\n- Major tuition: 1,992,000 VND/month (The school supports procedures for students to receive a 100% tuition subsidy for the major from the local Department of Labor, Invalids and Social Affairs.)\n\nFor students who have completed High School (THPT) or higher:\n\n- Major tuition: 1,992,000 VND/month',
        document:
          "Application form for admission (according to the school's template)\n Lower Secondary School Graduation Certificate or temporary graduation certificate (original and 2 notarized copies)\n Lower Secondary School academic transcript (original and 2 notarized copies)\n Citizen identification Card (2 notarized copies)\n Birth certificate (1 notarized copy) Photos size 3*4 and 4*6 (6 photos each, taken within the last 6 months; full name, date of birth, and address written on the back)",
        work: 'Application submission address:\n\nNo. 98 Pham Van Chieu Street, Ward Thong Tay Hoi, Ho Chi Minh City.\n\nWorking hours:\n\nFrom Monday to Saturday morning\n\n- Morning: 8:00 AM – 12:00 PM\n- Afternoon: 1:00 PM – 5:00 PM',
      },
    },

    {
      shortCrsTit: 'Baking',
      shortCrsType: ShortCrsTypeEnum.Baking,
      imgDetail: BSC,
      overview: {
        intro:
          'Baking is the art and science of creating bread, pastries, cakes, and other baked goods. It combines precise techniques, creativity, and understanding of ingredients. Skilled bakers are highly valued in bakeries, cafes, hotels, and the culinary industry for producing high-quality, delicious products.',
        objective:
          'The Baking program at Saigon Informatics Economics Intermediate School – IES College equips students with both theoretical knowledge and practical skills in baking techniques, recipe development, decorating, and bakery management.\nAfter completing the program, students can produce a variety of baked goods, design creative desserts, manage bakery operations, and maintain high standards of hygiene and quality.',
        decs: 'Graduates of the Baking program can work in:\n- Bakeries and patisseries\n- Cafes and coffee shops with dessert services\n- Hotels and resorts\n- Catering and event management companies\n- Food production and confectionery companies',
        career:
          'After graduation, students can pursue careers as:\n- Professional bakers and pastry chefs\n- Dessert and cake decorators\n- Bakery managers or supervisors\n- Culinary instructors specializing in baking\n- Product developers in confectionery or bakery companies\n- Caterers specializing in desserts and baked goods',
      },

      info: {
        require:
          'Graduated from Lower Secondary School (THCS).\n Completed the High School (THPT) program or equivalent.\n Full-time students currently studying at Intermediate Schools, Colleges, or Universities.',
        method:
          'Admission is based on Lower Secondary School academic transcripts (THCS).\nNo entrance examination required.',
      },
      apply: {
        requirement:
          'With the goal of creating opportunities for all students to study, Saigon Informatics Economics Intermediate School – IES College offers reasonable tuition fees suitable for most students today:\n\nFor students who graduated from Lower Secondary School (THCS):\n\n- General education tuition: 450,000 VND/month\n- Major tuition: 1,992,000 VND/month (The school supports procedures for students to receive a 100% tuition subsidy for the major from the local Department of Labor, Invalids and Social Affairs.)\n\nFor students who have completed High School (THPT) or higher:\n\n- Major tuition: 1,992,000 VND/month',
        document:
          "Application form for admission (according to the school's template)\n Lower Secondary School Graduation Certificate or temporary graduation certificate (original and 2 notarized copies)\n Lower Secondary School academic transcript (original and 2 notarized copies)\n Citizen identification Card (2 notarized copies)\n Birth certificate (1 notarized copy) Photos size 3*4 and 4*6 (6 photos each, taken within the last 6 months; full name, date of birth, and address written on the back)",
        work: 'Application submission address:\n\nNo. 98 Pham Van Chieu Street, Ward Thong Tay Hoi, Ho Chi Minh City.\n\nWorking hours:\n\nFrom Monday to Saturday morning\n\n- Morning: 8:00 AM – 12:00 PM\n- Afternoon: 1:00 PM – 5:00 PM',
      },
    },

    {
      shortCrsTit: 'AI Applications',
      shortCrsType: ShortCrsTypeEnum.UsingAi,
      imgDetail: ASC,
      overview: {
        intro:
          'Using AI involves applying artificial intelligence technologies to solve problems, optimize processes, and enhance decision-making across industries. AI is transforming business, education, healthcare, and creative fields, making AI literacy an essential skill for the modern workforce.',
        objective:
          'The Using AI program at Saigon Informatics Economics Intermediate School – IES College provides students with foundational knowledge and practical skills in AI tools, machine learning concepts, data analysis, and automation.\nAfter completing the program, students can leverage AI applications to analyze data, automate tasks, develop AI-assisted solutions, and support digital transformation in various sectors.',
        decs: 'Graduates of the Using AI program can work in:\n- Technology and software development companies\n- Businesses implementing AI solutions for operations and marketing\n- Educational institutions and training centers\n- Research and development organizations\n- Startups and innovation labs focusing on AI applications',
        career:
          'After graduation, students can pursue careers as:\n- AI assistants and automation specialists\n- Data analysts using AI tools\n- AI solution consultants for businesses\n- AI trainers or instructors\n- Digital innovation specialists\n- AI project coordinators in research or startups',
      },

      info: {
        require:
          'Graduated from Lower Secondary School (THCS).\n Completed the High School (THPT) program or equivalent.\n Full-time students currently studying at Intermediate Schools, Colleges, or Universities.',
        method:
          'Admission is based on Lower Secondary School academic transcripts (THCS).\nNo entrance examination required.',
      },
      apply: {
        requirement:
          'With the goal of creating opportunities for all students to study, Saigon Informatics Economics Intermediate School – IES College offers reasonable tuition fees suitable for most students today:\n\nFor students who graduated from Lower Secondary School (THCS):\n\n- General education tuition: 450,000 VND/month\n- Major tuition: 1,992,000 VND/month (The school supports procedures for students to receive a 100% tuition subsidy for the major from the local Department of Labor, Invalids and Social Affairs.)\n\nFor students who have completed High School (THPT) or higher:\n\n- Major tuition: 1,992,000 VND/month',
        document:
          "Application form for admission (according to the school's template)\n Lower Secondary School Graduation Certificate or temporary graduation certificate (original and 2 notarized copies)\n Lower Secondary School academic transcript (original and 2 notarized copies)\n Citizen identification Card (2 notarized copies)\n Birth certificate (1 notarized copy) Photos size 3*4 and 4*6 (6 photos each, taken within the last 6 months; full name, date of birth, and address written on the back)",
        work: 'Application submission address:\n\nNo. 98 Pham Van Chieu Street, Ward Thong Tay Hoi, Ho Chi Minh City.\n\nWorking hours:\n\nFrom Monday to Saturday morning\n\n- Morning: 8:00 AM – 12:00 PM\n- Afternoon: 1:00 PM – 5:00 PM',
      },
    },
  ];
  return { data };
};

export type OvwScDetail = {
  intro: string;
  objective: string;
  decs: string;
  career: string;
};
export type AdmissScInfo = {
  require: string;
  method: string;
};

export type ScTuiApply = {
  requirement: string;
  document: string;
  work: string;
};

export type DetailShortCrs = {
  shortCrsTit: string;
  imgDetail: string;
  shortCrsType: ShortCrsTypeEnum;
  overview: OvwScDetail;
  info: AdmissScInfo;
  apply: ScTuiApply;
};
