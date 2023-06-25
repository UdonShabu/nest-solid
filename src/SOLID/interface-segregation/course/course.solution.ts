interface ICourseSummary {
  id: string;
  title: string;
  description: string;
  duration: number;
  price: number;
  level: string;
}
interface ICourseEnrollment {
  enroll(): void;
  cancelEnrollment(): void;
}
interface ICourseManagement {
  getDetails(): object;
  updateCourse(data: object): void;
}
