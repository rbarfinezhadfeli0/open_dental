# File: ./www.opendental.com/site/unittesting.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - Unit Testing</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('unittesting','advancedtopics','documentation')">
	<nav class="LeftTree">
		<div class="TopBarLeft"><p>Table of Contents</p></div>
		<div id="TocTree"><a href="https://www.opendental.com/site/help.html">Help</a></div>
	</nav>
	<div class="RightMain">
		<div class="TopBar">
			<a href="../index.html">
				<div class="Logo">
					<img src="resources/logoWhite160.png" alt="Home" width="158" height="40">
				</div>
			</a>
			<div class="TopBarLinks">
				<div class="TopBarTitle"></div>
				<a href="searchSite.html">
					<div class="TopBarSearch">
						<img src="resources/search.gif"/>
						<p>Search<p>
					</div>
				</a>
			</div>
		</div>
		<div class="TopBar2"><p>Unit Testing</p></div>
		<div class="GeneralPageContent">
<p> See <a href="advancedtopics.html">Advanced Topics</a></p>
<p>Unit testing, aka regression testing, is a programming technique to ensure that the behavior of a complex program does not change between versions. It can be thought of as a contract that the program is guaranteed to follow given the specified scenario. All unit tests are run automatically before each version release. The number of unit tests will grow with each version. Every time we encounter a bug in the math, we first add a unit test (that fails), and then fix the program to make the unit test pass. Power users may submit a unit test scenario for consideration on the forum. After some discussion, we will add it here. Existing unit tests are never changed. Instead, new tests are added and obsolete ones deprecated.</p>
<p>Note: Unit tests have not been added to this page since version 15.2. Many unit tests have been done since then but have not been published.</p>
<p><b>Test 1: Allowed1 greater than Allowed2.</b><br> Version 7.1+<span style="margin-top:3px"> (fix backported to 6.9)</span><br><span style="margin-top:0">
Patient has two insurance plans, both PPO, subscriber self for both. The only benefit entered for both insurance plans is 50% coverage on the crowns category. One procedure is treatment planned, a D2750 PFM crown on #8. <xref href="cob.xml">COB</xref> is Basic; see Tests 17 and 18 for other COB types. If the three fees are entered for each scenario, then the estimates and writeoffs shown in the Treatment Plan module will be:
	</span><br></p>
<table border="1" cellspacing="0" cellpadding="0" bordercolor="#999999" style="margin:0"><tr><td width="70" align="center">Fee</td>
<td width="66" align="center">Allowed1</td>
<td width="66" align="center">Allowed2</td>
<td width="58" align="center">InsPay1</td>
<td width="58" align="center">InsPay2</td>
<td width="58" align="center">Writeoff1</td>
<td width="58" align="center">Writeoff2</td>
<td width="104" align="center">(implied pat port)</td>
</tr>
<tr><td align="center">$1,200.00</td>
<td align="center">$900.00</td>
<td align="center">$650.00</td>
<td align="center">$450.00</td>
<td align="center">$200.00</td>
<td align="center">$300.00</td>
<td align="center">$0.00</td>
<td align="center">$250.00</td>
</tr>
</table>
<p> The <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7cob.html">COB</a> page also explains why there is no secondary writeoff, leaving the patient responsible for the $250.  </p>
<p><b>Test 2: Similar to #1, but Allowed2 greater than Allowed1.</b></p>
<p> Version 7.1+ (fix backported to 6.9)<br><span style="margin-top:0">Patient has two insurance plans, both PPO, subscriber self for both. The only benefit entered for both insurance plans is 50% coverage on the crowns category. One procedure is treatment planned, a D2750 PFM crown on #8. COB is Basic. If the three fees are entered for each scenario, then the estimates and writeoffs shown in the Treatment Plan module will be:</span></p>
<table border="1" cellspacing="0" cellpadding="0" bordercolor="#999999" style="margin:0"><tr><td width="70" align="center">Fee</td>
<td width="66" align="center">Allowed1</td>
<td width="66" align="center">Allowed2</td>
<td width="58" align="center">InsPay1</td>
<td width="58" align="center">InsPay2</td>
<td width="58" align="center">Writeoff1</td>
<td width="58" align="center">Writeoff2</td>
<td width="104" align="center">(implied pat port)</td>
</tr>
<tr><td align="center">$1,200.00</td>
<td align="center">$650.00</td>
<td align="center">$900.00</td>
<td align="center">$325.00</td>
<td align="center">$450.00</td>
<td align="center">$425.00</td>
<td align="center">$0.00</td>
<td align="center">$0.00</td>
</tr>
</table>
<p> Notice that writeoff1 is reduced as a consequence of InsPay2 causing the sum to otherwise go over the total fee.</p>
<p><b> Test 3: Insurance show zero coverage over annual max. Not affected by a frequency.<br></b>Version 7.1+ (fix backported to 6.9)<br> Patient has one insurance plan, category percentage, subscriber self. Benefits include annual max of 1000, crowns 100%, Diagnostic 100%, BW frequency: every 1 year. Two procedures are treatment planned: a crown for $1100, going over the annual max, and a 4BW D0274. The 4BW must show zero coverage.  </p>
<p><b>Test 4: When family benefits, should not show "Over annual max" until max reached.</b><br> Version 7.1+ (fix backported to 6.9)<br> 2 patients in one family. Same insurance. The only benefits are: $1000 individual annual max, $2500 family annual max, and 100% crowns. Add a crown for $830. Crown should show insurance estimate of $830 with no comment about "over annual max".<br></p>
<p><b>Test 5: Both individual and family max taken into account.</b><br> Version 7.1+ (fix backported to 6.9)<br> 2 patients in one family. Same insurance. The only benefits are: $1000 individual annual max, $2500 family annual max, and 100% crowns. Add an insurance used amount of $2000 to one patient. Then have one TP procedure on the other patient, a crown for $830. The insurance on the second patient should show an estimate of $500 due to family max.  </p>
<p><b>Test 6: Limitations override more general limi</b><b>tations.</b> (this allows CHIP to work by adding a separate limitation for preventive) Also see #9 and #31.<br> Version 7.1+ (not backported)<br> Patient has one insurance plan, subscriber self. Benefits: annual max 1000, diagnostic max 1000. First completed procedure, an exam for $50, insurance paid $50. Second procedure, a crown for $830, insurance paid $400. Ins used should show $400 and should not include the $50 because the ins used value should only be concerned with amounts that affect the annual max .  </p>
<p><b>Test 7: A deductible for preventive/diagnostic should only be included once.</b><br> Version 7.2+ (fix backported to 7.0) <br> 1 patient. 1 insplan, 6 benefits: 1000 annual max, 100% preventive, 100% diagnostic, $50 deduct general, $25 deduct preventive, and $25 deduct diagnostic. One TP procedure for $60, code D0120 (perExam). Second TP procedure for $70, code D1110 (prophy). Second procedure should show no deductible. This is because we need to treat the $25 deductible as a single deductible that applies to preventive/diagnostic. It's not two deductibles. This is only a temporary solution, and the better solution will be to support code ranges that include both preventive and diagnostic, and then to enter a single $25 deductible for that range.  </p>
<p><b>Test 8: Similar to test 2, but for completed procedures.</b><br> Version 7.2+ (fix backported to 7.0.43)  </p>
<p><span style="margin-top:0">Patient has two insurance plans, both PPO, subscriber self for both. The only benefits entered for both insurance plans are $1000 max and 50% coverage on the crowns category. One procedure is treatment planned, a D2750 PFM crown on #8. The three fee schedules are set up as below.</span> The procedure is completed and a primary claim is created. The claim should show a writeoff of $500.  </p>
<table border="1" cellspacing="0" cellpadding="0" bordercolor="#999999" style="margin:0"><tr><td width="70" align="center">Fee</td>
<td width="66" align="center">Allowed1</td>
<td width="66" align="center">Allowed2</td>
<td width="58" align="center">InsPay1</td>
<td width="58" align="center">InsPay2</td>
<td width="58" align="center">Writeoff1</td>
<td width="58" align="center">Writeoff2</td>
<td width="104" align="center">(implied pat port)</td>
</tr>
<tr><td align="center">$1,200.00</td>
<td align="center">$600.00</td>
<td align="center">$800.00</td>
<td align="center">$300.00</td>
<td align="center">$400.00</td>
<td align="center">$500.00</td>
<td align="center">$0.00</td>
<td align="center">$0.00</td>
</tr>
</table>
<p><b>Test 9: Related to #6. Limitations should override more general limitations for any benefit, not just exams.</b><br> Version 7.2.39+ (fix backported to 7.1.41) <br><span style="margin-top:3px">Patient has one insurance plan, subscriber self. Benefits: annual max $200. Other benefit added for limitation on D2161 of $2000</span>. Restorative 80%. Two procedures are treatment planned. First is D2161 for $300, insurance estimate of $240. Second procedure is a D2160 for $300. Insurance estimate on second procedure in the TP should be $200 because the first procedure does not count towards the regular annual max. It instead has its own annual max.  </p>
<p><b>Test 10: In Treatment Plan, once annual max is reached, additional procedures should show zero insurance coverage.</b> (this tests the case where preventive frequency is causing errors in the calculation)<br> Version 7.2.43+ (fix backported to 7.1.43+)<br><span style="margin-top:3px">Patient has one insurance plan, subscriber self. Benefits: annual max $400. 100% coverage on routine preventive. Limitation, preventive every 2 years. Three space maintainers (D1515) added to TP, $500 each. First proc should show $400 coverage, and second proc $0 coverage.</span></p>
<p><b>Test 11:Take family max into account even if there is no individual max.</b><br> Version 7.5.5+ (fix backported to 7.4.11+)<br><span style="margin-top:3px">Patient has one insurance plan, subscriber self. Benefits: annual family max $400. No individual max. 100% coverage on restorative. Two amalgams added to TP, $500 each. First proc should show $400 coverage, and second proc $0 coverage.</span></p>
<p><b>Test 12: Writeoff estimates for PPOs when primary and secondary are both the same plan.</b><br> Version 7.8.16+ (fix backported to 7.6.34+)<br> Patient has spouse. Both have insurance with the same PPO plan. The patient has secondary insurance through the spouse. Benefits: annual max $1200. Deductible $0. 100% coverage on a crown. One crown added to TP for $1400. Allowed $1100.  </p>
<table border="1" cellspacing="0" cellpadding="0" bordercolor="#999999" style="margin:0"><tr><td width="70" align="center">Fee</td>
<td width="66" align="center">Allowed1</td>
<td width="66" align="center">Allowed2</td>
<td width="58" align="center">InsPay1</td>
<td width="58" align="center">InsPay2</td>
<td width="58" align="center">Writeoff1</td>
<td width="58" align="center">Writeoff2</td>
<td width="104" align="center">(implied pat port)</td>
</tr>
<tr><td align="center">$1,400.00</td>
<td align="center">$1100.00</td>
<td align="center">$1100.00</td>
<td align="center">$1100.00</td>
<td align="center">$0.00</td>
<td align="center">$300.00</td>
<td align="center">$0.00</td>
<td align="center">$0.00</td>
</tr>
</table>
<p><b>Test 13: Ortho procedures should not affect insurance used section at lower right of TP module.</b><br> Version 7.9.9+ (fix backported to 7.8.24+, 7.6.38+)<br><span style="margin-top:3px">Patient has one insurance plan, subscriber self. Benefits: annual max $100, ortho max $500, 100% on diagnostic and ortho. 2 procs: D0140 (limEx) $59, and D8090 (comprehensive ortho) $348. Each sent to ins on separate claim, received, paid 100%. </span>Insurance used should show $59.  </p>
<p><b>Test 14: Primary estimate should not be affected by secondary claim.</b><br> Version 11.0.27+ (fix backported to 7.9.29+)<br> Patient has 2 PPO insurance plans, subscriber self for both. Each plan has benefits: annual max $1200, 80% coverage on restorative. 1 proc: D2160 amalg on #19, $1279 status of TP. Allowed1=$1279, allowed2=$110. Proc set complete, attached to primary claim and secondary claim. Primary estimate should be $1023.20.  </p>
<p></p>
<p><b>Test 15: Deductibles can be created to override the regular deductible.</b><br> Version 7.0+ Not version specific; it has always worked this way. The reason for adding this unit test was to ensure that it keeps working.<br> Patient has one insurance plan, subscriber self. Benefits: annual max $1000, deductible $50, 100% coverage on preventive/diagnostic/xray, $0 deductible on preventive/diagnostic/xray, 80% coverage on all 4 general categories, 1 manually entered benefit for $45 deductible on code D0330 pano. First TP proc is D0330 for $95, second TP proc is D2150 on #30 for $200. In TP module, $45 deductible shows on the D0330, and a $5 deductible shows on the D2150.  </p>
<p><b>Test 16: Multiple deductibles for categories should not exceed the regular deductible.</b><br> Version 11.1.3+ (fix backported to 11.0.32+)<br> Patient has one insurance plan, subscriber self. Benefits: annual max $1000, deductible $50, 100% coverage on preventive/diagnostic/xray, $0 deductible on preventive/diagnostic/xray, 80% coverage on all 4 general categories, 1 manually entered benefit for $45 deductible on code D0330, $25 deductible on D0220, add treatment plannned procedure D0330 fee $100, D0220 fee $75. In TP module, $45 deductible should show on D0330, and $5 on D0220.  </p>
<p><b>Test 17: COB Standard with 2 PPOs.</b><br></p>
<p> Same as unit tests 1 and 2, but with <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7cob.html">COB</a> Standard rather than Basic.  </p>
<p> Version 12.0+ <br> Patient has two insurance plans, both PPO, subscriber self for both. The only benefit entered for both insurance plans is 50% coverage on the crowns category. One procedure is treatment planned, a D2750 PFM crown on #8. This table shows two different fee schedule scenarios.<br></p>
<table border="1" cellspacing="0" cellpadding="0" bordercolor="#999999" style="margin:0"><tr><td width="50" align="center">#</td>
<td width="70" align="center">Fee</td>
<td width="66" align="center">Allowed1</td>
<td width="66" align="center">Allowed2</td>
<td width="58" align="center">InsPay1</td>
<td width="58" align="center">InsPay2</td>
<td width="58" align="center">Writeoff1</td>
<td width="58" align="center">Writeoff2</td>
<td width="104" align="center">(implied pat port)</td>
</tr>
<tr><td align="center">1</td>
<td align="center">$1,200.00</td>
<td align="center">$900.00</td>
<td align="center">$650.00</td>
<td align="center">$450.00</td>
<td align="center">$325.00</td>
<td align="center">$300.00</td>
<td align="center">$0.00</td>
<td align="center">$125.00</td>
</tr>
<tr><td align="center">2</td>
<td align="center">$1,200.00</td>
<td align="center">$650.00</td>
<td align="center">$900.00</td>
<td align="center">$325.00</td>
<td align="center">$325.00</td>
<td align="center">$550.00</td>
<td align="center">$0.00</td>
<td align="center">$0.00</td>
</tr>
</table>
<p><b> Test 18: COB CarveOut for category percentage plan.<br></b> Version 12.0+ <br><span style="margin-top:0">Patient has two insurance plans, subscriber self for both. Plan 1 has 50% coverage on the crowns category and plan 2 has 75% coverage. One procedure is treatment planned, a D2750 PFM crown on #8 for $1200. Primary estimate should be $600, and secondary $300.</span></p>
<p><b>Test 19: Multiple deductibles.</b></p>
<p>Version 12.0+</p>
<table border="1" cellspacing="0" cellpadding="0" bordercolor="#999999" style="margin:0"><tr><td width="70" align="center">Fee</td>
<td width="66" align="center">Ded1</td>
<td width="66" align="center">Est1</td>
<td width="58" align="center">PatPort1</td>
<td width="58" align="center">Ded2</td>
<td width="58" align="center">Est2</td>
<td width="136" align="center">patient out of pocket</td>
</tr>
<tr><td align="center">$150.00</td>
<td align="center">$50.00</td>
<td align="center">$50.00</td>
<td align="center">$100.00</td>
<td align="center">$50.00</td>
<td align="center">$50.00</td>
<td align="center">$50.00</td>
</tr>
</table>
<p> Patient has two insurance plans, subscriber self for both. Both plans standard COB. Both plans have diagnostic 50% and a $50 general deductible. A limited exam, D0120 is treatment planned for $150. Primary estimate is calculated as (150-50) x 0.5 = $50. Secondary estimate with standard COB is the lesser of:<br> 1. The amount that it would have paid in the absence of any other coverage. (150-50) x 0.5 = $50<br> 2. The patient's portion under the primary plan. $100<br> So $50. Patient out of pocket = 150 - 50 - 50 = 50.  </p>
<p><b>Test 20: Both individual and family deductibles taken into account for insurance remaining display at LR of TP module.</b></p>
<p>Version 12.0+</p>
<p> Three patients, all with the same insurance plan. Guarantor is subscriber. $75 individual deductible, $150 family deductible. Patient 3 has a $75 insurance adjustment for a previously applied deductible. Patient 2 has a procedure D2750 for $1280 that has been paid, including a deductible of $50. Patient 1, the guarantor, has a procedure treatment planned, D4355 for $135. In the guarantor's TP module, at the lower right, the deductible remaining should be $25. An internal test is also performed to verify that if the family deductible were ignored, that the deductible remaining would show $75.</p>
<p><b>Test 21: Deductibles for procedures not covered by insurance.</b></p>
<p>(researching)</p>
<p>Patient has one insurance plan, subscriber self. Benefits: annual max $1000, deductible $50. One treatment plannned procedure D0120 fee $55. In the TP module, deductible should be $0.</p>
<p></p>
<p><b>Test 22: Overtime for after time of day.</b><br> Version 12.3+, Deprecated 13.3<br> There is an overtime rule for the employee for overtime after 4pm. Option is on to adjust if breaks over 30 minutes. Push the Calc Daily button. 7:50 of regular time.  </p>
<table width="597" border="1" cellpadding="0" cellspacing="0" bordercolor="#999999" style="margin:0"><tr><td COLSPAN="3" ALIGN="CENTER">Scenario</td>
<td COLSPAN="2" ALIGN="CENTER">Results</td>
<td WIDTH="20" ALIGN="CENTER"></td>
<td WIDTH="86" ALIGN="CENTER"></td>
</tr>
<tr><td width="115" ALIGN="CENTER">TimeDisplayed1</td>
<td width="115" ALIGN="CENTER">TimeDisplayed2</td>
<td width="89" ALIGN="CENTER">ClockStatus</td>
<td width="79" ALIGN="CENTER">AdjustAuto</td>
<td width="77" ALIGN="CENTER">OtimeAuto</td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER">Calc. Len.</td>
</tr>
<tr><td ALIGN="CENTER">08:00:00 AM</td>
<td ALIGN="CENTER">04:40:00 PM</td>
<td ALIGN="CENTER">Home</td>
<td ALIGN="CENTER">-00:10:00</td>
<td ALIGN="CENTER">00:40:00</td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER">8:40</td>
</tr>
<tr><td ALIGN="CENTER">11:00:00 AM</td>
<td ALIGN="CENTER">11:40:00 AM</td>
<td ALIGN="CENTER">Break</td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER">0:40</td>
</tr>
</table>
<br><b>Test 23: Overtime for before time of day.</b><span style="margin:0"><br />
Version 12.3+, Deprecated 13.3
	</span><br> There is an overtime rule for the employee for overtime before 7:30am. Option is on to adjust if breaks over 30 minutes. Push the Calc Daily button. 8:20 of regular time.  <table width="597" border="1" cellpadding="0" cellspacing="0" bordercolor="#999999" style="margin:0"><tr><td colspan="3" align="CENTER">Scenario</td>
<td colspan="2" align="CENTER">Results</td>
<td width="20" align="CENTER"><br></td>
<td width="86" align="CENTER"><br></td>
</tr>
<tr><td width="115" align="CENTER">TimeDisplayed1</td>
<td width="115" align="CENTER">TimeDisplayed2</td>
<td width="89" align="CENTER">ClockStatus</td>
<td width="79" align="CENTER">AdjustAuto</td>
<td width="77" align="CENTER">OtimeAuto</td>
<td align="CENTER"><br></td>
<td align="CENTER">Calc. Len.</td>
</tr>
<tr><td align="CENTER">06:00:00 AM</td>
<td align="CENTER">04:00:00 PM</td>
<td align="CENTER">Home</td>
<td align="CENTER">-00:10:00</td>
<td align="CENTER">01:30:00</td>
<td align="CENTER"><br></td>
<td align="CENTER">10:00</td>
</tr>
<tr><td align="CENTER">11:00:00 AM</td>
<td align="CENTER">11:40:00 AM</td>
<td align="CENTER">Break</td>
<td align="CENTER"><br></td>
<td align="CENTER"><br></td>
<td align="CENTER"><br></td>
<td align="CENTER">0:40</td>
</tr>
</table>
<br><b>Test 24: Overtime after hours worked per day.</b><span style="margin:0"><br />
Version 12.3+
	</span><br> There is an overtime rule for the employee for more than 10 hours per day. Option is on to adjust if breaks over 30 minutes. Push the Calc Daily button. 10:00 of regular time.  <table width="597" border="1" cellpadding="0" cellspacing="0" bordercolor="#999999" style="margin:0"><tr><td COLSPAN="3" ALIGN="CENTER">Scenario</td>
<td COLSPAN="2" ALIGN="CENTER">Results</td>
<td WIDTH="20" ALIGN="CENTER"></td>
<td WIDTH="86" ALIGN="CENTER"></td>
</tr>
<tr><td width="115" ALIGN="CENTER">TimeDisplayed1</td>
<td width="115" ALIGN="CENTER">TimeDisplayed2</td>
<td width="89" ALIGN="CENTER">ClockStatus</td>
<td width="79" ALIGN="CENTER">AdjustAuto</td>
<td width="77" ALIGN="CENTER">OtimeAuto</td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER">Calc. Len.</td>
</tr>
<tr><td ALIGN="CENTER">08:00:00 AM</td>
<td ALIGN="CENTER">01:00:00 PM</td>
<td ALIGN="CENTER">Lunch</td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER">5:00</td>
</tr>
<tr><td ALIGN="CENTER">10:00:00 AM</td>
<td ALIGN="CENTER">10:20:00 AM</td>
<td ALIGN="CENTER">Break</td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER">0:20</td>
</tr>
<tr><td ALIGN="CENTER">02:00:00 PM</td>
<td ALIGN="CENTER">09:00:00 PM</td>
<td ALIGN="CENTER">Home</td>
<td ALIGN="CENTER">-00:10:00</td>
<td ALIGN="CENTER">01:50:00</td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER">7:00</td>
</tr>
<tr><td ALIGN="CENTER">04:00:00 PM</td>
<td ALIGN="CENTER">4:20:00 PM</td>
<td ALIGN="CENTER">Break</td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER">0:20</td>
</tr>
</table>
<br><b>Test 25: Overtime during normal work week.</b><span style="margin:0"><br />
Version 12.3+
	</span><br> Work week is entirely within the same pay period. Push the Calc Week OT button.  <table width="597" border="1" cellpadding="0" cellspacing="0" bordercolor="#999999" style="margin:0"><tr><td COLSPAN="3" ALIGN="CENTER">Scenario</td>
<td COLSPAN="2" ALIGN="CENTER">Results</td>
<td WIDTH="20" ALIGN="CENTER"></td>
<td WIDTH="86" ALIGN="CENTER"></td>
</tr>
<tr><td width="115" ALIGN="CENTER">TimeDisplayed1</td>
<td width="115" ALIGN="CENTER">TimeDisplayed2</td>
<td width="89" ALIGN="CENTER">ClockStatus</td>
<td width="79" ALIGN="CENTER">AdjustAuto</td>
<td width="77" ALIGN="CENTER">OtimeAuto</td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER">Calc. Len.</td>
</tr>
<tr><td ALIGN="CENTER">06:00:00 AM</td>
<td ALIGN="CENTER">05:00:00 PM</td>
<td ALIGN="CENTER">Home</td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER">11:00</td>
</tr>
<tr><td ALIGN="CENTER">06:00:00 AM</td>
<td ALIGN="CENTER">05:00:00 PM</td>
<td ALIGN="CENTER">Home</td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER">11:00</td>
</tr>
<tr><td ALIGN="CENTER">06:00:00 AM</td>
<td ALIGN="CENTER">05:00:00 PM</td>
<td ALIGN="CENTER">Home</td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER">11:00</td>
</tr>
<tr><td ALIGN="CENTER">06:00:00 AM</td>
<td ALIGN="CENTER">05:00:00 PM</td>
<td ALIGN="CENTER">Home</td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER">11:00</td>
</tr>
</table>
<br><table width="347" border="1" cellpadding="0" cellspacing="0" bordercolor="#999999" style="margin:0"><tr><td COLSPAN="4" ALIGN="CENTER">Results (TimeAdjust Entry)</td>
</tr>
<tr><td width="90" ALIGN="CENTER">TimeEntry</td>
<td width="87" ALIGN="CENTER">RegHours</td>
<td width="105" ALIGN="CENTER">OtimeHours</td>
<td width="55" ALIGN="CENTER">IsAuto</td>
</tr>
<tr><td ALIGN="CENTER">8:00 PM</td>
<td ALIGN="CENTER">-4:00</td>
<td ALIGN="CENTER">4:00</td>
<td ALIGN="CENTER">True</td>
</tr>
</table>
<br><b>Test 26: Overtime across two pay periods.</b><span style="margin:0"><br />
Version 12.3+
	</span><br> Work week is split between two pay periods While viewing the first pay period, push the Calc Week OT button. View the second pay period, and push the Calc Week OT button.  <table width="597" border="1" cellpadding="0" cellspacing="0" bordercolor="#999999" style="margin:0"><tr><td COLSPAN="3" ALIGN="CENTER">Scenario</td>
<td COLSPAN="2" ALIGN="CENTER">Results</td>
<td WIDTH="20" ALIGN="CENTER"></td>
<td WIDTH="86" ALIGN="CENTER"></td>
</tr>
<tr><td width="115" ALIGN="CENTER">TimeDisplayed1</td>
<td width="115" ALIGN="CENTER">TimeDisplayed2</td>
<td width="89" ALIGN="CENTER">ClockStatus</td>
<td width="79" ALIGN="CENTER">AdjustAuto</td>
<td width="77" ALIGN="CENTER">OtimeAuto</td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER">Calc. Len.</td>
</tr>
<tr><td ALIGN="CENTER">06:00:00 AM</td>
<td ALIGN="CENTER">05:00:00 PM</td>
<td ALIGN="CENTER">Home</td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER">11:00</td>
</tr>
<tr><td ALIGN="CENTER">06:00:00 AM</td>
<td ALIGN="CENTER">05:00:00 PM</td>
<td ALIGN="CENTER">Home</td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER">11:00</td>
</tr>
<tr><td ALIGN="CENTER">06:00:00 AM</td>
<td ALIGN="CENTER">05:00:00 PM</td>
<td ALIGN="CENTER">Home</td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER">11:00</td>
</tr>
<tr><td COLSPAN="5" ALIGN="CENTER"><b>Start of new pay period.</b></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
</tr>
<tr><td ALIGN="CENTER">06:00:00 AM</td>
<td ALIGN="CENTER">05:00:00 PM</td>
<td ALIGN="CENTER">Home</td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER">11:00</td>
</tr>
</table>
<br><table width="347" border="1" cellpadding="0" cellspacing="0" bordercolor="#999999" style="margin:0"><tr><td COLSPAN="4" ALIGN="CENTER">Results (TimeAdjust Entry)</td>
</tr>
<tr><td width="90" ALIGN="CENTER">TimeEntry</td>
<td width="87" ALIGN="CENTER">RegHours</td>
<td width="105" ALIGN="CENTER">OtimeHours</td>
<td width="55" ALIGN="CENTER">IsAuto</td>
</tr>
<tr><td ALIGN="CENTER">8:00 PM</td>
<td ALIGN="CENTER">-4:00</td>
<td ALIGN="CENTER">4:00</td>
<td ALIGN="CENTER">True</td>
</tr>
</table>
<br><b>Test 27: Overtime when workweek starts on a different day of the week.</b><span style="margin:0"><br />
Version 12.3+
	</span><br> The work week starts on Wednesday. Push the Calc Daily button, then push the Calc Week OT button.  <table width="597" border="1" cellpadding="0" cellspacing="0" bordercolor="#999999" style="margin:0"><tr><td COLSPAN="3" ALIGN="CENTER">Scenario</td>
<td COLSPAN="2" ALIGN="CENTER">Results</td>
<td WIDTH="20" ALIGN="CENTER"></td>
<td WIDTH="86" ALIGN="CENTER"></td>
</tr>
<tr><td width="115" ALIGN="CENTER">TimeDisplayed1</td>
<td width="115" ALIGN="CENTER">TimeDisplayed2</td>
<td width="89" ALIGN="CENTER">ClockStatus</td>
<td width="79" ALIGN="CENTER">AdjustAuto</td>
<td width="77" ALIGN="CENTER">OtimeAuto</td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER">Calc. Len.</td>
</tr>
<tr><td ALIGN="CENTER">06:00:00 AM</td>
<td ALIGN="CENTER">05:00:00 PM</td>
<td ALIGN="CENTER">Home</td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER">11:00</td>
</tr>
<tr><td ALIGN="CENTER">06:00:00 AM</td>
<td ALIGN="CENTER">05:00:00 PM</td>
<td ALIGN="CENTER">Home</td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER">11:00</td>
</tr>
<tr><td COLSPAN="5" ALIGN="CENTER"><b>Wednesday, start of new work week.</b></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
</tr>
<tr><td ALIGN="CENTER">06:00:00 AM</td>
<td ALIGN="CENTER">05:00:00 PM</td>
<td ALIGN="CENTER">Home</td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER">11:00</td>
</tr>
<tr><td ALIGN="CENTER">06:00:00 AM</td>
<td ALIGN="CENTER">05:00:00 PM</td>
<td ALIGN="CENTER">Home</td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER">11:00</td>
</tr>
<tr><td ALIGN="CENTER">06:00:00 AM</td>
<td ALIGN="CENTER">05:00:00 PM</td>
<td ALIGN="CENTER">Home</td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER">11:00</td>
</tr>
<tr><td ALIGN="CENTER">06:00:00 AM</td>
<td ALIGN="CENTER">05:00:00 PM</td>
<td ALIGN="CENTER">Home</td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER"></td>
<td ALIGN="CENTER">11:00</td>
</tr>
</table>
<br><table width="347" border="1" cellpadding="0" cellspacing="0" bordercolor="#999999" style="margin:0"><tr><td COLSPAN="4" ALIGN="CENTER">Results (TimeAdjust Entry)</td>
</tr>
<tr><td width="90" ALIGN="CENTER">TimeEntry</td>
<td width="87" ALIGN="CENTER">RegHours</td>
<td width="105" ALIGN="CENTER">OtimeHours</td>
<td width="55" ALIGN="CENTER">IsAuto</td>
</tr>
<tr><td ALIGN="CENTER">8:00 PM</td>
<td ALIGN="CENTER">-4:00</td>
<td ALIGN="CENTER">4:00</td>
<td ALIGN="CENTER">True</td>
</tr>
</table>
<br><p><b>Test 28: Edit Claim Procedure window deductible when accessed from Chart Module.</b></p>
<p>Version 12.3+ </p>
<table border="1" cellspacing="0" cellpadding="0" bordercolor="#999999" style="margin:0"><tr><td width="70" align="center">Proc</td>
<td width="66" align="center">Fee</td>
<td width="66" align="center">Ded</td>
<td width="58" align="center">Est</td>
<td width="58" align="center">PatPort</td>
</tr>
<tr><td align="center">1</td>
<td align="center">$800.00</td>
<td align="center">$25.00</td>
<td align="center">$387.50</td>
<td align="center">$412.50</td>
</tr>
<tr><td align="center">2</td>
<td align="center">$800.00</td>
<td align="center">$0.00</td>
<td align="center">$400.00</td>
<td align="center">$400.00</td>
</tr>
</table>
<p> The patient has one insurance plan, category percentage, subscriber self. Benefits: annual max $1300, 50% coverage on crowns, and a $25 general deductible. <span style="margin:0">Both TP procs are crowns, first TP proc is D2790 for $800 on #1 with priority 1, second TP proc is D2790 on #9 for $800 with priority 2.</span> First, the estimates are pre-calculated by visiting the TP module. Then, when opening a procedure from Chart Module, followed by opening the claimproc from inside of the Edit Procedure window, the amounts must match those listed in the table above. This unit test is the first one that looks at the values showing in the claimproc window. This catches situations where the only "bug" is just a display issue in that window.  </p>
<p><b>Test 29: Edit Claim Procedure window deductible when accessed from Edit Claim window.</b></p>
<p>Version 12.3</p>
<table border="1" cellspacing="0" cellpadding="0" bordercolor="#999999" style="margin:0"><tr><td width="70" align="center">Proc</td>
<td width="66" align="center">Fee</td>
<td width="66" align="center">Ded</td>
<td width="58" align="center">Est</td>
<td width="58" align="center">PatPort</td>
</tr>
<tr><td align="center">1</td>
<td align="center">$800.00</td>
<td align="center">$25.00</td>
<td align="center">$387.50</td>
<td align="center">$412.50</td>
</tr>
<tr><td align="center">2</td>
<td align="center">$800.00</td>
<td align="center">$0.00</td>
<td align="center">$400.00</td>
<td align="center">$400.00</td>
</tr>
</table>
 The patient has one insurance plan, category percentage, subscriber self. Benefits: annual max $1300, 50% coverage on crowns and a $25 general deductible. <span style="margin:0">Both complete crowns are on the same claim, first proc is D2790 for $800 on #1, second proc is D2790 on #9 for $800.</span> The claimproc estimates are calculated when the claim is created. Then, when opening a claimproc from inside of the Edit Claim window, the amounts must match those listed in the table above.<br><br><p><b>Test 30: Edit Claim Procedure window deductible when accessed from TP Module.</b></p>
<p>Version 12.3+ </p>
<table border="1" cellspacing="0" cellpadding="0" bordercolor="#999999" style="margin:0"><tr><td width="70" align="center">Proc</td>
<td width="66" align="center">Fee</td>
<td width="66" align="center">Ded</td>
<td width="58" align="center">Est</td>
<td width="58" align="center">PatPort</td>
</tr>
<tr><td align="center">1</td>
<td align="center">$800.00</td>
<td align="center">$25.00</td>
<td align="center">$387.50</td>
<td align="center">$412.50</td>
</tr>
<tr><td align="center">2</td>
<td align="center">$800.00</td>
<td align="center">$0.00</td>
<td align="center">$400.00</td>
<td align="center">$400.00</td>
</tr>
</table>
 The patient has one insurance plan, category percentage, subscriber self. Benefits: annual max $1300, 50% coverage on crowns and a $25 general deductible. <span style="margin:0"> Both TP procs are crowns, first TP proc is D2790 for $800 on #1 with priority 1, second TP proc is D2790 on #9 for $800 with priority 2.</span> First, the estimates are pre-calculated by visiting the TP module. Then, when opening a procedure from TP Module, followed by opening the claimproc from inside of the Edit Procedure window, the amounts must match those listed in the table above. <p><b>Test 31: Related to #6. Limitations should override more general limitations in pending insurance box at lower right of TP module.</b><br> Version 12.3.45+ <br><span style="margin-top:3px">Patient has one insurance plan, subscriber self. Benefits: annual max $1000. Other benefit added for limitation on routine preventive of $1000</span>. Routine preventive 100%. A prophy D1110 for $125 is complete, attached to a claim, with insurance estimate of $125 and a claimproc status of NotReceived. Pending insurance at the lower right of the TP module should be $0 because the procedure does not count towards the regular annual max. It instead has its own annual max.  </p>
<p><b>Test 35: Insurance adjustment deductible applies to all categories.</b><br> Version 14.3.28+<br> Patient has one insurance plan, subscriber self, category percentage. Benefits: Diagnostic 80%, General Deductible $50. One TP procedure: D0120 perExam $200. InsPlan adjustment: $50 deductible. In the TP module, the proc should show that the patient owes $0 on the deductible.  </p>
<p><b>Test 36: COB Standard with 2 PPOs, no writeoffs.</b><br> Similar to unit test 17. Ensures that the secondary writeoff is zero when the primary writeoff is zero.<br> Version 14.3+<br> Patient has two insurance plans, both PPO with Standard COB rule, subscriber self for both. The primary insurance covers 50% perio and secondary covers 80% perio. One perio procedure is treatment planned, a D4341 scaling &amp;amp; root planing, any quadrant.  </p>
<table width="469" border="1" cellspacing="0" cellpadding="2"><tr><td width="53">Fee</td>
<td width="84">Allowed1</td>
<td width="84">Allowed2</td>
<td width="76">InsPay1</td>
<td width="76">InsPay2</td>
<td width="82">Writeoff1</td>
<td width="49">Writeoff2</td>
</tr>
<tr><td>$206 </td>
<td>$206 </td>
<td>$117</td>
<td>$103</td>
<td>$93.60</td>
<td>$0</td>
<td>$0</td>
</tr>
</table>
<p><b>Test 37: PPO insurance estimates for procedures with multiple units.</b><br> Version 15.2+<br> Patient has one PPO insurance plan, subscriber self. The insurance covers 80% Diagnostic, and has a $10 individual general deductible. The insurance plan has a copay of $5 and an allowed amount of $40 for procedure code D0270. One procedure is complete, a D0270 single bitewing. The procedure unit quantity is 3. The fee for each D0270 is $50.<br></p>
<table width="607" border="1" cellspacing="0" cellpadding="2"><tr><td width="67">Copay</td>
<td width="61">Deduct</td>
<td width="57">Fee</td>
<td width="78">Allowed</td>
<td width="84">InsEst</td>
<td width="108">Writeoff</td>
<td width="108">PatientPortion</td>
</tr>
<tr><td>5*3=15</td>
<td>10 </td>
<td>50*3=150</td>
<td>40*3=120</td>
<td>95*0.8=76</td>
<td>150-120=30</td>
<td>150-76-30=44</td>
</tr>
</table>
<p><b>Test 38: Category percentage insurance estimates for procedures with multiple units.</b><br> Version 15.2+<br> Patient has one Category Percentage insurance plan, subscriber self. The insurance covers 80% Diagnostic. One procedure is complete, a D0270 single bitewing. The procedure unit quantity is 2. The fee for each D0270 is $50.<br></p>
<table width="224" border="1" cellspacing="0" cellpadding="2"><tr><td width="88">Fee</td>
<td width="122">InsEst</td>
</tr>
<tr><td>50*2=100</td>
<td>100*0.8=80</td>
</tr>
</table>
<p><b>Test 39: Claim proc writeoff estimates for procedures with multiple units.</b><br> Version 15.2+<br> Patient has two PPO Percentage plans, both plans with subscriber self. Both primary and secondary cover 80% Diagnostic. The primary insurance plan has an allowed amount of $40 for a D0270 and the secondary plan has an allowed amount of $30 for a D0270. One procedure is treatment planned, a D0270 single bitewing. The procedure unit quantity is 4. The fee for each D0270 is $50.<br></p>
<table width="559" border="1" cellspacing="0" cellpadding="2"><tr><td width="69">Fee</td>
<td width="71">Allowed1</td>
<td width="82">Allowed2</td>
<td width="78">InsPay1</td>
<td width="80">InsPay2</td>
<td width="80">Writeoff1</td>
<td width="55">Writeoff2</td>
</tr>
<tr><td>50*4=200 </td>
<td>40*4=160</td>
<td>30*4=120</td>
<td>160*0.8=128</td>
<td>0</td>
<td> 200-160=40</td>
<td>0</td>
</tr>
</table>
<p><b>Test 40: Dual insurance with secondary PPO insurance writeoffs calculated based on preference.</b><br> Version 15.2+<br> Patient has a Category Percentage primary insurance plan and PPO secondary plan with Basic COB rule, both plans with subscriber self. Primary covers 80% Diagnostic, secondary covers 100% Diagnostic. The primary insurance has a general deductible of $50 and an allowed amount of $152 for a treatment planned D0272 two bitewings procedure, and secondary has an allowed amount of $87.99 for D0272. The fee on the treatment planned D0272 is $236.  </p>
<table width="673"><tr><td width="22">Fee</td>
<td width="41">Deduct</td>
<td width="52">Allowed1</td>
<td width="52">Allowed2</td>
<td width="97">InsPay1</td>
<td width="86">InsPay2</td>
<td width="51">Writeoff1</td>
<td width="148">Writeoff2</td>
<td width="66">PatPortion</td>
</tr>
<tr><td>236</td>
<td>50</td>
<td>152</td>
<td>87.99</td>
<td>(152-50)*0.8+81.6</td>
<td>87.99-81.6=6.39</td>
<td>0</td>
<td>236-81.60-6.39+148.01</td>
<td>0</td>
</tr>
</table>
<p> The preference used in this unit test is not recommended and is rarely used.<br> The preference is noted in <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7preferences.html">Preferences</a>.<br> If instead the preference was off for this unit test, then Writeoff2 would have been 0 and the Pat Portion would have been 148.01.  </p>
<p><span class="parHead">Planned Unit Tests</span><br></p>
<p><b>Test for feature request 1683: PPO writeoff for certain procedures for certain plans calculate as zero.</b><br> Patient has one insurance plan, PPO, subscriber self. Benefits: annual max $1000, 80% coverage on restorative. A single one-surface composite (D2391) for #3 added to TP. PPO fee for comp D2391, $102.65. Provider standard fee for comp D2391, $154. PPO fee for amalg D2140, $73.60. Requested behavior is that patient be responsible for the writeoff of $43.77, so that calculated writeoff is zero. Calculated insurance portion would be $73.60 x .8 = $58.88. Patient portion would then be $154 - $58.88 (-$0 wo) = $95.12. Calculations for other procedures for this plan would continue to subtract writeoff from patient portion.  </p>
<table><tr><td width="109" align="center">StandFeeComp</td>
<td width="108" align="center">AllowedFeeComp</td>
<td width="112" align="center">AllowedFeeAmalg</td>
<td width="86" align="center">WriteOff</td>
<td width="76" align="center">InsPay 80%</td>
<td width="105" align="center">(implied pat port)</td>
</tr>
<tr><td align="center">$154.00</td>
<td align="center">$102.65</td>
<td align="center">$73.60</td>
<td align="center">$0.00</td>
<td align="center">$58.88</td>
<td align="center">$95.12</td>
</tr>
</table>
<p><b>Test for multiple deductibles for basic COB.</b><br><span style="margin:0">This already works. This unit test would just ensure that it keeps on working.</span></p>
<table><tr><td width="70" align="center">Fee</td>
<td width="66" align="center">Ded1</td>
<td width="66" align="center">Est1</td>
<td width="58" align="center">PatPort1</td>
<td width="58" align="center">Ded2</td>
<td width="58" align="center">Est2</td>
<td width="136" align="center">patient out of pocket</td>
</tr>
<tr><td align="center">$150.00</td>
<td align="center">$50.00</td>
<td align="center">$50.00</td>
<td align="center">$100.00</td>
<td align="center">$50.00</td>
<td align="center">$50.00</td>
<td align="center">$50.00</td>
</tr>
</table>
<p> Patient has two insurance plans, subscriber self for both. Both plans <b>basic</b> COB. Both plans have diagnostic 50% and a $50 general deductible. A limited exam, D0120 is treatment planned for $150. Primary estimate is calculated as (150-50) x 0.5 = $50. Secondary estimate with basic COB is the lesser of:<br> 1. The amount that it would have paid in the absence of any other coverage. (150-50) x 0.5 = $50<br> 2. The secondary allowed amount minus what primary paid. $150 - $50 = $100<br> So $50. Patient out of pocket = 150 - 50 - 50 = 50.  </p>
<p><b>Insurance payments by procedure.</b><br> When entering insurance payments by procedure, click writeoff unpaid amounts. Calculate better for secondary insurance on PPO. Take into account amounts actually paid and written off.  </p>
<p><b>Amt Remaining.</b><br> Amt remaining should not include pending procedures that do not apply towards max: 1 patient, 1 plan. 3 benefits: $1000 annual max, $10,000 max for diagnostic, 100% coverage on diagnostic. 1 proc, 4 BW, sent to ins, claim pending. At lower right of TP, pending shows 55, but amt remaining should show 1000 instead of the current 945.  </p>
<p> See Also:<br><a href="hl7tests.html">HL7 Unit Tests</a><br><a href="unittestpaymentplan.html">Payment Plan Unit Tests</a><br><a href="unittestrepeatingcharges.html">Repeating Charges Unit Tests</a><br><a href="unittestdowngrades.html">Estimate Downgrade Unit Tests</a></p>
		</div>
	</div>
</body>
</html>```
