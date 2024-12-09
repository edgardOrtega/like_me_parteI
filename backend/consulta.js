const { Pool } = require("pg");
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "12345",
  database: "likeme",
  allowExitOnIdle: true,
});

const obtenerPosts = async () => {
    try{
        const { rows } = await pool.query("SELECT * FROM posts");
        console.log(rows);
        return rows;}
    catch(error){
        console.error("Error al obtener posts", error.message);
    }

};

const agregarPosts = async (titulo,url,descripcion,like) => {
    try{
        const consulta = "INSERT INTO  posts values (DEFAULT, $1,$2,$3,$4)";
        const values = [titulo,url,descripcion,like];
        const result = await pool.query(consulta, values);
        console.log("Viaje agregado");}
    catch(error){
        console.error("Error al agregar post", error.message);
    }

};

module.exports = { obtenerPosts,agregarPosts };
