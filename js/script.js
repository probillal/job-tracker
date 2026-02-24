const totalCount = document.getElementById("totalCount");
const interViewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
// console.log(totalCount);
const jobContainer = document.getElementById("jobContainer");
// console.log(jobContainer);
const interViewList = [];
const rejectedList = [];

const mainContainer = document.querySelector("main");

function calculateCount() {
  totalCount.innerText = jobContainer.children.length;
  interViewCount.innerText = interViewList.length;
  rejectedCount.innerText = rejectedList.length;
}
calculateCount();

const allTab = document.getElementById("allTab");
const interViewTab = document.getElementById("interviewTab");
const rejectedTab = document.getElementById("rejectedTab");
// btn toggling
function showTab(id) {
  // console.log("click");
  allTab.classList.remove("bg-blue-600", "text-white");
  interViewTab.classList.remove("bg-blue-600", "text-white");
  rejectedTab.classList.remove("bg-blue-600", "text-white");

  allTab.classList.add("bg-gray-200", "text-black");
  interViewTab.classList.add("bg-gray-200", "text-black");
  rejectedTab.classList.add("bg-gray-200", "text-black");

  const selected = document.getElementById(id);
  selected.classList.remove("bg-gray-200", "text-black");
  selected.classList.add("bg-blue-600", "text-white");
}
