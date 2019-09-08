const PriceChangeFeedItem = require("../models/priceChangeFeedItem");
const ProductSummary = require("../models/productSummary");

module.exports = function (app) {
    app.get("/PriceFeed/", function (req, res) {
        res.send(changes);
    });
};

const changes = [
    new PriceChangeFeedItem(
        new ProductSummary(8215101, "BrewDog", "Funk v Punk", 59.90, 500.00),new Date(), -5
        ),
    new PriceChangeFeedItem(
        new ProductSummary(8215101, "BrewDog", "Funk v Punk", 59.90, 500.00), new Date(Date.now() - 1 * 864e5), 5
        ),
    new PriceChangeFeedItem(
        new ProductSummary(8215101, "BrewDog", "Funk v Punk", 59.90, 500.00), new Date(Date.now() - 1 * 864e5), 5
    ),
    new PriceChangeFeedItem(
        new ProductSummary(8215101, "BrewDog", "Funk v Punk", 59.90, 500.00), new Date(Date.now() - 2 * 864e5), -5
    ),
    new PriceChangeFeedItem(
        new ProductSummary(8215101, "BrewDog", "Funk v Punk", 59.90, 500.00), new Date(Date.now() - 5 * 864e5), 5
    )
];


