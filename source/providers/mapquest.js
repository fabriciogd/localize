import request from 'request-promise';
import _ from 'lodash'

export default class Mapquest {

    constructor(options) {
        this.options = options
        this.url = "http://open.mapquestapi.com/geocoding/v1/"
    }

    geocode (location){
        let url = this.url + 'address',
            qs = _.extend({location: location}, this.options || {})

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
        let url = this.url + 'reverse',
            latlng = lat + ',' + lng,
            qs = _.extend({location: latlng}, this.options || {})

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
    return new Mapquest(options);
}