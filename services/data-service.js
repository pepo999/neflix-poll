class DataService{

    static getSeries(){
return fetch('https://6436c5228205915d34fc6fd5.mockapi.io/series')
.then(resp => resp.json())
    }

    static putSerie(serie){
        const jsonSerie = JSON.stringify(todo.toDbModel(serie)); 
return fetch('https://6436c5228205915d34fc6fd5.mockapi.io/series' + serie.id, {method: 'PUT', body: jsonSerie, headers: {'content-type':'application/json'}})  //body è il payload
.then(resp => resp.json())
    }

}