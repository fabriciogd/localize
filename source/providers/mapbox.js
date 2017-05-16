import request from 'request-promise';
import _ from 'lodash'

export default class Mapbox {

    constructor(options) {
        this.options = options
        this.url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"
    }

    geocode (location){
        let url = `${this.url}${encodeURIComponent(location)}.json`,
            qs =  this.options;

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
        let url = `${this.url}${lng},${lat}.json`,
            qs = this.options

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
    return new Mapbox(options);
}