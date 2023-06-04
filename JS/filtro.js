class Filterable {
    constructor(data) {
        this.data = data

    }
    filtros = new Set()
    data = []
    addFilter(filtro) {
        this.filtros.add(filtro)
    }
    run() {
        return this.data.filter(persona => [...this.filtros].every(filtro => filtro(persona)))
    }
    removeFilter(filtro) {
        this.filtros.delete(filtro)
    }
    clearFilters() {
        this.filtros = new Set()
    }
};
let persons = [
    {
        age: 58, name: "Susan"
    },
    {
        age: 34, name: "Jack"
    }
];


let list = new Filterable(persons);
list.addFilter(p => p.age > 50)
console.log(list.run()) // returns an array
let mynamesjack = p => p.name == "Jack"
list.addFilter(mynamesjack)
console.log(list.run()) // returns another array
list.removeFilter(mynamesjack)
list.clearFilters()