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

var classes = [];

function addClass() {
    var className = document.getElementById('className').value;
    var studentsCount = document.getElementById('students-count').value;

    if (className && studentsCount) {
        var newClass = {
            name: className,
            studentsCount: studentsCount
        };

        classes.push(newClass);

        document.getElementById('className').value = '';
        document.getElementById('students-count').value = '';

        updateClassList();
    }
}

function updateClassList() {
    var classListContainer = document.querySelector('.class-list');
    classListContainer.innerHTML = '';

    classes.forEach(function (classItem) {
        var classElement = document.createElement('div');
        classElement.textContent = classItem.name + ' - ' + classItem.studentsCount + ' учащихся';
        classListContainer.appendChild(classElement);
    });
}

document.querySelector('.create-class-button').addEventListener('click', addClass);