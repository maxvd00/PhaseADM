import mysql from "../../../lib/mysql";

export default async function handler(req, res) {
  if (req.method === "POST" || req.headers["content-type"] === "application/json") {

    // insert it into the database
    await mysql.query(
      `INSERT INTO transactions (id, product, prijs, BTW, Type) VALUES (NULL, '${req.body.product}', '${parseFloat(req.body.price)}', '${parseInt(req.body.vat)}', '${req.body.type}');`
    );
    res.status(200).send("success");
  } else {
    // there has been a wrong error or no content type is wrong
    res.status(301).send("wrong method or no valid content type");
  }
}
