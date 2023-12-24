function showCreateClassForm() {
    var modal = document.getElementById('createClass');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeCreateClassForm() {
    var modal = document.getElementById('createClass');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

function showAddStudentForm() {
    var modal = document.getElementById('addStudent');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeAddStudentForm() {
    var modal = document.getElementById('addStudent');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

var classes = [];

function addClass() {
    var className = document.getElementById('className').value;
    var studentsCount = document.getElementById('studentsCount').value;

    if (className && studentsCount) {
        var newClass = {
            name: className,
            studentsCount: studentsCount
        };

        classes.push(newClass);

        document.getElementById('className').value = '';
        document.getElementById('studentsCount').value = '';

        updateClassList();
    }
}

function updateClassList() {
    var classListContainer = document.querySelector('.class-list');
    classListContainer.innerHTML = '';

    var headerRow = document.createElement('div');
    headerRow.className = 'row';
    headerRow.innerHTML = '<div class="column"><h3>Название</h3></div><div class="column"><h3>Кол-во</h3></div>';
    classListContainer.appendChild(headerRow);

    classes.forEach(function (classItem) {
        var classRow = document.createElement('div');
        classRow.className = 'row';
        classRow.innerHTML = '<div class="column">' + classItem.name + '</div><div class="column">' + '0/' + classItem.studentsCount + 
            '</div><div class="column"><button class="button new-student-button" onclick="showAddStudentForm()">+</button></div>';
        classListContainer.appendChild(classRow);
    });
}

document.querySelector('.create-class-button').addEventListener('click', addClass);