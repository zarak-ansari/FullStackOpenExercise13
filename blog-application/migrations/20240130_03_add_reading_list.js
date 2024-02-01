const { DataTypes } = require('sequelize')


module.exports = {
    up: async ({ context: querySelector }) => {
        await querySelector.createTable('reading_lists', {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: { model: 'users', key: 'id' },
            },
            blog_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: { model: 'blogs', key: 'id'}
            },
            read: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                allowNull: false
            }
        })
    },
    down: async ({ context: querySelector }) => {
        await querySelector.dropTable('reading_lists')
    }
}