const { users } = require('../../model/index');
const general = require('../../utils/general');

class UserRepository {

    static async getUserByEmailId(emailId) {
        try {
            let result = await users.findOne({ where: { email: emailId } });
            console.log(result.dataValues);
            return result;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    static async createUser(user) {
        try {
            let result = await users.build(user);
            await result.generateHash();
            result.save();
            return;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

module.exports = UserRepository;