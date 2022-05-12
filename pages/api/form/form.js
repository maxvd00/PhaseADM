import mysql from "../../../lib/mysql";

export default async function handler(req, res) {
    
    // get the submitted data in the request body 
    const body = req.body

    //see the responses 
    console.log('body: ', body)
    console.log(req.body)

    // res.status(200).send(req.body)
    // res.status(301).send(req.body)

    // check of the first and lastname are correct
    await mysql.query(
        `INSERT INTO transactions (id, product, prijs, BTW, type) VALUES (NULL, '${req.body.product}', '${parseFloat(req.body.price)}', '${parseInt(req.body.vat)}', '${req.body.type}');`
    );


    if(!body.product || !body.price || !body.vat || !body.type ) {
        //sends 301 error 
        return res.status(301).json({data: "iets niet correct" });


    }else 
    return res.status(200).json({data: `${body.product} ${body.price} ${body.vat} ${body.type}`});
}
