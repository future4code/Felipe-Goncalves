import { Character, performAttack, validateCharacter } from "../src/characters";

describe("Testing validateChacter", () => {

    test("Should return false for empty name", () => {
        const result = validateCharacter({
          name: "",
          life: 1500,
          strength: 300,
          defense: 500,
        });
    
        expect(result).toBe(false);
      });

      test("Should return false for empty life", () => {
        const result = validateCharacter({
          name: "",
          life: 0,
          strength: 300,
          defense: 500,
        });
    
        expect(result).toBe(false);
      });

      test("Should return false for empty strength", () => {
        const result = validateCharacter({
          name: "",
          life: 1500,
          strength: 0,
          defense: 500,
        });
    
        expect(result).toBe(false);
      });

      test("Should return false for empty defense", () => {
        const result = validateCharacter({
          name: "",
          life: 1500,
          strength: 300,
          defense: 0,
        });
    
        expect(result).toBe(false);
      });

      test("Should return false for empty -0", () => {
        const result = validateCharacter({
          name: "",
          life: -0,
          strength: -0,
          defense: -0,
        });
    
        expect(result).toBe(false);
      });

      test("Should return false for life 0", () => {
        const result = validateCharacter({
          name: "Scorpion",
          life: 0,
          strength: 300,
          defense: 500,
        });
    
        expect(result).toBe(false);
      });
});

describe("Testing creating Moks", () => {

    test("Creating Mocks", () => {
        const validatorMock = jest.fn(() => {
                return false
            });
    });

    test("Creating Mocks", () => {
        const validatorMock = jest.fn(() => {
                return true
            });
    });

    test("Should return invalid character error", () => {
        expect.assertions(4);
        const validatorMock = jest.fn(() => {
          return false;
        });
    
        const attacker: Character = {
          name: "Scorpion",
          life: 1500,
          defense: 200,
          strength: 600,
        };
    
        const defender: Character = {
          name: "Kitana",
          life: 1500,
          defense: 400,
          strength: 800,
        };
    
        try {
          performAttack(attacker, defender, validatorMock as any);
        } catch (err) {
          expect(err.message).toBe("Invalid character");
          expect(validatorMock).toHaveBeenCalled();
          expect(validatorMock).toHaveBeenCalledTimes(1);
          expect(validatorMock).toHaveReturnedTimes(1);
        }
      });

      test("Should return invalid character error", () => {
        expect.assertions(4);
        const validatorMock = jest.fn(() => {
          return false;
        });
    
        const attacker: Character = {
          name: "Scorpion",
          life: 1500,
          defense: 0,
          strength: 600,
        };
    
        const defender: Character = {
          name: "Kitana",
          life: 1500,
          defense: 400,
          strength: 800,
        };
    
        try {
          performAttack(attacker, defender, validatorMock as any);
        } catch (err) {
          expect(err.message).toBe("Invalid character");
          expect(validatorMock).toHaveBeenCalled();
          expect(validatorMock).toHaveBeenCalledTimes(1);
          expect(validatorMock).toHaveReturnedTimes(1);
        }
      });

   
});