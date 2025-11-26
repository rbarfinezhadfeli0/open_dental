Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Unit Testing

See [Advanced Topics](advancedtopics.html)

Unit testing, aka regression testing, is a programming technique to ensure that the behavior of a complex program does not change between versions. It can be thought of as a contract that the program is guaranteed to follow given the specified scenario. All unit tests are run automatically before each version release. The number of unit tests will grow with each version. Every time we encounter a bug in the math, we first add a unit test (that fails), and then fix the program to make the unit test pass. Power users may submit a unit test scenario for consideration on the forum. After some discussion, we will add it here. Existing unit tests are never changed. Instead, new tests are added and obsolete ones deprecated.

Note: Unit tests have not been added to this page since version 15.2. Many unit tests have been done since then but have not been published.

**Test 1: Allowed1 greater than Allowed2.**
 Version 7.1+ (fix backported to 6.9)
Patient has two insurance plans, both PPO, subscriber self for both. The only benefit entered for both insurance plans is 50% coverage on the crowns category. One procedure is treatment planned, a D2750 PFM crown on #8. COB is Basic; see Tests 17 and 18 for other COB types. If the three fees are entered for each scenario, then the estimates and writeoffs shown in the Treatment Plan module will be:

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Fee | Allowed1 | Allowed2 | InsPay1 | InsPay2 | Writeoff1 | Writeoff2 | (implied pat port) |
| $1,200.00 | $900.00 | $650.00 | $450.00 | $200.00 | $300.00 | $0.00 | $250.00 |

The [COB](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7cob.html) page also explains why there is no secondary writeoff, leaving the patient responsible for the $250.

**Test 2: Similar to #1, but Allowed2 greater than Allowed1.**

Version 7.1+ (fix backported to 6.9)
Patient has two insurance plans, both PPO, subscriber self for both. The only benefit entered for both insurance plans is 50% coverage on the crowns category. One procedure is treatment planned, a D2750 PFM crown on #8. COB is Basic. If the three fees are entered for each scenario, then the estimates and writeoffs shown in the Treatment Plan module will be:

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Fee | Allowed1 | Allowed2 | InsPay1 | InsPay2 | Writeoff1 | Writeoff2 | (implied pat port) |
| $1,200.00 | $650.00 | $900.00 | $325.00 | $450.00 | $425.00 | $0.00 | $0.00 |

Notice that writeoff1 is reduced as a consequence of InsPay2 causing the sum to otherwise go over the total fee.

**Test 3: Insurance show zero coverage over annual max. Not affected by a frequency.**Version 7.1+ (fix backported to 6.9)
 Patient has one insurance plan, category percentage, subscriber self. Benefits include annual max of 1000, crowns 100%, Diagnostic 100%, BW frequency: every 1 year. Two procedures are treatment planned: a crown for $1100, going over the annual max, and a 4BW D0274. The 4BW must show zero coverage.

**Test 4: When family benefits, should not show "Over annual max" until max reached.**
 Version 7.1+ (fix backported to 6.9)
 2 patients in one family. Same insurance. The only benefits are: $1000 individual annual max, $2500 family annual max, and 100% crowns. Add a crown for $830. Crown should show insurance estimate of $830 with no comment about "over annual max".

**Test 5: Both individual and family max taken into account.**
 Version 7.1+ (fix backported to 6.9)
 2 patients in one family. Same insurance. The only benefits are: $1000 individual annual max, $2500 family annual max, and 100% crowns. Add an insurance used amount of $2000 to one patient. Then have one TP procedure on the other patient, a crown for $830. The insurance on the second patient should show an estimate of $500 due to family max.

**Test 6: Limitations override more general limi****tations.** (this allows CHIP to work by adding a separate limitation for preventive) Also see #9 and #31.
 Version 7.1+ (not backported)
 Patient has one insurance plan, subscriber self. Benefits: annual max 1000, diagnostic max 1000. First completed procedure, an exam for $50, insurance paid $50. Second procedure, a crown for $830, insurance paid $400. Ins used should show $400 and should not include the $50 because the ins used value should only be concerned with amounts that affect the annual max .

**Test 7: A deductible for preventive/diagnostic should only be included once.**
 Version 7.2+ (fix backported to 7.0)
 1 patient. 1 insplan, 6 benefits: 1000 annual max, 100% preventive, 100% diagnostic, $50 deduct general, $25 deduct preventive, and $25 deduct diagnostic. One TP procedure for $60, code D0120 (perExam). Second TP procedure for $70, code D1110 (prophy). Second procedure should show no deductible. This is because we need to treat the $25 deductible as a single deductible that applies to preventive/diagnostic. It's not two deductibles. This is only a temporary solution, and the better solution will be to support code ranges that include both preventive and diagnostic, and then to enter a single $25 deductible for that range.

**Test 8: Similar to test 2, but for completed procedures.**
 Version 7.2+ (fix backported to 7.0.43)

Patient has two insurance plans, both PPO, subscriber self for both. The only benefits entered for both insurance plans are $1000 max and 50% coverage on the crowns category. One procedure is treatment planned, a D2750 PFM crown on #8. The three fee schedules are set up as below. The procedure is completed and a primary claim is created. The claim should show a writeoff of $500.

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Fee | Allowed1 | Allowed2 | InsPay1 | InsPay2 | Writeoff1 | Writeoff2 | (implied pat port) |
| $1,200.00 | $600.00 | $800.00 | $300.00 | $400.00 | $500.00 | $0.00 | $0.00 |

**Test 9: Related to #6. Limitations should override more general limitations for any benefit, not just exams.**
 Version 7.2.39+ (fix backported to 7.1.41)
Patient has one insurance plan, subscriber self. Benefits: annual max $200. Other benefit added for limitation on D2161 of $2000. Restorative 80%. Two procedures are treatment planned. First is D2161 for $300, insurance estimate of $240. Second procedure is a D2160 for $300. Insurance estimate on second procedure in the TP should be $200 because the first procedure does not count towards the regular annual max. It instead has its own annual max.

**Test 10: In Treatment Plan, once annual max is reached, additional procedures should show zero insurance coverage.** (this tests the case where preventive frequency is causing errors in the calculation)
 Version 7.2.43+ (fix backported to 7.1.43+)
Patient has one insurance plan, subscriber self. Benefits: annual max $400. 100% coverage on routine preventive. Limitation, preventive every 2 years. Three space maintainers (D1515) added to TP, $500 each. First proc should show $400 coverage, and second proc $0 coverage.

**Test 11:Take family max into account even if there is no individual max.**
 Version 7.5.5+ (fix backported to 7.4.11+)
Patient has one insurance plan, subscriber self. Benefits: annual family max $400. No individual max. 100% coverage on restorative. Two amalgams added to TP, $500 each. First proc should show $400 coverage, and second proc $0 coverage.

**Test 12: Writeoff estimates for PPOs when primary and secondary are both the same plan.**
 Version 7.8.16+ (fix backported to 7.6.34+)
 Patient has spouse. Both have insurance with the same PPO plan. The patient has secondary insurance through the spouse. Benefits: annual max $1200. Deductible $0. 100% coverage on a crown. One crown added to TP for $1400. Allowed $1100.

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Fee | Allowed1 | Allowed2 | InsPay1 | InsPay2 | Writeoff1 | Writeoff2 | (implied pat port) |
| $1,400.00 | $1100.00 | $1100.00 | $1100.00 | $0.00 | $300.00 | $0.00 | $0.00 |

**Test 13: Ortho procedures should not affect insurance used section at lower right of TP module.**
 Version 7.9.9+ (fix backported to 7.8.24+, 7.6.38+)
Patient has one insurance plan, subscriber self. Benefits: annual max $100, ortho max $500, 100% on diagnostic and ortho. 2 procs: D0140 (limEx) $59, and D8090 (comprehensive ortho) $348. Each sent to ins on separate claim, received, paid 100%. Insurance used should show $59.

**Test 14: Primary estimate should not be affected by secondary claim.**
 Version 11.0.27+ (fix backported to 7.9.29+)
 Patient has 2 PPO insurance plans, subscriber self for both. Each plan has benefits: annual max $1200, 80% coverage on restorative. 1 proc: D2160 amalg on #19, $1279 status of TP. Allowed1=$1279, allowed2=$110. Proc set complete, attached to primary claim and secondary claim. Primary estimate should be $1023.20.

**Test 15: Deductibles can be created to override the regular deductible.**
 Version 7.0+ Not version specific; it has always worked this way. The reason for adding this unit test was to ensure that it keeps working.
 Patient has one insurance plan, subscriber self. Benefits: annual max $1000, deductible $50, 100% coverage on preventive/diagnostic/xray, $0 deductible on preventive/diagnostic/xray, 80% coverage on all 4 general categories, 1 manually entered benefit for $45 deductible on code D0330 pano. First TP proc is D0330 for $95, second TP proc is D2150 on #30 for $200. In TP module, $45 deductible shows on the D0330, and a $5 deductible shows on the D2150.

**Test 16: Multiple deductibles for categories should not exceed the regular deductible.**
 Version 11.1.3+ (fix backported to 11.0.32+)
 Patient has one insurance plan, subscriber self. Benefits: annual max $1000, deductible $50, 100% coverage on preventive/diagnostic/xray, $0 deductible on preventive/diagnostic/xray, 80% coverage on all 4 general categories, 1 manually entered benefit for $45 deductible on code D0330, $25 deductible on D0220, add treatment plannned procedure D0330 fee $100, D0220 fee $75. In TP module, $45 deductible should show on D0330, and $5 on D0220.

**Test 17: COB Standard with 2 PPOs.**

Same as unit tests 1 and 2, but with [COB](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7cob.html) Standard rather than Basic.

Version 12.0+
 Patient has two insurance plans, both PPO, subscriber self for both. The only benefit entered for both insurance plans is 50% coverage on the crowns category. One procedure is treatment planned, a D2750 PFM crown on #8. This table shows two different fee schedule scenarios.

|  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| # | Fee | Allowed1 | Allowed2 | InsPay1 | InsPay2 | Writeoff1 | Writeoff2 | (implied pat port) |
| 1 | $1,200.00 | $900.00 | $650.00 | $450.00 | $325.00 | $300.00 | $0.00 | $125.00 |
| 2 | $1,200.00 | $650.00 | $900.00 | $325.00 | $325.00 | $550.00 | $0.00 | $0.00 |

**Test 18: COB CarveOut for category percentage plan.** Version 12.0+
Patient has two insurance plans, subscriber self for both. Plan 1 has 50% coverage on the crowns category and plan 2 has 75% coverage. One procedure is treatment planned, a D2750 PFM crown on #8 for $1200. Primary estimate should be $600, and secondary $300.

**Test 19: Multiple deductibles.**

Version 12.0+

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Fee | Ded1 | Est1 | PatPort1 | Ded2 | Est2 | patient out of pocket |
| $150.00 | $50.00 | $50.00 | $100.00 | $50.00 | $50.00 | $50.00 |

Patient has two insurance plans, subscriber self for both. Both plans standard COB. Both plans have diagnostic 50% and a $50 general deductible. A limited exam, D0120 is treatment planned for $150. Primary estimate is calculated as (150-50) x 0.5 = $50. Secondary estimate with standard COB is the lesser of:
 1. The amount that it would have paid in the absence of any other coverage. (150-50) x 0.5 = $50
 2. The patient's portion under the primary plan. $100
 So $50. Patient out of pocket = 150 - 50 - 50 = 50.

**Test 20: Both individual and family deductibles taken into account for insurance remaining display at LR of TP module.**

Version 12.0+

Three patients, all with the same insurance plan. Guarantor is subscriber. $75 individual deductible, $150 family deductible. Patient 3 has a $75 insurance adjustment for a previously applied deductible. Patient 2 has a procedure D2750 for $1280 that has been paid, including a deductible of $50. Patient 1, the guarantor, has a procedure treatment planned, D4355 for $135. In the guarantor's TP module, at the lower right, the deductible remaining should be $25. An internal test is also performed to verify that if the family deductible were ignored, that the deductible remaining would show $75.

**Test 21: Deductibles for procedures not covered by insurance.**

(researching)

Patient has one insurance plan, subscriber self. Benefits: annual max $1000, deductible $50. One treatment plannned procedure D0120 fee $55. In the TP module, deductible should be $0.

**Test 22: Overtime for after time of day.**
 Version 12.3+, Deprecated 13.3
 There is an overtime rule for the employee for overtime after 4pm. Option is on to adjust if breaks over 30 minutes. Push the Calc Daily button. 7:50 of regular time.

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Scenario | | | Results | |  |  |
| TimeDisplayed1 | TimeDisplayed2 | ClockStatus | AdjustAuto | OtimeAuto |  | Calc. Len. |
| 08:00:00 AM | 04:40:00 PM | Home | -00:10:00 | 00:40:00 |  | 8:40 |
| 11:00:00 AM | 11:40:00 AM | Break |  |  |  | 0:40 |

**Test 23: Overtime for before time of day.**

 There is an overtime rule for the employee for overtime before 7:30am. Option is on to adjust if breaks over 30 minutes. Push the Calc Daily button. 8:20 of regular time.

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Scenario | | | Results | |  |  |
| TimeDisplayed1 | TimeDisplayed2 | ClockStatus | AdjustAuto | OtimeAuto |  | Calc. Len. |
| 06:00:00 AM | 04:00:00 PM | Home | -00:10:00 | 01:30:00 |  | 10:00 |
| 11:00:00 AM | 11:40:00 AM | Break |  |  |  | 0:40 |

**Test 24: Overtime after hours worked per day.**

 There is an overtime rule for the employee for more than 10 hours per day. Option is on to adjust if breaks over 30 minutes. Push the Calc Daily button. 10:00 of regular time.

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Scenario | | | Results | |  |  |
| TimeDisplayed1 | TimeDisplayed2 | ClockStatus | AdjustAuto | OtimeAuto |  | Calc. Len. |
| 08:00:00 AM | 01:00:00 PM | Lunch |  |  |  | 5:00 |
| 10:00:00 AM | 10:20:00 AM | Break |  |  |  | 0:20 |
| 02:00:00 PM | 09:00:00 PM | Home | -00:10:00 | 01:50:00 |  | 7:00 |
| 04:00:00 PM | 4:20:00 PM | Break |  |  |  | 0:20 |

**Test 25: Overtime during normal work week.**

 Work week is entirely within the same pay period. Push the Calc Week OT button.

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Scenario | | | Results | |  |  |
| TimeDisplayed1 | TimeDisplayed2 | ClockStatus | AdjustAuto | OtimeAuto |  | Calc. Len. |
| 06:00:00 AM | 05:00:00 PM | Home |  |  |  | 11:00 |
| 06:00:00 AM | 05:00:00 PM | Home |  |  |  | 11:00 |
| 06:00:00 AM | 05:00:00 PM | Home |  |  |  | 11:00 |
| 06:00:00 AM | 05:00:00 PM | Home |  |  |  | 11:00 |

|  |  |  |  |
| --- | --- | --- | --- |
| Results (TimeAdjust Entry) | | | |
| TimeEntry | RegHours | OtimeHours | IsAuto |
| 8:00 PM | -4:00 | 4:00 | True |

**Test 26: Overtime across two pay periods.**

 Work week is split between two pay periods While viewing the first pay period, push the Calc Week OT button. View the second pay period, and push the Calc Week OT button.

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Scenario | | | Results | |  |  |
| TimeDisplayed1 | TimeDisplayed2 | ClockStatus | AdjustAuto | OtimeAuto |  | Calc. Len. |
| 06:00:00 AM | 05:00:00 PM | Home |  |  |  | 11:00 |
| 06:00:00 AM | 05:00:00 PM | Home |  |  |  | 11:00 |
| 06:00:00 AM | 05:00:00 PM | Home |  |  |  | 11:00 |
| **Start of new pay period.** | | | | |  |  |
| 06:00:00 AM | 05:00:00 PM | Home |  |  |  | 11:00 |

|  |  |  |  |
| --- | --- | --- | --- |
| Results (TimeAdjust Entry) | | | |
| TimeEntry | RegHours | OtimeHours | IsAuto |
| 8:00 PM | -4:00 | 4:00 | True |

**Test 27: Overtime when workweek starts on a different day of the week.**

 The work week starts on Wednesday. Push the Calc Daily button, then push the Calc Week OT button.

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Scenario | | | Results | |  |  |
| TimeDisplayed1 | TimeDisplayed2 | ClockStatus | AdjustAuto | OtimeAuto |  | Calc. Len. |
| 06:00:00 AM | 05:00:00 PM | Home |  |  |  | 11:00 |
| 06:00:00 AM | 05:00:00 PM | Home |  |  |  | 11:00 |
| **Wednesday, start of new work week.** | | | | |  |  |
| 06:00:00 AM | 05:00:00 PM | Home |  |  |  | 11:00 |
| 06:00:00 AM | 05:00:00 PM | Home |  |  |  | 11:00 |
| 06:00:00 AM | 05:00:00 PM | Home |  |  |  | 11:00 |
| 06:00:00 AM | 05:00:00 PM | Home |  |  |  | 11:00 |

|  |  |  |  |
| --- | --- | --- | --- |
| Results (TimeAdjust Entry) | | | |
| TimeEntry | RegHours | OtimeHours | IsAuto |
| 8:00 PM | -4:00 | 4:00 | True |

**Test 28: Edit Claim Procedure window deductible when accessed from Chart Module.**

Version 12.3+

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Proc | Fee | Ded | Est | PatPort |
| 1 | $800.00 | $25.00 | $387.50 | $412.50 |
| 2 | $800.00 | $0.00 | $400.00 | $400.00 |

The patient has one insurance plan, category percentage, subscriber self. Benefits: annual max $1300, 50% coverage on crowns, and a $25 general deductible. Both TP procs are crowns, first TP proc is D2790 for $800 on #1 with priority 1, second TP proc is D2790 on #9 for $800 with priority 2. First, the estimates are pre-calculated by visiting the TP module. Then, when opening a procedure from Chart Module, followed by opening the claimproc from inside of the Edit Procedure window, the amounts must match those listed in the table above. This unit test is the first one that looks at the values showing in the claimproc window. This catches situations where the only "bug" is just a display issue in that window.

**Test 29: Edit Claim Procedure window deductible when accessed from Edit Claim window.**

Version 12.3

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Proc | Fee | Ded | Est | PatPort |
| 1 | $800.00 | $25.00 | $387.50 | $412.50 |
| 2 | $800.00 | $0.00 | $400.00 | $400.00 |

The patient has one insurance plan, category percentage, subscriber self. Benefits: annual max $1300, 50% coverage on crowns and a $25 general deductible. Both complete crowns are on the same claim, first proc is D2790 for $800 on #1, second proc is D2790 on #9 for $800. The claimproc estimates are calculated when the claim is created. Then, when opening a claimproc from inside of the Edit Claim window, the amounts must match those listed in the table above.

**Test 30: Edit Claim Procedure window deductible when accessed from TP Module.**

Version 12.3+

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Proc | Fee | Ded | Est | PatPort |
| 1 | $800.00 | $25.00 | $387.50 | $412.50 |
| 2 | $800.00 | $0.00 | $400.00 | $400.00 |

The patient has one insurance plan, category percentage, subscriber self. Benefits: annual max $1300, 50% coverage on crowns and a $25 general deductible.  Both TP procs are crowns, first TP proc is D2790 for $800 on #1 with priority 1, second TP proc is D2790 on #9 for $800 with priority 2. First, the estimates are pre-calculated by visiting the TP module. Then, when opening a procedure from TP Module, followed by opening the claimproc from inside of the Edit Procedure window, the amounts must match those listed in the table above.

**Test 31: Related to #6. Limitations should override more general limitations in pending insurance box at lower right of TP module.**
 Version 12.3.45+
Patient has one insurance plan, subscriber self. Benefits: annual max $1000. Other benefit added for limitation on routine preventive of $1000. Routine preventive 100%. A prophy D1110 for $125 is complete, attached to a claim, with insurance estimate of $125 and a claimproc status of NotReceived. Pending insurance at the lower right of the TP module should be $0 because the procedure does not count towards the regular annual max. It instead has its own annual max.

**Test 35: Insurance adjustment deductible applies to all categories.**
 Version 14.3.28+
 Patient has one insurance plan, subscriber self, category percentage. Benefits: Diagnostic 80%, General Deductible $50. One TP procedure: D0120 perExam $200. InsPlan adjustment: $50 deductible. In the TP module, the proc should show that the patient owes $0 on the deductible.

**Test 36: COB Standard with 2 PPOs, no writeoffs.**
 Similar to unit test 17. Ensures that the secondary writeoff is zero when the primary writeoff is zero.
 Version 14.3+
 Patient has two insurance plans, both PPO with Standard COB rule, subscriber self for both. The primary insurance covers 50% perio and secondary covers 80% perio. One perio procedure is treatment planned, a D4341 scaling &amp; root planing, any quadrant.

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Fee | Allowed1 | Allowed2 | InsPay1 | InsPay2 | Writeoff1 | Writeoff2 |
| $206 | $206 | $117 | $103 | $93.60 | $0 | $0 |

**Test 37: PPO insurance estimates for procedures with multiple units.**
 Version 15.2+
 Patient has one PPO insurance plan, subscriber self. The insurance covers 80% Diagnostic, and has a $10 individual general deductible. The insurance plan has a copay of $5 and an allowed amount of $40 for procedure code D0270. One procedure is complete, a D0270 single bitewing. The procedure unit quantity is 3. The fee for each D0270 is $50.

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Copay | Deduct | Fee | Allowed | InsEst | Writeoff | PatientPortion |
| 5\*3=15 | 10 | 50\*3=150 | 40\*3=120 | 95\*0.8=76 | 150-120=30 | 150-76-30=44 |

**Test 38: Category percentage insurance estimates for procedures with multiple units.**
 Version 15.2+
 Patient has one Category Percentage insurance plan, subscriber self. The insurance covers 80% Diagnostic. One procedure is complete, a D0270 single bitewing. The procedure unit quantity is 2. The fee for each D0270 is $50.

|  |  |
| --- | --- |
| Fee | InsEst |
| 50\*2=100 | 100\*0.8=80 |

**Test 39: Claim proc writeoff estimates for procedures with multiple units.**
 Version 15.2+
 Patient has two PPO Percentage plans, both plans with subscriber self. Both primary and secondary cover 80% Diagnostic. The primary insurance plan has an allowed amount of $40 for a D0270 and the secondary plan has an allowed amount of $30 for a D0270. One procedure is treatment planned, a D0270 single bitewing. The procedure unit quantity is 4. The fee for each D0270 is $50.

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Fee | Allowed1 | Allowed2 | InsPay1 | InsPay2 | Writeoff1 | Writeoff2 |
| 50\*4=200 | 40\*4=160 | 30\*4=120 | 160\*0.8=128 | 0 | 200-160=40 | 0 |

**Test 40: Dual insurance with secondary PPO insurance writeoffs calculated based on preference.**
 Version 15.2+
 Patient has a Category Percentage primary insurance plan and PPO secondary plan with Basic COB rule, both plans with subscriber self. Primary covers 80% Diagnostic, secondary covers 100% Diagnostic. The primary insurance has a general deductible of $50 and an allowed amount of $152 for a treatment planned D0272 two bitewings procedure, and secondary has an allowed amount of $87.99 for D0272. The fee on the treatment planned D0272 is $236.

|  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Fee | Deduct | Allowed1 | Allowed2 | InsPay1 | InsPay2 | Writeoff1 | Writeoff2 | PatPortion |
| 236 | 50 | 152 | 87.99 | (152-50)\*0.8+81.6 | 87.99-81.6=6.39 | 0 | 236-81.60-6.39+148.01 | 0 |

The preference used in this unit test is not recommended and is rarely used.
 The preference is noted in [Preferences](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7preferences.html).
 If instead the preference was off for this unit test, then Writeoff2 would have been 0 and the Pat Portion would have been 148.01.

Planned Unit Tests

**Test for feature request 1683: PPO writeoff for certain procedures for certain plans calculate as zero.**
 Patient has one insurance plan, PPO, subscriber self. Benefits: annual max $1000, 80% coverage on restorative. A single one-surface composite (D2391) for #3 added to TP. PPO fee for comp D2391, $102.65. Provider standard fee for comp D2391, $154. PPO fee for amalg D2140, $73.60. Requested behavior is that patient be responsible for the writeoff of $43.77, so that calculated writeoff is zero. Calculated insurance portion would be $73.60 x .8 = $58.88. Patient portion would then be $154 - $58.88 (-$0 wo) = $95.12. Calculations for other procedures for this plan would continue to subtract writeoff from patient portion.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| StandFeeComp | AllowedFeeComp | AllowedFeeAmalg | WriteOff | InsPay 80% | (implied pat port) |
| $154.00 | $102.65 | $73.60 | $0.00 | $58.88 | $95.12 |

**Test for multiple deductibles for basic COB.**
This already works. This unit test would just ensure that it keeps on working.

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Fee | Ded1 | Est1 | PatPort1 | Ded2 | Est2 | patient out of pocket |
| $150.00 | $50.00 | $50.00 | $100.00 | $50.00 | $50.00 | $50.00 |

Patient has two insurance plans, subscriber self for both. Both plans **basic** COB. Both plans have diagnostic 50% and a $50 general deductible. A limited exam, D0120 is treatment planned for $150. Primary estimate is calculated as (150-50) x 0.5 = $50. Secondary estimate with basic COB is the lesser of:
 1. The amount that it would have paid in the absence of any other coverage. (150-50) x 0.5 = $50
 2. The secondary allowed amount minus what primary paid. $150 - $50 = $100
 So $50. Patient out of pocket = 150 - 50 - 50 = 50.

**Insurance payments by procedure.**
 When entering insurance payments by procedure, click writeoff unpaid amounts. Calculate better for secondary insurance on PPO. Take into account amounts actually paid and written off.

**Amt Remaining.**
 Amt remaining should not include pending procedures that do not apply towards max: 1 patient, 1 plan. 3 benefits: $1000 annual max, $10,000 max for diagnostic, 100% coverage on diagnostic. 1 proc, 4 BW, sent to ins, claim pending. At lower right of TP, pending shows 55, but amt remaining should show 1000 instead of the current 945.

See Also:
[HL7 Unit Tests](hl7tests.html)
[Payment Plan Unit Tests](unittestpaymentplan.html)
[Repeating Charges Unit Tests](unittestrepeatingcharges.html)
[Estimate Downgrade Unit Tests](unittestdowngrades.html)