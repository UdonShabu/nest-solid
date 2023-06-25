interface ICourse {
  id: string;
  title: string;
  description: string;
  duration: number;
  price: number;
  level: string;

  enroll(): void;
  cancelEnrollment(): void;
  getDetails(): object;
  updateCourse(data: object): void;
  // ... other methods
}
