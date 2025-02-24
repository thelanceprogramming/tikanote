import User from "../models/Users";

class UserRepository {
    async index() {
        return await User.findAll();
    }
}

export default new UserRepository();