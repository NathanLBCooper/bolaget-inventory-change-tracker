module.exports = function (app) {
    app.get("/assortment", function (req, res) {
        res.send(categories);
    });

    app.get("/assortment/:category", function (req, res) {
        // just Vodka och Brännvin (there's a lot of data)
        res.send(assortment[req.params.category]);
    });
};

const categories = {
    "etag": null,
    "timestamp": "2020-01-21T21:32:49.4699999Z",
    "data": [
        { "name": "Vodka och Brännvin", "uri": "/assortment/Vodka%20och%20Br%C3%A4nnvin" },
        { "name": "Rött vin", "uri": "/assortment/R%C3%B6tt%20vin" },
        { "name": "Vitt vin", "uri": "/assortment/Vitt%20vin" },
        { "name": "Öl", "uri": "/assortment/%C3%96l" },
        { "name": "Tequila och Mezcal", "uri": "/assortment/Tequila%20och%20Mezcal" },
        { "name": "Whisky", "uri": "/assortment/Whisky" },
        { "name": "Cognac", "uri": "/assortment/Cognac" },
        { "name": "Akvavit och Kryddat brännvin", "uri": "/assortment/Akvavit%20och%20Kryddat%20br%C3%A4nnvin" },
        { "name": "Aperitif och dessert", "uri": "/assortment/Aperitif%20och%20dessert" },
        { "name": "Rom", "uri": "/assortment/Rom" }, { "name": "Likör", "uri": "/assortment/Lik%C3%B6r" },
        { "name": "Mousserande vin", "uri": "/assortment/Mousserande%20vin" },
        { "name": "Gin och Genever", "uri": "/assortment/Gin%20och%20Genever" },
        { "name": "Armagnac och Brandy", "uri": "/assortment/Armagnac%20och%20Brandy" },
        { "name": "Glögg och Glühwein", "uri": "/assortment/Gl%C3%B6gg%20och%20Gl%C3%BChwein" },
        { "name": "Cider", "uri": "/assortment/Cider" }, { "name": "Smaksatt sprit", "uri": "/assortment/Smaksatt%20sprit" },
        { "name": "Rosévin", "uri": "/assortment/Ros%C3%A9vin" },
        { "name": "Blandlådor vin", "uri": "/assortment/Blandl%C3%A5dor%20vin" },
        { "name": "Alkoholfritt", "uri": "/assortment/Alkoholfritt" },
        { "name": "Bitter", "uri": "/assortment/Bitter" },
        { "name": "Frukt och Druvsprit", "uri": "/assortment/Frukt%20och%20Druvsprit" },
        { "name": "Anissprit", "uri": "/assortment/Anissprit" },
        { "name": "Presentförpackningar", "uri": "/assortment/Presentf%C3%B6rpackningar" },
        { "name": "Sake", "uri": "/assortment/Sake" },
        { "name": "Grappa och Marc", "uri": "/assortment/Grappa%20och%20Marc" },
        { "name": "Vermouth", "uri": "/assortment/Vermouth" },
        { "name": "Drinkar och Cocktails", "uri": "/assortment/Drinkar%20och%20Cocktails" },
        { "name": "Calvados", "uri": "/assortment/Calvados" },
        { "name": "Punsch", "uri": "/assortment/Punsch" },
        { "name": "Blanddrycker", "uri": "/assortment/Blanddrycker" },
        { "name": "Blå stilla", "uri": "/assortment/Bl%C3%A5%20stilla" },
        { "name": "Dryckestillbehör", "uri": "/assortment/Dryckestillbeh%C3%B6r" },
        { "name": "Sprit av flera typer", "uri": "/assortment/Sprit%20av%20flera%20typer" },
        { "name": "Blå mousserande", "uri": "/assortment/Bl%C3%A5%20mousserande" },
        { "name": "Röda - lägre alkoholhalt", "uri": "/assortment/R%C3%B6da%20-%20l%C3%A4gre%20alkoholhalt" },
        { "name": "Rosé - lägre alkoholhalt", "uri": "/assortment/Ros%C3%A9%20-%20l%C3%A4gre%20alkoholhalt" },
        { "name": "Vita - lägre alkoholhalt", "uri": "/assortment/Vita%20-%20l%C3%A4gre%20alkoholhalt" }
    ]
};

const assortment = {
    "Vodka och Brännvin":{
        "etag":null,
        "timestamp":"2020-01-21T21:32:49.4699999Z",
        "data":[
            {
                "id":101,
                "name":"Renat",
                "name2":"",
                "price":204.00,
                "pricePerLitre":291.43,
                "alcohol":"37.50%",
                "volume":700,
                "uri":"/article/101"
            },
            {
                "id":15401,
                "name":"Explorer Vodka",
                "name2":"",
                "price":204.00,
                "pricePerLitre":291.43,
                "alcohol":"37.50%",
                "volume":700,
                "uri":"/article/15401"
            },
            {
                "id":8618001,
                "name":"Svedka",
                "name2":"Vodka",
                "price":195.00,
                "pricePerLitre":278.57,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8618001"
            },
            {
                "id":8789204,
                "name":"Lapland Vodka",
                "name2":"",
                "price":3617.00,
                "pricePerLitre":695.58,
                "alcohol":"38.00%",
                "volume":5200,
                "uri":"/article/8789204"
            },
            {
                "id":8752902,
                "name":"AB Svenska Sprit Vodka",
                "name2":"",
                "price":299.00,
                "pricePerLitre":598.00,
                "alcohol":"40.00%",
                "volume":500,
                "uri":"/article/8752902"
            },
            {
                "id":8804,
                "name":"Absolut Vodka",
                "name2":"",
                "price":249.00,
                "pricePerLitre":415.00,
                "alcohol":"40.00%",
                "volume":600,
                "uri":"/article/8804"
            },
            {
                "id":8491401,
                "name":"Sture Gold",
                "name2":"",
                "price":351.00,
                "pricePerLitre":501.43,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8491401"
            },
            {
                "id":8650801,
                "name":"Absolut",
                "name2":"Elyx",
                "price":539.00,
                "pricePerLitre":770.00,
                "alcohol":"42.30%",
                "volume":700,
                "uri":"/article/8650801"
            },
            {
                "id":8654501,
                "name":"Crystal Head",
                "name2":"Aurora",
                "price":649.00,
                "pricePerLitre":927.14,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8654501"
            },
            {
                "id":3109802,
                "name":"Nordmarkens",
                "name2":"Vodka",
                "price":233.00,
                "pricePerLitre":466.00,
                "alcohol":"37.50%",
                "volume":500,
                "uri":"/article/3109802"
            },
            {
                "id":8268401,
                "name":"Koskenkorva Vodka",
                "name2":"Sauna Barrel",
                "price":229.00,
                "pricePerLitre":327.14,
                "alcohol":"37.50%",
                "volume":700,
                "uri":"/article/8268401"
            },
            {
                "id":401,
                "name":"Kronvodka",
                "name2":"",
                "price":229.00,
                "pricePerLitre":327.14,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/401"
            },
            {
                "id":8690701,
                "name":"Kalinka Vodka",
                "name2":"",
                "price":199.00,
                "pricePerLitre":284.29,
                "alcohol":"37.50%",
                "volume":700,
                "uri":"/article/8690701"
            },
            {
                "id":8264901,
                "name":"GPS",
                "name2":"Vodka",
                "price":204.00,
                "pricePerLitre":291.43,
                "alcohol":"37.50%",
                "volume":700,
                "uri":"/article/8264901"
            },
            {
                "id":5301,
                "name":"Koskenkorva Vodka",
                "name2":"",
                "price":219.00,
                "pricePerLitre":312.86,
                "alcohol":"37.50%",
                "volume":700,
                "uri":"/article/5301"
            },
            {
                "id":8691601,
                "name":"Ramsbury Vodka",
                "name2":"Wiltshire",
                "price":489.00,
                "pricePerLitre":698.57,
                "alcohol":"43.00%",
                "volume":700,
                "uri":"/article/8691601"
            },
            {
                "id":3144801,
                "name":"Just Vodka",
                "name2":"",
                "price":207.00,
                "pricePerLitre":295.71,
                "alcohol":"37.50%",
                "volume":700,
                "uri":"/article/3144801"
            },
            {
                "id":4001,
                "name":"White Lake",
                "name2":"",
                "price":219.00,
                "pricePerLitre":312.86,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/4001"
            },
            {
                "id":8610304,
                "name":"Ingmars Pruttare 1-7",
                "name2":"",
                "price":316.00,
                "pricePerLitre":902.86,
                "alcohol":"37.50%",
                "volume":350,
                "uri":"/article/8610304"
            },
            {
                "id":8794301,
                "name":"Svensk Vodka",
                "name2":"Lake Vättern",
                "price":325.00,
                "pricePerLitre":464.29,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8794301"
            },
            {
                "id":8705901,
                "name":"Lisch",
                "name2":"Vodka",
                "price":381.00,
                "pricePerLitre":544.29,
                "alcohol":"42.00%",
                "volume":700,
                "uri":"/article/8705901"
            },
            {
                "id":8259001,
                "name":"Magic Moment",
                "name2":"Vodka",
                "price":223.00,
                "pricePerLitre":318.57,
                "alcohol":"37.50%",
                "volume":700,
                "uri":"/article/8259001"
            },
            {
                "id":8604701,
                "name":"Tito's",
                "name2":"Handmade Vodka",
                "price":349.00,
                "pricePerLitre":498.57,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8604701"
            },
            {
                "id":402,
                "name":"Kronvodka",
                "name2":"",
                "price":127.00,
                "pricePerLitre":362.86,
                "alcohol":"40.00%",
                "volume":350,
                "uri":"/article/402"
            },
            {
                "id":9502,
                "name":"Stolichnaya",
                "name2":"Vodka",
                "price":169.00,
                "pricePerLitre":338.00,
                "alcohol":"40.00%",
                "volume":500,
                "uri":"/article/9502"
            },
            {
                "id":8303902,
                "name":"Högberga Vinfabrik",
                "name2":"Sprit",
                "price":444.00,
                "pricePerLitre":888.00,
                "alcohol":"45.00%",
                "volume":500,
                "uri":"/article/8303902"
            },
            {
                "id":6301,
                "name":"Finlandia",
                "name2":"",
                "price":235.00,
                "pricePerLitre":335.71,
                "alcohol":"37.50%",
                "volume":700,
                "uri":"/article/6301"
            },
            {
                "id":8656402,
                "name":"Kweichow",
                "name2":"Moutai Feitian",
                "price":2591.00,
                "pricePerLitre":5182.00,
                "alcohol":"53.00%",
                "volume":500,
                "uri":"/article/8656402"
            },
            {
                "id":8123101,
                "name":"Reyka Vodka",
                "name2":"",
                "price":329.00,
                "pricePerLitre":470.00,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8123101"
            },
            {
                "id":8661602,
                "name":"Kweichow Moutai",
                "name2":"Prince",
                "price":534.00,
                "pricePerLitre":1068.00,
                "alcohol":"53.00%",
                "volume":500,
                "uri":"/article/8661602"
            },
            {
                "id":8356302,
                "name":"Kweichow Moutai",
                "name2":"Yingbin",
                "price":461.00,
                "pricePerLitre":922.00,
                "alcohol":"53.00%",
                "volume":500,
                "uri":"/article/8356302"
            },
            {
                "id":8009901,
                "name":"Dukes Vodka",
                "name2":"",
                "price":220.00,
                "pricePerLitre":314.29,
                "alcohol":"37.50%",
                "volume":700,
                "uri":"/article/8009901"
            },
            {
                "id":5302,
                "name":"Koskenkorva Vodka",
                "name2":"",
                "price":119.00,
                "pricePerLitre":340.00,
                "alcohol":"37.50%",
                "volume":350,
                "uri":"/article/5302"
            },
            {
                "id":8134402,
                "name":"Luzhou Laojiao",
                "name2":"Erqu Baijiu",
                "price":271.00,
                "pricePerLitre":542.00,
                "alcohol":"38.00%",
                "volume":500,
                "uri":"/article/8134402"
            },
            {
                "id":8142002,
                "name":"Luzhou Laojiao",
                "name2":"National Cellar Baijiu",
                "price":1593.00,
                "pricePerLitre":3186.00,
                "alcohol":"52.00%",
                "volume":500,
                "uri":"/article/8142002"
            },
            {
                "id":8354702,
                "name":"Luzhou Laojiao",
                "name2":"Touqu Baijiu",
                "price":410.00,
                "pricePerLitre":820.00,
                "alcohol":"52.00%",
                "volume":500,
                "uri":"/article/8354702"
            },
            {
                "id":8170502,
                "name":"Luzhou Laojiao",
                "name2":"Erqu Baijiu",
                "price":322.00,
                "pricePerLitre":644.00,
                "alcohol":"52.00%",
                "volume":500,
                "uri":"/article/8170502"
            },
            {
                "id":8222502,
                "name":"Luzhou Laojiao",
                "name2":"Tequ Baijiu",
                "price":653.00,
                "pricePerLitre":1306.00,
                "alcohol":"52.00%",
                "volume":500,
                "uri":"/article/8222502"
            },
            {
                "id":8315902,
                "name":"Beijing Red Star",
                "name2":"Erguotou Classic Baijou",
                "price":364.00,
                "pricePerLitre":728.00,
                "alcohol":"56.00%",
                "volume":500,
                "uri":"/article/8315902"
            },
            {
                "id":8328702,
                "name":"Beijing Red Star",
                "name2":"Erguotou Baijiu 8 Years",
                "price":388.00,
                "pricePerLitre":776.00,
                "alcohol":"53.00%",
                "volume":500,
                "uri":"/article/8328702"
            },
            {
                "id":3318902,
                "name":"Bröderna Bommen Vodka",
                "name2":"",
                "price":298.00,
                "pricePerLitre":596.00,
                "alcohol":"42.00%",
                "volume":500,
                "uri":"/article/3318902"
            },
            {
                "id":8219301,
                "name":"Absolut Åhus",
                "name2":"Orginal Vodka",
                "price":249.00,
                "pricePerLitre":355.71,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8219301"
            },
            {
                "id":8283501,
                "name":"Sobieski Vodka",
                "name2":"",
                "price":225.00,
                "pricePerLitre":321.43,
                "alcohol":"37.50%",
                "volume":700,
                "uri":"/article/8283501"
            },
            {
                "id":8182301,
                "name":"Franks Vodka",
                "name2":"",
                "price":219.00,
                "pricePerLitre":312.86,
                "alcohol":"37.50%",
                "volume":700,
                "uri":"/article/8182301"
            },
            {
                "id":8228904,
                "name":"Purity Vodka",
                "name2":"Ultra 34 Premium",
                "price":499.00,
                "pricePerLitre":831.67,
                "alcohol":"40.00%",
                "volume":600,
                "uri":"/article/8228904"
            },
            {
                "id":8810401,
                "name":"Motörhead Vödka",
                "name2":"",
                "price":295.00,
                "pricePerLitre":421.43,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8810401"
            },
            {
                "id":8801,
                "name":"Absolut Vodka",
                "name2":"",
                "price":239.00,
                "pricePerLitre":341.43,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8801"
            },
            {
                "id":8802,
                "name":"Absolut Vodka",
                "name2":"",
                "price":129.00,
                "pricePerLitre":368.57,
                "alcohol":"40.00%",
                "volume":350,
                "uri":"/article/8802"
            },
            {
                "id":8341101,
                "name":"DQ Vodka",
                "name2":"",
                "price":699.00,
                "pricePerLitre":699.00,
                "alcohol":"40.00%",
                "volume":1000,
                "uri":"/article/8341101"
            },
            {
                "id":8325802,
                "name":"Bivrost",
                "name2":"Vodka",
                "price":499.00,
                "pricePerLitre":998.00,
                "alcohol":"40.00%",
                "volume":500,
                "uri":"/article/8325802"
            },
            {
                "id":8266104,
                "name":"Dervana",
                "name2":"Vodka",
                "price":129.00,
                "pricePerLitre":645.00,
                "alcohol":"40.00%",
                "volume":200,
                "uri":"/article/8266104"
            },
            {
                "id":8047501,
                "name":"Hammerfall",
                "name2":"Premium Vodka",
                "price":499.00,
                "pricePerLitre":712.86,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8047501"
            },
            {
                "id":10801,
                "name":"Smirnoff",
                "name2":"",
                "price":231.00,
                "pricePerLitre":330.00,
                "alcohol":"37.50%",
                "volume":700,
                "uri":"/article/10801"
            },
            {
                "id":10802,
                "name":"Smirnoff",
                "name2":"",
                "price":120.00,
                "pricePerLitre":342.86,
                "alcohol":"37.50%",
                "volume":350,
                "uri":"/article/10802"
            },
            {
                "id":8161101,
                "name":"Purity Vodka",
                "name2":"Connoisseur 51 Reserve",
                "price":398.00,
                "pricePerLitre":568.57,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8161101"
            },
            {
                "id":8208402,
                "name":"Shui Jing",
                "name2":"Fang Wellbay",
                "price":851.00,
                "pricePerLitre":1702.00,
                "alcohol":"38.00%",
                "volume":500,
                "uri":"/article/8208402"
            },
            {
                "id":8215502,
                "name":"Shui Jing Fang",
                "name2":"Wellbay Baijiu",
                "price":946.00,
                "pricePerLitre":1892.00,
                "alcohol":"52.00%",
                "volume":500,
                "uri":"/article/8215502"
            },
            {
                "id":8281902,
                "name":"Shui Jing Fang",
                "name2":"Forest Green Baijiu",
                "price":2474.00,
                "pricePerLitre":4948.00,
                "alcohol":"52.00%",
                "volume":500,
                "uri":"/article/8281902"
            },
            {
                "id":8282201,
                "name":"Shui Jing Fang",
                "name2":"Scholar's Edition Baijiu",
                "price":3617.00,
                "pricePerLitre":3617.00,
                "alcohol":"54.00%",
                "volume":1000,
                "uri":"/article/8282201"
            },
            {
                "id":4050801,
                "name":"Belvedere Lake Bartezek",
                "name2":"",
                "price":610.00,
                "pricePerLitre":871.43,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/4050801"
            },
            {
                "id":4050901,
                "name":"Belvedere Smogóry Forest",
                "name2":"",
                "price":610.00,
                "pricePerLitre":871.43,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/4050901"
            },
            {
                "id":102,
                "name":"Renat",
                "name2":"",
                "price":109.00,
                "pricePerLitre":311.43,
                "alcohol":"37.50%",
                "volume":350,
                "uri":"/article/102"
            },
            {
                "id":8232701,
                "name":"Godfather",
                "name2":"Platinum Vodka",
                "price":855.00,
                "pricePerLitre":1221.43,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8232701"
            },
            {
                "id":8740801,
                "name":"Godfather",
                "name2":"Ultra Premium Vodka",
                "price":549.00,
                "pricePerLitre":784.29,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8740801"
            },
            {
                "id":8800501,
                "name":"H2O",
                "name2":"Vodka",
                "price":434.00,
                "pricePerLitre":434.00,
                "alcohol":"40.00%",
                "volume":1000,
                "uri":"/article/8800501"
            },
            {
                "id":300001,
                "name":"White Lake",
                "name2":"Special",
                "price":174.00,
                "pricePerLitre":248.57,
                "alcohol":"30.00%",
                "volume":700,
                "uri":"/article/300001"
            },
            {
                "id":3355602,
                "name":"Bergslagen",
                "name2":"Vodka",
                "price":169.00,
                "pricePerLitre":482.86,
                "alcohol":"40.00%",
                "volume":350,
                "uri":"/article/3355602"
            },
            {
                "id":8731901,
                "name":"Absolut",
                "name2":"100",
                "price":449.00,
                "pricePerLitre":641.43,
                "alcohol":"50.00%",
                "volume":700,
                "uri":"/article/8731901"
            },
            {
                "id":1101,
                "name":"Vanlig Vodka",
                "name2":"",
                "price":198.00,
                "pricePerLitre":282.86,
                "alcohol":"37.50%",
                "volume":700,
                "uri":"/article/1101"
            },
            {
                "id":8741901,
                "name":"Sture Vodka",
                "name2":"",
                "price":272.00,
                "pricePerLitre":388.57,
                "alcohol":"37.50%",
                "volume":700,
                "uri":"/article/8741901"
            },
            {
                "id":8050301,
                "name":"Ciroc Vodka",
                "name2":"",
                "price":449.00,
                "pricePerLitre":641.43,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8050301"
            },
            {
                "id":3373601,
                "name":"Precis Vodka",
                "name2":"",
                "price":329.00,
                "pricePerLitre":470.00,
                "alcohol":"37.50%",
                "volume":700,
                "uri":"/article/3373601"
            },
            {
                "id":8267801,
                "name":"Red Square",
                "name2":"Vodka",
                "price":249.00,
                "pricePerLitre":355.71,
                "alcohol":"37.50%",
                "volume":700,
                "uri":"/article/8267801"
            },
            {
                "id":8189901,
                "name":"Grey Goose Vodka",
                "name2":"",
                "price":539.00,
                "pricePerLitre":770.00,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8189901"
            },
            {
                "id":8274801,
                "name":"No.1 Super Premium Vodka",
                "name2":"",
                "price":269.00,
                "pricePerLitre":384.29,
                "alcohol":"37.50%",
                "volume":700,
                "uri":"/article/8274801"
            },
            {
                "id":8283601,
                "name":"Russian Standard",
                "name2":"Original",
                "price":249.00,
                "pricePerLitre":355.71,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8283601"
            },
            {
                "id":8288301,
                "name":"Russian Standard",
                "name2":"Platinum",
                "price":319.00,
                "pricePerLitre":455.71,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8288301"
            },
            {
                "id":8371901,
                "name":"Russian Standard",
                "name2":"Imperia",
                "price":801.00,
                "pricePerLitre":1144.29,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8371901"
            },
            {
                "id":7043001,
                "name":"Stolichnaya",
                "name2":"elit",
                "price":599.00,
                "pricePerLitre":855.71,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/7043001"
            },
            {
                "id":8151601,
                "name":"Mads Vodka",
                "name2":"",
                "price":249.00,
                "pricePerLitre":355.71,
                "alcohol":"37.50%",
                "volume":700,
                "uri":"/article/8151601"
            },
            {
                "id":8013802,
                "name":"Annebergs Korn Bränvin",
                "name2":"",
                "price":259.00,
                "pricePerLitre":518.00,
                "alcohol":"35.00%",
                "volume":500,
                "uri":"/article/8013802"
            },
            {
                "id":8831501,
                "name":"Smirnoff Black No 55",
                "name2":"",
                "price":249.00,
                "pricePerLitre":355.71,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8831501"
            },
            {
                "id":8016301,
                "name":"Vanlig 60 Vodka",
                "name2":"",
                "price":349.00,
                "pricePerLitre":498.57,
                "alcohol":"60.00%",
                "volume":700,
                "uri":"/article/8016301"
            },
            {
                "id":8065301,
                "name":"Seriously Vodka",
                "name2":"",
                "price":249.00,
                "pricePerLitre":355.71,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8065301"
            },
            {
                "id":8651901,
                "name":"Purity Vodka",
                "name2":"Ultra 34 Premium",
                "price":298.00,
                "pricePerLitre":425.71,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8651901"
            },
            {
                "id":8602102,
                "name":"Spirit of Hven",
                "name2":"Organic Vodka",
                "price":225.00,
                "pricePerLitre":450.00,
                "alcohol":"40.00%",
                "volume":500,
                "uri":"/article/8602102"
            },
            {
                "id":8690201,
                "name":"Ketel One Vodka",
                "name2":"",
                "price":299.00,
                "pricePerLitre":427.14,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8690201"
            },
            {
                "id":8641001,
                "name":"Vodka Nord",
                "name2":"Organic Swedish Vodka",
                "price":329.00,
                "pricePerLitre":329.00,
                "alcohol":"37.50%",
                "volume":1000,
                "uri":"/article/8641001"
            },
            {
                "id":8986801,
                "name":"Poliakov Vodka",
                "name2":"",
                "price":199.00,
                "pricePerLitre":284.29,
                "alcohol":"37.50%",
                "volume":700,
                "uri":"/article/8986801"
            },
            {
                "id":8771402,
                "name":"Chum Churum",
                "name2":"Soju",
                "price":139.00,
                "pricePerLitre":397.14,
                "alcohol":"17.50%",
                "volume":350,
                "uri":"/article/8771402"
            },
            {
                "id":18501,
                "name":"Brännvin special",
                "name2":"",
                "price":179.00,
                "pricePerLitre":255.71,
                "alcohol":"30.00%",
                "volume":700,
                "uri":"/article/18501"
            },
            {
                "id":8640801,
                "name":"Kanon Vodka",
                "name2":"Organic",
                "price":255.00,
                "pricePerLitre":364.29,
                "alcohol":"37.50%",
                "volume":700,
                "uri":"/article/8640801"
            },
            {
                "id":1001202,
                "name":"Dworek Vodka",
                "name2":"",
                "price":108.00,
                "pricePerLitre":308.57,
                "alcohol":"37.50%",
                "volume":350,
                "uri":"/article/1001202"
            },
            {
                "id":8745601,
                "name":"Ivan the Terrible",
                "name2":"",
                "price":526.00,
                "pricePerLitre":751.43,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8745601"
            },
            {
                "id":7064901,
                "name":"Skyy Vodka",
                "name2":"",
                "price":269.00,
                "pricePerLitre":384.29,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/7064901"
            },
            {
                "id":8202301,
                "name":"Absolut",
                "name2":"Rainbow",
                "price":249.00,
                "pricePerLitre":355.71,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8202301"
            },
            {
                "id":2901,
                "name":"Bols Vodka",
                "name2":"",
                "price":209.00,
                "pricePerLitre":298.57,
                "alcohol":"37.50%",
                "volume":700,
                "uri":"/article/2901"
            },
            {
                "id":8651906,
                "name":"Purity Vodka",
                "name2":"Ultra 34 Premium",
                "price":795.00,
                "pricePerLitre":454.29,
                "alcohol":"40.00%",
                "volume":1750,
                "uri":"/article/8651906"
            },
            {
                "id":19901,
                "name":"Good ol' Sailor Vodka",
                "name2":"",
                "price":202.00,
                "pricePerLitre":288.57,
                "alcohol":"37.50%",
                "volume":700,
                "uri":"/article/19901"
            },
            {
                "id":1001201,
                "name":"Dworek Vodka",
                "name2":"",
                "price":199.00,
                "pricePerLitre":284.29,
                "alcohol":"37.50%",
                "volume":700,
                "uri":"/article/1001201"
            },
            {
                "id":8733501,
                "name":"Belvedere Vodka",
                "name2":"",
                "price":493.00,
                "pricePerLitre":704.29,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8733501"
            },
            {
                "id":8225601,
                "name":"Ghost Vodka",
                "name2":"Gold Edition",
                "price":481.00,
                "pricePerLitre":687.14,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8225601"
            },
            {
                "id":8610601,
                "name":"Znaps",
                "name2":"Pure Lake Gateway Vodka",
                "price":310.00,
                "pricePerLitre":442.86,
                "alcohol":"37.50%",
                "volume":700,
                "uri":"/article/8610601"
            },
            {
                "id":8650106,
                "name":"Crystal Head Vodka",
                "name2":"",
                "price":1599.00,
                "pricePerLitre":913.71,
                "alcohol":"40.00%",
                "volume":1750,
                "uri":"/article/8650106"
            },
            {
                "id":12601,
                "name":"Crystal Head",
                "name2":"Vodka",
                "price":499.00,
                "pricePerLitre":712.86,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/12601"
            },
            {
                "id":8682602,
                "name":"Samichlaus Bier",
                "name2":"Bierbrand Eggenberger",
                "price":400.00,
                "pricePerLitre":1142.86,
                "alcohol":"46.00%",
                "volume":350,
                "uri":"/article/8682602"
            },
            {
                "id":8647101,
                "name":"Cape North Vodka",
                "name2":"",
                "price":239.00,
                "pricePerLitre":341.43,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8647101"
            },
            {
                "id":8750501,
                "name":"Sipsmith",
                "name2":"Sipping Vodka",
                "price":469.00,
                "pricePerLitre":670.00,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8750501"
            },
            {
                "id":8628901,
                "name":"Mikkeller",
                "name2":"Dry Hop Simcoe Vodka",
                "price":463.00,
                "pricePerLitre":661.43,
                "alcohol":"44.00%",
                "volume":700,
                "uri":"/article/8628901"
            },
            {
                "id":3258502,
                "name":"Kyrkeby Ettan",
                "name2":"",
                "price":255.00,
                "pricePerLitre":728.57,
                "alcohol":"36.00%",
                "volume":350,
                "uri":"/article/3258502"
            },
            {
                "id":8731401,
                "name":"Druide",
                "name2":"",
                "price":298.00,
                "pricePerLitre":425.71,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8731401"
            },
            {
                "id":8745901,
                "name":"U'Luvka",
                "name2":"",
                "price":348.00,
                "pricePerLitre":497.14,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8745901"
            },
            {
                "id":8745906,
                "name":"U'Luvka",
                "name2":"",
                "price":873.00,
                "pricePerLitre":498.86,
                "alcohol":"40.00%",
                "volume":1750,
                "uri":"/article/8745906"
            },
            {
                "id":8600201,
                "name":"Virtuous Vodka",
                "name2":"Blond",
                "price":319.00,
                "pricePerLitre":455.71,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8600201"
            },
            {
                "id":8421501,
                "name":"CCCP",
                "name2":"Vodka",
                "price":264.00,
                "pricePerLitre":377.14,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8421501"
            },
            {
                "id":8708201,
                "name":"1850",
                "name2":"Vodka",
                "price":362.00,
                "pricePerLitre":517.14,
                "alcohol":"37.50%",
                "volume":700,
                "uri":"/article/8708201"
            },
            {
                "id":302,
                "name":"Explorer Vodka",
                "name2":"",
                "price":108.00,
                "pricePerLitre":308.57,
                "alcohol":"37.50%",
                "volume":350,
                "uri":"/article/302"
            },
            {
                "id":8635401,
                "name":"No.1 Premium Vodka",
                "name2":"",
                "price":199.00,
                "pricePerLitre":284.29,
                "alcohol":"37.50%",
                "volume":700,
                "uri":"/article/8635401"
            },
            {
                "id":8633401,
                "name":"Zuidam",
                "name2":"Vodka",
                "price":363.00,
                "pricePerLitre":518.57,
                "alcohol":"37.50%",
                "volume":700,
                "uri":"/article/8633401"
            },
            {
                "id":12604,
                "name":"Crystal Head Vodka",
                "name2":"",
                "price":585.00,
                "pricePerLitre":975.00,
                "alcohol":"40.00%",
                "volume":600,
                "uri":"/article/12604"
            },
            {
                "id":8632601,
                "name":"Aylesbury Duck Vodka",
                "name2":"",
                "price":339.00,
                "pricePerLitre":484.29,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8632601"
            },
            {
                "id":8502801,
                "name":"Runa Vodka",
                "name2":"Dark Label",
                "price":379.00,
                "pricePerLitre":541.43,
                "alcohol":"37.50%",
                "volume":700,
                "uri":"/article/8502801"
            },
            {
                "id":8505001,
                "name":"Runa Vodka",
                "name2":"Original",
                "price":434.00,
                "pricePerLitre":620.00,
                "alcohol":"43.00%",
                "volume":700,
                "uri":"/article/8505001"
            },
            {
                "id":8656008,
                "name":"Crystal Head Vodka",
                "name2":"",
                "price":2749.00,
                "pricePerLitre":916.33,
                "alcohol":"40.00%",
                "volume":3000,
                "uri":"/article/8656008"
            },
            {
                "id":8632301,
                "name":"Runa Vodka",
                "name2":"Silver Organic",
                "price":379.00,
                "pricePerLitre":541.43,
                "alcohol":"37.50%",
                "volume":700,
                "uri":"/article/8632301"
            },
            {
                "id":8200902,
                "name":"Our / Berlin Vodka",
                "name2":"",
                "price":189.00,
                "pricePerLitre":540.00,
                "alcohol":"37.50%",
                "volume":350,
                "uri":"/article/8200902"
            },
            {
                "id":8043202,
                "name":"Tom of Finland",
                "name2":"Organic Vodka",
                "price":299.00,
                "pricePerLitre":598.00,
                "alcohol":"40.00%",
                "volume":500,
                "uri":"/article/8043202"
            },
            {
                "id":13902,
                "name":"Brännvin Special",
                "name2":"",
                "price":99.00,
                "pricePerLitre":282.86,
                "alcohol":"30.00%",
                "volume":350,
                "uri":"/article/13902"
            },
            {
                "id":11801,
                "name":"Vikingfjord",
                "name2":"Vodka",
                "price":229.00,
                "pricePerLitre":327.14,
                "alcohol":"37.50%",
                "volume":700,
                "uri":"/article/11801"
            },
            {
                "id":8654901,
                "name":"Mikkeller",
                "name2":"Dry Hop Simcoe Vodka",
                "price":469.00,
                "pricePerLitre":670.00,
                "alcohol":"44.00%",
                "volume":700,
                "uri":"/article/8654901"
            },
            {
                "id":3055601,
                "name":"Wannborga",
                "name2":"Ö Vodka",
                "price":249.00,
                "pricePerLitre":355.71,
                "alcohol":"40.30%",
                "volume":700,
                "uri":"/article/3055601"
            },
            {
                "id":8653801,
                "name":"Gripsholm Vodka",
                "name2":"",
                "price":284.00,
                "pricePerLitre":405.71,
                "alcohol":"37.50%",
                "volume":700,
                "uri":"/article/8653801"
            },
            {
                "id":8240202,
                "name":"Gold Russian",
                "name2":"Crown Vodka",
                "price":399.00,
                "pricePerLitre":798.00,
                "alcohol":"40.00%",
                "volume":500,
                "uri":"/article/8240202"
            },
            {
                "id":8657201,
                "name":"Beluga",
                "name2":"Noble Russian Vodka",
                "price":529.00,
                "pricePerLitre":755.71,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8657201"
            },
            {
                "id":8800101,
                "name":"Östersjö Vodka",
                "name2":"",
                "price":268.00,
                "pricePerLitre":382.86,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8800101"
            },
            {
                "id":8161301,
                "name":"Kauffman",
                "name2":"Soft Vodka",
                "price":990.00,
                "pricePerLitre":1414.29,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8161301"
            },
            {
                "id":8179701,
                "name":"Absolut",
                "name2":"Recycled",
                "price":249.00,
                "pricePerLitre":355.71,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8179701"
            },
            {
                "id":8220702,
                "name":"Lantmännens Vetevodka",
                "name2":"",
                "price":249.00,
                "pricePerLitre":498.00,
                "alcohol":"40.00%",
                "volume":500,
                "uri":"/article/8220702"
            },
            {
                "id":8290001,
                "name":"Love",
                "name2":"Spirit",
                "price":286.00,
                "pricePerLitre":408.57,
                "alcohol":"40.00%",
                "volume":700,
                "uri":"/article/8290001"
            },
            {
                "id":8170302,
                "name":"Tito's",
                "name2":"Handmade Vodka",
                "price":249.00,
                "pricePerLitre":498.00,
                "alcohol":"40.00%",
                "volume":500,
                "uri":"/article/8170302"
            }
        ]
    }
}
