// console.log('added')


const cards = () => document.querySelectorAll(".jobCard");
let activeTab = "All";


function updateDashboard(){

const all = cards().length;
const interview =
document.querySelectorAll('[data-status="Interview"]').length;

const rejected =
document.querySelectorAll('[data-status="Rejected"]').length;

totalCount.textContent = all;
interviewCount.textContent = interview;
rejectedCount.textContent = rejected;
}


function filterCards(){

let visible = 0;

cards().forEach(card => {

const status = card.dataset.status;

if(activeTab==="All" || status===activeTab){
card.style.display="block";
visible++;
}else{
card.style.display="none";
}

});

tabCount.textContent = visible + " jobs";
}



document.addEventListener("click",(e)=>{

const card = e.target.closest(".jobCard");
if(!card) return;

const badge = card.querySelector(".statusBadge");


if(e.target.classList.contains("interview")){
card.dataset.status="Interview";
badge.textContent="INTERVIEW";
badge.className="statusBadge bg-green-100 text-green-600 text-xs px-2 py-1 rounded";
}


if(e.target.classList.contains("reject")){
card.dataset.status="Rejected";
badge.textContent="REJECTED";
badge.className="statusBadge bg-red-100 text-red-600 text-xs px-2 py-1 rounded";
}


if(e.target.classList.contains("delete")){
card.remove();
}

updateDashboard();
filterCards();

});



document.querySelectorAll(".tab").forEach(btn=>{
btn.onclick=()=>{

activeTab = btn.dataset.tab;

document.querySelectorAll(".tab").forEach(b=>{
b.classList.remove("bg-blue-500","text-white");
b.classList.add("bg-gray-200");
});

btn.classList.add("bg-blue-500","text-white");

filterCards();
};
});

updateDashboard();
filterCards();