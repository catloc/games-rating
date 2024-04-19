const staticFile = require("../appModules/http-utils/static-file");
const makeRatingFile = require("../appModules/rating/rating-file");
const { getData } = require("../appModules/api/api-utils");
const endpoints = require("../appModules/api/config");

async function mainRouteController(res, publicUrl, extname) {
    const data = await getData(endpoints.games);
    await makeRatingFile(config.PATH_TO_RATING_FILE, data);
    res.statusCode = 200;
    staticFile(res, publicUrl, extname);
}
module.exports = mainRouteController;