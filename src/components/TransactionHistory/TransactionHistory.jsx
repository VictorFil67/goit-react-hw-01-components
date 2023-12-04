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
        {items.map(({ type, amount, currency, id }, idx) => (
          <tr key={id} className={idx % 2 !== 0 ? s.grey : ' '}>
            <td className={s.tbodyTd}>{type}</td>
            <td className={s.tbodyTd}>{amount}</td>
            <td className={s.tbodyTd}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
