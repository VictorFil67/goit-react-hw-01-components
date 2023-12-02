import s from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.head}>
        <tr>
          <th className={s.headTh}>Type</th>
          <th className={s.headTh}>Amount</th>
          <th className={s.headTh}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, idx) => (
          <tr key={item.id} className={idx % 2 !== 0 ? s.grey : ' '}>
            <td className={s.tbodyTd}>{item.type}</td>
            <td className={s.tbodyTd}>{item.amount}</td>
            <td className={s.tbodyTd}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
