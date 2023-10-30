const assets = [
    { "id": 662500200564001, "name": "laptop", "status": 1, "image": "1665382383102.jpg" },
    { "id": 673000100364002, "name": "projector", "status": 0, "image": "1665566532088.jpg" },
    { "id": 744001200561020, "name": "UPS", "status": 0, "image": "1665544789222.jpg" }
];

// Function to populate the asset table
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

// Call the function to populate the table
assetTable();
// Sign out button click event
const btnSignOut = document.getElementById('btnSignOut');
btnSignOut.addEventListener('click', () => {
    // Implement sign out logic here
    alert('You have been signed out.');
    // You can redirect to the sign-in page or perform other actions as needed.
    //window.history.go(-1);
});
