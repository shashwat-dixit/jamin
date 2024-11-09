import { User } from "./user"; // Import your User type

declare global {
  namespace Express {
    interface User extends User {} // Extend the Express.User interface with your User type
  }
}
