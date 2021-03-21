const db = require("../data/db-config");

module.exports = {
    getall,
    add,
}


function getall(){
    return db("messages").select("id", "sender", "email", "phone", "message")
}

async function add(message){
    const [id] = await db("messages").insert(message)
    return db('messages').where({ id }).first()
}