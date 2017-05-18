import Provider from './provider';
import _ from 'lodash'

export default class Bing extends Provider {

    constructor(options) {
        super()

        this.options = options
        this.url = "https://dev.virtualearth.net/REST/v1/Locations"
    }

    geocode (location){
        let url = this.url,
            qs = _.extend({q: location}, this.options || {})
        
        return this.request({
            url: url,
            qs: qs
        })
    }

    reverse (lat, lng){
        let url = `${this.url}/${lat},${lng}`,
            qs = this.options || {}
        
         return this.request({
            url: url,
            qs: qs
        })
    }
}

module.exports = (options ) => {
    return new Bing(options);
}