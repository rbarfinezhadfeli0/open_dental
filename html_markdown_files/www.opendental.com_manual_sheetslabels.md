# File: ./www.opendental.com/manual/sheetslabels.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Label Layout</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('sheetslabels','sheets','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/sheetslabels.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/sheetslabels.html" >v24.2</option><option value="https://www.opendental.com/manual241/sheetslabels.html" >v24.1</option><option value="https://www.opendental.com/manual233/sheetslabels.html" >v23.3</option><option value="https://www.opendental.com/manual232/sheetslabels.html" >v23.2</option><option value="https://www.opendental.com/manual231/sheetslabels.html" >v23.1</option><option value="https://www.opendental.com/manual224/sheetslabels.html" >v22.4</option><option value="https://www.opendental.com/manual223/sheetslabels.html" >v22.3</option><option value="https://www.opendental.com/manual222/sheetslabels.html" >v22.2</option><option value="https://www.opendental.com/manual221/sheetslabels.html" >v22.1</option><option value="https://www.opendental.com/manual214/sheetslabels.html" >v21.4</option><option value="https://www.opendental.com/manual213/sheetslabels.html" >v21.3</option><option value="https://www.opendental.com/manual212/sheetslabels.html" >v21.2</option><option value="https://www.opendental.com/manual211/sheetslabels.html" >v21.1</option><option value="https://www.opendental.com/manual205/sheetslabels.html" >v20.5</option><option value="https://www.opendental.com/manual204/sheetslabels.html" >v20.4</option><option value="https://www.opendental.com/manual203/sheetslabels.html" >v20.3</option><option value="https://www.opendental.com/manual202/sheetslabels.html" >v20.2</option><option value="https://www.opendental.com/manual201/sheetslabels.html" >v20.1</option><option value="https://www.opendental.com/manual194/sheetslabels.html" >v19.4</option><option value="https://www.opendental.com/manual193/sheetslabels.html" >v19.3</option><option value="https://www.opendental.com/manual192/sheetslabels.html" >v19.2</option><option value="https://www.opendental.com/manual191/sheetslabels.html" >v19.1</option><option value="https://www.opendental.com/manual184/sheetslabels.html" >v18.4</option><option value="https://www.opendental.com/manual183/sheetslabels.html" >v18.3</option><option value="https://www.opendental.com/manual182/sheetslabels.html" >v18.2</option><option value="https://www.opendental.com/manual181/sheetslabels.html" >v18.1</option><option value="https://www.opendental.com/manual174/sheetslabels.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Label Layout</p></div>
<div class="GeneralPageContent">
<p>Printable labels can be customized to meet the practice's needs.</p>
<p>In <a href="sheets.html">Sheets</a>, double-click on a custom sheet with the type of Label.</p>
<img src="images/sheetLabel.gif" width="661" height="750"/><p class="MarginBottomZero">Alternatively, in Sheets:  </p>
<ul class="MarginBottomGap">
<li>Click <b>New</b> and choose <i>Label</i> as the Sheet Type to create a new label from blank.</li>
<li>Select an existing Custom <i>Label</i> sheet and click <b>Duplicate</b> to create a copy of an existing label.</li>
<li>Select the existing Internal <i>Label</i> sheet and click <b>Copy</b> to create a copy of a default label that can be edited.</li>
</ul>
<p class="MarginBottomZero">There are four Label sheet types: </p>
<ul class="MarginBottomGap">
<li>LabelAppointment: Prints appointment information.</li>
<li>LabelPatient: Prints patient information.</li>
<li>LabelCarrier: Prints insurance carrier information.</li>
<li>LabelReferral: Prints referral information.</li>
</ul>
<p>Also see: <a href="sheetproperties.html">Sheet Def Properties</a> and <a href="sheetsaddelements.html">Sheet Field Types</a>.</p>
<p>To customize a Label sheet type, see <a href="sheetsetup.html">Edit Sheet Def</a>.</p>
<p>Open Dental has 9 internal label sheets. Labels can be customized by duplicating an internal sheet or creating a new custom label. To print a single label, see <a href="labels.html">Labels</a>.</p>
<table class="simpletable">
<tr>
<th style="width:33%">Internal Sheet Description</th>
<th style="width:33%">Type</th>
<th style="width:33%">What prints</th>
</tr>
<tr>
<td>Label Patient Mail</td>
<td>LabelPatient</td>
<td>patient's first name, last name, address</td>
</tr>
<tr>
<td>Label PatientLFAddress</td>
<td>LabelPatient</td>
<td>patient's last name, first name, address</td>
</tr>
<tr>
<td>Label PatientLFChartNumber</td>
<td>LabelPatient</td>
<td>patient's last name, first name, chart number</td>
</tr>
<tr>
<td>Label PatientLFPatNum</td>
<td>LabelPatient</td>
<td>patient's last name, first name, patient number</td>
</tr>
<tr>
<td>Label Patient Radiograph</td>
<td>LabelPatient</td>
<td>patient's Last Name, First Name, birthdate, primary provider name and today's date and time</td>
</tr>
<tr>
<td>Label Carrier</td>
<td>LabelCarrier</td>
<td>insurance carrier name, address</td>
</tr>
<tr>
<td>Label Referral</td>
<td>LabelReferral</td>
<td>referral name, address</td>
</tr>
<tr>
<td>Label Appointment</td>
<td>LabelAppointment</td>
<td>patient's first and last name, appointment date and time, length</td>
</tr>
</table>
<br/><p>By default, when <b>Label</b> is clicked in the <a href="toolbar.html">Main Toolbar</a>, the internal Label Patient Mail prints. To change the label that is printed, assign a different label in <a href="sheetdefaults.html">Sheet Def Defaults</a><i> Label assigned to patient button</i>.</p>
<p><img src="images/sheetLabelButton.png" width="636" height="234"/></p>
</div>
</div>
</body>
</html>```
