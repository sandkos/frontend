export interface UserState {
  firstName: string;
  lastName: string;
  nickname: string;
  avatar: string;
  birthday: string;
}

const state: UserState = {
  firstName: 'Razvan',
  lastName: 'Stoenescu',
  nickname: 'rstoenescu',
  avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
  birthday: '1992-02-29'
}

export default state
