const assets = [
    { "id": 662500200564001, "name": "laptop", "status": 1, "image": "1665382383102.jpg" },
    { "id": 673000100364002, "name": "projector", "status": 0, "image": "1665566532088.jpg" },
    { "id": 744001200561020, "name": "UPS", "status": 0, "image": "1665544789222.jpg" }
];

function assetTable() {
    const assetTableBody = document.getElementById('assetTableBody');

    assets.forEach(asset => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td><input type="checkbox" class="form-check-input"></td>
        <td>${asset.id}</td>
        <td>${asset.name}</td>
        <td>${asset.status === 1 ? 'Normal' : 'Lost'}</td>
        `;
        assetTableBody.appendChild(row);
    });

}

assetTable();

const btn_SignOut = document.getElementById('btn_SignOut');
btn_SignOut.addEventListener('click', () => {
    //alert('You have been signed out.');
    window.history.go(-1);
});