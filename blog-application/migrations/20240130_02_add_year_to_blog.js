const { DataTypes } = require('sequelize')

module.exports = {
    up: async ({context: querySelector}) => {
        await querySelector.addColumn('blogs', 'year', {
            type: DataTypes.INTEGER,
            validate: {
                min: 1991,
                max: new Date().getFullYear()
            }
        })
    },
    down: async ({ context: querySelector }) => {
        await querySelector.removeColumn('blogs', 'year')
    }
}