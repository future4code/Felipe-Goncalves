import {UserBusiness} from "../src/business/UserBusiness";
import { stringToUserRole, User, UserRole } from "../src/model/User";


describe("Testing UserBusiness.getUserById", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};
  
    test("Should return 'User not found' when user does not exist", async () => {
      expect.assertions(2);
      try {
        const getUserById = jest.fn();
        userDatabase = { getUserById };
  
        const userBusiness = new UserBusiness(
          userDatabase as any,
          hashGenerator as any,
          tokenGenerator as any,
          idGenerator as any
        );
  
        await userBusiness.getUserById("invalid-id");
      } catch (err) {
        expect(err.statusCode).toBe(404);
        expect(err.message).toBe("User not found");
      }
    });
  });

  describe("Testing UserBusiness.getUserById", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};
  
    test("Should return 'User not found' when user does not exist", async () => {
      const getUserById = jest.fn(
        (id: string) =>
          new User(
            "id",
            "Astrodev",
            "astrodev@gmail.com",
            "hash",
            stringToUserRole("ADMIN")
          )
      );
  
      userDatabase = { getUserById };
  
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );
  
      const user = await userBusiness.getUserById("id");
  
      expect(getUserById).toHaveBeenCalledWith("id");
      expect(user).toEqual({
        id: "id",
        name: "Astrodev",
        email: "astrodev@gmail.com",
        role: UserRole.ADMIN,
      });
    });
  });

  describe("Testing UserBusiness.allUsers", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};
  
    test("Should return 'You must be an admin to access this endpoint' when user is NORMAL", async () => {
      expect.assertions(2);
      try {
        const userBusiness = new UserBusiness(
          userDatabase as any,
          hashGenerator as any,
          tokenGenerator as any,
          idGenerator as any
        );
  
        await userBusiness.getAllUsers(UserRole.NORMAL);
      } catch (err) {
        expect(err.statusCode).toBe(401);
        expect(err.message).toBe("You must be an admin to access this endpoint");
      }
    });
  });

  describe("Testing UserBusiness.allUsers", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};
  
    test("Should return 'You must be an admin to access this endpoint' when user is NORMAL", async () => {
      const getAllUsers = jest.fn(() => [
        new User(
          "id",
          "Astrodev",
          "astrodev@gmail.com",
          "hash",
          stringToUserRole("ADMIN")
        ),
      ]);
      userDatabase = { getAllUsers };
  
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );
  
      const result = await userBusiness.getAllUsers(UserRole.ADMIN);
  
      expect(getAllUsers).toHaveBeenCalledTimes(1);
      expect(result).toContainEqual({
        id: "id",
        name: "Astrodev",
        email: "astrodev@gmail.com",
        role: UserRole.ADMIN,
      });
    });
  });