const faculties = [
  {
    name: "IT",
    courses: [
      {
        courseName: "Computer Engineering",
        requirements: {
          aps: 30,
          subjects: ["Maths", "Science"],
        },
      },
      {
        courseName: "Information Technology: Software Development",
        requirements: {
          aps: 26,
          subjects: ["Maths", "Science"],
        },
      },
      {
        courseName: "Information Technology: Web and Application Development",
        requirements: {
          aps: 20,
          subjects: ["Maths", "Science"],
        },
      },
    ],
  },
  {
    name: "Science",
    courses: [
      {
        courseName: "Biotechnology",
        requirements: {
          aps: 30,
          subjects: ["Maths", "Science", "Life Sciences"],
        },
      },
      {
        courseName: "Chemistry",
        requirements: {
          aps: 26,
          subjects: ["Maths", "Science"],
        },
      },
      {
        courseName: "Industry Physics",
        requirements: {
          aps: 20,
          subjects: ["Maths", "Science"],
        },
      },
    ],
  },
  {
    name: "Art & Design",
    courses: [
      {
        courseName: "Design",
        requirements: {
          aps: 30,
          subjects: ["Maths", "Science"],
        },
      },
      {
        courseName: "Performing Arts",
        requirements: {
          aps: 26,
          subjects: ["Maths", "Science"],
        },
      },
      {
        courseName: "Fine Art",
        requirements: {
          aps: 20,
          subjects: ["Maths", "Science"],
        },
      },
    ],
  },
  {
    name: "Humanities",
    courses: [
      {
        courseName: "Education",
        requirements: {
          aps: 30,
          subjects: ["Maths", "Science", "English"],
        },
      },
      {
        courseName: "Journalism",
        requirements: {
          aps: 26,
          subjects: ["Maths", "Science", "English"],
        },
      },
    ],
  },
];

// kgomotso louisa
let course = [];
let studentsCourses = []; //this array will collect the initial course that user qualifies for when btn1 is clicked
// let qualifyingCourses = []; 

const btn1 = document.getElementById("btn1"); //Initialized check Course button to false at first
let selectedScoreRange = " "; //holds the selected range of APS scores from user

let subjectsSelected = []; // this array holds the selected subjects from the user

const apsScoreRange = document.getElementById("apsSelect");
apsScoreRange.addEventListener("change", onApsScoreSelected); //event listener for apsScoreSelected function

// APS score function to Iterate through the faculties array ,loop through and collect APS score
function onApsScoreSelected(event) {
  const currentApsScore = event.target.value;
  selectedScoreRange = currentApsScore; // currentApsScore is now the value of user and
  console.log(selectedScoreRange);
  for (let i = 0; i < faculties.length; i++) {
    // this for loop iterates through the faculties array first
    const faculty = faculties[i]; //  c
    for (let j = 0; j < faculty.courses.length; j++) {
      const course = faculty.courses[j];
      if (currentApsScore >= course.requirements.aps) {
        console.log("Student Qualifies for course: ", course.name);
        // Add the course to studentsCourses array
        studentsCourses.push(course);
      } else {
        console.log("User doesn't qualify for course: ", course.name);
      }
    }
  }

  enableButtonIfValid();
}

// Subjects Selected Function
function onSubjectChecked(event) {
  const selectedSubject = event.target.value;
  subjectsSelected.push(selectedSubject);
  enableButtonIfValid();
}

// Button Enabled when user selects APS score range and at least 1 subject . i should add functionaliity to enabled the button.

function enableButtonIfValid() {
  if (selectedScoreRange && subjectsSelected.length > 0) {
    btn1.disabled = false;
  } else {
    btn1.disabled = true;
  }
}

// checkCourses Function called when the submit button is clicked only when user has selected range and subject

function checkCourses() {
  if (btn1) {
    // console.log(checkCourses);
//  logic for checking courses and performing necessary actions
    console.log("Checking courses...");
    console.log("Selected Subjects: ", subjectsSelected);
    console.log("Student's Courses: ", studentsCourses);
// 3:45 PM 13/7/JULY 160-164 DISPLAY THE COURSES STUDENTS QUALIFIES FOR 
    let tempData = "<ol>";
    for (let s = 0; s < studentsCourses.length; s++) {
      tempData += "<li>" + studentsCourses[s].courseName + "</li>";
    }
    tempData += "</ol>"

    document.getElementById("studentCanApply").innerHTML = ` YOU QUALIFY FOR THE FOLLOWING COURSES :  ${tempData}`;
  } else {
    alert("Please select APS score range and at least 1 subject.");
  }
}
// trying very hard to get the student course that they qualify for to display on UI.
// let dropdown = document.getElementsByClassName("dropdownCourses");
// dropdown.innerHTML = JSON.stringify(studentsCourses);

//this function displays the course on the UI after the checkCourses function has excuted
function submitApplication(){
  let name = document.getElementById("name").value;
  let id = document.getElementById("id").value;
  let age = document.getElementById("age").value;
  let email = document.getElementById("email").value;
  // let selectedCourse = document.getElementById("dropdownCourses").value;

  let applicationData = [name,id,age,email]; //,selectedCourse

  console.log("Application submitted:");
  console.log("Name: " + applicationData[0]);
  console.log("ID: " + applicationData[1]);
  console.log("Age: " + applicationData[2]);
  console.log("Email: " + applicationData[3]);
  // console.log("Course: " + applicationData[4]);
  alert("Your application has been submitted , Thank you !");

  // Optionally,reset the form fields after submission.
  document.getElementById("application-form").reset();

}

//function gets the users selected courses but it should only get the qualifying courses from user. 
function getCourse() {
  const selectCourse = document.getElementById("dropdownCourses");
  const selectedCourse = selectCourse.options[selectCourse.selectedIndex].value;
  document.querySelector(".output").textContent = selectedCourse;
}


// function getCourse(){
//   selectCourse =document.getElementById("dropdownCourses");
//   console.log(selectCourse);
//   output= selectCourse.options[selectCourse.selectedIndex].value; //this gets the options from the dropdown list of course

//   document.querySelector('.output').textContent = output;
      
// }
// this function was supposed to filter the users qualifying courses and then can they apply, it has not worked  yet as of 3:31pm friday 

function limitCourseApply() {
  let selectEle = document.getElementById("dropdownCourses");
  for (let a = 0; a < selectEle.options.length; a++) {
    let option = selectEle.options[a];
    if (qualifyingCourses.some(course => course.courseName === option.value)) {
    option.disabled = false;
    } else {
    option.disabled = true;
    }
  }

document.addEventListener("DOMContentLoaded", function() {
  onApsScoreSelected({ target: apsScoreRange }); // Pass a mock event to trigger the function
  const subjectCheckboxes = document.querySelectorAll('.subjects input[type="checkbox"]');
  subjectCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function(event) {
      onSubjectChecked(event);
    });
  });

  limitCourseApply();
});
};
