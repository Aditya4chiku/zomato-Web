const Student=require('../model/student.model');
module.exports={
    insert,
    fetch
}

function insert(student)
{
   return new Student(student).save()
}

function fetch(student)
{
   return new Student(student).fetch();
}