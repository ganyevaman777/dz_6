const mass1 = [1, 2, 3, 4, 5]
const mass2 = [2, 4, 6, 8, 10]
const mass3 = [12, 23, 34, 45 ,56]
const mass4 = [21, 32, 43, 54, 65]
const mass5 = [23, 43, 54, 45, 56]

const mass6 = [...mass1, mass2, mass3, mass4, mass5]
console.log(mass6);


const object = {
    first_name:"Johny",
    last_name:"Dep",
    age: 58,
    favourite:"Jack Sparrow",
    no:"Captain Jack Sparrow"
}

const object2 = {...object,
    prof:"Actor",
    begin: 1985,
    end: 2022
}
console.log(object2)


const list = [

];
const addButton = document.getElementById('button')
const input = document.getElementById('input')

function render() {
    const mainDiv = document.createElement("div")
    mainDiv.setAttribute("class", "list")

    for (let i = 0; i < list.length; i++) {
        const div = document.createElement('div')
        div.setAttribute('class', "todoBlock")
        const p = document.createElement('p')
        p.innerText = list[i].text
        div.append(p)
        if (!(i = 1)) {
            stop()
        }
        mainDiv.append(div)
    }
    const form = document.querySelector('.form')
    document.querySelector('.list').remove();
    form.append(mainDiv)
}

addButton.onclick = function () {
    const object = {
        id: list.length,
        text: "Hello " + input.value
    }
    list.push(object);
    render();
}
