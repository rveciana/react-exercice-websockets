/**[
  "[pair]",
  {
    "bids": [
      [
        "order rate",
        "order amount"
      ],
      [
        "order rate",
        "order amount"
      ]
    ],
    "asks": [
      [
        "order rate",
        "order amount"
      ],
      [
        "order rate",
        "order amount"
      ]
    ],
    "last_update_at": "timestamp (unix time)"
  }
]
*/

// bids -> buy asks -> sell

export interface Order {
  type: "buy" | "sell";
  rate: number;
  amount: number;
}
