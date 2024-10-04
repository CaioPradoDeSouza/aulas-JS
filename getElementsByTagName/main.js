

// const elementsHTML = [...document.getElementsByTagName('div')]

let elementsHTML = document.getElementsByTagName('div')

elementsHTML=[...elementsHTML]

console.log(elementsHTML)

elementsHTML.map((e) => {
    console.log(e)
})