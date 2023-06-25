// Original interface representing a user profile
interface Post {
  title: string;
  content: object;
}

interface IUserProfileData {
  id: number;
  name: string;
  email: string;
  bio: string;
  avatar: string;
}
interface IUserProfileActions {
  updateProfile(data: object): void;
  uploadAvatar(avatar: File): void;
}
interface IUserProfileStats {
  posts: number;
  followers: number;
  following: number;
  getPosts(): Post[];
}
