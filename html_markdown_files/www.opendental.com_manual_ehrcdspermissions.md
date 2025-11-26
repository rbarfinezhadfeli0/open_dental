# File: ./www.opendental.com/manual/ehrcdspermissions.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EHR CDS Permissions</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ehrcdspermissions','ehrcdsconfigure','ehrsetupwindow','+chart','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/ehrcdspermissions.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/ehrcdspermissions.html" >v24.2</option><option value="https://www.opendental.com/manual241/ehrcdspermissions.html" >v24.1</option><option value="https://www.opendental.com/manual233/ehrcdspermissions.html" >v23.3</option><option value="https://www.opendental.com/manual232/ehrcdspermissions.html" >v23.2</option><option value="https://www.opendental.com/manual231/ehrcdspermissions.html" >v23.1</option><option value="https://www.opendental.com/manual224/ehrcdspermissions.html" >v22.4</option><option value="https://www.opendental.com/manual223/ehrcdspermissions.html" >v22.3</option><option value="https://www.opendental.com/manual222/ehrcdspermissions.html" >v22.2</option><option value="https://www.opendental.com/manual221/ehrcdspermissions.html" >v22.1</option><option value="https://www.opendental.com/manual214/ehrcdspermissions.html" >v21.4</option><option value="https://www.opendental.com/manual213/ehrcdspermissions.html" >v21.3</option><option value="https://www.opendental.com/manual212/ehrcdspermissions.html" >v21.2</option><option value="https://www.opendental.com/manual211/ehrcdspermissions.html" >v21.1</option><option value="https://www.opendental.com/manual205/ehrcdspermissions.html" >v20.5</option><option value="https://www.opendental.com/manual204/ehrcdspermissions.html" >v20.4</option><option value="https://www.opendental.com/manual203/ehrcdspermissions.html" >v20.3</option><option value="https://www.opendental.com/manual202/ehrcdspermissions.html" >v20.2</option><option value="https://www.opendental.com/manual201/ehrcdspermissions.html" >v20.1</option><option value="https://www.opendental.com/manual194/ehrcdspermissions.html" >v19.4</option><option value="https://www.opendental.com/manual193/ehrcdspermissions.html" >v19.3</option><option value="https://www.opendental.com/manual192/ehrcdspermissions.html" >v19.2</option><option value="https://www.opendental.com/manual191/ehrcdspermissions.html" >v19.1</option><option value="https://www.opendental.com/manual184/ehrcdspermissions.html" >v18.4</option><option value="https://www.opendental.com/manual183/ehrcdspermissions.html" >v18.3</option><option value="https://www.opendental.com/manual182/ehrcdspermissions.html" >v18.2</option><option value="https://www.opendental.com/manual181/ehrcdspermissions.html" >v18.1</option><option value="https://www.opendental.com/manual174/ehrcdspermissions.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EHR CDS Permissions</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Chart, EHR, then click <b>CDS Triggers</b>. In the upper left corner, click <b>Setup</b>.</p>
<img src="images/cdsSupportSetup.gif" width="915" height="470"/><p>In Clinical Decision Support (CDS) setup, you can grant or block specific users from <a href="ehrcdsconfigure.html">EHR Configure CDS Rules</a> or encountering <a href="ehrcdsintervention.html">EHR CDS Interventions</a>.</p>
<p>All users set up in Security will be listed, along with a column for each permission area. The Admin user always has the ability to view this window.</p>
<p>Click in a column to allow or block a user from a permission. An X in a cell indicates the user has permission.</p>
<table class="simpletable">
<tr>
<td style="width:50%">User Name</td>
<td style="width:50%">The user's name as set in <a href="security.html">Security</a>.</td>
</tr>
<tr>
<td>Group Name</td>
<td>The user's <a href="securityusergroups.html">User Group</a>.</td>
</tr>
<tr>
<td>Show CDS</td>
<td>User will encounter CDS interventions for allowed categories. If this permission is blocked, user will see no interventions.</td>
</tr>
<tr>
<td>Show <i>i</i></td>
<td>User can see and access the <a href="ehrinfobutton.html">EHR InfoButton</a>.</td>
</tr>
<tr>
<td>Edit CDS</td>
<td>User can change CDS permissions and Configure CDS Interventions.</td>
</tr>
<tr>
<td>Source</td>
<td>User can edit instructions and bibliography information.</td>
</tr>
<tr>
<td>Problem</td>
<td>User will encounter CDS interventions based on <a href="problempatient.html">Problems</a>.</td>
</tr>
<tr>
<td>Medication</td>
<td>User will encounter CDS interventions based on <a href="medicationspatient.html">Medications</a>.</td>
</tr>
<tr>
<td>Allergy</td>
<td>User will encounter CDS interventions based on <a href="allergiespatient.html">Allergies</a>.</td>
</tr>
<tr>
<td>Demographic</td>
<td>User will encounter CDS interventions based on Demographic information.</td>
</tr>
<tr>
<td>Lab</td>
<td>User will encounter CDS interventions based on Lab Results.</td>
</tr>
<tr>
<td>Vitals</td>
<td>User will encounter CDS interventions based on <a href="vitalsignsenter.html">EHR Vital Signs</a>.</td>
</tr>
</table>
</div>
</div>
</body>
</html>```
