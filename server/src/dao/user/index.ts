import UserMongooseDAO from './mongoose.dao';

const option = process.env.DAO_OPTION;

let User;

switch (option) {
  case 'MONGOOSE':
    User = new UserMongooseDAO();
    break;
  case 'FIREBASE':
    break;
  default:
    User = new UserMongooseDAO();
}

export default User;
