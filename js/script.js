const totalCount = document.getElementById("totalCount");
const interViewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
// console.log(totalCount);
const jobContainer = document.getElementById("jobContainer");
// console.log(jobContainer);
function calculateCount() {
  totalCount.innerText = jobContainer.children.length;
}
calculateCount();
