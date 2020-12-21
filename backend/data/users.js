import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@shop.ba',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Kemal Tihic',
    email: 'kemal@shop.ba',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Amra Topuz',
    email: 'amra@shop.ba',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
