import mysql from "../../../lib/mysql";

export default async function handler(req, res) {
  if (
    req.method === "POST" &&
    req.headers["content-type"] === "application/json"
  ) {
    // insert it into the database
    await mysql.query(
      `INSERT INTO transactions (id, product, prijs, BTW, Type,date,catagory,active) VALUES (NULL, '${req.body.data.product
      }', '${parseFloat(req.body.data.price)}', '${parseInt(req.body.data.vat)}', '${req.body.data.type
      }',CURDATE(),'${req.body.data.catagory}',TRUE);`
    );
    res.status(200).send(req.body);
  } else {
    // there has been a wrong error or no content type is wrong
    res.status(200).send("wrong method or no valid content type");
  }
}
