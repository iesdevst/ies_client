import EVAI from '@/assets/imgs/events_ai.png';

export const useEventsData = (): { data: Array<EventsData> } => {
  const data: Array<EventsData> = [
    {
      id: '1',
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
  ];
  return { data };
};

export type EventsData = {
  id: string;
  eventTit: string;
  desc: string;
  img: string;
};
