import KHN from '@/assets/imgs/khts_news_page.jpg';
import LDHNN from '@/assets/imgs/ld_hn_news_page.jpg';
import LDTHN from '@/assets/imgs/ld_thud_news_page.jpg';
import TSN from '@/assets/imgs/tbts_news_page.jpg';
import NBCN from '@/assets/imgs/top_str_news.jpg';

export const useNewsData = (): { data: Array<NewsData> } => {
  const data: Array<NewsData> = [
    {
      id: '1',
      newsTit: 'GS Ngô Bảo Châu: “Không nhất thiết phải có bằng Đại học”',
      desc: `GS Ngô Bảo Châu quan niệm giá trị của một con người không thể đánh giá dựa trên tiêu chí giỏi điều gì đó, mà còn căn cứ vào rất nhiều phẩm chất khác nhau.\n
GS Cédric Villani và GS Ngô Bảo Châu trả lời câu hỏi của báo chí về quan điểm đối với kỳ thi THPT quốc gia, về việc phát triển những năng khiếu toán học.\n
Là người thành công, GS Ngô Bảo Châu khuyên gì với những thí sinh trượt đại học năm nay?\n
– GS Ngô Bảo Châu: Mỗi người sinh ra mỗi khác, có những mối quan tâm, có khả năng khác nhau.\n
Tôi xin kể một câu chuyện như thế này: Hôm trước, Viện nghiên cứu cao cấp về Toán đã hỗ trợ để sinh viên tổ chức thi toán mô hình cho học sinh. Tôi về nước và được tham gia buổi chấm điểm cuối cùng, trong đó có bài toán về trồng cây, tưới cây. Tôi thấy có những bạn chuyên toán, yêu toán thích toán, nhưng không quan tâm đến cây cối mà chỉ quan tâm tới việc chứng minh khả năng toán của mình.\n
Trong khi đó, có những bạn không giỏi toán bằng, nhưng thực sự quan tâm đến việc làm sao tưới cây tốt nhất. Những bạn này đưa ra lời giải chưa hoàn hảo về toán học, nhưng rất thú vị về việc tưới cây.\n
GS Ngô Bảo Châu và GS Cédric Villani tại buổi Tọa đàm về phương pháp giáo dục, làm thế nào để chuyển lửa trong giáo dục, tối ngày 24/8/2015\n
Giá trị của một con người không thể đánh giá dựa trên tiêu chí giỏi điều gì đó, mà còn căn cứ vào rất nhiều phẩm chất khác nhau. Nền giáo dục chúng ta hướng tới cần phải đa dạng để cho mỗi đứa trẻ phát triển phẩm chất của bản thân. Nền giáo dục cần cho phép phẩm chất đó được thể hiện để khi lớn lên phẩm chất của đứa trẻ trở thành một tác phẩm nào đó trong cuộc đời.\n
Quay lại chuyện đi học, tôi thấy rằng tàn dư của xã hội phong kiến say sưa bằng cấp dẫn đến việc mọi người đều coi trọng bằng đại học. Nhưng một bạn trẻ hoàn toàn có cuộc sống nhiều ý nghĩa, có công việc nhiều niềm vui, mà không nhất thiết phải có bằng đại học.\n
Còn với những thí sinh trúng tuyển đại học nhưng không đúng với ngành nghề mong muốn thì sao, thưa giáo sư? Các em nên thay đổi giấc mơ của mình hay chấp nhận thực tại?\n
– GS Ngô Bảo Châu: Vì một số trục trặc trong tuyển sinh, nên một số thí sinh chỉ cần đỗ đại học mà không nhất thiết phải vào ngành mình mong muốn. Tôi cho rằng đó là điều đáng tiếc.\n
Tôi hy vọng các trường đại học có sự mềm dẻo, cho phép sinh viên được chuyển ngành, chuyển khoa để vào đúng ngành mà các em yêu thích, có phẩm chất và năng lực để học.\n
Việt Nam có nhiều người giỏi, có khả năng đặc biệt về Toán học, có thể theo đuổi sâu về Toán và các ngành khoa học tự nhiên. Nhưng thực tế cuộc khống khiến rất nhiều bạn trẻ đã từ bỏ. Các Giáo sư có giải pháp nào để hỗ trợ các em theo đuổi đam mê?\n
– GS Ngô Bảo Châu: Tôi không phải là nhà toán học Việt Nam duy nhất thành danh trên thế giới. Các nhà toán học Việt Nam nổi danh trên thế giới không quá nhiều nhưng cũng không phải là ít. Tôi có những đồng nghiệp có sự nghiệp rất tốt tại các trường đại học, có những đồng nghiệp trẻ hơn tôi đã có sự nghiệp rất rạng rỡ.\n
Đúng là có thực tế hiện có nhiều học sinh có khả năng trong lĩnh vực toán học nhưng chọn việc khác. Đó là điều không may.\n
Những gì mà tôi và các đồng nghiệp đang làm hiện nay như sáng lập Viện nghiên cứu mới, tổ chức các khoá học bồi dưỡng kiến thức cho học sinh, tìm kiếm và cấp học bổng để học sinh yêu toán có nhiều cơ hội hơn, tham gia trao đổi tại nước ngoài… cũng là để giải quyết thực trạng đáng buồn đó.\n
Tôi nghĩ trong cuộc sống có những điều không may xảy ra, những điều chúng ta nên là làm nhiều nhất có thể để các bạn yêu khoa học được thực hiện giấc mơ của mình. Tôi, và có nhiều người nữa như anh Vũ (giáo sư Dương Nguyên Vũ, Giám đốc Viện John Von Neumann, ĐHQG TP.HCM), luôn làm việc với tinh thần đó, phấn đấu theo hướng này này để hỗ trợ các bạn trẻ.\n
GS Cédric Villani: Một nghiên cứu của Mỹ đã xếp nghề toán là cao quý nhất trong số 200 nghề, vì đây là nghề có tương lai nhất, có mức tăng trưởng, cơ hội phát triển và khả năng ứng dụng cao nhất.\n
Nhưng chúng ta không thể khuyến khích sinh viên học toán nếu không có đầu ra. Bên cạnh việc tạo cơ hội cho sinh viên học tập như GS Ngô Bảo Châu đã nói, còn cần phải phát triển những ngành công nghiệp mũi nhọn, những ngành nghề phụ trợ mới có đất cho sinh viên học toán.\n
Cần phải tiến hành song song cả hai hướng này.\n
GS Ngô Bảo Châu từng nhận định Bộ GD-ĐT rằng bỏ khối chuyên ở cấp 2 là điều đáng tiếc. Hai ông có thể chia sẻ quan điểm của mình về điều này?\n
– GS Ngô Bảo Châu: Không chỉ mình tôi mà rất nhiều người trong cộng đồng toán học đều phiền lòng vì quyết định bỏ hệ thống chuyên cấp 2.\n
Tôi cảm giác có quan niệm chung của xã hội đã để dấu ấn trong quyết định của Bộ GD-ĐT rằng học sinh chuyên là “gà chọi”. Tôi thấy đó là quan điểm phiến diện. Tôi biết những người học sinh chuyên toán và tôi không thấy họ là “gà công nghiệp” tí nào.\n
Quan điểm của tôi về giáo dục là trong điều kiện cho phép, xã hội chúng ta tạo điều kiện để con em mình phát triển những phẩm chất của bản thân.\n
Nhiều người nói ở Pháp, Mỹ không có trường chuyên – họ đã nhầm. Ở Mỹ cũng có những mô hình trường giống trường chuyên, tuyển sinh gắt gao, chương trình học nặng, có sự tranh thi đua lớn. Có trường có hàng chục cựu học sinh sau này được giải Nobel.\n
GS Cédric Villani: Ở Pháp cũng có những cuộc tranh luận sôi nổi về trường lớp chuyên.\n
Thường có hai nhận xét chính về lớp chuyên. Thứ nhất là chúng ta yêu cầu học sinh học chuyên quá sớm nên sợ sau này các em chỉ biết môn chuyên đó. Nhận xét thứ hai là trường chuyên khiến những học sinh này bị tách biệt với cuộc sống, khó hoà nhập với những thành phần còn lạic ảu xã hội.\n
Nhưng trường lớp chuyên có những thuận lợi nhất định. Nó giúp các bạn trẻ tập trung vào môn học mũi nhọn, phù hợp với đam mê của mình.\n
Và bên cạnh đó là niềm đam mê của giáo viên – người truyền tải kiến thức. Động cơ và niềm đam mê bao giờ cũng quan trọng hơn kỷ luật hay quy định.\n
Vì vậy, trường lớp chuyên giúp chúng ta nuôi dưỡng sự đam mê rất tốt.\n
Còn khía cạnh khác phải nói tới đó là tính trừu tượng của ácc bộ môn như toán lý thuyết.\n
Tôi nghĩ rằng tất nhiên nếu học sinh học cái gì cụ thể hay thực tiễn thì cũng tốt thôi, có thể khuyến khích. Trong những lớp chuyên chúng ta hoàn toàn cho học sinh học tốt về cả lý thuyết và thực hành. Chúng ta cần có sự trộn lẫn hài hoà giữa lý thuyết và thực hành. Và điều này có thể áp dụng tốt ở lớp chuyên.\n`,
      img: NBCN,
    },
    {
      id: '2',
      newsTit: 'Tuyển sinh đào tạo - năm học 2026-2027',
      desc: `Trường Trung cấp Tin học Kinh tế Sài Gòn thông báo tuyển sinh đào tạo năm học 2026 - 2027 như sau:\n
I. NGÀNH, NGHỀ, CHỈ TIÊU\n
STT\tCơ sở đào tạo/ngành, nghề tuyển sinh\tMã ngành, nghề\tChỉ tiêu tuyển sinh\tGhi chú\n
1\tVẽ thiết kế mỹ thuật có trợ giúp bằng máy tính\t5480212\t110\n
2\tQuản lý doanh nghiệp\t5340420\t160\n
3\tMarketing\t5340116\t130\n
4\tQuản lý kinh doanh khách sạn\t5340422\t185\n
5\tKế toán doanh nghiệp\t5340302\t190\n
6\tThư ký văn phòng\t5320306\t110\n
7\tTin học ứng dụng\t5480205\t145\n
\tTổng cộng:\t\t1.030\n
II. ĐỐI TƯỢNG, HỒ SƠ TUYỂN SINH\n
1. Đối tượng tuyển sinh: Học sinh tốt nghiệp THCS.\n
2. Hồ sơ tuyển sinh\n
01 Bộ hồ sơ theo mẫu của Nhà trường - đựng trong 01 túi, gồm:\n
- 01 Phiếu đăng kí xét tuyển trình độ trung cấp;\n
- 01 Bản sơ yếu lí lịch (có xác nhận của chính quyền địa phương);\n
- 01 Bản photo công chứng còn thời hạn: Bằng tốt nghiệp Trung học cơ sở (THCS) hoặc giấy chứng nhận tốt nghiệp tạm thời; học bạ THCS. Đối với học sinh xét tuyển đào tạo tại Nhà trường thì nộp bản gốc: Bằng tốt nghiệp THCS hoặc giấy chứng nhận tốt nghiệp tạm thời và học bạ THCS.\n
- 01 Bản sao trích lục hoặc photo công chứng còn thời hạn của Giấy khai sinh;\n
- 01 Bản photo công chứng còn thời hạn của Căn cước công dân;\n
- 04 Ảnh cỡ 3 x 4 loại mới chụp trong vòng 6 tháng gần đây (ghi họ tên, ngày sinh sau mỗi tấm ảnh);\n
- 01 Bản gốc giấy khám sức khỏe, cấp trong vòng 6 tháng, có xác nhận của cơ sở y tế.\n
3. Hình thức nộp hồ sơ và lệ phí\n
3.1. Tuyển sinh đào tạo tại Trường\n
- Học sinh nộp trực tiếp tại trường hoặc gửi hồ sơ quan đường bưu điện đến Phòng Công tác HS-SV và tuyển sinh Nhà trường.\n
- Lệ phí xét tuyển: 120.000 đồng/hồ sơ; học sinh nộp trực tiếp khi trường tiếp nhận hồ sơ hoặc chuyển khoản vào số tài khoản Nhà trường.\n
3.2. Tuyển sinh đào tạo tại các Trung tâm GDNN-GDTX trên địa bàn Thành phố Hồ Chí Minh liên kết đào tạo với Nhà trường\n
Học sinh xem thông báo tuyển sinh của các Trung tâm GDNN-GDTX trên địa bàn Thành phố Hồ Chí Minh liên kết đào tạo với Nhà trường để được tư vấn, nộp hồ sơ tuyển sinh tại trung tâm tổng hợp, gửi về Nhà trường xét tuyển.\n
III. THỜI GIAN, ĐỊA ĐIỂM NHẬN HỒ SƠ\n
1. Tuyển sinh đào tạo tại Nhà trường\n
- Trường tuyển sinh liên tục trong năm 2026 từ ngày 01/02 đến khi đủ chỉ tiêu.\n
- Thời gian: Từ thứ Hai đến thứ Bảy hằng tuần:\n
+ Buổi sáng từ 08h00 đến 12h00;\n
+ Buổi chiều từ 13h30 đến 16h30.\n
- Địa điểm nhận hồ sơ: Phòng Công tác HS-SV và tuyển sinh, Trường Trung cấp Tin học Kinh tế Sài Gòn:\n
+ Số 12-14-16-18 Nguyễn An Ninh, phường Bình Thạnh, Thành phố Hồ Chí Minh;\n
+ Số 98, Phạm Văn Chiêu, phường Thông Tây Hội, Thành phố Hồ Chí Minh.\n
2. Tuyển sinh đào tạo tại các Trung tâm GDNN-GDTX trên địa bàn Thành phố Hồ Chí Minh liên kết đào tạo với Nhà trường\n
- Thời gian: Từ ngày 01/3 đến khi đủ chỉ tiêu (dự kiến 18/11/2026).\n
- Địa điểm nhận hồ sơ: Trung tâm GDNN-GDTX trên địa bàn Thành phố Hồ Chí Minh liên kết đào tạo với Trường Trung cấp Tin học Kinh tế Sài Gòn.\n
IV. PHƯƠNG THỨC TUYỂN SINH\n
Nhà trường thực hiện phương thức xét học bạ THCS.\n
1. Tổ chức xét tuyển\n
Trên cơ sở số lượng học sinh đăng kí/chỉ tiêu và quy định biên chế lớp học của ngành, nghề đào tạo; Nhà trường sẽ tổ chức xét tuyển theo từng đợt trong năm.\n
2. Công bố trúng tuyển và triệu tập nhập học\n
Thời gian công bố học sinh trúng tuyển, phát hành giấy báo và tổ chức nhập học đào tạo cho học sinh trúng tuyển là sau 15 ngày kể từ ngày công bố trúng tuyển.\n
V. CHƯƠNG TRÌNH ĐÀO TẠO\n
Học sinh trúng tuyển được học song song hai chương trình đào tạo:\n
1. Đào tạo văn hóa hệ GDTX cấp THPT (lớp 10, 11, 12)\n
Sau 03 năm học THPT, học sinh đủ điều kiện sẽ được tham dự kỳ thi tốt nghiệp THPT quốc gia; bằng tốt nghiệp THPT theo quy định của Bộ Giáo dục và Đào tạo.\n
2. Đào tạo nghề\n
- Trung cấp chính quy theo ngành/nghề học sinh đăng ký xét tuyển;\n
- Thời gian đào tạo: 20 tháng, học sinh đủ điều kiện sẽ được Nhà trường cấp bằng tốt nghiệp trung cấp chính quy theo quy định của Bộ Giáo dục và Đào tạo.\n
VI. HỌC PHÍ\n
1. Đào tạo văn hóa hệ GDTX (dự kiến)\n
Đối với học sinh trúng tuyển theo chỉ tiêu đào tạo tại Nhà trường:\n
- Học phí lớp 10, lớp 11: 500.000 đồng/tháng;\n
- Học phí lớp 12: 800.000 đồng/tháng.\n
2. Học phí đào tạo nghề\n
Học sinh được cấp bù học phí học nghề từ Nhà nước theo Nghị định 238/2025/NĐ-CP ngày 03/9/2025 của Chính phủ, dự kiến từ 1.600.000 đồng đến 2.400.000 đồng/học sinh/tháng (tùy theo ngành đào tạo) trong trường hợp học sinh hoàn thiện đầy đủ hồ sơ nhận chính sách hỗ trợ học phí theo quy định.\n
VII. QUYỀN LỢI CỦA HỌC SINH\n
1. Học sinh tốt nghiệp được cấp 02 văn bằng\n
- Bằng tốt nghiệp THPT;\n
- Bằng tốt nghiệp Trung cấp chính quy theo ngành/nghề đã đăng kí khi nhập học.\n
2. Học sinh tốt nghiệp THPT và trung cấp\n
- Đủ điều kiện dự thi cao đẳng, đại học trong nước và quốc tế;\n
- Được dự thi liên thông lên cao đẳng, đại học theo quy định của Bộ Giáo dục và Đào tạo; được liên thông thẳng lên đại học: Đại học Mở, Viện Smartech,…\n
Thông tin chi tiết, cụ thể về tuyển sinh đào tạo học sinh, quý phụ huynh liên hệ trực tiếp theo số điện thoại 0901.309.866; Web: ies.edu.vn; Email: info@iescollege.edu.vn\n`,
      img: TSN,
    },
    {
      id: '3',
      newsTit: 'Kế hoạch tuyển sinh - năm học 2026-2027',
      desc: `Thực hiện Quyết định số /QĐ-THKTSG ngày / /2026 của Chủ tịch Hội đồng Quản trị Nhà trường về việc Ban hành Kế hoạch chỉ tiêu tuyển sinh đào tạo trình độ trung cấp - năm học 2026-2027;\n
Trường Trung cấp Tin học Kinh tế Sài Gòn ban hành Kế hoạch tuyển sinh đào tạo năm học 2026 - 2027 như sau:\n
I. MỤC ĐÍCH – YÊU CẦU\n
1. Mục đích\n
- Hoàn thành chỉ tiêu tuyển sinh năm 2026 của Nhà tường;\n
- Định hướng, xác định các nội dung, huy động các nguồn lực trong và ngoài nhà trường hoàn thành công tác tuyển sinh năm 2026 đạt được kết quả cao nhất;\n
- Làm cơ sở hoạt động đào tạo của nhà trường trong năm học 2026 - 2027.\n
2. Yêu cầu\n
- Tổ chức thực hiện tuyển sinh đúng, chính xác, nghiêm túc theo quy chế, quy định tuyển sinh của Bộ Lao động – Thương binh và Xã hội, Bộ Giáo dục và Đào tạo và của Nhà trường.\n
- Phân công rõ ràng trách nhiệm và nhiệm vụ của từng cá nhân thực hiện các nội dung tuyển sinh.\n
II. NỘI DUNG TUYỂN SINH\n
1. Chỉ tiêu, ngành, nghề tuyển sinh\n
STT\tTrình độ/ngành, nghề tuyển sinh\tMã ngành, nghề\tChỉ tiêu tuyển sinh\tGhi chú\n
1.\tVẽ thiết kế mỹ thuật có trợ giúp bằng máy tính\t5480212\t110\n
2.\tQuản lý doanh nghiệp\t5340420\t160\n
3.\tMarketing\t5340116\t130\n
4.\tQuản lý kinh doanh khách sạn\t5340422\t185\n
5.\tKế toán doanh nghiệp\t5340302\t190\n
6.\tThư ký văn phòng\t5320306\t110\n
7.\tTin học ứng dụng\t5480205\t145\n
\tTổng cộng:\t\t1.030\n
2. Hình thức tuyển sinh, hồ sơ tuyển sinh, lệ phí và phương thức nộp hồ sơ\n
2.1. Hình thức tuyển sinh\n
Hình thức: Xét tuyển\n
2.2. Hồ sơ tuyển sinh\n
01 Bộ hồ sơ theo mẫu của Nhà trường - đựng trong 01 túi, gồm:\n
- 01 Phiếu đăng kí xét tuyển trình độ trung cấp;\n
- 01 Bản sơ yếu lí lịch (có xác nhận của chính quyền địa phương);\n
- 01 Bản photo công chứng còn thời hạn: Bằng tốt nghiệp Trung học cơ sở (THCS) hoặc giấy chứng nhận tốt nghiệp tạm thời; học bạ THCS. Đối với học sinh xét tuyển đào tạo tại Nhà trường thì nộp bản gốc: Bằng tốt nghiệp THCS hoặc giấy chứng nhận tốt nghiệp tạm thời và học bạ THCS.\n
- 01 Bản sao trích lục hoặc photo công chứng còn thời hạn của Giấy khai sinh;\n
- 01 Bản photo công chứng còn thời hạn của Căn cước công dân;\n
- 04 Ảnh cỡ 3 x 4 loại mới chụp trong vòng 6 tháng gần đây (ghi họ tên, ngày sinh sau mỗi tấm ảnh);\n
- 01 Bản gốc giấy khám sức khỏe, cấp trong vòng 6 tháng, có xác nhận của cơ sở y tế.\n
2.3. Phương thức nộp hồ sơ tuyển sinh\n
- Nộp trực tiếp tại Nhà trường;\n
- Nộp tại các cơ sở Nhà trường liên kết đào tạo;\n
- Học sinh gửi hồ sơ qua đường bưu điện, địa chỉ nhận: Phòng Công tác HS-SV và tuyển sinh, Trường Trung cấp Tin học Kinh tế Sài Gòn:\n
+ Cơ sở số 98, Phạm Văn Chiêu, phường Thông Tây Hội, Tp Hồ Chí Minh\n
+ Cơ sở số 12-14-16-18 Nguyễn An Ninh, phường Bình Thạnh, Tp Hồ Chí Minh;\n
2.4. Lệ phí xét tuyển\n
- Lệ phí: 120.000 đồng/hồ sơ.\n
- Học sinh nộp trực tiếp khi nộp hồ sơ tại Trường hoặc chuyển khoản vào số tài khoản Nhà trường.\n
3. Đối tượng tuyển sinh: Học sinh đã tốt nghiệp THCS để đào tạo trình độ trung cấp với đào tạo văn hóa hệ giáo dục thường xuyên cấp THPT.\n
4. Thời gian tuyển sinh, xét tuyển, công bố trúng tuyển\n
4.1. Đăng kí tuyển sinh\n
Nhà trường tuyển sinh liên tục trong năm 2026, từ ngày 01/02/2026 cho đến khi đủ chỉ tiêu tuyển sinh.\n
4.2. Tổ chức xét tuyển\n
Trên cơ sở số lượng học sinh đăng kí/chỉ tiêu và quy định về biên chế lớp học của ngành, nghề đào tạo; Nhà trường sẽ tổ chức xét tuyển theo từng đợt trong năm.\n
4.3. Công bố trúng tuyển và triệu tập nhập học\n
Thời gian công bố học sinh trúng tuyển, phát hành giấy báo và tổ chức nhập học cho học sinh trúng tuyển là sau 15 ngày kể từ ngày công bố trúng tuyển.\n
5. Học phí và chế độ chính sách\n
5.1. Học phí (dự kiến): Người học đóng học phí theo quy định của Nhà trường:\n
- Đào tạo văn hóa (hệ GDTX): Lớp 10, lớp 11: 500.000 đồng/tháng; lớp 12: 800.000 đồng/tháng;\n
- Đào tạo ngành, nghề:\n
TT\tHọc phí đào tạo ngành/nghề\tHọc phí/tháng\tGhi chú\n
1\tTin học ứng dụng\t2.400.000\n
2\tMarketing\t1.600.000\n
3\tKế toán doanh nghiệp\t1.600.000\n
4\tQuản lý và kinh doanh khách sạn\t2.000.000\n
5\tThư ký văn phòng\t1.600.000\n
6\tQuản lý doanh nghiệp\t1.600.000\n
7\tVẽ thiết kế mỹ thuật có trợ giúp bằng máy tính\t2.400.000\n
5.2. Chế độ chính sách\n
- Người học theo học được hưởng chính sách theo các văn bản quy phạm pháp luật hiện hành áp dụng cho từng đối tượng tuyển sinh.\n
- Hồ sơ nhận chính sách, gồm:\n
+ 01 Đơn đề nghị miễn, giảm học phí;\n
+ Ảnh chụp VneID;\n
+ 01 Bản photo công chứng bằng THCS;\n
+ 01 Bản sao giấy khai sinh;\n
+ 01 Bản photo CCCD;\n
+ 01 Bản photo CCCD của bố hoặc mẹ;\n
+ 01 Bản sao giấy tờ ưu tiên (nếu có);\n
+ 02 Ảnh 3x4;\n
+ Giấy đề nghị mở tài khoản ngân hàng.\n
III. THỜI GIAN THỰC HIỆN VÀ PHÂN CÔNG NHIỆM VỤ\n
1. Thời gian thực hiện\n
Tháng 1+2+3: Xây dựng kế hoạch, chuẩn bị cơ sở vật chất, tư vấn tuyển sinh.\n
Tháng 4+5+6: Tiếp tục tư vấn, cập nhật danh sách học sinh.\n
Tháng 7+8: Xét tuyển đợt 1, nhập học.\n
Tháng 9+10: Tiếp tục tuyển sinh.\n
Tháng 11+12: Xét tuyển đợt 2, nhập học.\n
2. Phân công nhiệm vụ\n
- Hội đồng tuyển sinh: Chỉ đạo chung.\n
- Ban Thư ký: Tham mưu, chuẩn bị hồ sơ.\n
- Ban Truyền thông: Tuyển sinh, truyền thông.\n
- Phòng Phát triển đối tác: Liên kết đào tạo.\n
- Phòng HS-SV: Tiếp nhận hồ sơ.\n
- Phòng Hành chính: Cơ sở vật chất.\n
Trên đây là Kế hoạch tuyển sinh năm học 2026 - 2027 của Trường Trung cấp Tin học Kinh tế Sài Gòn.\n`,
      img: KHN,
    },
    {
      id: '4',
      newsTit: 'Những lý do bạn nên theo học ngành Tin học ứng dụng',
      desc: `Xã hội ngày càng phát triển đi cùng với đó là sự tiến bộ của khoa học kỹ thuật. Tin học đang phát triển ngày càng nhanh và trở thành nhân tố cần thiết trong mọi lĩnh vực của đời sống xã hội. Tin học luôn chứng minh được tầm quan trọng của nó.\n
Ảnh minh họa\n
Tin học ứng dụng là một tên gọi khác của chuyên ngành công nghệ thông tin. Tin học ứng dụng là việc sử dụng các tin học máy tính để phục vụ tốt cho đời sống con người với các lĩnh vực khác nhau. Ngày nay, để phát triển và hỗ trợ hữu ích nhất cho con người thì bạn cần phải có các ứng dụng tin học vào các lĩnh vực tạo ra hiệu quả tốt nhất cho con người.\n
KHI HỌC NGÀNH TIN HỌC ỨNG DỤNG BẠN SẼ ĐƯỢC TRANG BỊ NHỮNG KIẾN THỨC GÌ?\n
Kỹ thuật lập trình, thiết kế Web, công nghệ phần mềm; Phân tích thiết kế hệ thống, cơ sở dữ liệu, hệ quản trị cơ sở dữ liệu; Công nghệ JAVA, công nghệ NET; Lập trình hướng đối tượng; Đồ họa ứng dụng; Thiết kế hoạt ảnh; Xây dựng các phần mềm quản lý,…\n
Ngoài ra, bạn còn được trang bị kiến thức về kiến trúc máy tính, mạng máy tính, quản trị mạng, quản trị Web server,…\n
Không thể thiếu đó là bạn được rèn luyện kỹ năng nghe, nói, đọc, viết Tiếng anh giao tiếp và cả Tiếng anh chuyên ngành, rèn luyện và phát triển kỹ năng cá nhân,…\n
NHỮNG LÝ DO BẠN NÊN LỰA CHỌN HỌC NGÀNH TIN HỌC ỨNG DỤNG\n
LUÔN ĐƯỢC TIẾP CẬN VỚI TRI THỨC MỚI\n
Có thể nói không một ngành nghề nào lại liên tục biến đổi và phát triển như Công nghệ thông tin (Tin học ứng dụng). Bạn có thể thấy những kiến thức, những công nghệ của vài năm trước đây đã hoàn toàn lỗi thời so với hiện tại. Làm việc trong ngành này, bạn sẽ luôn được nắm bắt những tri thức mới nhất, công nghệ hiện đại nhất của nhân loại. Nếu bạn là người say mê khám phá và ưa sự mới mẻ, bạn sẽ không bao giờ cảm thấy nhàm chán.\n
CƠ HỘI NGHỀ NGHIỆP ĐA DẠNG\n
Tình trạng thiếu hụt nguồn nhân lực ngành tin học ứng dụng không phải vấn đề mới trong nền kinh tế Việt Nam hiện nay. Nhu cầu tuyển dụng của các tập đoàn, doanh nghiệp làm trong lĩnh vực công nghệ thông tin (Tin học ứng dụng) là vô cùng lớn. Tuy vậy, nhân lực đầu ra mỗi năm lại quá ít so với nhu cầu đó. Qua đó, cho thấy rõ cơ hội đang mở ra cho các bạn trẻ ở Việt Nam. Các doanh nghiệp luôn sẵn sàng săn đón sinh viên từ lúc còn ngồi trên giảng đường, vì thế ngành tin học ứng dụng vẫn chưa bao giờ giảm nhiệt.\n
Mỗi công ty hay doanh nghiệp nào cũng có Website cần xây dựng và duy trì để phát triển hàng ngày, vì ngày nay là thời đại của công nghệ thông tin, truyền thông, thương mại điện tử các doanh nghiệp đều triển khai việc quảng bá hình ảnh công ty và kinh doanh trên mạng nên cần có những người quản lý website, thiết kế xây dựng, phát triển và duy trì website. Hơn nữa nhu cầu có những sản phẩm phần mềm đặc thù phục vụ cho doanh nghiệp nên sinh viên ngành Tin học ứng dụng có thể làm việc ở bất kỳ ở công ty hay doanh nghiệp nào, từ trường học, bệnh viện, cơ quan xí nghiệp. Hiện tại ở Việt Nam có rất nhiều công ty phát triển phần mềm và công ty gia công phần mềm cho nước ngoài đang hoạt động nên sinh viên có rất nhiều cơ hội trở thành thành viên của những công ty này.\n
Tin học ứng dụng nằm trong Top ngành được tuyển dụng nhiều nhất năm 2016\n
THU NHẬP HẤP DẪN\n
Theo khảo sát của nhiều tờ báo, Công nghệ thông tin (Tin học ứng dụng) là một trong 10 ngành nghề có thu nhập cao nhất trong những năm trở lại đây. Các doanh nghiệp lớn, đặc biệt là các doanh nghiệp nước ngoài hoạt động ở Việt Nam, họ sẵn sàng chi trả mức lương trên 1000 USD cho những kỹ sư phần mềm giỏi nhằm thu hút nhân tài làm việc cho mình. Nếu có trình độ chuyên môn và sự cố gắng nhất định, sinh viên khi theo học ngành Tin học ứng dụng rất dễ có cơ hội thăng tiến và đạt một mức thu nhập khủng sau khi ra trường.\n
NHIỀU CƠ HỘI ĐỂ THÀNH ĐẠT\n
Các bạn đã nghe nhiều câu chuyện lập nghiệp của các danh nhân ngành Công nghệ thông tin? Những câu chuyện ấy đã trở thành những huyền thoại mới về trí tuệ, sức sáng tạo vô biên và cả sự quả cảm của con người.\n
Chàng trai trẻ Bill Gates bỏ học đại học giữa chừng, từ khởi đầu mong manh lập nên “đế chế” thống trị toàn cầu mang tên Windows. Michael Dell, người được tạp chí Fortune xếp vào danh sách 10 người đàn ông có quyền lực nhất trong kinh doanh năm 2003, chỉ 19 năm trước đó thôi, đã bắt đầu công ty máy tính Dell với số vốn ít ỏi cho bất cứ ai: 1000 USD.\n
CƠ HỘI HỌC TẬP NGÀNH TIN HỌC ỨNG DỤNG TẠI TRƯỜNG TRUNG CẤP TIN HỌC KINH TẾ SÀI GÒN!\n`,
      img: LDTHN,
    },
    {
      id: '5',
      newsTit: 'Đủ điểm đậu đại học vẫn lựa chọn học Trung cấp nghề',
      desc: `Học cao đẳng, trung cấp nghề không còn là đường vòng mà là đường tắt đón đầu xu thế tuyển dụng của nhiều doanh nghiệp hiện nay trên thị trường lao động.\n
Phải nhận thấy rằng thực tế “thừa thầy, thiếu thợ” ngày nay rất phổ biến. Rất nhiều doanh nghiệp phản ánh sinh viên khi ra trường không đáp ứng được yêu cầu của doanh nghiệp. Số sinh viên tốt nghiệp đại học, cao đẳng ra trường ngày càng nhiều (72.000 cử nhân rơi vào tình trạng thất nghiệp), trong khi công nhân có tay nghề, đáp ứng được yêu cầu lao động thì luôn thiếu.\n
Trước tình trạng đó, xu thế lựa chọn cho con em mình học trường trung cấp nghề không còn quá xa lạ với nhiều gia đình hiện nay. Đó là xu hướng tích cực vì một thực tế có thể nhận thấy rằng học nghề rất hợp lí và có thể tạo thu nhập tốt cho các em sau khi ra trường. Chỉ mất khoảng 1 năm đến 1 năm rưỡi là các em có tay nghề ổn định sau đó tùy thuộc vào nhu cầu cá nhân để học lên đại học.\n
Trong tổng số 900.152 thí sinh đăng kí dự thi tốt nghiệp THPT năm 2019, có 643.122 em đăng ký xét tuyển đại học, cao đẳng, chiếm 71,45%, giảm 9.878 thí sinh so với năm 2019. Số liệu trên được Cục quản lý chất lượng, Bộ GD&ĐT công bố. Có thể thấy rằng xu hướng chọn ngay trường nghề để học sau khi tốt nghiệp THPT là mảng màu sáng của tuyển sinh năm 2020. Như vậy, học sinh và các bậc phụ huynh đã dần thay đổi tư duy đặt hướng đi và nhìn nhận thực sự mình thích cái gì chứ không còn chạy theo tiếng tăm nữa.\n`,
      img: LDHNN,
    },
  ];
  return { data };
};

export type NewsData = {
  id: string;
  newsTit: string;
  desc: string;
  img: string;
};
