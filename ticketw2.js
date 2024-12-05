let softwareEngineeringClass = [];

localData = JSON.parse(localStorage.getItem("myPersonalData"));

if (localData) {
  softwareEngineeringClass = localData;
}

function bookTicket() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let seatNumber = document.getElementById("seatNumber").value;
  let date = document.getElementById("date").value;

  let userDate = new Date(date);
  let userYear = userDate.getFullYear();
  let userMonth = userDate.getMonth();
  let userDay = userDate.getDate();

  if (firstName === "" || lastName === "" || seatNumber === "" || date === "") {
    alert("enter all input");
  } else if (seatNumber <= 0 || seatNumber > 30) {
    alert("inavlid seat number");
  } else {
    let individual = { firstName, lastName, seatNumber, date };
    // console.log(individual)
    let taken = softwareEngineeringClass.filter(function (student) {
      return student.seatNumber === individual.seatNumber;
    });
    let takenDate = softwareEngineeringClass.filter(function (item) {
      return item.date === individual.date;
    });

    console.log(taken, takenDate);

    if (taken.length > 0 && takenDate.length > 0) {
      alert("hhh");
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
    <td>${softwareEngineeringClass[i].date}</td>

    </tr>
    </tbody>
    `;
  }
  // console.log(show)
  document.getElementById("showTable").innerHTML = show;
}
