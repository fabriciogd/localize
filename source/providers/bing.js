import request from 'request-promise';
import _ from 'lodash'

export default class Bing {

    constructor(options) {
        this.options = options
        this.url = "https://dev.virtualearth.net/REST/v1/Locations"
    }

    geocode (location){
        let url = this.url,
            qs = _.extend({q: location}, this.options || {})

        return new Promise(function (resolve, reject) {

            var options = {
                url: url,
                qs: qs,
                transform: function (body) { return JSON.parse(body) }
            };

            request(options).then((result) => {

                resolve(result);

            }).catch((err) => {

                reject(err);

            });
        })
    }

    reverse (lat, lng){
        let url = `${this.url}/${lat},${lng}` ,
            qs = this.options || {}

        return new Promise(function (resolve, reject) {

            var options = {
                url: url,
                qs: qs,
                transform: function (body) { return JSON.parse(body) }
            };

            request(options).then((result) => {

                resolve(result);

            }).catch((err) => {

                reject(err);

            });
        })
    }
}

module.exports = (options ) => {
    return new Bing(options);
}