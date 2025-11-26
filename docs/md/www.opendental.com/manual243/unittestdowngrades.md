Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Estimate Downgrade Unit Tests

These Unit Tests are for [Estimate Downgrades](downgrades.html).

**Test #60**: Patient has a PPO plan which covers D2393 at 100%. UCR fee for D2393 is $300 and PPO is $120. D2393 downgrades to D2160 always. D2160 has a UCR fee of $100 and the PPO fee is blank. When adding a procedure for D2393 for this patient, the allowed amount should be $120, the writeoff should be $180, and the insurance estimate should be $120.

* UCR fee for D2393: $300
* PPO fee for D2393: $120
* D2393 downgrades to D2160 always
* UCR fee for D2160: $100
* PPO fee for D2160: Blank
* Add a D2393 for this patient
* Allowed amount: $120
* Writeoff: $180
* Insurance estimate: $120

**Test #61**: Patient has a PPO plan which covers D2391 at 100%. UCR fee for D2393 is $140 and PPO fee is $80. D2391 downgrades to D2140 always. D2140 has a UCR fee of $120 and a PPO fee of $100. When adding a procedure for D2391 for this patient, the allowed amount should be $80, the writeoff should be $60, and the insurance estimate should be $80.

* UCR fee for D2391: $140
* PPO fee for D2391: $80
* D2391 downgrades to D2140 always
* UCR fee for D2140: $120
* PPO fee for D2140: $100
* Add a D2391 for this patient
* Allowed amount: $80
* Writeoff: $60
* Insurance estimate: $80

Related Links:

* [Payment Plan Unit Tests](unittestpaymentplan.html)
* [Repeating Charges Unit Tests](unittestrepeatingcharges.html)
* [HL7 Unit Tests](hl7tests.html)