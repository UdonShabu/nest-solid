// Original interface representing a user profile
interface Post {
  title: string;
  content: object;
}

interface IUserProfile {
  id: number;
  name: string;
  email: string;
  bio: string;
  avatar: string;
  posts: number;
  followers: number;
  following: number;

  updateProfile(data: object): void;
  uploadAvatar(avatar: File): void;
  getPosts(): Post[];
  // ... other methods
}
