const student = {
    name: 'naimur',
    id: '221208',
    marks: {
        math: 89,
        physics: 82,
        chemistry: 90
    }
}

// console.log(student.name);
 //dot notation
const physics = student.marks.physics;
// console.log(physics);

// [] notation 
const math = student['marks']['math'];
// console.log(math);

const subject = 'math';
const biologyMark = student['marks'][subject];
// console.log(biologyMark);
