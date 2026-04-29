import EVAI from '@/assets/imgs/events_ai.png';
import HDHN2204 from '@/assets/imgs/hdhn_n2204_event.jpg';
import MISA from '@/assets/imgs/top_str_misa.jpg';
import THTN from '@/assets/imgs/top_str_thtn.jpg';

export const useEventsData = (): { data: Array<EventsData> } => {
  const data: Array<EventsData> = [
    {
      id: '1',
      eventTit: 'HOẠT ĐỘNG HƯỚNG NGHIỆP - Kết nối học sinh',
      desc: `📌 HOẠT ĐỘNG HƯỚNG NGHIỆP NGÀY 22/04/2026\n
Ngày 22/04/2026, Trường Trung cấp Tin học Kinh tế Sài Gòn đã vinh dự được Trường THCS Trần Quang Khải tạo điều kiện tổ chức buổi gặp mặt và hướng nghiệp dành cho 15 lớp học sinh khối 9.\n\
Địa điểm: Số 641 đường Trần Thị Năm, KP 43, P. Trung Mỹ Tây, TP. HCM\n
Tại buổi sinh hoạt, các em học sinh đã được:\n
- Tìm hiểu về định hướng nghề nghiệp sau khi tốt nghiệp THCS\n
- Giới thiệu chương trình học song bằng – vừa học văn hóa vừa học nghề\n
- Đặc biệt, cơ hội học nghề miễn phí 100% theo Nghị định 238 của Nhà nước\n\n

Không chỉ cung cấp thông tin bổ ích, chương trình còn mang đến không khí sôi nổi với phần mini game giao lưu, nơi các em học sinh hào hứng tham gia và nhận được nhiều phần quà hấp dẫn 🎁\n
✨ Buổi gặp mặt đã diễn ra thành công tốt đẹp, góp phần giúp các em học sinh có thêm định hướng rõ ràng cho tương lai của mình.\n
Xin chân thành cảm ơn sự hỗ trợ và phối hợp từ Trường THCS Trần Quang Khải!\n
==========================================\n\n
🏫  Trường Trung Cấp Tin Học Kinh Tế Sài Gòn\n
👉 Địa chỉ: Số 98 Phạm Văn Chiêu, phường Thông Tây Hội, Thành phố Hồ Chí Minh\n
`,
      img: HDHN2204,
      linkTo: 'https://www.facebook.com/share/p/1G2274y9JM/',
    },
    {
      id: '2',
      eventTit: 'IES Workshop\nClaude Code - AI Agent',
      desc: `🎯 **Giới thiệu Workshop**\n
IES Workshop đặc biệt do anh Phạm Ngọc Hội chủ trì sẽ mang đến cho học sinh một cơ hội hiếm có để khám phá thế giới lập trình ứng dụng hiện đại bằng Claude Code – AI agent tiên tiến hỗ trợ lập trình thông minh.\n
Buổi workshop được thiết kế dành riêng cho học sinh muốn tìm hiểu cách tạo ứng dụng di động và web từ cơ bản đến nâng cao, mở rộng kỹ năng công nghệ trong thời đại số.\n\n

💻 **Nội dung Workshop**\n
- Giới thiệu tổng quan về Claude Code và cách AI agent hỗ trợ lập trình.\n
- Hướng dẫn từng bước tạo app từ thiết kế giao diện, lập trình logic, xử lý dữ liệu đến triển khai ứng dụng.\n
- Thực hành tạo app trực tiếp với sự hướng dẫn chi tiết từ anh Phạm Ngọc Hội.\n
- Chia sẻ các tips, kinh nghiệm và các case study thực tế giúp học sinh ứng dụng kiến thức vào dự án riêng.\n
- Trải nghiệm các tính năng thông minh của Claude Code giúp giảm thời gian lập trình và tăng hiệu quả sáng tạo.\n\n

🌟 **Lợi ích khi tham gia**\n
- Nắm vững cách thức sử dụng AI agent Claude Code để phát triển ứng dụng.\n
- Phát triển tư duy logic, sáng tạo và kỹ năng giải quyết vấn đề.\n
- Có cơ hội thực hành trực tiếp và hoàn thiện sản phẩm app cá nhân hoặc nhóm.\n
- Chuẩn bị kiến thức nền tảng cho các dự án công nghệ trong học tập và nghề nghiệp tương lai.\n
- Giao lưu, học hỏi từ chuyên gia và các bạn học sinh cùng đam mê lập trình.\n\n

🚀 **Tầm quan trọng của Workshop**\n
Trong thời đại công nghệ số, việc làm chủ công cụ AI để lập trình ứng dụng là một lợi thế cạnh tranh lớn. Workshop không chỉ cung cấp kỹ năng kỹ thuật mà còn giúp học sinh tiếp cận tri thức mới, chuẩn bị sẵn sàng cho các cơ hội nghề nghiệp và dự án sáng tạo trong tương lai.\n\n

📌 **Thông tin đăng ký**\n
Học sinh quan tâm có thể đăng ký tham gia ngay để không bỏ lỡ cơ hội học hỏi từ anh Phạm Ngọc Hội và trải nghiệm trực tiếp lập trình ứng dụng với AI.\n
Workshop mở ra cánh cửa khám phá công nghệ hiện đại, nâng cao khả năng sáng tạo và mở rộng cơ hội nghề nghiệp trong ngành công nghệ thông tin và lập trình ứng dụng.\n\n
🎉 **Hãy cùng khám phá, học hỏi và trải nghiệm công nghệ tương lai ngay hôm nay!**`,
      img: EVAI,
    },
    {
      id: '3',
      eventTit:
        'Sinh viên IESCollege hấp dẫn với mô hình “Thực học – Thực nghiệp”',
      desc: `Sinh viên IESCollege hấp dẫn với mô hình “Thực học – Thực nghiệp”\n
Hiện nay, triết lý đào tạo “Thực học – Thực nghiệp” ở các trường Trung cấp, Cao đẳng, Đại học đã tạo ra nhiều bước đột phá trong giáo dục và tạo được sức hấp dẫn cho các bạn sinh viên. Mô hình học tập này giúp các bạn sinh viên có thể ứng dụng được ngay những kiến thức từ lý thuyết vào thực tế từ khi còn đang ngồi trên ghế nhà trường, có nhiều cơ hội tiếp cận các dự án, công việc trong thực tế tại các cơ sở doanh nghiệp thay vì chỉ chăm chăm học lý thuyết.\n
Với việc áp dụng “thực học thực nghiệp” trong giảng dạy, chất lượng sinh viên ra trường làm được việc, đáp ứng tốt nhu cầu tuyển dụng của doanh nghiệp ngày càng cao. Đặc biệt, doanh nghiệp cũng đã chủ động đặt hàng sinh viên hệ Trung cấp của IESCollege, đem đến một tương lai nghề nghiệp ngay sau khi ra trường. Đây là một điểm sáng mang tính ưu việt thể hiện sự vượt trội của IESCollege so với các trường khác.\n
Việc chủ động tạo ra các mối quan hệ giữa IESCollege với doanh nghiệp đem lại lợi ích cho sinh viên một cách thiết thực. Trường luôn duy trì việc mời giảng viên doanh  nhân đứng lớp nhằm cải thiện chương trình giáo dục và nâng cao chất lượng đào, giúp sinh viên tiếp cận gần hơn với thực tế, chủ động tham gia giải quyết các vấn đề cụ thể tại doanh nghiệp. Đồng thời, việc sớm tiếp cận với doanh nghiệp giúp sinh viên trưởng thành và định hướng nghề nghiệp một cách rõ ràng hơn và có phương hướng phát triển trong tương lai. Đây là điều mà không phải bất cứ trường nào cũng làm được trong giai đoạn hiện nay.\n
Bên cạnh việc chú trọng trong phương pháp giảng dạy cũng như giáo trình chuyên ngành, IESCollege còn luôn quan tâm đến việc đào tạo bổ sung các kỹ năng thiết yếu để ứng dụng trong công việc tương lai của sinh viên như: Kỹ năng mềm, Kỹ năng nghề nghiệp, tiếng Anh… Sự chú trọng trong chương trình nhằm đem đến chất lượng đào tạo chuẩn với thị trường lao động, tăng khả năng thích ứng của sinh viên với môi trường doanh nghiệp.\n
Hướng đến sự hoàn chỉnh trong khung đào tạo, chất lượng sinh viên IESCollege ra trường trong những năm gần đây luôn làm hài lòng các đơn vị tuyển dụng. Đó chính là lý do khiến IES trở nên HOT và được nhiều bạn trẻ lựa chọn theo học.\n
Hãy liên hệ ngay với IESCollege để nhận được những ưu đãi giáo dục lớn cho sinh viên mới!\n
Trường Trung cấp Tin học Kinh tế Sài Gòn`,
      img: THTN,
    },
    {
      id: '4',
      eventTit:
        'Hợp tác đào tạo giữa công ty CP MISA và trường Trung cấp Tin học - Kinh tế Sài Gòn',
      desc: `Hợp tác đào tạo giữa công ty CP MISA và trường trung cấp Tin học-Kinh tế Sài Gòn\n
Toạ lạc tại Tầng 1, Số 37/3-37/5 Đường Ngô Tất Tố, Phường 21, Quận Bình Thạnh, TP HCM , trường Trung cấp Tin học-Kinh tế Sài Gòn (IESCollege) sớm trở thành địa chỉ tin cậy trong quá trình giáo dục, đào tạo và phát triển nguồn nhân lực hệ Trung cấp Chính quy. IESCollege đang trong quá trình đẩy mạnh hợp tác cùng các đơn vị Doanh nghiệp uy tín trên cả nước, đặc biệt là công ty CP MISA trong việc chuyển giao phần mềm phục vụ công tác đào tạo vào ngày 11/8/2016.\n
HOẠT ĐỘNG CHÍNH:\n
Công ty CP MISA cấp miễn phí giấy phép sử dụng phần mềm MISA dưới dạng tệp dữ liệu trên máy tính đối với phần mềm Desktop hoặc tên miền đăng nhập đối với phần mềm online nhằm giảng dạy các môn học trong khuôn khổ chương trình đào tạo của trường Trung cấp Tin học Kinh tế Sài Gòn.\n
MISA cung cấp cho trường Trung cấp Tin học-Kinh tế Sài Gòn các tài liệu mẫu dưới dạng file phần mềm, hướng dẫn hỗ trợ xây dựng tài liệu giảng dạy và học tập như: Slide bài giảng; phim hướng dẫn sử dụng phần mềm; bài tập thực hành; tài liệu tham khả khác như: hướng dẫn cài đặt phần mềm; hướng dẫn đăng ký tài khoản phần mềm,…\n
MISA cung cấp một số đề thi và đáp án mẫu để trường Trung cấp Tin học-Kinh tế tham khảo xây dựng ngân hàng đề thi -đáp án cho sinh viên.\n
công ty CP MISA sẽ cấp giấy chứng nhận cho các học viên sau khi hoàn thành khoá học và có sử dụng phần mềm MISA do trường Trung cấp Tin học-Kinh tế Sài Gòn yêu cầu.\n
Sinh viên trường Trung cấp Tin học-Kinh tế Sài Gòn khi tốt nghiệp nếu có nhu cầu về việc làm sẽ được công ty CP MISA khuyến cáo cho các Doanh nghiệp khách hàng của MISA xem xét tuyển dụng khi có nhu cầu.\n
Sinh viên xuất sắc của trường Trung cấp Tin học-Kinh tế Sài Gòn sẽ được công ty CP MISA sẽ được xem xét lựa chọn làm cộng tác viên hoặc được tạo điều kiên thực tập tại các cơ sở của công ty hoặc được giới thiệu tới các Doanh nghiệp hiện đang là khách hàng của MISA để thực tập.\n
Cam kết mọi hình ảnh và thông tin của banner giáo trình đào tạo phần mềm MISA là hoàn toàn phù hợp quy định hiện hành của Nhà nước.\n
Hiện tại, với sản phẩm MISA SME.NET 2015 đã và đang thực hiện đối với các chuyên ngành: Kế toán Doanh nghiệp, Tài chính công, Quản trị Kinh doanh, Quản trị nguồn nhân lực.\n
Như vậy, thông qua hoạt động hợp tác đào tạo, MISA đã chính thức kết nối và trở thành người bạn thân thiết của các thầy cô và sinh viên của trường Trung cấp Tin học-Kinh tế Sài Gòn IESCollege.\n
Với hệ thống giáo trình được MISA biên soạn công phu, phần mềm tiện ích và phổ biến cùng các kênh hướng dẫn, hỗ trợ tận tình, các phần mềm của MISA đã được thầy cô IESCollege đón nhận và đồng hành cùng các bạn tân sinh viên trong thời gian sắp tới.`,
      img: MISA,
    },
  ];
  return { data };
};

export type EventsData = {
  id: string;
  eventTit: string;
  desc: string;
  img: string;
  linkTo?: string;
};
