import mysql from "../../../lib/mysql";

export default async function handler(req, res) {
    if(req.method === "DELETE"){
    await mysql.query(`
        UPDATE transactions SET active = false WHERE id = ${req.query.transactionid}
    `)
    return res.status(200).send();
    } else {
        return res.status(400).send("wong http method or content-type")
    }
}
