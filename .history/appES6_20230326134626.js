class Course {
	constructor(title, instructor, image) {
		this.title = title;
		this.instructor = instructor;
		this.image = image;
	}
}

class UI {
	addCourseToList(course) {
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
	}

	clearControls() {}

	deleteCourse(e) {}
	showAlert(message, className) {}
}
