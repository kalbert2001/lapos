//const tabla = document.querySelector('dolgozoTabla')

const dolgozoTorzs = document.querySelector('#dolgozoTorzs')
const nameInput = document.querySelector('#name')
const cityInput = document.querySelector('#city')
const salaryInput = document.querySelector('#salary')
const addButton = document.querySelector('#AddButton')

const dolgozoLista = [
{name :"Pali",city: "Szolnok",salary: 385},
{name :"Mari",city: "Szolnok",salary: 300},
{name :"Kati",city: "Szeged",salary: 155},
{name :"Ricsi",city: "Szeged",salary: 488},
{name :"Pisti",city: "Miskolc",salary: 85},
{name :"Geza",city: "Szolnok",salary: 785},
{name :"Heni",city: "Pécs",salary: 385},
];
function loadEmployee (){
    dolgozoLista.forEach((dolgozo)=>{
        //console.log(dolgozo.city)
        //console.log(dolgozo.salary)
        console.log(dolgozo.name)
    
        let tr = document.createElement('tr')
        let tdName = document.createElement("td")
       let tdCity = document.createElement("td")
        let tdSalary = document.createElement("td")
        tdName.textContent = dolgozo.name
        tdCity.textContent = dolgozo.city
        tdSalary.textContent = dolgozo.salary
    
        dolgozoTorzs.append(tr)
        tr.append(tdName)
        tr.append(tdCity)
        tr.append(tdSalary)
    
    
    })
}
loadEmployee ();
addButton.addEventListener('click' ,() => {
    console.log("mukoduik")
    addEmployee()
    loadEmployee ();
})

function addEmployee () {
    //nameInput.value
    dolgozo = {
       //name :nameInput.value,
       // city : cityInput.value,
       // salary : salaryInput.value
       name : nameInput.value,
       city : cityInput.value,
       salary : salaryInput.value
    }
dolgozoLista.push(dolgozo)
console.log(dolgozoLista)
dolgozoTorzs.textContent = " ";
clearField ();
dolgozoTorzs.textContent = " ";


function clearField (){
    nameInput.value = "",
    cityInput.value = "",
    salaryInput.value = ""
}
}