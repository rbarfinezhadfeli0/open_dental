# File: ./www.opendental.com/manual232/orthoauto.html

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
						}"><option value="https://www.opendental.com/manual243/orthoauto.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/orthoauto.html" >v24.2</option><option value="https://www.opendental.com/manual241/orthoauto.html" >v24.1</option><option value="https://www.opendental.com/manual233/orthoauto.html" >v23.3</option><option value="https://www.opendental.com/manual232/orthoauto.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/orthoauto.html" >v23.1</option><option value="https://www.opendental.com/manual224/orthoauto.html" >v22.4</option><option value="https://www.opendental.com/manual223/orthoauto.html" >v22.3</option><option value="https://www.opendental.com/manual222/orthoauto.html" >v22.2</option><option value="https://www.opendental.com/manual221/orthoauto.html" >v22.1</option><option value="https://www.opendental.com/manual214/orthoauto.html" >v21.4</option><option value="https://www.opendental.com/manual213/orthoauto.html" >v21.3</option><option value="https://www.opendental.com/manual212/orthoauto.html" >v21.2</option><option value="https://www.opendental.com/manual211/orthoauto.html" >v21.1</option><option value="https://www.opendental.com/manual205/orthoauto.html" >v20.5</option><option value="https://www.opendental.com/manual204/orthoauto.html" >v20.4</option><option value="https://www.opendental.com/manual203/orthoauto.html" >v20.3</option><option value="https://www.opendental.com/manual202/orthoauto.html" >v20.2</option><option value="https://www.opendental.com/manual201/orthoauto.html" >v20.1</option><option value="https://www.opendental.com/manual194/orthoauto.html" >v19.4</option><option value="https://www.opendental.com/manual193/orthoauto.html" >v19.3</option><option value="https://www.opendental.com/manual192/orthoauto.html" >v19.2</option><option value="https://www.opendental.com/manual191/orthoauto.html" >v19.1</option><option value="https://www.opendental.com/manual184/orthoauto.html" >v18.4</option><option value="https://www.opendental.com/manual183/orthoauto.html" >v18.3</option><option value="https://www.opendental.com/manual182/orthoauto.html" >v18.2</option><option value="https://www.opendental.com/manual181/orthoauto.html" >v18.1</option><option value="https://www.opendental.com/manual174/orthoauto.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Auto Ortho</p></div>
<div class="GeneralPageContent">
<p>Auto Ortho information for a patient includes the insurance plan's orthodontic claim defaults and the patient's orthodontic treatment information (total months, total used, time remaining).</p>
<p>In the <a href="account.html">Account Module</a>, when <i>Show Auto Ortho in account module</i> is enabled, an Auto Ortho tab shows next to Patient Account.</p>
<img src="images/OrthoAutoTab.png" width="556" height="237"/><p class="MarginBottomZero">Two preferences in <a href="orthosetup.html">Ortho Setup</a> determine if and where Auto Ortho information shows: </p>
<ul class="MarginBottomGap">
<li><i>Show Auto Ortho in Account Module</i></li>
<li><i>Show Auto Ortho information in the Ortho Chart</i></li>
</ul>
<h2>Auto Ortho Tab</h2>
<p><b>Primary/Secondary/Other Ins</b>: Shows the insurance plan's orthodontic claim information as entered on the <a href="insplan.html">Insurance Plan</a>, Ortho tab. Double-click anywhere in the area to open the Ortho Patient Setup window.</p>
<p class="MarginBottomZero"><b>ClaimType</b>: How the carrier wants to receive orthodontic claims (Ortho Claim Type).  </p>
<ul class="MarginBottomGap">
<li><i>Initial Claim Only</i>: Send a single orthodontic claim for the initial procedure.</li>
<li><i>Initial Plus Visit</i>: Send an orthodontic claim manually for the initial procedure and each subsequent visit.</li>
<li><i>Initial Plus Periodic</i>: Send an orthodontic claim manually for the initial procedure, then send periodic claims based on a specific frequency, fee, and procedure. This setting makes the patient eligible for the Auto Ortho Tool (<a href="orthoautoclaim.html">Ortho Auto Claims</a>).</li>
</ul>
<p>The following information may also show:</p>
<ul>
<li><b>Frequency</b>: How often the claim will be auto-created (Auto Proc Period). Only shows when claim type is Initial Plus Periodic.</li>
<li><b>FeeBilled</b>: The procedure fee billed in the claim (Ortho Auto Fee). Only shows when claim type is Initial Plus Periodic.</li>
<li><b>LastClaim</b>: The last date a claim for the Ortho Auto Procedure was sent.</li>
<li><b>NextClaim</b>: The date the next automated claim will be created. Defaults to the first of the month following the placement procedure completion date (e.g. procedure date 12/15, NextClaim will be set to 1/1). Updates each time Ortho Auto claims are generated for the insurance plan. Only shows when claim type is Initial Plus Periodic. </li>
</ul>
<br/><p><b>Pat Ortho Info</b>: Displays the patient's orthodontic information once the initial orthodontic procedure has been completed.</p>
<ul>
<li><b>Total Tx Time</b>: The patient's total amount of time in treatment time in months and days.</li>
<li><b>Date Start</b>: The date the initial orthodontic procedure was set complete. See Ortho Setup to select criteria for the default initial orthodontic procedure. To manually enter a different date, enter a date for Ortho Placement Date, then click <b>Override</b>. To reset the default date, click <b>Default</b>.</li>
<li><b>Tx Months Total</b>: The total number of treatment months. The default is set in Ortho Setup. To manually enter a different total, enter the number of months in Patient Ortho Months Treat, then click <b>Override</b>. To reset the default, click <b>Default</b>. This amount is used to determine the end date for orthodontic claims generated using the Auto Ortho Tool.</li>
<li><b>Months in Treatment</b>: The number of months since the patient's initial orthodontic procedure was set complete. </li>
<div class="Note">Note: By default, Months in Treatment continues to calculate after the treatment has been completed. To prevent this, enable the <i>Completing Debond procedure overrides months treatment</i> preference in <a href="orthosetup.html">Ortho Setup</a>.</div>
<li><b>Months Rem</b>: The amount of treatment months remaining.</li>
</ul>
<br/><h2>Ortho Chart</h2>
<p>When <i>Show Auto Ortho in ortho chart</i> is selected, an Ortho Info grid shows in the upper left corner of the <a href="orthochart.html">Ortho Chart</a>. It displays the same Pat Ortho Info that shows in the Auto Ortho tab (above)</p>
<img src="images/orthoChartInfo.gif" width="372" height="156"/></div>
</div>
</body>
</html>```
