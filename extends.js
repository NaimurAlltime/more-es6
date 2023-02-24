class BasicInfo{
    name;
    university = 'Daffodil International University'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
}


class StudentInfo extends BasicInfo{
    id;
    department = 'Computer Science and Engineering'
    campus = "Ashulia, Savar, Dhaka"
    constructor(id, name, location){
         super(name, location);
         this.id = id;
   }
}

class TeacherInfo extends BasicInfo{
    department;
    constructor(name, location, department){
        super(name, location);
        this.department = department;
    }
}

const naimur = new StudentInfo(102, 'Naimur Rahman', 'Gazipur, Dhaka');
console.log(naimur);

const tuhin = new TeacherInfo('Tuhin Ahammed', 'Uttra, Dhaka', 'CSE');
console.log(tuhin);
const akash = new TeacherInfo('Akash Ahammed', 'Mirpur, Dhaka', 'BBA');
console.log(akash);