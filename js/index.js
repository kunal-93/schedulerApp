const course1 = {
  name: `Tools and Workflow`,
  code: `WDDM-115`,
  instructor: `Kadeem Best`,
  start: { term: `Fall`, year: 2019 },
  weeks: 15,
  breaks: true,
  duration: 160
};
const course2 = {
  name: `Applied Programming`,
  code: `WDDM-113`,
  instructor: `Rocco`,
  start: { term: `Fall`, year: 2019 },
  weeks: 15,
  breaks: true,
  duration: 160
};
const course3 = {
  name: `Applied Workflow`,
  code: `WDDM-114`,
  instructor: `Rocco`,
  start: { term: `Fall`, year: 2019 },
  weeks: 15,
  breaks: true,
  duration: 160
};
const course4 = {
  name: `Web Prototyping`,
  code: `WDDM-117`,
  instructor: `Cory`,
  start: { term: `Fall`, year: 2019 },
  weeks: 15,
  breaks: true,
  duration: 160
};


const allCourses = [course1, course2, course3, course4];

function setCourseHTML(course){
  document.getElementById(`name`).innerHTML = course.name;
  document.getElementById(`code`).innerHTML = course.code;
  document.getElementById(`instructor`).innerHTML = course.instructor;
  document.getElementById(`start`).innerHTML = `${course.start.term} ${course.start.year}`;
  document.getElementById(`weeks`).innerHTML = course.weeks;
  document.getElementById(`duration`).innerHTML = getDurationFromMinutes(course.duration);
}

// LAB: ARRAYS, PART 1
// 1. Create a 2nd course Object
// 2. Store both course Objects in an array whose reference is stored as: allCourses
//      allCourses is an [] (reference) that hold two identically structured Objects
// 3. Modify the lines above (11-16) to put the values from the first course into the document
// 4. (Later) Move the HTML for course into a Javascript function that returns a formatted HTML string

function getDurationFromMinutes(minutes) {
  
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  // const mins = minutes - hrs * 60; // Could also use this

  return `${hrs} hr, ${mins} min`;
}

// setCourseHTML(allCourses[0]);
// setCourseHTML(allCourses[1]);

function getCourseAsHtmlString(course){
  return `
  <article class="course">
  <h3>${course.name}</h3>
  <ul>
    <li>Course Code: <strong>${course.code}</strong></li>
    <li>Instructor: <strong>${course.instructor}</strong></li>
    <li>Start: <strong>${course.start.term} ${course.start.year}</strong></li>
    <li>
      Weeks: <strong>${course.weeks}</strong>
      <ul>
        <li>Includes Break: <strong>${course.breaks}</strong></li>
      </ul>
    </li>
    <li>Duration: <strong>${getDurationFromMinutes(course.duration)}</strong></li>
  </ul>
</article>
  `
}

function displayCourses(coursesToDisplay){
  document.getElementById("courses").innerHTML = coursesToDisplay.map(getCourseAsHtmlString).join('\n');
}

document.getElementById("loadFirstThree").addEventListener("click", function(){
  displayCourses(allCourses.slice(0,3));
});



