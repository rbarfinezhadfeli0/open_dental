Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Repeating Charges Unit Tests

These [Unit Tests](../site/unittesting.html) are for [Repeating Charges](repeatingcharges.html).

Test #53: Version 16.1+ Repeat charges should be added after the stop date of the duration of the repeating charge if the number of charges added to the account is less than the number of months the repeat charge was active (a partial month is counted as a full month).

* **Scenario #1**: The start day is before the stop day which is before the billing day. Start 12/08/2015, Stop 12/09/2015. Add a charge on 11/11/2015 and 12/11/2015.
* **Scenario #2**: The start day is after the billing day which is after the stop day. Start 11/25/2015, Stop 12/01/2015. Add a charge on 12/11/2015.
* **Scenario #3**: The start day is the same as the stop day but before the billing day. Start 11/10/2015, Stop 12/10/2015. Add a charge on 11/11/2015 and 12/11/2015.
* **Scenario #4**: The start day is the same as the stop day and the billing day. Start 10/11/2015, Stop 11/11/2015. Add a charge on 11/11/2015.
* **Scenario #5**: The start day is after the stop day which is after the billing day. Start 10/15/2015, Stop 11/13/2015. Add a charge on 11/11/2015.
* **Scenario #6**: The start day is before the billing day which is before the stop day. Start 10/05/2015, Stop 11/20/2015. Add a charge on 11/11/2015.

Test #54: Version 16.1+ When there are multiple repeat charges on one acount and the repeat charge tool is run, a procedure from the account is deleted, and the repeat charges tool is run again, the same number of procedures that were deleted should be added.

* **Scenario #1**: Add three repeating charges with a start date of 11/01/2015 and an amount of $100 with a note of 'Charge #1', 'Charge #2', and 'Charge #3' respectively. Run repeating charge tool. Delete all the procedures with a date of 11/11/2015. Run repeating charge tool. Result should be a procedure with a billing note of 'Charge #1', a procedure with a billing note of 'Charge #2', a procedure note of 'Charge #3' on 11/11/2015, and a procedure with a billing note of 'Charge #1', a procedure with a billing note of 'Charge #2', and a procedure with a billing note of 'Charge #3' on 12/11/2015.
* **Scenario #2**: Add three repeating charges with a start date of 11/01/2015 and an amount of $100 with a note of 'Charge #1', 'Charge #2', and 'Charge #3', respectively. Run repeating charge tool. Delete all the procedures with a date of 12/11/2015. Run repeating charge tool. Result should be a procedure with a billing note of 'Charge #1', a procedure with a billing note of 'Charge #2', a procedure with a billing note of 'Charge #3' on 11/11/2015, and a procedure with a billing note of 'Charge #1', a procedure with a billing note of 'Charge #2', and a procedure with a billing note of 'Charge #3' on 12/11/2015.
* **Scenario #3**: Add three repeating charges with a start date of 11/01/2015 and an amount of $100 with a note of 'Charge #1', 'Charge #2', and 'Charge #3' respectively. Run repeating charge tool. Delete one procedure with a date of 11/11/2015. Run repeating charge tool. Result should be a procedure with a billing note of 'Charge #1', a procedure with a billing note of 'Charge #2', a procedure with a billing note of 'Charge #3' on 11/11/2015, and a procedure with a billing note of 'Charge #1', a procedure with a billing note of 'Charge #2', a procedure with a billing note of 'Charge #3' on 12/11/2015.

Test #55: Version 16.1+ Changing the amount or start date on a repeat charge does not cause the repeat charge to be added again.

* **Scenario #1**: Add a repeating charge with a start date of 11/012015 and an amount of $100. Run repeating charge tool. Change the amount of the repeating charge to $80. Run repeating charge tool. Result should be a procedure of amount $100 on 11/11/2015 and a procedure of amount $100 on 12/11/2015.
* **Scenario #2**: Add a repeating charge with a start date of 11/01/2015 and an amount of $100. Run repeating charge tool. Start date of the repeating charge to 11/02/2015. Run repeating charge tool. Result should be a procedure of amount $100 on 11/11/2015 and a procedure of amount $100 on 12/11/2015.

Test #56: Version 16.1+ Repeat charges should not be posted before the start date.

* **Scenario #1**: Add a repeat charge with a start date of 12/15/2015. Set the billing cycle day to 15. Run repeating charge tool. Result should be a procedure on 12/15/2015.
* **Scenario #2**: Add a repeat charge with a start date of 12/15/2015. Set the billing cycle day to 12. Run repeating charge tool. Result should be no procedure added.
* **Scenario #3**: Add a repeat charge with a start date of 12/18/2015. Set the billing cycle day to 15. Run repeating charge tool. Result should be no procedure added.

Related Links:

* [Payment Plan Unit Tests](unittestpaymentplan.html)
* [Estimate Downgrade Unit Tests](unittestdowngrades.html)
* [HL7 Unit Tests](hl7tests.html)