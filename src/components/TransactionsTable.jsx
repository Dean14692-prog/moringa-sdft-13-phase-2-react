import TransactionsHead from "./TransactionHead";
import TransactionsRow from "./TransactionRow";
export default function TransactionsTable() {
  return (
    <table className="table table-striped-columns">
      <TransactionsHead />
      <TransactionsRow />
      <TransactionsRow />
    </table>
  );
}
