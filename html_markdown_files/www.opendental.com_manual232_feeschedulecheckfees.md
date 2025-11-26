# File: ./www.opendental.com/manual232/feeschedulecheckfees.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Check Ins Plan Fees</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('feeschedulecheckfees','feeschedules','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/feeschedulecheckfees.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/feeschedulecheckfees.html" >v24.2</option><option value="https://www.opendental.com/manual241/feeschedulecheckfees.html" >v24.1</option><option value="https://www.opendental.com/manual233/feeschedulecheckfees.html" >v23.3</option><option value="https://www.opendental.com/manual232/feeschedulecheckfees.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/feeschedulecheckfees.html" >v23.1</option><option value="https://www.opendental.com/manual224/feeschedulecheckfees.html" >v22.4</option><option value="https://www.opendental.com/manual223/feeschedulecheckfees.html" >v22.3</option><option value="https://www.opendental.com/manual222/feeschedulecheckfees.html" >v22.2</option><option value="https://www.opendental.com/manual221/feeschedulecheckfees.html" >v22.1</option><option value="https://www.opendental.com/manual214/feeschedulecheckfees.html" >v21.4</option><option value="https://www.opendental.com/manual213/feeschedulecheckfees.html" >v21.3</option><option value="https://www.opendental.com/manual212/feeschedulecheckfees.html" >v21.2</option><option value="https://www.opendental.com/manual211/feeschedulecheckfees.html" >v21.1</option><option value="https://www.opendental.com/manual205/feeschedulecheckfees.html" >v20.5</option><option value="https://www.opendental.com/manual204/feeschedulecheckfees.html" >v20.4</option><option value="https://www.opendental.com/manual203/feeschedulecheckfees.html" >v20.3</option><option value="https://www.opendental.com/manual202/feeschedulecheckfees.html" >v20.2</option><option value="https://www.opendental.com/manual201/feeschedulecheckfees.html" >v20.1</option><option value="https://www.opendental.com/manual194/feeschedulecheckfees.html" >v19.4</option><option value="https://www.opendental.com/manual193/feeschedulecheckfees.html" >v19.3</option><option value="https://www.opendental.com/manual192/feeschedulecheckfees.html" >v19.2</option><option value="https://www.opendental.com/manual191/feeschedulecheckfees.html" >v19.1</option><option value="https://www.opendental.com/manual184/feeschedulecheckfees.html" >v18.4</option><option value="https://www.opendental.com/manual183/feeschedulecheckfees.html" >v18.3</option><option value="https://www.opendental.com/manual182/feeschedulecheckfees.html" >v18.2</option><option value="https://www.opendental.com/manual181/feeschedulecheckfees.html" >v18.1</option><option value="https://www.opendental.com/manual174/feeschedulecheckfees.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Check Ins Plan Fees</p></div>
<div class="GeneralPageContent">
<p>Use Check Insurance Plan Fees to check that insurance plans have the correct fee schedules attached and reassign fee schedules for multiple insurance plans at once.</p>
<p>In <a href="feeschedules.html">Fee Schedules</a>, at the bottom, click <b>Go</b>.</p>
<img src="images/feesCheckInsPlan.png" width="826" height="544"/><h2>Filters</h2>
<p>Enter filter criteria to update insurance plans listed in the grid.</p>
<img src="images/checkInsPlansFilters.png" width="773" height="97"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>Fee schedule type (Normal, CoPay, Out of Network, FixedBenefit, ManualBlueBook)</li>
<ul>
<li>This option does not filter results. It updates which fee schedule is listed in the <i>Fee Schedule</i> column.</li>
</ul>
<li><b>Carrier Like</b>: Type carrier name to include. Filters by partial match.</li>
<li><b>Carrier Not Like</b>: Type carrier name to exclude. Filters by partial match.</li>
<li><b>With Fee Schedule</b>: Select a fee schedule to include.</li>
<li><b>Without Fee Schedule</b>: Select a fee schedule to exclude.</li>
</ul>
<h2>Ins Plans that might need to be changed</h2>
<p>Results in<i> Ins Plans that might need changed</i> grid update as filters are entered.</p>
<img src="images/insPlansChange.png" width="807" height="356"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Employer</b>: Employer associated with the <a href="insplan.html">Insurance Plan</a></li>
<li><b>Carrier</b>: Insurance carrier attached to the insurance plan.</li>
<li><b>Group#</b>: Group Num as assigned to the insurance plan.</li>
<li><b>Group Name</b>: Group Name as assigned to the insurance plan.</li>
<li><b>Plan Type</b>: Plan Type assigned to the insurance plan. <ul>
<li>Cat%: Category Percentage</li>
<li>PPO: PPO Percentage</li>
<li>FixedBenefitPPO: PPO Fixed Benefit</li>
<li>FlatCopay: Medicaid/Flat Co-pay</li>
<li>Capitation: Capitation</li>
</ul>
</li>
<li><b>Fee Schedule</b>: Description of the fee schedule attached the the insurance plan matching the currently selected type. (e.g., if FixedBenefit is selected in Filters, the description of the FixedBenefit fee schedule attached to the plan is displayed).</li>
</ul>
<h2>Change Fee Schedules</h2>
<p>After filtering and finding the correct insurance plan(s), assigned fee schedules can be changed from this tool.</p>
<img src="images/changeFeeSched.png" width="423" height="32"/><p><b>New Fee Schedule</b>: Select a fee schedule from the dropdown to be assigned to all selected insurance plans in the grid. Click <b>Change</b> to assign the selected fee schedule.</p>
<p>To prevent accidental changes, a password is required to complete changes. Contact Support for the password.</p>
<h2>Additional Buttons</h2>
<ul>
<li><b>Select All</b>: Select all insurance plans in the grid.</li>
<li><b>Print List</b>: Print all insurance plans in the grid.</li>
<li><b>Close</b>: Exit the Check Insurance Plan Fees window.</li>
</ul>
</div>
</div>
</body>
</html>```
