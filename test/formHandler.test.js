import { handleSubmit } from "../src/client/js/formHandler"; 

describe("Testing form submission functionality", () => {
    test("handleSubmit should be defined", () => {
        expect(handleSubmit).toBeDefined(); 
    });
});
