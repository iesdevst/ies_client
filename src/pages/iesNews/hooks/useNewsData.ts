import KHN from '@/assets/imgs/khts_news_page.jpg';
import KTDT from '@/assets/imgs/ktdt_nfc.jpg';
import KTO from '@/assets/imgs/kto_nfc.jpg';
import LDHNN from '@/assets/imgs/ld_hn_news_page.jpg';
import LDTHN from '@/assets/imgs/ld_thud_news_page.jpg';
import TSN from '@/assets/imgs/tbts_news_page.jpg';
import TKDH from '@/assets/imgs/tkdh_nfc.jpg';
import HTDHM from '@/assets/imgs/top_str_htdhm.jpg';
import LTS from '@/assets/imgs/top_str_lts.jpg';
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
      newsTit:
        'Công nghệ kỹ thuật điện, điện tử: Sức hút từ ngành công nghiệp mũi nhọn',
      desc: `Công nghệ kỹ thuật điện, điện tử: Sức hút từ ngành công nghiệp mũi nhọn\n
Hiện nay tất cả thiết bị sản xuất, gia dụng phục vụ cho các hoạt động trong đời sống hàng ngày đều sử dụng nguồn điện. Chứng tỏ nguồn năng lượng điện vẫn chiếm một vai trò hết sức quan trọng và cần thiết đối với đời sống con người. Vì vậy, ngành Công nghệ kỹ thuật điện – điện tử chưa bao giờ là ngành học cũ và nguồn nhân lực cho việc vận hành, quản lý đối với nhóm ngành này cũng không hề nhỏ.\n
Công nghệ kỹ thuật điện, điện tử là gì?\n
Công nghệ kỹ thuật điện, điện tử là một lĩnh vực kỹ thuật nghiên cứu và áp dụng liên quan đến điện, điện tử và điện từ. Lĩnh vực này lần đầu tiên trở nên quan trọng và hình thành nghề nghiệp liên quan đến nó là vào cuối thế kỷ 19 sau khi điện báo và cung cấp năng lượng điện đi vào thương mại hóa. Ngày nay, ngành này có nhiều ngành con như năng lượng, điện tử học, hệ thống điều khiển, xử lý tín hiệu và viễn thông. Người học ngành Điện, Điện tử cần có sức khỏe tốt, đam mê công việc, kiên trì, nẫn nại, luôn tìm tòi và học hỏi, có kỹ năng làm việc nhóm…\n
Công nghệ kỹ thuật điện, điện tử học gì?\n
Sinh viên học ngành Công nghệ kỹ thuật điện, điện tử công nghiệp sẽ được trang bị các kiến thức như sau:\n
– Trình bày được cấu trúc và nguyên lý hoạt động của các hệ thống cảm biến, đo lường, bảo vệ và điều khiển tự động trong các hệ thống máy công nghiệp.\n
– Phân tích được sơ đồ mạch của một số thiết bị điện, điện tử trong công nghiệp như: bộ nguồn, bộ điều nhiệt, bộ ổn áp máy phát điện (AVR), máy sạt bình, bộ biến tần, UPS, máy hàn, máy xi mạ, mạch điện inverter của các thiết bị điện …\n
– Phân tích được các hiện tượng hư hỏng của mạch điện tử một các khoa học, hợp lí.\n
– Ứng dụng kiến thức trong việc phân tích yêu cầu điều khiển hệ thống trong công nghiệp sản xuất như: băng chuyền, thang máy, pha trộn nguyên liệu, phân loại sản phẩm, quang báo, Robot công nghiệp …\n
– Lập trình cho vi điều khiển, vi xử lý, PLC, Logo, bộ biến tần, điện khí nén.\n
Cơ hội việc làm khi học Công nghệ kỹ thuật điện, điện tử ?\n
Trong nhiều năm qua, nhu cầu nguồn nhân lực về lĩnh vực công nghệ kỹ thuật Điện – Điện tử là rất lớn và phong phú với mọi trình độ từ trình độ nghề đến cao đẳng, đại học và sau đại học. Cho nên, việc nghiên cứu và đào tạo về lĩnh vực Công nghệ kỹ thuật Điện – Điện tử luôn được các viện nghiên cứu, trường đại học trong nước và quốc tế quan tâm, ưu tiên phát triển mạnh mẽ và được xã hội xác định là ngành học không bao giờ cũ và có thu nhập cao.\n
Các kỹ sư Công nghệ kỹ thuật Điện – Điện tử có thể làm việc không chỉ ở tất cả các nhà máy, xí nghiệp và khu công nghiệp mà còn ở các cơ sở kinh doanh, khu chế xuất và dây truyền sản xuất công nghiệp, hệ thống điện – điện tử dân dụng. Đồng thời, các kỹ sư Công nghệ kỹ thuật Điện có thể triển khai, trực tiếp thiết kế, tư vấn thiết kế, vận hành hệ thống, bảo trì và nâng cấp các hệ thống điện – điện tử trong mọi lĩnh vực của xã hội.\n
Ngoài ra, kỹ sư điện – điện tử có thể làm việc cho ngành bưu chính viễn thông, Tổng cục Điện tử VN và các công ty trực thuộc…\n
Học Công nghệ kỹ thuật điện, điện tử ở đâu?\n
Ngành Kỹ thuật điện, điện tử được đào tạo ở nhiều trường đại học kỹ thuật và công nghệ như: ĐH Sư phạm Kỹ thuật TP.HCM, ĐH Bách khoa TP.HCM, ĐH Giao thông Vận tải TP.HCM, ĐH Công nghệ TP.HCM, …`,
      img: KTDT,
    },
    {
      id: '3',
      newsTit: 'Công nghệ kĩ thuật ô tô: Ngành nghề có tương lai “đắt giá”',
      desc: `Công nghệ kĩ thuật ô tô: Ngành nghề có tương lai “đắt giá”\n
Trong xu hướng phát triển của xã hội hiện đại, Việt Nam coi công nghiệp ô tô là ngành quan trọng, cần ưu tiên phát triển để góp phần công nghiệp hóa đất nước. Hơn thế nữa, việc đầu tư của các hãng ô tô nước ngoài vào Việt Nam đang phát triển khá nhanh, do đó liên tục nhiều năm qua ngành Công nghệ kỹ thuật Ô tô được đưa vào danh mục các ngành “nóng” về nhu cầu lao động, và nhanh chống trở thành xu thế lựạ chọn cho các bạn trẻ.\n
Ngành nghề trọng điểm, tương lai “đắt giá”\n
Tại Việt Nam, vận tải ô tô luôn đóng vai trò chủ đạo trong vận tải quốc nội. Trong chiến lược công nghiệp hóa và xu hướng hội nhập, Công nghệ kỹ thuật ô tô là ngành công nghiệp mũi nhọn được chính phủ ưu tiên phát triển. Hơn nữa, việc đào tạo đội ngũ kỹ sư ô tô tại Việt Nam đang trở nên cấp bách trước thực tế ngày càng có nhiều doanh nghiệp tham gia sản xuất, lắp ráp ô tô và lượng tiêu thụ ô tô trên thị trường tăng nhanh đáng kể.\n
Trước bước chuyển mình mạnh mẽ của thị trường ô tô Việt Nam cùng những tiềm năng của ngành công nghiệp trọng điểm này, Công nghệ kỹ thuật ô tô đã trở thành một ngành nghề hấp dẫn. Từ việc bảo trì, bảo dưỡng động cơ, các hệ thống tự động cho đến nghiên cứu công nghệ và dòng sản phẩm mới đều cần đến các chuyên gia am tường về ô tô.\n
Liên tục trong nhiều năm qua, Trung tâm dự báo nguồn nhân lực và thị trường lao động TP.HCM đã đưa Công nghệ kỹ thuật ô tô vào danh mục các ngành “nóng” về nhu cầu lao động. Bằng chứng là các tập đoàn ô tô hàng đầu của Đức, Nhật, Mỹ như BMW, Toyota, Honda, Ford… tại Việt Nam đều đặn tổ chức tuyển dụng hằng năm nhưng “nguồn” vẫn không đủ.\n
Đam mê ô tô, yêu công nghệ và thích sáng tạo – tố chất thành công\n
Công nghệ kỹ thuật ô tô là ngành chuyên về khai thác, sử dụng và quản lý dịch vụ kỹ thuật ô tô như điều hành sản xuất phụ tùng, lắp ráp, cải tiến, nâng cao hiệu quả sử dụng, tích hợp thêm nhiều tính năng ưu việt cho sản phẩm công nghệ “thời thượng” này.\n
Để học tốt ngành Công nghệ kỹ thuật ô tô trước tiên đòi hỏi bạn phải yêu công nghệ, thích sáng tạo và đặc biệt đam mê lĩnh vực ô tô. Kỹ sư ô tô sẽ làm việc tại các xưởng lắp ráp, bảo dưỡng ô tô trong điều kiện khá nặng nhọc nên bên cạnh đòi hỏi về sức khỏe, lòng đam mê sẽ giúp bạn vượt qua áp lực công việc, gắn bó và thành công với nghề.\n
Đam mê lĩnh vực ô tô, yêu công nghệ là những tố chất cần có của ngành này\n
Đồng thời, Công nghệ kỹ thuật ô tô luôn biến đổi không ngừng nên sự ham học hỏi là yếu tố không thể thiếu được. Bạn có thể vun đắp từ những thói quen thường ngày như sự mày mò, cập nhật kiến thức, ứng dụng công nghệ mới về lĩnh vực ô tô qua internet, sách, báo, tạp chí chuyên ngành… Bên cạnh đó, tư duy logic, tính cẩn thận và sự kiên trì là những tố chất cần thiết để mang lại thành công cho những ai đang nuôi dưỡng ước mơ trở thành một kỹ sư giỏi trong lĩnh vực ô tô này.\n
Học ngành công nghệ kỹ thuật ô tô, sinh viên được trang bị kiến thức và kỹ năng chuyên sâu về cơ khí ô tô – máy động lực, hệ thống truyền động – truyền lực, cơ cấu khí, hệ thống điều khiển,… để có khả năng áp dụng những nguyên lý kỹ thuật cơ bản, kỹ năng thực hành cao và các kỹ năng liên quan đến ô tô.\n
Các môn học chuyên ngành tiêu biểu và đặc trưng của ngành công nghệ kỹ thuật ô tô mà sinh viên được học như: Động cơ đốt trong, tính toán ô tô, hệ thống điện – điện tử ô tô, hệ thống điều khiển tự động trên ô tô, Công nghê chẩn đoán, sửa chữa và kiểm định ô tô, Hệ thống an toàn và tiện nghi trên ô tô, Quản lý dịch vụ ô tô,…\n
Ngoài ra, những trường đại học đào tạo ngành công nghệ kỹ thuật ô tô có uy tín như Đại học Bách khoa – ĐHQG TP.HCM, Đại học Sư phạm Kỹ thuật TP.HCM, Đại học Công nghiệp TP.HCM (IUH), những trường có truyền thống lâu năm về đào tạo các ngành thuộc nhóm ngành kỹ thuật, công nghệ,… sinh viên còn được chú trọng cung cấp các kỹ năng chuyên môn như khai thác, sử dụng và dịch vụ kỹ thuật ô tô cũng như hoạt động điều khiển và lắp ráp, góp phần cải tiến, nâng cao hiệu quả sử dụng phương tiện và phương thức kinh doanh ô tô trên thị trường. Đây là những kỹ năng hết sức cần thiết cho một kỹ sư ngành Công nghệ Kỹ thuật ô tô trong tương lai.`,
      img: KTO,
    },
    {
      id: '4',
      newsTit: 'Thiết kế đồ họa: Ngành học tiềm năng',
      desc: `Thiết kế đồ họa: Ngành học tiềm năng\n
Posted on 02/02/2017 by Nguyen Tien Dat\n
02\n
Th2\n
Trong một thập niên trở lại đây, có rất nhiều người cho rằng “thiết kế đồ hoạ” đang là một ngành nghề hái ra tiền khi có rất nhiều chuyên viên về ngành này được săn đón. Tuy nhiên, “thiết kế đồ họa” là một cụm từ khá rộng, bao gồm nhiều loại kỹ năng khác nhau, cho nên cần hiểu rõ ràng và chi tiết hơn mới có thể nhận định về nghề này.\n
\n
\n
Không phải “designer” nào cũng giống nhau\n
Trước hết, có thể tạm định nghĩa “thiết kế đồ họa” là sử dụng máy tính để thực hiện những sản phẩm liên quan đến đồ họa, hình ảnh, mỹ thuật (và cả phim ảnh nữa). Hiện nay, ngành thiết kế đồ họa có ứng dụng rất rộng rãi, cũng chính vì thế nên có nhiều loại phần mềm, công cụ khác nhau để thực hiện những loại việc khác nhau (dù hay bị “người ngoài” gom chung là thiết kế). Chính sự phong phú này dẫn đến việc xuất hiện nhiều designer có những kỹ năng chuyên sâu khác nhau.\n
Chẳng hạn hiện nay chúng ta có những phần mềm đồ họa thông dụng như CorelDRAW, Photoshop, Illustrator,… Các phần mềm này có thể thuộc dạng đồ họa vec-tơ (tức dùng công thức toán để lưu trữ hình ảnh, giúp hình không bị biến dạng khi thay đổi kích thước) như CorelDRAW, Illustrator; hoặc dạng đồ họa điểm ảnh (bitmap) như Photoshop. Tùy theo tính năng từng phần mềm để nhà thiết kế chọn dùng cho từng trường hợp, ví dụ vẽ các họa tiết dùng hay chỉnh sửa, làm đẹp hình ảnh. Tất nhiên, hầu hết designer đều biết sử dụng nhiều phần mềm, nhưng do công việc chuyên môn hóa cao, nên hiện nay thường có xu hướng tập trung kỹ năng theo thao tác hằng ngày. Đó là chưa nói tới các phần mềm đồ họa multimedia (đa phương tiện), đồ họa kỹ xảo 3D,…\n
\n
\n
Vì vậy, designer có thể là người chuyên phục hồi ảnh cũ, người thiết kế quảng cáo, người tạo mẫu bìa báo, người thiết kế logo, người (tham gia) làm kỹ xảo điện ảnh, thiết kế phim hoạt hình Maya 3, thiết kế hình ảnh cho Web, thiết kế nội thất… Những công việc này có thể khác nhau rất nhiều, dẫn đến yêu cầu, thu nhập cũng không tương đồng. Không chỉ như vậy, có nhiều vị trí đòi hỏi những kỹ năng bổ sung để có thể tác nghiệp được (vẽ tay, phần mềm multimedia, sáng tạo trong thiết kế,.,.).\n
Vậy ta phải học như thế nào?\n
Nghề “design” thuộc vào nhóm nghề kỹ năng, điều đó có nghĩa là để trở thành chuyên viên giỏi, bạn cần có tay nghề thành thạo. Như vậy, ngoài việc đi học, bạn cần có thời gian để luyện tập hoặc làm việc để tích lũy kinh nghiệm và nâng cao “tay nghề”.\n
\n
\n
Khi chọn khóa học, bạn cũng nên tham khảo kỹ nội dung giảng dạy, để chọn lựa phù hợp với định hướng công việc muốn làm trong tương lai. Một số nơi giảng dạy trên máy Macintosh (là loại máy mạnh về đồ họa, được giới designer ưa chuộng) cũng là yếu tố lợi thế để học viên quen dùng. Tuy nhiên, học sử dụng phần mềm trên máy PC hay Mac đều đáp ứng được. Một yếu tố “đầu vào” quan trọng là bạn phải yêu thích (hoặc có khiếu càng tốt) về mỹ thuật, về đồ họạ\n
Nghiên cứu tài liệu là kỹ năng nhằm “lên tay” dân thiết kế\n
Nếu bạn thật sự đã xác định hướng đi về ngành này, có thể mạnh dạn theo hẳn một khóa dài hạn 1-2 năm. Còn nếu đang lưỡng lự chưa biết mình có phù hợp hay không, hãy đăng ký một khóa “nhập môn” để tìm hiểu. Có thể nói nghề “design” có rất nhiều tiềm năng trong thời gian sắp tới. Nếu say mê, bạn đừng để chậm chân trong con đường nghề nghiệp thú vị này.`,
      img: TKDH,
    },
    {
      id: '5',
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
      id: '6',
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
      id: '7',
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
      id: '8',
      newsTit: 'Đủ điểm đậu đại học vẫn lựa chọn học Trung cấp nghề',
      desc: `Học cao đẳng, trung cấp nghề không còn là đường vòng mà là đường tắt đón đầu xu thế tuyển dụng của nhiều doanh nghiệp hiện nay trên thị trường lao động.\n
Phải nhận thấy rằng thực tế “thừa thầy, thiếu thợ” ngày nay rất phổ biến. Rất nhiều doanh nghiệp phản ánh sinh viên khi ra trường không đáp ứng được yêu cầu của doanh nghiệp. Số sinh viên tốt nghiệp đại học, cao đẳng ra trường ngày càng nhiều (72.000 cử nhân rơi vào tình trạng thất nghiệp), trong khi công nhân có tay nghề, đáp ứng được yêu cầu lao động thì luôn thiếu.\n
Trước tình trạng đó, xu thế lựa chọn cho con em mình học trường trung cấp nghề không còn quá xa lạ với nhiều gia đình hiện nay. Đó là xu hướng tích cực vì một thực tế có thể nhận thấy rằng học nghề rất hợp lí và có thể tạo thu nhập tốt cho các em sau khi ra trường. Chỉ mất khoảng 1 năm đến 1 năm rưỡi là các em có tay nghề ổn định sau đó tùy thuộc vào nhu cầu cá nhân để học lên đại học.\n
Trong tổng số 900.152 thí sinh đăng kí dự thi tốt nghiệp THPT năm 2019, có 643.122 em đăng ký xét tuyển đại học, cao đẳng, chiếm 71,45%, giảm 9.878 thí sinh so với năm 2019. Số liệu trên được Cục quản lý chất lượng, Bộ GD&ĐT công bố. Có thể thấy rằng xu hướng chọn ngay trường nghề để học sau khi tốt nghiệp THPT là mảng màu sáng của tuyển sinh năm 2020. Như vậy, học sinh và các bậc phụ huynh đã dần thay đổi tư duy đặt hướng đi và nhìn nhận thực sự mình thích cái gì chứ không còn chạy theo tiếng tăm nữa.\n`,
      img: LDHNN,
    },
    {
      id: '9',
      newsTit: 'Hợp tác đào tạo - Tuyển sinh ngành Luật – ĐH Mở Hà Nội 2026',
      desc: `Hợp tác đào tạo\n
Tuyển sinh ngành Luật – ĐH Mở Hà Nội 2022\n
Trung tâm đào tạo từ xa Đại học Mở Hà Nội kết hợp với Trạm Trường Trung cấp Công nghệ và Kinh tế đối ngoại tuyển sinh ngành Kế toán – Hệ từ xa trực tuyến Khóa 18C năm 2022, khóa khai giảng ngày 04/12/2022, nhận hồ sơ bổ sung đến hết ngày 27/12/2022.\n
Ngành Luật là gì?\n
Ngành Luật là đơn vị cấu trúc bên trong của hệ thống pháp luật bao gồm các quy phạm pháp luật, điều chỉnh một loại quan hệ xã hội có cùng tính chất, nội dung thuộc một lĩnh vực đời sống xã hội nhất định. Trong đó có các lĩnh vực chính như: thẩm phán, luật sư, kiểm sát viên, chấp hành viên, công chứng viên, điều tra viên hoặc chuyên viên pháp lý.\n
Đối với trình độ Đại học, ngành Luật thường được phân thành các chuyên ngành như: Luật Dân sự, Luật Hành chính, Luật kinh tế, Luật Đất đai,… . Theo học ngành Luật tùy vào mỗi chuyên ngành sinh viên sẽ được trang bị kiến thức khác nhau.\n
Khi theo học ngành Luật, sinh viên sẽ được cung cấp kiến thức luật tổng quát ở hầu hết các lĩnh vực. Không chỉ riêng kiến thức về Kinh tế, Tài chính, Thương mại, ngành Luật còn cung cấp thêm kiến thức về luật hôn nhân gia đình, quy định chung về tài sản, thừa kế, luật hình sự phần tội phạm, luật môi trường, tội phạm học, bồi thường hợp đồng, tranh chấp thương mại, khiếu nại, tố cáo, khoa học về điều tra hình sự, quyền con người, quyền công dân,…\n
Học ngành Luật ra làm gì?\n
Sinh viên tốt nghiệp chuyên ngành Luật có thể đảm nhiệm các vị trí công việc sau:\n
1. Công chứng viên\n
Là người tư vấn và thẩm định công chứng cho khách hàng, hỗ trợ cho luật sư trong các văn bản pháp lý.\n
2. Chuyên viên pháp lý\n
Đây là vị trí có cơ hội việc làm cao trong tuyển dụng việc làm ngành luật. Chuyên viên pháp lý là người giải quyết, tư vấn những vấn đề liên quan đến pháp luật cho doanh nghiệp.\n
3. Kiểm sát viên/Công tố viên \n
Công việc chính là điều tra, truy tố và buộc tội kẻ phạm pháp trong các vụ án hình sự và phiên tòa xét xử. Ngoài chuyên môn, bạn phải nắm được nghiệp vụ cảnh sát và điều tra tội phạm. Kiểm sát viên/công tố viên cần có bản lĩnh vững vàng, đạo đức, sự liêm khiết…\n
4. Luật sư\n
Luật sư hẳn là công việc được nhiều người nghĩ đến đầu tiên khi nhắc đến ngành luật. Bởi đây là công việc tiêu biểu và thể hiện rõ đặc thù của ngành luật. Luật sư là người áp dụng pháp luật để đảm bảo quyền lợi cho thân chủ. Đồng thời hỗ trợ, đem lại các giải pháp pháp lý cho khách hàng hoặc công ty đó.\n
Yêu cầu đối với Luật sư là tốt nghiệp đại học chuyên ngành luật, và có chứng chỉ hành nghề luật sư. Có kinh nghiệm làm việc ở vị trí tương đương.\n
5. Thư ký tòa án\n
Thư ký tòa án là công chức làm việc tại Tòa án, có nhiệm vụ là ghi chép, tổng hợp các văn bản tố tụng, quản lý hồ sơ, hỗ trợ cho thẩm phán thực hiện chức năng, nhiệm vụ theo quy định của pháp luật. Để ứng tuyển trở thành thư ký tòa án, bạn phải có bằng cử nhân ngành Luật, và phải vượt qua kỳ thi tuyển công chức của Tòa án.\n
6. Giảng viên ngành luật\n
Công việc này phù hợp với những người yêu thích nghiên cứu pháp luật. Bạn có thể trở thành giảng viên ngành luật ở các trường đào tạo chuyên ngành này. Nhu cầu giảng viên ngành luật tại các trường Đại học là rất lớn. Để trở thành giảng viên, bạn cần có bằng thạc sĩ trở lên chuyên ngành luật. Hoặc ít nhất là bằng cử nhân loại giỏi ngành luật hệ chính quy.\n
7. Thẩm phán\n
Thẩm phán là ước mơ lớn của rất nhiều sinh viên ngành luật. Đây là chức danh cao quý thuộc về những người có nhiệm vụ “cầm cân nảy mực” bảo vệ công lý và thực thi pháp luật. Để trở thành thẩm phán là cả một quá trình. Sau khi tốt nghiệp đại học ngành luật, bạn còn phải trải qua 3 bước sau: – Làm thư ký tòa án – Tham gia khóa đào tạo nghiệp vụ thẩm phán – Có quyết định bổ nhiệm thẩm phán của Chánh án Tòa án nhân dân tối cao.\n
8. Pháp chế doanh nghiệp\n
Trong nền kinh tế mở cửa hiện nay, rủi ro trong kinh doanh là rất lớn buộc doanh nghiệp phải tìm cách phòng ngừa. Vì vậy, rất nhiều doanh nghiệp đã thành lập hẳn một phòng/ban pháp chế. Nhiệm vụ của bộ phận này là tư vấn, kiểm soát các hoạt động trong khuôn khổ pháp luật. Từ đó, tránh được những sai phạm có thể xảy ra. Ngoài các doanh nghiệp, bạn có thể tham gia đội ngũ pháp chế trong các ngân hàng thương mại. Nhiệm vụ chính là đảm bảo những hoạt động của ngân hàng không vi phạm pháp luật. Ngoài ra, bạn phải thực hiện rà soát hợp đồng, đảm bảo hợp đồng không bị vô hiệu hóa. Bên cạnh phòng pháp chế, ngân hàng thường có các phòng/ban khác cần nhân sự ngành luật như đầu tư, thu hồi nợ, tố tụng…ngành Luật\n
                       Nhu cầu nhân sự chuyên môn của ngành luật rất lớn, cơ hội việc làm dồi dào với mức lương hấp dẫn.\n
Ngành Luật ở Đại học Mở Hà Nội có gì đặc biệt?\n
Tổng số tín chỉ được đào tạo của ngành này là 148 tín chỉ (chưa trừ miễn môn)\n
Thời gian đào tạo: từ 2,4 – 3,6 năm tùy theo bằng cấp cao nhất mà học viên nộp khi tham gia xét tuyển\n
Chương trình học tại ĐH Mở Hà Nội chú trọng phát triển kỹ năng nghề nghiệp, ngoài các môn cơ sở ngành, sinh viên còn được đào tạo các kỹ năng mềm như kỹ năng giao tiếp, làm việc nhóm, ra quyết định và kỹ năng lãnh đạo. Sinh viên được hỗ trợ thực tập tại các Doanh nghiệp, tổ chức kinh doanh và trải nghiệm qua các công việc thực tế.\n
Hình thức đào tạo: Trực tuyến 100%, sinh viên không cần tới trường lớp và có thể linh hoạt việc học theo kế hoạch tuần\n
Tuyển sinh ngành LUẬT tại Đại học Mở Hà Nội như thế nào?\n
1. Đối tượng tuyển sinh\n
Cán bộ công chức, những người đang làm việc trong cơ quan, tổ chức, doanh nghiệp nhà nước, tư nhân, lực lượng vũ trang, đã có bằng THPT trở lên ( TC, CĐ, ĐH…)\n
Sinh viên đang học tại các trường Cao đẳng, Đại học\n
2. Hình thức tuyển sinh: Xét tuyển hồ sơ đầu vào\n
3. Thủ tục đăng ký xét tuyển:\n
Hồ sơ gồm:\n
– 02 Phiếu đăng ký xét tuyển theo mẫu của Đại học Mở Hà Nội có dán ảnh đóng dấu giáp lai xác nhận của cơ quan đang công tác hoặc chính quyền địa phương (tải mẫu tại ĐÂY)\n
– 02 bằng tốt nghiệp cao nhất (bản sao công chứng)\n
– 02 ảnh 3*4 (có ghi rõ họ tên,ngày sinh sau ảnh)\n
– 02 bản sao công chứng CMTND hoặc thẻ căn cước công dân\n
Lệ phí xét tuyển: 100.000đ/hồ sơ/ngành học\n
Địa điểm nộp hồ sơ: IES-College, 98 Phạm văn Chiêu, Phường Thông Tây Hội, thành phố Hồ Chí Minh`,
      img: LTS,
    },
    {
      id: '10',
      newsTit:
        'EHOU tổ chức lớp học chuyên đề: “Tìm hiểu Luật doanh nghiệp và các hợp đồng kinh tế”',
      desc: `EHOU tổ chức lớp học chuyên đề: “Tìm hiểu Luật doanh nghiệp và các hợp đồng kinh tế” cho sinh viên\n
Đại học mở Hà Nội \n
Vào cuối tháng 2 năm 2026, Trung tâm đào tạo Elearning đã mời các diễn giả có nhiều kinh nghiệm tới tham gia giao lưu với các bạn sinh viên EHOU chuyên đề về Luật doanh nghiệp và hợp đồng kinh tế. \n
Pháp luật về doanh nghiệp bao gồm những nội dung về nhận thức chung về doanh nghiệp (DN) và pháp luật DN; các loại hình DN theo pháp luật Việt Nam; tổ chức, quản lý nội bộ DN; các quyền và nghĩa vụ của DN; thành lập, đăng kí kinh doanh, tổ chức lại và giải thể DN. Để hiểu được những đặc trưng pháp lý của các loại hình doanh nghiệp, rất đông các anh chị sinh viên EHOU tham dự.\n
Để chia sẻ các kinh nghiệm trong xử lý các tình huống phát sinh trong công việc cho sinh viên, Trung tâm đào tạo Elearning đã mời các diễn giả có nhiều kinh nghiệm tham gia giao lưu.\n
Trong ảnh: (Từ phải qua trái: Thạc sỹ Trần Việt Hưng – Trưởng ban pháp chế của Hãng hàng không quốc gia Việt Nam và Luật sư, thạc sỹ Nguyễn Thị Thu Hoài – Giám đốc công ty TNHH Thuế và Luật Hà Nội)\n
Ngay từ đầu khi được ThS. Trần Việt Hưng giới thiệu về Luật doanh nghiệp các anh chị sinh viên rất chăm chú lắng nghe và tích cực đặt các câu hỏi cho diễn giả. Nhiều sinh viên đang là quản lý các doanh nghiệp hoặc đang chuẩn bị để khởi nghiệp đã đưa các vấn đề rắc rối của mình để chia sẻ và được các diễn giả nhiệt tình tư vấn giải đáp.\n
Anh Nguyễn Kim Đính – lớp EHCT26 với câu hỏi: “Công ty cổ phần do các thành viên góp vốn. Khi kinh doanh phá sản, vỡ nợ thì các khoản nợ của DN sẽ xử lý như thế nào, người điều hành, quản lý doanh nghiệp chịu trách nhiệm ra sao?”. \n
Hoặc anh Nguyễn Văn Tiến – lớp BHN55 thắc mắc: “Tôi có cơ sở kinh doanh nhỏ với 10 lao động hoạt động thường xuyên nên thành lập công ty gì và trong trường hợp 10 người này liên tục thay đổi, không cố định sẽ xử lý như thế nào? Hay anh Nguyễn Văn Sao – lớp B56 có băn khoăn:”Tôi đã đăng ký và hiện tại đang kinh doanh thức ăn chăn nuôi, giờ muốn bán thêm thuốc thú ý có được không?”.\n
Những vấn đề của sinh viên nêu ra đã được các diễn giả tư vấn và giải đáp đầy đủ. Có lẽ ai cũng mong muốn buổi giao lưu kéo dài hơn nữa, để sinh viên có cơ hội được gỡ rối cũng như học cách giải quyết các tình huống thực tế xảy ra của diễn giả cũng như các bạn học.\n
Theo nhận xét của Anh Trần Xuân Hùng – lớp AHN14: “Buổi giao lưu chuyên đề về ngành Luật kinh tế (Luật doanh nghiệp và các hợp đồng kinh tế) rất hữu ích, tôi đã cập nhật được nhiều thông tin mới tại đây. Tuy nhiên 2 lĩnh vực này rộng và có nhiều vấn đề, thời gian 1 buổi sáng là chưa thể đủ. Rất mong thời gian tới, Trung tâm đào tạo Elearning sẽ tổ chức nhiều hơn nữa các chuyên đề sinh viên EHOU có thêm 1 kênh thông tin, học tập thực tế, giúp quá trình học đạt kết quả cao”.\n
Giao lưu chuyên đề tháng 2 đã mang lại cho sinh viên nhiều kiến thức hữu ích. Sinh viên có thể tiếp tục đặt các câu hỏi cho diễn giả hoặc cho các giảng viên doanh nghiệp của mình trên diễn đàn lớp học. Niềm vui của sinh viên trong một giao lưu bổ ích, chị Đào Thị Huyền – Lớp EHCT54 chia sẻ cảm xúc “Tôi rất cảm ơn Trung tâm đã tổ chức buổi giao lưu thật hữu ích cho sinh viên EHOU. Tôi đang học ngành Luật kinh tế, rất mong được tham dự nhiều buổi giao lưu chuyên ngành luật như vậy để nâng cao kiến thức hơn”.`,
      img: HTDHM,
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
