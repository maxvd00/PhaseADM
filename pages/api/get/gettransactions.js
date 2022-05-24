import mysql from "../../../lib/mysql"
import WooCommerce from "../../../lib/woocomerce"

export default async function getTransactions(query){
    const ResultsLimit = query.limit ? parseInt(query.limit) : 10

    let transactions = [];
    
    // const transactionsPhase = await mysql.query(`select * from transactions limit ${ResultsLimit}`)

    // transactions.forEach(element => {
    //     element.provider = "PhaseADM"
    // });

    // transactions.push(transactionsPhase)
    

    const WooCommerceTransactions = await WooCommerce.get("orders",{per_page:1000})
    console.log(WooCommerceTransactions)
    transactions.push(WooCommerceTransactions.data)

    return transactions
}

function WoocommerceFormatter(WooCommerceData){
    const data = {
        "id": 1,
        "name": "t-shirts",
        "type": "income",
        "date": WooCommerceData.date_created_gmt,
        "catagory": "overigekosten",
        "vat": 21,
        "price": 21.99,
        "provider": "woocommerce"
    }
    
    return data
}