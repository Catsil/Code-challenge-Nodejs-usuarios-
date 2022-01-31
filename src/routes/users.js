const express = require('express');
const router =express.Router();
const mysqlConnection=require('../database');

router.get('/',(req, res)=>{
    mysqlConnection.query('SELECT * FROM users', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err)
        }
    })
});

 router.get('/:id', (req, res)=>{
    const{id}=req.params;
    mysqlConnection.query('SELECT * FROM users WHERE id=?', [id], (err, rows, fields)=>{
        if(!err){
            res.json(rows[0]);
        }else{
            console.log(err);
        }
    });
});

router.post('/', (req, res)=>{
    const{ id, name}=req.body;
    const query=`
    CALL userAddOrEdit(?,?,?);
    `;
    mysqlConnection.query(query, [id, name], (err, rows, fields)=>{
        if(!err){
            res.json({Status:'User saved'})
        }else{
            console.log(err)
        }
    });
});

module.exports=router;