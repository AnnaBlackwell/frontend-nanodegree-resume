var bio = {
  "name" : "Anna Blackwell",
  "age" : 28,
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "0276368721",
    "email" : "annablackwell44@gmail.com",
    "github" : "AnnaBlackwell",
    "twitter" : "@annacblackwell",
    "location" : "Auckland, New Zealand",
},
  "bioPic" : "../../AnnaBlackwell.github.io/ABProfile.jpg", 
  "welcomeMessage" : "Hi, and welcome to my resume page",
  "skills" : ["Programming", "JavaScript", "Project Management"
  ]
}

var work = {
  "jobs" : [
    {
      "job" : "Project Manager",
      "employer" : "Northern Regional Alliance",
      "dates" : "2014-2016",
      "location" : "Auckland",
      "description" : "Managed health workforce development projects across the four DHBs in the northern region."
    },
    {
      "job" : "Study Coordinator",
      "employer" : "CBG Health Research",
      "dates" : "2012-2013",
      "location" : "Auckland",
      "description" : "Coordinated data collection of a national survey about the oral health issues of New Zealanders aged 65+."
    }
  ]
}


var education = {
  "schools" : [
    {
      "name" : "University of Auckland",
      "dates" : "2008-2010",
      "city" : "Auckland",
      "major" : "Public Health",
      "degree" : "Master of Public Health",
      "url" : "https://www.fmhs.auckland.ac.nz/en/soph.html"
    },
    {
      "name" : "University of Otago",
      "dates" : "2005-2007",
      "city" : "Dunedin",
      "major" : "Human Nutrition",
      "degree" : "Bachelor of Science",
      "url" : "http://www.otago.ac.nz/sciences/study/undergraduate/qualifications/otago060422.html"
    }
  ]
}

var projects = {
  "projects" : [
  {
    "title" : "Anatomical Pathology MLT training pathway",
    "dates" : "2014-2015",
    "description" : "Established a training programme for new AP Medical Laboratory Technicians",
    },
  {
    "title" : "Study into Older Persons' Oral Health Issues",
    "dates" : "2012-2013",
    "description" : "Coordinated a national survey of oral health of New Zealanders aged 65+",
    }
  ] 
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

if((bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
      $("#skills").append(formattedSkill);
    }


function displayWork() {}
for (job in work.jobs) {
  //create new div for work experience
  $("#workExperience").append(HTMLworkStart);
  //concat employer and title
  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle; 
    $(".work-entry:last").append(formattedEmployerTitle);
  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates); 
    $(".work-entry:last").append(formattedDates);
  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

displayWork();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  locClicks(x, y);
});

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] +" "=name[1];
}

$('#main').append(internationalizeButton);

projects.display = function() {
 for (project in projects.projects) {
  $("#projects").append(HTMLprojectStart);

  var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
  $(".project-entry:last").append(formattedDates);

  var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
  $(".project-entry:last").append(formattedDescription);

  if (projects.projects[project].images.length > 0) {
    for (image in projects.projects[project].images) {
      var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
      $(".project-entry:last").append(formattedImage);
    }
  }
 } 
}

// Map
$("#mapDiv").append(googleMap);

