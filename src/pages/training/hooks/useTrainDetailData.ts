import ACCTD from '@/assets/imgs/accounting_detail.png';
import APPIFD from '@/assets/imgs/applied_info_detail.png';
import ADSD from '@/assets/imgs/art_ds_detail.png';
import BUSID from '@/assets/imgs/busi_admin_detail.png';
import HOSD from '@/assets/imgs/hospi_manage_detail.png';
import INDUSD from '@/assets/imgs/industrial_detail.png';
import ITD from '@/assets/imgs/it_detail.png';
import MTKD from '@/assets/imgs/mtk_details.png';
import OFAD from '@/assets/imgs/office_admin_detail.png';
import { ProgTypeEnum } from '@/utils';

export const useTrainDetailData = (): { data: Array<DetailTrain> } => {
  const data: Array<DetailTrain> = [
    {
      program: 'IT & Office',
      progTitle: 'Applied Informatics',
      industryType: ProgTypeEnum.AppInfo,
      imgDetail: APPIFD,
      overview: {
        intro:
          'Applied Informatics is the use of computer technology to support and improve human life in many different fields. With the rapid development of technology today, applied informatics plays an important role in the growth and development of businesses.',
        objective:
          'The Applied Informatics program at Saigon Informatics Economics Intermediate School – IES College provides students with knowledge and practical skills in programming, website design, and application development.\nAfter graduation, students can design, build, maintain websites, develop software applications, manage databases, and administer computer networks for businesses.',
        decs: 'Graduates of Applied Informatics can work as technical staff responsible for operating and managing IT systems in:\n- Software and web development companies\n- IT consulting and network solution companies\n- Computer maintenance and distribution businesses\n- Organizations such as schools, banks, factories, and other enterprises using IT systems',
        career:
          'After graduating, students can work as:\n- IT technicians in organizations\n- Computer instructors at training centers or schools\n- Website designers and developers\n- Employees at computer supply companies\n- Network administrators for businesses\n- Graphic designers or image editors\n- Technicians in computer or hardware manufacturing companies.',
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
      program: 'IT & Office',
      progTitle: 'Information Technology',
      industryType: ProgTypeEnum.IT,
      imgDetail: ITD,
      overview: {
        intro:
          'Information Technology (IT) plays a crucial role in promoting the development of modern society. IT not only contributes significantly to economic growth but also profoundly changes the way wealth is created, as well as human lifestyles and thinking. The application of IT in automating production and business is an inevitable trend, always emphasized due to its great importance in all economic and social fields, especially in the context of the Fourth Industrial Revolution (Industry 4.0) which is impacting the entire world today.',

        objective:
          'Students are equipped with professional knowledge and the ability to program computers, analyze and design software, and build and manage IT systems.\nAfter completing the program, students are able to program, design, build, and maintain websites, as well as develop applications for businesses and companies. In addition, students can operate, upgrade, and develop software applications for organizations, exploit and maintain database systems, and use and administer enterprise computer networks.\nThe program also provides learners with in-depth expertise, professional skills, and ethical qualities to develop and apply technology in real-world contexts, meet the needs of society, and continuously self-learn and adapt to the rapid changes of the industry.',

        decs: 'Fundamental knowledge such as Programming, Data Structures and Algorithms, Operating Systems, and Computer Networks.\nSpecialized knowledge depending on the field such as Software Development, Artificial Intelligence, Cybersecurity, and Cloud Computing.\nSoft skills such as teamwork, logical thinking, and self-learning ability to adapt to the rapid changes of the industry.',

        career:
          'After graduation, students can work in the following positions:\n- IT project administration staff.\n- IT staff.\n- IT system engineers.\n- Application software transfer technicians.\n- Software systems and database administration technicians.\n- Computer assembly, installation, and maintenance technicians.\n- Network administration technicians in enterprises.\n- Website design and administration technicians.\n- Graphic design and advertising design technicians.\n- Office staff, human resources staff, training department staff, etc.\n- IT technicians in government agencies, organizations, enterprises, and schools.',
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
      program: 'IT & Office',
      progTitle: 'Industrial & Residential Electrical',
      industryType: ProgTypeEnum.Indus,
      imgDetail: INDUSD,
      overview: {
        intro:
          'Industrial and Residential Electrical Engineering at the intermediate level is a field that involves work in both civil and industrial sectors such as: repairing electrical and electronic equipment; designing, programming, installing, inspecting, operating, maintaining, servicing, and repairing electrical, electronic, and automation systems in accordance with technical requirements and safety standards, meeting Level 4 requirements in the Vietnam National Qualifications Framework.',

        objective:
          'Understand and master the principles, structure, features, and functions of various electrical devices, as well as basic concepts and conventions used in the field of industrial and residential electrical engineering.\nProfessionals in this field will directly participate in: installing electrical and electronic equipment; designing and assembling electronic circuits; repairing electrical and electronic devices; designing, constructing, operating, and maintaining power supply systems, residential and industrial electrical systems; operating, maintaining, and repairing industrial automation control systems; consulting, supervising, and managing projects in the electrical and electronics field; and trading electrical and electronic equipment.\nEquip learners with skills in reading technical drawings, installation, operation, maintenance, teamwork, and especially the ability to assign and manage tasks for subordinates.',

        decs: 'Provide knowledge and skills in installing, repairing, and operating residential and industrial electrical systems; including electrical engineering, electrical apparatus, electrical machines, power systems, power electronics, automation control, PLC, and electrical safety principles.\nMaster basic concepts, laws, and theorems in DC, AC, and three-phase electrical circuits.\nPractice installing residential electrical systems, electrical cabinets, power networks, and lighting systems for both residential and industrial applications.',

        career:
          'After graduation, students can work in the following positions:\n- Electrical equipment installation technicians.\n- Electronic equipment assembly technicians.\n- Electrical equipment repair technicians.\n- Electronic equipment repair technicians.\n- Construction and operation staff for power distribution systems.\n- Electronic circuit assembly technicians.\n- Industrial automation control system operators.\n- Construction and operation staff for residential and industrial electrical systems.\n- Business and sales of electrical and electronic equipment.',
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
      program: 'Hospitality & Services',
      progTitle: 'Office Administration',
      industryType: ProgTypeEnum.Office,
      imgDetail: OFAD,
      overview: {
        intro:
          'An office secretary is responsible for tasks related to general management and administration within an office. They also handle paperwork, administrative and human resource duties, documents, records, meetings, and reception of guests. Today, office secretary has become a common profession in society, playing a vital role in the management and operation of businesses.',

        objective:
          'The Office Administration program trains students to proficiently use office equipment and office software to perform administrative tasks in enterprises; to effectively handle office operations within organizations; and to acquire fundamental knowledge of administrative management.\nStudents learn how to demonstrate a professional working style, create a positive impression, build trust, and enhance persuasion in workplace relationships. They understand the principles of effective communication and essential skills in welcoming guests and handling tasks for visitors at the workplace. In addition to general and specialized knowledge and skills, the program also equips learners with professional ethics, responsibility, discipline, and a professional working style. Students also develop communication, media, and teamwork skills.',

        decs: 'Document drafting.\nAdministrative English communication.\nClerical operations, archiving nghiệp vụ, and secretarial nghiệp vụ.\nOffice management and use of office equipment, administrative management.\nCommunication skills and psychology.\nGeneral management and public office management.',

        career:
          'After graduation, students are fully capable of taking on the following positions:\nWorking in office departments of government agencies, social organizations, and enterprises.\nManagers and supervisors of office staff or departments (Chief of Office, Deputy Chief of Office; Head/Deputy Head of Administration Department).\nOffice secretaries, serving as administrative assistants to leaders and managers.\nPersonnel responsible for managing clerical and archival work in agencies, organizations, and enterprises.\nSpecialized clerical and archival staff in agencies, organizations, and enterprises.\nClerical and office staff in schools, People’s Committees, and other public institutions.',
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
      program: 'Hospitality & Services',
      progTitle: 'Hospitality Management',
      industryType: ProgTypeEnum.Hospi,
      imgDetail: HOSD,
      overview: {
        intro:
          'Hotel Management and Business is a field that specializes in training and providing knowledge related to managing and organizing activities in restaurants and hotels.\n\nHotel management and business involves the comprehensive management of all operations of a hotel or accommodation facility, including front office, housekeeping, food and beverage services, marketing, financial management, and human resource management, with the goal of delivering a comfortable experience and meeting customer needs while ensuring business efficiency and maximizing profits.',

        objective:
          'General objectives:\nThe high-quality Hotel Management and Business program aims to train managers in the fields of business and economics, specializing in restaurant and hotel operations. Students are equipped with knowledge along with fundamental and advanced competencies in problem-solving and decision-making methods, management techniques, and professional skills in business in particular and economics in general. Students are also trained in professional ethics and business conduct.\n\nThe program is practice-oriented, enabling students to effectively apply theory to real-world tasks in organizing and managing business activities in the hotel and restaurant industry, becoming experts in restaurant management, hotel management, or working in tourism companies.\n\nSpecific objectives:\nKnowledge:\nProvide knowledge and professional skills in the hotel and restaurant field such as room management, staff management, customer communication, event preparation, risk handling, understanding of wines and commonly used foods in hotels, multicultural knowledge, accommodation laws, etc.\nSkills:\nStudents are capable of performing professional tasks in front office management, room division management, food and beverage management, human resource management, resort management, marketing in hotels and restaurants, culinary culture, and handling real-life situations and incidents in hotel operations.\nAutonomy and responsibility:\nPossess social responsibility and business ethics; strictly comply with state laws; demonstrate a progressive attitude, seriousness, honesty, and a cooperative spirit in work, study, and research.\nBe equipped with fundamental and modern knowledge of culture, society, and humanities; possess in-depth knowledge of management and business administration in tourism and hotel services; and have knowledge of business development and personal development planning.',

        decs: 'General subjects:\nPolitical education; Law; Physical education; National defense education; Informatics; Basic English\n\nBasic modules:\nSoft skills\nOverview of tourism and hospitality\nDecoration practice\nNutrition in cuisine\nHotel business law\nHotel business management\nHotel English\n\nSpecialized modules:\nIT applications in hotels\nHotel security operations\nRoom setup\nFront office operations\nFood preparation\nRestaurant service\nBeverage preparation and service\nBusiness and marketing\nQuality management in hotels\nGraduation internship',

        career:
          'Career opportunities after studying Hotel Management:\nEvery year, our country welcomes millions of international tourists. In addition, domestic demand for travel and leisure is increasing. This creates favorable conditions for the rapid development of the restaurant and hotel industry. Many hotels and restaurants are established annually to meet market demand.\n\nAfter graduation, students can take on positions such as:\n- Managers or specialists in front office, housekeeping, food and beverage, kitchen, banquet and conference, human resources, finance and accounting, business and marketing, administration, and personnel departments at resorts, hotels, and tourist areas.\n- Executives, marketing staff, human resources, and finance staff at tourism research and business organizations domestically and internationally.\n- Teaching and research in hospitality at colleges and universities.\n\nMain responsibilities of hotel management professionals:\n- Plan, direct, and coordinate departments such as front office, service, kitchen, accounting, etc.\n- Assign tasks, coordinate resources, and initiate business plans and market development strategies.\n- Implement human resource development programs.\n- Control budgets and operational expenses.\n- Ensure compliance with government regulations related to hotel operations.\n- Direct branding and promotion activities through advertising, PR, and other channels.',
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
      program: 'Business & Management',
      progTitle: 'Marketing',
      industryType: ProgTypeEnum.Mkt,
      imgDetail: MTKD,
      overview: {
        intro:
          'What will students learn in the intermediate-level Marketing program? What career opportunities are available after graduation? Is it possible to pursue higher education? Let’s explore the Marketing program at IES.\n\nWith various definitions, Marketing is generally understood as all activities that bring products or services from producers to consumers. These activities include market research, understanding customer needs, developing products or services, promotion, and distribution, with the goals of meeting customer needs, attracting and retaining customers, and achieving business objectives.',

        objective:
          '1. General objectives:\nThe intermediate-level Marketing training program is designed to educate professionals with strong ethics and professional responsibility, a cooperative attitude with colleagues, respect for laws and workplace regulations, and good health to support employment opportunities and further learning, meeting the needs of socio-economic development.\n\nThe program includes fundamental knowledge of Marketing, Sales and Sales Management, Strategic Management, as well as business operations, economics, and economic law.\n\nAfter graduation, students can work in business and marketing departments of production, commercial, and service enterprises, as well as market research organizations, performing tasks such as market research, customer analysis, marketing planning, distribution planning and execution, brand development, pricing, advertising, promotion, sales, and customer service.\n\nThis program ensures articulation with bachelor-level programs in Business Administration, Marketing, and related economic fields.\n\n2. Specific objectives:\na. Knowledge:\nFundamental professional knowledge in economics, management, marketing, and sales.\nAchieve a basic level of English proficiency, communication skills, and adaptability to integration in the global economy and society.\nb. Skills:\nCustomer communication and negotiation skills.\nHuman resource and financial management skills.\nProduct promotion skills.\nc. Attitude:\nStudents are trained to develop qualities such as self-discipline, high responsibility, perseverance, good communication skills, and the ability to work independently.',

        decs: 'Basic knowledge of Marketing principles; Statistics fundamentals; Economic law.\nSpecialized knowledge: Digital Marketing, E-commerce, Service Marketing, International Marketing, E-Marketing.\nSoft skills, foreign languages, and IT skills; management skills; psychology.\nPractical internship: Students intern at enterprises, advertising companies, and agencies.',

        career:
          'After graduation, students can work at:\nEnterprises of various types such as joint ventures, partnerships, limited liability companies, corporations, and multinational companies.\nAdvertising agencies.\nMedia agencies.\nMarket research agencies.\n\nMarketing graduates are capable of taking on positions from specialists to managerial roles, with competitiveness in positions such as:\nMarketing specialists in companies operating in the Marketing field.\nMarket research specialists.\nCustomer service and public relations specialists.\nBrand development and management specialists.',
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
      program: 'Business & Management',
      progTitle: 'Business Administration',
      industryType: ProgTypeEnum.Business,
      imgDetail: BUSID,
      overview: {
        intro:
          'Business Management is the process of working with and through individuals, groups, and other resources (equipment, capital, technology) to achieve the goals of an enterprise. It is a highly important role that requires personnel with professional expertise, strong problem-solving abilities, and effective interpersonal skills.',

        objective:
          'The Business Management program at HEUCollege – Intermediate College of Technology and Foreign Economics is designed for individuals who want to gain knowledge and skills in business management. Students are provided with both basic and advanced knowledge in organizing and managing business operations, human resource management, and essential soft skills. Businesses require specialists with management expertise to perform complex and challenging tasks in a globalized work environment.\n\nAfter graduation, students are capable of building relationships with clients and executing business contracts; establishing and running enterprises; controlling financial performance, budgeting, and evaluating investment projects in the context of economic integration.\n\nThe program is designed with practical exercises for each course. The school provides opportunities for students to learn and practice through HEU’s cooperative projects with enterprises.',

        decs: 'Students are equipped with knowledge in business administration, sales management, human resource management, financial management, production management, and logistics.\nStudents can apply specialized theories in practice, analyze and process information to forecast market trends and support management operations.\nSpecialized English knowledge.\nPractical management experience from CEOs and directors of domestic and international companies.\nStudents acquire appropriate knowledge and skills, can work independently and in teams, communicate effectively in work, study, and research, possess professional ethics, community awareness, industrial conduct, scientific thinking, self-learning, and research skills to continuously improve their competence.',

        career:
          'After graduation, students are qualified for positions such as:\n- Business staff\n- Project evaluation staff\n- Marketing and PR specialists\n- Financial management specialists',
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
      program: 'Computer-Aided Design',
      progTitle: 'Computer-Aided Design',
      industryType: ProgTypeEnum.CompuDs,
      imgDetail: ADSD,
      overview: {
        intro:
          'The intermediate-level program in Computer-Aided Art and Design (CAAD) is designed to train technicians with professional ethics, cooperation skills, respect for laws and workplace regulations, and good health to support employment and further learning, meeting socio-economic development needs.\n\nThe program focuses on software, hardware, and mathematical tools used to display and present two-dimensional or three-dimensional objects on computer screens. It prepares students with knowledge and skills in computer-aided artistic design.',

        objective:
          'The CAAD program at IES College provides students with knowledge of software, hardware, and mathematical tools used to present 2D and 3D objects on screens. The curriculum equips students with skills in computer-aided art and design.\n\nThe program covers software and graphic systems, digital multimedia, graphic design, graphic tools, computer networks and the Internet, web design, processors and standards, attributes and transformations, projections, surface recognition, converting sketches to 3D models, color theory and applications, geometry and relevant algorithms, foreign languages, physical education, politics, law, and national defense-security.',

        decs: 'Knowledge:\n- Basic IT knowledge\n- Fundamental knowledge of graphics and computer graphics\n- Basic understanding of Fine Arts, Aesthetics, and Technical Drawing\n- Basic knowledge of multimedia data and technology such as image, audio, video, and animation processing\n- Basic knowledge of electronic publishing\n\nSkills:\n- Assemble, connect, and operate computer systems and peripheral devices\n- Install and use graphic design software such as Photoshop, CorelDRAW, Illustrator, Adobe InDesign, 3D Max, Dreamweaver, AutoCAD, Flash, Quark, etc.\n- Communicate with clients, understand their needs, and create products according to requirements\n- Utilize the Internet and research materials in Vietnamese or English for work purposes\n- Select appropriate software, media, and materials to create products\n- Design and complete graphic products such as advertising posters, product labels, templates for books and magazines\n- Create 2D animations, shoot and edit photos and videos, restore moderately complex images\n- Design web banners\n- Work independently and generate work according to market demand\n- Continuously improve professional skills or pursue higher-level studies',

        career:
          'After graduation, IES College students can work in companies and enterprises applying IT to art and graphics, such as advertising companies and web design firms, in positions such as:\n- Creative and design specialists in enterprises; design staff for design companies or studios\n- Develop design brands on computer networks\n- Technical staff and quality management in graphic design units',
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
      program: 'Business & Management',
      progTitle: 'Accounting',
      industryType: ProgTypeEnum.Accounting,
      imgDetail: ACCTD,
      overview: {
        intro:
          'Corporate Accounting is an essential department in all organizations, companies, and enterprises. Any business requires personnel to analyze finances, monitor income and expenses, and manage value-added taxes. Therefore, the role of corporate accountants is more important than ever, holding significant influence within companies, making accounting indispensable.',

        objective:
          'The Corporate Accounting program at IES College aims to train accountants with solid professional expertise and proficient use of supporting tools to meet the development needs of enterprises.\n\nStudents are equipped with fundamental professional knowledge of accounting practices applicable to government management agencies, administrative units, and enterprises. They are prepared to apply this knowledge in practice, pursue self-learning, and improve their skills while understanding state policies, regulations, and laws.\n\nWith the principle of “Practical Learning – Practical Work,” IES provides a teaching method that allows students to immediately apply their learning in real-world contexts.\n\nThe program includes practical exercises for each course. The school facilitates students’ learning and practice through cooperative projects between IES College and enterprises.',

        decs: 'Accounting of transactions and operations arising in small and medium enterprises:\n- Production and trading companies\n- Commercial and service enterprises\n\nKnowledge related to corporate finance and taxation.\nSoft skills and foreign languages: communication skills, presentation skills, teamwork, problem-solving skills during work, and English for communication.',

        career:
          'After graduation, students can competently work in positions such as:\n- General accountants or management accountants in small and medium enterprises\n- Accountants in specific areas such as payroll, fixed assets, supplies, payments, taxes, and receivables\n- Office accountants\n- Financial report analysts\n- Corporate financial management specialists',
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

export type OvwDetail = {
  intro: string;
  objective: string;
  decs: string;
  career: string;
};
export type AdmissInfo = {
  require: string;
  method: string;
};

export type TuiApply = {
  requirement: string;
  document: string;
  work: string;
};

export type DetailTrain = {
  program: string;
  progTitle: string;
  imgDetail: string;
  industryType: ProgTypeEnum;
  overview: OvwDetail;
  info: AdmissInfo;
  apply: TuiApply;
};
