
module.exports = function (app) {
	app.get("/change/recent", function (req, res) {
		res.send(recentChanges);
	});

	app.get("/change/recent/:type", function (req, res) {
		// We have alcohol, vintage, price, type
		res.send(recentChangesByType[req.params.type] || recentChangesByType["alcohol"]);
	});
};

const recentChanges = {
	"timestamp": new Date(),
	"data": [{
		"id": 7473401,
		"name": "Amarone della Valpolicella",
		"name2": "Mezzo Monte",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(),
			"changes": [{
				"name": "Type",
				"oldValue": "",
				"newValue": "Kryddigt & Mustigt"
			}
			]
		},
		"uri": "/article/7473401"
	}, {
		"id": 7508801,
		"name": "Chablis",
		"name2": "Grand Cru Les Clos Clotilde Davenne",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2013",
				"newValue": "2015"
			}
			]
		},
		"uri": "/article/7508801"
	}, {
		"id": 800002,
		"name": "Graham's",
		"name2": "Late Bottled Vintage",
		"category": "Aperitif och dessert",
		"changes": {
			"timestamp": new Date(),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2013",
				"newValue": "2014"
			}
			]
		},
		"uri": "/article/800002"
	}, {
		"id": 7274301,
		"name": "Grand Minéral",
		"name2": "Chardonnay",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(),
			"changes": [{
				"name": "Type",
				"oldValue": "",
				"newValue": "Friskt & Fruktigt"
			}
			]
		},
		"uri": "/article/7274301"
	}, {
		"id": 7352201,
		"name": "Weinmann",
		"name2": "Grüner Veltliner Klassik",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(),
			"changes": [{
				"name": "Type",
				"oldValue": "",
				"newValue": "Friskt & Fruktigt"
			}
			]
		},
		"uri": "/article/7352201"
	}, {
		"id": 7697101,
		"name": "Casteloro",
		"name2": "Rosso Veneto",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(),
			"changes": [{
				"name": "Type",
				"oldValue": "",
				"newValue": "Fruktigt & Smakrikt"
			}
			]
		},
		"uri": "/article/7697101"
	}, {
		"id": 273701,
		"name": "Finca el Puig",
		"name2": "",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(),
			"changes": [{
				"name": "Producer",
				"oldValue": "Cellers Fuentes",
				"newValue": "Gran Clos"
			}
			]
		},
		"uri": "/article/273701"
	}, {
		"id": 582401,
		"name": "50°",
		"name2": "Riesling Trocken",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2017",
				"newValue": "2018"
			}
			]
		},
		"uri": "/article/582401"
	}, {
		"id": 613901,
		"name": "Ramos",
		"name2": "Reserva",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2015",
				"newValue": "2016"
			}
			]
		},
		"uri": "/article/613901"
	}, {
		"id": 800001,
		"name": "Graham's",
		"name2": "Late Bottled Vintage",
		"category": "Aperitif och dessert",
		"changes": {
			"timestamp": new Date(),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2013",
				"newValue": "2014"
			}
			]
		},
		"uri": "/article/800001"
	}, {
		"id": 7253401,
		"name": "Amazin'",
		"name2": "Zinfandel",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2016",
				"newValue": "2017"
			}
			]
		},
		"uri": "/article/7253401"
	}, {
		"id": 302701,
		"name": "Ribera 1 One",
		"name2": "",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2015",
				"newValue": "2016"
			}
			]
		},
		"uri": "/article/302701"
	}, {
		"id": 4063002,
		"name": "In Flames",
		"name2": "",
		"category": "Whisky",
		"changes": {
			"timestamp": new Date(),
			"changes": [{
				"name": "Alcohol",
				"oldValue": "62.00%",
				"newValue": "62.10%"
			}
			]
		},
		"uri": "/article/4063002"
	}, {
		"id": 7660401,
		"name": "Malpuesto",
		"name2": "",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 1 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2016",
				"newValue": "2017"
			}
			]
		},
		"uri": "/article/7660401"
	}, {
		"id": 7423301,
		"name": "Domaine Montirius",
		"name2": "La Muse Papilles",
		"category": "Rosévin",
		"changes": {
			"timestamp": new Date(Date.now() - 1 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2016",
				"newValue": "2018"
			}
			]
		},
		"uri": "/article/7423301"
	}, {
		"id": 7799006,
		"name": "Michel Turgy",
		"name2": "Réserve Sélection Blanc de Blancs Grand Cru Brut",
		"category": "Mousserande vin",
		"changes": {
			"timestamp": new Date(Date.now() - 1 * 864e5),
			"changes": [{
				"name": "Packaging",
				"oldValue": "Flaska",
				"newValue": "Magnum"
			}
			]
		},
		"uri": "/article/7799006"
	}, {
		"id": 7483401,
		"name": "Sandro Fay",
		"name2": "Carteria Riserva",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 1 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2014",
				"newValue": "2015"
			}, {
				"name": "Alcohol",
				"oldValue": "13.00%",
				"newValue": "13.50%"
			}
			]
		},
		"uri": "/article/7483401"
	}, {
		"id": 466001,
		"name": "Chateau Ste Michelle",
		"name2": "Syrah",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 1 * 864e5),
			"changes": [{
				"name": "Producer",
				"oldValue": "Domaine Ste Michelle",
				"newValue": "Chateau Ste Michelle"
			}
			]
		},
		"uri": "/article/466001"
	}, {
		"id": 7678306,
		"name": "Sybille Kuntz",
		"name2": "Riesling Spätlese",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(Date.now() - 1 * 864e5),
			"changes": [{
				"name": "Packaging",
				"oldValue": "Flaska",
				"newValue": "Magnum"
			}
			]
		},
		"uri": "/article/7678306"
	}, {
		"id": 7377101,
		"name": "Weingut Julius",
		"name2": "Spätburgunder Trocken",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 1 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2017",
				"newValue": "2018"
			}, {
				"name": "Alcohol",
				"oldValue": "12.50%",
				"newValue": "13.50%"
			}
			]
		},
		"uri": "/article/7377101"
	}, {
		"id": 7241501,
		"name": "Margalh",
		"name2": "Blanc",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(Date.now() - 1 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2017",
				"newValue": "2018"
			}
			]
		},
		"uri": "/article/7241501"
	}, {
		"id": 7656801,
		"name": "Tommasi Bosco del Gal",
		"name2": "Bianco di Custoza",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(Date.now() - 1 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2017",
				"newValue": "2018"
			}
			]
		},
		"uri": "/article/7656801"
	}, {
		"id": 7296501,
		"name": "Domaine de la Charbonnière",
		"name2": "Châteauneuf-de-Pape",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 1 * 864e5),
			"changes": [{
				"name": "Packaging",
				"oldValue": "Flaska",
				"newValue": "Magnum"
			}
			]
		},
		"uri": "/article/7296501"
	}, {
		"id": 8733301,
		"name": "Plantation",
		"name2": "Trinidad",
		"category": "Rom",
		"changes": {
			"timestamp": new Date(Date.now() - 1 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2005",
				"newValue": "2008"
			}
			]
		},
		"uri": "/article/8733301"
	}, {
		"id": 7620501,
		"name": "Montirius",
		"name2": "Gigondas Confidentiel",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 1 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2011",
				"newValue": "2014"
			}, {
				"name": "Alcohol",
				"oldValue": "15.50%",
				"newValue": "13.50%"
			}
			]
		},
		"uri": "/article/7620501"
	}, {
		"id": 7281301,
		"name": "Brunello di Montalcino Vigneti del Versante",
		"name2": "Pian Dell'Orino",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 1 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2011",
				"newValue": "2013"
			}
			]
		},
		"uri": "/article/7281301"
	}, {
		"id": 7427901,
		"name": "Orben",
		"name2": "",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 1 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2016",
				"newValue": "2017"
			}
			]
		},
		"uri": "/article/7427901"
	}, {
		"id": 7425101,
		"name": "Finca Villacreces",
		"name2": "",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 1 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2015",
				"newValue": "2016"
			}
			]
		},
		"uri": "/article/7425101"
	}, {
		"id": 7435801,
		"name": "Sybille Kuntz",
		"name2": "Mosel Riesling Qualitätswein Trocken",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(Date.now() - 1 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2016",
				"newValue": "2018"
			}
			]
		},
		"uri": "/article/7435801"
	}, {
		"id": 7136601,
		"name": "Protos",
		"name2": "Roble",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 1 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2017",
				"newValue": "2018"
			}
			]
		},
		"uri": "/article/7136601"
	}, {
		"id": 7126701,
		"name": "Philipp Kuhn Kirschgarten GG Riesling",
		"name2": "Grosses Gewächs Riesling",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(Date.now() - 1 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2015",
				"newValue": "2018"
			}
			]
		},
		"uri": "/article/7126701"
	}, {
		"id": 7021101,
		"name": "Gran Clos",
		"name2": "Priorat Blanco",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(Date.now() - 1 * 864e5),
			"changes": [{
				"name": "Producer",
				"oldValue": "Cellers Fuentes",
				"newValue": "Gran Clos"
			}
			]
		},
		"uri": "/article/7021101"
	}, {
		"id": 7866801,
		"name": "Brocard Pierre",
		"name2": "Contrée Noire Extra Brut",
		"category": "Mousserande vin",
		"changes": {
			"timestamp": new Date(Date.now() - 1 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2009",
				"newValue": "2014"
			}
			]
		},
		"uri": "/article/7866801"
	}, {
		"id": 657801,
		"name": "District 7",
		"name2": "Pinot Noir",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 1 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2016",
				"newValue": "2017"
			}
			]
		},
		"uri": "/article/657801"
	}, {
		"id": 7592701,
		"name": "Montirius",
		"name2": "Terre des Aînés",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 1 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2013",
				"newValue": "2015"
			}
			]
		},
		"uri": "/article/7592701"
	}, {
		"id": 7538401,
		"name": "Birgit Braunstein",
		"name2": "Chardonnay Felsenstein",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(Date.now() - 1 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2017",
				"newValue": "2018"
			}, {
				"name": "Alcohol",
				"oldValue": "13.00%",
				"newValue": "13.50%"
			}
			]
		},
		"uri": "/article/7538401"
	}, {
		"id": 7751701,
		"name": "Birgit Braunstein",
		"name2": "Pinot vom Berg",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 1 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2016",
				"newValue": "2017"
			}
			]
		},
		"uri": "/article/7751701"
	}, {
		"id": 7701501,
		"name": "Moscato d'Asti",
		"name2": "Massolino",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(Date.now() - 1 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2015",
				"newValue": "2018"
			}, {
				"name": "Alcohol",
				"oldValue": "5.50%",
				"newValue": "5.00%"
			}
			]
		},
		"uri": "/article/7701501"
	}, {
		"id": 7133709,
		"name": "Bodegas Protos-Låda",
		"name2": "",
		"category": "Blandlådor vin",
		"changes": {
			"timestamp": new Date(Date.now() - 1 * 864e5),
			"changes": [{
				"name": "Alcohol",
				"oldValue": "14.50%",
				"newValue": "14.00%"
			}
			]
		},
		"uri": "/article/7133709"
	}, {
		"id": 7099609,
		"name": "Toscana Lyx",
		"name2": "Röda Viner",
		"category": "Blandlådor vin",
		"changes": {
			"timestamp": new Date(Date.now() - 1 * 864e5),
			"changes": [{
				"name": "Packaging",
				"oldValue": "Flaska",
				"newValue": "6 fl à 750 ml"
			}
			]
		},
		"uri": "/article/7099609"
	}, {
		"id": 7768201,
		"name": "Damoli",
		"name2": "Giago Ripasso Classico Superiore",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 2 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2012",
				"newValue": "2013"
			}
			]
		},
		"uri": "/article/7768201"
	}, {
		"id": 7486901,
		"name": "Munda Encruzado",
		"name2": "",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(Date.now() - 2 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2015",
				"newValue": "2016"
			}
			]
		},
		"uri": "/article/7486901"
	}, {
		"id": 1184801,
		"name": "High Coast Dálvve",
		"name2": "Sherry Influence",
		"category": "Whisky",
		"changes": {
			"timestamp": new Date(Date.now() - 2 * 864e5),
			"changes": [{
				"name": "Producer",
				"oldValue": "Box Destilleri",
				"newValue": "Box Destilleri AB / High Coast"
			}
			]
		},
		"uri": "/article/1184801"
	}, {
		"id": 7412201,
		"name": "Margalh",
		"name2": "Rouge",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 2 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2016",
				"newValue": "2017"
			}
			]
		},
		"uri": "/article/7412201"
	}, {
		"id": 7591801,
		"name": "Prinz von Hessen",
		"name2": "Riesling Kabinett Royal",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(Date.now() - 2 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2016",
				"newValue": "2017"
			}, {
				"name": "Alcohol",
				"oldValue": "12.00%",
				"newValue": "11.50%"
			}
			]
		},
		"uri": "/article/7591801"
	}, {
		"id": 7199101,
		"name": "Elio Grasso",
		"name2": "Educato Chardonnay",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(Date.now() - 2 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2017",
				"newValue": "2018"
			}, {
				"name": "Alcohol",
				"oldValue": "14.00%",
				"newValue": "13.00%"
			}
			]
		},
		"uri": "/article/7199101"
	}, {
		"id": 4053401,
		"name": "High Coast",
		"name2": "63",
		"category": "Whisky",
		"changes": {
			"timestamp": new Date(Date.now() - 2 * 864e5),
			"changes": [{
				"name": "Producer",
				"oldValue": "Box Destilleri",
				"newValue": "Box Destilleri AB / High Coast"
			}
			]
		},
		"uri": "/article/4053401"
	}, {
		"id": 7572402,
		"name": "Trimbach",
		"name2": "Gewurztraminer Vendange Tardive",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(Date.now() - 2 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2014",
				"newValue": "2015"
			}
			]
		},
		"uri": "/article/7572402"
	}, {
		"id": 7579301,
		"name": "Tommasi Poggio al Tufo",
		"name2": "Vermentino",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(Date.now() - 2 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2015",
				"newValue": "2018"
			}
			]
		},
		"uri": "/article/7579301"
	}, {
		"id": 7347901,
		"name": "Sällskapets",
		"name2": "Röda Bordeaux",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 2 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2014",
				"newValue": "2016"
			}, {
				"name": "Alcohol",
				"oldValue": "13.50%",
				"newValue": "13.00%"
			}
			]
		},
		"uri": "/article/7347901"
	}, {
		"id": 7712601,
		"name": "Drappier",
		"name2": "Millésime Exception Brut",
		"category": "Mousserande vin",
		"changes": {
			"timestamp": new Date(Date.now() - 2 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2012",
				"newValue": "2013"
			}
			]
		},
		"uri": "/article/7712601"
	}, {
		"id": 8215601,
		"name": "Trimbach",
		"name2": "Gewurztraminer",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(Date.now() - 2 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2015",
				"newValue": "2016"
			}, {
				"name": "Alcohol",
				"oldValue": "13.50%",
				"newValue": "14.00%"
			}
			]
		},
		"uri": "/article/8215601"
	}, {
		"id": 467402,
		"name": "Quercus IV Mongolica",
		"name2": "",
		"category": "Whisky",
		"changes": {
			"timestamp": new Date(Date.now() - 2 * 864e5),
			"changes": [{
				"name": "Producer",
				"oldValue": "Box Destilleri",
				"newValue": "Box Destilleri AB / High Coast"
			}
			]
		},
		"uri": "/article/467402"
	}, {
		"id": 7645201,
		"name": "Valentin Leflaive",
		"name2": "Extra Brut Blanc de Blancs",
		"category": "Mousserande vin",
		"changes": {
			"timestamp": new Date(Date.now() - 2 * 864e5),
			"changes": [{
				"name": "Producer",
				"oldValue": "Domaine Leflaive",
				"newValue": "Valentin Leflaive"
			}, {
				"name": "Vintage",
				"oldValue": "2018",
				"newValue": ""
			}
			]
		},
		"uri": "/article/7645201"
	}, {
		"id": 7685001,
		"name": "Markowitsch",
		"name2": "Rubin Carnuntum Zweigelt",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 3 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2015",
				"newValue": "2017"
			}
			]
		},
		"uri": "/article/7685001"
	}, {
		"id": 285201,
		"name": "Château Pineraie",
		"name2": "Malbec",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 3 * 864e5),
			"changes": [{
				"name": "Alcohol",
				"oldValue": "13.00%",
				"newValue": "13.50%"
			}
			]
		},
		"uri": "/article/285201"
	}, {
		"id": 7058401,
		"name": "Bosio",
		"name2": "Truffle Hunter Leda Nebbiolo d´Alba",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 3 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2014",
				"newValue": "2017"
			}
			]
		},
		"uri": "/article/7058401"
	}, {
		"id": 7618902,
		"name": "Bricco Quaglia",
		"name2": "Moscato d ásti",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(Date.now() - 3 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2017",
				"newValue": "2018"
			}
			]
		},
		"uri": "/article/7618902"
	}, {
		"id": 841202,
		"name": "Castaño Dulce",
		"name2": "Monastrell",
		"category": "Aperitif och dessert",
		"changes": {
			"timestamp": new Date(Date.now() - 3 * 864e5),
			"changes": [{
				"name": "Alcohol",
				"oldValue": "15.00%",
				"newValue": "16.00%"
			}
			]
		},
		"uri": "/article/841202"
	}, {
		"id": 7050201,
		"name": "Le Page",
		"name2": "Vignelaure Rouge",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 3 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2014",
				"newValue": "2016"
			}
			]
		},
		"uri": "/article/7050201"
	}, {
		"id": 7632101,
		"name": "Le Page",
		"name2": "Vignelaure Blanc",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(Date.now() - 3 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2016",
				"newValue": "2017"
			}
			]
		},
		"uri": "/article/7632101"
	}, {
		"id": 7999301,
		"name": "Vignelaure",
		"name2": "Blanc",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(Date.now() - 3 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2016",
				"newValue": "2017"
			}
			]
		},
		"uri": "/article/7999301"
	}, {
		"id": 7837301,
		"name": "Weingut Julius",
		"name2": "Goldmuskateller",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(Date.now() - 3 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2017",
				"newValue": "2018"
			}, {
				"name": "Alcohol",
				"oldValue": "11.50%",
				"newValue": "13.00%"
			}
			]
		},
		"uri": "/article/7837301"
	}, {
		"id": 7895001,
		"name": "Weingut Julius",
		"name2": "Sauvignon Blanc Trocken",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(Date.now() - 3 * 864e5),
			"changes": [{
				"name": "Alcohol",
				"oldValue": "13.00%",
				"newValue": "12.00%"
			}
			]
		},
		"uri": "/article/7895001"
	}, {
		"id": 7528201,
		"name": "Reichsgraf von Kesselstatt",
		"name2": "Riesling Trocken",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(Date.now() - 3 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2017",
				"newValue": "2018"
			}
			]
		},
		"uri": "/article/7528201"
	}, {
		"id": 7918601,
		"name": "Maximin Grünhauser",
		"name2": "Riesling Herrenberg Kabinett Grosse Lage",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(Date.now() - 3 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2016",
				"newValue": "2017"
			}
			]
		},
		"uri": "/article/7918601"
	}, {
		"id": 7374001,
		"name": "Maximin Grünhäuser Abtsberg",
		"name2": "Riesling Alte Reben Trocken",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(Date.now() - 3 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2014",
				"newValue": "2016"
			}, {
				"name": "Alcohol",
				"oldValue": "11.50%",
				"newValue": "11.00%"
			}
			]
		},
		"uri": "/article/7374001"
	}, {
		"id": 7490201,
		"name": "Les Dauphins",
		"name2": "Côtes du Rhône Organic Rosé",
		"category": "Rosévin",
		"changes": {
			"timestamp": new Date(Date.now() - 3 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2017",
				"newValue": "2018"
			}
			]
		},
		"uri": "/article/7490201"
	}, {
		"id": 7528001,
		"name": "Le Grand Ballon",
		"name2": "Sauvignon Blanc",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(Date.now() - 3 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2016",
				"newValue": "2018"
			}
			]
		},
		"uri": "/article/7528001"
	}, {
		"id": 7374101,
		"name": "Jurtschitsch",
		"name2": "Zöbiger Heiligenstein Riesling",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(Date.now() - 3 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2014",
				"newValue": "2016"
			}, {
				"name": "Alcohol",
				"oldValue": "13.00%",
				"newValue": "12.50%"
			}
			]
		},
		"uri": "/article/7374101"
	}, {
		"id": 7306301,
		"name": "Jurtschitsch",
		"name2": "Ried Loiserberg Grüner Veltliner",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(Date.now() - 3 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2016",
				"newValue": "2017"
			}, {
				"name": "Alcohol",
				"oldValue": "13.00%",
				"newValue": "12.50%"
			}
			]
		},
		"uri": "/article/7306301"
	}, {
		"id": 7295001,
		"name": "Dolcetto d'Alba",
		"name2": "Massolino",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 3 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2015",
				"newValue": "2017"
			}, {
				"name": "Alcohol",
				"oldValue": "14.00%",
				"newValue": "13.50%"
			}
			]
		},
		"uri": "/article/7295001"
	}, {
		"id": 96402,
		"name": "Exklusiv trälåda",
		"name2": "2 buteljer",
		"category": "Presentförpackningar",
		"changes": {
			"timestamp": new Date(Date.now() - 4 * 864e5),
			"changes": [{
				"name": "Expired",
				"oldValue": false,
				"newValue": true
			}
			]
		},
		"uri": "/article/96402"
	}, {
		"id": 7164301,
		"name": "APPELLO Aperitif",
		"name2": "by Carolina Gynning",
		"category": "Aperitif och dessert",
		"changes": {
			"timestamp": new Date(Date.now() - 4 * 864e5),
			"changes": [{
				"name": "Price",
				"oldValue": 101.00,
				"newValue": 99.00
			}, {
				"name": "PricePerLitre",
				"oldValue": 134.67,
				"newValue": 132.00
			}
			]
		},
		"uri": "/article/7164301"
	}, {
		"id": 7901001,
		"name": "Breton",
		"name2": "Bourgueil Trinch",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 4 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2016",
				"newValue": "2017"
			}
			]
		},
		"uri": "/article/7901001"
	}, {
		"id": 7533901,
		"name": "Lelarge-Pugeot",
		"name2": "Tradition Extra-Brut",
		"category": "Mousserande vin",
		"changes": {
			"timestamp": new Date(Date.now() - 4 * 864e5),
			"changes": [{
				"name": "Producer",
				"oldValue": "Champagne Leguillette-Romelot",
				"newValue": "Lelarge Pugeot"
			}
			]
		},
		"uri": "/article/7533901"
	}, {
		"id": 7093901,
		"name": "Perrin",
		"name2": "Gigondas La Gille",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 4 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2014",
				"newValue": "2016"
			}
			]
		},
		"uri": "/article/7093901"
	}, {
		"id": 7410401,
		"name": "Fontanafredda",
		"name2": "Gavi",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(Date.now() - 4 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2016",
				"newValue": "2017"
			}
			]
		},
		"uri": "/article/7410401"
	}, {
		"id": 7459601,
		"name": "Torre Mora",
		"name2": "Scalunera Etna Bianco",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(Date.now() - 4 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2017",
				"newValue": "2018"
			}
			]
		},
		"uri": "/article/7459601"
	}, {
		"id": 7644001,
		"name": "Torre Mora",
		"name2": "Cauru Etna Rosso",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 4 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2014",
				"newValue": "2015"
			}
			]
		},
		"uri": "/article/7644001"
	}, {
		"id": 7428401,
		"name": "Lone Birch",
		"name2": "Syrah",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 4 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2015",
				"newValue": "2016"
			}
			]
		},
		"uri": "/article/7428401"
	}, {
		"id": 7170901,
		"name": "Giacosa Fratelli",
		"name2": "Dolcetto d'Alba Sarrocco",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 4 * 864e5),
			"changes": [{
				"name": "Type",
				"oldValue": "",
				"newValue": "Fruktigt & Smakrikt"
			}
			]
		},
		"uri": "/article/7170901"
	}, {
		"id": 7099201,
		"name": "Ruminat Primitivo",
		"name2": "Lunaria Terre di Chieti",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 4 * 864e5),
			"changes": [{
				"name": "Type",
				"oldValue": "",
				"newValue": "Fruktigt & Smakrikt"
			}
			]
		},
		"uri": "/article/7099201"
	}, {
		"id": 7544101,
		"name": "Musella",
		"name2": "Amarone della Valpolicella Riserva",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 4 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2011",
				"newValue": "2012"
			}
			]
		},
		"uri": "/article/7544101"
	}, {
		"id": 7833101,
		"name": "Kloster Eberbach",
		"name2": "Riesling Trocken",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(Date.now() - 4 * 864e5),
			"changes": [{
				"name": "Alcohol",
				"oldValue": "11.50%",
				"newValue": "13.00%"
			}
			]
		},
		"uri": "/article/7833101"
	}, {
		"id": 7157001,
		"name": "Selvarossa",
		"name2": "Salice Salentino Riserva",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 4 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2012",
				"newValue": "2015"
			}
			]
		},
		"uri": "/article/7157001"
	}, {
		"id": 7580801,
		"name": "Decero",
		"name2": "Cabernet Sauvignon",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 4 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2013",
				"newValue": "2014"
			}
			]
		},
		"uri": "/article/7580801"
	}, {
		"id": 7495701,
		"name": "Sasso al Poggio",
		"name2": "",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 4 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2012",
				"newValue": "2015"
			}
			]
		},
		"uri": "/article/7495701"
	}, {
		"id": 7991001,
		"name": "Steinberger Rheingau",
		"name2": "Riesling Trocken",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(Date.now() - 4 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2016",
				"newValue": "2017"
			}, {
				"name": "Alcohol",
				"oldValue": "12.00%",
				"newValue": "11.50%"
			}
			]
		},
		"uri": "/article/7991001"
	}, {
		"id": 7997501,
		"name": "Au Bon Climat",
		"name2": "Santa Barbara Pinot Noir",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 4 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2016",
				"newValue": "2017"
			}
			]
		},
		"uri": "/article/7997501"
	}, {
		"id": 7064501,
		"name": "Mega Zin",
		"name2": "Zinfandel",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 4 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2015",
				"newValue": "2018"
			}
			]
		},
		"uri": "/article/7064501"
	}, {
		"id": 7420101,
		"name": "Borgogno",
		"name2": "Barbera d'Alba Superiore",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 4 * 864e5),
			"changes": [{
				"name": "Type",
				"oldValue": "Mjukt & Bärigt",
				"newValue": "Fruktigt & Smakrikt"
			}
			]
		},
		"uri": "/article/7420101"
	}, {
		"id": 7167301,
		"name": "Mammoth",
		"name2": "Zinfandel",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 4 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2016",
				"newValue": "2018"
			}, {
				"name": "Alcohol",
				"oldValue": "14.50%",
				"newValue": "14.00%"
			}
			]
		},
		"uri": "/article/7167301"
	}, {
		"id": 7167501,
		"name": "Venezia Giulia",
		"name2": "Pinot Grigio",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(Date.now() - 7 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2017",
				"newValue": "2018"
			}
			]
		},
		"uri": "/article/7167501"
	}, {
		"id": 7227501,
		"name": "Barolo Riserva Bricco delle Viole",
		"name2": "Viberti Giovanni",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 7 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2010",
				"newValue": "2011"
			}
			]
		},
		"uri": "/article/7227501"
	}, {
		"id": 7543101,
		"name": "Big Fine Girl",
		"name2": "Riesling",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(Date.now() - 7 * 864e5),
			"changes": [{
				"name": "Producer",
				"oldValue": "The Spurs Wine Company",
				"newValue": "Jeanneret Wines"
			}
			]
		},
		"uri": "/article/7543101"
	}, {
		"id": 7626601,
		"name": "Chablis Premier Cru",
		"name2": "La Forêt",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(Date.now() - 7 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2016",
				"newValue": "2017"
			}
			]
		},
		"uri": "/article/7626601"
	}, {
		"id": 7908901,
		"name": "Cantina del Pino",
		"name2": "Barbaresco Albesani",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 7 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2014",
				"newValue": "2015"
			}
			]
		},
		"uri": "/article/7908901"
	}, {
		"id": 7820201,
		"name": "Valcanzjria",
		"name2": "",
		"category": "Vitt vin",
		"changes": {
			"timestamp": new Date(Date.now() - 7 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2017",
				"newValue": "2018"
			}, {
				"name": "Alcohol",
				"oldValue": "13.00%",
				"newValue": "12.50%"
			}
			]
		},
		"uri": "/article/7820201"
	}, {
		"id": 7240201,
		"name": "Rivetto",
		"name2": "Barolo Serralunga",
		"category": "Rött vin",
		"changes": {
			"timestamp": new Date(Date.now() - 7 * 864e5),
			"changes": [{
				"name": "Vintage",
				"oldValue": "2014",
				"newValue": "2015"
			}
			]
		},
		"uri": "/article/7240201"
	}
	]
}

const recentChangesByType = {
	"alcohol": {
		"timestamp": new Date(),
		"data": [{
			"id": 7508801,
			"name": "Chablis",
			"name2": "Grand Cru Les Clos Clotilde Davenne",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2013",
					"newValue": "2015"
				}
				]
			}
			],
			"uri": "/article/7508801"
		}, {
			"id": 800002,
			"name": "Graham's",
			"name2": "Late Bottled Vintage",
			"category": "Aperitif och dessert",
			"changes": [{
				"timestamp": new Date(),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2013",
					"newValue": "2014"
				}
				]
			}
			],
			"uri": "/article/800002"
		}, {
			"id": 582401,
			"name": "50°",
			"name2": "Riesling Trocken",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/582401"
		}, {
			"id": 613901,
			"name": "Ramos",
			"name2": "Reserva",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2016"
				}
				]
			}
			],
			"uri": "/article/613901"
		}, {
			"id": 800001,
			"name": "Graham's",
			"name2": "Late Bottled Vintage",
			"category": "Aperitif och dessert",
			"changes": [{
				"timestamp": new Date(),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2013",
					"newValue": "2014"
				}
				]
			}
			],
			"uri": "/article/800001"
		}, {
			"id": 7253401,
			"name": "Amazin'",
			"name2": "Zinfandel",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}
				]
			}
			],
			"uri": "/article/7253401"
		}, {
			"id": 302701,
			"name": "Ribera 1 One",
			"name2": "",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2016"
				}
				]
			}
			],
			"uri": "/article/302701"
		}, {
			"id": 7660401,
			"name": "Malpuesto",
			"name2": "",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}
				]
			}
			],
			"uri": "/article/7660401"
		}, {
			"id": 7423301,
			"name": "Domaine Montirius",
			"name2": "La Muse Papilles",
			"category": "Rosévin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7423301"
		}, {
			"id": 7483401,
			"name": "Sandro Fay",
			"name2": "Carteria Riserva",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2014",
					"newValue": "2015"
				}, {
					"name": "Alcohol",
					"oldValue": "13.00%",
					"newValue": "13.50%"
				}
				]
			}
			],
			"uri": "/article/7483401"
		}, {
			"id": 7377101,
			"name": "Weingut Julius",
			"name2": "Spätburgunder Trocken",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}, {
					"name": "Alcohol",
					"oldValue": "12.50%",
					"newValue": "13.50%"
				}
				]
			}
			],
			"uri": "/article/7377101"
		}, {
			"id": 7241501,
			"name": "Margalh",
			"name2": "Blanc",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7241501"
		}, {
			"id": 7656801,
			"name": "Tommasi Bosco del Gal",
			"name2": "Bianco di Custoza",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7656801"
		}, {
			"id": 841202,
			"name": "Castaño Dulce",
			"name2": "Monastrell",
			"category": "Aperitif och dessert",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2013",
					"newValue": "2016"
				}
				]
			}
			],
			"uri": "/article/841202"
		}, {
			"id": 7895001,
			"name": "Weingut Julius",
			"name2": "Sauvignon Blanc Trocken",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}, {
					"name": "Alcohol",
					"oldValue": "12.00%",
					"newValue": "13.50%"
				}
				]
			}
			],
			"uri": "/article/7895001"
		}, {
			"id": 7833101,
			"name": "Kloster Eberbach",
			"name2": "Riesling Trocken",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Type",
					"oldValue": "Druvigt & Blommigt",
					"newValue": ""
				}, {
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7833101"
		}, {
			"id": 8733301,
			"name": "Plantation",
			"name2": "Trinidad",
			"category": "Rom",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2005",
					"newValue": "2008"
				}
				]
			}
			],
			"uri": "/article/8733301"
		}, {
			"id": 7620501,
			"name": "Montirius",
			"name2": "Gigondas Confidentiel",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2011",
					"newValue": "2014"
				}, {
					"name": "Alcohol",
					"oldValue": "15.50%",
					"newValue": "13.50%"
				}
				]
			}
			],
			"uri": "/article/7620501"
		}, {
			"id": 7281301,
			"name": "Brunello di Montalcino Vigneti del Versante",
			"name2": "Pian Dell'Orino",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2011",
					"newValue": "2013"
				}
				]
			}
			],
			"uri": "/article/7281301"
		}, {
			"id": 7427901,
			"name": "Orben",
			"name2": "",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}
				]
			}
			],
			"uri": "/article/7427901"
		}, {
			"id": 7425101,
			"name": "Finca Villacreces",
			"name2": "",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2016"
				}
				]
			}
			],
			"uri": "/article/7425101"
		}, {
			"id": 7435801,
			"name": "Sybille Kuntz",
			"name2": "Mosel Riesling Qualitätswein Trocken",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7435801"
		}, {
			"id": 7136601,
			"name": "Protos",
			"name2": "Roble",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7136601"
		}, {
			"id": 7126701,
			"name": "Philipp Kuhn Kirschgarten GG Riesling",
			"name2": "Grosses Gewächs Riesling",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7126701"
		}, {
			"id": 7866801,
			"name": "Brocard Pierre",
			"name2": "Contrée Noire Extra Brut",
			"category": "Mousserande vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2009",
					"newValue": "2014"
				}
				]
			}
			],
			"uri": "/article/7866801"
		}, {
			"id": 657801,
			"name": "District 7",
			"name2": "Pinot Noir",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}
				]
			}
			],
			"uri": "/article/657801"
		}, {
			"id": 7592701,
			"name": "Montirius",
			"name2": "Terre des Aînés",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2013",
					"newValue": "2015"
				}
				]
			}
			],
			"uri": "/article/7592701"
		}, {
			"id": 7538401,
			"name": "Birgit Braunstein",
			"name2": "Chardonnay Felsenstein",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}, {
					"name": "Alcohol",
					"oldValue": "13.00%",
					"newValue": "13.50%"
				}
				]
			}
			],
			"uri": "/article/7538401"
		}, {
			"id": 7751701,
			"name": "Birgit Braunstein",
			"name2": "Pinot vom Berg",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}
				]
			}
			],
			"uri": "/article/7751701"
		}, {
			"id": 7701501,
			"name": "Moscato d'Asti",
			"name2": "Massolino",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2018"
				}, {
					"name": "Alcohol",
					"oldValue": "5.50%",
					"newValue": "5.00%"
				}
				]
			}
			],
			"uri": "/article/7701501"
		}, {
			"id": 7768201,
			"name": "Damoli",
			"name2": "Giago Ripasso Classico Superiore",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 2 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2012",
					"newValue": "2013"
				}
				]
			}
			],
			"uri": "/article/7768201"
		}, {
			"id": 7486901,
			"name": "Munda Encruzado",
			"name2": "",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 2 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2016"
				}
				]
			}
			],
			"uri": "/article/7486901"
		}, {
			"id": 7412201,
			"name": "Margalh",
			"name2": "Rouge",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 2 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}
				]
			}
			],
			"uri": "/article/7412201"
		}, {
			"id": 7591801,
			"name": "Prinz von Hessen",
			"name2": "Riesling Kabinett Royal",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 2 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}, {
					"name": "Alcohol",
					"oldValue": "12.00%",
					"newValue": "11.50%"
				}
				]
			}
			],
			"uri": "/article/7591801"
		}, {
			"id": 7199101,
			"name": "Elio Grasso",
			"name2": "Educato Chardonnay",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 2 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}, {
					"name": "Alcohol",
					"oldValue": "14.00%",
					"newValue": "13.00%"
				}
				]
			}
			],
			"uri": "/article/7199101"
		}, {
			"id": 7572402,
			"name": "Trimbach",
			"name2": "Gewurztraminer Vendange Tardive",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 2 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2014",
					"newValue": "2015"
				}
				]
			}
			],
			"uri": "/article/7572402"
		}, {
			"id": 7579301,
			"name": "Tommasi Poggio al Tufo",
			"name2": "Vermentino",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 2 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7579301"
		}, {
			"id": 7347901,
			"name": "Sällskapets",
			"name2": "Röda Bordeaux",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 2 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2014",
					"newValue": "2016"
				}, {
					"name": "Alcohol",
					"oldValue": "13.50%",
					"newValue": "13.00%"
				}
				]
			}
			],
			"uri": "/article/7347901"
		}, {
			"id": 7712601,
			"name": "Drappier",
			"name2": "Millésime Exception Brut",
			"category": "Mousserande vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 2 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2012",
					"newValue": "2013"
				}
				]
			}
			],
			"uri": "/article/7712601"
		}, {
			"id": 8215601,
			"name": "Trimbach",
			"name2": "Gewurztraminer",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 2 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2016"
				}, {
					"name": "Alcohol",
					"oldValue": "13.50%",
					"newValue": "14.00%"
				}
				]
			}
			],
			"uri": "/article/8215601"
		}, {
			"id": 7645201,
			"name": "Valentin Leflaive",
			"name2": "Extra Brut Blanc de Blancs",
			"category": "Mousserande vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 2 * 864e5),
				"changes": [{
					"name": "Producer",
					"oldValue": "Domaine Leflaive",
					"newValue": "Valentin Leflaive"
				}, {
					"name": "Vintage",
					"oldValue": "2018",
					"newValue": ""
				}
				]
			}
			],
			"uri": "/article/7645201"
		}, {
			"id": 7685001,
			"name": "Markowitsch",
			"name2": "Rubin Carnuntum Zweigelt",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 3 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2017"
				}
				]
			}
			],
			"uri": "/article/7685001"
		}, {
			"id": 7058401,
			"name": "Bosio",
			"name2": "Truffle Hunter Leda Nebbiolo d´Alba",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 3 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2014",
					"newValue": "2017"
				}
				]
			}
			],
			"uri": "/article/7058401"
		}, {
			"id": 7618902,
			"name": "Bricco Quaglia",
			"name2": "Moscato d ásti",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 3 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7618902"
		}, {
			"id": 7050201,
			"name": "Le Page",
			"name2": "Vignelaure Rouge",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 3 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2014",
					"newValue": "2016"
				}
				]
			}
			],
			"uri": "/article/7050201"
		}, {
			"id": 7632101,
			"name": "Le Page",
			"name2": "Vignelaure Blanc",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 3 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}
				]
			}
			],
			"uri": "/article/7632101"
		}, {
			"id": 7999301,
			"name": "Vignelaure",
			"name2": "Blanc",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 3 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}
				]
			}
			],
			"uri": "/article/7999301"
		}, {
			"id": 7837301,
			"name": "Weingut Julius",
			"name2": "Goldmuskateller",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 3 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}, {
					"name": "Alcohol",
					"oldValue": "11.50%",
					"newValue": "13.00%"
				}
				]
			}
			],
			"uri": "/article/7837301"
		}, {
			"id": 7528201,
			"name": "Reichsgraf von Kesselstatt",
			"name2": "Riesling Trocken",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 3 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7528201"
		}, {
			"id": 7590501,
			"name": "Musar Jeune",
			"name2": "",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 14 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": ""
				}
				]
			}, {
				"timestamp": new Date(Date.now() - 3 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "",
					"newValue": "2017"
				}, {
					"name": "Alcohol",
					"oldValue": "14.00%",
					"newValue": "13.50%"
				}
				]
			}
			],
			"uri": "/article/7590501"
		}, {
			"id": 7918601,
			"name": "Maximin Grünhauser",
			"name2": "Riesling Herrenberg Kabinett Grosse Lage",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 3 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}
				]
			}
			],
			"uri": "/article/7918601"
		}, {
			"id": 7374001,
			"name": "Maximin Grünhäuser Abtsberg",
			"name2": "Riesling Alte Reben Trocken",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 3 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2014",
					"newValue": "2016"
				}, {
					"name": "Alcohol",
					"oldValue": "11.50%",
					"newValue": "11.00%"
				}
				]
			}
			],
			"uri": "/article/7374001"
		}, {
			"id": 7490201,
			"name": "Les Dauphins",
			"name2": "Côtes du Rhône Organic Rosé",
			"category": "Rosévin",
			"changes": [{
				"timestamp": new Date(Date.now() - 3 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7490201"
		}, {
			"id": 7528001,
			"name": "Le Grand Ballon",
			"name2": "Sauvignon Blanc",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 3 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7528001"
		}, {
			"id": 7255801,
			"name": "Côtes Du Rhone",
			"name2": "Domaine Pierre Usséglio",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 11 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2017"
				}
				]
			}, {
				"timestamp": new Date(Date.now() - 3 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2016"
				}, {
					"name": "Alcohol",
					"oldValue": "14.50%",
					"newValue": "15.50%"
				}
				]
			}
			],
			"uri": "/article/7255801"
		}, {
			"id": 7374101,
			"name": "Jurtschitsch",
			"name2": "Zöbiger Heiligenstein Riesling",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 3 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2014",
					"newValue": "2016"
				}, {
					"name": "Alcohol",
					"oldValue": "13.00%",
					"newValue": "12.50%"
				}
				]
			}
			],
			"uri": "/article/7374101"
		}, {
			"id": 7306301,
			"name": "Jurtschitsch",
			"name2": "Ried Loiserberg Grüner Veltliner",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 3 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}, {
					"name": "Alcohol",
					"oldValue": "13.00%",
					"newValue": "12.50%"
				}
				]
			}
			],
			"uri": "/article/7306301"
		}, {
			"id": 7295001,
			"name": "Dolcetto d'Alba",
			"name2": "Massolino",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 3 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2017"
				}, {
					"name": "Alcohol",
					"oldValue": "14.00%",
					"newValue": "13.50%"
				}
				]
			}
			],
			"uri": "/article/7295001"
		}, {
			"id": 7901001,
			"name": "Breton",
			"name2": "Bourgueil Trinch",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 4 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}
				]
			}
			],
			"uri": "/article/7901001"
		}, {
			"id": 7093901,
			"name": "Perrin",
			"name2": "Gigondas La Gille",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 4 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2014",
					"newValue": "2016"
				}
				]
			}
			],
			"uri": "/article/7093901"
		}, {
			"id": 7410401,
			"name": "Fontanafredda",
			"name2": "Gavi",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 4 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}
				]
			}
			],
			"uri": "/article/7410401"
		}, {
			"id": 7459601,
			"name": "Torre Mora",
			"name2": "Scalunera Etna Bianco",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 4 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7459601"
		}, {
			"id": 7644001,
			"name": "Torre Mora",
			"name2": "Cauru Etna Rosso",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 4 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2014",
					"newValue": "2015"
				}
				]
			}
			],
			"uri": "/article/7644001"
		}, {
			"id": 7428401,
			"name": "Lone Birch",
			"name2": "Syrah",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 4 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2016"
				}
				]
			}
			],
			"uri": "/article/7428401"
		}, {
			"id": 7544101,
			"name": "Musella",
			"name2": "Amarone della Valpolicella Riserva",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 4 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2011",
					"newValue": "2012"
				}
				]
			}
			],
			"uri": "/article/7544101"
		}, {
			"id": 7157001,
			"name": "Selvarossa",
			"name2": "Salice Salentino Riserva",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 4 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2012",
					"newValue": "2015"
				}
				]
			}
			],
			"uri": "/article/7157001"
		}, {
			"id": 7580801,
			"name": "Decero",
			"name2": "Cabernet Sauvignon",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 4 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2013",
					"newValue": "2014"
				}
				]
			}
			],
			"uri": "/article/7580801"
		}, {
			"id": 7495701,
			"name": "Sasso al Poggio",
			"name2": "",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 4 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2012",
					"newValue": "2015"
				}
				]
			}
			],
			"uri": "/article/7495701"
		}, {
			"id": 7991001,
			"name": "Steinberger Rheingau",
			"name2": "Riesling Trocken",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 4 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}, {
					"name": "Alcohol",
					"oldValue": "12.00%",
					"newValue": "11.50%"
				}
				]
			}
			],
			"uri": "/article/7991001"
		}, {
			"id": 7997501,
			"name": "Au Bon Climat",
			"name2": "Santa Barbara Pinot Noir",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 4 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}
				]
			}
			],
			"uri": "/article/7997501"
		}, {
			"id": 7064501,
			"name": "Mega Zin",
			"name2": "Zinfandel",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 4 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7064501"
		}, {
			"id": 7167301,
			"name": "Mammoth",
			"name2": "Zinfandel",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 4 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2018"
				}, {
					"name": "Alcohol",
					"oldValue": "14.50%",
					"newValue": "14.00%"
				}
				]
			}
			],
			"uri": "/article/7167301"
		}, {
			"id": 7167501,
			"name": "Venezia Giulia",
			"name2": "Pinot Grigio",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 7 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7167501"
		}, {
			"id": 7227501,
			"name": "Barolo Riserva Bricco delle Viole",
			"name2": "Viberti Giovanni",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 7 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2010",
					"newValue": "2011"
				}
				]
			}
			],
			"uri": "/article/7227501"
		}, {
			"id": 7626601,
			"name": "Chablis Premier Cru",
			"name2": "La Forêt",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 7 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}
				]
			}
			],
			"uri": "/article/7626601"
		}, {
			"id": 7908901,
			"name": "Cantina del Pino",
			"name2": "Barbaresco Albesani",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 7 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2014",
					"newValue": "2015"
				}
				]
			}
			],
			"uri": "/article/7908901"
		}, {
			"id": 7820201,
			"name": "Valcanzjria",
			"name2": "",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 7 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}, {
					"name": "Alcohol",
					"oldValue": "13.00%",
					"newValue": "12.50%"
				}
				]
			}
			],
			"uri": "/article/7820201"
		}, {
			"id": 7240201,
			"name": "Rivetto",
			"name2": "Barolo Serralunga",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 7 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2014",
					"newValue": "2015"
				}
				]
			}
			],
			"uri": "/article/7240201"
		}, {
			"id": 7476201,
			"name": "Nautilus",
			"name2": "Pinot Noir",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 7 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2016"
				}
				]
			}
			],
			"uri": "/article/7476201"
		}, {
			"id": 7056901,
			"name": "Viré Clessé",
			"name2": "Cuvée Spéciale",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 7 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2017"
				}
				]
			}
			],
			"uri": "/article/7056901"
		}, {
			"id": 7214901,
			"name": "Cornas",
			"name2": "Les Grandes Terrasses",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 7 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2013",
					"newValue": "2014"
				}
				]
			}
			],
			"uri": "/article/7214901"
		}, {
			"id": 165103,
			"name": "Chimay blå",
			"name2": "",
			"category": "Öl",
			"changes": [{
				"timestamp": new Date(Date.now() - 7 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2019"
				}
				]
			}
			],
			"uri": "/article/165103"
		}, {
			"id": 7137701,
			"name": "Musita Regieterre",
			"name2": "Catarratto",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 7 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7137701"
		}, {
			"id": 7152801,
			"name": "Musita",
			"name2": "Passocalcara",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 7 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2016"
				}
				]
			}
			],
			"uri": "/article/7152801"
		}, {
			"id": 7179301,
			"name": "Musita",
			"name2": "Passocalcara",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 7 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2013",
					"newValue": "2014"
				}, {
					"name": "Alcohol",
					"oldValue": "14.00%",
					"newValue": "15.00%"
				}
				]
			}
			],
			"uri": "/article/7179301"
		}, {
			"id": 7900801,
			"name": "Röschitz",
			"name2": "Grüner Veltliner",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 8 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7900801"
		}, {
			"id": 7230701,
			"name": "Frog's Leap",
			"name2": "Chardonnay",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 8 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}, {
					"name": "Alcohol",
					"oldValue": "13.50%",
					"newValue": "13.10%"
				}
				]
			}
			],
			"uri": "/article/7230701"
		}, {
			"id": 7622301,
			"name": "I Colombi",
			"name2": "Rosso",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 8 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7622301"
		}, {
			"id": 234101,
			"name": "Il Grande Vivati",
			"name2": "Primitivo",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 8 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/234101"
		}, {
			"id": 7981101,
			"name": "La Spinetta",
			"name2": "Barbaresco Starderi",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 8 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2006",
					"newValue": "2008"
				}
				]
			}
			],
			"uri": "/article/7981101"
		}, {
			"id": 7990401,
			"name": "La Spinetta",
			"name2": "Barbaresco Valeirano",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 8 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2006",
					"newValue": "2008"
				}
				]
			}
			],
			"uri": "/article/7990401"
		}, {
			"id": 7332701,
			"name": "Baron de Ley",
			"name2": "Finca Monasterio",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 8 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2016"
				}
				]
			}
			],
			"uri": "/article/7332701"
		}, {
			"id": 786706,
			"name": "Palmer & Co",
			"name2": "Vintage Brut",
			"category": "Mousserande vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 8 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2012",
					"newValue": "2008"
				}
				]
			}
			],
			"uri": "/article/786706"
		}, {
			"id": 7371301,
			"name": "Mount Eden",
			"name2": "Reserve Chardonnay",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 8 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2013",
					"newValue": "2015"
				}
				]
			}
			],
			"uri": "/article/7371301"
		}, {
			"id": 7343701,
			"name": "Rosso di Montalcino",
			"name2": "Caprili",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 8 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}, {
					"name": "Alcohol",
					"oldValue": "14.00%",
					"newValue": "14.50%"
				}
				]
			}
			],
			"uri": "/article/7343701"
		}, {
			"id": 7699801,
			"name": "San Román",
			"name2": "",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 8 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2014",
					"newValue": "2015"
				}
				]
			}
			],
			"uri": "/article/7699801"
		}, {
			"id": 539501,
			"name": "Gevrey-Chambertin La Justice",
			"name2": "Domaine René Bouvier",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 8 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": ""
				}
				]
			}
			],
			"uri": "/article/539501"
		}, {
			"id": 7879601,
			"name": "Terroir",
			"name2": "Arbossar",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 8 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2016"
				}, {
					"name": "Alcohol",
					"oldValue": "13.50%",
					"newValue": "14.00%"
				}
				]
			}
			],
			"uri": "/article/7879601"
		}, {
			"id": 7385301,
			"name": "Julian Haart",
			"name2": "Wintricher Ohligsberg Spätlese Riesling",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 8 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2014",
					"newValue": "2017"
				}, {
					"name": "Alcohol",
					"oldValue": "8.00%",
					"newValue": "12.50%"
				}
				]
			}
			],
			"uri": "/article/7385301"
		}, {
			"id": 100201,
			"name": "Turckheim Pinot Blanc Organic",
			"name2": "",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 9 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/100201"
		}
		]
	},
	"vintage": {
		"timestamp": new Date(),
		"data": [{
			"id": 7508801,
			"name": "Chablis",
			"name2": "Grand Cru Les Clos Clotilde Davenne",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2013",
					"newValue": "2015"
				}
				]
			}
			],
			"uri": "/article/7508801"
		}, {
			"id": 800002,
			"name": "Graham's",
			"name2": "Late Bottled Vintage",
			"category": "Aperitif och dessert",
			"changes": [{
				"timestamp": new Date(),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2013",
					"newValue": "2014"
				}
				]
			}
			],
			"uri": "/article/800002"
		}, {
			"id": 582401,
			"name": "50°",
			"name2": "Riesling Trocken",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/582401"
		}, {
			"id": 613901,
			"name": "Ramos",
			"name2": "Reserva",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2016"
				}
				]
			}
			],
			"uri": "/article/613901"
		}, {
			"id": 800001,
			"name": "Graham's",
			"name2": "Late Bottled Vintage",
			"category": "Aperitif och dessert",
			"changes": [{
				"timestamp": new Date(),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2013",
					"newValue": "2014"
				}
				]
			}
			],
			"uri": "/article/800001"
		}, {
			"id": 7253401,
			"name": "Amazin'",
			"name2": "Zinfandel",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}
				]
			}
			],
			"uri": "/article/7253401"
		}, {
			"id": 302701,
			"name": "Ribera 1 One",
			"name2": "",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2016"
				}
				]
			}
			],
			"uri": "/article/302701"
		}, {
			"id": 7660401,
			"name": "Malpuesto",
			"name2": "",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}
				]
			}
			],
			"uri": "/article/7660401"
		}, {
			"id": 7423301,
			"name": "Domaine Montirius",
			"name2": "La Muse Papilles",
			"category": "Rosévin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7423301"
		}, {
			"id": 7483401,
			"name": "Sandro Fay",
			"name2": "Carteria Riserva",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2014",
					"newValue": "2015"
				}, {
					"name": "Alcohol",
					"oldValue": "13.00%",
					"newValue": "13.50%"
				}
				]
			}
			],
			"uri": "/article/7483401"
		}, {
			"id": 7377101,
			"name": "Weingut Julius",
			"name2": "Spätburgunder Trocken",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}, {
					"name": "Alcohol",
					"oldValue": "12.50%",
					"newValue": "13.50%"
				}
				]
			}
			],
			"uri": "/article/7377101"
		}, {
			"id": 7241501,
			"name": "Margalh",
			"name2": "Blanc",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7241501"
		}, {
			"id": 7656801,
			"name": "Tommasi Bosco del Gal",
			"name2": "Bianco di Custoza",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7656801"
		}, {
			"id": 841202,
			"name": "Castaño Dulce",
			"name2": "Monastrell",
			"category": "Aperitif och dessert",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2013",
					"newValue": "2016"
				}
				]
			}
			],
			"uri": "/article/841202"
		}, {
			"id": 7895001,
			"name": "Weingut Julius",
			"name2": "Sauvignon Blanc Trocken",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}, {
					"name": "Alcohol",
					"oldValue": "12.00%",
					"newValue": "13.50%"
				}
				]
			}
			],
			"uri": "/article/7895001"
		}, {
			"id": 7833101,
			"name": "Kloster Eberbach",
			"name2": "Riesling Trocken",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Type",
					"oldValue": "Druvigt & Blommigt",
					"newValue": ""
				}, {
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7833101"
		}, {
			"id": 8733301,
			"name": "Plantation",
			"name2": "Trinidad",
			"category": "Rom",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2005",
					"newValue": "2008"
				}
				]
			}
			],
			"uri": "/article/8733301"
		}, {
			"id": 7620501,
			"name": "Montirius",
			"name2": "Gigondas Confidentiel",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2011",
					"newValue": "2014"
				}, {
					"name": "Alcohol",
					"oldValue": "15.50%",
					"newValue": "13.50%"
				}
				]
			}
			],
			"uri": "/article/7620501"
		}, {
			"id": 7281301,
			"name": "Brunello di Montalcino Vigneti del Versante",
			"name2": "Pian Dell'Orino",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2011",
					"newValue": "2013"
				}
				]
			}
			],
			"uri": "/article/7281301"
		}, {
			"id": 7427901,
			"name": "Orben",
			"name2": "",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}
				]
			}
			],
			"uri": "/article/7427901"
		}, {
			"id": 7425101,
			"name": "Finca Villacreces",
			"name2": "",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2016"
				}
				]
			}
			],
			"uri": "/article/7425101"
		}, {
			"id": 7435801,
			"name": "Sybille Kuntz",
			"name2": "Mosel Riesling Qualitätswein Trocken",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7435801"
		}, {
			"id": 7136601,
			"name": "Protos",
			"name2": "Roble",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7136601"
		}, {
			"id": 7126701,
			"name": "Philipp Kuhn Kirschgarten GG Riesling",
			"name2": "Grosses Gewächs Riesling",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7126701"
		}, {
			"id": 7866801,
			"name": "Brocard Pierre",
			"name2": "Contrée Noire Extra Brut",
			"category": "Mousserande vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2009",
					"newValue": "2014"
				}
				]
			}
			],
			"uri": "/article/7866801"
		}, {
			"id": 657801,
			"name": "District 7",
			"name2": "Pinot Noir",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}
				]
			}
			],
			"uri": "/article/657801"
		}, {
			"id": 7592701,
			"name": "Montirius",
			"name2": "Terre des Aînés",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2013",
					"newValue": "2015"
				}
				]
			}
			],
			"uri": "/article/7592701"
		}, {
			"id": 7538401,
			"name": "Birgit Braunstein",
			"name2": "Chardonnay Felsenstein",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}, {
					"name": "Alcohol",
					"oldValue": "13.00%",
					"newValue": "13.50%"
				}
				]
			}
			],
			"uri": "/article/7538401"
		}, {
			"id": 7751701,
			"name": "Birgit Braunstein",
			"name2": "Pinot vom Berg",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}
				]
			}
			],
			"uri": "/article/7751701"
		}, {
			"id": 7701501,
			"name": "Moscato d'Asti",
			"name2": "Massolino",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2018"
				}, {
					"name": "Alcohol",
					"oldValue": "5.50%",
					"newValue": "5.00%"
				}
				]
			}
			],
			"uri": "/article/7701501"
		}, {
			"id": 7768201,
			"name": "Damoli",
			"name2": "Giago Ripasso Classico Superiore",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 2 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2012",
					"newValue": "2013"
				}
				]
			}
			],
			"uri": "/article/7768201"
		}, {
			"id": 7486901,
			"name": "Munda Encruzado",
			"name2": "",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 2 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2016"
				}
				]
			}
			],
			"uri": "/article/7486901"
		}, {
			"id": 7412201,
			"name": "Margalh",
			"name2": "Rouge",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 2 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}
				]
			}
			],
			"uri": "/article/7412201"
		}, {
			"id": 7591801,
			"name": "Prinz von Hessen",
			"name2": "Riesling Kabinett Royal",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 2 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}, {
					"name": "Alcohol",
					"oldValue": "12.00%",
					"newValue": "11.50%"
				}
				]
			}
			],
			"uri": "/article/7591801"
		}, {
			"id": 7199101,
			"name": "Elio Grasso",
			"name2": "Educato Chardonnay",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 2 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}, {
					"name": "Alcohol",
					"oldValue": "14.00%",
					"newValue": "13.00%"
				}
				]
			}
			],
			"uri": "/article/7199101"
		}, {
			"id": 7572402,
			"name": "Trimbach",
			"name2": "Gewurztraminer Vendange Tardive",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 2 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2014",
					"newValue": "2015"
				}
				]
			}
			],
			"uri": "/article/7572402"
		}, {
			"id": 7579301,
			"name": "Tommasi Poggio al Tufo",
			"name2": "Vermentino",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 2 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7579301"
		}, {
			"id": 7347901,
			"name": "Sällskapets",
			"name2": "Röda Bordeaux",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 2 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2014",
					"newValue": "2016"
				}, {
					"name": "Alcohol",
					"oldValue": "13.50%",
					"newValue": "13.00%"
				}
				]
			}
			],
			"uri": "/article/7347901"
		}, {
			"id": 7712601,
			"name": "Drappier",
			"name2": "Millésime Exception Brut",
			"category": "Mousserande vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 2 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2012",
					"newValue": "2013"
				}
				]
			}
			],
			"uri": "/article/7712601"
		}, {
			"id": 8215601,
			"name": "Trimbach",
			"name2": "Gewurztraminer",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 2 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2016"
				}, {
					"name": "Alcohol",
					"oldValue": "13.50%",
					"newValue": "14.00%"
				}
				]
			}
			],
			"uri": "/article/8215601"
		}, {
			"id": 7645201,
			"name": "Valentin Leflaive",
			"name2": "Extra Brut Blanc de Blancs",
			"category": "Mousserande vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 2 * 864e5),
				"changes": [{
					"name": "Producer",
					"oldValue": "Domaine Leflaive",
					"newValue": "Valentin Leflaive"
				}, {
					"name": "Vintage",
					"oldValue": "2018",
					"newValue": ""
				}
				]
			}
			],
			"uri": "/article/7645201"
		}, {
			"id": 7685001,
			"name": "Markowitsch",
			"name2": "Rubin Carnuntum Zweigelt",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 3 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2017"
				}
				]
			}
			],
			"uri": "/article/7685001"
		}, {
			"id": 7058401,
			"name": "Bosio",
			"name2": "Truffle Hunter Leda Nebbiolo d´Alba",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 3 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2014",
					"newValue": "2017"
				}
				]
			}
			],
			"uri": "/article/7058401"
		}, {
			"id": 7618902,
			"name": "Bricco Quaglia",
			"name2": "Moscato d ásti",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 3 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7618902"
		}, {
			"id": 7050201,
			"name": "Le Page",
			"name2": "Vignelaure Rouge",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 3 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2014",
					"newValue": "2016"
				}
				]
			}
			],
			"uri": "/article/7050201"
		}, {
			"id": 7632101,
			"name": "Le Page",
			"name2": "Vignelaure Blanc",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 3 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}
				]
			}
			],
			"uri": "/article/7632101"
		}, {
			"id": 7999301,
			"name": "Vignelaure",
			"name2": "Blanc",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 3 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}
				]
			}
			],
			"uri": "/article/7999301"
		}, {
			"id": 7837301,
			"name": "Weingut Julius",
			"name2": "Goldmuskateller",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 3 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}, {
					"name": "Alcohol",
					"oldValue": "11.50%",
					"newValue": "13.00%"
				}
				]
			}
			],
			"uri": "/article/7837301"
		}, {
			"id": 7528201,
			"name": "Reichsgraf von Kesselstatt",
			"name2": "Riesling Trocken",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 3 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7528201"
		}, {
			"id": 7590501,
			"name": "Musar Jeune",
			"name2": "",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 14 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": ""
				}
				]
			}, {
				"timestamp": new Date(Date.now() - 3 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "",
					"newValue": "2017"
				}, {
					"name": "Alcohol",
					"oldValue": "14.00%",
					"newValue": "13.50%"
				}
				]
			}
			],
			"uri": "/article/7590501"
		}, {
			"id": 7918601,
			"name": "Maximin Grünhauser",
			"name2": "Riesling Herrenberg Kabinett Grosse Lage",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 3 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}
				]
			}
			],
			"uri": "/article/7918601"
		}, {
			"id": 7374001,
			"name": "Maximin Grünhäuser Abtsberg",
			"name2": "Riesling Alte Reben Trocken",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 3 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2014",
					"newValue": "2016"
				}, {
					"name": "Alcohol",
					"oldValue": "11.50%",
					"newValue": "11.00%"
				}
				]
			}
			],
			"uri": "/article/7374001"
		}, {
			"id": 7490201,
			"name": "Les Dauphins",
			"name2": "Côtes du Rhône Organic Rosé",
			"category": "Rosévin",
			"changes": [{
				"timestamp": new Date(Date.now() - 3 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7490201"
		}, {
			"id": 7528001,
			"name": "Le Grand Ballon",
			"name2": "Sauvignon Blanc",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 3 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7528001"
		}, {
			"id": 7255801,
			"name": "Côtes Du Rhone",
			"name2": "Domaine Pierre Usséglio",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 11 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2017"
				}
				]
			}, {
				"timestamp": new Date(Date.now() - 3 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2016"
				}, {
					"name": "Alcohol",
					"oldValue": "14.50%",
					"newValue": "15.50%"
				}
				]
			}
			],
			"uri": "/article/7255801"
		}, {
			"id": 7374101,
			"name": "Jurtschitsch",
			"name2": "Zöbiger Heiligenstein Riesling",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 3 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2014",
					"newValue": "2016"
				}, {
					"name": "Alcohol",
					"oldValue": "13.00%",
					"newValue": "12.50%"
				}
				]
			}
			],
			"uri": "/article/7374101"
		}, {
			"id": 7306301,
			"name": "Jurtschitsch",
			"name2": "Ried Loiserberg Grüner Veltliner",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 3 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}, {
					"name": "Alcohol",
					"oldValue": "13.00%",
					"newValue": "12.50%"
				}
				]
			}
			],
			"uri": "/article/7306301"
		}, {
			"id": 7295001,
			"name": "Dolcetto d'Alba",
			"name2": "Massolino",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 3 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2017"
				}, {
					"name": "Alcohol",
					"oldValue": "14.00%",
					"newValue": "13.50%"
				}
				]
			}
			],
			"uri": "/article/7295001"
		}, {
			"id": 7901001,
			"name": "Breton",
			"name2": "Bourgueil Trinch",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 4 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}
				]
			}
			],
			"uri": "/article/7901001"
		}, {
			"id": 7093901,
			"name": "Perrin",
			"name2": "Gigondas La Gille",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 4 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2014",
					"newValue": "2016"
				}
				]
			}
			],
			"uri": "/article/7093901"
		}, {
			"id": 7410401,
			"name": "Fontanafredda",
			"name2": "Gavi",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 4 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}
				]
			}
			],
			"uri": "/article/7410401"
		}, {
			"id": 7459601,
			"name": "Torre Mora",
			"name2": "Scalunera Etna Bianco",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 4 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7459601"
		}, {
			"id": 7644001,
			"name": "Torre Mora",
			"name2": "Cauru Etna Rosso",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 4 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2014",
					"newValue": "2015"
				}
				]
			}
			],
			"uri": "/article/7644001"
		}, {
			"id": 7428401,
			"name": "Lone Birch",
			"name2": "Syrah",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 4 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2016"
				}
				]
			}
			],
			"uri": "/article/7428401"
		}, {
			"id": 7544101,
			"name": "Musella",
			"name2": "Amarone della Valpolicella Riserva",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 4 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2011",
					"newValue": "2012"
				}
				]
			}
			],
			"uri": "/article/7544101"
		}, {
			"id": 7157001,
			"name": "Selvarossa",
			"name2": "Salice Salentino Riserva",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 4 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2012",
					"newValue": "2015"
				}
				]
			}
			],
			"uri": "/article/7157001"
		}, {
			"id": 7580801,
			"name": "Decero",
			"name2": "Cabernet Sauvignon",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 4 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2013",
					"newValue": "2014"
				}
				]
			}
			],
			"uri": "/article/7580801"
		}, {
			"id": 7495701,
			"name": "Sasso al Poggio",
			"name2": "",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 4 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2012",
					"newValue": "2015"
				}
				]
			}
			],
			"uri": "/article/7495701"
		}, {
			"id": 7991001,
			"name": "Steinberger Rheingau",
			"name2": "Riesling Trocken",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 4 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}, {
					"name": "Alcohol",
					"oldValue": "12.00%",
					"newValue": "11.50%"
				}
				]
			}
			],
			"uri": "/article/7991001"
		}, {
			"id": 7997501,
			"name": "Au Bon Climat",
			"name2": "Santa Barbara Pinot Noir",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 4 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}
				]
			}
			],
			"uri": "/article/7997501"
		}, {
			"id": 7064501,
			"name": "Mega Zin",
			"name2": "Zinfandel",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 4 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7064501"
		}, {
			"id": 7167301,
			"name": "Mammoth",
			"name2": "Zinfandel",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 4 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2018"
				}, {
					"name": "Alcohol",
					"oldValue": "14.50%",
					"newValue": "14.00%"
				}
				]
			}
			],
			"uri": "/article/7167301"
		}, {
			"id": 7167501,
			"name": "Venezia Giulia",
			"name2": "Pinot Grigio",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 7 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7167501"
		}, {
			"id": 7227501,
			"name": "Barolo Riserva Bricco delle Viole",
			"name2": "Viberti Giovanni",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 7 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2010",
					"newValue": "2011"
				}
				]
			}
			],
			"uri": "/article/7227501"
		}, {
			"id": 7626601,
			"name": "Chablis Premier Cru",
			"name2": "La Forêt",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 7 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}
				]
			}
			],
			"uri": "/article/7626601"
		}, {
			"id": 7908901,
			"name": "Cantina del Pino",
			"name2": "Barbaresco Albesani",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 7 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2014",
					"newValue": "2015"
				}
				]
			}
			],
			"uri": "/article/7908901"
		}, {
			"id": 7820201,
			"name": "Valcanzjria",
			"name2": "",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 7 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}, {
					"name": "Alcohol",
					"oldValue": "13.00%",
					"newValue": "12.50%"
				}
				]
			}
			],
			"uri": "/article/7820201"
		}, {
			"id": 7240201,
			"name": "Rivetto",
			"name2": "Barolo Serralunga",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 7 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2014",
					"newValue": "2015"
				}
				]
			}
			],
			"uri": "/article/7240201"
		}, {
			"id": 7476201,
			"name": "Nautilus",
			"name2": "Pinot Noir",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 7 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2016"
				}
				]
			}
			],
			"uri": "/article/7476201"
		}, {
			"id": 7056901,
			"name": "Viré Clessé",
			"name2": "Cuvée Spéciale",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 7 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2017"
				}
				]
			}
			],
			"uri": "/article/7056901"
		}, {
			"id": 7214901,
			"name": "Cornas",
			"name2": "Les Grandes Terrasses",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 7 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2013",
					"newValue": "2014"
				}
				]
			}
			],
			"uri": "/article/7214901"
		}, {
			"id": 165103,
			"name": "Chimay blå",
			"name2": "",
			"category": "Öl",
			"changes": [{
				"timestamp": new Date(Date.now() - 7 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2019"
				}
				]
			}
			],
			"uri": "/article/165103"
		}, {
			"id": 7137701,
			"name": "Musita Regieterre",
			"name2": "Catarratto",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 7 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7137701"
		}, {
			"id": 7152801,
			"name": "Musita",
			"name2": "Passocalcara",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 7 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2016"
				}
				]
			}
			],
			"uri": "/article/7152801"
		}, {
			"id": 7179301,
			"name": "Musita",
			"name2": "Passocalcara",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 7 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2013",
					"newValue": "2014"
				}, {
					"name": "Alcohol",
					"oldValue": "14.00%",
					"newValue": "15.00%"
				}
				]
			}
			],
			"uri": "/article/7179301"
		}, {
			"id": 7900801,
			"name": "Röschitz",
			"name2": "Grüner Veltliner",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 8 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7900801"
		}, {
			"id": 7230701,
			"name": "Frog's Leap",
			"name2": "Chardonnay",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 8 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}, {
					"name": "Alcohol",
					"oldValue": "13.50%",
					"newValue": "13.10%"
				}
				]
			}
			],
			"uri": "/article/7230701"
		}, {
			"id": 7622301,
			"name": "I Colombi",
			"name2": "Rosso",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 8 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7622301"
		}, {
			"id": 234101,
			"name": "Il Grande Vivati",
			"name2": "Primitivo",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 8 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/234101"
		}, {
			"id": 7981101,
			"name": "La Spinetta",
			"name2": "Barbaresco Starderi",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 8 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2006",
					"newValue": "2008"
				}
				]
			}
			],
			"uri": "/article/7981101"
		}, {
			"id": 7990401,
			"name": "La Spinetta",
			"name2": "Barbaresco Valeirano",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 8 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2006",
					"newValue": "2008"
				}
				]
			}
			],
			"uri": "/article/7990401"
		}, {
			"id": 7332701,
			"name": "Baron de Ley",
			"name2": "Finca Monasterio",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 8 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2016"
				}
				]
			}
			],
			"uri": "/article/7332701"
		}, {
			"id": 786706,
			"name": "Palmer & Co",
			"name2": "Vintage Brut",
			"category": "Mousserande vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 8 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2012",
					"newValue": "2008"
				}
				]
			}
			],
			"uri": "/article/786706"
		}, {
			"id": 7371301,
			"name": "Mount Eden",
			"name2": "Reserve Chardonnay",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 8 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2013",
					"newValue": "2015"
				}
				]
			}
			],
			"uri": "/article/7371301"
		}, {
			"id": 7343701,
			"name": "Rosso di Montalcino",
			"name2": "Caprili",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 8 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2017"
				}, {
					"name": "Alcohol",
					"oldValue": "14.00%",
					"newValue": "14.50%"
				}
				]
			}
			],
			"uri": "/article/7343701"
		}, {
			"id": 7699801,
			"name": "San Román",
			"name2": "",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 8 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2014",
					"newValue": "2015"
				}
				]
			}
			],
			"uri": "/article/7699801"
		}, {
			"id": 539501,
			"name": "Gevrey-Chambertin La Justice",
			"name2": "Domaine René Bouvier",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 8 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": ""
				}
				]
			}
			],
			"uri": "/article/539501"
		}, {
			"id": 7879601,
			"name": "Terroir",
			"name2": "Arbossar",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 8 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2015",
					"newValue": "2016"
				}, {
					"name": "Alcohol",
					"oldValue": "13.50%",
					"newValue": "14.00%"
				}
				]
			}
			],
			"uri": "/article/7879601"
		}, {
			"id": 7385301,
			"name": "Julian Haart",
			"name2": "Wintricher Ohligsberg Spätlese Riesling",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 8 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2014",
					"newValue": "2017"
				}, {
					"name": "Alcohol",
					"oldValue": "8.00%",
					"newValue": "12.50%"
				}
				]
			}
			],
			"uri": "/article/7385301"
		}, {
			"id": 100201,
			"name": "Turckheim Pinot Blanc Organic",
			"name2": "",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 9 * 864e5),
				"changes": [{
					"name": "Vintage",
					"oldValue": "2017",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/100201"
		}
		]
	},
	"price": {
		"timestamp": new Date(),
		"data": [{
			"id": 7164301,
			"name": "APPELLO Aperitif",
			"name2": "by Carolina Gynning",
			"category": "Aperitif och dessert",
			"changes": [{
				"timestamp": new Date(Date.now() - 4 * 864e5),
				"changes": [{
					"name": "Price",
					"oldValue": 101.00,
					"newValue": 99.00
				}, {
					"name": "PricePerLitre",
					"oldValue": 134.67,
					"newValue": 132.00
				}
				]
			}
			],
			"uri": "/article/7164301"
		}, {
			"id": 1070702,
			"name": "Tegnér & Son",
			"name2": "Traditionell Julsnaps",
			"category": "Akvavit och Kryddat brännvin",
			"changes": [{
				"timestamp": new Date(Date.now() - 10 * 864e5),
				"changes": [{
					"name": "Price",
					"oldValue": 149.00,
					"newValue": 169.00
				}, {
					"name": "PricePerLitre",
					"oldValue": 425.71,
					"newValue": 482.86
				}
				]
			}
			],
			"uri": "/article/1070702"
		}, {
			"id": 3332303,
			"name": "Burgsviks",
			"name2": "Winterale",
			"category": "Öl",
			"changes": [{
				"timestamp": new Date(Date.now() - 10 * 864e5),
				"changes": [{
					"name": "Price",
					"oldValue": 22.70,
					"newValue": 23.70
				}, {
					"name": "PricePerLitre",
					"oldValue": 68.79,
					"newValue": 71.82
				}
				]
			}
			],
			"uri": "/article/3332303"
		}, {
			"id": 3217003,
			"name": "Ocean",
			"name2": "Midvinter",
			"category": "Öl",
			"changes": [{
				"timestamp": new Date(Date.now() - 10 * 864e5),
				"changes": [{
					"name": "Price",
					"oldValue": 25.00,
					"newValue": 26.70
				}, {
					"name": "PricePerLitre",
					"oldValue": 75.76,
					"newValue": 80.91
				}
				]
			}
			],
			"uri": "/article/3217003"
		}, {
			"id": 3219802,
			"name": "Roslags Äppelglögg",
			"name2": "Stark",
			"category": "Glögg och Glühwein",
			"changes": [{
				"timestamp": new Date(Date.now() - 10 * 864e5),
				"changes": [{
					"name": "Price",
					"oldValue": 157.00,
					"newValue": 159.00
				}, {
					"name": "PricePerLitre",
					"oldValue": 314.00,
					"newValue": 318.00
				}
				]
			}
			],
			"uri": "/article/3219802"
		}, {
			"id": 7500901,
			"name": "Drappier",
			"name2": "Brut Nature Zero Dosage",
			"category": "Mousserande vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 11 * 864e5),
				"changes": [{
					"name": "Price",
					"oldValue": 384.00,
					"newValue": 499.00
				}, {
					"name": "PricePerLitre",
					"oldValue": 512.00,
					"newValue": 665.33
				}
				]
			}
			],
			"uri": "/article/7500901"
		}, {
			"id": 3216203,
			"name": "Remmarlöv",
			"name2": "The Red Slope Imperial Red Ale",
			"category": "Öl",
			"changes": [{
				"timestamp": new Date(Date.now() - 16 * 864e5),
				"changes": [{
					"name": "Price",
					"oldValue": 27.90,
					"newValue": 29.90
				}, {
					"name": "PricePerLitre",
					"oldValue": 84.55,
					"newValue": 90.61
				}
				]
			}
			],
			"uri": "/article/3216203"
		}
		]
	},
	"type": {
		"timestamp": new Date(),
		"data": [{
			"id": 7473401,
			"name": "Amarone della Valpolicella",
			"name2": "Mezzo Monte",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(),
				"changes": [{
					"name": "Type",
					"oldValue": "",
					"newValue": "Kryddigt & Mustigt"
				}
				]
			}
			],
			"uri": "/article/7473401"
		}, {
			"id": 7274301,
			"name": "Grand Minéral",
			"name2": "Chardonnay",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(),
				"changes": [{
					"name": "Type",
					"oldValue": "",
					"newValue": "Friskt & Fruktigt"
				}
				]
			}
			],
			"uri": "/article/7274301"
		}, {
			"id": 7352201,
			"name": "Weinmann",
			"name2": "Grüner Veltliner Klassik",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(),
				"changes": [{
					"name": "Type",
					"oldValue": "",
					"newValue": "Friskt & Fruktigt"
				}
				]
			}
			],
			"uri": "/article/7352201"
		}, {
			"id": 7697101,
			"name": "Casteloro",
			"name2": "Rosso Veneto",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(),
				"changes": [{
					"name": "Type",
					"oldValue": "",
					"newValue": "Fruktigt & Smakrikt"
				}
				]
			}
			],
			"uri": "/article/7697101"
		}, {
			"id": 7833101,
			"name": "Kloster Eberbach",
			"name2": "Riesling Trocken",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 1 * 864e5),
				"changes": [{
					"name": "Type",
					"oldValue": "Druvigt & Blommigt",
					"newValue": ""
				}, {
					"name": "Vintage",
					"oldValue": "2016",
					"newValue": "2018"
				}
				]
			}
			],
			"uri": "/article/7833101"
		}, {
			"id": 7170901,
			"name": "Giacosa Fratelli",
			"name2": "Dolcetto d'Alba Sarrocco",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 4 * 864e5),
				"changes": [{
					"name": "Type",
					"oldValue": "",
					"newValue": "Fruktigt & Smakrikt"
				}
				]
			}
			],
			"uri": "/article/7170901"
		}, {
			"id": 7099201,
			"name": "Ruminat Primitivo",
			"name2": "Lunaria Terre di Chieti",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 4 * 864e5),
				"changes": [{
					"name": "Type",
					"oldValue": "",
					"newValue": "Fruktigt & Smakrikt"
				}
				]
			}
			],
			"uri": "/article/7099201"
		}, {
			"id": 7420101,
			"name": "Borgogno",
			"name2": "Barbera d'Alba Superiore",
			"category": "Rött vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 4 * 864e5),
				"changes": [{
					"name": "Type",
					"oldValue": "Mjukt & Bärigt",
					"newValue": "Fruktigt & Smakrikt"
				}
				]
			}
			],
			"uri": "/article/7420101"
		}, {
			"id": 8656802,
			"name": "O.P. Anderson",
			"name2": "Hernö Juniper Cask",
			"category": "Akvavit och Kryddat brännvin",
			"changes": [{
				"timestamp": new Date(Date.now() - 10 * 864e5),
				"changes": [{
					"name": "Type",
					"oldValue": "Gin",
					"newValue": "Akvavit"
				}, {
					"name": "Category",
					"oldValue": "Gin och Genever",
					"newValue": "Akvavit och Kryddat brännvin"
				}
				]
			}
			],
			"uri": "/article/8656802"
		}, {
			"id": 9629401,
			"name": "Pichler Krutzler",
			"name2": "Grüner Veltliner Supperin",
			"category": "Vitt vin",
			"changes": [{
				"timestamp": new Date(Date.now() - 17 * 864e5),
				"changes": [{
					"name": "Type",
					"oldValue": "",
					"newValue": "Friskt & Fruktigt"
				}
				]
			}
			],
			"uri": "/article/9629401"
		}
		]
	}
}