# File: ./www.opendental.com/manual243/reportserver.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Report Setup: Report Server</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reportserver','reportssetup','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/reportserver.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/reportserver.html" >v24.2</option><option value="https://www.opendental.com/manual241/reportserver.html" >v24.1</option><option value="https://www.opendental.com/manual233/reportserver.html" >v23.3</option><option value="https://www.opendental.com/manual232/reportserver.html" >v23.2</option><option value="https://www.opendental.com/manual231/reportserver.html" >v23.1</option><option value="https://www.opendental.com/manual224/reportserver.html" >v22.4</option><option value="https://www.opendental.com/manual223/reportserver.html" >v22.3</option><option value="https://www.opendental.com/manual222/reportserver.html" >v22.2</option><option value="https://www.opendental.com/manual221/reportserver.html" >v22.1</option><option value="https://www.opendental.com/manual214/reportserver.html" >v21.4</option><option value="https://www.opendental.com/manual213/reportserver.html" >v21.3</option><option value="https://www.opendental.com/manual212/reportserver.html" >v21.2</option><option value="https://www.opendental.com/manual211/reportserver.html" >v21.1</option><option value="https://www.opendental.com/manual205/reportserver.html" >v20.5</option><option value="https://www.opendental.com/manual204/reportserver.html" >v20.4</option><option value="https://www.opendental.com/manual203/reportserver.html" >v20.3</option><option value="https://www.opendental.com/manual202/reportserver.html" >v20.2</option><option value="https://www.opendental.com/manual201/reportserver.html" >v20.1</option><option value="https://www.opendental.com/manual194/reportserver.html" >v19.4</option><option value="https://www.opendental.com/manual193/reportserver.html" >v19.3</option><option value="https://www.opendental.com/manual192/reportserver.html" >v19.2</option><option value="https://www.opendental.com/manual191/reportserver.html" >v19.1</option><option value="https://www.opendental.com/manual184/reportserver.html" >v18.4</option><option value="https://www.opendental.com/manual183/reportserver.html" >v18.3</option><option value="https://www.opendental.com/manual182/reportserver.html" >v18.2</option><option value="https://www.opendental.com/manual181/reportserver.html" >v18.1</option><option value="https://www.opendental.com/manual174/reportserver.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Report Setup: Report Server</p></div>
<div class="GeneralPageContent">
<p>A report server can be useful to large offices to prevent lockups and slowness in a live database.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <b>Reports</b>. Select the <b>Report Server</b> tab</p>
<img src="images/reportServer.png" width="558" height="708"/><p>Alternatively, in the <a href="reportsstandard.html">Standard Reports</a> window, click <a href="reportssetup.html">Setup</a> and select the Report Server tab.</p>
<p><div class="Note">Note: <ul>
<li>The Report Server tab is not available for Open Dental Cloud users.</li>
<li>Always keep the report server database up-to-date so reports are run on current data.</li>
</ul>
</div>
</p>
<p>The Report Server runs most standard reports and some other features:</p>
<p class="MarginBottomZero">Reports </p>
<ul class="MarginBottomGap">
<li>Active Patients</li>
<li>Aging of Accounts Receivable (A/R)</li>
<li>Daily Adjustments</li>
<li>Appointments</li>
<li>Birthdays</li>
<li>Broken Appointments</li>
<li>Capitation Utilization</li>
<li>Claims Not Sent</li>
<li>Custom Aging</li>
<li>Discount Plans</li>
<li>Finance Charge</li>
<li>FQHC Dental Sealant Measure</li>
<li>Graphic Reports</li>
<li>Insurance Plans</li>
<li>Incomplete Procedure Notes</li>
<li>Insurance Aging</li>
<li>Insurance Overpaid</li>
<li>New Patients</li>
<li>Patient Portion Uncollected</li>
<li>Payment Plans</li>
<li>Payment Plans Overcharged</li>
<li>Daily Payments</li>
<li>PPO Write-offs</li>
<li>Prescriptions</li>
<li>Presented Treatment Production</li>
<li>Daily Procedures</li>
<li>Procedure Codes - Fee Schedules</li>
<li>Procedures Overpaid</li>
<li>Production and Income</li>
<li>Monthly Production Goal</li>
<li>Receivables Breakdown</li>
<li>Referral Analysis</li>
<li>Routing Slips</li>
<li>Treatment Plan Presentation Statistics</li>
<li>Unfinalized Insurance Payments</li>
<li>Daily Write-offs</li>
</ul>
<p class="MarginBottomZero">Other Features </p>
<ul class="MarginBottomGap">
<li>User Queries</li>
<li>Task Search</li>
<li>Wiki Search</li>
</ul>
<h2>Setting up the Report Server</h2>
<p>To set up a report server, see <a href="replicationoneway.html">One-Way Replication</a>.</p>
<p><b>Use separate reporting server</b>: Check to enable the connection settings. </p>
<p class="MarginBottomZero">The report server can be set up using a Direct or Middle Tier connection. Choose the radio button for the preferred connection method to enable options. </p>
<ul class="MarginBottomGap">
<li><b>Direct Connection</b>: Select to connect via a direct connection.  <ul>
<li><b>Server Name</b>: The name of the computer acting as the report server.</li>
<li><b>Database</b>: The database to connect to.</li>
<li><b>MySQL User</b>: The username for the MySQL user. Default user is <i>root</i>. See <a href="securitymysql.html">MySQL Security</a> for additional information.</li>
<li><b>MySQL Password</b>: The MySQL user password (if MySQL users and password are set up).</li>
</ul>
</li>
<li><b>Middle Tier, URI</b>: Select to connect via <a href="middletier.html">Middle Tier</a>. <ul>
<li><b>URI</b>: Enter the Middle Tier URI.</li>
</ul>
</li>
</ul>
<p><b>(only if using MariaDB SkySQL) PEM path</b>: If using a cloud-managed database system, enter the PEM filepath. File must be accessible from all workstations.</p>
</div>
</div>
</body>
</html>```
