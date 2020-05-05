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

const Model = Sequelize.Model;
class User extends Model{}
User.init({
	nombre: {
		type: Sequelize.STRING,
		allownNull: false
		},
	apellido: {
		type: Sequelize.STRING,
		},
	rublo: {

		type : Sequelize.STRING
		}
	}, {
	sequelize,
	modelName: 'trabajadores'
});

/*insert*/
User.create({
	nombre: "Abril",
	apellido: "Taraben",
	rublo: "Psicologa"
}).then(() => {
	console.log("insert done");
});

/*delete*/
User.destroy({
	where: { 
		id: 2
		}
	}).then(() => {
		console.log("delete matias done");
	});
















