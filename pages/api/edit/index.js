import mysql from "../../../lib/mysql";

export default async function handler(req, res) {
    if(req.method === "POST" && req.headers["Content-Type"] === "application/json"){
    await mysql.query(`
        UPDATE transactions SET product = '${req.body.product}', prijs = ${req.body.prijs}, BTW = ${req.body.vat}, type = '${req.body.type}', date = '${req.body.date}', catagory = '${req.body.catagory}' WHERE id = ${parseInt(req.body.id)}
    `)
    return res.status(200).send();
    } else {
        return res.status(400).send("wong http method or content-type")
    }
}
