import type { AdmissionTable } from '@/components/SPS/types';

export interface AdmTableProps {
  admTable: AdmissionTable;
  dark: boolean;
}

const AdmTable: React.FC<AdmTableProps> = (props) => {
  const { admTable, dark } = props;

  const borderCls = dark ? 'border-[#3D3B5C]' : 'border-[#E5E3F2]';
  const cellCls = `px-4 py-3 text-[14px] border-b ${borderCls} ${dark ? 'text-[#C5C4DC]' : 'text-[#374151]'}`;
  const evenRow = dark ? 'bg-[#252540]' : 'bg-[#F0EFF8]';
  const oddRow = dark ? 'bg-[#1E1E35]' : 'bg-white';

  return (
    <div className='my-7 rounded-xl overflow-hidden shadow-sm border border-[#474669]/20'>
      <table className='w-full border-collapse'>
        <thead>
          <tr className='bg-[#474669]'>
            <th className='px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wide text-white w-10'>
              STT
            </th>
            <th className='px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wide text-white'>
              Ngành, nghề tuyển sinh
            </th>
            <th className='px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wide text-white w-28'>
              Mã ngành
            </th>
            <th className='px-4 py-3 text-right text-[11px] font-bold uppercase tracking-wide text-white w-24'>
              Chỉ tiêu
            </th>
          </tr>
        </thead>
        <tbody>
          {admTable.rows.map((row, i) => (
            <tr key={row.stt} className={i % 2 === 0 ? oddRow : evenRow}>
              <td className={`${cellCls} text-center`}>{row.stt}</td>
              <td className={cellCls}>{row.major}</td>
              <td className={cellCls}>{row.code}</td>
              <td className={`${cellCls} text-right font-semibold`}>
                {row.quota}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className='bg-[#474669]'>
            <td
              colSpan={3}
              className='px-4 py-3 text-white text-[12px] font-bold uppercase tracking-wide'
            >
              Tổng cộng
            </td>
            <td className='px-4 py-3 text-white text-[14px] font-bold text-right'>
              {admTable.total.toLocaleString('vi-VN')}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default AdmTable;
