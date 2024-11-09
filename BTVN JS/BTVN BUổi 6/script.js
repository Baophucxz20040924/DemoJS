const ip_job = document.getElementById("ip_job");
const list_jobs = document.getElementById("list_jobs");

reset();
renderJobs();

ip_job.addEventListener("keypress", (e) => {
    if (e.key === 'Enter'){
        add();
    }
});

function add(){
    const title = ip_job.value;

    const jobObject = {
        id: Date.now(),
        title: title,
        status: 0 // 1: hoàn thành
    };

    // Lấy danh sách jobs từ localStorage
    const data = localStorage.getItem("jobs");
    const jobs = data ? JSON.parse(data) : [];

    jobs.push(jobObject);

    // Lưu lại vào localStorage
    localStorage.setItem("jobs", JSON.stringify(jobs));
    renderJobs();
    reset();
}

function renderJobs(){
    // Lấy danh sách jobs từ localStorage
    const data = localStorage.getItem("jobs");
    const jobs = data ? JSON.parse(data) : [];

    const listLiHtml = jobs.map((v) => {
        return `
            <li id="${v.id}" class="${v.status ? "done" : "pending"}">
                <p class="title">${v.title}</p>
                <i onclick="updateStatus('${v.id}')" class="fa-solid fa-check ${v.status ? "completed" : ""}"></i>
                <i onclick="deleteJob('${v.id}')" class="fa-solid fa-trash"></i>
            </li>
        `;
    });

    list_jobs.innerHTML = listLiHtml.join("");
}

function deleteJob(id){
    const li = document.getElementById(id);
    list_jobs.removeChild(li);

    // Lấy danh sách jobs từ localStorage
    const data = localStorage.getItem("jobs");
    const jobs = data ? JSON.parse(data) : [];

    const index = jobs.findIndex((v) => v.id === +id);
    if (index !== -1) jobs.splice(index, 1);

    // Lưu lại danh sách đã cập nhật vào localStorage
    localStorage.setItem('jobs', JSON.stringify(jobs));
}




function updateStatus(id){
    // Lấy danh sách jobs từ localStorage
    const data = localStorage.getItem("jobs");
    const jobs = data ? JSON.parse(data) : [];

    const job = jobs.find((v) => v.id === +id);
    if (job) {
        job.status = 1; // Đánh dấu là hoàn thành
    }

    // Lưu lại danh sách đã cập nhật vào localStorage
    localStorage.setItem("jobs", JSON.stringify(jobs));
    renderJobs();
}

function reset(){
    ip_job.value = "";
    ip_job.focus();
}
