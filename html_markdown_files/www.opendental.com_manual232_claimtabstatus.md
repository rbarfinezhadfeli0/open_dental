# File: ./www.opendental.com/manual232/claimtabstatus.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Edit Claim - Status History Tab</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('claimtabstatus','claimedit','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/claimtabstatus.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/claimtabstatus.html" >v24.2</option><option value="https://www.opendental.com/manual241/claimtabstatus.html" >v24.1</option><option value="https://www.opendental.com/manual233/claimtabstatus.html" >v23.3</option><option value="https://www.opendental.com/manual232/claimtabstatus.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/claimtabstatus.html" >v23.1</option><option value="https://www.opendental.com/manual224/claimtabstatus.html" >v22.4</option><option value="https://www.opendental.com/manual223/claimtabstatus.html" >v22.3</option><option value="https://www.opendental.com/manual222/claimtabstatus.html" >v22.2</option><option value="https://www.opendental.com/manual221/claimtabstatus.html" >v22.1</option><option value="https://www.opendental.com/manual214/claimtabstatus.html" >v21.4</option><option value="https://www.opendental.com/manual213/claimtabstatus.html" >v21.3</option><option value="https://www.opendental.com/manual212/claimtabstatus.html" >v21.2</option><option value="https://www.opendental.com/manual211/claimtabstatus.html" >v21.1</option><option value="https://www.opendental.com/manual205/claimtabstatus.html" >v20.5</option><option value="https://www.opendental.com/manual204/claimtabstatus.html" >v20.4</option><option value="https://www.opendental.com/manual203/claimtabstatus.html" >v20.3</option><option value="https://www.opendental.com/manual202/claimtabstatus.html" >v20.2</option><option value="https://www.opendental.com/manual201/claimtabstatus.html" >v20.1</option><option value="https://www.opendental.com/manual194/claimtabstatus.html" >v19.4</option><option value="https://www.opendental.com/manual193/claimtabstatus.html" >v19.3</option><option value="https://www.opendental.com/manual192/claimtabstatus.html" >v19.2</option><option value="https://www.opendental.com/manual191/claimtabstatus.html" >v19.1</option><option value="https://www.opendental.com/manual184/claimtabstatus.html" >v18.4</option><option value="https://www.opendental.com/manual183/claimtabstatus.html" >v18.3</option><option value="https://www.opendental.com/manual182/claimtabstatus.html" >v18.2</option><option value="https://www.opendental.com/manual181/claimtabstatus.html" >v18.1</option><option value="https://www.opendental.com/manual174/claimtabstatus.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Edit Claim - Status History Tab</p></div>
<div class="GeneralPageContent">
<p>Use the Status History tab to record data about a claim.</p>
<p>In the <a href="claimedit.html">Claim Edit</a> window, click the Status History tab. </p>
<img src="images/claimEditStatus.png" width="915" height="135"/><p>The Status History tab is useful to track a claim status, such as why a claim hasn't been sent, why processing is delayed, etc. </p>
<p class="MarginBottomZero">Before a status can be added, definitions must be created and customized. </p>
<ul class="MarginBottomGap">
<li>Customize claim custom tracking status options in <a href="definitionsclaimcustomtracking.html">Definitions: Claim Custom Tracking</a></li>
<li>Customize Error Codes in <a href="definitionsclaimerrorcode.html">Definitions: Claim Error Code</a>.</li>
<li> Optionally, enable <i>Exclude 'None' as an option on Custom Claim Tracking Status</i> in <a href="preferences.html">Preferences</a> to force a status to be used.</li>
<li>To update status for many claims at once, see <a href="reportoutins.html">Outstanding Insurance Claims Report</a>.</li>
</ul>
<p>This information does not show on printed claims or e-claims.</p>
<h2>Add a Custom Track Status / Error Code</h2>
<ol>
<li>Click <b>Add</b>. <br/><img src="images/claimEditCustomTrackStatusUpdate.png" width="363" height="406" class="ImageInParagraph"/></li>
<li><b>Custom Track Status</b>: Click the dropdown to select a status. No status is selected by default. </li>
<li><b>Error Code</b>: Click the dropdown to select an error code. The long description of the error code displays in the text box below the dropdown. <div class="Note">Note: To require an error code, enable <i>Require error code when adding claim custom tracking status</i> in Preferences.</div>
</li>
<li><b>Note</b>: Optionally add a note that appearsw in the <i>Log Note</i> column. Right-click to insert <a href="quickpastenotessetup.html">Quick Paste Notes</a>. Notes can be added or edited later by double-clicking a Claim Tracking Status row.</li>
<li>Click <b>Update</b> to save. <ul>
<li>If no Custom Track Status was selected a warning appears to specify a Custom Track Status. Click <b>OK</b> to return to the prior window and choose a Custom Track Status. Users cannot proceed without selecting a Custom Track Status.</li>
<img src="images/claimTrackingNoStatus.png" width="247" height="133"/><li>If <i>None</i> was selected as the Custom Track Status, a warning appears regarding the <a href="reportoutins.html">Outstanding Insurance Claims Report</a>. Click <b>OK</b> to proceed with None as the Custom Track Status; the claim can no longer be filter from the report using <i>Last Custom Tracking Status</i>. Click <b>Cancel</b> to return to the prior window and choose a different Custom Track Status. </li>
<img src="images/claimStatusNone.png" width="390" height="146"/></ul>
</li>
</ol>
</div>
</div>
</body>
</html>```
