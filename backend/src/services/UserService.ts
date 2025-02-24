import UserRepository from "../repositories/UserRepository";

class UserService{
    async getAllUsers() {
        return await UserRepository.index();
    } 
}

export default new UserService();