const Sequelize = require('sequelize');

const sequelize = new Sequelize('prueba', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

/*creando tabla*/
class Users extends Sequelize.Model{}
Users.init({
	nombre: Sequelize.STRING,
	apellido: Sequelize.STRING,
	rublo: Sequelize.STRING
}, { sequelize, modelName: 'trabajadores'});

/*insertando usuario*/
sequelize.sync()
	.then(() => Users.create({
		nombre: 'Julian',
		apellido: 'Sosa',
		rublo: 'Periodista'
	}))
	.then(jane => {
		console.log(jane.toJSON());
	});
















