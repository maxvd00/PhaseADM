import mysql from "../../../lib/mysql";
import getTransactions from "./gettransactions";

export default async function handler(req, res) {
  const balance = await mysql.query(
    'SELECT ROUND(SUM((SELECT SUM(prijs * -1) as prijs from transactions WHERE Type = "expenses" ) + (SELECT SUM(prijs) from transactions WHERE Type = "income" )),2) AS total'
  );

  let data = {
    transactions: await getTransactions(req.query),
    balance: balance[0].total
  }

  res.status(200).json(data);
}

