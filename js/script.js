// job data
const jobs = [
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
// active current tab
const currentTab = "all";

function renderJob() {
  const container = document.getElementById("jobContainer");
  container.innerHTML = "";
  var filtered = jobs.filter(function (job) {
    if (currentTab == "all") return true;
    return job.status == currentTab;
  });
}
