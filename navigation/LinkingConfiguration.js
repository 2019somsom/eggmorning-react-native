import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    Root: {
      path: 'root',
      screens: {
        Home: 'home',
        Search: 'search',
        Bookmark: 'bookmark',
        Mypage: 'mypage',
        More: 'more',
        Signin: 'signin',
        Signup: 'signup',
      },
    },
  },
};
