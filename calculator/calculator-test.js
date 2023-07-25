
it('should calculate the monthly rate correctly', function () {
  let values = { amount: 350000, years: 30, rate: 6.7 };
  expect(calculateMonthlyPayment(values)).toEqual('2258.47');
});


it("should return a result with 2 decimal places", function() {
  let values = { amount: 350000, years: 30, rate: 6.7 };
  expect(calculateMonthlyPayment(values)).toHaveSize(7);
});
