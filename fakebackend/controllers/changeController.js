
module.exports = function (app) {
    app.get("/change/recent", function (req, res) {
        res.send(recentChanges);
    });
};

const recentChanges = {
	"timestamp" : new Date(),
	"data" : [{
			"id" : 7167501,
			"name" : "Venezia Giulia",
			"name2" : "Pinot Grigio",
			"category" : "Vitt vin",
			"changes" : {
				"timestamp" : new Date(),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2017",
						"newValue" : "2018"
					}
				]
			},
			"uri" : "/article/7167501"
		}, {
			"id" : 7227501,
			"name" : "Barolo Riserva Bricco delle Viole",
			"name2" : "Viberti Giovanni",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2010",
						"newValue" : "2011"
					}
				]
			},
			"uri" : "/article/7227501"
		}, {
			"id" : 7543101,
			"name" : "Big Fine Girl",
			"name2" : "Riesling",
			"category" : "Vitt vin",
			"changes" : {
				"timestamp" : new Date(),
				"changes" : [{
						"name" : "Producer",
						"oldValue" : "The Spurs Wine Company",
						"newValue" : "Jeanneret Wines"
					}
				]
			},
			"uri" : "/article/7543101"
		}, {
			"id" : 7626601,
			"name" : "Chablis Premier Cru",
			"name2" : "La Forêt",
			"category" : "Vitt vin",
			"changes" : {
				"timestamp" : new Date(),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2016",
						"newValue" : "2017"
					}
				]
			},
			"uri" : "/article/7626601"
		}, {
			"id" : 7908901,
			"name" : "Cantina del Pino",
			"name2" : "Barbaresco Albesani",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2014",
						"newValue" : "2015"
					}
				]
			},
			"uri" : "/article/7908901"
		}, {
			"id" : 7820201,
			"name" : "Valcanzjria",
			"name2" : "",
			"category" : "Vitt vin",
			"changes" : {
				"timestamp" : new Date(),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2017",
						"newValue" : "2018"
					}, {
						"name" : "Alcohol",
						"oldValue" : "13.00%",
						"newValue" : "12.50%"
					}
				]
			},
			"uri" : "/article/7820201"
		}, {
			"id" : 7240201,
			"name" : "Rivetto",
			"name2" : "Barolo Serralunga",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2014",
						"newValue" : "2015"
					}
				]
			},
			"uri" : "/article/7240201"
		}, {
			"id" : 7476201,
			"name" : "Nautilus",
			"name2" : "Pinot Noir",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2015",
						"newValue" : "2016"
					}
				]
			},
			"uri" : "/article/7476201"
		}, {
			"id" : 44501,
			"name" : "Aberlour",
			"name2" : "a'bunadh",
			"category" : "Whisky",
			"changes" : {
				"timestamp" : new Date(),
				"changes" : [{
						"name" : "Alcohol",
						"oldValue" : "61.00%",
						"newValue" : "59.50%"
					}
				]
			},
			"uri" : "/article/44501"
		}, {
			"id" : 7056901,
			"name" : "Viré Clessé",
			"name2" : "Cuvée Spéciale",
			"category" : "Vitt vin",
			"changes" : {
				"timestamp" : new Date(),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2015",
						"newValue" : "2017"
					}
				]
			},
			"uri" : "/article/7056901"
		}, {
			"id" : 7214901,
			"name" : "Cornas",
			"name2" : "Les Grandes Terrasses",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2013",
						"newValue" : "2014"
					}
				]
			},
			"uri" : "/article/7214901"
		}, {
			"id" : 165103,
			"name" : "Chimay blå",
			"name2" : "",
			"category" : "Öl",
			"changes" : {
				"timestamp" : new Date(),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2015",
						"newValue" : "2019"
					}
				]
			},
			"uri" : "/article/165103"
		}, {
			"id" : 7137701,
			"name" : "Musita Regieterre",
			"name2" : "Catarratto",
			"category" : "Vitt vin",
			"changes" : {
				"timestamp" : new Date(),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2017",
						"newValue" : "2018"
					}
				]
			},
			"uri" : "/article/7137701"
		}, {
			"id" : 7152801,
			"name" : "Musita",
			"name2" : "Passocalcara",
			"category" : "Vitt vin",
			"changes" : {
				"timestamp" : new Date(),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2015",
						"newValue" : "2016"
					}
				]
			},
			"uri" : "/article/7152801"
		}, {
			"id" : 7179301,
			"name" : "Musita",
			"name2" : "Passocalcara",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2013",
						"newValue" : "2014"
					}, {
						"name" : "Alcohol",
						"oldValue" : "14.00%",
						"newValue" : "15.00%"
					}
				]
			},
			"uri" : "/article/7179301"
		}, {
			"id" : 7900801,
			"name" : "Röschitz",
			"name2" : "Grüner Veltliner",
			"category" : "Vitt vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 1 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "",
						"newValue" : "2018"
					}
				]
			},
			"uri" : "/article/7900801"
		}, {
			"id" : 7230701,
			"name" : "Frog's Leap",
			"name2" : "Chardonnay",
			"category" : "Vitt vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 1 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2016",
						"newValue" : "2017"
					}, {
						"name" : "Alcohol",
						"oldValue" : "13.50%",
						"newValue" : "13.10%"
					}
				]
			},
			"uri" : "/article/7230701"
		}, {
			"id" : 7622301,
			"name" : "I Colombi",
			"name2" : "Rosso",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 1 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2017",
						"newValue" : "2018"
					}
				]
			},
			"uri" : "/article/7622301"
		}, {
			"id" : 234101,
			"name" : "Il Grande Vivati",
			"name2" : "Primitivo",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 1 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2015",
						"newValue" : "2018"
					}
				]
			},
			"uri" : "/article/234101"
		}, {
			"id" : 7981101,
			"name" : "La Spinetta",
			"name2" : "Barbaresco Starderi",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 1 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2006",
						"newValue" : "2008"
					}
				]
			},
			"uri" : "/article/7981101"
		}, {
			"id" : 7990401,
			"name" : "La Spinetta",
			"name2" : "Barbaresco Valeirano",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 1 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2006",
						"newValue" : "2008"
					}
				]
			},
			"uri" : "/article/7990401"
		}, {
			"id" : 7332701,
			"name" : "Baron de Ley",
			"name2" : "Finca Monasterio",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 1 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2015",
						"newValue" : "2016"
					}
				]
			},
			"uri" : "/article/7332701"
		}, {
			"id" : 786706,
			"name" : "Palmer & Co",
			"name2" : "Vintage Brut",
			"category" : "Mousserande vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 1 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2012",
						"newValue" : "2008"
					}
				]
			},
			"uri" : "/article/786706"
		}, {
			"id" : 7371301,
			"name" : "Mount Eden",
			"name2" : "Reserve Chardonnay",
			"category" : "Vitt vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 1 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2013",
						"newValue" : "2015"
					}
				]
			},
			"uri" : "/article/7371301"
		}, {
			"id" : 8621004,
			"name" : "Angostura Orange",
			"name2" : "Bitters",
			"category" : "Bitter",
			"changes" : {
				"timestamp" : new Date(Date.now() - 1 * 864e5),
				"changes" : [{
						"name" : "Packaging",
						"oldValue" : "Minibutelj",
						"newValue" : "1 flaska à 100 ml"
					}
				]
			},
			"uri" : "/article/8621004"
		}, {
			"id" : 7343701,
			"name" : "Rosso di Montalcino",
			"name2" : "Caprili",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 1 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2016",
						"newValue" : "2017"
					}, {
						"name" : "Alcohol",
						"oldValue" : "14.00%",
						"newValue" : "14.50%"
					}
				]
			},
			"uri" : "/article/7343701"
		}, {
			"id" : 8636504,
			"name" : "Dr Adam Elmegirab's",
			"name2" : "Aphrodite Bitters",
			"category" : "Bitter",
			"changes" : {
				"timestamp" : new Date(Date.now() - 1 * 864e5),
				"changes" : [{
						"name" : "Packaging",
						"oldValue" : "Minibutelj",
						"newValue" : "1 flaska à 100 ml"
					}
				]
			},
			"uri" : "/article/8636504"
		}, {
			"id" : 8639804,
			"name" : "Dr Adam Elmegirab's",
			"name2" : "Boker's Bitters",
			"category" : "Bitter",
			"changes" : {
				"timestamp" : new Date(Date.now() - 1 * 864e5),
				"changes" : [{
						"name" : "Packaging",
						"oldValue" : "Minibutelj",
						"newValue" : "1 flaska à 100 ml"
					}
				]
			},
			"uri" : "/article/8639804"
		}, {
			"id" : 8608804,
			"name" : "Dr Adam Elmegirab's",
			"name2" : "Dandelion & Burdock Bitters",
			"category" : "Bitter",
			"changes" : {
				"timestamp" : new Date(Date.now() - 1 * 864e5),
				"changes" : [{
						"name" : "Packaging",
						"oldValue" : "Minibutelj",
						"newValue" : "1 flaska à 100 ml"
					}
				]
			},
			"uri" : "/article/8608804"
		}, {
			"id" : 8604204,
			"name" : "Dr Adam Elmegirab's",
			"name2" : "Spanish Bitters",
			"category" : "Bitter",
			"changes" : {
				"timestamp" : new Date(Date.now() - 1 * 864e5),
				"changes" : [{
						"name" : "Packaging",
						"oldValue" : "Minibutelj",
						"newValue" : "1 flaska à 100 ml"
					}
				]
			},
			"uri" : "/article/8604204"
		}, {
			"id" : 7699801,
			"name" : "San Román",
			"name2" : "",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 1 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2014",
						"newValue" : "2015"
					}
				]
			},
			"uri" : "/article/7699801"
		}, {
			"id" : 539501,
			"name" : "Gevrey-Chambertin La Justice",
			"name2" : "Domaine René Bouvier",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 1 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2017",
						"newValue" : ""
					}
				]
			},
			"uri" : "/article/539501"
		}, {
			"id" : 8655504,
			"name" : "The Famous Grouse",
			"name2" : "",
			"category" : "Whisky",
			"changes" : {
				"timestamp" : new Date(Date.now() - 1 * 864e5),
				"changes" : [{
						"name" : "Packaging",
						"oldValue" : "Minibutelj",
						"newValue" : "1 flaska  à 200ml"
					}
				]
			},
			"uri" : "/article/8655504"
		}, {
			"id" : 8507104,
			"name" : "Teapot Bitters",
			"name2" : "",
			"category" : "Bitter",
			"changes" : {
				"timestamp" : new Date(Date.now() - 1 * 864e5),
				"changes" : [{
						"name" : "Packaging",
						"oldValue" : "Minibutelj",
						"newValue" : "1 flaska à 100 ml"
					}
				]
			},
			"uri" : "/article/8507104"
		}, {
			"id" : 8782404,
			"name" : "The Dead Rabbit",
			"name2" : "Orinoco",
			"category" : "Bitter",
			"changes" : {
				"timestamp" : new Date(Date.now() - 1 * 864e5),
				"changes" : [{
						"name" : "Packaging",
						"oldValue" : "Minibutelj",
						"newValue" : "1 flaska à 100 ml"
					}
				]
			},
			"uri" : "/article/8782404"
		}, {
			"id" : 7879601,
			"name" : "Terroir",
			"name2" : "Arbossar",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 1 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2015",
						"newValue" : "2016"
					}, {
						"name" : "Alcohol",
						"oldValue" : "13.50%",
						"newValue" : "14.00%"
					}
				]
			},
			"uri" : "/article/7879601"
		}, {
			"id" : 7385301,
			"name" : "Julian Haart",
			"name2" : "Wintricher Ohligsberg Spätlese Riesling",
			"category" : "Vitt vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 1 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2014",
						"newValue" : "2017"
					}, {
						"name" : "Alcohol",
						"oldValue" : "8.00%",
						"newValue" : "12.50%"
					}
				]
			},
			"uri" : "/article/7385301"
		}, {
			"id" : 7056101,
			"name" : "Ti Amo",
			"name2" : "Zinfandel di Puglia Organic",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 2 * 864e5),
				"changes" : [{
						"name" : "Producer",
						"oldValue" : "Etike International Srl",
						"newValue" : "Cinque Segni"
					}
				]
			},
			"uri" : "/article/7056101"
		}, {
			"id" : 8204601,
			"name" : "Alto del Carmen",
			"name2" : "Alto Reservado",
			"category" : "Armagnac och Brandy",
			"changes" : {
				"timestamp" : new Date(Date.now() - 2 * 864e5),
				"changes" : [{
						"name" : "Producer",
						"oldValue" : "Cooperativa Capel",
						"newValue" : "Pisco Capel"
					}
				]
			},
			"uri" : "/article/8204601"
		}, {
			"id" : 100201,
			"name" : "Turckheim Pinot Blanc Organic",
			"name2" : "",
			"category" : "Vitt vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 2 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2017",
						"newValue" : "2018"
					}
				]
			},
			"uri" : "/article/100201"
		}, {
			"id" : 7265901,
			"name" : "Guy Michel",
			"name2" : "Millésime Brut",
			"category" : "Mousserande vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 2 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2002",
						"newValue" : "2006"
					}, {
						"name" : "Alcohol",
						"oldValue" : "12.00%",
						"newValue" : "12.50%"
					}
				]
			},
			"uri" : "/article/7265901"
		}, {
			"id" : 2235001,
			"name" : "Tommasi",
			"name2" : "Amarone della Valpolicella Classico",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 2 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2013",
						"newValue" : "2015"
					}
				]
			},
			"uri" : "/article/2235001"
		}, {
			"id" : 7007001,
			"name" : "Baron de Ley",
			"name2" : "Siete Viñas Reserva",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 2 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2010",
						"newValue" : "2012"
					}
				]
			},
			"uri" : "/article/7007001"
		}, {
			"id" : 244801,
			"name" : "Mastri Vernacoli",
			"name2" : "Lagrein",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 2 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2017",
						"newValue" : "2018"
					}
				]
			},
			"uri" : "/article/244801"
		}, {
			"id" : 202601,
			"name" : "Meerlust",
			"name2" : "Rubicon",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 2 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2015",
						"newValue" : "2016"
					}
				]
			},
			"uri" : "/article/202601"
		}, {
			"id" : 2235002,
			"name" : "Tommasi",
			"name2" : "Amarone della Valpolicella Classico",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 2 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2013",
						"newValue" : "2015"
					}
				]
			},
			"uri" : "/article/2235002"
		}, {
			"id" : 1250706,
			"name" : "Vila Santa",
			"name2" : "Reserva",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 2 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2015",
						"newValue" : "2016"
					}
				]
			},
			"uri" : "/article/1250706"
		}, {
			"id" : 2228301,
			"name" : "Cline",
			"name2" : "Old Vine Zinfandel",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 2 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2016",
						"newValue" : "2017"
					}
				]
			},
			"uri" : "/article/2228301"
		}, {
			"id" : 2307201,
			"name" : "Castelforte",
			"name2" : "Corvina Veronese",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 2 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2015",
						"newValue" : "2016"
					}
				]
			},
			"uri" : "/article/2307201"
		}, {
			"id" : 232404,
			"name" : "Sonovino",
			"name2" : "Zinfandel",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 2 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2014",
						"newValue" : "2018"
					}
				]
			},
			"uri" : "/article/232404"
		}, {
			"id" : 224101,
			"name" : "Il Cuore Per Martina",
			"name2" : "Appassimento",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 2 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2016",
						"newValue" : "2018"
					}
				]
			},
			"uri" : "/article/224101"
		}, {
			"id" : 2235006,
			"name" : "Tommasi",
			"name2" : "Amarone della Valpolicella Classico",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 2 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2012",
						"newValue" : "2015"
					}
				]
			},
			"uri" : "/article/2235006"
		}, {
			"id" : 7677701,
			"name" : "Ti Amo",
			"name2" : "Primitivo di Puglia",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 2 * 864e5),
				"changes" : [{
						"name" : "Producer",
						"oldValue" : "Etike International Srl",
						"newValue" : "Cinque Segni"
					}
				]
			},
			"uri" : "/article/7677701"
		}, {
			"id" : 2201301,
			"name" : "Barbaresco",
			"name2" : "Prunotto",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 2 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2015",
						"newValue" : "2016"
					}
				]
			},
			"uri" : "/article/2201301"
		}, {
			"id" : 7734201,
			"name" : "Ti Amo",
			"name2" : "Spumante Brut",
			"category" : "Mousserande vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 2 * 864e5),
				"changes" : [{
						"name" : "Producer",
						"oldValue" : "Etike International Srl",
						"newValue" : "Cinque Segni"
					}
				]
			},
			"uri" : "/article/7734201"
		}, {
			"id" : 7524801,
			"name" : "Guldkula White",
			"name2" : "Grand Cru Blanc de Blancs",
			"category" : "Mousserande vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 3 * 864e5),
				"changes" : [{
						"name" : "Importer",
						"oldValue" : "Domaine Wines Sweden AB",
						"newValue" : "Sundance Wines AB"
					}
				]
			},
			"uri" : "/article/7524801"
		}, {
			"id" : 7595001,
			"name" : "Guldkula Black",
			"name2" : "Grand Cru Blanc de Noir",
			"category" : "Mousserande vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 3 * 864e5),
				"changes" : [{
						"name" : "Importer",
						"oldValue" : "Domaine Wines Sweden AB",
						"newValue" : "Sundance Wines AB"
					}
				]
			},
			"uri" : "/article/7595001"
		}, {
			"id" : 7509701,
			"name" : "Guldkula Pink",
			"name2" : "Grand Cru Rosé",
			"category" : "Mousserande vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 3 * 864e5),
				"changes" : [{
						"name" : "Importer",
						"oldValue" : "Domaine Wines Sweden AB",
						"newValue" : "Sundance Wines AB"
					}
				]
			},
			"uri" : "/article/7509701"
		}, {
			"id" : 7761406,
			"name" : "Guldkula",
			"name2" : "Diamond Grand Cru Vintage",
			"category" : "Mousserande vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 3 * 864e5),
				"changes" : [{
						"name" : "Importer",
						"oldValue" : "Domaine Wines Sweden AB",
						"newValue" : "Sundance Wines AB"
					}
				]
			},
			"uri" : "/article/7761406"
		}, {
			"id" : 236802,
			"name" : "Langhe Nebbiolo",
			"name2" : "Paolo Scavino",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 3 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2016",
						"newValue" : "2017"
					}
				]
			},
			"uri" : "/article/236802"
		}, {
			"id" : 1070702,
			"name" : "Tegnér & Son",
			"name2" : "Traditionell Julsnaps",
			"category" : "Akvavit och Kryddat brännvin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 3 * 864e5),
				"changes" : [{
						"name" : "Price",
						"oldValue" : 149.00,
						"newValue" : 169.00
					}, {
						"name" : "PricePerLitre",
						"oldValue" : 425.71,
						"newValue" : 482.86
					}
				]
			},
			"uri" : "/article/1070702"
		}, {
			"id" : 7307701,
			"name" : "Guldkula",
			"name2" : "Premier Cru",
			"category" : "Mousserande vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 3 * 864e5),
				"changes" : [{
						"name" : "Importer",
						"oldValue" : "Domaine Wines Sweden AB",
						"newValue" : "Sundance Wines AB"
					}
				]
			},
			"uri" : "/article/7307701"
		}, {
			"id" : 3332303,
			"name" : "Burgsviks",
			"name2" : "Winterale",
			"category" : "Öl",
			"changes" : {
				"timestamp" : new Date(Date.now() - 3 * 864e5),
				"changes" : [{
						"name" : "Price",
						"oldValue" : 22.70,
						"newValue" : 23.70
					}, {
						"name" : "PricePerLitre",
						"oldValue" : 68.79,
						"newValue" : 71.82
					}
				]
			},
			"uri" : "/article/3332303"
		}, {
			"id" : 7513001,
			"name" : "Pizza Wine",
			"name2" : "",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 3 * 864e5),
				"changes" : [{
						"name" : "Producer",
						"oldValue" : "Company & Co. Advertising AB",
						"newValue" : "Grapest Wines STHLM AB"
					}
				]
			},
			"uri" : "/article/7513001"
		}, {
			"id" : 9577001,
			"name" : "Trediberri",
			"name2" : "Langhe Rosato",
			"category" : "Rosévin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 3 * 864e5),
				"changes" : [{
						"name" : "Producer",
						"oldValue" : "Societá Agricola Trediberri di Nicola Oberto & C. S.S.",
						"newValue" : "Trediberri"
					}
				]
			},
			"uri" : "/article/9577001"
		}, {
			"id" : 8656802,
			"name" : "O.P. Anderson",
			"name2" : "Hernö Juniper Cask",
			"category" : "Akvavit och Kryddat brännvin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 3 * 864e5),
				"changes" : [{
						"name" : "Type",
						"oldValue" : "Gin",
						"newValue" : "Akvavit"
					}, {
						"name" : "Category",
						"oldValue" : "Gin och Genever",
						"newValue" : "Akvavit och Kryddat brännvin"
					}
				]
			},
			"uri" : "/article/8656802"
		}, {
			"id" : 3217003,
			"name" : "Ocean",
			"name2" : "Midvinter",
			"category" : "Öl",
			"changes" : {
				"timestamp" : new Date(Date.now() - 3 * 864e5),
				"changes" : [{
						"name" : "Price",
						"oldValue" : 25.00,
						"newValue" : 26.70
					}, {
						"name" : "PricePerLitre",
						"oldValue" : 75.76,
						"newValue" : 80.91
					}
				]
			},
			"uri" : "/article/3217003"
		}, {
			"id" : 3219802,
			"name" : "Roslags Äppelglögg",
			"name2" : "Stark",
			"category" : "Glögg och Glühwein",
			"changes" : {
				"timestamp" : new Date(Date.now() - 3 * 864e5),
				"changes" : [{
						"name" : "Price",
						"oldValue" : 157.00,
						"newValue" : 159.00
					}, {
						"name" : "PricePerLitre",
						"oldValue" : 314.00,
						"newValue" : 318.00
					}
				]
			},
			"uri" : "/article/3219802"
		}, {
			"id" : 712601,
			"name" : "Bianchi Montepulciano d'Abruzzo",
			"name2" : "Umani Ronchi",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 3 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2017",
						"newValue" : "2018"
					}
				]
			},
			"uri" : "/article/712601"
		}, {
			"id" : 233701,
			"name" : "Montepulciano d'Abruzzo",
			"name2" : "Umani Ronchi",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 3 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2017",
						"newValue" : "2018"
					}
				]
			},
			"uri" : "/article/233701"
		}, {
			"id" : 602401,
			"name" : "Alto Pina",
			"name2" : "Reserva",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 3 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2016",
						"newValue" : "2017"
					}
				]
			},
			"uri" : "/article/602401"
		}, {
			"id" : 500601,
			"name" : "Dimension",
			"name2" : "Chardonnay",
			"category" : "Vitt vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 4 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2018",
						"newValue" : "2019"
					}
				]
			},
			"uri" : "/article/500601"
		}, {
			"id" : 7163901,
			"name" : "Cristom Eileen Vineyard",
			"name2" : "Pinot Noir",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 4 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2014",
						"newValue" : "2016"
					}, {
						"name" : "Alcohol",
						"oldValue" : "13.00%",
						"newValue" : "13.50%"
					}
				]
			},
			"uri" : "/article/7163901"
		}, {
			"id" : 7872401,
			"name" : "Dr Loosen Ürziger Würzgarten",
			"name2" : "Grosses Gewächs Riesling",
			"category" : "Vitt vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 4 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2011",
						"newValue" : "2014"
					}
				]
			},
			"uri" : "/article/7872401"
		}, {
			"id" : 7098701,
			"name" : "Ribas",
			"name2" : "Negre",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 4 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2016",
						"newValue" : "2017"
					}
				]
			},
			"uri" : "/article/7098701"
		}, {
			"id" : 7381801,
			"name" : "Sotil",
			"name2" : "Negre Ecologic",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 4 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2015",
						"newValue" : "2016"
					}
				]
			},
			"uri" : "/article/7381801"
		}, {
			"id" : 7814401,
			"name" : "Chablis Premier Cru Les Vaucopins",
			"name2" : "Albert Bichot",
			"category" : "Vitt vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 4 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2016",
						"newValue" : "2017"
					}
				]
			},
			"uri" : "/article/7814401"
		}, {
			"id" : 7139601,
			"name" : "Chablis Premier Cru Fourchaume",
			"name2" : "Séguinot-Bordet",
			"category" : "Vitt vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 4 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2016",
						"newValue" : "2018"
					}
				]
			},
			"uri" : "/article/7139601"
		}, {
			"id" : 558701,
			"name" : "Chablis Premier Cru Montée de Tonnerre",
			"name2" : "J M Brocard",
			"category" : "Vitt vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 4 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2017",
						"newValue" : "2018"
					}
				]
			},
			"uri" : "/article/558701"
		}, {
			"id" : 9520202,
			"name" : "Fontalloro",
			"name2" : "Fèlsina Spa",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 4 * 864e5),
				"changes" : [{
						"name" : "Producer",
						"oldValue" : "Felsina Spa",
						"newValue" : "Fèlsina Spa"
					}
				]
			},
			"uri" : "/article/9520202"
		}, {
			"id" : 8917001,
			"name" : "Cline Ancient Vines",
			"name2" : "Mourvèdre",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 4 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2013",
						"newValue" : "2016"
					}, {
						"name" : "Alcohol",
						"oldValue" : "15.50%",
						"newValue" : "14.50%"
					}
				]
			},
			"uri" : "/article/8917001"
		}, {
			"id" : 524901,
			"name" : "Arthur Metz",
			"name2" : "Gewurztraminer",
			"category" : "Vitt vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 4 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2015",
						"newValue" : "2017"
					}
				]
			},
			"uri" : "/article/524901"
		}, {
			"id" : 289901,
			"name" : "Pinot Gris",
			"name2" : "Premium Réserve",
			"category" : "Vitt vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 4 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2017",
						"newValue" : "2018"
					}
				]
			},
			"uri" : "/article/289901"
		}, {
			"id" : 289902,
			"name" : "Pinot Gris",
			"name2" : "Premium Réserve",
			"category" : "Vitt vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 4 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2017",
						"newValue" : "2018"
					}
				]
			},
			"uri" : "/article/289902"
		}, {
			"id" : 7536601,
			"name" : "Sorì dij But",
			"name2" : "",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 4 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2017",
						"newValue" : "2018"
					}
				]
			},
			"uri" : "/article/7536601"
		}, {
			"id" : 7566301,
			"name" : "Jean Plener Fils",
			"name2" : "Cuvée Reservé Brut Grand Cru",
			"category" : "Mousserande vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 4 * 864e5),
				"changes" : [{
						"name" : "Producer",
						"oldValue" : "Adega Cooperativa de Ponte da Barca",
						"newValue" : "Jean Plener Fils"
					}
				]
			},
			"uri" : "/article/7566301"
		}, {
			"id" : 547501,
			"name" : "Bourgogne Rouge",
			"name2" : "Pinot Noir Labouré-Roi",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 4 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2017",
						"newValue" : "2018"
					}, {
						"name" : "Alcohol",
						"oldValue" : "12.50%",
						"newValue" : "13.00%"
					}
				]
			},
			"uri" : "/article/547501"
		}, {
			"id" : 547502,
			"name" : "Bourgogne Rouge",
			"name2" : "Pinot Noir",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 4 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2017",
						"newValue" : "2018"
					}
				]
			},
			"uri" : "/article/547502"
		}, {
			"id" : 7500901,
			"name" : "Drappier",
			"name2" : "Brut Nature Zero Dosage",
			"category" : "Mousserande vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 4 * 864e5),
				"changes" : [{
						"name" : "Price",
						"oldValue" : 384.00,
						"newValue" : 499.00
					}, {
						"name" : "PricePerLitre",
						"oldValue" : 512.00,
						"newValue" : 665.33
					}
				]
			},
			"uri" : "/article/7500901"
		}, {
			"id" : 7479601,
			"name" : "Chablis",
			"name2" : "",
			"category" : "Vitt vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 4 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2016",
						"newValue" : "2017"
					}
				]
			},
			"uri" : "/article/7479601"
		}, {
			"id" : 565701,
			"name" : "Olivier Leflaive",
			"name2" : "Bourgogne Les Sétilles",
			"category" : "Vitt vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 4 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2017",
						"newValue" : "2018"
					}
				]
			},
			"uri" : "/article/565701"
		}, {
			"id" : 8847401,
			"name" : "Freixenet",
			"name2" : "Vintage Brut",
			"category" : "Mousserande vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 4 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2015",
						"newValue" : "2016"
					}
				]
			},
			"uri" : "/article/8847401"
		}, {
			"id" : 2700401,
			"name" : "Foot of Africa",
			"name2" : "Chenin Blanc",
			"category" : "Vitt vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 4 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2018",
						"newValue" : "2019"
					}
				]
			},
			"uri" : "/article/2700401"
		}, {
			"id" : 7200501,
			"name" : "Chassagne-Montrachet",
			"name2" : "Premier Cru Morgeot",
			"category" : "Vitt vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 4 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2013",
						"newValue" : "2016"
					}
				]
			},
			"uri" : "/article/7200501"
		}, {
			"id" : 652701,
			"name" : "Indomita",
			"name2" : "Varietal Cabernet Sauvignon",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 4 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2017",
						"newValue" : "2019"
					}
				]
			},
			"uri" : "/article/652701"
		}, {
			"id" : 228101,
			"name" : "Fat Bastard",
			"name2" : "Syrah",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 4 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2017",
						"newValue" : "2018"
					}
				]
			},
			"uri" : "/article/228101"
		}, {
			"id" : 536101,
			"name" : "Bourgogne Cuvée Prestige",
			"name2" : "Francois Martenot Pinot Noir",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 4 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2016",
						"newValue" : "2017"
					}
				]
			},
			"uri" : "/article/536101"
		}, {
			"id" : 7245801,
			"name" : "Les Dauphins",
			"name2" : "Côtes du Rhône Organic Rouge",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 4 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2017",
						"newValue" : "2018"
					}
				]
			},
			"uri" : "/article/7245801"
		}, {
			"id" : 7184101,
			"name" : "Emrich-Schönleber",
			"name2" : "Halgans Monzinger Riesling Trocken",
			"category" : "Vitt vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 4 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2015",
						"newValue" : "2017"
					}, {
						"name" : "Alcohol",
						"oldValue" : "12.50%",
						"newValue" : "12.00%"
					}
				]
			},
			"uri" : "/article/7184101"
		}, {
			"id" : 7922301,
			"name" : "Bozeto",
			"name2" : "De Exopto",
			"category" : "Rött vin",
			"changes" : {
				"timestamp" : new Date(Date.now() - 4 * 864e5),
				"changes" : [{
						"name" : "Vintage",
						"oldValue" : "2016",
						"newValue" : "2017"
					}, {
						"name" : "Alcohol",
						"oldValue" : "14.00%",
						"newValue" : "14.50%"
					}
				]
			},
			"uri" : "/article/7922301"
		}
	]
}


