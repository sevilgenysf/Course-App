// Course constructor
function Course(title, instructor, image) {
	this.title = title;
	this.instructor = instructor;
	this.image = image;
}

// UI constructor
function UI() {}

UI.prototype.addCourseToList = function (course) {
	const list = document.getElementById('course-list');

	var html = `
         <tr>
            <td><img src="img/${course.image}"/></td>
            <td>${course.title}</td>
            <td>${course.instructor}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
         </tr>    
    `;

	list.innerHTML += html;
};

UI.prototype.clearControls = function () {
	const title = (document.getElementById('title').value = '');
	const instructor = (document.getElementById('instructor').value = '');
	const image = (document.getElementById('image').value = '');
};

UI.prototype.deleteCourse = function (e) {
	if (e.classList.contains('delete')) {
		e.parentElement.parentElement.remove();
	}
};

UI.prototype.showAlert = function (message, className) {
	let alert = `
	<div class="alert alert-${className}">
		${message}
	</div>
	`;

	const row = document.querySelector('.row');

	row.insertAdjacentHTML('beforeend', alert);
};

document.getElementById('new-course').addEventListener('submit', function (e) {
	const title = document.getElementById('title').value;
	const instructor = document.getElementById('instructor').value;
	const image = document.getElementById('image').value;

	// create course object
	const course = new Course(title, instructor, image);

	// create UI
	const ui = new UI();

	if (title === '' || instructor === '' || image === '') {
		ui.showAlert('Please complete the from', 'worning');
	} else {
		// add course to list
		ui.addCourseToList(course);

		// clear controls
		ui.clearControls();
		ui.showAlert('Please complete the from', 'success');
	}

	e.preventDefault();
});

document.getElementById('course-list').addEventListener('click', function (e) {
	const ui = new UI();
	ui.deleteCourse(e.target);
	ui.showAlert('the course has been deleted', 'danger');
});