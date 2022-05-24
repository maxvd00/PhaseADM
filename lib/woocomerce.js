const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
require("dotenv").config()

const WooCommerce = new WooCommerceRestApi({
    url: process.env.WOOCOMERCE_URL,
    consumerKey: process.env.WOOCOMMERCE_API_KEY,
    consumerSecret: process.env.WOOCOMMERCE_API_KEY_SECRET,
    version: 'wc/v3',
    queryStringAuth: true // Force Basic Authentication as query string true and using under HTTPS
  });

export default WooCommerce;