'use strict'

import request from 'request-promise';
import _ from 'lodash'



/**
 * Class to access providers
 * 
 * @class Localize
 */
class Localize {
    version = '1.0.0'

    /**
     * Creates an instance of Localize.
     * 
     * @param {any} options Options passed to provider
     * 
     * @memberof Localize
     */
    constructor(options) {
        this.options = options

        this.selectProvider("google");
    }

    /**
     * Method to select the provider
     * 
     * @param {any} name Name of the provider
     * 
     * @memberof Localize
     */
    selectProvider (name) {
        if (_.isNil(name)) {
            throw new UserException('Provider name is required')
        }

        this.provider = require("./providers/" + name)(this.options);
    }

    /**
     * Method to retrieve information about the location
     * 
     * @param {any} location Location
     * @returns Returns a completed information about the location
     * 
     * @memberof Localize
     */
    geocode (location){
        if (_.isNil(location)) {
            throw new UserException('Location is required')
        }

        return this.provider.geocode(location);
    }

    /**
     * Method to retrieve information about the location
     * 
     * @param {any} lat Latitude
     * @param {any} lng Longitude
     * @returns Returns a completed information about the location
     * 
     * @memberof Localize
     */
    reverse (lat, lng){
        if (_.isNil(lat) || _.isNil(lng)) {
            throw new UserException('Latitude and longitude is required')
        }

        return this.provider.reverse(lat, lng);
    }
}

module.exports = (options ) => {
    return new Localize(options)
}