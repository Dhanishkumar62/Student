let students = [];

const studentForm = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");

studentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;

    const student = {
        id: Date.now(),
        name: name,
        email: email,
        course: course
    };

    students.push(student);

    displayStudents();

    studentForm.reset();
});

function displayStudents(studentData = students) {
    studentList.innerHTML = "";

    studentData.forEach(function (student) {
        const card = document.createElement("div");

        card.className = "student-card";

        card.innerHTML = `
            <h3>${student.name}</h3>
            <p>Email: ${student.email}</p>
            <p>Course: ${student.course}</p>

            <button onclick="deleteStudent(${student.id})">
                Delete
            </button>
        `;

        studentList.appendChild(card);
    });
}

function deleteStudent(id) {
    students = students.filter(function (student) {
        return student.id !== id;
    });

    displayStudents();
}



const searchInput = document.getElementById("search");

searchInput.addEventListener("input", function () {
    const searchValue = searchInput.value.toLowerCase();

    const filteredStudents = students.filter(function (student) {
        return (
            student.name.toLowerCase().includes(searchValue) ||
            student.email.toLowerCase().includes(searchValue) ||
            student.course.toLowerCase().includes(searchValue)
        );
    });

    studentList.innerHTML = "";

    filteredStudents.forEach(function (student) {
        const card = document.createElement("div");

        card.className = "student-card";

        card.innerHTML = `
            <h3>${student.name}</h3>
            <p>Email: ${student.email}</p>
            <p>Course: ${student.course}</p>
        `;

        studentList.appendChild(card);
    });
});