console.log(`task -`)
const listOfStudentsMyVersion = [];
const homeworkResultsMyVersion = []


const Student = function (name, email) {
	const homeworkResultsLocaleMyVersion=[]
	listOfStudentsMyVersion.push({ name, email })
	
	this.getName = function () {
		return name;
	};

	this.getEmail = function () {
		return email;
	};

	this.getHomeworkResults = function () {
		
		return homeworkResultsLocaleMyVersion
		
	};

	this.addHomeworkResult = function (topic, success) {
		homeworkResultsLocaleMyVersion.push({ topic, success })
		
		for (const course of homeworkResultsMyVersion) {
			if (topic === course.topic) {
				return course.results.push({ email, success });
			}
		}
		return homeworkResultsMyVersion.push({ topic, results: [{ email, success }] })
	};
	// console.log(homeworkResultsMyVersion)
	// console.log(homeworkResults)
};



const FrontendLab = function (students, failedLimit) {
	let studentListPrint =[]
	let studentListForTest = []
	const labHomeworkResults = []
	

	this.studentsList = function () {
		return students
	}

	this.printStudentsList = function () {
		students.forEach(({ name: STname, email: STemail }) => {
			console.log(`name:${STname}, email:${STemail}`)

			studentListPrint = labHomeworkResults.filter(({ email }) => email === STemail).map(({ topic, success }) => ({ topic, success }))
			
			console.log(studentListPrint)
		});
		// for (const { name: STname, email: STemail } of students) {
		// 	console.log(`name:${STname}, email:${STemail}`)
			
		// 	studentListPrint = labHomeworkResults.filter(({ email }) => email === STemail).map(({ topic, success }) => ({ topic, success }))
		// 	// studentList2 = studentList.map(({ topic, success }) => ({ topic, success })) - пример как я дошел до готовго варианта :)
		// 	console.log(studentListPrint)
		// }
		
	};

	
	this.addHomeworkResults = function (homeworkResults) {
		const { topic, results } = homeworkResults
		results.forEach(({ email, success }) => labHomeworkResults.push({ email, topic, success }));

		// for (const { email, success } of results) {
		// labHomeworkResults.push({ email, topic, success })
		// }

		// console.log(labHomeworkResults)
	}


	this.printStudentsEligibleForTest = function () {
		console.log(studentListPrint)

		students.forEach(({ name: STname, email: STemail }) => {
			studentListForTest = labHomeworkResults.filter(({ email }) => email === STemail).map(({ topic, success }) => ({ topic, success })).every(elem => elem.success===Boolean(failedLimit))
			if (studentListForTest) {
				console.log(`name:${STname}, email:${STemail}`)
			}
			
		});

		// for (const { name: STname, email: STemail } of students) {

		// 	studentListForTest = labHomeworkResults.filter(({ email }) => email === STemail).map(({ topic, success }) => ({ topic, success })).every(elem => elem.success===Boolean(failedLimit))
		// 	if (studentListForTest) {
		// 		console.log(`name:${STname}, email:${STemail}`)
		// 	}
		// }
	}
	
}
 


const lab = new FrontendLab(listOfStudentsMyVersion, 1)

// console.log(Student)
const artas = new Student('Artas', "artasTEST@gmail.com")
const silvana = new Student('Silvana', "silvanaTEST@gmail.com")
const jaina = new Student('Jaina', "jainaTEST@gmail.com")
const ezera = new Student('Ezera', "ezeraTEST@gmail.com")
const luna = new Student('Luna', "lunaTEST@gmail.com")
const trall = new Student('Trall', "TrallTEST@gmail.com")
const illidan = new Student('illidan', "VoljinTEST@gmail.com")
const rexar = new Student('Rexar', "rexarTEST@gmail.com")
const peon = new Student('Peon', "peonTEST@gmail.com")
const sartarion = new Student('Sartarion', "sartarionTEST@gmail.com")
console.log(listOfStudentsMyVersion)
console.log(`------------------------ TASK 1 ----------------------------`)

console.log(`artas : `,artas)
console.log(`getName : `,artas.getName())
console.log(`getEmail : `,artas.getEmail())
console.log(`addHomeworkResult('html', true) : `, artas.addHomeworkResult('html', true))
console.log(`addHomeworkResult('vue', false) : `, artas.addHomeworkResult('css', true))
console.log(`addHomeworkResults('react', true) : `,artas.addHomeworkResult('react', true))
console.log(`addHomeworkResults('vue', true) : `,artas.addHomeworkResult('vue', true))
console.log(`addHomeworkResults('angular', true) : `,artas.addHomeworkResult('angular', true))
console.log(`getHomeworkResults : `, artas.getHomeworkResults())

console.log(`silvana : `,silvana)
console.log(`getName : `,silvana.getName())
console.log(`getEmail : `,silvana.getEmail())
console.log(`addHomeworkResult('html', true) : `, silvana.addHomeworkResult('html', true))
console.log(`addHomeworkResult('vue', false) : `, silvana.addHomeworkResult('css', true))
console.log(`addHomeworkResults('react', true) : `,silvana.addHomeworkResult('react', true))
console.log(`addHomeworkResults('vue', true) : `,silvana.addHomeworkResult('vue', true))
console.log(`addHomeworkResults('angular', true) : `,silvana.addHomeworkResult('angular', true))
console.log(`getHomeworkResults : `, silvana.getHomeworkResults())

console.log(`jaina : `,jaina)
console.log(`getName : `,jaina.getName())
console.log(`getEmail : `,jaina.getEmail())
console.log(`addHomeworkResult('html', true) : `, jaina.addHomeworkResult('html', true))
console.log(`addHomeworkResult('vue', false) : `, jaina.addHomeworkResult('css', true))
console.log(`addHomeworkResults('react', true) : `,jaina.addHomeworkResult('react', true))
console.log(`addHomeworkResults('vue', true) : `,jaina.addHomeworkResult('vue', true))
console.log(`addHomeworkResults('angular', true) : `,jaina.addHomeworkResult('angular', true))
console.log(`getHomeworkResults : `, jaina.getHomeworkResults())

console.log(`ezera : `,ezera)
console.log(`getName : `,ezera.getName())
console.log(`getEmail : `,ezera.getEmail())
console.log(`addHomeworkResult('html', true) : `, ezera.addHomeworkResult('html', true))
console.log(`addHomeworkResult('vue', false) : `, ezera.addHomeworkResult('css', true))
console.log(`addHomeworkResults('react', true) : `,ezera.addHomeworkResult('react', true))
console.log(`addHomeworkResults('vue', true) : `,ezera.addHomeworkResult('vue', true))
console.log(`addHomeworkResults('angular', true) : `,ezera.addHomeworkResult('angular', false))
console.log(`getHomeworkResults : `, ezera.getHomeworkResults())

console.log(`luna : `,luna)
console.log(`getName : `,luna.getName())
console.log(`getEmail : `,luna.getEmail())
console.log(`addHomeworkResult('html', true) : `, luna.addHomeworkResult('html', true))
console.log(`addHomeworkResult('vue', false) : `, luna.addHomeworkResult('css', true))
console.log(`addHomeworkResults('react', true) : `,luna.addHomeworkResult('react', true))
console.log(`addHomeworkResults('vue', true) : `,luna.addHomeworkResult('vue', true))
console.log(`addHomeworkResults('angular', true) : `,luna.addHomeworkResult('angular', true))
console.log(`getHomeworkResults : `, luna.getHomeworkResults())

console.log(`trall : `,trall)
console.log(`getName : `,trall.getName())
console.log(`getEmail : `,trall.getEmail())
console.log(`addHomeworkResult('html', true) : `, trall.addHomeworkResult('html', true))
console.log(`addHomeworkResult('vue', false) : `, trall.addHomeworkResult('css', false))
console.log(`addHomeworkResults('react', true) : `,trall.addHomeworkResult('react', true))
console.log(`addHomeworkResults('vue', true) : `,trall.addHomeworkResult('vue', false))
console.log(`addHomeworkResults('angular', true) : `,trall.addHomeworkResult('angular', true))
console.log(`getHomeworkResults : `, jaina.getHomeworkResults())

console.log(`illidan : `,illidan)
console.log(`getName : `,illidan.getName())
console.log(`getEmail : `,illidan.getEmail())
console.log(`addHomeworkResult('html', true) : `, illidan.addHomeworkResult('html', true))
console.log(`addHomeworkResult('vue', false) : `, illidan.addHomeworkResult('css', true))
console.log(`addHomeworkResults('react', true) : `,illidan.addHomeworkResult('react', true))
console.log(`addHomeworkResults('vue', true) : `,illidan.addHomeworkResult('vue', true))
console.log(`addHomeworkResults('angular', true) : `,illidan.addHomeworkResult('angular', true))
console.log(`getHomeworkResults : `, illidan.getHomeworkResults())

console.log(`rexar : `,rexar)
console.log(`getName : `,rexar.getName())
console.log(`getEmail : `,rexar.getEmail())
console.log(`addHomeworkResult('html', true) : `, rexar.addHomeworkResult('html', true))
console.log(`addHomeworkResult('vue', false) : `, rexar.addHomeworkResult('css', false))
console.log(`addHomeworkResults('react', true) : `,rexar.addHomeworkResult('react', true))
console.log(`addHomeworkResults('vue', true) : `,rexar.addHomeworkResult('vue', true))
console.log(`addHomeworkResults('angular', true) : `,rexar.addHomeworkResult('angular', false))
console.log(`getHomeworkResults : `, rexar.getHomeworkResults())

console.log(`peon : `,peon)
console.log(`getName : `,peon.getName())
console.log(`getEmail : `,peon.getEmail())
console.log(`addHomeworkResult('html', true) : `, peon.addHomeworkResult('html', true))
console.log(`addHomeworkResult('vue', false) : `, peon.addHomeworkResult('css', false))
console.log(`addHomeworkResults('react', true) : `,peon.addHomeworkResult('react', false))
console.log(`addHomeworkResults('vue', true) : `,peon.addHomeworkResult('vue', false))
console.log(`addHomeworkResults('angular', true) : `,peon.addHomeworkResult('angular', true))
console.log(`getHomeworkResults : `, peon.getHomeworkResults())

console.log(`sartarion : `,sartarion)
console.log(`getName : `,sartarion.getName())
console.log(`getEmail : `,sartarion.getEmail())
console.log(`addHomeworkResult('html', true) : `, sartarion.addHomeworkResult('html', true))
console.log(`addHomeworkResult('vue', false) : `, sartarion.addHomeworkResult('css', false))
console.log(`addHomeworkResults('react', true) : `,sartarion.addHomeworkResult('react', true))
console.log(`addHomeworkResults('vue', true) : `,sartarion.addHomeworkResult('vue', false))
console.log(`addHomeworkResults('angular', true) : `,sartarion.addHomeworkResult('angular', true))
console.log(`getHomeworkResults : `, sartarion.getHomeworkResults())



console.log(`------------------------ TASK 2 ----------------------------`)
console.log(`studentsList ->`)
console.log(lab.studentsList())
console.log(`addHomeworkResults(homeworkResults[0])`)
console.log(lab.addHomeworkResults(homeworkResultsMyVersion[0]))
console.log(`addHomeworkResults(homeworkResults[1])`)
console.log(lab.addHomeworkResults(homeworkResultsMyVersion[1]))
console.log(`addHomeworkResults(homeworkResults[2])`)
console.log(lab.addHomeworkResults(homeworkResultsMyVersion[2]))
console.log(`addHomeworkResults(homeworkResults[3])`)
console.log(lab.addHomeworkResults(homeworkResultsMyVersion[3]))
console.log(`addHomeworkResults(homeworkResults[4])`)
console.log(lab.addHomeworkResults(homeworkResultsMyVersion[4]))

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