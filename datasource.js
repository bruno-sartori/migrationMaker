import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';

export function loadModels(sequelize, modelsDir) {
	const dir = path.join(__dirname, modelsDir);

	const models = [];

	fs.readdirSync(dir).forEach((file) => {
		const modelDir = path.join(dir, file);
		const model = sequelize.import(modelDir);
		models[model.name] = model;
	});

	Object.keys(models).forEach((modelName) => {
		if (models[modelName].associate) {
			models[modelName].associate(models);
		}
	});

	return models;
}

export default function () {
	const oldDb = new Sequelize('oton_contabil', 'root', 'root', {
		host: 'localhost',
		port: '3306',
		dialect: 'mysql',
		logging: false
	});
	
	const newDb = new Sequelize('test', 'root', 'root', {
		host: 'localhost',
		port: '3306',
		dialect: 'mysql',
		logging: false
	});

	newDb.models = loadModels(newDb, './models_sequelize');

	return { newDb, oldDb };
}
