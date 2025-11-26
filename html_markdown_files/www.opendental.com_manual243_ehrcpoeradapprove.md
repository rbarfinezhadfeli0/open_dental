# File: ./www.opendental.com/manual243/ehrcpoeradapprove.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EHR Radiology Order List</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ehrcpoeradapprove','ehrdashboard1','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/ehrcpoeradapprove.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/ehrcpoeradapprove.html" >v24.2</option><option value="https://www.opendental.com/manual241/ehrcpoeradapprove.html" >v24.1</option><option value="https://www.opendental.com/manual233/ehrcpoeradapprove.html" >v23.3</option><option value="https://www.opendental.com/manual232/ehrcpoeradapprove.html" >v23.2</option><option value="https://www.opendental.com/manual231/ehrcpoeradapprove.html" >v23.1</option><option value="https://www.opendental.com/manual224/ehrcpoeradapprove.html" >v22.4</option><option value="https://www.opendental.com/manual223/ehrcpoeradapprove.html" >v22.3</option><option value="https://www.opendental.com/manual222/ehrcpoeradapprove.html" >v22.2</option><option value="https://www.opendental.com/manual221/ehrcpoeradapprove.html" >v22.1</option><option value="https://www.opendental.com/manual214/ehrcpoeradapprove.html" >v21.4</option><option value="https://www.opendental.com/manual213/ehrcpoeradapprove.html" >v21.3</option><option value="https://www.opendental.com/manual212/ehrcpoeradapprove.html" >v21.2</option><option value="https://www.opendental.com/manual211/ehrcpoeradapprove.html" >v21.1</option><option value="https://www.opendental.com/manual205/ehrcpoeradapprove.html" >v20.5</option><option value="https://www.opendental.com/manual204/ehrcpoeradapprove.html" >v20.4</option><option value="https://www.opendental.com/manual203/ehrcpoeradapprove.html" >v20.3</option><option value="https://www.opendental.com/manual202/ehrcpoeradapprove.html" >v20.2</option><option value="https://www.opendental.com/manual201/ehrcpoeradapprove.html" >v20.1</option><option value="https://www.opendental.com/manual194/ehrcpoeradapprove.html" >v19.4</option><option value="https://www.opendental.com/manual193/ehrcpoeradapprove.html" >v19.3</option><option value="https://www.opendental.com/manual192/ehrcpoeradapprove.html" >v19.2</option><option value="https://www.opendental.com/manual191/ehrcpoeradapprove.html" >v19.1</option><option value="https://www.opendental.com/manual184/ehrcpoeradapprove.html" >v18.4</option><option value="https://www.opendental.com/manual183/ehrcpoeradapprove.html" >v18.3</option><option value="https://www.opendental.com/manual182/ehrcpoeradapprove.html" >v18.2</option><option value="https://www.opendental.com/manual181/ehrcpoeradapprove.html" >v18.1</option><option value="https://www.opendental.com/manual174/ehrcpoeradapprove.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EHR Radiology Order List</p></div>
<div class="GeneralPageContent">
<p>For EHR providers, radiology orders must be entered using CPOE, meaning they must be entered or approved by a provider. Starting in version 15.4, all procedures marked as <i>Is Radiology</i> are automatically flagged as radiology orders. By default, all x-ray procedures (D0210 - D0340 and D0364 - D0386) are marked <i>Is Radiology</i> in the <a href="procedurecodes.html">Procedure Codes</a>. To count as CPOE, the EHR provider must add it themselves or approve the radiology procedure before it is marked complete.</p>
<div class="Note">Note: <ul>
<li>For measure calculation details, see <a href="../site/ehrcpoe.html">EHR Objective 3: Computerized Provider Order Entry (CPOE)</a>.</li>
<li>In version 15.3 and earlier, radiology orders had to be manually entered by a provider using the lab order interface and a RAD code. You can still use this process to enter orders. See <a href="ehrcpoerad.html">EHR Lab Order RAD codes</a>.</li>
</ul>
</div>
<br/><br/><h2>CPOE vs non-CPOE orders</h2>
<p>Radiology orders are automatically marked as CPOE when the EHR provider is logged on and does the following:</p>
<ul>
<li>Adds the procedure with a treatment planned status via chart, appointment, or treatment plan.</li>
<li>Opens the treatment planned procedure for any reason (double click the procedure in the Chart module).</li>
<li>Approves radiology procedures using the Radiology List (see below).</li>
<li>Sets the procedure (or appointment) complete.</li>
</ul>
<p>A radiology order is not marked CPOE when another user is logged on (non-EHR provider) and does the following:</p>
<ul>
<li>Adds the procedure with a treatment planned status via chart, appointment or treatment plan.</li>
<li>Sets a non-approved procedure complete.</li>
</ul>
<br/><h2>Approving orders using the Radiology List</h2>
<p>If the logged-on provider has radiology orders with a treatment planned (TP) status that are not already marked CPOE, an alert shows in the Open Dental menu bar. These alerts only show for providers with <a href="ehrproviderkeys.html">EHR Annual Provider Keys</a> who are subscribed to Radiology Order alerts. See <a href="alerts.html">Alerts</a> to subscribe the provider to the alert.</p>
<p>Enable or disable the alert by setting the <i>OpenDentalService alerts for scheduled non-CPOE radiology procedures</i> preference.</p>
<img src="images/alertRadiology.gif" width="655" height="75"/><p>These orders can be quickly approved by the provider using the Radiology List.</p>
<ol>
<li>Make sure the EHR provider is logged on to Open Dental.</li>
<li>Open the Radiology List. There are three ways to open it: <ul>
<li>Click Radiology Orders alert, Open Radiology Orders.</li>
<li>Click the <a href="appointmentlists.html">Appointment Lists</a> icon, then Radiology.</li>
<li>On the <a href="ehrdashboard1.html">EHR Dashboard</a>, click Approve radiology orders.</li>
</ul>
<br/><img src="images/ehrCpoeRadApprove.gif" width="915" height="470" class="ImageInParagraph"/><p>All of the provider's upcoming radiology procedures that are attached to scheduled appointments, have a status of treatment planned (TP) and are not yet marked CPOE will list. The goal is for this list to be empty, meaning all of the logged-on provider's radiology procedures are already approved. If a non-EHR provider is logged-on, the list will always be empty.</p>
<ul>
<li>To sort orders by date, name, code, abbr, or description, click a column header.</li>
<li>To quickly go to a patient's Chart or Family module, right click on the patient, then click See Chart or See Family.</li>
<li>This window is non-modal; you can keep it open while opening other windows. (Exception: it is not non-modal when accessed via the EHR dashboard).</li>
</ul>
</li>
<li>To approve all orders, click All.  <p>To approve selected orders only, highlight the orders, then click Selected.</p>
</li>
<li>Once approved, the orders will no longer show in the list. Click Close to close the window.</li>
</ol>
<br/><h2>Logic</h2>
<p>Notes: To show in the radiology list, procedures must meet this criteria:</p>
<ul>
<li>Flagged as <i>Is Radiology</i> (Procedure Code List).</li>
<li>Have a status of TP.</li>
<li>Is not yet approved.</li>
<li>Associated to the logged in provider.</li>
<li>Attached to an appointment with a status of scheduled and is in the future.</li>
</ul>
<p>If a procedure is marked as <i>is hygiene</i> and the appointment is scheduled in the hygiene operatory, the procedure will show in the Hygienist's radiology list.</p>
</div>
</div>
</body>
</html>```
