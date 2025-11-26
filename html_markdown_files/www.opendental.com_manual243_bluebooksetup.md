# File: ./www.opendental.com/manual243/bluebooksetup.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Insurance Blue Book Setup</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('bluebooksetup','+familyinsurance','+setup','mainmenu','manual')">
<nav class="LeftTree">
<div class="TopBarLeft"><p>Table of Contents</p></div>
<div id="Manual"><a href="manual.html">Manual</a></div>
</nav>
<div class="RightMain">
<div class="TopBar">
    <a href="../index.html">
        <div class="Logo">
            <img src="resources/logoWhite160.png" alt="Home" width="158" height="40">
        </div>
    </a>
    <div class="TopBarLinks">
        <div class="TopBarTitle">Manual 
					<select id="SelectVersion" class="TopBarVersionDrop" onchange="location = this.options[this.selectedIndex].value;
						for (var i = 0; i < document.getElementById('SelectVersion').options.length; i++) {
							if (document.getElementById('SelectVersion').options[i].attributes.selected)
								document.getElementById('SelectVersion').selectedIndex=i;
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/bluebooksetup.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/bluebooksetup.html" >v24.2</option><option value="https://www.opendental.com/manual241/bluebooksetup.html" >v24.1</option><option value="https://www.opendental.com/manual233/bluebooksetup.html" >v23.3</option><option value="https://www.opendental.com/manual232/bluebooksetup.html" >v23.2</option><option value="https://www.opendental.com/manual231/bluebooksetup.html" >v23.1</option><option value="https://www.opendental.com/manual224/bluebooksetup.html" >v22.4</option><option value="https://www.opendental.com/manual223/bluebooksetup.html" >v22.3</option><option value="https://www.opendental.com/manual222/bluebooksetup.html" >v22.2</option><option value="https://www.opendental.com/manual221/bluebooksetup.html" >v22.1</option><option value="https://www.opendental.com/manual214/bluebooksetup.html" >v21.4</option><option value="https://www.opendental.com/manual213/bluebooksetup.html" >v21.3</option><option value="https://www.opendental.com/manual212/bluebooksetup.html" >v21.2</option><option value="https://www.opendental.com/manual211/bluebooksetup.html" >v21.1</option><option value="https://www.opendental.com/manual205/bluebooksetup.html" >v20.5</option><option value="https://www.opendental.com/manual204/bluebooksetup.html" >v20.4</option><option value="https://www.opendental.com/manual203/bluebooksetup.html" >v20.3</option><option value="https://www.opendental.com/manual202/bluebooksetup.html" >v20.2</option><option value="https://www.opendental.com/manual201/bluebooksetup.html" >v20.1</option><option value="https://www.opendental.com/manual194/bluebooksetup.html" >v19.4</option><option value="https://www.opendental.com/manual193/bluebooksetup.html" >v19.3</option><option value="https://www.opendental.com/manual192/bluebooksetup.html" >v19.2</option><option value="https://www.opendental.com/manual191/bluebooksetup.html" >v19.1</option><option value="https://www.opendental.com/manual184/bluebooksetup.html" >v18.4</option><option value="https://www.opendental.com/manual183/bluebooksetup.html" >v18.3</option><option value="https://www.opendental.com/manual182/bluebooksetup.html" >v18.2</option><option value="https://www.opendental.com/manual181/bluebooksetup.html" >v18.1</option><option value="https://www.opendental.com/manual174/bluebooksetup.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Insurance Blue Book Setup</p></div>
<div class="GeneralPageContent">
<p></p>
<p>Blue Book allows for more accurate estimates for out-of-network insurance plans. </p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Family/Insurance, Insurance Blue Book.</p>
<img src="images/insBlueBookSetup.png" width="662" height="428"/><p><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> See our video: <a href="https://youtu.be/Jghg56V6uRA">Blue Book Webinar</a></p>
<p class="MarginBottomZero">Workflow: </p>
<ol class="MarginBottomGap">
<li>Users set up Blue Book in this window to determine the best method for estimating procedure fees. </li>
<li>As claims are received, users enter the allowed fee from the EOB into the claim. </li>
<li>Open Dental uses the allowed amounts, and the criteria set in this window, to determine the fee for future treatment planned procedures.</li>
</ol>
<p class="MarginBottomZero"><b>Blue Book Feature</b>: There are three options when estimating fees for a <a href="plancatperc.html">Category Percentage Insurance Plan</a>. Select the desired method from the list. See below for details. </p>
<ul class="MarginBottomGap">
<li><b>None</b>: (default) This method requires users to manually create out-of-network fee schedules for accurate insurance estimates.</li>
<li><b>Legacy Blue Book</b>: This method uses the legacy version of Blue Book. For each carrier associated with an out-of-network plan type, an out-of-network fee schedule (named by carrier) is automatically created. The new fee schedule is attached to the insurance plan. </li>
<li><b>Blue Book</b>: This method uses the logic selected in this window to determine the estimated fee for a procedure. Fee schedules are not created using this method which makes managing fee schedules easier and determining estimates more automated.</li>
</ul>
<p class="MarginBottomZero"><b>Blue Book Settings</b>: These settings pertain to the Blue Book feature (does not affect Legacy). </p>
<ul class="MarginBottomGap">
<li><b>Use Insurance Plan in hierarchy</b>: When unchecked, the <i>Allowed fees from received claims</i> for matching <i>Insurance Plan</i> is disabled in Hierarchy rules.</li>
<li><b>Insurance Blue Books Rules Hierarchy</b>: See below for details.</li>
<li><b>Allowed Fee Method</b>: Determines which method is used to calculate procedure fees. Options are:  <ul>
<li>Median: Use the middle value of the allowed amounts entered in the selected time frame.</li>
<li>Average: Average the values of allowed amounts entered in the selected time frame. </li>
<li>Most Recent: Use the most recent value entered in the allowed amount.</li>
</ul>
</li>
<li><b>UCR Fee Percent</b>: The percentage of the UCR fee to cover. When the <i>UCR fee</i> rule is in use, this percentage is applied to the covered amount of the UCR fee.  <ul>
<li>For example: If a $100 procedure is covered at 50% (as set in the insurance benefits) and the <i>UCR Fee Percent</i> is set to 80%, the Blue Book fee is calculated at $80 and coverage is estimated at 50% of the Blue Book fee ($40).</li>
</ul>
</li>
<li><b>Allow anonymous fee sharing</b>: Check to allow sending anonymous fee data to Open Dental HQ. No PHI is sent, only fee information to help improve Blue Book in future enhancements. If left unchecked after first enabling Blue Book, the following prompt displays:<br/><img src="images/blueBookAllowPrompt.png" width="407" height="146" class="ImageInParagraph"/><br/> Clicking Yes checks the box and sends anonymous fee data to Open Dental. <br/> Clicking No keeps the box unchecked, and no data is sent.</li>
</ul>
<p>Click <b>Save</b> to exit the window and keep changes. </p>
<h2>Insurance Blue Book Rules Hierarchy</h2>
<p>The Hierarchy determines the method for estimating fees for each procedure code. The Hierarchy can be edited as needed, however, the default Hierarchy is recommended in most cases.</p>
<p class="MarginBottomZero"><b>Rule Type</b>: This determines how fee information is determined.  </p>
<ul class="MarginBottomGap">
<li><b>*Allowed fees from received claims</b>: This data comes from the amount entered in the Allowed column when receiving an insurance claim by procedure.</li>
<li><b>Manual blue book fee schedule</b>: This data comes from values manually entered into a fee schedule with a type of BlueBook. The fee schedule must be attached to the out-of-network insurance plan.</li>
<li><b>UCR fee</b>: This data comes from the values entered into the office UCR fee schedule.</li>
</ul>
<p class="MarginBottomZero"><b>Matching</b>: This determines how to match the Blue Book fee to the patient. </p>
<ul class="MarginBottomGap">
<li>Insurance Plan: Match the patient by Insurance Plan</li>
<li>Group Number: Match the patient by Group Number for the selected carrier. </li>
<li>Insurance Carrier: Match the patient by Insurance Carrier (uses Carrier ID).</li>
<li>Insurance Carrier Group: Match the patient by Insurance Carrier Group.</li>
<li>All: Matches all patients by using the UCR fee. </li>
</ul>
<p><b>Limit Type</b> and <b>Limit Value</b>: Determines the if fees used are limited by time frame. Double-click a rule to edit.<br/><img src="images/blueBookRuleEdit.png" width="253" height="266" class="ImageInParagraph"/></p>
<p>Limit Type can be in Years, Months, Days, or Weeks. Then enter the value (e.g., 1 Year, 6 Months, 30 days, etc). Select <i>None</i> to include the entire history. </p>
<h2>Hierarchy Logic</h2>
<p>The Hierarchy determines the method used for determining the procedure fee. Each procedure starts with the first rule listed, if there is no fee available for that rule, then the next rule is used. This continues until a valid fee is available. </p>
<p class="MarginBottomZero">For example, when using the default rules:  </p>
<ul class="MarginBottomGap">
<li>If there is no Manual Blue Book fee for the insurance plan, the next rule is used, which attempts to match by the Insurance Plan. </li>
<li>If the Insurance Plan does not have a fee history, the Group Number rule is used. </li>
<li>Open Dental continues down the list until a fee is available. </li>
<li>If no fees are available (e.g., brand new insurance carrier and plan), a percentage of the UCR fee is used.</li>
</ul>
<h2>Allowed Fee Logic</h2>
<p class="MarginBottomZero">When pulling fees from the Allowed Amounts on a claim, Open Dental determines if the fees should be used to calculate future estimates.  </p>
<ul class="MarginBottomGap">
<li>If the allowed fee is higher than the UCR fee, Open Dental assumes it is an overpayment and excludes it from future calculations. </li>
<li>If the allowed fee is unusually higher or lower than normal (i.e., any outliers), Open Dental excludes it from future calculations.</li>
</ul>
<p><b>Non-Primary Plans</b>: The allowed fee is not calculated for non-primary (e.g., secondary) plans. It is only calculated for primary plans.</p>
<p>A history of the fee estimates for a procedure can be found in the <a href="claimprocedure.html">Edit Claim Procedure</a> window.</p>
<p><b>Downgrades</b>: To properly calculate estimates for downgraded procedures, create a Manual Blue Book Fee Schedule for each out-of-network carrier. Only enter the allowed amounts for commonly downgraded procedure codes. Associate this fee schedule with each out-of-network carrier as needed. See <a href="downgrades.html">Estimate Downgrades</a> for additional information.</p>
<h2>Blue Book vs Legacy Blue Book</h2>
<p><b>Blue Book</b>: This is the recommended method.</p>
<p>When Blue Book is enabled, all out-of-network plans (Category Percentage) use Blue Book for determining the procedure's insurance estimate. </p>
<p>If insurance provides a fee schedule with allowed amounts, enter them as a Manual Blue Book Fee Schedule. Associate this fee schedule to the insurance plan. </p>
<p>If insurance does not provide a fee schedule, allowed amounts can typically be found on EOBs as claims are sent and received. When <a href="claimreceive.html">Receiving a Claim</a>, enter the Allowed amount. This updates the Blue Book so that future patients have more accurate estimates.</p>
<p><div class="Note">Note: <ul>
<li>Category Percentage plans that have a fee schedule associated (in the Fee Schedule box directly under the Plan Type) do not begin using Blue Book until the fee schedule is removed.</li>
<li>Only payments from primary carriers are considered in Blue Book Log estimates.</li>
</ul>
</div>
</p>
<p><b>Legacy Blue Book</b></p>
<p>When Legacy Blue Book is enabled, out-of-network (Category Percentage) plans have a fee schedule automatically created and attached based on the insurance carrier.</p>
<p>The new out-of-network fee schedule is automatically created and attached to the insurance plan. When claims are received, the allowed amounts are entered into the carrier fee schedule.</p>
<p>Legacy Blue Book can make fee schedules difficult to manage, especially if there are many duplicate carriers. Since fee schedules are named by carrier, it can be hard to determine which fee schedule to review when needed.</p>
<p><div class="Note">Note: If moving from Legacy Blue Book to Blue Book: <ul>
<li>If fees have been entered into an Out-of-Network fee schedule, they must be copied to Manual Blue Book fee schedules. See <a href="feeschedulecopy.html">Fees Copy</a>. Then associate the fee schedule to the insurance plan. </li>
<li>If allowed amounts have been entered into the <i>Allowed</i> column on claims in the past, these amounts are considered for future calculations.</li>
</ul>
</div>
</p>
</div>
</div>
</body>
</html>```
