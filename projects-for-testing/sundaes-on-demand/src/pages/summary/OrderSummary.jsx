import SummaryForm from "./SummaryForm";
import { useOrderDetails } from "../../context/OrderDetails";
import { formatCurrency } from "../../utilities";

export default function OrderSummany() {
  const { totals, optionCounts } = useOrderDetails();

  const scoopArray = Object.entries(optionCounts.scoops); // [['chocolate',2], ['vanilla',1]]
  const scoopList = scoopArray.map(([key, value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ));

  const toppingArray = Object.key(optionCounts.toppings); // ['M&Ms', 'Gummi Bear']
  const toppingList = toppingArray.map((key) => <li key={key}>{key}</li>);

  return (
    <div>
      <h1>OrderSummary</h1>
      <h2>Scoops: {formatCurrency(totals.scoops)}</h2>
      <ul>{scoopList}</ul>
      <h2>Toppings: {formatCurrency(totals.toppings)}</h2>
      <ul>{toppingList}</ul>
      <SummaryForm />
    </div>
  );
}
