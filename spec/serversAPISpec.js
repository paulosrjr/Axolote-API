var request = require("request");

var base_url = "http://localhost:3000/"
var servers_url = base_url + "servers"

describe("Servers All", function () {
    describe("GET /servers", function () {
        var servers_url = base_url + "servers"
        it("returns status code 200", function () {
            request.get(servers_url, function (error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
    });
});


describe("Servers ID", function () {
    describe("GET /servers/999999", function () {
        var servers_id_fake = servers_url + "/999999"
        console.log(servers_id_fake)
        it("returns status code 404", function () {
            request.get(servers_id_fake, function (error, response, body) {
                console.log(response.statusMessage)
                console.log(response.statusCode)
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });
});