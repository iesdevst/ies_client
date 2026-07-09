interface DetailsBonusProps {
  dark: boolean;
}

const DetailsBonus: React.FC<DetailsBonusProps> = (props) => {
  const { dark } = props;

  const card = dark ? 'bg-[#252540] border-[#3D3B5C]' : 'bg-[#F0EFF8] border-[#E5E3F2]';
  const heading = dark ? 'text-[#E8E7F5]' : 'text-[#1A1A2E]';
  const text = dark ? 'text-[#C5C4DC]' : 'text-[#374151]';
  const link = dark ? 'text-[#A8A6D0] hover:text-white' : 'text-[#474669] hover:text-[#5c5a8a]';

  return (
    <div>
      {/* Section label */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[11px] font-black uppercase tracking-widest text-[#474669]">
          Có thể bạn quan tâm
        </span>
        <div className={`flex-1 h-px ${dark ? 'bg-[#3D3B5C]' : 'bg-[#E5E3F2]'}`} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Contact info block */}
        <div className={`rounded-xl p-5 border ${card}`}>
          <h4 className={`text-[12px] font-black uppercase tracking-widest text-[#474669] mb-4 pb-2.5 border-b border-[#474669]/30`}>
            Thông tin liên hệ
          </h4>
          <p className={`text-[15px] leading-[1.8] mb-4 ${text}`}>
            Để học sinh và phụ huynh có thêm cơ hội trải nghiệm thực tế, tham
            quan môi trường học tập và được tư vấn hướng nghiệp trực tiếp,
            Trường mở cửa từ thứ Hai đến thứ Sáu, 07:30 – 17:00 tại cơ sở
            chính: <strong className={heading}>98 Phạm Văn Chiêu, Phường Thông Tây Hội, TP. Hồ Chí Minh.</strong>
          </p>
          <p className={`text-[15px] leading-[1.8] ${text}`}>
            Đăng ký trải nghiệm và tư vấn trực tuyến tại:{' '}
            <a
              href="https://www.ies.edu.vn/demics-detail/infoTech?tab=register"
              target="_blank"
              rel="noopener noreferrer"
              className={`underline font-medium transition-colors ${link}`}
            >
              ies.edu.vn/register
            </a>
          </p>
        </div>

        {/* Contact details block */}
        <div className={`rounded-xl p-5 border ${card}`}>
          <h4 className={`text-[12px] font-black uppercase tracking-widest text-[#474669] mb-4 pb-2.5 border-b border-[#474669]/30`}>
            Phòng tuyển sinh IES
          </h4>
          <div className="space-y-3">
            <div className={`flex items-start gap-3 text-[15px] ${text}`}>
              <span className="text-[#474669] shrink-0 mt-0.5">📍</span>
              <span>
                <strong className={heading}>Cơ sở chính:</strong>{' '}
                98 Phạm Văn Chiêu, Phường Thông Tây Hội, TP. Hồ Chí Minh
              </span>
            </div>
            <div className={`flex items-center gap-3 text-[15px] ${text}`}>
              <span className="text-[#474669] shrink-0">📞</span>
              <span>
                <strong className={heading}>Hotline:</strong>{' '}
                <a
                  href="tel:0901309866"
                  className={`font-medium transition-colors ${link}`}
                >
                  0901.309.866
                </a>
              </span>
            </div>
            <div className={`flex items-center gap-3 text-[15px] ${text}`}>
              <span className="text-[#474669] shrink-0">💬</span>
              <span>
                <strong className={heading}>Zalo:</strong>{' '}
                <a
                  href="https://zalo.me/0901309866"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-medium transition-colors ${link}`}
                >
                  Trường Trung Cấp Tin Học Kinh Tế Sài Gòn
                </a>
              </span>
            </div>
            <div className={`flex items-center gap-3 text-[15px] ${text}`}>
              <span className="text-[#474669] shrink-0">👍</span>
              <span>
                <strong className={heading}>Fanpage:</strong>{' '}
                <a
                  href="https://www.facebook.com/iescollege.edu.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-medium transition-colors ${link}`}
                >
                  IES College
                </a>
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DetailsBonus;
