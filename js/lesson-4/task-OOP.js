console.log(`task - OOP`)
const listOfStudents = [
	{
		name: 'John',
		email: 'john@gmail.com',
	},
	{
		name: 'Jane',
		email: 'jane@gmail.com',
	},
	{
		name: 'Jack',
		email: 'jack@gmail.com',
	},
	{
		name: 'Mary',
		email: 'mary@gmail.com',
	},
	{
		name: 'Robert',
		email: 'robert@gmail.com',
	},
	{
		name: 'Ann',
		email: 'ann@gmail.com',
	},
	{
		name: 'Brad',
		email: 'brad@gmail.com',
	},
	{
		name: 'Lisa',
		email: 'lisa@gmail.com',
	},
	{
		name: 'Matthew',
		email: 'matthew@gmail.com',
	},
	{
		name: 'Sandra',
		email: 'sandra@gmail.com',
	},
];

const homeworkResults = [
	{
		topic: 'HTML Basics',
		results: [
			{
				email: 'john@gmail.com',
				success: true,
			},
			{
				email: 'jane@gmail.com',
				success: true,
			},
			{
				email: 'jack@gmail.com',
				success: true,
			},
			{
				email: 'mary@gmail.com',
				success: true,
			},
			{
				email: 'robert@gmail.com',
				success: true,
			},
			{
				email: 'ann@gmail.com',
				success: true,
			},
			{
				email: 'brad@gmail.com',
				success: true,
			},
			{
				email: 'lisa@gmail.com',
				success: true,
			},
			{
				email: 'matthew@gmail.com',
				success: true,
			},
			{
				email: 'sandra@gmail.com',
				success: true,
			},
		],
	},
	{
		topic: 'CSS Basics',
		results: [
			{
				email: 'john@gmail.com',
				success: false,
			},
			{
				email: 'jane@gmail.com',
				success: true,
			},
			{
				email: 'jack@gmail.com',
				success: true,
			},
			{
				email: 'mary@gmail.com',
				success: false,
			},
			{
				email: 'robert@gmail.com',
				success: true,
			},
			{
				email: 'ann@gmail.com',
				success: true,
			},
			{
				email: 'brad@gmail.com',
				success: true,
			},
			{
				email: 'lisa@gmail.com',
				success: false,
			},
			{
				email: 'matthew@gmail.com',
				success: true,
			},
			{
				email: 'sandra@gmail.com',
				success: true,
			},
		],
	},
	{
		topic: 'JS Basics',
		results: [
			{
				email: 'john@gmail.com',
				success: true,
			},
			{
				email: 'jane@gmail.com',
				success: false,
			},
			{
				email: 'jack@gmail.com',
				success: true,
			},
			{
				email: 'mary@gmail.com',
				success: true,
			},
			{
				email: 'robert@gmail.com',
				success: true,
			},
			{
				email: 'ann@gmail.com',
				success: false,
			},
			{
				email: 'brad@gmail.com',
				success: true,
			},
			{
				email: 'lisa@gmail.com',
				success: true,
			},
			{
				email: 'matthew@gmail.com',
				success: false,
			},
			{
				email: 'sandra@gmail.com',
				success: true,
			},
		],
	},
	{
		topic: 'DOM',
		results: [
			{
				email: 'john@gmail.com',
				success: false,
			},
			{
				email: 'jane@gmail.com',
				success: true,
			},
			{
				email: 'jack@gmail.com',
				success: true,
			},
			{
				email: 'mary@gmail.com',
				success: true,
			},
			{
				email: 'robert@gmail.com',
				success: false,
			},
			{
				email: 'ann@gmail.com',
				success: true,
			},
			{
				email: 'brad@gmail.com',
				success: true,
			},
			{
				email: 'lisa@gmail.com',
				success: true,
			},
			{
				email: 'matthew@gmail.com',
				success: false,
			},
			{
				email: 'sandra@gmail.com',
				success: true,
			},
		],
	},
	{
		topic: 'AJAX',
		results: [
			{
				email: 'john@gmail.com',
				success: false,
			},
			{
				email: 'jane@gmail.com',
				success: true,
			},
			{
				email: 'jack@gmail.com',
				success: false,
			},
			{
				email: 'mary@gmail.com',
				success: true,
			},
			{
				email: 'robert@gmail.com',
				success: true,
			},
			{
				email: 'ann@gmail.com',
				success: false,
			},
			{
				email: 'brad@gmail.com',
				success: true,
			},
			{
				email: 'lisa@gmail.com',
				success: true,
			},
			{
				email: 'matthew@gmail.com',
				success: true,
			},
			{
				email: 'sandra@gmail.com',
				success: true,
			},
		],
	},
];

// console.log(homeworkResults.flatMap(student => student.results))

// const Student = function (name, email) {
//     this._homeworkResults = []  
    
//     this._name = name
//     this._email = email

//     Student.prototype.getName = function () {
//         return this._name
//     }
//     Student.prototype.getEmail = function () {
//             return this._email
//     }
         
//     Student.prototype.getHomeworkResults = function () {
//             return this._homeworkResults
//     }
//     Student.prototype.addHomeworkResult = function (topic, success) {
//        return this._homeworkResults.push({topic,success})
        
//     }

// }
const Student = function (name, email) {
	const homeworkResults = [];

	this.getName = function () {
		return name;
	};

	this.getEmail = function () {
		return email;
	};

	this.getHomeworkResults = function () {
		return homeworkResults;
	};

	this.addHomeworkResult = function (topic, success) {
		homeworkResults.push({ topic, success });
	};
};



const FrontendLab = function (students, failedLimit) {
	let studentList =[]
	let studentList2 =[]
	const printSlist = []

	this.studentsList = function () {
		return students
	}

	this.printStudentsList = function () {
		
		for (const { name: STname, email: STemail } of students) {
			console.log(`name:${STname}, email:${STemail}`)
			
			studentList = printSlist.filter(({ email }) => email === STemail).map(({ topic, success }) => ({ topic, success }))
			// studentList2 = studentList.map(({ topic, success }) => ({ topic, success })) - пример как я дошел до готовго варианта :)
			console.log(studentList)
		}
		
	};

	
	this.addHomeworkResults = function (homeworkResults) {
		const { topic, results } = homeworkResults
		for (const { email, success } of results) {
			printSlist.push({ email, topic, success })
		}
	}


	this.printStudentsEligibleForTest = function () {

		for (const { name: STname, email: STemail } of students) {

			studentList2 = printSlist.filter(({ email }) => email === STemail).map(({ topic, success }) => ({ topic, success })).every(elem => elem.success===Boolean(failedLimit))
			if (studentList2) {
				console.log(`name:${STname}, email:${STemail}`)
			}
		}
	}
	
}
 


const lab = new FrontendLab(listOfStudents, 1)

// console.log(Student)
const student = new Student('mango', "mangoTEST@gmail.com")
const student2 = new Student('mango2', "mango2TEST@gmail.com")
console.log(`------------------------ TASK 1 ----------------------------`)
console.log(`student1 : `,student)
console.log(`getName : `,student.getName())
console.log(`getEmail : `,student.getEmail())
console.log(`addHomeworkResult('html', true) : `,student.addHomeworkResult('html', true))
console.log(`getHomeworkResults : `,student.getHomeworkResults())
console.log(`student2 : `,student2)
console.log(`getName : `,student2.getName())
console.log(`getEmail : `,student2.getEmail())
console.log(`addHomeworkResult('vue', false) : `,student2.addHomeworkResult('vue', false))
console.log(`addHomeworkResults('react', true) : `,student2.addHomeworkResult('react', true))
console.log(`getHomeworkResults : `,student2.getHomeworkResults())
console.log(`------------------------ TASK 2 ----------------------------`)
console.log(`studentsList ->`)
console.log(lab.studentsList())
console.log(`addHomeworkResults(homeworkResults[0])`)
console.log(lab.addHomeworkResults(homeworkResults[0]))
console.log(`addHomeworkResults(homeworkResults[1])`)
console.log(lab.addHomeworkResults(homeworkResults[1]))
console.log(`addHomeworkResults(homeworkResults[2])`)
console.log(lab.addHomeworkResults(homeworkResults[2]))
console.log(`addHomeworkResults(homeworkResults[3])`)
console.log(lab.addHomeworkResults(homeworkResults[3]))
console.log(`addHomeworkResults(homeworkResults[4])`)
console.log(lab.addHomeworkResults(homeworkResults[4]))

console.log(`printStudentsList ->`)
console.log(lab.printStudentsList())
// console.log(lab.printStudentsList())
// console.log(lab.printStudentsList())
console.log(`printStudentsEligibleForTest ->`)
console.log(lab.printStudentsEligibleForTest())


















// =======================================

// function isEqual(object1, object2) {
//   const props1 = Object.getOwnPropertyNames(object1);
//   const props2 = Object.getOwnPropertyNames(object2);

//   if (props1.length !== props2.length) {
//     return false;
//   }

//   for (let i = 0; i < props1.length; i += 1) {
//     const prop = props1[i];

//     if (object1[prop] !== object2[prop]) {
//       return false;
//     }
//   }

//   return true;
// }

// 7. Write a function that formats a date in such format "YYYY/MM/DD HH:mm".

// formatDate(new Date('6/15/2019 09:15:00')) // "2018/06/15 09:15"
// formatDate(new Date()) // "2020/04/07 12:56" // gets current local time

// !!! Using built–in array or object methods(besides push, length and date methods) is forbidden !!!

// const one = new Date().toString()
// const two = new Date('6/15/2019 09:15:00').toString()
// console.log(one)
// console.log(two)
// console.log(one === two)

// function formatDate(param) {
	
// 	const ress = (param.toString() === new Date().toString())
// 		? `${new Date().getFullYear()}/${String(new Date().getMonth() + 1).padStart(2, 0)}/${String(new Date().getDate()).padStart(2, 0)} ${String(new Date().getHours()).padStart(2, 0)}:${String(new Date().getMinutes()).padStart(2, 0)}` : `${param.getFullYear() - 1}/${String(param.getMonth() + 1).padStart(2, 0)}/${String(param.getDate()).padStart(2, 0)} ${String(param.getHours()).padStart(2, 0)}:${String(param.getMinutes()).padStart(2, 0)}`
// 	return ress
// }

// function formatDate(param) {
// 	const ress = (param.toString() === new Date().toString())
// 		? `${String(new Date().getHours()).padStart(2, 0)}:${String(new Date().getMinutes()).padStart(2, 0)}` : `${param.getFullYear() - 1}/${String(param.getMonth() + 1).padStart(2, 0)}/${String(param.getDate()).padStart(2, 0)} ${String(param.getHours()).padStart(2, 0)}:${String(param.getMinutes()).padStart(2, 0)}`
// 	return ress
// }

// function formatDate(param) {
// 	// const ress = (param.toString() === new Date().toString())
// 	// 	? `${String(new Date().getHours()).padStart(2, 0)}:${String(new Date().getMinutes()).padStart(2, 0)}` : `${param.getFullYear() - 1}/${String(param.getMonth() + 1).padStart(2, 0)}/${String(param.getDate()).padStart(2, 0)} ${String(param.getHours()).padStart(2, 0)}:${String(param.getMinutes()).padStart(2, 0)}`
// 	// return ress
// }
// function formatDate(param) {

// 	const ress = (param.toString() === new Date().toString())
// 		? param.toTimeString()
// 		: `${param.getFullYear() - 1}/${String(param.getMonth() + 1).padStart(2, 0)}/${String(param.getDate()).padStart(2, 0)} ${String(param.getHours()).padStart(2, 0)}:${String(param.getMinutes()).padStart(2, 0)}`
// 	return ress
// }

// function formatDate(param) {
// 	// const ress = (param.toString() === new Date().toString())

// 	const option =  {
		
// 		year: "numeric",
// 		month: "narrow",
// 		day: "numeric",
// 		hour: "numeric",
// 		minute: "numeric",
// 		second: "numeric",

// 	}
// 	return param.toLocaleDateString('en-US',option).replace(/([1-901-90]+)\s([1-901-90]+)/,'$2, $1')
	
// // }
// function formatDate(param) {

// 	const formatedDate = param.toISOString()

// 	if (formatedDate !== new Date().toString()) {
// 		const yearMinusOne = param.getFullYear()-1
// 		return yearMinusOne + formatedDate
// 			.replace(/[-]/g, '/')
// 			.replace(/\T/, ' ')
// 			.slice(4, formatedDate.length - 8)
// 	}

// 	return formatedDate
// 		.replace(/\-/g, '/')
// 		.replace(/\T/, ' ')
// 		.slice(0, formatedDate.length - 8)
// }

// console.log(formatDate(new Date()))
// console.log(formatDate(new Date('6/15/2019 09:15')))
// console.log(formatDate(new Date('6/15/2000 09:15:00')))
// console.dir(new Date())
// console.dir(new Date().toTimeString())
// const a = new Date()
// const b = Date()
// console.log(typeof a)
// console.log(typeof b)

// ==== +- variant ====
// this.printStudentsList = function () {
// 		let studentList = []
// 		for (const { name: STname, email: STemail } of students) {
// 			console.log(STname, STemail)
			
// 			studentList = printSlist.filter(({ email }) => email === STemail)
// 			for (const eachRes of studentList) {
// 				// console.log(eachRes.email)
// 				delete eachRes.email
// 			}	
// 		}
// 		return studentList
// 	};