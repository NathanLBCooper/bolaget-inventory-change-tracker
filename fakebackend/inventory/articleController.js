module.exports = function (app) {
    app.get("/article/:id", function (req, res) {
        res.send(articles[req.params.id] || articles[7473401]);
    });
};

const articles = {
    // first few recent
    7473401: { "id": 7473401, "articleId": 1013219, "name": "Amarone della Valpolicella", "name2": "Mezzo Monte", "producer": "Antiche Terre Venete", "importer": "WineWorld AB", "type": "Kryddigt & Mustigt", "category": "Rött vin", "origin": "Venetien", "countryOfOrigin": "Italien", "packaging": "Flaska", "vintage": "2013", "price": 279.00, "pricePerLitre": 372.00, "alcohol": "15.00%", "volume": 750, "expired": false, "history": [{ "timestamp": "2019-09-28T05:16:00Z", "changes": [{ "name": "Type", "oldValue": "", "newValue": "Kryddigt & Mustigt" }] }], "timestamp": "2020-02-03T22:33:03.1287323Z", "stock": "/article/7473401/1013219/stock", "uri": "/article/7473401" },
    7508801: { "id": 7508801, "articleId": 1029870, "name": "Chablis", "name2": "Grand Cru Les Clos Clotilde Davenne", "producer": "Clotilde Davenne", "importer": "Terrific Wines AB", "type": "", "category": "Vitt vin", "origin": "Bourgogne", "countryOfOrigin": "Frankrike", "packaging": "Flaska", "vintage": "2015", "price": 599.00, "pricePerLitre": 798.67, "alcohol": "13.50%", "volume": 750, "expired": false, "history": [{ "timestamp": "2019-09-28T05:16:00Z", "changes": [{ "name": "Vintage", "oldValue": "2013", "newValue": "2015" }] }], "timestamp": "2020-02-03T22:33:03.1287323Z", "stock": "/article/7508801/1029870/stock", "uri": "/article/7508801" },
    800002: { "id": 800002, "articleId": 163877, "name": "Graham's", "name2": "Late Bottled Vintage", "producer": "W & J Graham & Co", "importer": "Ward Wines AB", "type": "Portvin", "category": "Aperitif och dessert", "origin": "Douro", "countryOfOrigin": "Portugal", "packaging": "Flaska", "vintage": "2014", "price": 99.00, "pricePerLitre": 264.00, "alcohol": "20.00%", "volume": 375, "expired": false, "history": [{ "timestamp": "2019-09-28T05:16:00Z", "changes": [{ "name": "Vintage", "oldValue": "2013", "newValue": "2014" }] }], "timestamp": "2020-02-03T22:33:03.1287323Z", "stock": "/article/800002/163877/stock", "uri": "/article/800002" },
    7274301: { "id": 7274301, "articleId": 23475466, "name": "Grand Minéral", "name2": "Chardonnay", "producer": "Domaine Maire & Fils", "importer": "Giertz Vinimport AB", "type": "Friskt & Fruktigt", "category": "Vitt vin", "origin": "Jura", "countryOfOrigin": "Frankrike", "packaging": "Flaska", "vintage": "2018", "price": 109.00, "pricePerLitre": 145.33, "alcohol": "12.50%", "volume": 750, "expired": false, "history": [{ "timestamp": "2019-09-28T05:16:00Z", "changes": [{ "name": "Type", "oldValue": "", "newValue": "Friskt & Fruktigt" }] }], "timestamp": "2020-02-03T22:33:03.1287323Z", "stock": "/article/7274301/23475466/stock", "uri": "/article/7274301" },
    // first few alcohol
    // 7508801
    // 800002
    582401: { "id": 582401, "articleId": 395744, "name": "50°", "name2": "Riesling Trocken", "producer": "G H von Mumm", "importer": "Henkell Freixenet Sweden AB", "type": "Friskt & Fruktigt", "category": "Vitt vin", "origin": "Rheingau", "countryOfOrigin": "Tyskland", "packaging": "Flaska", "vintage": "2018", "price": 99.00, "pricePerLitre": 132.00, "alcohol": "12.00%", "volume": 750, "expired": false, "history": [{ "timestamp": "2019-09-28T05:16:00Z", "changes": [{ "name": "Vintage", "oldValue": "2017", "newValue": "2018" }] }], "timestamp": "2020-02-03T22:33:03.1287323Z", "stock": "/article/582401/395744/stock", "uri": "/article/582401" },
    // first few vintage
    // 7508801
    // 800002
    // 582401
    // first few price
    7164301: { "id": 7164301, "articleId": 1192463, "name": "APPELLO Aperitif", "name2": "by Carolina Gynning", "producer": "Gynning Wine", "importer": "Kämpinge Trading AB", "type": "Aperitif", "category": "Aperitif och dessert", "origin": "", "countryOfOrigin": "Sverige", "packaging": "Flaska", "vintage": "", "price": 99.00, "pricePerLitre": 132.00, "alcohol": "15.00%", "volume": 750, "expired": false, "history": [{ "timestamp": "2019-09-24T21:41:00Z", "changes": [{ "name": "Price", "oldValue": 101.00, "newValue": 99.00 }, { "name": "PricePerLitre", "oldValue": 134.67, "newValue": 132.00 }] }], "timestamp": "2020-02-03T22:33:03.1287323Z", "stock": "/article/7164301/1192463/stock", "uri": "/article/7164301" },
    1070702: { "id": 1070702, "articleId": 1101589, "name": "Tegnér & Son", "name2": "Traditionell Julsnaps", "producer": "Tegner & Son", "importer": "Galatea AB", "type": "Kryddat brännvin", "category": "Akvavit och Kryddat brännvin", "origin": "", "countryOfOrigin": "Sverige", "packaging": "Flaska", "vintage": "", "price": 169.00, "pricePerLitre": 482.86, "alcohol": "40.00%", "volume": 350, "expired": false, "history": [{ "timestamp": "2019-09-17T05:02:00Z", "changes": [{ "name": "Sortiment", "oldValue": "TSS", "newValue": "BS" }] }, { "timestamp": "2019-09-18T05:03:00Z", "changes": [{ "name": "Price", "oldValue": 149.00, "newValue": 169.00 }, { "name": "PricePerLitre", "oldValue": 425.71, "newValue": 482.86 }] }], "timestamp": "2020-02-03T22:33:03.1287323Z", "stock": "/article/1070702/1101589/stock", "uri": "/article/1070702" },
    3332303: { "id": 3332303, "articleId": 16461754, "name": "Burgsviks", "name2": "Winterale", "producer": "Burgsviks bryggeri", "importer": "Burgsviks Bryggeri AB", "type": "Ale brittisk-amerikansk stil", "category": "Öl", "origin": "Gotlands län", "countryOfOrigin": "Sverige", "packaging": "Flaska", "vintage": "", "price": 23.70, "pricePerLitre": 71.82, "alcohol": "5.50%", "volume": 330, "expired": false, "history": [{ "timestamp": "2019-09-18T05:03:00Z", "changes": [{ "name": "Price", "oldValue": 22.70, "newValue": 23.70 }, { "name": "PricePerLitre", "oldValue": 68.79, "newValue": 71.82 }] }, { "timestamp": "2019-10-25T00:05:00Z", "changes": [{ "name": "Alcohol", "oldValue": "5.00%", "newValue": "5.50%" }] }], "timestamp": "2020-02-03T22:33:03.1287323Z", "stock": "/article/3332303/16461754/stock", "uri": "/article/3332303" },
    // first few type
    // 7473401
    // 7274301
    7352201: { "id": 7352201, "articleId": 24387460, "name": "Weinmann", "name2": "Grüner Veltliner Klassik", "producer": "ViniMundi", "importer": "The Wine Team Global AB", "type": "Friskt & Fruktigt", "category": "Vitt vin", "origin": "Niederösterreich", "countryOfOrigin": "Österrike", "packaging": "Flaska", "vintage": "2018", "price": 89.00, "pricePerLitre": 89.00, "alcohol": "12.00%", "volume": 1000, "expired": false, "history": [{ "timestamp": "2019-09-28T05:16:00Z", "changes": [{ "name": "Type", "oldValue": "", "newValue": "Friskt & Fruktigt" }] }], "timestamp": "2020-02-03T22:33:03.1287323Z", "stock": "/article/7352201/24387460/stock", "uri": "/article/7352201" },
    // First two vodkas alphabetically
    8708201: { "id": 8708201, "articleId": 799020, "name": "1850", "name2": "Vodka", "producer": "Tevsjö Destilleri Järvsö AB", "importer": "Tevsjö Destilleri i Järvsö AB", "type": "Vodka", "category": "Vodka och Brännvin", "origin": "Gävleborgs län", "countryOfOrigin": "Sverige", "packaging": "Flaska", "vintage": "", "price": 362.00, "pricePerLitre": 517.14, "alcohol": "37.50%", "volume": 700, "expired": false, "history": null, "timestamp": "2020-02-03T22:33:03.1287323Z", "stock": "/article/8708201/799020/stock", "uri": "/article/8708201" },
    8752902: { "id": 8752902, "articleId": 1034879, "name": "AB Svenska Sprit Vodka", "name2": "", "producer": "AB Svenska Sprit TBH", "importer": "AB Svenska Sprit TBH", "type": "Vodka", "category": "Vodka och Brännvin", "origin": "Stockholms län", "countryOfOrigin": "Sverige", "packaging": "Flaska", "vintage": "", "price": 299.00, "pricePerLitre": 598.00, "alcohol": "40.00%", "volume": 500, "expired": false, "history": null, "timestamp": "2020-02-03T22:33:03.1287323Z", "stock": "/article/8752902/1034879/stock", "uri": "/article/8752902" }
};