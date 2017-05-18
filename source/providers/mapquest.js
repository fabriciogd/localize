import Provider from './provider';
import _ from 'lodash'

export default class Mapquest extends Provider {

    constructor(options) {
        super()

        this.options = options
        this.url = "http://open.mapquestapi.com/geocoding/v1/"
    }

    geocode (location){
        let url = this.url + 'address',
            qs = _.extend({location: location}, this.options || {})

        return this.request({
            url: url,
            qs: qs
        })
    }

    reverse (lat, lng){
        let url = this.url + 'reverse',
            latlng = lat + ',' + lng,
            qs = _.extend({location: latlng}, this.options || {})

         return this.request({
            url: url,
            qs: qs
        })
    }
}

module.exports = (options ) => {
    return new Mapquest(options);
}