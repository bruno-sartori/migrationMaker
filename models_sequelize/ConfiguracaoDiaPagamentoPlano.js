import { isValidNumber, isValidString } from "../util/isValidVariable";

export default (sequelize, DataType) => {
	const ConfiguracaoDiaPagamentoPlano = sequelize.define('ConfiguracaoDiaPagamentoPlano',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			dia: {
				type: DataType.STRING(3),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			createdAt: {
				type: DataType.DATE,
				allowNull: false
			},
			updatedAt: {
				type: DataType.DATE
			}
		},
		{
			tableName: 'dias_pagamento_plano'
		}
	);

	ConfiguracaoDiaPagamentoPlano.upsert = async function (data) {
		const savedDias = await this.findAll({ raw: true });
		const { Op } = sequelize;

		const updatedDias = data.filter(o => isValidNumber(o.key)).map((o) => {
			o.id = o.key;
			delete o.editable;
			delete o.key;
			return o;
		});

		const newDias = data.filter(o => isValidString(o.key) && o.key.includes('NEW_TEMP_ID')).map((o) => {
			delete o.key;
			delete o.editable;
			return { ...o };
		});

		const deletedDias = savedDias.filter(o => !updatedDias.map(u => u.id).includes(o.id)).map(o => o.id);

		if (newDias.length > 0) {
			await this.bulkCreate(newDias);
		}

		if (deletedDias.length > 0) {
			await this.destroy({ where: { id: { [Op.in]: deletedDias } } });
		}
	};

	return ConfiguracaoDiaPagamentoPlano;
};
