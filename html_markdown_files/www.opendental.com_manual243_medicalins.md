# File: ./www.opendental.com/manual243/medicalins.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Medical Insurance</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('medicalins','insplan','family','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/medicalins.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/medicalins.html" >v24.2</option><option value="https://www.opendental.com/manual241/medicalins.html" >v24.1</option><option value="https://www.opendental.com/manual233/medicalins.html" >v23.3</option><option value="https://www.opendental.com/manual232/medicalins.html" >v23.2</option><option value="https://www.opendental.com/manual231/medicalins.html" >v23.1</option><option value="https://www.opendental.com/manual224/medicalins.html" >v22.4</option><option value="https://www.opendental.com/manual223/medicalins.html" >v22.3</option><option value="https://www.opendental.com/manual222/medicalins.html" >v22.2</option><option value="https://www.opendental.com/manual221/medicalins.html" >v22.1</option><option value="https://www.opendental.com/manual214/medicalins.html" >v21.4</option><option value="https://www.opendental.com/manual213/medicalins.html" >v21.3</option><option value="https://www.opendental.com/manual212/medicalins.html" >v21.2</option><option value="https://www.opendental.com/manual211/medicalins.html" >v21.1</option><option value="https://www.opendental.com/manual205/medicalins.html" >v20.5</option><option value="https://www.opendental.com/manual204/medicalins.html" >v20.4</option><option value="https://www.opendental.com/manual203/medicalins.html" >v20.3</option><option value="https://www.opendental.com/manual202/medicalins.html" >v20.2</option><option value="https://www.opendental.com/manual201/medicalins.html" >v20.1</option><option value="https://www.opendental.com/manual194/medicalins.html" >v19.4</option><option value="https://www.opendental.com/manual193/medicalins.html" >v19.3</option><option value="https://www.opendental.com/manual192/medicalins.html" >v19.2</option><option value="https://www.opendental.com/manual191/medicalins.html" >v19.1</option><option value="https://www.opendental.com/manual184/medicalins.html" >v18.4</option><option value="https://www.opendental.com/manual183/medicalins.html" >v18.3</option><option value="https://www.opendental.com/manual182/medicalins.html" >v18.2</option><option value="https://www.opendental.com/manual181/medicalins.html" >v18.1</option><option value="https://www.opendental.com/manual174/medicalins.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Medical Insurance</p></div>
<div class="GeneralPageContent">
<p>Open Dental has features for medical insurance, making it useful in oral surgery and hospital settings.</p>
<p><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> See our webinar: <a href="https://youtu.be/sOpUaGjKObs">Medical Insurance</a></p>
<p>To see medical features in Open Dental, enable <i>Medical Insurance</i> in <a href="showfeatures.html">Show Features</a>. </p>
<h2>Insurance Plans</h2>
<p class="MarginBottomZero">Patients can have unlimited insurance plans. To designate an insurance plan as medical, select the following on the <a href="insplan.html">Insurance Plan</a>. </p>
<ul class="MarginBottomGap">
<li>Check the <i>Medical Insurance</i> box in the Plan Info tab. </li>
<img src="images/medInsCheckbox.png" width="439" height="129"/><li>Select the claim form for the plan in the Other Ins Info tab. <ul>
<li><a href="claimform1500.html">HCFA 1500 Claim Form</a>: If printed, must use preprinted forms due to its red background. They do not allow printing the background from a printer.</li>
<li>UB04: Typically used for institutional claims. They are printed on preprinted forms, not sent in e-claims. See <a href="claimmedical.html">Edit Claim - Medical Tab</a>.  <ul>
<li>For the UB04 background, save this file to the OpenDentImages folder: <a href="../resources/UB04.jpg">UB04.jpg</a>. In the <a href="claimformedit.html">Claim Form Edit</a> window, uncheck <i>Print Images</i>.</li>
</ul>
</li>
</ul>
</li>
<img src="images/medInsClaimForm.png" width="457" height="189"/></ul>
<p><div class="Note">Note: Medical Insurance plans do not list on Appointments.</div>
</p>
<h2>Medical Procedure Codes</h2>
<p><a href="crosscode.html">Cross Code</a> medical codes to procedure codes.</p>
<h2>Procedures</h2>
<p class="MarginBottomZero">Medical information can also be entered on the <a href="proceduremedical.html">Procedure - Medical Tab</a>. </p>
<ul class="MarginBottomGap">
<li>Medical Code: This box is filled in automatically when the procedure code is cross coded to a medical code.</li>
<li>ICD Diagnosis Codes: Multiple ICD-10 codes can be used in conjunction with procedure codes. When attached to a procedure, one procedure for each visit needs to have Principal Diagnosis checked.</li>
<li>E-claim Note: Required for medical procedures ending in 99.</li>
</ul>
<h2>Claims</h2>
<p class="MarginBottomZero">Create medical claims in the <a href="account.html">Account Module</a>. Use the New Claim dropdown, then click Medical. </p>
<ul class="MarginBottomGap">
<li>The <i>Claim Type</i> is automatically set to Medical when an insurance is marked as Medical. See <a href="claimtypes.html">Claim Types</a> for details on how insurance setup affects claim type.</li>
<li>If procedure codes are cross coded to medical codes, the medical codes are used.</li>
<li>Change the Med/Dent or Claim Form settings on the <a href="claimedit.html">Claim</a> as needed.  <ul>
<li>Med/Dent is automatically set to <i>Medical</i> when creating a claim for insurance marked <i>Medical Insurance</i>. When <i>Set medical claims to institutional when using medical insurance</i> is enabled in <a href="preferences.html">Preferences</a>, medical insurance claims are automatically set to <i>Institutional </i>by default instead.</li>
<li>The Claim Form is selected automatically based on the claim form selected in Insurance Plan Setup, Other Ins Info tab.</li>
</ul>
</li>
</ul>
<p>When the preference, <i>Prompt for Primary Claims</i>, is enabled users are prompted to send the primary dental insurance claim after <a href="claimreceive.html">Receiving</a> a medical claim.</p>
<h2>E-Claims</h2>
<p class="MarginBottomZero">Use <a href="eclaimsapex.html">Apex</a> or <a href="eclaimsedsmedical.html">Electronic Dental Services - Medical</a> for medical claims. </p>
<ul class="MarginBottomGap">
<li>Medical vs Institutional: There are two formats for medical e-claims, medical (837-P) or institutional (837-I). The default is medical. To change, see Preferences, <i>Set medical claims to institutional when using medical insurance</i>. The type can also be changed on individual claims (Edit Claim window, Med/Dent).</li>
<li><a href="clearinghouses.html">Clearinghouses</a>: Set the default medical/institutional clearinghouse (separate from the dental default). Dental clearinghouses cannot accept medical or institutional claims. If generating claim files from Open Dental and uploading them manually to Medicaid, a default clearinghouse is still needed to specify the Claim Export Path. Medical and institutional claim format is only 5010. Dental claim format can be 4010 or 5010 and can be changed as needed.</li>
<li>Send Claims: Send batches of claims to one clearinghouse at once. See <a href="claimsend.html">Send Claims</a>. <div class="Note">Note: To determine the format, information is required from both the claim.MedType and the clearinghouse.Eformat. Neither alone is sufficient.</div>
<p>Once messages are generated, they are archived in the etrans table in the database for later retrieval. These archived claims may be seen in the history list at the bottom of the Insurance Claims window. All 4 claim types (med5010, inst5010, dent5010, dent4010) show as claim sent in the archival.</p>
</li>
</ul>
</div>
</div>
</body>
</html>```
