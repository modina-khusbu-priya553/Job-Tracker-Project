//calculate jobs counts
let interviewList = [];
let rejectedList =[];
let currentStatus = 'all'
const allCards= document.getElementById('all-cards');
const totalCount = document.getElementById('total-count');
const interviewCount = document.getElementById('interview-count');
const rejectCount = document.getElementById('reject-count');

function calculateJobs(){
    totalCount.innerText = allCards.children.length;
    interviewCount.innerText = interviewList.length;
    rejectCount.innerText = rejectedList.length;
}
calculateJobs()

// update Job Counter
const jobCounter = document.getElementById('job-counter');
function updateJobCount(){
    const totalJobs = allCards.children.length;
    jobCounter.innerText = `${totalJobs} jobs`;
    if(currentStatus =="btn-interview"){
        jobCounter.innerText = `${interviewList.length} of ${totalJobs} jobs`;
    }
    else if(currentStatus =="btn-rejected"){
        jobCounter.innerText = `${rejectedList.length} of ${totalJobs} jobs`;
    }
}
updateJobCount()

// tab button
function changeTab(status){
    const tabs = ['all','interview', 'rejected'];
    for(const tab of tabs){
        const el = document.getElementById(`btn-${tab}`);
        el.classList.remove('tab-active')
    }
    document.getElementById(`btn-${status}`).classList.add('tab-active');
    currentStatus = (`btn-${status}`);


    // show and hidden particular section

    if(currentStatus =="btn-interview"){
        allCards.classList.add('hidden');
        filterSection.classList.remove('hidden');
        render();
    }
    else if(currentStatus =="btn-all"){
        allCards.classList.remove('hidden');
        filterSection.classList.add('hidden');
        if(allCards.children.length === 0){
            filterSection.classList.remove('hidden');
        }
    }
    else if(currentStatus =="btn-rejected"){
        allCards.classList.add('hidden');
        filterSection.classList.remove('hidden');
        rejectedRender();
    }
    updateJobCount()

}


// get the cards
const cardsSection = document.getElementById('cards-section').addEventListener('click', function(event){
    const clickElement = event.target;
    const card = clickElement.closest(".mt-8");
    const parent = card.parentNode;
    
    
        
    
    if(clickElement.classList.contains('btn-interview')){
        // const card = clickElement.closest(".mt-8");
        

        const companyName = card.querySelector('.company-name').innerText;
        const jobStatus = card.querySelector('.job-status').innerText;
        const jobLocation = card.querySelector('.job-location').innerText;
        const jobDescription = card.querySelector('.job-description').innerText; 
        const deleteButton = card.querySelector('.delete-button');

        
        const stateElement = card.querySelector('.state');
        stateElement.innerText = "Interview";

        const cardInfo = {
            companyName,
            jobStatus,
            jobLocation,
            stateElement:"Interview",
            jobDescription,
            deleteButton
        }
        const companyExist = interviewList.find(item => item.companyName == cardInfo.companyName)
        

        if(!companyExist){
            interviewList.push(cardInfo);
            
        }

        rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName)
        if(currentStatus =="btn-rejected"){
            rejectedRender();
        }

        calculateJobs();
        updateJobCount();
    }
    else if(clickElement.classList.contains('btn-rejected')){
    //    const card = clickElement.closest(".mt-8");

        const companyName = card.querySelector('.company-name').innerText;
        const jobStatus = card.querySelector('.job-status').innerText;
        const jobLocation = card.querySelector('.job-location').innerText;
        const jobDescription = card.querySelector('.job-description').innerText;
        const deleteButton = card.querySelector('.delete-button');
        
        const stateElement = card.querySelector('.state');
        stateElement.innerText = "Rejected";

        const cardInfo = {
            companyName,
            jobStatus,
            jobLocation,
            stateElement:"Rejected",
            jobDescription,
            deleteButton
        }

        const companyExist = rejectedList.find(item => item.companyName == cardInfo.companyName)

        if(!companyExist){
            rejectedList.push(cardInfo);
            // state.innerText ="Interviewed"
            console.log(rejectedList)
        }

        interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName)
        if(currentStatus == "btn-interview"){
            render();
        }
        calculateJobs();
        updateJobCount();

    }
    else if(clickElement.classList.contains('delete-button')){
        const companyName = card.querySelector('.company-name').innerText;

        interviewList = interviewList.filter(item => item.companyName !== companyName);
        rejectedList = rejectedList.filter(item => item.companyName !== companyName);

        // remove card from DOM

        card.remove();
        calculateJobs()
        updateJobCount()
        if(currentStatus === "btn-interview"){
            render();
        }
        else if(currentStatus === "btn-rejected"){
            rejectedRender();
        }
    }
    
})





// render
const filterSection = document.getElementById('filtered-section');
function render(){

    // get the parent
    filterSection.innerHTML=''

    if(interviewList.length === 0){
        filterSection.innerHTML=`<div class="p-4 md:p-6 shadow-sm rounded-xl bg-white mt-8 text-center items-center flex flex-col">
                <div>
                    <img src="./images/jobs.png" alt="">
                </div>
                <div>
                    <h2 class="text-info-content font-bold">No jobs available</h2>
                    <h3 class="text-sm text-gray-600">Check back soon for new job opportunities</h3>
                </div>
            </div>`

    }else {

        // create the child
        for(let interview of interviewList){
            let div = document.createElement('div');
            div.className="flex flex-col md:flex-row justify-between gap-6 p-4 md:p-6 shadow-sm rounded-xl bg-white mt-8";
            div.innerHTML = `
                    <div class="space-y-4">
                        <h2 class="company-name text-info-content font-bold">${interview.companyName}</h2>
                        <p class="job-status text-sm text-gray-600">${interview.jobStatus}</p>
                        <p class="job-location text-sm text-gray-600">${interview.jobLocation}</p>
                        <span class="state bg-primary-content text-info-content px-2 py-1 rounded-sm">${interview.stateElement}</span>
                        <p class="job-description text-sm text-gray-600">${interview.jobDescription}</p>
                        <div>
                            <button  class="btn-interview btn btn-outline btn-success">Interview</button>
                            <button  class="btn-rejected btn btn-outline btn-error">Rejected</button>
                        </div>
                    </div>
                    <div >
                       <button class="delete-button btn btn-soft rounded-full bg-base-100"><img class="pointer-events-none" src="./images/Vector.png" alt="">
                       </button>
                    </div>`

        // append child
        filterSection.appendChild(div);
        
        }

    }



}

function rejectedRender(){
    // get the parent
    filterSection.innerHTML=''
     if(rejectedList.length === 0){
        filterSection.innerHTML=`<div class="p-4 md:p-6 shadow-sm rounded-xl bg-white mt-8 text-center items-center flex flex-col">
                <div>
                    <img src="./images/jobs.png" alt="">
                </div>
                <div>
                    <h2 class="text-info-content font-bold">No jobs available</h2>
                    <h3 class="text-sm text-gray-600">Check back soon for new job opportunities</h3>
                </div>
            </div>`

    }else{
        // create the child
        for(let rejected of rejectedList){
            let div = document.createElement('div');
            div.className="flex flex-col md:flex-row justify-between gap-6 p-4 md:p-6 shadow-sm rounded-xl bg-white mt-8";
            div.innerHTML = `
                        <div class="space-y-4">
                            <h2 class="company-name text-info-content font-bold">${rejected.companyName}</h2>
                            <p class="job-status text-sm text-gray-600">${rejected.jobStatus}</p>
                            <p class="job-location text-sm text-gray-600">${rejected.jobLocation}</p>
                            <span class="state bg-primary-content text-info-content px-2 py-1 rounded-sm">${rejected.stateElement}</span>
                            <p class="job-description text-sm text-gray-600">${rejected.jobDescription}</p>
                            <div>
                                <button  class="btn-interview btn btn-outline btn-success">Interview</button>
                                <button  class="btn-rejected btn btn-outline btn-error">Rejected</button>
                            </div>
                        </div>
                        <div >
                            <button class="delete-button btn btn-soft rounded-full bg-base-100"><img class="pointer-events-none" src="./images/Vector.png" alt="">
                            </button>
                        </div>`

            // append child
            filterSection.appendChild(div);
            
        }


    }


}