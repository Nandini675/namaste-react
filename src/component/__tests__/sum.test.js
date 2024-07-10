import { sum } from "../sum"
test ("sum f/n should calculate the sum of two no",()=>{
 const result = sum( 3,4);
 // now i have to check whether my result is 7 or not
  //code:
  // expect my result to be 7
  expect(result).toBe(20);// this line known as assertion
});