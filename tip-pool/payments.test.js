describe("Payments test (with setup and tear-down)", () => {
  let paymentTbody = document.querySelector("#paymentTable tbody");
  let summaryTds = document.querySelectorAll("#summaryTable tbody tr td");

  beforeAll(() => {
    // initialization logic
    let billAmtInput = document.getElementById("billAmt");
    let tipAmtInput = document.getElementById("tipAmt");

    billAmtInput.value = 200;
    tipAmtInput.value = 40;
  });

  it("should sum total payment using createCurPayment()", () => {
    expect(createCurPayment()).toEqual({
      billAmt: "200",
      tipAmt: "40",
      tipPercent: 20,
    });
  });

  it("should sum total payment using appendPaymentTable()", () => {
    appendPaymentTable({ billAmt: "200", tipAmt: "40", tipPercent: 20 });
    expect(paymentTbody.childElementCount).toEqual(1);
  });

  it("should update the table using updateSummary", () => {
    updateSummary();
    expect(summaryTds.length).toEqual(3);
  });

  it("should submit Payment Info correctly using submitPaymentInfo()", () => {
    submitPaymentInfo();
    expect(allPayments).toEqual({
      payment1: { billAmt: "200", tipAmt: "40", tipPercent: 20 },
    });
    expect(billAmtInput.value).toEqual("");
    expect(tipAmtInput.value).toEqual("");
  });

  afterEach(() => {
    allPayments = {};
    for (child of paymentTbody.children) {
      child.remove();
    }
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
  });
});
