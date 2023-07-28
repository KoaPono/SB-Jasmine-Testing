describe("Helpers test (with setup and tear-down)", () => {
  let paymentTbody = document.querySelector('#paymentTable tbody');
  
  beforeAll(() => {
    // initialization logic
    const payment1 = { billAmt: 200, tipAmt: 20, tipPercent: 10 };
    const payment2 = { billAmt: 250, tipAmt: 50, tipPercent: 20 };
    allPayments["payment 1"] = payment1;
    allPayments["payment 2"] = payment2;
  });

  it("should sum total payment using sumPaymentTotal()", () => {
    expect(sumPaymentTotal("billAmt")).toEqual(450);
    expect(sumPaymentTotal("tipAmt")).toEqual(70);
  });

  it("should correctly calculate tip percent using calculateTipPercent()", () => {
    expect(calculateTipPercent(200, 20)).toEqual(10);
    expect(calculateTipPercent(250, 50)).toEqual(20);
  });

  it("should correctly add a new table data element using appendTd()", () => {
    //append Td then check that children is equal to 1
    let newTr = document.createElement('tr');
    expect(newTr.childElementCount).toEqual(0);
    appendTd(newTr, 1);
    expect(newTr.childElementCount).toEqual(1);
  });

  afterAll(() => {
    allPayments = {};
    for (child of paymentTbody.childNodes) {
      child.remove();
    }
  });
});