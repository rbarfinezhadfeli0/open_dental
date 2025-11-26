# File: ./www.opendental.com/manual243/orthoauto.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Auto Ortho</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('orthoauto','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/orthoauto.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/orthoauto.html" >v24.2</option><option value="https://www.opendental.com/manual241/orthoauto.html" >v24.1</option><option value="https://www.opendental.com/manual233/orthoauto.html" >v23.3</option><option value="https://www.opendental.com/manual232/orthoauto.html" >v23.2</option><option value="https://www.opendental.com/manual231/orthoauto.html" >v23.1</option><option value="https://www.opendental.com/manual224/orthoauto.html" >v22.4</option><option value="https://www.opendental.com/manual223/orthoauto.html" >v22.3</option><option value="https://www.opendental.com/manual222/orthoauto.html" >v22.2</option><option value="https://www.opendental.com/manual221/orthoauto.html" >v22.1</option><option value="https://www.opendental.com/manual214/orthoauto.html" >v21.4</option><option value="https://www.opendental.com/manual213/orthoauto.html" >v21.3</option><option value="https://www.opendental.com/manual212/orthoauto.html" >v21.2</option><option value="https://www.opendental.com/manual211/orthoauto.html" >v21.1</option><option value="https://www.opendental.com/manual205/orthoauto.html" >v20.5</option><option value="https://www.opendental.com/manual204/orthoauto.html" >v20.4</option><option value="https://www.opendental.com/manual203/orthoauto.html" >v20.3</option><option value="https://www.opendental.com/manual202/orthoauto.html" >v20.2</option><option value="https://www.opendental.com/manual201/orthoauto.html" >v20.1</option><option value="https://www.opendental.com/manual194/orthoauto.html" >v19.4</option><option value="https://www.opendental.com/manual193/orthoauto.html" >v19.3</option><option value="https://www.opendental.com/manual192/orthoauto.html" >v19.2</option><option value="https://www.opendental.com/manual191/orthoauto.html" >v19.1</option><option value="https://www.opendental.com/manual184/orthoauto.html" >v18.4</option><option value="https://www.opendental.com/manual183/orthoauto.html" >v18.3</option><option value="https://www.opendental.com/manual182/orthoauto.html" >v18.2</option><option value="https://www.opendental.com/manual181/orthoauto.html" >v18.1</option><option value="https://www.opendental.com/manual174/orthoauto.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Auto Ortho</p></div>
<div class="GeneralPageContent">
<p>Auto Ortho information for a patient includes the insurance plan's orthodontic claim defaults and the patient's orthodontic treatment information (total months, total used, time remaining).</p>
<p>In the <a href="account.html">Account Module</a>, when <i>Show Auto Ortho in account module</i> is enabled, an Auto Ortho tab shows next to Patient Account.</p>
<img src="images/OrthoAutoTab.png" width="753" height="331"/><p class="MarginBottomZero">Two <a href="preferences.html">Preferences</a> determine if and where Auto Ortho information is displayed: </p>
<ul class="MarginBottomGap">
<li><i>Show Auto Ortho in Account Module</i></li>
<li><i>Show Auto Ortho information in the Ortho Chart</i></li>
</ul>
<h2>Auto Ortho Tab</h2>
<p><b>Primary/Secondary/Other Ins</b>: Shows the insurance plan's orthodontic claim information as entered on the <a href="insplan.html">Insurance Plan</a>, Ortho tab. Double-click anywhere in the area to open the Ortho Patient Setup window.</p>
<img src="images/orthoPatientSetup.png" width="367" height="227"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>This window also opens when clicking the Ortho button in the <a href="insplan.html">Edit Insurance Plan</a> window</li>
<li>The patient's name and insurance information is displayed for reference.</li>
<li><b>Fee</b>: Displays the Auto Ortho fee to be billed. Uncheck <b>Use Default Fee</b> to customize the fee for the specific patient.</li>
<li><b>New Claim Date</b>: The next date the patient will appear in the <a href="orthoautoclaim.html">Ortho Auto Claims</a> list. Type a new date in the box to change when the patient next appears in the list. If any date, other than the first of the month (e.g., 01/17/2024), it is updated to the first of the corresponding month when saving (01/01/2024).</li>
<li>Click <b>Save</b> to exit the window and keep changes.</li>
</ul>
<p class="MarginBottomZero"><b>ClaimType</b>: How the carrier wants to receive orthodontic claims (Ortho Claim Type). Change this from Edit Insurance Plan, Ortho tab. </p>
<ul class="MarginBottomGap">
<li><i>Initial Claim Only</i>: Send a single orthodontic claim for the initial procedure.</li>
<li><i>Initial Plus Visit</i>: Send an orthodontic claim manually for the initial procedure and each subsequent visit.</li>
<li><i>Initial Plus Periodic</i>: Send an orthodontic claim manually for the initial procedure, then send periodic claims based on a specific frequency, fee, and procedure. This setting makes the patient eligible for the Auto Ortho Tool (<a href="orthoautoclaim.html">Ortho Auto Claims</a>). If this is the selected Claim Type, the following additional information is displayed</li>
<ul>
<li><b>Frequency</b>: How often the claim is auto-created (Auto Proc Period). Only shows when claim type is <i>Initial Plus Periodic</i>.</li>
<li><b>FeeBilled</b>: The procedure fee billed in the claim (Ortho Auto Fee). Only shows when claim type is <i>Initial Plus Periodic</i>.</li>
<li><b>LastClaim</b>: The last date a claim for the Ortho Auto Procedure was sent.</li>
<li><b>NextClaim</b>: The date the next automated claim will be created. Defaults to the first of the month following the placement procedure completion date (e.g., procedure date 12/15, NextClaim will be set to 1/1). Updates each time Ortho Auto claims are generated for the insurance plan. Only shows when claim type is <i>Initial Plus Periodic</i>. </li>
</ul>
</ul>
<p class="MarginBottomZero"><b>Pat Ortho Info</b>: Displays the patient's orthodontic information once the initial orthodontic procedure is complete. </p>
<ul class="MarginBottomGap">
<li><b>Total Tx Time</b>: The patient's total amount of ortho treatment time in months and days.</li>
<li><b>Date Start</b>: The date the initial orthodontic procedure was set complete.  <ul>
<li>Criteria for the initial orthodontic procedure is determined by the <i>Use the first ortho procedure as Date of Placement</i> and <i>Ortho Placement Procedures</i> preferences.</li>
<li>To manually enter a different date, enter a date for <i>Ortho Placement Date</i>, then click <b>Override</b>. To remove a date override, click <b>Default</b> to revert to the default date.</li>
</ul>
</li>
<li><b>Tx Months Total</b>: The total number of treatment months.  <ul>
<li>This is automatically set using the <i>Default months treatment</i> set in Preferences. To manually enter a different total, enter the number of months in <i>Patient Ortho Months Treat</i>, then click <b>Override</b>. </li>
<li>To reset the default, click <b>Default</b>. </li>
<li>This amount is used to determine the end date for orthodontic claims generated using the Auto Ortho Tool.</li>
</ul>
</li>
<li><b>Months in Treatment</b>: The number of months elapsed since the patient's Date Start. </li>
<div class="Note">Note: By default, Months in Treatment continues to calculate after the treatment has been completed. To prevent this, enable the preference, <i>Completing Debond procedure overrides months treatment</i>.</div>
<li><b>Months Rem</b>: The ortho treatment time remaining in months. Calculated by <span class="codeblock">Tx Months Total - Months in Treatment</span></li>
</ul>
<h2>Ortho Chart</h2>
<p>When <i>Show Auto Ortho in the Ortho Chart</i> is enabled in Preferences, an Ortho Info grid is shown in the <a href="orthochart.html">Ortho Chart</a>. It displays the same Pat Ortho Info that shows in the preceding Auto Ortho tab.</p>
<img src="images/orthoChartInfo.png" width="372" height="156"/></div>
</div>
</body>
</html>```
