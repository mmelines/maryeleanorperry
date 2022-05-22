export interface Contact {
    name: string;
    type: string;
    username: string;
    url: string;
  }
  
  export const contacts = [
    {
        name: 'email',
        type: 'email account',
        username: 'mmebyte@gmail.com',
        url: ''
    },
    {
        name: 'twitter',
        type: 'profile',
        username: '@mmelines',
        url: 'https://twitter.com/mmelines'
    },
    {
        name: 'github',
        type: 'profile',
        username: 'mmelines@github',
        url: 'https://github.com/mmelines'
    }
  ];