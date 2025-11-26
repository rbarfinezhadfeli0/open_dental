# File: ./www.opendental.com/manual232/inshistory.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Insurance History</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('inshistory','insplan','family','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/inshistory.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/inshistory.html" >v24.2</option><option value="https://www.opendental.com/manual241/inshistory.html" >v24.1</option><option value="https://www.opendental.com/manual233/inshistory.html" >v23.3</option><option value="https://www.opendental.com/manual232/inshistory.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/inshistory.html" >v23.1</option><option value="https://www.opendental.com/manual224/inshistory.html" >v22.4</option><option value="https://www.opendental.com/manual223/inshistory.html" >v22.3</option><option value="https://www.opendental.com/manual222/inshistory.html" >v22.2</option><option value="https://www.opendental.com/manual221/inshistory.html" >v22.1</option><option value="https://www.opendental.com/manual214/inshistory.html" >v21.4</option><option value="https://www.opendental.com/manual213/inshistory.html" >v21.3</option><option value="https://www.opendental.com/manual212/inshistory.html" >v21.2</option><option value="https://www.opendental.com/manual211/inshistory.html" >v21.1</option><option value="https://www.opendental.com/manual205/inshistory.html" >v20.5</option><option value="https://www.opendental.com/manual204/inshistory.html" >v20.4</option><option value="https://www.opendental.com/manual203/inshistory.html" >v20.3</option><option value="https://www.opendental.com/manual202/inshistory.html" >v20.2</option><option value="https://www.opendental.com/manual201/inshistory.html" >v20.1</option><option value="https://www.opendental.com/manual194/inshistory.html" >v19.4</option><option value="https://www.opendental.com/manual193/inshistory.html" >v19.3</option><option value="https://www.opendental.com/manual192/inshistory.html" >v19.2</option><option value="https://www.opendental.com/manual191/inshistory.html" >v19.1</option><option value="https://www.opendental.com/manual184/inshistory.html" >v18.4</option><option value="https://www.opendental.com/manual183/inshistory.html" >v18.3</option><option value="https://www.opendental.com/manual182/inshistory.html" >v18.2</option><option value="https://www.opendental.com/manual181/inshistory.html" >v18.1</option><option value="https://www.opendental.com/manual174/inshistory.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Insurance History</p></div>
<div class="GeneralPageContent">
<p>Insurance History allows previous treatment dates for procedures completed outside the practice to be recorded or shows users the last date your practice completed procedures that are attached to received claims.</p>
<p>In an <a href="insplan.html">Insurance Plan</a>, click <b>Hist</b>.</p>
<img src="images/insuranceHistButton.png" width="374" height="94"/><p>Alternatively, in the <a href="family.html">Family Module</a>, at the bottom of the insurance plan, double-click the insurance history grid.</p>
<img src="images/insHistGrid.png" width="329" height="201"/><p>The Insurance History window opens.</p>
<img src="images/insuranceHistory.png" width="466" height="341"/><p>Tracking Insurance History is useful when using <a href="insfrequencylimitations.html">Frequency Limitations</a>. By entering the previous date for procedures completed outside the office, Open Dental can calculate frequency limitations accurately. </p>
<p>Procedures codes assigned to each category are determined by <a href="preferences.html">Preferences</a>, <i> Insurance History</i>. Only one procedure code should be set in each category.</p>
<h2>Updating Insurance History</h2>
<p>There are a number of ways insurance history can be updated. </p>
<p><b>Option 1: Manually enter the procedure date. </b><br/> Enter the date the procedure was completed, then click <b>OK</b>. The first procedure code entered for <i>Insurance History</i> in Preferences for the corresponding category (e.g., Bitewing, Prophy, etc.) is added as an Existing Other procedure in the <a href="chart.html">Chart Module</a>.</p>
<p><b>Option 2: Import dates.</b><br/> If using <a href="ebenefits.html">Electronic Eligibility and Benefits</a>, this information can be updated.</p>
<p></p>
<p><b>Option 3: Complete procedures.</b><br/> When an applicable procedure is set complete and attached to a received claim, the date is automatically updated.</p>
<p><div class="Note">Note: <ul>
<li> If the date is from a Completed procedure and a user attempts an edit, the new date is only shown if it is more recent than the Completed procedure's date.</li>
<li>Entering a procedure as Existing Other in the Chart Module does not update Insurance History. </li>
<li>If insurance benefits were used outside the office for the current benefit year, enter <a href="adjinsbenefits.html">Adjustments to Insurance Benefits</a>.</li>
<li>If a recall procedure (e.g., Prophy) was completed and the date is entered in Insurance History, the <a href="recall.html">Recall</a> due date for the patient is updated.</li>
</ul>
</div>
</p>
</div>
</div>
</body>
</html>```
