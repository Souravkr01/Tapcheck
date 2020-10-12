function openEditModal() {
    var editDetailModal = document.getElementById('edit-details-modal');
    editDetailModal.style.display = 'flex';
}
function closeEditModal() {
    var editDetailModal = document.getElementById('edit-details-modal');
    editDetailModal.style.display = 'none';
}
var editDetails = document.getElementById('edit-details');
editDetails.addEventListener('click', function() {
    openEditModal();
});
var closeDetails = document.getElementById('close-edit-details');
closeDetails.addEventListener('click', function() {
    closeEditModal();
});
// items = [1,12,23,4,15,6,37,8];

items = [{
    id: 24,
    name: 'Joe'
}, {
    id: 2,
    name: 'Jolly'
}, {
    id: 2,
    name: 'Joy'
}]
htmldiv = '';
for(items)


items.forEach((item) => {
    htmldiv += `<div> ${item} </div>`
});
var data = document.getElementById('unique');
data.innerHTML = htmldiv;
