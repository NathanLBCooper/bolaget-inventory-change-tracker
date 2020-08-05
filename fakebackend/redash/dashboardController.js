var dashboards = require("../../redash/dashboards.json");

module.exports = function (app) {
    app.get("/dashboards", function (req, res) {
        res.send({
            data: dashboards.data
        });
    });
};
