export interface IUser {
  email: string;
  gender: string;
  name: string;
  waterRate: number;
  avatarURL: string;
  createdAt: string;
}

export interface IUpdateUser {
  gender: string;
  name: string;
  email: string;
  password?: string;
  newPassword?: string;
}

export interface IRegisterUser {
  email: string;
  password: string;
}

export interface IDdailyEntry {
  waterVolume: number;
  time: string;
  _id?: string;
}

export interface IWater {
  _id?: string;
  date: string;
  waterRate: number;
  totalVolume: string;
  progress: string;
  dailyEntries: IDdailyEntry[];
  owner: string;
  createdAt: string;
  updatedAt: string;
}
