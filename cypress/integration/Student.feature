Feature: Student Courses
	Student should be able to view all the courses

	Scenario: Student can see all available programs
		Given A student opens Griffith university page
		When clicks on browse all degrees link
		Then all the available study areas are displayed