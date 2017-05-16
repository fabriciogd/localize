import request from 'request-promise';
import _ from 'lodash'

export default class Google {

    constructor(options) {
        this.options = options
        this.url = "https://maps.googleapis.com/maps/api/geocode/json"
    }

    geocode (location){
        let url = this.url,
            qs = _.extend({sensor: false, address: location}, this.options || {})

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
        let url = this.url,
            latlng = `${lat},${lng}` ,
            qs = _.extend({sensor: false, latlng: latlng}, this.options || {})

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
    return new Google(options);
}