console.log(`Function constructop OOP -`)
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
				course.results.push({ email, success });
			}
		}
		homeworkResultsMyVersion.push({ topic, results: [{ email, success }] })
	};

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
	};

	
	this.addHomeworkResults = function (homeworkResults) {
		const { topic, results } = homeworkResults
		results.forEach(({ email, success }) => labHomeworkResults.push({ email, topic, success }));
	}


	this.printStudentsEligibleForTest = function () {


		students.forEach(({ name: STname, email: STemail }) => {
			studentListForTest = labHomeworkResults.filter(({ email }) => email === STemail).map(({ topic, success }) => ({ topic, success })).every(elem => elem.success===Boolean(failedLimit))
			if (studentListForTest) {
				console.log(`name:${STname}, email:${STemail}`)
			}
			
		});

	}
	
}
 


const lab = new FrontendLab(listOfStudentsMyVersion, 1)

const artas = new Student('Artas', "artasTEST@gmail.com")
const silvana = new Student('Silvana', "silvanaTEST@gmail.com")
const jaina = new Student('Jaina', "jainaTEST@gmail.com")
const ezera = new Student('Ezera', "ezeraTEST@gmail.com")
const luna = new Student('Luna', "lunaTEST@gmail.com")
const trall = new Student('Trall', "TrallTEST@gmail.com")
const illidan = new Student('illidan', "illidanTEST@gmail.com")
const rexar = new Student('Rexar', "rexarTEST@gmail.com")
const peon = new Student('Peon', "peonTEST@gmail.com")
const sartarion = new Student('Sartarion', "sartarionTEST@gmail.com")
console.log(listOfStudentsMyVersion)
console.log(`------------------------ TASK 1 ----------------------------`)

console.log(`Create student : Artas ----> `)
console.log(`getName : `,artas.getName())
console.log(`getEmail : `,artas.getEmail())
console.log(`addHomeworkResult('html', true)`, artas.addHomeworkResult('html', true))
console.log(`addHomeworkResult('vue', true)`, artas.addHomeworkResult('css', true))
console.log(`addHomeworkResults('react', true)`,artas.addHomeworkResult('react', true))
console.log(`addHomeworkResults('vue', true)`,artas.addHomeworkResult('vue', true))
console.log(`addHomeworkResults('angular', true)`,artas.addHomeworkResult('angular', true))
console.log(`getHomeworkResults : `, artas.getHomeworkResults())

console.log(`Create student : silvana ----> `)
console.log(`getName : `,silvana.getName())
console.log(`getEmail : `,silvana.getEmail())
console.log(`addHomeworkResult('html', true)  `, silvana.addHomeworkResult('html', true))
console.log(`addHomeworkResult('vue', true)  `, silvana.addHomeworkResult('css', true))
console.log(`addHomeworkResults('react', true) `,silvana.addHomeworkResult('react', true))
console.log(`addHomeworkResults('vue', true)  `,silvana.addHomeworkResult('vue', true))
console.log(`addHomeworkResults('angular', true)  `,silvana.addHomeworkResult('angular', true))
console.log(`getHomeworkResults : `, silvana.getHomeworkResults())

console.log(`Create student : jaina ----> `)
console.log(`getName : `,jaina.getName())
console.log(`getEmail : `,jaina.getEmail())
console.log(`addHomeworkResult('html', true)  `, jaina.addHomeworkResult('html', true))
console.log(`addHomeworkResult('vue', true) `, jaina.addHomeworkResult('css', true))
console.log(`addHomeworkResults('react', true)  `,jaina.addHomeworkResult('react', true))
console.log(`addHomeworkResults('vue', true)  `,jaina.addHomeworkResult('vue', true))
console.log(`addHomeworkResults('angular', true)  `,jaina.addHomeworkResult('angular', true))
console.log(`getHomeworkResults : `, jaina.getHomeworkResults())

console.log(`Create student : ezera ----> `)
console.log(`getName : `,ezera.getName())
console.log(`getEmail : `,ezera.getEmail())
console.log(`addHomeworkResult('html', true)  `, ezera.addHomeworkResult('html', true))
console.log(`addHomeworkResult('vue', true)  `, ezera.addHomeworkResult('css', true))
console.log(`addHomeworkResults('react', true)  `,ezera.addHomeworkResult('react', true))
console.log(`addHomeworkResults('vue', true)  `,ezera.addHomeworkResult('vue', true))
console.log(`addHomeworkResults('angular', false)  `,ezera.addHomeworkResult('angular', false))
console.log(`getHomeworkResults : `, ezera.getHomeworkResults())

console.log(`Create student : luna ----> `)
console.log(`getName : `,luna.getName())
console.log(`getEmail : `,luna.getEmail())
console.log(`addHomeworkResult('html', true)  `, luna.addHomeworkResult('html', true))
console.log(`addHomeworkResult('vue', true)  `, luna.addHomeworkResult('css', true))
console.log(`addHomeworkResults('react', true)  `,luna.addHomeworkResult('react', true))
console.log(`addHomeworkResults('vue', true)  `,luna.addHomeworkResult('vue', true))
console.log(`addHomeworkResults('angular', true)  `,luna.addHomeworkResult('angular', true))
console.log(`getHomeworkResults : `, luna.getHomeworkResults())

console.log(`Create student : trall ----> `)
console.log(`getName : `,trall.getName())
console.log(`getEmail : `,trall.getEmail())
console.log(`addHomeworkResult('html', true)  `, trall.addHomeworkResult('html', true))
console.log(`addHomeworkResult('vue', false)  `, trall.addHomeworkResult('css', false))
console.log(`addHomeworkResults('react', true)  `,trall.addHomeworkResult('react', true))
console.log(`addHomeworkResults('vue', false)  `,trall.addHomeworkResult('vue', false))
console.log(`addHomeworkResults('angular', true)  `,trall.addHomeworkResult('angular', true))
console.log(`getHomeworkResults : `, jaina.getHomeworkResults())

console.log(`Create student : illidan ----> `)
console.log(`getName : `,illidan.getName())
console.log(`getEmail : `,illidan.getEmail())
console.log(`addHomeworkResult('html', true)  `, illidan.addHomeworkResult('html', true))
console.log(`addHomeworkResult('vue', true)  `, illidan.addHomeworkResult('css', true))
console.log(`addHomeworkResults('react', true)  `,illidan.addHomeworkResult('react', true))
console.log(`addHomeworkResults('vue', true) `,illidan.addHomeworkResult('vue', true))
console.log(`addHomeworkResults('angular', true)  `,illidan.addHomeworkResult('angular', true))
console.log(`getHomeworkResults : `, illidan.getHomeworkResults())

console.log(`Create student : rexar ----> `)
console.log(`getName : `,rexar.getName())
console.log(`getEmail : `,rexar.getEmail())
console.log(`addHomeworkResult('html', true)  `, rexar.addHomeworkResult('html', true))
console.log(`addHomeworkResult('vue', false)  `, rexar.addHomeworkResult('css', false))
console.log(`addHomeworkResults('react', true)  `,rexar.addHomeworkResult('react', true))
console.log(`addHomeworkResults('vue', true)  `,rexar.addHomeworkResult('vue', true))
console.log(`addHomeworkResults('angular', false) `,rexar.addHomeworkResult('angular', false))
console.log(`getHomeworkResults : `, rexar.getHomeworkResults())

console.log(`Create student : peon ----> `)
console.log(`getName : `,peon.getName())
console.log(`getEmail : `,peon.getEmail())
console.log(`addHomeworkResult('html', true)  `, peon.addHomeworkResult('html', true))
console.log(`addHomeworkResult('vue', false)  `, peon.addHomeworkResult('css', false))
console.log(`addHomeworkResults('react', false)  `,peon.addHomeworkResult('react', false))
console.log(`addHomeworkResults('vue', false)  `,peon.addHomeworkResult('vue', false))
console.log(`addHomeworkResults('angular', false)  `,peon.addHomeworkResult('angular', false))
console.log(`getHomeworkResults : `, peon.getHomeworkResults())

console.log(`Create student : sartarion ----> `)
console.log(`getName : `,sartarion.getName())
console.log(`getEmail : `,sartarion.getEmail())
console.log(`addHomeworkResult('html', true)  `, sartarion.addHomeworkResult('html', true))
console.log(`addHomeworkResult('vue', false)  `, sartarion.addHomeworkResult('css', false))
console.log(`addHomeworkResults('react', true)  `,sartarion.addHomeworkResult('react', true))
console.log(`addHomeworkResults('vue', false)  `,sartarion.addHomeworkResult('vue', false))
console.log(`addHomeworkResults('angular', true) `,sartarion.addHomeworkResult('angular', true))
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
console.log(`printStudentsEligibleForTest ->`)
console.log(lab.printStudentsEligibleForTest())
