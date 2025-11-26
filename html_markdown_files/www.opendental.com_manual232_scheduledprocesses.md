# File: ./www.opendental.com/manual232/scheduledprocesses.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Scheduled Processes</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('scheduledprocesses','+menusetupAdvanced','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/scheduledprocesses.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/scheduledprocesses.html" >v24.2</option><option value="https://www.opendental.com/manual241/scheduledprocesses.html" >v24.1</option><option value="https://www.opendental.com/manual233/scheduledprocesses.html" >v23.3</option><option value="https://www.opendental.com/manual232/scheduledprocesses.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/scheduledprocesses.html" >v23.1</option><option value="https://www.opendental.com/manual224/scheduledprocesses.html" >v22.4</option><option value="https://www.opendental.com/manual223/scheduledprocesses.html" >v22.3</option><option value="https://www.opendental.com/manual222/scheduledprocesses.html" >v22.2</option><option value="https://www.opendental.com/manual221/scheduledprocesses.html" >v22.1</option><option value="https://www.opendental.com/manual214/scheduledprocesses.html" >v21.4</option><option value="https://www.opendental.com/manual213/scheduledprocesses.html" >v21.3</option><option value="https://www.opendental.com/manual212/scheduledprocesses.html" >v21.2</option><option value="https://www.opendental.com/manual211/scheduledprocesses.html" >v21.1</option><option value="https://www.opendental.com/manual205/scheduledprocesses.html" >v20.5</option><option value="https://www.opendental.com/manual204/scheduledprocesses.html" >v20.4</option><option value="https://www.opendental.com/manual203/scheduledprocesses.html" >v20.3</option><option value="https://www.opendental.com/manual202/scheduledprocesses.html" >v20.2</option><option value="https://www.opendental.com/manual201/scheduledprocesses.html" >v20.1</option><option value="https://www.opendental.com/manual194/scheduledprocesses.html" >v19.4</option><option value="https://www.opendental.com/manual193/scheduledprocesses.html" >v19.3</option><option value="https://www.opendental.com/manual192/scheduledprocesses.html" >v19.2</option><option value="https://www.opendental.com/manual191/scheduledprocesses.html" >v19.1</option><option value="https://www.opendental.com/manual184/scheduledprocesses.html" >v18.4</option><option value="https://www.opendental.com/manual183/scheduledprocesses.html" >v18.3</option><option value="https://www.opendental.com/manual182/scheduledprocesses.html" >v18.2</option><option value="https://www.opendental.com/manual181/scheduledprocesses.html" >v18.1</option><option value="https://www.opendental.com/manual174/scheduledprocesses.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Scheduled Processes</p></div>
<div class="GeneralPageContent">
<p>Some processes can be automatically performed at a designated time.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Advanced Setup, <b>Scheduled Processes</b>.</p>
<img src="images/scheduledProcesses.png" width="753" height="339"/><p>Typically Scheduled Processes should be scheduled for after hours to avoid disruption of normal program function as these tasks can be server intensive. The <a href="opendentalservice.html">Open Dental Service</a> is required to run Scheduled Processes.</p>
<p class="MarginBottomZero">Click <b>Add</b> to create a new scheduled action, or double-click an existing action from the grid to edit.<br/><img src="images/scheduledProcessesEdit.png" width="365" height="178" class="ImageInParagraph"/></p>
<ul class="MarginBottomGap">
<li><b>Scheduled Action</b>: Select Process to run from the dropdown. <ul>
<li><i>Recall Sync</i>: Recalculate due dates for all patients based on current <a href="recalltypes.html">Recall Types</a>.</li>
<li><i>Ins Batch Verify</i>: Verify patient eligibility through <a href="ebenefits.html">Electronic Eligibility and Benefits</a>. Batch is defined by who is currently in the <a href="insverifylist.html">Insurance Verification List</a> with a <i>Pat</i> type, based on the criteria set in <a href="insverifylistsetup.html">Insurance Verification Setup</a>. <a href="carriers.html">Carriers</a> must have <i>Is trusted for real-time eligibility</i> checked. <br/></li>
<li><i>Statements</i>: Generate and send electronic or emailed statements. </li>
</ul>
</li>
<li><b>Frequency to Run</b>: Select how frequently this process will run. <i>Daily</i> is the only available option at this time.</li>
<li><b>Time to Run</b>: Enter a time of day when this process will run. Entries will be validated based on local language/cultural settings in Windows. For English-US users, acceptable time formats for entry include: 9:00 PM, 9:00 pm, 21:00.</li>
<li><b>Delete</b>: Click to remove this scheduled process.</li>
</ul>
<h2>Ins Batch Verify</h2>
<p class="MarginBottomZero"><b>Ins Verify Batch Preferences</b>: These preferences only affect the Ins Batch Verify action. Changes to these preferences are immediately saved. Changes to preferences trigger a generic <a href="alerts.html">Alert</a>. </p>
<ul class="MarginBottomGap">
<li><b>Create Adjustments</b>: Check to allow <a href="adjinsbenefits.html">Adjustments to Insurance Benefits</a>. </li>
<li><b>Check Deductible</b>: Check to verify deductible values. </li>
<li><b>Check Annual Max</b>: Check to verify annual max values.</li>
<li><b>Change Ins History</b>: Check to allow updates to <a href="inshistory.html">Insurance History</a>.</li>
<li><b>Change Effective Dates</b>: Check to allow updates to the insurance effective dates.</li>
</ul>
<p>When verifying patient eligibility and insurance information, Open Dental will use the 271 file from the carrier. Patients whose insurance information matches the 271 will be removed from the Insurance Verification list. When benefits and eligibility are successfully verified, the Last Verified date is determined by the preferences <i>Always reverify service year insurance benefits</i> and <i>Always reverify service year patient eligibility</i>. See <a href="insverifylistsetup.html">Insurance Verification Setup</a> for more information.</p>
<p> Patients who do not match the 271 will remain on the Insurance Verification List and the Status column will be updated. Patients still remaining in the Insurance Verification list after the scheduled process will need to have their insurance information verified manually. </p>
<p class="MarginBottomZero">When compared to the 271, Open Dental considers the following:  </p>
<ul class="MarginBottomGap">
<li>Group Number.  <ul>
<li>Leading zeros are not considered (e.g. 123 will match with 00123)</li>
<li>Dashes or hyphens are considered (e.g. 123-567 will not match 123567). If a dash or hyphen in a group number causes the verification to fail, this will require manual verification.</li>
</ul>
</li>
<li>Annual Max</li>
<li>Deductibles  <ul>
<li>Family and individual</li>
</ul>
</li>
<li>Populates the effective date if available.</li>
<li>Creates <a href="adjinsbenefits.html">Adjustments to Insurance Benefits</a> if available.</li>
<li>Validates policy effective dates.</li>
<li>Creates or updates <a href="inshistory.html">Insurance History</a>.</li>
</ul>
<h2>Statements</h2>
<p>Statements can be generated and sent electronically to a third party or emailed. Statements sent by mail must be created manually via the <a href="billinglist.html">Billing List</a>.</p>
<p class="MarginBottomZero">Consider the following before enabling Statements as a Scheduled Process: </p>
<ul class="MarginBottomGap">
<li>Aging is calculated before statements are run.</li>
<li>Superfamily statements are not considered.</li>
<li>This process should be scheduled after dynamic payment plan runtime, repeating charges, and recurring charges.</li>
<li>The Billing List must be cleared before the scheduled Time to Run.</li>
<li>The Billing Options set for the Billing List are used when creating statements. </li>
</ul>
<p class="MarginBottomZero">Information on how many statements were sent, failed, errors are logged in a text file: <b>C:\Program Files (x86)\Open Dental\OpenDentalService\Logger\ScheduledProcess\Statements\ </b></p>
<ul class="MarginBottomGap">
<li>When logging is set to <i>Information</i>, the text file is created but only shows <i>Starting Statement process, Running statements for ClinicNum#, and No ebills to be sent.</i></li>
<li>When logging is set to <i>Verbose</i>, the text file is created with a count of sent statement and include information on skipped patients and errors.</li>
<li>To change the logging type, see <a href="servicemanager.html">Service Manager</a>. </li>
</ul>
<p>Similarly, failed statements can be found in the Billing List when <i>Unsent</i> is checked. Successful statements can be found in the Billing List when <i>Sent</i> is checked.</p>
<p>If sending statements via email, an email with the statement attached as a PDF can be found in the account. When clinics are enabled, emails are sent from the clinic email address. If no email address is entered for the clinic, the practice email is used.</p>
</div>
</div>
</body>
</html>```
