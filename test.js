import assert from 'assert';
import localize from './source/index'

describe('localize with google provider', () => {
    let loc = localize({key: ''}).selectProvider('google');

    it('geocode', () => {
        return loc.geocode('Rua Lopes Trovão, Novo Hamburgo, Rio Grande Do Sul, Brazil').then(function(result){
            let location = result.results[0].geometry.location

            assert.equal(location.lat, -29.71781)
            assert.equal(location.lng, -51.1342079)
        })
    })

    it('reverse', () => {
        return loc.reverse(-29.71781, -51.1342079).then(function(result){
            let address = result.results[0].formatted_address
            assert.equal(address, 'R. Pinheiro Machado, 555 - Industrial, Novo Hamburgo - RS, Brazil')
        })
    })
})

describe('localize with bing provider', () => {
    let loc = localize({key: ''}).selectProvider('bing');

    it('geocode', () => {
        return loc.geocode('Rua Lopes Trovão, Novo Hamburgo, Rio Grande Do Sul, Brazil').then(function(result){
            let location = result.resourceSets[0].resources[0].point.coordinates

            assert.equal(location[0], -29.71824)
            assert.equal(location[1], -51.13424)
        })
    })

    it('reverse', () => {
        return loc.reverse(-29.71824, -51.13424).then(function(result){
            let address = result.resourceSets[0].resources[0].address.formattedAddress

            assert.equal(address, 'Rua Lopes Trovão, 320, Industrial, Novo Hamburgo - RS, 93320-500, Brazil')
        })
    })
})

describe('localize with mapquest provider', () => {
    let loc = localize({key: ''}).selectProvider('mapquest');

    it('geocode', () => {
        return loc.geocode('Rua Lopes Trovão, Novo Hamburgo, Rio Grande Do Sul, Brazil').then(function(result){
            let location = result.results[0].locations[0].latLng

            assert.equal(location.lat, -29.718555)
            assert.equal(location.lng, -51.134199)
        })
    })

    it('reverse', () => {
        return loc.reverse(-29.718555, -51.134199).then(function(result){
            var address = result.results[0].locations[0]

            assert.equal(address.street, 'Rua Lopes Trovão')
        })
    })
})

describe('localize with mapbox provider', () => {
    let loc = localize({access_token: ''}).selectProvider('mapbox');

    it('geocode', () => {
        return loc.geocode('Rua Lopes Trovão, Novo Hamburgo, Rio Grande Do Sul, Brazil').then(function(result){
            let location = result.features[0].center

            assert.equal(location[0], -51.1342165)
            assert.equal(location[1], -29.7177536)
        })
    })

    it('reverse', () => {
        return loc.reverse(-29.7177536, -51.1342165).then(function(result){
            var address = result.features[0]

            assert.equal(address.place_name, 'Rua Lopes Trovão 219, Novo Hamburgo, Rio Grande Do Sul 93320, Brazil')
        })
    })
})