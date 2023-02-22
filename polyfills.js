
const user =[
    {
        id: 1,
        name:"juan"

    },
    {
        id: 2,
        name:"mario"

    },
    {
        id: 3,
        name:"pepa"

    },
    {
        id: 4,
        name:"pepe"

    },
    {    id: 5,
        name:"juana"

    },
]
const res = user.find( (el) => el.id === 43)

function encontrar(arr, fn) {
    for (let i = 0; 1 < arr.length; i++) {
        fn( arr[i] )
        // console.log(ar[i])
    }
}

