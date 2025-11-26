# File: ./www.opendental.com/site/unittestrepeatingcharges.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - Repeating Charges Unit Tests</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('unittestrepeatingcharges','unittesting','advancedtopics','documentation')">
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
		<div class="TopBar2"><p>Repeating Charges Unit Tests</p></div>
		<div class="GeneralPageContent">
<p>These <a href="unittesting.html">Unit Tests</a> are for <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7repeatingcharges.html">Repeating Charges</a>.</p>
<p class="MarginBottomZero">Test #53: Version 16.1+ Repeat charges should be added after the stop date of the duration of the repeating charge if the number of charges added to the account is less than the number of months the repeat charge was active (a partial month is counted as a full month).  </p>
<ul class="MarginBottomGap">
<li><b>Scenario #1</b>: The start day is before the stop day which is before the billing day. Start 12/08/2015, Stop 12/09/2015. Add a charge on 11/11/2015 and 12/11/2015.</li>
<li><b>Scenario #2</b>: The start day is after the billing day which is after the stop day. Start 11/25/2015, Stop 12/01/2015. Add a charge on 12/11/2015.</li>
<li><b>Scenario #3</b>: The start day is the same as the stop day but before the billing day. Start 11/10/2015, Stop 12/10/2015. Add a charge on 11/11/2015 and 12/11/2015.</li>
<li><b>Scenario #4</b>: The start day is the same as the stop day and the billing day. Start 10/11/2015, Stop 11/11/2015. Add a charge on 11/11/2015.</li>
<li><b>Scenario #5</b>: The start day is after the stop day which is after the billing day. Start 10/15/2015, Stop 11/13/2015. Add a charge on 11/11/2015.</li>
<li><b>Scenario #6</b>: The start day is before the billing day which is before the stop day. Start 10/05/2015, Stop 11/20/2015. Add a charge on 11/11/2015.</li>
</ul>
<p class="MarginBottomZero">Test #54: Version 16.1+ When there are multiple repeat charges on one acount and the repeat charge tool is run, a procedure from the account is deleted, and the repeat charges tool is run again, the same number of procedures that were deleted should be added. </p>
<ul class="MarginBottomGap">
<li><b>Scenario #1</b>: Add three repeating charges with a start date of 11/01/2015 and an amount of $100 with a note of 'Charge #1', 'Charge #2', and 'Charge #3' respectively. Run repeating charge tool. Delete all the procedures with a date of 11/11/2015. Run repeating charge tool. Result should be a procedure with a billing note of 'Charge #1', a procedure with a billing note of 'Charge #2', a procedure note of 'Charge #3' on 11/11/2015, and a procedure with a billing note of 'Charge #1', a procedure with a billing note of 'Charge #2', and a procedure with a billing note of 'Charge #3' on 12/11/2015.</li>
<li><b>Scenario #2</b>: Add three repeating charges with a start date of 11/01/2015 and an amount of $100 with a note of 'Charge #1', 'Charge #2', and 'Charge #3', respectively. Run repeating charge tool. Delete all the procedures with a date of 12/11/2015. Run repeating charge tool. Result should be a procedure with a billing note of 'Charge #1', a procedure with a billing note of 'Charge #2', a procedure with a billing note of 'Charge #3' on 11/11/2015, and a procedure with a billing note of 'Charge #1', a procedure with a billing note of 'Charge #2', and a procedure with a billing note of 'Charge #3' on 12/11/2015.</li>
<li><b>Scenario #3</b>: Add three repeating charges with a start date of 11/01/2015 and an amount of $100 with a note of 'Charge #1', 'Charge #2', and 'Charge #3' respectively. Run repeating charge tool. Delete one procedure with a date of 11/11/2015. Run repeating charge tool. Result should be a procedure with a billing note of 'Charge #1', a procedure with a billing note of 'Charge #2', a procedure with a billing note of 'Charge #3' on 11/11/2015, and a procedure with a billing note of 'Charge #1', a procedure with a billing note of 'Charge #2', a procedure with a billing note of 'Charge #3' on 12/11/2015.</li>
</ul>
<p class="MarginBottomZero">Test #55: Version 16.1+ Changing the amount or start date on a repeat charge does not cause the repeat charge to be added again. </p>
<ul class="MarginBottomGap">
<li><b>Scenario #1</b>: Add a repeating charge with a start date of 11/012015 and an amount of $100. Run repeating charge tool. Change the amount of the repeating charge to $80. Run repeating charge tool. Result should be a procedure of amount $100 on 11/11/2015 and a procedure of amount $100 on 12/11/2015.</li>
<li><b>Scenario #2</b>: Add a repeating charge with a start date of 11/01/2015 and an amount of $100. Run repeating charge tool. Start date of the repeating charge to 11/02/2015. Run repeating charge tool. Result should be a procedure of amount $100 on 11/11/2015 and a procedure of amount $100 on 12/11/2015.</li>
</ul>
<p class="MarginBottomZero">Test #56: Version 16.1+ Repeat charges should not be posted before the start date. </p>
<ul class="MarginBottomGap">
<li><b>Scenario #1</b>: Add a repeat charge with a start date of 12/15/2015. Set the billing cycle day to 15. Run repeating charge tool. Result should be a procedure on 12/15/2015.</li>
<li><b>Scenario #2</b>: Add a repeat charge with a start date of 12/15/2015. Set the billing cycle day to 12. Run repeating charge tool. Result should be no procedure added.</li>
<li><b>Scenario #3</b>: Add a repeat charge with a start date of 12/18/2015. Set the billing cycle day to 15. Run repeating charge tool. Result should be no procedure added.</li>
</ul>
<p class="MarginBottomZero">Related Links: </p>
<ul class="MarginBottomGap">
<li><a href="unittestpaymentplan.html">Payment Plan Unit Tests</a></li>
<li><a href="unittestdowngrades.html">Estimate Downgrade Unit Tests</a></li>
<li><a href="hl7tests.html">HL7 Unit Tests</a></li>
</ul>
		</div>
	</div>
</body>
</html>```
