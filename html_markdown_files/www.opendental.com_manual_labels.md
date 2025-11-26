# File: ./www.opendental.com/manual/labels.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Labels</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('labels','toolbar','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/labels.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/labels.html" >v24.2</option><option value="https://www.opendental.com/manual241/labels.html" >v24.1</option><option value="https://www.opendental.com/manual233/labels.html" >v23.3</option><option value="https://www.opendental.com/manual232/labels.html" >v23.2</option><option value="https://www.opendental.com/manual231/labels.html" >v23.1</option><option value="https://www.opendental.com/manual224/labels.html" >v22.4</option><option value="https://www.opendental.com/manual223/labels.html" >v22.3</option><option value="https://www.opendental.com/manual222/labels.html" >v22.2</option><option value="https://www.opendental.com/manual221/labels.html" >v22.1</option><option value="https://www.opendental.com/manual214/labels.html" >v21.4</option><option value="https://www.opendental.com/manual213/labels.html" >v21.3</option><option value="https://www.opendental.com/manual212/labels.html" >v21.2</option><option value="https://www.opendental.com/manual211/labels.html" >v21.1</option><option value="https://www.opendental.com/manual205/labels.html" >v20.5</option><option value="https://www.opendental.com/manual204/labels.html" >v20.4</option><option value="https://www.opendental.com/manual203/labels.html" >v20.3</option><option value="https://www.opendental.com/manual202/labels.html" >v20.2</option><option value="https://www.opendental.com/manual201/labels.html" >v20.1</option><option value="https://www.opendental.com/manual194/labels.html" >v19.4</option><option value="https://www.opendental.com/manual193/labels.html" >v19.3</option><option value="https://www.opendental.com/manual192/labels.html" >v19.2</option><option value="https://www.opendental.com/manual191/labels.html" >v19.1</option><option value="https://www.opendental.com/manual184/labels.html" >v18.4</option><option value="https://www.opendental.com/manual183/labels.html" >v18.3</option><option value="https://www.opendental.com/manual182/labels.html" >v18.2</option><option value="https://www.opendental.com/manual181/labels.html" >v18.1</option><option value="https://www.opendental.com/manual174/labels.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Labels</p></div>
<div class="GeneralPageContent">
<p>In the <a href="toolbar.html">Main Toolbar</a>, click <b>Label</b>.</p>
<img src="images/labelButton.png" width="730" height="32"/><p>Labels can be printed one at a time or by sheet. They can be customized in <a href="sheets.html">Sheets</a>.</p>
<p>Click the Label dropdown to select a different label option.</p>
<img src="images/labelDropdown.png" width="238" height="203"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>If no custom labels have been created, all internal label sheet options show.</li>
<li>If custom labels have been created, only the custom labels show.</li>
</ul>
<table class="simpletable">
<tr>
<th style="width:50%"><b>Possible Dropdown Options</b></th>
<th style="width:50%"><b>Internal Sheet</b></th>
</tr>
<tr>
<td>Label Patient Mail</td>
<td>Label Patient Mail</td>
</tr>
<tr>
<td>LName, FName, Address</td>
<td>Label PatientLFAddress</td>
</tr>
<tr>
<td>Name, ChartNumber</td>
<td>Label PatientLFChartNumber</td>
</tr>
<tr>
<td>Name, PatNum</td>
<td>Label PatientLFPatNum</td>
</tr>
<tr>
<td>Radiograph</td>
<td>Label Patient Radiograph</td>
</tr>
<tr>
<td>Label text</td>
<td>Label text</td>
</tr>
</table>
<br/><h2>Individual Labels</h2>
<p>Individual labels are useful for single address labels for a patient, insurance carrier, referrals, or for labeling patient records.</p>
<p>To print labels one at a time, use a label printer. Label printers may require some additional installation outside of Open Dental. Once the label printer is set up as a Windows printer, go to the <a href="printersetup.html">Printer Setup</a> on the workstation where users print labels. Set labels to print on the label printer with no prompt.</p>
<p>There are several places where single labels can be printed. Labels do not display on the screen before printing and are not saved in the database.</p>
<p><b>Patient Labels</b>: The label printed is determined by the label selected in Sheet Setup for Label assigned to patient button. By default, it is the internal Label Patient Mail.</p>
<p class="MarginBottomZero"><b>Insurance Carrier Label</b></p>
<ul class="MarginBottomGap">
<li>In the main toolbar, click the Label dropdown and select the carrier.</li>
<li>On the <a href="insplan.html">Insurance Plan</a>, click <b>Label</b>.</li>
<li>On the <a href="claimedit.html">Claim</a> click <b>Label</b></li>
<li>On the <a href="claimsend.html">Insurance Claims</a> window, highlight the claims, then click <b>Labels</b>. Single labels print for those carriers.</li>
</ul>
<p><b>Labels for Referrals:</b> In the toolbar, click the Labels dropdown, then click the Referral name.</p>
<p><b>Single Appointment Labels:</b> In the <a href="appointments.html">Appointments Module</a>, right-click on an appointment and click <b>Print Label</b>.</p>
<h2>Sheets of Labels</h2>
<p>Print sheets of labels on a laser or inkjet printer. This method is useful when printing large quantities of labels for Recalls, birthday cards, etc. The disadvantage to this method is leftover labels on the sheet that are hard to run through the printer again. The <a href="recalllist.html">Recall List</a> has built-in functionality for printing sheets of labels.</p>
<p>There is also a <a href="laserlabels.html">Laser Labels</a> feature which can print labels for patients, insurance companies, and birthdays.</p>
<p>If sheets of labels are needed for any other purpose, users have to create a report, export to a text file, and then merge into their own Word template.</p>
<p>See <a href="https://support.office.com/en-US/article/Create-and-print-labels-for-a-mass-mailing-8037DBA1-7E3A-40AF-8CC0-F25EE4130241" target="_blank">https://support.office.com/en-US/article/Create-and-print-labels-for-a-mass-mailing-8037DBA1-7E3A-40AF-8CC0-F25EE4130241</a>.</p>
</div>
</div>
</body>
</html>```
