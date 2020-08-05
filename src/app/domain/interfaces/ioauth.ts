import { UserInfo } from '../classes';

export interface IOauth {
    Authenticated(): boolean;
    GetUserInfo(): UserInfo;
    SignInWithGoogle(): Promise<any>;
    SignInWithAmazon(): Promise<any>;
    SignInWithFaceBook(): Promise<any>;
    LogOut(): Promise<any>;
}
