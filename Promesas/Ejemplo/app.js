const data = [{
    litle: 'Aprendiendo JavaScript',
    year: '2021',
    isbn: '979-8700179263',
    author: 'Carlos Azaustre'
}, {
    litle: 'React.js Práctico',
    year: '2022',
    isbn: 'TBD',
    author: 'Carlos Azaustre'
}, {
    litle: 'Clean JavaScript',
    year: '2020',
    isbn: '979-8567583319',
    author: 'Miguel A. Gomez'
}];

//const data = [];




function getData() {
    return new Promise ((resolve, reject) => {
        if (data.length === 0) {
            reject(new Error('Data is empty'))
        }
        setTimeout (() => {
            resolve(data);
        }, 2000)
    })
}

//getData()
//    .then((response) => console.log(response))
//    .catch((err) => console.log(err.message))


const books = await getData();
console.log(books);

