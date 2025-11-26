# File: ./www.opendental.com/manual232/reportsstandard.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Standard Reports</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/reportsstandard.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/reportsstandard.html" >v24.2</option><option value="https://www.opendental.com/manual241/reportsstandard.html" >v24.1</option><option value="https://www.opendental.com/manual233/reportsstandard.html" >v23.3</option><option value="https://www.opendental.com/manual232/reportsstandard.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/reportsstandard.html" >v23.1</option><option value="https://www.opendental.com/manual224/reportsstandard.html" >v22.4</option><option value="https://www.opendental.com/manual223/reportsstandard.html" >v22.3</option><option value="https://www.opendental.com/manual222/reportsstandard.html" >v22.2</option><option value="https://www.opendental.com/manual221/reportsstandard.html" >v22.1</option><option value="https://www.opendental.com/manual214/reportsstandard.html" >v21.4</option><option value="https://www.opendental.com/manual213/reportsstandard.html" >v21.3</option><option value="https://www.opendental.com/manual212/reportsstandard.html" >v21.2</option><option value="https://www.opendental.com/manual211/reportsstandard.html" >v21.1</option><option value="https://www.opendental.com/manual205/reportsstandard.html" >v20.5</option><option value="https://www.opendental.com/manual204/reportsstandard.html" >v20.4</option><option value="https://www.opendental.com/manual203/reportsstandard.html" >v20.3</option><option value="https://www.opendental.com/manual202/reportsstandard.html" >v20.2</option><option value="https://www.opendental.com/manual201/reportsstandard.html" >v20.1</option><option value="https://www.opendental.com/manual194/reportsstandard.html" >v19.4</option><option value="https://www.opendental.com/manual193/reportsstandard.html" >v19.3</option><option value="https://www.opendental.com/manual192/reportsstandard.html" >v19.2</option><option value="https://www.opendental.com/manual191/reportsstandard.html" >v19.1</option><option value="https://www.opendental.com/manual184/reportsstandard.html" >v18.4</option><option value="https://www.opendental.com/manual183/reportsstandard.html" >v18.3</option><option value="https://www.opendental.com/manual182/reportsstandard.html" >v18.2</option><option value="https://www.opendental.com/manual181/reportsstandard.html" >v18.1</option><option value="https://www.opendental.com/manual174/reportsstandard.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Standard Reports</p></div>
<div class="GeneralPageContent">
<p>Standard reports allow a user to track and view data. </p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click <a href="reports.html">Reports</a>, Standard.</p>
<img src="images/reports.png" width="690" height="696"/><p class="MarginBottomZero"><b>Setup</b>: Click to set up and customize defaults and user access for standard report. Options include: </p>
<ul class="MarginBottomGap">
<li><a href="reportdisplaysettings.html">Display Settings</a>: Customize which reports list on the window.</li>
<li><a href="reportsecurity.html">Security Permissions</a>: Restrict access to reports by user group.</li>
<li><a href="reportserver.html">Report Server</a>: Set up a report server to run Production and Income Reports. This can be useful for large offices to prevent lockups and slowness in a live database.</li>
<li><a href="reportmiscsettings.html">Misc Settings</a>: Set report defaults.</li>
</ul>
<p><b>User Query</b>: Open the Query window to run custom reports. See <a href="queryoverview.html">User Query</a>.</p>
<p><b>Laser Labels</b>: Print labels for a selected list of patients or insurance companies. See <a href="laserlabels.html">Laser Labels</a>.</p>
<p class="MarginBottomZero"><b>Production and Income Reports</b></p>
<ul class="MarginBottomGap">
<li>Today: Generate a report for today's date using default settings.</li>
<li>Yesterday: Generate a report for yesterday using default settings. <div class="Note">Note: If run on a Monday the report will be for the previous Friday. If you work over the weekend use More Options below to generate those reports.</div>
</li>
<li>This Month: Generate a report the current month (1 - 31) using default settings.</li>
<li>Last Month: Generate a report for last month (1 - 31) using default settings.</li>
<li>This Year: Generate a report for the current year (Jan 1 - Dec 31) using default settings.</li>
<li>More Options: Open the <a href="reportprodinc.html">Production and Income Report</a> window so you can customize report options.</li>
<li><a href="reportproductiongoal.html">Monthly Production Goal Report</a></li>
<li><a href="reportprovpayroll.html">Provider Payroll Summary / Provider Payroll Detail</a></li>
</ul>
<p class="MarginBottomZero"><b>Daily</b>: Common daily reports.  </p>
<ul class="MarginBottomGap">
<li><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> See our Webinar: <a href="https://youtu.be/hxxpi88Xwmc">Daily Reports</a>. </li>
<li><a href="reportdailyadj.html">Daily Adjustments Report</a></li>
<li><a href="reportdailypayments.html">Daily Payments Report</a></li>
<li><a href="reportdailyprocs.html">Daily Procedures Report</a></li>
<li><a href="reportdailywriteoffs.html">Daily Write-off Report</a></li>
<li><a href="reportincompleteprocnote.html">Incomplete Procedure Notes</a></li>
<li><a href="routingslips.html">Routing Slips</a></li>
<li><a href="reportnetproddaily.html">Net Production Detail Daily Report</a></li>
<li><a href="reportunfinalizedinsurancepayments.html">Unfinalized Insurance Payment</a></li>
<li><a href="reportdailypatportuncollected.html">Patient Portion Uncollected Report</a></li>
</ul>
<p class="MarginBottomZero"><b>Monthly</b>: Common monthly reports that are usually part of billing. </p>
<ul class="MarginBottomGap">
<li><a href="reportaging.html">Aging of Accounts Receivable (A/R) Report</a></li>
<li><a href="reportclaimsnotsent.html">Claims Not Sent Report</a></li>
<li><a href="reportcapitation.html">Capitation Utilization Report</a></li>
<li><a href="reportfinancecharge.html">Finance Charge Report</a></li>
<li><a href="reportoutins.html">Outstanding Insurance Claims Report</a></li>
<li><a href="reportprocsnotbilledins.html">Procedures Not Billed to Insurance Report</a></li>
<li><a href="reportppowriteoffs.html">PPO Write-offs Report</a></li>
<li><a href="reportpaymentplan.html">Payment Plans Report</a></li>
<li><a href="reportreceivablesbreakdown.html">Receivables Breakdown Report</a></li>
<li><a href="reportunearnedincome.html">Unearned Income Reports</a></li>
<li><a href="reportinsoverpaid.html">Insurance Overpaid Report</a></li>
<li><a href="reportpresentedtp.html">Presented Treatment Production Report</a></li>
<li><a href="reporttpstatistics.html">Treatment Plan Presentation Statistics Report</a></li>
<li><a href="reportinsaging.html">Insurance Aging Report</a></li>
<li><a href="reportcustomaging.html">Custom Aging Report</a></li>
<li><a href="reportproceduresoverpaid.html">Procedures Overpaid Report</a></li>
<li><a href="reportdynamicpayplanovercharged.html">Dynamic Payment Plans Overcharged Report</a></li>
</ul>
<p class="MarginBottomZero"><b>Lists</b>: Common reports that pulls lists of various patient data. </p>
<ul class="MarginBottomGap">
<li><a href="reportactivepatient.html">Active Patients Report</a></li>
<li><a href="reportappts.html">Appointments Report</a></li>
<li><a href="reportbirthdays.html">Birthday Report and Postcards</a></li>
<li><a href="reportbrokenappt.html">Broken Appointments Report</a></li>
<li><a href="reportinsuranceplan.html">Insurance Plans Report</a></li>
<li><a href="reportsnewpatient.html">New Patients Report</a></li>
<li><a href="reportpatientraw.html">Patient - Raw</a></li>
<li><a href="reportpatientnotes.html">Patient Notes Report</a></li>
<li><a href="reportprescriptions.html">Prescriptions Report</a></li>
<li><a href="reportprocedurecodes.html">Procedure Codes - Fee Schedules Report</a></li>
<li><a href="reportreferralraw.html">Referral - Raw Report</a></li>
<li><a href="reportreferralanalysis.html">Referral Analysis Report</a></li>
<li><a href="reportreferralproctrack.html">Referred Procedure Tracking Report</a></li>
<li><a href="reporttreatfinder.html">Treatment Finder Report</a></li>
<li><a href="webschedapptreport.html">Web Sched Appointments Report</a></li>
<li><a href="reportdiscountplan.html">Discount Plans Report</a></li>
<li><a href="reporthiddensplits.html">Hidden Payment Splits Report</a></li>
<li><a href="reporterasautomaticallyprocess.html">ERAs Automatically Processed Report</a></li>
</ul>
<p class="MarginBottomZero"><b>Public Health Reports</b>: <a href="publichealth.html">Public Health</a> reports. </p>
<ul class="MarginBottomGap">
<li><a href="reportsrawscreeningdata.html">Raw Screening Data Report</a></li>
<li><a href="reportsrawpopulationdata.html">Raw Population Data Report</a></li>
<li><a href="reportsuds.html">FQHC Dental Sealant Measure</a></li>
</ul>
<p><a href="reportehrexport.html">EHR Patient Export</a></p>
<p class="MarginBottomZero"><b>Business Analytics and Patient Reviews</b>: Preferred business analytics and patient reviews service providers. </p>
<ul class="MarginBottomGap">
<li>Click a button to see more info; you won't be charged.</li>
<li>If the bridge is already enabled, click a button to launch your account.</li>
<li>To remove the button(s), go to <a href="programlinks.html">Program Links</a>, double click the bridge, uncheck the Enable box, then check Hide Unused Button.</li>
</ul>
</div>
</div>
</body>
</html>```
