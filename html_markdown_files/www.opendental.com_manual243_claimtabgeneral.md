# File: ./www.opendental.com/manual243/claimtabgeneral.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Edit Claim - General Tab</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('claimtabgeneral','claimedit','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/claimtabgeneral.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/claimtabgeneral.html" >v24.2</option><option value="https://www.opendental.com/manual241/claimtabgeneral.html" >v24.1</option><option value="https://www.opendental.com/manual233/claimtabgeneral.html" >v23.3</option><option value="https://www.opendental.com/manual232/claimtabgeneral.html" >v23.2</option><option value="https://www.opendental.com/manual231/claimtabgeneral.html" >v23.1</option><option value="https://www.opendental.com/manual224/claimtabgeneral.html" >v22.4</option><option value="https://www.opendental.com/manual223/claimtabgeneral.html" >v22.3</option><option value="https://www.opendental.com/manual222/claimtabgeneral.html" >v22.2</option><option value="https://www.opendental.com/manual221/claimtabgeneral.html" >v22.1</option><option value="https://www.opendental.com/manual214/claimtabgeneral.html" >v21.4</option><option value="https://www.opendental.com/manual213/claimtabgeneral.html" >v21.3</option><option value="https://www.opendental.com/manual212/claimtabgeneral.html" >v21.2</option><option value="https://www.opendental.com/manual211/claimtabgeneral.html" >v21.1</option><option value="https://www.opendental.com/manual205/claimtabgeneral.html" >v20.5</option><option value="https://www.opendental.com/manual204/claimtabgeneral.html" >v20.4</option><option value="https://www.opendental.com/manual203/claimtabgeneral.html" >v20.3</option><option value="https://www.opendental.com/manual202/claimtabgeneral.html" >v20.2</option><option value="https://www.opendental.com/manual201/claimtabgeneral.html" >v20.1</option><option value="https://www.opendental.com/manual194/claimtabgeneral.html" >v19.4</option><option value="https://www.opendental.com/manual193/claimtabgeneral.html" >v19.3</option><option value="https://www.opendental.com/manual192/claimtabgeneral.html" >v19.2</option><option value="https://www.opendental.com/manual191/claimtabgeneral.html" >v19.1</option><option value="https://www.opendental.com/manual184/claimtabgeneral.html" >v18.4</option><option value="https://www.opendental.com/manual183/claimtabgeneral.html" >v18.3</option><option value="https://www.opendental.com/manual182/claimtabgeneral.html" >v18.2</option><option value="https://www.opendental.com/manual181/claimtabgeneral.html" >v18.1</option><option value="https://www.opendental.com/manual174/claimtabgeneral.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Edit Claim - General Tab</p></div>
<div class="GeneralPageContent">
<p>In the Claim - General tab are fields for prosthetics, orthodontic work, claim referrals, and claim note.</p>
<p>In the <a href="claimedit.html">Claim Edit</a> window, click the General tab.</p>
<img src="images/claimEditGeneral.png" width="915" height="247"/><p><b>Crown, Bridge, or Denture</b>: For bridges, dentures, and partials, <a href="missingteeth.html">Missing/Primary Teeth</a> must have been correctly entered in the Chart module. If <b>Replacement</b> is selected, a <b>Prior Date</b> is required. This information only shows on printed claims and is not sent electronically. To send this information electronically, enter on the <a href="procedureedit.html">Procedure Info window</a> (Prosthesis Replacement, Original Date).</p>
<p class="MarginBottomZero"><b>Place of Service</b>: The service location. Defaults to the <i>Place of Service</i> on the last procedure in the claim (as set on the <a href="proceduremisc.html">Procedure - Misc Tab</a>). If <i>Public Health</i> is enabled in <a href="showfeatures.html">Show Features</a>, the default is based on the site's default place of service (<a href="sites.html">Site List</a>). </p>
<ul class="MarginBottomGap">
<li>Sent in dental 5010 e-claims only.</li>
<li>Changing place of service here changes the Place of Service on all procedures on the claim.</li>
<li>Usually set to <i>Office</i>. Exceptions: certain procedures to specific insurance carriers (e.g., Medicaid), sometimes when using clinics, medical claims.</li>
</ul>
<p class="MarginBottomZero"><b>Accident</b>: Used to indicate that dental treatment was needed as the result of an accident. </p>
<ul class="MarginBottomGap">
<li><b>Accident Related</b>: The type of accident. Shows on printed <a href="claimforms.html">Claim Forms</a> in the following fields (depending on the value chosen): IsOccupational, IsNotOccupational, IsAutoAccident, IsNotAutoAccident, IsOtherAccident, IsNotOtherAccident, IsNotAccident, IsAccident, MedAccidentCode.</li>
<li><b>Accident Date</b>: Shows on printed claims and e-claims. On printed claims, shows in the <i>AccidentDate</i> field.</li>
<li><b>Accident State</b>: Shows on printed claims in the <i>AccidentST</i> field and on e-claims for auto accidents.</li>
</ul>
<p class="MarginBottomZero"><b>Ortho</b>: Only used for ortho claims. </p>
<ul class="MarginBottomGap">
<li><b>Is for Ortho</b>: Affects the <i>IsOrtho</i> and<i> IsNotOrtho</i> fields on printed claims. If the checkbox is marked, then Months Remaining is reported on e-claims (in Canada the ortho flag is sent electronically instead). This box is checked automatically if <i> Mark claims as Ortho if they have Ortho procedures</i> is enabled in <a href="preferences.html">Preferences</a> and the claim includes an orthodontic procedure.</li>
<li><b>Date of Placement</b>: Shows on printed claims and dental e-claims. On printed claims, shows in the <i>DateOrthoPlaced</i> field. If <i>Use the first ortho procedure date as Date of Placement</i> is enabled in <a href="preferences.html">Preferences</a>, the date of the first orthodontic procedure on the claim auto-populates the field and cannot be edited.</li>
<li><b>Months Total</b>: Enter total months sent in 5010 e-claims.</li>
<li><b>Months Remaining</b>: Shows on printed claims in the <i>MonthsOrthoRemaining</i> field if the value is greater than zero.</li>
</ul>
<p class="MarginBottomZero"><b>Claim Referral</b>: Only enter a referring provider and referral number if it is required by the insurance carrier. </p>
<ul>
<li><b>Referring Provider</b>: Click <b>Select</b> to attach a referring provider from an existing list, or add a new Referral. Click <b>None</b> to clear the field. Click <b>Edit</b> to enter notes or change information about the selected provider.</li>
<li><b>Referral Number</b>: Provided by the insurance carrier. Do not put NPI numbers here; NPI numbers must be entered on the Edit Referral window. If an NPI number is missing, it causes a claim rejection.</li>
</ul>
<p class="MarginBottomGap"><div class="Note">Note: For a referring provider on a claim, the Not Person checkbox must be unchecked and the Is Doctor checkbox checked. See <a href="referralsetup.html">Referral List</a>. The information is not sent otherwise.</div>
</p>
<p class="MarginBottomZero"><b>Claim Note</b>: A claim-level note that shows on printed claims and e-claims. This text box supports <a href="rightclicktextboxes.html">Right-Click Options</a>. </p>
<ul>
<li> The claim note and attachment ID Number together are limited to 400 characters when using the 5010 e-claim format, or 80 characters using the 4010 e-claim format. </li>
<li>When printed using the ADA 2019 form, approximately only the first 253 characters are visible.</li>
<li>When printed using the ADA 2024 form, approximately only the first 144 characters are visible.</li>
<li>If a procedure in the claim has a default claim note, it is automatically copied to this field when the claim is created. If multiple procedures have default claim notes, each note is added. Enter a procedure's default claim note on the <a href="procedurecodeedit.html">Procedure Code</a>.</li>
</ul>
<p class="MarginBottomGap"><div class="Note">Note: There is also a procedure-level note, which only goes out on e-claims and medical <a href="claimform1500.html">HCFA 1500 Claim Form</a>. There is no place on a printed claim ADA form to put a procedure-level note. Add procedure level note in <a href="procedureedit.html">Procedure Info</a>.</div>
</p>
</div>
</div>
</body>
</html>```
