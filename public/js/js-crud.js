// data
let students = [
    { id: 100, name: 'Lisa', age: 25 },
    { id: 101, name: 'Peter', age: 29 },
    { id: 102, name: 'Mary', age: 18 },
    { id: 103, name: 'Tom', age: 15 },
];
const myModal = new bootstrap.Modal(document.getElementById('modalId'));
// alert(students[0].name);
// ============== Functions =================
// --------- Read -----------
const table_body = document.querySelector('#table_body');

function readData() {
    let table_data = '';
    for (stu of students) {
        table_data += `<tr><td>${stu.name}</td>`;
        table_data += `<td>${stu.age}</td>`;
        table_data += `<td><button class="btn btn-danger me-2 btn-delete" id="${stu.id}">Delete</button>`;
        table_data += `<button class="btn btn-warning btn-edit">Edit</button></td></tr>`;
    }
    table_body.innerHTML = table_data;
    deleteData();
    addData();
}

// --------- Delete -----------
function deleteData() {
    // click delete button
    const btn_delete = document.querySelectorAll('.btn-delete');
    // loop to bind 'click' event to each button
    btn_delete.forEach(function (btn) {
        btn.onclick = function () {
            Swal.fire({
                title: 'Are you sure to delete?',
                showCancelButton: true,
                confirmButtonText: 'Yes',
            }).then((result) => {
                if (result.isConfirmed) {
                    let new_students = [];
                    for (stu of students) {
                        if (stu.id != btn.id) {
                            new_students.push(stu);
                        }
                    }
                    students = new_students;
                    readData();
                    // Swal.fire('Saved!', '', 'success')
                }
            });
            // alert(btn.id);
            //  === method 1: find array's id and delete ===
            // find array's id
            // let arrayID = 0;
            // for(let i=0; i<students.length; i++) {
            //     if(students[i].id == btn.id) {
            //         arrayID = i;
            //         break;
            //     }
            // }
            // const test = students.find(function(stu, index) {

            //     return stu.id == btn.id;
            // });
            // students.splice(arrayID, 1);

            // === method 2: filter out the unwanted ===            
            // const new_students = students.filter(function(stu) {
            //     return stu.id != btn.id;
            // });
            // students = new_students;

            // readData();
        }
    });
}


// --------- Add -----------
function addData() {
    // click save button at add dialog
    // hide modal
    myModal.hide();

    document.querySelector('#btnAddSave').onclick = function () {
        // alert('add');
        // get new user
        const new_name = document.querySelector('#new_name').value;
        const new_age = document.querySelector('#new_age').value;
        // console.log(new_name);
        // console.log(new_age);
        // add user to array
        const lastID = students[students.length - 1].id;
        students.push({ id: lastID + 1, name: new_name, age: new_age });
        // update table
        readData();
    }
}

// ============== End Functions =================
readData();


// btn_delete.onclick = function(){

// } ใช้อันนี้ไม่ได้เพราะเป้นarray


// students.splice(0, 1);
// readData();

// table_body.innerHTML = `<tr>
// <td>${students[0].name}</td>
// <td>${students[0].age}</td>
// <td><button class="btn btn-danger">Delete</button> <button class="btn btn-warning">Edit</button></td>
// </tr> `;0o2qDF FDEDE 