import request from 'request-promise';
import _ from 'lodash'

export default class Provider{

    request (options){
        return new Promise(function (resolve, reject) {

            options = _.extend({
                transform: function (body) { return JSON.parse(body) }
            }, options)

            request(options).then((result) => {
                resolve(result)
            }).catch((err) => {
                reject(err)
            })
        })
    }
}