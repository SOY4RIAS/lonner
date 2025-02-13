import { expect, test, describe, it } from "bun:test";
import { betterCompression } from "./better-compression.ts";

describe("betterCompression - yxd", () => {
  describe("Happy Path", () => {
    it("should return same string when input has single character with frequency", () => {
      const input = "a3";
      const result = betterCompression(input);
      expect(result).toBe("a3");
    });
    it("should return compressed string with sorted characters by frequency", () => {
      const input = "a3b2c4";
      const expectedOutput = "a3b2c4";
      const result = betterCompression(input);
      expect(result).toBe(expectedOutput);
    });
    it('should return compressed string with characters in alphabetical order', () => {
      const input = 'a2b3c1';
      const expectedOutput = 'a2b3c1';
      const result = betterCompression(input);
      expect(result).toBe(expectedOutput);
    });
    it('should compress string correctly when characters appear multiple times', () => {
      const input = 'a2b1a3';
      const result = betterCompression(input);
      expect(result).toBe('a5b1');
    });
    it('should compress string correctly when all frequencies are single digits', () => {
      const input = 'a1b1c1';
      const result = betterCompression(input);
      expect(result).toBe('a1b1c1');
    });
    it('should handle uppercase characters correctly', () => {
      const input = 'A2B3';
      const result = betterCompression(input);
      expect(result).toBe('A2B3');
    });
  });

  describe("Edge cases", () => {
    it("should return empty string when input is empty", () => {
      const input = "";
      const result = betterCompression(input);
      expect(result).toBe("");
    });
    it('should return empty string when input format is invalid', () => {
      const input = 'abc123';
      const result = betterCompression(input);
      expect(result).toBe('');
    });
    it('should handle spaces correctly', () => {
      const input = ' a2 b3 ';
      const result = betterCompression(input);
      expect(result).toBe('a2b3');
    });
    it('should return the input unchanged when special characters are present', () => {
      const input = '#2$3';
      const result = betterCompression(input);
      expect(result).toBe('#2$3');
    });
    it('should handle very large frequencies', () => {
      const input = 'a999999b1c2a1a2';
      const result = betterCompression(input);
      expect(result).toBe('a1000002b1c2');
    });
  });
});
