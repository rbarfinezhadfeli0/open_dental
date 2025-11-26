# File: ./www.opendental.com/manual232/feesupdate.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Fees Update</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('feesupdate','feescheduletools','procedurecodes','+lists','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/feesupdate.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/feesupdate.html" >v24.2</option><option value="https://www.opendental.com/manual241/feesupdate.html" >v24.1</option><option value="https://www.opendental.com/manual233/feesupdate.html" >v23.3</option><option value="https://www.opendental.com/manual232/feesupdate.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/feesupdate.html" >v23.1</option><option value="https://www.opendental.com/manual224/feesupdate.html" >v22.4</option><option value="https://www.opendental.com/manual223/feesupdate.html" >v22.3</option><option value="https://www.opendental.com/manual222/feesupdate.html" >v22.2</option><option value="https://www.opendental.com/manual221/feesupdate.html" >v22.1</option><option value="https://www.opendental.com/manual214/feesupdate.html" >v21.4</option><option value="https://www.opendental.com/manual213/feesupdate.html" >v21.3</option><option value="https://www.opendental.com/manual212/feesupdate.html" >v21.2</option><option value="https://www.opendental.com/manual211/feesupdate.html" >v21.1</option><option value="https://www.opendental.com/manual205/feesupdate.html" >v20.5</option><option value="https://www.opendental.com/manual204/feesupdate.html" >v20.4</option><option value="https://www.opendental.com/manual203/feesupdate.html" >v20.3</option><option value="https://www.opendental.com/manual202/feesupdate.html" >v20.2</option><option value="https://www.opendental.com/manual201/feesupdate.html" >v20.1</option><option value="https://www.opendental.com/manual194/feesupdate.html" >v19.4</option><option value="https://www.opendental.com/manual193/feesupdate.html" >v19.3</option><option value="https://www.opendental.com/manual192/feesupdate.html" >v19.2</option><option value="https://www.opendental.com/manual191/feesupdate.html" >v19.1</option><option value="https://www.opendental.com/manual184/feesupdate.html" >v18.4</option><option value="https://www.opendental.com/manual183/feesupdate.html" >v18.3</option><option value="https://www.opendental.com/manual182/feesupdate.html" >v18.2</option><option value="https://www.opendental.com/manual181/feesupdate.html" >v18.1</option><option value="https://www.opendental.com/manual174/feesupdate.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Fees Update</p></div>
<div class="GeneralPageContent">
<p>In <a href="feescheduletools.html">Fee Tools</a>, at the lower right, is the Global Updates area.</p>
<img src="images/feesupdateglobal.png" width="256" height="238"/><p>When a user changes fees in a fee schedule, new procedures reflect the new fees. However, procedures in active or inactive treatment plans are not automatically updated. There are two options for updating fees: update fees for all treatment planned procedures at once or update fees one patient at a time. Instructions for both options are explained below.</p>
<p><div class="Note">Note: <ul>
<li> These tools can only be run using a direct connection to the database (not a <a href="middletier.html">Middle Tier</a>). These options are grayed out and unavailable when not using a direct connection.</li>
<li>Estimates are automatically updated when creating a claim.</li>
<li>Fees in saved treatment plans are not affected when updating fees.</li>
<li>Any blank entries in a fee schedule are treated as $0. Existing fees for these procedures, including manually-entered fees will be updated to $0.</li>
</ul>
</div>
</p>
<h2>Update Fees or Estimates for all Treatment Planned Procedures</h2>
<p>This method updates all procedures at once. Updated fees in all fee schedules will be applied.</p>
<p><b>Clinics</b>: Highlight the clinics from the dropdown to update fees or estimates for. To select multiple clinics, click and drag or press <span class="codeblock">Ctrl</span> while clicking.</p>
<p><b>Update Proc Fees Only</b>: Updates procedure fees, but not insurance estimates. Insurance estimates are updated as soon as a patient's account is opened.</p>
<p> A confirmation is shown when clicking the button. Click <b>OK </b>to proceed. <br/><img src="images/feesupdateglobalMsg.png" width="412" height="159" class="ImageInParagraph"/></p>
<p><b>Update Estimates Only</b>: Updates insurance estimates on treatment planned procedures. Helpful for offices updating fee schedules and running reports prior to selecting patients. If this button is not selected, reports continue to reflect estimates based on old fees until a patient's account is opened.</p>
<p> A confirmation message is shown when clicking the button. Click <b>OK </b>to proceed. </p>
<img src="images/feesUpdateGlobalEstMsg.png" width="404" height="198"/><p>When complete, a message indicates the number of procedure fees or estimates that were changed. Click OK to close the message.</p>
<img src="images/feesUpdateGlobalProgress.png" width="490" height="296"/><h2>Update Fees per Individual Patient</h2>
<p>This method is useful when offices plan to honor old fees for a certain grace period. It updates all treatment planned fees and insurance estimates for the selected patient only.</p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Select the patient to update fees for.</li>
<li>Navigate to the <a href="treatmentplan.html">Treatment Plan Module</a>.</li>
<li>Click <b>Update Fees</b> in the toolbar.</li>
<img src="images/feesupdateTP.png" width="732" height="59"/><li>Click <b>OK</b> on the confirmation message to proceed. Fees are updated for procedures in all <i>Active</i> or <i>Inactive</i> treatment plans only.</li>
<img src="images/feesupdateTPMsg.png" width="403" height="146"/></ol>
</div>
</div>
</body>
</html>```
