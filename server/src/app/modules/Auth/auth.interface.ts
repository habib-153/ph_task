import { USER_ROLE } from '../user/user.constant';
import { TUserName } from '../user/user.interface';

export type TLoginUser = {
  email: string;
  password: string;
};

export type TRegisterUser = {
  name: TUserName
  email: string;
  password: string;
  role: keyof typeof USER_ROLE;
};
