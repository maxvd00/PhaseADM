import mysql from "../../../lib/mysql";
import WooCommerce from "../../../lib/woocomerce";
import getTransactions from "./gettransactions";

export default async function handler(req, res) {
  // fetch from phaseADM database
  const balance = await mysql
    .query(
      'SELECT ROUND(SUM((SELECT SUM(prijs * -1) as prijs from transactions WHERE Type = "expenses" ) + (SELECT SUM(prijs) from transactions WHERE Type = "income" )),2) AS total'
    )
    .catch((err) => {
      console.error(err);
    });

  // fetch the sales numbers
  const WooCommerceSales = await WooCommerce.get("reports/sales", {
    date_min: "2004-06-17",
    date_max: "2038-01-19",
  }).catch((err) => {
    console.error(err);
  });

  const data = {
    balance: parseFloat(WooCommerceSales.data[0].total_sales) + parseFloat(balance[0].total),
    transactions: await getTransactions(req.query),
  };

  res.status(200).json(data);
}
