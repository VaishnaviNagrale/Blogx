import config from "../config/config";
import { Client, Account, ID } from "appwrite";

class AuthService {
    client = new Client()
    account
    constructor(){
        this.client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({name,email,password}){
        try {
            console.log('hello3')
            const userAccount = await this.account.create(name,email,password);
            if (userAccount) {
                //call another method
                console.log('hello4')
                return this.login({email,password});
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite auth service :: createAccount :: error",error);
        }
    }

    async login({email,password}){
        try {
            const loggedIn =  await this.account.createEmailSession(email,password);
            return loggedIn;
        } catch (error) {
            console.log("Appwrite auth service :: login :: error",error);
        }
    }

    async getCurrentUser(){
        try {
           return await this.account.get();
        } catch (error) {
            console.log("Appwrite auth service :: getCurrentUser :: error",error);
        }
        return null;
    }

    async logout(){
        try {
           await this.account.deleteSessions();
            return true;
        } catch (error) {
            console.log("Appwrite auth service :: logout :: error",error);
            return false;
        }
    }
}

const authService = new AuthService()

export default authService
