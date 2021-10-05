function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
};
let student1 = new Student('Людмила', 'женский', 29);
let student2 = new Student('Егор', 'мужской', 31);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = [mark];
  } else {
    this.marks.push(mark)
    };
};
Student.prototype.addMarks = function (...mark) {
  if(this.marks === undefined){ 
    this.marks = mark;
  } else {
    this.marks.push(...mark)
    };
};
Student.prototype.getAverage = function () {
  let sum = 0;
  for(let i in this.marks) {
    sum += this.marks[i];
  };
  let avg = sum / this.marks.length;
  return avg;
  };
  Student.prototype.exclude = function (reason) {
    delete this.marks;
    delete this.subject;
    this.excluded = reason;
  };