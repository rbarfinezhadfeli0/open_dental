# File: ./www.opendental.com/manual232/feescheduletools.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Fee Tools</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('feescheduletools','procedurecodes','+lists','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/feescheduletools.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/feescheduletools.html" >v24.2</option><option value="https://www.opendental.com/manual241/feescheduletools.html" >v24.1</option><option value="https://www.opendental.com/manual233/feescheduletools.html" >v23.3</option><option value="https://www.opendental.com/manual232/feescheduletools.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/feescheduletools.html" >v23.1</option><option value="https://www.opendental.com/manual224/feescheduletools.html" >v22.4</option><option value="https://www.opendental.com/manual223/feescheduletools.html" >v22.3</option><option value="https://www.opendental.com/manual222/feescheduletools.html" >v22.2</option><option value="https://www.opendental.com/manual221/feescheduletools.html" >v22.1</option><option value="https://www.opendental.com/manual214/feescheduletools.html" >v21.4</option><option value="https://www.opendental.com/manual213/feescheduletools.html" >v21.3</option><option value="https://www.opendental.com/manual212/feescheduletools.html" >v21.2</option><option value="https://www.opendental.com/manual211/feescheduletools.html" >v21.1</option><option value="https://www.opendental.com/manual205/feescheduletools.html" >v20.5</option><option value="https://www.opendental.com/manual204/feescheduletools.html" >v20.4</option><option value="https://www.opendental.com/manual203/feescheduletools.html" >v20.3</option><option value="https://www.opendental.com/manual202/feescheduletools.html" >v20.2</option><option value="https://www.opendental.com/manual201/feescheduletools.html" >v20.1</option><option value="https://www.opendental.com/manual194/feescheduletools.html" >v19.4</option><option value="https://www.opendental.com/manual193/feescheduletools.html" >v19.3</option><option value="https://www.opendental.com/manual192/feescheduletools.html" >v19.2</option><option value="https://www.opendental.com/manual191/feescheduletools.html" >v19.1</option><option value="https://www.opendental.com/manual184/feescheduletools.html" >v18.4</option><option value="https://www.opendental.com/manual183/feescheduletools.html" >v18.3</option><option value="https://www.opendental.com/manual182/feescheduletools.html" >v18.2</option><option value="https://www.opendental.com/manual181/feescheduletools.html" >v18.1</option><option value="https://www.opendental.com/manual174/feescheduletools.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Fee Tools</p></div>
<div class="GeneralPageContent">
<p>Use Fee Tools to make copies of Fee Schedules, increase all fees in a Fee Schedule, and more.</p>
<p>In <a href="procedurecodes.html">Procedure Codes</a>, in the lower-right, click <b>Fee Tools</b>.</p>
<img src="images/feeScheduleTools.png" width="656" height="518"/><p><img src="images/YouTube_PlayButton_15px.png" width="15" height="12" style="margin-bottom: 0px"/> See our video: <a href="https://youtu.be/eE8YXP4G3bo">Updating Your UCR (Office) Fees</a>.</p>
<p><b>Show Fee Schedule Groups</b>: When checked, changes <i>Clinic</i> option to <i>Group</i>. Only available when <i>Show Fee Schedule Groups</i> is enabled in <a href="enterprisesetup.html">Enterprise Setup</a>. See <a href="feeschedulegroups.html">Fee Schedule Groups</a> for additional information. </p>
<p><b>Select Fees</b>: Select the criteria for fees to be copied, exported, imported into, increased, or cleared.</p>
<p><b>Copy To</b>: Select where fees will be copied to. See <a href="feeschedulecopy.html">Fees Copy</a> for detailed steps and additonal information.</p>
<p><b>Export</b>: Export fees that meet <i>Select Fees</i> criteria to a txt file. See <a href="feesexport.html">Fees Export</a> for detailed steps.</p>
<p><b>Import</b>: Import fees from a tab delimited file into the <i>Select Fees</i> Fee Schedule. See <a href="feesimport.html">Fees Import</a> for detailed steps.</p>
<p><b>Import Canada</b>: Only displays for users in Canada. See <a href="canadafeeschedules.html">Canada Fee Guides</a>.</p>
<p><b>Clear</b>: Erase all fees from the Fee Schedule, Clinic, Provider combination selected in <i>Select Fees</i>. A confirmation warning is displayed before fees are cleared.</p>
<p><b>Increase by %</b>: Incrementally increase by a percentage all fees that meet <i>Select Fees</i> criteria. See <a href="feescheduleincrease.html">Fees Increase</a> for detailed steps.</p>
<p class="MarginBottomZero"><b>Global Updates</b>: Select a button to update fees or estimates for all treatment planned procedures. </p>
<ul class="MarginBottomGap">
<li><b>Clinics</b>: Use the dropdown menu to select clinic(s) to update fees for. Procedures in treatment plans must have a clinic associated for clinic selection to update the fee.</li>
<li><b>Update Proc Fees Only</b>: Apply fee changes from all Fee Schedules to all treatment planned procedures at once (active and inactive treatment plans only). See <a href="feesupdate.html">Fees Update</a> for additional information.</li>
<ul>
<li>Only the fee will be updated, not insurance estimates.</li>
<li>Fees in saved treatment plans are not affected.</li>
</ul>
<li><b>Update Estimates Only</b>: Recalculates treatment planned estimates, write-offs, Ortho Cases, and Discount Plan amounts.</li>
<ul>
<li>If using clinics, this tool will update estimates for all clinics.</li>
<li>This tool may take a while to run. A progress bar is displayed. The process can be paused or cancelled at any time.</li>
</ul>
</ul>
</div>
</div>
</body>
</html>```
