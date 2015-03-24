Cat = function(name, owner){
  this.name = name;
  this.owner = owner;

};

Cat.prototype.cuteStatement = function(){
  return this.name + " loves " + this.owner;
};

Student = function(fname, lname){
  this.fname = fname;
  this.lname = lname;
  this.courses;
};

Student.prototype.name = function(){
  return this.fname + " " + this.lname;
};

Student.prototype.courses = function(){
  return this.courses;
};

Student.prototype.enroll = function(course){
  this.courses = this.courses.concat([course]);
}

Student.prototype.courseLoad = function (){
  var hash = {};
  func = function(course){
    if(typeof hash[course.department] === "Undefined"){
      hash[course.department] = course.credits;
    }else{
      hash[course.department] += course.credits;
    }

  }
  this.courses.forEach(func);
  return hash;

}

Course = function(name, department, credits){
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students;
};

Course.prototype.students = function(){
  return this.students;
}

Course.prototype.addStudent = function(student){
  this.students = this.students.concat(student);
}
