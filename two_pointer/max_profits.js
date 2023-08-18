function max_profits(prices) {
  if (prices.length <= 1) return 0;

  let max_profit = 0;
  let left_p = 0;
  let right_p = 1;

  while (right_p < prices.length) {
    const buy_value = prices[left_p];
    const sell_value = prices[right_p];
    const curr_profit = sell_value - buy_value;

    if (curr_profit <= 0) {
      /**
       * no profit
       * - update left, right pointers for 1
       */
      left_p = right_p;
      right_p += 1;
    } else {
      /** have some profit */
      max_profit = Math.max(curr_profit, max_profit);
      right_p += 1;
    }
  }
  return max_profit;
}

// const prices = [7, 1, 5, 3, 6, 4]
const prices = [1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9];
const o = max_profits(prices);

// t 1
// max_profit = 1, buy_value = 1, sell_value = 2, profit = 2 - 1 = 1

// // t2
// max_profit = 1, buy_value = 1, sell_value = 4, profit = 4 - 1 = 3;
// max_profit = 3, left_p = 0, right_p = 3

// // t3
// max_profit = 3, but_value = 1, sell_value = 2, profit = 2 - 1 = 1
// max_profit = 3, left_p = 0, right_p = 4

// // t4
// max_profit = 3, but_value = 1, sell_value = 5, profit = 5 - 1 = 4
// max_profit = 4, left_p = 0, right_p = 4
