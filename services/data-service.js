class DataService {

    static getSeries() {
        return fetch('https://6436c5228205915d34fc6fd5.mockapi.io/series')
            .then(resp => resp.json())
    }

    static putSerie(serie) {
        return fetch('https://6436c5228205915d34fc6fd5.mockapi.io/series/' + serie.id, { method: 'PUT', headers: { 'content-type': 'application/json' }, body: JSON.stringify(serie) })
            .then(resp => resp.json())
    }

    static postSerie(serie) {
        const jsonSerie = JSON.stringify(serie);
        return fetch('https://6436c5228205915d34fc6fd5.mockapi.io/series/', { method: 'POST', headers: { 'content-type': 'application/json' }, body: jsonSerie})
            .then(resp => resp.json())
    }

}

