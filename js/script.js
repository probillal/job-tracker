const totalCount = document.getElementById("totalCount");
const interViewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");

const jobContainer = document.getElementById("jobContainer");
const mainContainer = document.querySelector("main");
const filterSection = document.getElementById("filteredSection");
const noData = document.getElementById("noData");

const tabCount = document.getElementById("tabCount");

const interViewList = [];
const rejectedList = [];

// count update
function calculateCount() {
  totalCount.innerText = jobContainer.children.length;
  interViewCount.innerText = interViewList.length;
  rejectedCount.innerText = rejectedList.length;
  updateTabCount();
}

function updateTabCount() {
  const activeTab = document.querySelector(".bg-blue-600");

  if (!activeTab) return;

  if (activeTab.id === "allTab") {
    tabCount.innerText = jobContainer.children.length + " jobs";
  }

  if (activeTab.id === "interviewTab") {
    tabCount.innerText = interViewList.length + " jobs";
  }

  if (activeTab.id === "rejectedTab") {
    tabCount.innerText = rejectedList.length + " jobs";
  }
}

// all tab
const allTab = document.getElementById("allTab");
const interViewTab = document.getElementById("interviewTab");
const rejectedTab = document.getElementById("rejectedTab");

function showTab(id) {
  [allTab, interViewTab, rejectedTab].forEach((btn) => {
    btn.classList.remove("bg-blue-600", "text-white");
    btn.classList.add("bg-gray-200", "text-black");
  });

  const selected = document.getElementById(id);
  selected.classList.remove("bg-gray-200", "text-black");
  selected.classList.add("bg-blue-600", "text-white");

  updateView(id);
  updateTabCount();
}

function updateView(tabName) {
  if (tabName === "allTab") {
    jobContainer.classList.remove("hidden");
    filterSection.classList.add("hidden");
    noData.classList.add("hidden");
  } else {
    jobContainer.classList.add("hidden");
    filterSection.classList.remove("hidden");

    if (tabName === "interviewTab") {
      renderInterView();
      checkEmpty(interViewList);
    }

    if (tabName === "rejectedTab") {
      renderRejected();
      checkEmpty(rejectedList);
    }
  }
}

function checkEmpty(list) {
  if (list.length === 0) {
    noData.classList.remove("hidden");
  } else {
    noData.classList.add("hidden");
  }
}

// interview click

mainContainer.addEventListener("click", function (event) {
  const interviewButton = event.target.closest(".interViewBtn");
  if (!interviewButton) return;

  const parentCard = interviewButton.closest(".bg-white");

  const companyName = parentCard.querySelector(".companyName").innerText;
  const expert = parentCard.querySelector(".expert").innerText;
  const details = parentCard.querySelector(".details").innerText;
  const description = parentCard.querySelector(".description").innerText;

  const rejectedIndex = rejectedList.findIndex(
    (item) => item.companyName === companyName,
  );
  if (rejectedIndex !== -1) {
    rejectedList.splice(rejectedIndex, 1);
  }

  const exists = interViewList.find((item) => item.companyName === companyName);

  const statusElement = parentCard.querySelector(".status");
  statusElement.innerText = "Interview";
  statusElement.classList.remove("text-red-600");
  statusElement.classList.add("text-green-600");

  if (!exists) {
    interViewList.push({
      companyName,
      expert,
      details,
      status: "Interview",
      description,
    });
  }

  renderInterView();
  calculateCount();
});

// rejected click

mainContainer.addEventListener("click", function (event) {
  const rejectedButton = event.target.closest(".rejectedBtn");
  if (!rejectedButton) return;

  const parentCard = rejectedButton.closest(".bg-white");

  const companyName = parentCard.querySelector(".companyName").innerText;
  const expert = parentCard.querySelector(".expert").innerText;
  const details = parentCard.querySelector(".details").innerText;
  const description = parentCard.querySelector(".description").innerText;

  const interviewIndex = interViewList.findIndex(
    (item) => item.companyName === companyName,
  );
  if (interviewIndex !== -1) {
    interViewList.splice(interviewIndex, 1);
  }

  const exists = rejectedList.find((item) => item.companyName === companyName);

  const statusElement = parentCard.querySelector(".status");
  statusElement.innerText = "Rejected";
  statusElement.classList.remove("text-green-600");
  statusElement.classList.add("text-red-600");

  if (!exists) {
    rejectedList.push({
      companyName,
      expert,
      details,
      status: "Rejected",
      description,
    });
  }

  renderRejected();
  calculateCount();
});

// render interview

function renderInterView() {
  filterSection.innerHTML = "";

  interViewList.forEach((job) => {
    const div = document.createElement("div");

    div.className = "bg-white p-5 rounded shadow relative mb-4";

    div.innerHTML = `
    <div class="bg-white p-5 rounded shadow relative">
            <button
              class="absolute top-3 right-3 text-gray-400 hover:text-red-600"
            >
              <i class="fa-solid fa-trash-can"></i>
            </button>
      <h3 class="companyName text-lg font-bold text-blue-900">
        ${job.companyName}
      </h3>
      <p class="expert text-gray-600">${job.expert}</p>
      <p class="details text-sm text-gray-500 mt-2">${job.details}</p>
      <p class="status mt-2 font-medium text-green-600">
        ${job.status}
      </p>
      <p class="description text-gray-600 mt-3">
        ${job.description}
      </p>
      <div class="mt-4 space-x-2">
        <button class="interViewBtn px-3 py-1 border border-green-500 text-green-600 rounded">
          Interview
        </button>

        <button class="rejectedBtn px-3 py-1 border border-red-500 text-red-600 rounded">
          Rejected
        </button>
      </div>
    `;

    filterSection.appendChild(div);
  });
}

// render rejected

function renderRejected() {
  filterSection.innerHTML = "";

  rejectedList.forEach((job) => {
    const div = document.createElement("div");

    div.className = "bg-white p-5 rounded shadow relative mb-4";

    div.innerHTML = `
    <div class="bg-white p-5 rounded shadow relative">
            <button
              class="absolute top-3 right-3 text-gray-400 hover:text-red-600"
            >
              <i class="fa-solid fa-trash-can"></i>
            </button>
      <h3 class="companyName text-lg font-bold text-blue-900">
        ${job.companyName}
      </h3>
      <p class="expert text-gray-600">${job.expert}</p>
      <p class="details text-sm text-gray-500 mt-2">${job.details}</p>
      <p class="status mt-2 font-medium text-red-600">
        ${job.status}
      </p>
      <p class="description text-gray-600 mt-3">
        ${job.description}
      </p>
      <div class="mt-4 space-x-2">
        <button class="interViewBtn px-3 py-1 border border-green-500 text-green-600 rounded">
          Interview
        </button>

        <button class="rejectedBtn px-3 py-1 border border-red-500 text-red-600 rounded">
          Rejected
        </button>
      </div>
    `;

    filterSection.appendChild(div);
  });
}

// delete btn

mainContainer.addEventListener("click", function (event) {
  const deleteBtn = event.target.closest(".fa-trash-can");
  if (!deleteBtn) return;

  const card = deleteBtn.closest(".bg-white");

  const companyName = card.querySelector(".companyName").innerText;

  interViewList.splice(
    interViewList.findIndex((item) => item.companyName === companyName),
    1,
  );

  rejectedList.splice(
    rejectedList.findIndex((item) => item.companyName === companyName),
    1,
  );

  card.remove();

  calculateCount();
});

calculateCount();
