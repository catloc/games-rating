const staticFile = require("../appModules/http-utils/static-file");
const endpoints = require("./config")
const {getData, getRandomGame} = require("./api-utils")

async function mainRouteController(res, publicUrl, extname) {
    const data = await getData(endpoints.games);
    console.log(data);
    res.statusCode = 200;
    staticFile(res, publicUrl, extname);
}

module.exports = {
    mainRouteController, 
    endpoints,
    getData,
    getRandomGame
}
 