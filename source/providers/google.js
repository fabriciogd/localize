import Provider from './provider';
import _ from 'lodash'

export default class Google extends Provider {

    constructor(options) {
        super()

        this.options = options
        this.url = "https://maps.googleapis.com/maps/api/geocode/json"
    }

    geocode (location){
        let url = this.url,
            qs = _.extend({sensor: false, address: location}, this.options || {})
            
        return this.request({
            url: url,
            qs: qs
        })
    }

    reverse (lat, lng){
        let url = this.url,
            latlng = `${lat},${lng}` ,
            qs = _.extend({sensor: false, latlng: latlng, location_type: 'ROOFTOP', result_type: 'street_address'}, this.options || {})

        return this.request({
            url: url,
            qs: qs
        })
    }
}

module.exports = (options ) => {
    return new Google(options);
}