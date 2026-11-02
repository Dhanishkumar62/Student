
let students = [];

const studentForm = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");
const searchInput = document.getElementById("search");

// Add Student
studentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const course = document.getElementById("course").value.trim();

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

// Display Students
function displayStudents(studentData = students) {
    studentList.innerHTML = "";

    studentData.forEach(function (student) {
        const card = document.createElement("div");

        card.className = "student-card";

        card.innerHTML = `
            <h3>${student.name}</h3>
            <p>Email: ${student.email}</p>
            <p>Course: ${student.course}</p>

            <button onclick="editStudent(${student.id})">
                Edit
            </button>

            <button onclick="deleteStudent(${student.id})">
                Delete
            </button>
        `;

        studentList.appendChild(card);
    });
}

// Delete Student
function deleteStudent(id) {
    students = students.filter(function (student) {
        return student.id !== id;
    });

    displayStudents();
}

// Search Student
searchInput.addEventListener("input", function () {
    const searchValue = searchInput.value.toLowerCase();

    const filteredStudents = students.filter(function (student) {
        return (
            student.name.toLowerCase().includes(searchValue) ||
            student.email.toLowerCase().includes(searchValue) ||
            student.course.toLowerCase().includes(searchValue)
        );
    });

    displayStudents(filteredStudents);
});

// Edit Student
function editStudent(id) {
    const student = students.find(function (s) {
        return s.id === id;
    });

    if (!student) return;

    const newName = prompt("Enter new name:", student.name);

    if (newName === null || !newName.trim()) return;

    const newEmail = prompt("Enter new email:", student.email);

    if (newEmail === null || !newEmail.trim()) return;

    const newCourse = prompt("Enter new course:", student.course);

    if (newCourse === null || !newCourse.trim()) return;

    student.name = newName.trim();
    student.email = newEmail.trim();
    student.course = newCourse.trim();

    displayStudents();
}