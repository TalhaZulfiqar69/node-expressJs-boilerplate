import { login } from '../services';

class AuthController {
    /**
     * @param req request body
     * @param res callback response object
     * @description Method to login
     * @date 23 Jan 2025
     * @updated 23 Jan 2025
     */
    static async login(req, res) {
        const data = await login(req, res);
        return data;
    }
}

export default AuthController;
