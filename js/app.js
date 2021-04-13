'use strict'
// get the elements 
//build constructor 
//add event 
// set and get from the local storage 

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const myForm = document.getElementById('myForm');
const myTable = document.getElementById('myTable');
const select = document.getElementById('dept');
const paragraph = document.getElementById('para');
paragraph.style.visibility = "hidden";
const div = document.getElementById('tot');

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// function myDeleteFunction() {
//     myTable.deleteRow(tableHEad);
//   }

function Information(name, email, department) {
    this.name = name;
    this.email = email;
    this.department = department;
    this.salary = randomNumber(100, 500);
    this.total=0;
    Information.all.push(this);
}
Information.all = [];

function totalNum() {
    for (let i = 0; i < Information.all.length; i++) {
        total = total + this.salary;
    }
}

function gettingItems() {
    let storage = JSON.parse(localStorage.getItem('info'));

    for (let i = 0; i < storage.length; i++) {

        const tableHEad = document.createElement('tr');
        myTable.appendChild(tableHEad);
        const headData1 = document.createElement('th');
        tableHEad.appendChild(headData1);
        headData1.textContent = `Name`;
        const headData2 = document.createElement('th');
        tableHEad.appendChild(headData2);
        headData2.textContent = `Email`;
        const headData3 = document.createElement('th');
        tableHEad.appendChild(headData3);
        headData3.textContent = `Department`;
        const headData4 = document.createElement('th');
        tableHEad.appendChild(headData4);
        headData4.textContent = `Salary`;

        // myDeleteFunction();
        const secondRow = document.createElement('tr');
        myTable.appendChild(secondRow);
        const secondRowData1 = document.createElement('td');
        secondRow.appendChild(secondRowData1);
        secondRowData1.textContent = `${storage[i].name}`
        const secondRowData2 = document.createElement('td');
        secondRow.appendChild(secondRowData2);
        secondRowData2.textContent = `${storage[i].email}`
        const secondRowData3 = document.createElement('td');
        secondRow.appendChild(secondRowData3);
        secondRowData3.textContent = `${storage[i].department}`;
        const secondRowData4 = document.createElement('td');
        secondRow.appendChild(secondRowData4);
        secondRowData4.textContent = `${storage[i].salary}`;
    }
}






myForm.addEventListener('submit', renderInfo);
function renderInfo(event) {
    event.preventDefault();
    let newProfile = new Information(event.target.name.value, event.target.email.value, event.target.dept.value);

    console.log('this is', Information.all);

    paragraph.style.visibility = "visible";
    const tableHEad = document.createElement('tr');
    myTable.appendChild(tableHEad);
    const headData1 = document.createElement('th');
    tableHEad.appendChild(headData1);
    headData1.textContent = `Name`;
    const headData2 = document.createElement('th');
    tableHEad.appendChild(headData2);
    headData2.textContent = `Email`;
    const headData3 = document.createElement('th');
    tableHEad.appendChild(headData3);
    headData3.textContent = `Department`;
    const headData4 = document.createElement('th');
    tableHEad.appendChild(headData4);
    headData4.textContent = `Salary`;

    // myDeleteFunction();
    const secondRow = document.createElement('tr');
    myTable.appendChild(secondRow);
    const secondRowData1 = document.createElement('td');
    secondRow.appendChild(secondRowData1);
    secondRowData1.textContent = `${newProfile.name}`
    const secondRowData2 = document.createElement('td');
    secondRow.appendChild(secondRowData2);
    secondRowData2.textContent = `${newProfile.email}`
    const secondRowData3 = document.createElement('td');
    secondRow.appendChild(secondRowData3);
    secondRowData3.textContent = `${newProfile.department}`;
    const secondRowData4 = document.createElement('td');
    secondRow.appendChild(secondRowData4);
    secondRowData4.textContent = `${newProfile.salary}`;

    myTable.appendChild(paragraph);
    paragraph.textContent = `Total = ${total}`;

    localStorage.setItem('info', JSON.stringify(Information.all));

}

gettingItems();