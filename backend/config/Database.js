import {Sequelize} from "sequelize";

const db = new Sequelize('projects_library_app','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;