const ProductSummary = require("./productSummary");

module.exports = class PriceChangeFeedItem {
    constructor(productSummary, date, priceChange) {
        this.productSummary = productSummary;
        this.date = date;
        this.priceChange = priceChange;
    }
}