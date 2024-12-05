let myObj = { name: "John", age: "21", height: "5,1" };
let newString = JSON.stringify(myObj);
console.log("my obj:", myObj)
console.log("stringify myObj:", JSON.stringify(myObj));
console.log("newstring:", newString)
console.log("parse new string:", JSON.parse(newString))

let softwareEngineeringClass = [];

softwareEngineeringClass = JSON.parse(localStorage.getItem("ticketArrays"));

function bookTicket() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let seatNumber = document.getElementById("seatNumber").value;

  if (firstName === "" || lastName === "" || seatNumber === "") {
    alert("enter all input");
  } else if (seatNumber <= 0 || seatNumber > 30) {
    alert("inavlid seat number");
  } else {
    let individual = { firstName, lastName, seatNumber };
    let taken = softwareEngineeringClass.filter(function (student) {
      return student.seatNumber === individual.seatNumber;
    });
    console.log(taken);
    if (taken.length > 0) {
      alert("Seat is taken");
    } else {
      softwareEngineeringClass.push(individual);
      localStorage.setItem(
        "myPersonalData",
        JSON.stringify(softwareEngineeringClass)
      );
    }
  }

  showsoftwareEngineeringClass();
}

function showsoftwareEngineeringClass() {
  let show = "";
  for (let i in softwareEngineeringClass) {
    show += `<tbody>
    <tr>
    <td>${Number(i) + 1}</td>
    <td>${softwareEngineeringClass[i].firstName}</td>
    <td>${softwareEngineeringClass[i].lastName}</td>
    <td>${softwareEngineeringClass[i].seatNumber}</td>
    </tr>
    </tbody>
    `;
  }
  // console.log(show)
  document.getElementById("showTable").innerHTML = show;
}
