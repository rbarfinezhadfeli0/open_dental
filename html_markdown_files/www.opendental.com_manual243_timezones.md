# File: ./www.opendental.com/manual243/timezones.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Time Zones</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('timezones','middletier','advancedtopics','technical','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/timezones.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/timezones.html" >v24.2</option><option value="https://www.opendental.com/manual241/timezones.html" >v24.1</option><option value="https://www.opendental.com/manual233/timezones.html" >v23.3</option><option value="https://www.opendental.com/manual232/timezones.html" >v23.2</option><option value="https://www.opendental.com/manual231/timezones.html" >v23.1</option><option value="https://www.opendental.com/manual224/timezones.html" >v22.4</option><option value="https://www.opendental.com/manual223/timezones.html" >v22.3</option><option value="https://www.opendental.com/manual222/timezones.html" >v22.2</option><option value="https://www.opendental.com/manual221/timezones.html" >v22.1</option><option value="https://www.opendental.com/manual214/timezones.html" >v21.4</option><option value="https://www.opendental.com/manual213/timezones.html" >v21.3</option><option value="https://www.opendental.com/manual212/timezones.html" >v21.2</option><option value="https://www.opendental.com/manual211/timezones.html" >v21.1</option><option value="https://www.opendental.com/manual205/timezones.html" >v20.5</option><option value="https://www.opendental.com/manual204/timezones.html" >v20.4</option><option value="https://www.opendental.com/manual203/timezones.html" >v20.3</option><option value="https://www.opendental.com/manual202/timezones.html" >v20.2</option><option value="https://www.opendental.com/manual201/timezones.html" >v20.1</option><option value="https://www.opendental.com/manual194/timezones.html" >v19.4</option><option value="https://www.opendental.com/manual193/timezones.html" >v19.3</option><option value="https://www.opendental.com/manual192/timezones.html" >v19.2</option><option value="https://www.opendental.com/manual191/timezones.html" >v19.1</option><option value="https://www.opendental.com/manual184/timezones.html" >v18.4</option><option value="https://www.opendental.com/manual183/timezones.html" >v18.3</option><option value="https://www.opendental.com/manual182/timezones.html" >v18.2</option><option value="https://www.opendental.com/manual181/timezones.html" >v18.1</option><option value="https://www.opendental.com/manual174/timezones.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Time Zones</p></div>
<div class="GeneralPageContent">
<p>See <a href="advancedtopics.html">Advanced Topics</a>.</p>
<p>Database dates and times are stored with unspecified time zone information. This date and time model works perfectly for nearly all Open Dental customers because computer networks are typically contained within a single time zone, so no time zone information is necessary. If all of the computers on the network (including the server) are within a single time zone, the information on this page is not applicable unless there are plans to expand the network to multiple time zones in the future.</p>
<p>In general, if there are issues with time zones, first update Open Dental to the latest stable version, then contact <a href="../contact.html">Open Dental Support</a> for input.</p>
<h2>Middle Tier</h2>
<p><a href="middletier.html">Middle Tier</a> is not typically an issue with time zones. The <a href="databasemanagementsystems.html">Database Management System</a> (DBMS) server time may be used when logging some date or time stamps (e.g., Audit Trail); this may differ from the middle tier server.</p>
<h2>Replication</h2>
<p>If using <a href="replication.html">Replication</a> in different time zones, data will be synced but may not show at all locations.</p>
<h2>Remote Access</h2>
<p>If using a <a href="remote.html">Remote Access</a> app to access an Open Dental database, users may notice that the workstation is using the time zone of the database they are remotely accessing, rather than the local time. This will affect features in Open Dental such as the horizontal time line in the <a href="appointments.html">Appointments Module</a>.</p>
<p>If this happens, the solution is to create a group policy to direct the remote server to use the local time zone on the user's workstation for software applications like Open Dental. Note that most times recorded in Open Dental are not affected by group policy, because they use the time zone of the DBMS server and not the workstation time.</p>
</div>
</div>
</body>
</html>```
