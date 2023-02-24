// class (syntactic sugar)
class studentInfo{
    id;
    name;
    department = 'Computer Science and Engineering'
    university = 'Daffodil International University'
    location;
    constructor(id, name, location){
        this.id = id;
        this.name = name;
        this.location = location;
    }
}

const naimur = new studentInfo(101, 'Naimur Rahman', 'Gazipur, Dhaka');
console.log(naimur);
const shuvo = new studentInfo(102, 'Shuvo Ahammed', 'Mirpur, Dhaka');
console.log(shuvo);