const db = require("../data/db-config");


module.exports = {
    getall,
    add,
}


function getall(){
    return db("projects").select("id", "name", "description", "link")
}

async function add(project){
    const [id] = await db("projects").insert(project)
    return db('projects').where({ id }).first()
}