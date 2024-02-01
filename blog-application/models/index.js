const Blog = require('./blog')
const User = require('./user')
const Reading_List = require('./readingList')

User.hasMany(Blog)
Blog.belongsTo(User)

User.belongsToMany(Blog, { through: Reading_List, as: 'readings' })

// User.hasMany(Reading_List)
// Reading_List.hasMany(Blog)
Reading_List.sync()
Blog.sync()
User.sync()

module.exports = {
  Blog, User, Reading_List
}