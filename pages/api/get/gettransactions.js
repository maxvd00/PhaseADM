import mysql from "../../../lib/mysql";
import WooCommerce from "../../../lib/woocomerce";

export default async function getTransactions(query) {
  // limit the amount of results
  const ResultsLimit = query.limit ? parseInt(query.limit) : 10;
  //  show results from woocomerce 
  const ShowWooCommerceTransactions = (query.WooCommerce === "false") ? false : true;

  // phaseADM orders/database
  let transactionsPhase = await mysql.query(
    `select * from transactions WHERE active = true limit ${ResultsLimit}`
  );
  transactionsPhase.forEach((element) => {
    element.product = [element.product];
    element.provider = "PhaseADM";
  });

  // Woocommerce orders
  let WooCommerceTransactions = [];
  if (ShowWooCommerceTransactions) {
    const WooCommerceTransactionsRaw = await WooCommerce.get("orders", {
      per_page: ResultsLimit,
    });
    WooCommerceTransactions = WooCommerceTransactionsRaw.data.map((order) => {
      return WoocommerceFormatter(order);
    });
  }

  return WooCommerceTransactions.concat(...transactionsPhase);
}

function WoocommerceFormatter(WooCommerceData) {
  const data = {
    id: WooCommerceData.id,
    name: WooCommerceData.line_items.map((item) => {
      return item.name;
    }),
    type: WoocommerceTypeFormatter(WooCommerceData.type),
    date: WooCommerceData.date_created_gmt,
    catagory: "order",
    vat: WooCommerceData.cart_tax,
    price: WooCommerceData.total,
    provider: "woocommerce",
  };

  return data;
}

function WoocommerceTypeFormatter(type) {
  if (type === "refunded") {
    return "expense";
  } else {
    return "income";
  }
}
