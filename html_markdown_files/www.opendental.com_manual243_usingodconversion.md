# File: ./www.opendental.com/manual243/usingodconversion.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Use Converted Database</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('usingodconversion','technical','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/usingodconversion.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/usingodconversion.html" >v24.2</option><option value="https://www.opendental.com/manual241/usingodconversion.html" >v24.1</option><option value="https://www.opendental.com/manual233/usingodconversion.html" >v23.3</option><option value="https://www.opendental.com/manual232/usingodconversion.html" >v23.2</option><option value="https://www.opendental.com/manual231/usingodconversion.html" >v23.1</option><option value="https://www.opendental.com/manual224/usingodconversion.html" >v22.4</option><option value="https://www.opendental.com/manual223/usingodconversion.html" >v22.3</option><option value="https://www.opendental.com/manual222/usingodconversion.html" >v22.2</option><option value="https://www.opendental.com/manual221/usingodconversion.html" >v22.1</option><option value="https://www.opendental.com/manual214/usingodconversion.html" >v21.4</option><option value="https://www.opendental.com/manual213/usingodconversion.html" >v21.3</option><option value="https://www.opendental.com/manual212/usingodconversion.html" >v21.2</option><option value="https://www.opendental.com/manual211/usingodconversion.html" >v21.1</option><option value="https://www.opendental.com/manual205/usingodconversion.html" >v20.5</option><option value="https://www.opendental.com/manual204/usingodconversion.html" >v20.4</option><option value="https://www.opendental.com/manual203/usingodconversion.html" >v20.3</option><option value="https://www.opendental.com/manual202/usingodconversion.html" >v20.2</option><option value="https://www.opendental.com/manual201/usingodconversion.html" >v20.1</option><option value="https://www.opendental.com/manual194/usingodconversion.html" >v19.4</option><option value="https://www.opendental.com/manual193/usingodconversion.html" >v19.3</option><option value="https://www.opendental.com/manual192/usingodconversion.html" >v19.2</option><option value="https://www.opendental.com/manual191/usingodconversion.html" >v19.1</option><option value="https://www.opendental.com/manual184/usingodconversion.html" >v18.4</option><option value="https://www.opendental.com/manual183/usingodconversion.html" >v18.3</option><option value="https://www.opendental.com/manual182/usingodconversion.html" >v18.2</option><option value="https://www.opendental.com/manual181/usingodconversion.html" >v18.1</option><option value="https://www.opendental.com/manual174/usingodconversion.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Use Converted Database</p></div>
<div class="GeneralPageContent">
<p>See <a href="technical.html">Technical</a>.</p>
<p>Getting to know the ins and outs of Open Dental takes some time. Open Dental is flexible and customizable, so there are many choices in how to use the software and which features to implement. Below are recommendations for how to begin using Open Dental after a data <a href="../site/conversions.html" target="_blank">Conversion</a>.</p>
<p><div class="Note">Note: The data that is converted depends on the prior software. See <a href="https://opendentalsoft.com:1943/ConversionList/ConversionList.aspx" target="_blank">Data Converted by Software Vendor</a> for a detailed list.</div>
</p>
<h2>Setup</h2>
<p>Use the <a href="../resources/conversions/Post%20Conversion%20Checklist.pdf" target="_blank">Post-Conversion Checklist</a> as guide for setting up a freshly converted Open Dental database. </p>
<h2>Patient Information and Appointments</h2>
<p>We recommend starting with patients who have an upcoming appointment. </p>
<p class="MarginBottomZero"><b>Before the Scheduled Appointment</b></p>
<ol class="MarginBottomGap">
<li>Select the patient.</li>
<li>In the <a href="family.html">Family Module</a>:  <ul>
<li>Verify patient information.</li>
<li>Check insurance plan information.</li>
<li>Verify the recall type (Prophy vs Perio).</li>
</ul>
</li>
<li>In the <a href="chart.html">Chart Module</a>, chart existing treatment and enter medical information.</li>
<li>In the <a href="appointments.html">Appointments Module</a>, verify that the appointment exists and the correct treatment planned procedures are attached.</li>
</ol>
<p class="MarginBottomZero"><b>During the Appointment - Back Office</b></p>
<ol class="MarginBottomGap">
<li>Update existing treatment and patient information.</li>
<li>Set the appointment complete. Attach any added procedures.</li>
<li>Chart needed treatment, if any, and prioritize it in the Treatment Plan. </li>
<li>If treatment is needed, enter a <a href="apptplanned.html">Planned Appointment</a> for the next appointment. This appointment is used by the front office to help with scheduling.</li>
</ol>
<p class="MarginBottomZero"><b>During the Appointment - Front Office</b></p>
<ol class="MarginBottomGap">
<li>In the Appointments Module, schedule the patient's next appointment.  <ul>
<li>If no treatment is needed, click Make Recall to schedule a Recall appointment.</li>
<li>If treatment is needed, click Make Appointment, then select the planned appointment and copy it to pinboard to schedule it.</li>
</ul>
</li>
<li>Complete the patient's appointment.</li>
<li>In the Account Module, enter patient payments and create insurance claims. Print statements and receipts as needed.</li>
</ol>
<p class="MarginBottomZero"><b>Daily Tasks</b></p>
<ul class="MarginBottomGap">
<li>Confirm upcoming appointments.</li>
<li>Receive and enter insurance payments. As family account balances reach zero, cleanup transaction history converted from the old software by transferring income. Family balances that are zero at the time of conversion do not need income transfers.</li>
<li>Attach payments to a deposit for balancing. Use the Payments report to compare.</li>
<li>Check for unsent claims and send them.</li>
<li>Review procedure notes for completion.</li>
</ul>
<p class="MarginBottomZero"><b>End of Day Reports</b></p>
<ul class="MarginBottomGap">
<li>Production and Income Report (More Options)</li>
<li>Daily Payments Report (More Options)</li>
<li>Daily Adjustments Report</li>
<li>Daily Write-off Reports</li>
<li>Appointments Report (summary of the day's appointments).</li>
</ul>
<p class="MarginBottomZero"><b>Other Useful Features</b></p>
<ul class="MarginBottomGap">
<li>Daily Procedures Report: A report of all procedures done for a date range.</li>
<li>Routing Slips: Print all at once or one at a time.</li>
<li>Billing List: Run daily, monthly, or per the practice preference.</li>
</ul>
<h2>Manage Appointments</h2>
<p class="MarginBottomZero">Open Dental has several tools to use to manage appointments and keep the schedule full, thus keeping production high. See <a href="appointmentlists.html">Appointment Lists</a>. </p>
<ul class="MarginBottomGap">
<li>Recall and recall reminders: Easily schedule and track recall appointments.</li>
<li>Confirmations: Track patients who have upcoming appointments and action taken.</li>
<li>Use the Planned Tracker to track planned appointments.</li>
<li>Unscheduled List: A temporary place to send appointments that need follow-up (e.g., broken, no shows, cancelled).</li>
<li>ASAP List: A list of patients who are scheduled, but want to come in earlier if an opening is available.</li>
</ul>
</div>
</div>
</body>
</html>```
