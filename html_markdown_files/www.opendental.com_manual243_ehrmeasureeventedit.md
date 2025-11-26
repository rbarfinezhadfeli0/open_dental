# File: ./www.opendental.com/manual243/ehrmeasureeventedit.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EHR Edit Measure Events</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ehrmeasureeventedit','ehrdashboard1','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/ehrmeasureeventedit.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/ehrmeasureeventedit.html" >v24.2</option><option value="https://www.opendental.com/manual241/ehrmeasureeventedit.html" >v24.1</option><option value="https://www.opendental.com/manual233/ehrmeasureeventedit.html" >v23.3</option><option value="https://www.opendental.com/manual232/ehrmeasureeventedit.html" >v23.2</option><option value="https://www.opendental.com/manual231/ehrmeasureeventedit.html" >v23.1</option><option value="https://www.opendental.com/manual224/ehrmeasureeventedit.html" >v22.4</option><option value="https://www.opendental.com/manual223/ehrmeasureeventedit.html" >v22.3</option><option value="https://www.opendental.com/manual222/ehrmeasureeventedit.html" >v22.2</option><option value="https://www.opendental.com/manual221/ehrmeasureeventedit.html" >v22.1</option><option value="https://www.opendental.com/manual214/ehrmeasureeventedit.html" >v21.4</option><option value="https://www.opendental.com/manual213/ehrmeasureeventedit.html" >v21.3</option><option value="https://www.opendental.com/manual212/ehrmeasureeventedit.html" >v21.2</option><option value="https://www.opendental.com/manual211/ehrmeasureeventedit.html" >v21.1</option><option value="https://www.opendental.com/manual205/ehrmeasureeventedit.html" >v20.5</option><option value="https://www.opendental.com/manual204/ehrmeasureeventedit.html" >v20.4</option><option value="https://www.opendental.com/manual203/ehrmeasureeventedit.html" >v20.3</option><option value="https://www.opendental.com/manual202/ehrmeasureeventedit.html" >v20.2</option><option value="https://www.opendental.com/manual201/ehrmeasureeventedit.html" >v20.1</option><option value="https://www.opendental.com/manual194/ehrmeasureeventedit.html" >v19.4</option><option value="https://www.opendental.com/manual193/ehrmeasureeventedit.html" >v19.3</option><option value="https://www.opendental.com/manual192/ehrmeasureeventedit.html" >v19.2</option><option value="https://www.opendental.com/manual191/ehrmeasureeventedit.html" >v19.1</option><option value="https://www.opendental.com/manual184/ehrmeasureeventedit.html" >v18.4</option><option value="https://www.opendental.com/manual183/ehrmeasureeventedit.html" >v18.3</option><option value="https://www.opendental.com/manual182/ehrmeasureeventedit.html" >v18.2</option><option value="https://www.opendental.com/manual181/ehrmeasureeventedit.html" >v18.1</option><option value="https://www.opendental.com/manual174/ehrmeasureeventedit.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EHR Edit Measure Events</p></div>
<div class="GeneralPageContent">
<p>Measure events are actions a user takes that affect an <a href="../site/ehrlicense.html">EHR</a> measure calculation. Measure event dates can be changed. All changes are tracked in an audit trail. You must have the EHR Measure Event Edit Permission. See <a href="permissions.html">Permissions</a>.</p>
<h2>Change a measure event date</h2>
<p>To edit a measure event, select a patient.</p>
<ol>
<li>In the <a href="chart.html">Chart Module</a> toolbar, click EHR. The stage 1 or stage 2 <a href="ehrdashboard1.html">dashboard</a> will show depending on your Meaningful Use stage. <br/><img src="images/ehrMeasureEvent.gif" width="833" height="712" class="ImageInParagraph"/></li>
<li>Click <b>Edit Events</b>. <br/><img src="images/ehrMeasureEventEdit.gif" width="800" height="479" class="ImageInParagraph"/><p class="MarginBottomZero">All measure events will list for the date range, sorted by date, newest to oldest.  </p>
<ul class="MarginBottomGap">
<li>To filter by measure event type, click the <i>Type</i> drop down and select an option.</li>
<li>To change the date range, enter a new start or end date, and click <b>Refresh</b>.</li>
</ul>
</li>
<li>Double click an event type to edit. <br/><img src="images/ehrMeasureEventEditWindow.gif" width="580" height="280" class="ImageInParagraph"/></li>
<li>Change the date/time as needed. Notes are optional. Click OK.</li>
</ol>
<br/><h2>Audit trail</h2>
<p>All changes to measure event dates are tracked in an <a href="audittrail.html">Audit Trail</a>. On the EHR Measure Events window, click <b>Audit Trail</b>.</p>
<img src="images/ehrMeasureEventAuditTrail.gif" width="915" height="159"/><p>Log Text displays date changes and notes. Click the X to close the window.</p>
</div>
</div>
</body>
</html>```
