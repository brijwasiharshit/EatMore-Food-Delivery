import { sum } from "../sum";

test("testing of sum function", () => {
    const res = sum(4,3);
    expect(res).toBe(7);
});