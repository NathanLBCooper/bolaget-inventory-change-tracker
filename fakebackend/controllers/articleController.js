module.exports = function (app) {
    app.get("/article/:id", function (req, res) {
        res.send(articles[req.params.id]);
    });
};

const articles = {
    7167501: {
        "id": 7167501,
        "name": "Venezia Giulia",
        "name2": "Pinot Grigio",
        "producer": "Jermann di Silvio",
        "importer": "Theis Vine AB",
        "type": "",
        "category": "Vitt vin",
        "origin": "Friuli-Venezia-Giulia",
        "countryOfOrigin": "Italien",
        "packaging": "Flaska",
        "vintage": "2018",
        "price": 288.00,
        "pricePerLitre": 384.00,
        "alcohol": "13.00%",
        "volume": 750.0,
        "expired": false,
        "history": [{
            "timestamp": "2019-09-21T05:03:00Z",
            "changes": [{
                "name": "Vintage",
                "oldValue": "2017",
                "newValue": "2018"
            }
            ]
        }
        ],
        "timestamp": "2019-09-28T18:31:24.0820137Z",
        "uri": "/article/7167501"
    },
    7227501 : {
        "id" : 7227501,
        "name" : "Barolo Riserva Bricco delle Viole",
        "name2" : "Viberti Giovanni",
        "producer" : "Viberti Giovanni",
        "importer" : "Amka Vinimport AB",
        "type" : "",
        "category" : "Rött vin",
        "origin" : "Piemonte",
        "countryOfOrigin" : "Italien",
        "packaging" : "Flaska",
        "vintage" : "2011",
        "price" : 595.00,
        "pricePerLitre" : 793.33,
        "alcohol" : "14.50%",
        "volume" : 750.0,
        "expired" : false,
        "history" : [{
                "timestamp" : "2019-09-21T05:03:00Z",
                "changes" : [{
                        "name" : "Vintage",
                        "oldValue" : "2010",
                        "newValue" : "2011"
                    }
                ]
            }
        ],
        "timestamp" : "2019-09-28T20:31:26.2657888Z",
        "uri" : "/article/7227501"
    },
    7543101 : {
        "id" : 7543101,
        "name" : "Big Fine Girl",
        "name2" : "Riesling",
        "producer" : "Jeanneret Wines",
        "importer" : "Tuesday Wine AB",
        "type" : "",
        "category" : "Vitt vin",
        "origin" : "South Australia",
        "countryOfOrigin" : "Australien",
        "packaging" : "Flaska",
        "vintage" : "2017",
        "price" : 159.00,
        "pricePerLitre" : 212.00,
        "alcohol" : "12.50%",
        "volume" : 750.0,
        "expired" : false,
        "history" : [{
                "timestamp" : "2019-09-21T05:03:00Z",
                "changes" : [{
                        "name" : "Producer",
                        "oldValue" : "The Spurs Wine Company",
                        "newValue" : "Jeanneret Wines"
                    }
                ]
            }
        ],
        "timestamp" : "2019-09-28T20:31:26.2657888Z",
        "uri" : "/article/7543101"
    }
};
