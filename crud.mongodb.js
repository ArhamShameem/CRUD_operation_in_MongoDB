use("crudDB")

//create
db.createCollection("courses")

//Insert
db.courses.insertOne({
    name:"Arham Shameem",
    post:"Software Developer",
    Salary:"$10000"

})
db.courses.insertMany([
    {
      "name": "Arham Shameem",
      "post": "Software Developer",
      "salary": "$10000"
    },
    {
      "name": "John Doe",
      "post": "Frontend Developer",
      "salary": "$9000"
    },
    {
      "name": "Jane Smith",
      "post": "Backend Developer",
      "salary": "$9500"
    },
    {
      "name": "Alex Johnson",
      "post": "UI/UX Designer",
      "salary": "$8500"
    },
    {
      "name": "Emily White",
      "post": "Data Scientist",
      "salary": "$11000"
    },
    {
      "name": "Michael Brown",
      "post": "DevOps Engineer",
      "salary": "$10500"
    },
    {
      "name": "Sophia Miller",
      "post": "Mobile App Developer",
      "salary": "$9200"
    },
    {
      "name": "William Taylor",
      "post": "Systems Analyst",
      "salary": "$9800"
    },
    {
      "name": "Ella Davis",
      "post": "QA Engineer",
      "salary": "$8700"
    },
    {
      "name": "James Wilson",
      "post": "Network Administrator",
      "salary": "$9400"
    }
  ]
  )

  //Retrieve
  let a= db.courses.find({
salary:"$9000"
  })
//   console.log(a)
//   console.log(a.count())
  //for returning all docs
//   console.log(a.toArray())
let b=db.courses.findOne({salary:"$9000"})

console.log(b)

//UPDATE

db.courses.updateOne({salary:"$9000"},{$set:{salary:"$8000"}})

//DELETE
db.courses.deleteOne({salary:"$9200"})