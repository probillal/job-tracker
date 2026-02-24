const totalCount = document.getElementById("totalCount");
const interViewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");

const jobContainer = document.getElementById("jobContainer");
const mainContainer = document.querySelector("main");
const filterSection = document.getElementById("filteredSection");

const interViewList = [];
const rejectedList = [];

function calculateCount() {
  totalCount.innerText = jobContainer.children.length;
  interViewCount.innerText = interViewList.length;
  rejectedCount.innerText = rejectedList.length;
}
calculateCount();

// ================= Interview Click =================
mainContainer.addEventListener("click", function (event) {
  const interviewButton = event.target.closest(".interViewBtn");

  if (interviewButton) {
    const parentNode = interviewButton.closest(".bg-white");

    const companyName = parentNode.querySelector(".companyName").innerText;
    const expert = parentNode.querySelector(".expert").innerText;
    const details = parentNode.querySelector(".details").innerText;
    const status = parentNode.querySelector(".status").innerText;
    const description = parentNode.querySelector(".description").innerText;

    const cardInfo = {
      companyName,
      expert,
      details,
      status,
      description,
    };

    const exists = interViewList.find(
      (item) => item.companyName === companyName,
    );

    if (!exists) {
      interViewList.push(cardInfo);
    }

    renderInterView();
    calculateCount();
  }
});

// ================= Render Interview Section =================
function renderInterView() {
  filterSection.innerHTML = "";

  interViewList.forEach((job) => {
    const div = document.createElement("div");

    div.className = "bg-white p-5 rounded shadow relative mb-4";

    div.innerHTML = `
     <!-- card-1 -->
          <div class="bg-white p-5 rounded shadow relative">
            <button
              class="absolute top-3 right-3 text-gray-400 hover:text-red-600"
            >
              <i class="fa-solid fa-trash-can"></i>
            </button>

            <h3 class="companyName text-lg font-bold text-blue-900">
              Mobile First Corp
            </h3>
            <p class="expert text-gray-600">React Native Developer</p>

            <p class="details text-sm text-gray-500 mt-2">
              Remote • Full-time • $130,000 - $175,000
            </p>

            <p class="status mt-2 font-medium whitespace-nowrap">Not Applied</p>

            <p class="description text-gray-600 mt-3">
              Build cross-platform mobile applications using React Native. Work
              on products used by millions of users worldwide.
            </p>

            <div class="mt-4 space-x-2">
              <button
                class="interViewBtn px-3 py-1 border border-green-500 text-green-600 rounded"
              >
                Interview
              </button>

              <button
                class="rejectedBtn px-3 py-1 border border-red-500 text-red-600 rounded"
              >
                Rejected
              </button>
            </div>
          </div>
    `;

    filterSection.appendChild(div);
  });
}
