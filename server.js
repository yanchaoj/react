require("dotenv").config();
const express = require("express");
const pool = require("./db/conn");
const app = express();
const port=8000;

app.use(express.static("public"));
app.use(express.json());

// app.get("/api/students", (_, res) => {
//   db.query("SELECT * FROM student").then((data) => {
//     res.json(data.rows);
//   });
// });

app.get("/api/users", async (req, res) => {
	try {
		
		const result = await pool.query('SELECT * FROM userinfo')
		
     	res.json(result.rows);
	
	} catch (err) {
		console.error(err);
		res.send("Error " + err);
	}

});

// app.get("/api/users/:name", async (req, res) => {
// 	try {
		
// 		const result = await pool.query('SELECT * FROM userinfo WHERE name= $1',[req.params.name]);

// 		if(result.rows.length === 0){
//             res.send("user doesn\'t exit, please create a new user first!")
// 			return undefined;
// 		}
	

// 		res.json(result.rows);
	
// 	} catch (err) {
// 		console.error(err);
// 		res.send("Error " + err);
// 	}

// });


// app.post("/api/users", async (req,res)=> {

// 	try {
// 		await pool.connect()
// 		const result = await pool.query('INSERT INTO userinfo (name,task) VALUES ($1,$2);', [req.body.name, req.body.task]) 
	
// 		res.json(result.rows);
// 	}
// 	    catch (err) {
// 		console.error(err);
// 		res.send("Error " + err);
// 	}
// });

// app.patch('/api/users', async (req, res) => {
//     const index = req.body.name;
//     let data;
//     try{
//        data = await pool.query(`UPDATE userinfo  SET task = '${req.body.task}' WHERE name = '${req.body.name}';`)
	 
//        res.send(data.rows);
//     }catch (err){
//         console.error(err);
//     }
// 	console.log(req.body)
// 	// let reqObj = req.body;
//     // let keys = Object.keys(reqObj);
//     // let usersObj = data.rows[0];
//     // for (let i = 0; i < keys.length; i++) {
//     //     usersObj[keys[i]] = reqObj[keys[i]];
//     // }
//     // console.log(usersObj);
//     // try{
//     //     await pool.query(`INSERT userinfo SET task = '${usersObj.task}' WHERE name = '${req.body.name}';`)
//     //     res.send('user updated!')
//     // }catch(err){
//     //     console.error(err);
// 	// }
// })

// app.delete('/api/users/:name', async (req, res) =>{
//     try{
//         // const dataCheck = await pool.query(`SELECT * FROM userinfo WHERE name = $1',[req.body.name]);
        
//         const data = await pool.query(`DELETE FROM userinfo WHERE name = $1 and task = $2`, [req.body.name,req.body.task]);
//         console.log(data.rows);
//         res.send('task deleted!');
//     } catch(err){
//         console.error(err.message);
//         res.send('Error: ' + err.message);
//     }
// })

app.listen(port, () => {
  console.log(`listening on Port 8000`);
  
});
