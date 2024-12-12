import { Model } from "mongoose";
import { TUserRole, TUserStatus } from "./user.constant";

export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export interface TUser  {
  _id?: string;
  email: string;
  name: TUserName;
  password: string;
  passwordChangedAt?: Date;
  role: TUserRole
  profileImg?: string; 
  status: TUserStatus
  isDeleted: boolean;
};

export interface IUserModel extends Model<TUser> {
  isUserExistsByEmail(id: string): Promise<TUser>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number
  ): boolean;
}