const express = require('express');
const app=express();
const {Pool} = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'Darkwin',
  port: 5432,
});


app.route('/register')
.get((request, response)=>{

})
.post((request, response)=> {

});

app.route('/login')
.get((request, response)=>{

})
.post((request, response)=>{

});

app.listen(3000, () => {
    console.log(`Serveur lancé sur le port 3000`);
    
    // Créer les tables dans la base de données
    pool.query(`
      CREATE TABLE IF NOT EXISTS register (
        username VARCHAR(255) PRIMARY KEY NOT NULL,
        password VARCHAR(255) NOT NULL
      )
    `).then(() => {
      console.log('Table "register" créée avec succès');
    }).catch((error) => {
      console.error('Erreur lors de la création de la table "register"', error);
    });
  
    pool.query(`
      CREATE TABLE IF NOT EXISTS login (
        username VARCHAR(255) PRIMARY KEY NOT NULL,
        password VARCHAR(255) NOT NULL
      )
    `).then(() => {
      console.log('Table "login" créée avec succès');
    }).catch((error) => {
      console.error('Erreur lors de la création de la table "login"', error);
    });
  });