// <script>

/* ================================
   STEP 1: Job Data Array
   এখানে সব job object রাখা হয়েছে।
   প্রতিটি job এর একটি status আছে:
   "none" = Not Applied
   "interview" = Interview Selected
   "rejected" = Rejected
================================ */

var jobs = [
  {
    id: 1,
    company: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "Build cross-platform mobile applications used by millions worldwide.",
    status: "none",
  },
  {
    id: 2,
    company: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description: "Create modern web experiences for high-profile clients.",
    status: "none",
  },
  {
    id: 3,
    company: "TechNova Ltd",
    position: "Frontend Developer",
    location: "New York, USA",
    type: "Full-time",
    salary: "$100,000 - $150,000",
    description:
      "Develop user-friendly web interfaces for enterprise software.",
    status: "none",
  },
  {
    id: 4,
    company: "CloudNet Solutions",
    position: "Backend Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$110,000 - $160,000",
    description: "Work on scalable cloud-based backend systems.",
    status: "none",
  },
  {
    id: 5,
    company: "NextGen IT",
    position: "UI/UX Designer",
    location: "Toronto, Canada",
    type: "Contract",
    salary: "$70,000 - $95,000",
    description: "Design intuitive user experiences for mobile and web apps.",
    status: "none",
  },
  {
    id: 6,
    company: "Bright Digital",
    position: "Full Stack Developer",
    location: "London, UK",
    type: "Full-time",
    salary: "$120,000 - $170,000",
    description: "Handle frontend and backend development tasks.",
    status: "none",
  },
  {
    id: 7,
    company: "InnovateX",
    position: "Software Engineer",
    location: "Berlin, Germany",
    type: "Full-time",
    salary: "$105,000 - $155,000",
    description: "Develop innovative software products for global users.",
    status: "none",
  },
  {
    id: 8,
    company: "DataCore Systems",
    position: "Data Analyst",
    location: "Remote",
    type: "Full-time",
    salary: "$90,000 - $130,000",
    description: "Analyze large datasets to support business decisions.",
    status: "none",
  },
];

let currentTab = "all";

function renderJobs() {
  const container = document.getElementById("jobContainer");
  // remove previous card
  container.innerHTML = "";

  const filtered = jobs.filter(function (job) {
    if (currentTab == "all") return true;
    return job.status == currentTab;
  });

  // Tab wise count update
  document.getElementById("tabCount").innerText = filtered.length + " jobs";
  // shown no data
  if (filtered.length == 0) {
    document.getElementById("noData").classList.remove("hidden");
  } else {
    document.getElementById("noData").classList.add("hidden");
  }

  // create interview, rejected & not applied btn
  filtered.forEach(function (job) {
    const statusBadge =
      job.status == "interview"
        ? `<button class="bg-green-100 text-green-700 px-2 py-1 text-xs rounded">Interview</button>`
        : job.status == "rejected"
          ? `<button class="bg-red-100 text-red-700 px-2 py-1 text-xs rounded">Rejected</button>`
          : `<button class="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded">Not Applied</button>`;

    // create card
    const card = `
        <div class="bg-white p-5 rounded shadow relative">
            <button onclick="deleteJob(${job.id})" class="absolute top-3 right-3 text-gray-400 hover:text-red-600"><i class="fa-solid fa-trash-can"></i></button>

            <h3 class="text-lg font-bold text-blue-900">${job.company}</h3>
            <p class="text-gray-600">${job.position}</p>

            <p class="text-sm text-gray-500 mt-2">
            ${job.location} - ${job.type} - ${job.salary}
            </p>

            <div class="mt-2">${statusBadge}</div>

            <p class="text-gray-600 mt-3">${job.description}</p>

            <div class="mt-4 space-x-2">
                <button onclick="setStatus(${job.id}, 'interview')" 
                class="px-3 py-1 border border-green-500 text-green-600 rounded">
                Interview
                </button>

                <button onclick="setStatus(${job.id}, 'rejected')" 
                class="px-3 py-1 border border-red-500 text-red-600 rounded">
                Rejected
                </button>
            </div>
        </div>
        `;
    // add to card container
    container.innerHTML += card;
  });

  updateDashboard();
}
// toggle interview and reject
function setStatus(id, status) {
  jobs.forEach(function (job) {
    if (job.id == id) {
      if (job.status == status) {
        job.status = "none";
      } else {
        job.status = status;
      }
    }
  });

  renderJobs();
}
// remove job
function deleteJob(id) {
  jobs = jobs.filter(function (job) {
    return job.id != id;
  });

  renderJobs();
}
// update dashboard
function updateDashboard() {
  const interview = jobs.filter(function (i) {
    return i.status == "interview";
  }).length;

  var rejected = jobs.filter(function (i) {
    return i.status == "rejected";
  }).length;

  document.getElementById("interviewCount").innerText = interview;
  document.getElementById("rejectedCount").innerText = rejected;
  document.getElementById("totalCount").innerText = interview + rejected;
}
// show tab
function showTab(tab) {
  currentTab = tab;

  //  reset tab
  document.getElementById("allTab").className = "px-4 py-2 bg-gray-200 rounded";
  document.getElementById("interviewTab").className =
    "px-4 py-2 bg-gray-200 rounded";
  document.getElementById("rejectedTab").className =
    "px-4 py-2 bg-gray-200 rounded";

  // active tab
  document.getElementById(tab + "Tab").className =
    "px-4 py-2 bg-blue-600 text-white rounded";

  renderJobs();
}

renderJobs();
