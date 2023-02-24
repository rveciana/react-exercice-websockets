import { Order } from "./model";

export interface TradeProps {
  trade: Order;
}
export const Trade = ({ trade }: TradeProps) => {
  return (
    <div>
      <span>{trade.type}</span>
      <span>{trade.rate}</span>
      <span>{trade.amount}</span>
    </div>
  );
};
