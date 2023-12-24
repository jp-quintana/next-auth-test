import BaseMongooseDAO from '../mongoose.dao';
import UserSchema from '../../models/user.model';

class UserMongooseDAO extends BaseMongooseDAO {
  constructor() {
    super(UserSchema);
  }

  async fetchByEmail(email) {
    return await this.collection.findOne({ email: email });
  }
}

export default UserMongooseDAO;
