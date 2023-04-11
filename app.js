// *********************Question # 01****************** 

// function number(num1){
//     return function(num2){
//         console.log(num1+num2);
//     }
// }

// let result1 = number(5);
// let result2 = number(5);
// result1(10);
// result2(20);


// *********************Question # 02****************** 

// let arrNumber = [1, 2, 3, 4, 5];

// function findArr(arr, val) {
//     if (arr.length === 0) {
//       return false;
//     }
//     if (arr[0] === val) {
//       return true;
//     } else {
//       return findArr(arr.slice(1), val);
//     }
//   }

// console.log(findArr(arrNumber, 3));


// *********************Question # 03****************** 

// let newParagraph = document.createElement('p');
// function addParagraph(text) {
//     newParagraph.textContent = text;
//     document.body.appendChild(newParagraph);
// }

// addParagraph('This is a new paragraph!');


// *********************Question # 04****************** 

// function addListItem(text) {
//     let newListItem = document.createElement('li');
//     newListItem.textContent = text;
//     let unorderedList = document.querySelector('ul');
//     unorderedList.appendChild(newListItem);
// }

// addListItem('This is a new list item!');


// *********************Question # 05****************** 

// let myPara = document.querySelector("p");
// myPara.innerHTML = "<p>Pakistan Zindabad</p>";
// console.log(myPara);
// myPara.style.backgroundColor = "#000";
// myPara.style.color = "#fff";


// *********************Question # 06****************** 

// let get = localStorage.getItem("Students");
// let record = get ? JSON.parse(get) : [];
// function Students() {
//     let std = {
//         name: prompt("Enter Name"),
//         rollNumber: +prompt("Enter Roll No"),
//         age: +prompt("Enter Age"),
//         nickName: prompt("Enter Nick Name"),
//     }
//     record.push(std);
//     console.log(record);
//     let result = JSON.stringify(record);
//     localStorage.setItem("Students", result);

// }


// *********************Question # 08****************** 

// let prevStudents = localStorage.getItem("Students");
// let arrPerson = prevStudents ? JSON.parse(prevStudents) : [];
// function person() {
//     let students = {
//         name: "Sajid Khan Afridi",
//         fatherName: "M.Sharif",
//         cnic: 42401730757520,
//         rollNumber: 138,
//         className: 8,

//     }
// }
// arrPerson.push(students);
// console.log(arrPerson);
// let hold = JSON.stringify(arrPerson);
// localStorage.setItem("Students", hold);



