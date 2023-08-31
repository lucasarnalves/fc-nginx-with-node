const express = require('express')
const app = express()
app.set('view engine', 'ejs');
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

// const sql = `INSERT INTO people(name) values('Lucas')`
// connection.query(sql)
// connection.end()

// /// TESTE
// connection.query(sql_select, function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//     console.log('test')
//     const data = JSON.stringify(result)
// });
// connection.end()


app.get('/', (req, res) => {
    const sql_select = `SELECT * FROM people`
    connection.query(sql_select, function (err, result, fields) {
        if (err) throw err;
    console.log(result)
    console.log(result[0])
    console.log(result[0]["id"])
    
    res.render('data_table.ejs', { data: result });
    });
    connection.end()
    
    // res.send('<h1>Full Cycle Node</h1>')
    // res.send(data)
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
    console.log('Esperando')
})