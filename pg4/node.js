const { MongoClient, ObjectId } = require('mongodb');


const url = 'mongodb://localhost:27017';

const dbName = 'college';

const client = new MongoClient(url);

async function connectDB() {
    try {
        await client.connect();
        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}

async function insertStudent(student) {
    const db = client.db(dbName);

    try {
        const result = await db.collection('student').insertOne(student);

        console.log(`Student with id ${result.insertedId} inserted successfully`);

    } catch (err) {
        console.error('Error inserting student:', err);
    }
}

async function findAllStudents() {
    const db = client.db(dbName);

    try {
        const students = await db.collection('student').find({}).toArray();

        console.log('All students:', students);

    } catch (err) {
        console.error('Error finding students:', err);
    }
}

async function updateStudent() {
    const db = client.db(dbName);

    try {
        const result = await db.collection('student').updateOne(
            { _id: new ObjectId('6a19d399b1c721f96f0019ea') },
            { $set: { Dept: "CSE" } }
        );

        console.log('Student data updated successfully');

    } catch (err) {
        console.error('Error updating student:', err);
    }
}

async function deleteStudent(Id) {
    const db = client.db(dbName);

    try {
        const result = await db.collection('student').deleteOne(
            { _id: new ObjectId(Id) }
        );

        console.log(`Student with id ${Id} deleted successfully`);

    } catch (err) {
        console.error('Error deleting student:', err);
    }
}

connectDB()
.then(async () => {

    
    const exampleStudent = {
        name: 'Monisha',
        age: 18,
        cgpa: 6.38,
        Dept: 'CSE'
    };

    await insertStudent(exampleStudent);

    
    await findAllStudents();

    
    await updateStudent();

    
    const studentIdToDelete = '6a19d1ecb1c721f96f0019e9';

    await deleteStudent(studentIdToDelete);

    
    client.close();

});