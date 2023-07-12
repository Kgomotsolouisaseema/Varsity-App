const faculties = [
    { name: 'IT', courses: [
        { courseName: 'Computer Engineering', requirements: {
            aps: 30, subjects: [ 'Maths', 'Science' ]
        }},
        { courseName: 'Information Technology: Software Development', requirements: {
            aps: 26, subjects: [ 'Maths', 'Science' ]
        }},
        { courseName: 'Information Technology: Web and Application Development', requirements: {
            aps: 20, subjects: [ 'Maths', 'Science' ]
        }}
    ]},
    { name: 'Science', courses: [
        { courseName: 'Biotechnology', requirements: {
            aps: 30, subjects: [ 'Maths', 'Science', 'Life Sciences' ]
        }},
        { courseName: 'Chemistry', requirements: {
            aps: 26, subjects: [ 'Maths', 'Science' ]
        }},
        { courseName: 'Industry Physics', requirements: {
            aps: 20, subjects: [ 'Maths', 'Science' ]
        }}
    ]},
    { name: 'Art & Design', courses: [
        { courseName: 'Design', requirements: {
            aps: 30, subjects: [ 'Maths', 'Science' ]
        }},
        { courseName: 'Performing Arts', requirements: {
            aps: 26, subjects: [ 'Maths', 'Science' ]
        }},
        { courseName: 'Fine Art', requirements: {
            aps: 20, subjects: [ 'Maths', 'Science' ]
        }}
    ]},
    { name: 'Humanities', courses: [
        { courseName: 'Education', requirements: {
            aps: 30, subjects: [ 'Maths', 'Science', 'English' ]
        }},
        { courseName: 'Journalism', requirements: {
            aps: 26, subjects: [ 'Maths', 'Science', 'English' ]
        }}
    ]}
] 


// kgomotso louisa 
courses = [];
studentsCourses = [];

btn1Enabled = false;

const apsScoreRange = document.getElementById("apsSelect");
apsScoreRange.addEventListener("change",onApsScoreSelected);
const valueScore = apsScoreRange.value;

//3. Event Handlers for the APS SCORE and Subjects functions
//APS score function

function onApsScoreSelected(event){
    const currentApsScore = event.target.value;
    let apsScore = faculties[1].courses[0].requirements.aps  //this line only iterates by line and not the whole faculties array
    console.log(apsScore)
//this code must iterate through the length of the faculties array to compare the aps score with the course
    for(let i= 0 ; i <  faculties.courses.requirements.length  ; i ++){
        if(currentApsScore >= faculties[i].aps ){   // apsScore is defined in 64 and should ideally loop throught aps to check if student qualifies or doesnt . currentApsScor = users input range 
            console.log("User Qualifies")
        }else{
            console.log("User doesnt qualifies for this course")
        }
        console.log(faculties.courses[i].requirements.aps.length )
    }}
    
    

    
//Subjects Selected Function 
function onSubjectChecked(subject){
    subjectsSelected = event.target.value
    //lost a bit here , come back to this one .
    // subjectCheked(subject)
    enableButtonIfValid()
}

// Button Enabled when user selects aps scroe range and atleast 1 subject 
 function enableButtonIfValid(){
    if(selectedScoreRange && subjectsSelected.length > 0){
        btn1Enabled = true
    }else{
        btn1Enabled = false  // check line 4 
    }
}

// 5 .checkCourses Function called when the submit button is clicked only when user has selected range and subject: 
function checkCourses(courses){
    studentsCourses = []
// add muuuchh logic here 
}