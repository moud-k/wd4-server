/*==================================================
/database/utils/seedDB.js

It seeds the database with several initial students and campuses.
==================================================*/
const { Campus, Student } = require('../models');  // Import database models

// Seed database
const seedDB = async () => {
	// Create a new campus
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		address: "695 Park Ave, New York, NY 10065",
		description: "This is a school in New York, New York.",
        imageurl: "https://media.istockphoto.com/id/1267814463/vector/graduation-cap-and-diploma-scroll-icon.jpg?s=612x612&w=0&k=20&c=rgloy0hCuYhYZazMoFBMgzf5JakCs-0iUJMTWGivD1Y="
	});
	// Create a new campus
	const dummy_campus2 = await Campus.create({
		name: "Queens College",
		address: "65-30 Kissena Blvd, Queens, NY 11367",
		description: "This is a school in Queens, New York.",
        imageurl: "https://media.istockphoto.com/id/1267814463/vector/graduation-cap-and-diploma-scroll-icon.jpg?s=612x612&w=0&k=20&c=rgloy0hCuYhYZazMoFBMgzf5JakCs-0iUJMTWGivD1Y="
	});
	// Create a new campus
	const dummy_campus3 = await Campus.create({
		name: "Brooklyn College",
		address: "2900 Bedford Ave, Brooklyn, NY 11210",
		description: "This is a school in Brooklyn, New York.",
        imageurl: "https://media.istockphoto.com/id/1267814463/vector/graduation-cap-and-diploma-scroll-icon.jpg?s=612x612&w=0&k=20&c=rgloy0hCuYhYZazMoFBMgzf5JakCs-0iUJMTWGivD1Y="
	});
	
	// Create a new student for a campus
	const dummy_student = await Student.create({
		firstname: "Joe",
      lastname: "Smith",
      email: "joesmith@gmail.com",
      imageurl: "https://media.istockphoto.com/id/1267814463/vector/graduation-cap-and-diploma-scroll-icon.jpg?s=612x612&w=0&k=20&c=rgloy0hCuYhYZazMoFBMgzf5JakCs-0iUJMTWGivD1Y="

	});
	// Create a new student for a campus
	const dummy_student2 = await Student.create({
		firstname: "Mary",
      lastname: "Johnson",
      email: "maryjohnson@gmail.com",
      imageurl: "https://media.istockphoto.com/id/1267814463/vector/graduation-cap-and-diploma-scroll-icon.jpg?s=612x612&w=0&k=20&c=rgloy0hCuYhYZazMoFBMgzf5JakCs-0iUJMTWGivD1Y="

	});

	// Add students to campuses
	await dummy_student.setCampus(dummy_campus);
	await dummy_student2.setCampus(dummy_campus2);
}

// Export the database seeding function
module.exports = seedDB;