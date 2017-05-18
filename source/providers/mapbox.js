import Provider from './provider';
import _ from 'lodash'

export default class Mapbox extends Provider {

    constructor(options) {
        super()
        
        this.options = options
        this.url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"
    }

    geocode (location){
        let url = `${this.url}${encodeURIComponent(location)}.json`,
            qs =  _.extend({limit: 1}, this.options || {});

        return this.request({
            url: url,
            qs: qs
        })
    }

    reverse (lat, lng){
        let url = `${this.url}${lng},${lat}.json`,
            qs = _.extend({limit: 1}, this.options || {});

        return this.request({
            url: url,
            qs: qs
        })
    }
}

module.exports = (options ) => {
    return new Mapbox(options);
}