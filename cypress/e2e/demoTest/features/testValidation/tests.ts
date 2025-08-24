// all tests caller function
export const validationTests = () => {
  validatePageOne();
  validatePageTwo();
  validatePageThree();
};

export const validatePageOne = () => {
  describe("Page 1 Validation - Mobile Number", () => {
    // Valid number case
    it("should accept a valid 10-digit mobile number", () => {
      const isValid = /^[6-9]\d{9}$/.test("9876543210");
      expect(isValid).to.eq(true); 
    });

    // Number shorter than 10 digits
    it("should reject a number less than 10 digits", () => {
      const isValid = /^[6-9]\d{9}$/.test("98765");
      expect(isValid).to.eq(false);
    });

    // Number longer than 10 digits
    it("should reject a number with more than 10 digits", () => {
      const isValid = /^[6-9]\d{9}$/.test("9876543210123");
      expect(isValid).to.eq(false);
    });

    // Number not starting with 6–9
    it("should reject a number starting with digits other than 6-9", () => {
      const isValid = /^[6-9]\d{9}$/.test("1234567890");
      expect(isValid).to.eq(false);
    });

     // Number containing alphabets or non-numeric characters
    it("should reject non-numeric characters", () => {
      const isValid = /^[6-9]\d{9}$/.test("98ab56cd10");
      expect(isValid).to.eq(false);
    });
  });
};

export const validatePageTwo = () => {
  it("should validate structure of page 2", () => {});
};

export const validatePageThree = () => {
  it("should validate structure of page 3", () => {});
};

