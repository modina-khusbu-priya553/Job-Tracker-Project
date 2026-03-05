//total counts
let interviewList = [];
let rejectedList =[];
const allCards= document.getElementById('all-cards');

const totalCount = document.getElementById



// tab button

function changeTab(status){
    const tabs = ['all','interview', 'rejected'];
    for(const tab of tabs){
        const el = document.getElementById(`btn-${tab}`);
        el.classList.remove('tab-active')
    }
    document.getElementById(`btn-${status}`).classList.add('tab-active');

}
