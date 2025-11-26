# File: ./www.opendental.com/manual232/mobilewebuseerx.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Mobile Web eRx</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('mobilewebuseerx','mobilewebuse','mobilewebhostedbyod','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/mobilewebuseerx.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/mobilewebuseerx.html" >v24.2</option><option value="https://www.opendental.com/manual241/mobilewebuseerx.html" >v24.1</option><option value="https://www.opendental.com/manual233/mobilewebuseerx.html" >v23.3</option><option value="https://www.opendental.com/manual232/mobilewebuseerx.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/mobilewebuseerx.html" >v23.1</option><option value="https://www.opendental.com/manual224/mobilewebuseerx.html" >v22.4</option><option value="https://www.opendental.com/manual223/mobilewebuseerx.html" >v22.3</option><option value="https://www.opendental.com/manual222/mobilewebuseerx.html" >v22.2</option><option value="https://www.opendental.com/manual221/mobilewebuseerx.html" >v22.1</option><option value="https://www.opendental.com/manual214/mobilewebuseerx.html" >v21.4</option><option value="https://www.opendental.com/manual213/mobilewebuseerx.html" >v21.3</option><option value="https://www.opendental.com/manual212/mobilewebuseerx.html" >v21.2</option><option value="https://www.opendental.com/manual211/mobilewebuseerx.html" >v21.1</option><option value="https://www.opendental.com/manual205/mobilewebuseerx.html" >v20.5</option><option value="https://www.opendental.com/manual204/mobilewebuseerx.html" >v20.4</option><option value="https://www.opendental.com/manual203/mobilewebuseerx.html" >v20.3</option><option value="https://www.opendental.com/manual202/mobilewebuseerx.html" >v20.2</option><option value="https://www.opendental.com/manual201/mobilewebuseerx.html" >v20.1</option><option value="https://www.opendental.com/manual194/mobilewebuseerx.html" >v19.4</option><option value="https://www.opendental.com/manual193/mobilewebuseerx.html" >v19.3</option><option value="https://www.opendental.com/manual192/mobilewebuseerx.html" >v19.2</option><option value="https://www.opendental.com/manual191/mobilewebuseerx.html" >v19.1</option><option value="https://www.opendental.com/manual184/mobilewebuseerx.html" >v18.4</option><option value="https://www.opendental.com/manual183/mobilewebuseerx.html" >v18.3</option><option value="https://www.opendental.com/manual182/mobilewebuseerx.html" >v18.2</option><option value="https://www.opendental.com/manual181/mobilewebuseerx.html" >v18.1</option><option value="https://www.opendental.com/manual174/mobilewebuseerx.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Mobile Web eRx</p></div>
<div class="GeneralPageContent">
<p><div class="Note">Note: Mobile Web has been replaced by <a href="opendentalmobile.html">ODMobile</a>, an app that is installed right to your mobile device! New features will not be added to Mobile Web, however it can still be used.</div>
</p>
<p>In <a href="mobilewebuse.html">Mobile Web Home</a>, press eRx.</p>
<img src="images/mobilewebErxPatientSearch.png" width="465" height="423"/><div class="Note">Note: <ul>
<li>Providers and proxy (non provider) clinicians can begin using DoseSpot to send ePrescriptions after <a href="dosespotsetup.html">DoseSpot Setup</a> is complete.</li>
<li>When proxy (non-provider) users select the eRx button, they will need to select the provider they are creating the prescription for from the list. Providers who are scheduled for today will show. If the provider is not scheduled, they can use the "show all" box to see a full list of providers.</li>
<li>Proxy users can only create pending prescriptions. A registered provider must complete the sending process.</li>
</ul>
</div>
<br/><br/><p>For details on using DoseSpot on desktop, see <a href="dosespotuse.html">DoseSpot eRx / Prescription</a>.</p>
<p>Begin by searching for the patient. Press their name in the results list to open the DoseSpot Home Screen.</p>
<img src="images/mobilewebErxDoseSpotHome.png" width="390" height="489"/><p>At any time press Walk Me Through for a guided tutorial of using DoseSpot.</p>
<h2>Add Allergies</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>In the Patient Details dashboard, press <b>Add/Edit Drug Allergies</b>. Allergy information already entered for the selected patient shows here.</li>
<li>Check No Known Allergies if the patient has no allergies. <br/><img src="images/mobilewebErxAllergies.png" width="390" height="604" class="ImageInParagraph"/></li>
<li>Fill in the information. <ul>
<li><b>Name</b>: Begin typing the drug name and a list will appear. Select the correct drug from the list.</li>
<li><b>Status</b>: Select Active or Inactive. The default is Active.</li>
<li><b>Reaction Type</b>: Select Allergy or Adverse Reaction.</li>
<li><b>Reaction</b>: Enter the reaction the patient gets from the drug.</li>
<li><b>Onset</b>: The date of the first occurrence of the allergy.</li>
</ul>
</li>
<li>Press <b>Save</b>.</li>
</ol>
<p>Prescribing a drug the patient is allergic to results in a warning in the Patient Details dashboard.</p>
<img src="images/mobilewebErxAllergyAlert.png" width="390" height="109"/><br/><br/><h2>Add Existing Medications</h2>
<p>DoseSpot supports two-way medication syncing. Medications added to DoseSpot automatically list in Open Dental, and medications added in Open Dental automatically list in DoseSpot. Self-reported medications can be edited from both Open Dental and DoseSpot.</p>
<p class="MarginBottomZero">By default, all medications added in Open Dental import to DoseSpot as Patient Reported.  </p>
<ol class="MarginBottomGap">
<li>In the Patient Details dashboard, press <b>Add Patient Reported</b>.<br/><img src="images/mobilewebErxPatientReported.png" width="390" height="204" class="ImageInParagraph"/></li>
<li>In the Search field, begin typing the medication name and it will appear. Select the correct medication from the list. If the medication does not appear, manually enter it and press Add.</li>
<li>The medication will appear in Medications to Add.</li>
<li>Press <b>Save</b>.</li>
</ol>
<p>Patient reported medications will appear in <a href="medicationspatient.html">Medications</a> in Open Dental and in the Patient's Active Medications area as a comment icon in DoseSpot.</p>
<img src="images/mobilewebErxActiveMedications.png" width="390" height="361"/><h2>Add a Preferred Pharmacy</h2>
<p class="MarginBottomZero">You must add a pharmacy to the patient before medications can be sent electronically. Preferred pharmacies list under Add/Edit Pharmacies in the Patient Details dashboard.<br/><img src="images/mobilewebErxManagePharmacy.png" width="390" height="603" class="ImageInParagraph"/></p>
<ol class="MarginBottomGap">
<li>In Patient's Preferred Pharmacies, press <b>Add/Edit Pharmacies</b>.</li>
<li>Use Specialty dropdown to filter the pharmacy list, and enter the pharmacy info in the provided fields. Check the box for EPCS for EPCS pharmacies.</li>
<li>Press Search.<br/><div class="Note">Note: Try using fewer search criteria if you have trouble finding the correct pharmacy.</div>
</li>
<li>Press the preferred pharmacy from the results list to add it to the patient.</li>
<li>To remove a pharmacy, press Add/Edit Pharmacies and select the 'x' next to Pharmacy Name.</li>
</ol>
<h2>Prescribe and Send New Medications</h2>
<p class="MarginBottomZero">Prescribing New Medications </p>
<ol class="MarginBottomGap">
<li>In the Patient Details dashboard, Press <b>Add Prescription</b>.<br/><img src="images/mobilewebErxAddRx.png" width="390" height="414" class="ImageInParagraph"/></li>
<li>In the Search field, begin typing the medication name and it will appear. Select the correct medication from the list.</li>
<li>Select the dosage amount listed under the medication.<br/><img src="images/mobilewebErxDosage.png" width="390" height="337" class="ImageInParagraph"/></li>
<li>Fill out the following fields:<br/><img src="images/mobilewebErxPrescriptionSig.png" width="324" height="791" class="ImageInParagraph"/><ul>
<li><b>Effective Date</b>: This is a required field for controlled substances, and must be within six months of the day the prescription is written.</li>
<li><b>Patient Directions</b></li>
<li><b>Dispense Amount</b></li>
<li><b>Number of Refills</b>: Schedule II medications cannot have a refill. Enter zero (0) in that case. Schedule III, IV and V may have five (5) or fewer refills. Non controlled substances may have 99 or fewer refills.</li>
<li><b>Days Supply</b>: Cannot exceed 365 days. Schedule II medications require this field and cannot exceed 90 days.</li>
<li>Check<b> No substitutions</b> if needed.</li>
</ul>
</li>
<li>If your state requires it, add ICD/ADA code in the Pharmacy Notes. Click "+" above Show Pharmacy Notes to expand.</li>
<li>Click the star icon to save this medication to favorites. </li>
<li>Press <b>Save Prescription</b>.</li>
</ol>
<p class="MarginBottomZero"><b>Sending New Medications</b></p>
<ol class="MarginBottomGap">
<li>On the Patient Dashboard, scroll down to Pending Medications.<br/><img src="images/mobilewebErxPending.png" width="390" height="497" class="ImageInParagraph"/></li>
<li>Check the box next to the medication to select it.</li>
<li>Enter the provider's PIN.</li>
<li>Press <b>Approve and Send</b>.</li>
</ol>
<p class="MarginBottomZero"><b>Edit or Delete a Pending Medication</b>: Click the blue "+" button below the checkbox on a pending medication to access the Actions menu. <img src="images/mobilewebErxPendingActions.png" width="390" height="388"/></p>
<ul class="MarginBottomGap">
<li><b>Edit</b>: Modify Pending prescription.</li>
<li><b>Delete</b>: Remove pending medication from the list.</li>
<li><b>Change Pharmacy</b>: Modify pharmacy for pending medication.</li>
<li><b>Start Prior Auth</b>: Begin a prior authorization for insurance.</li>
</ul>
<p><b>Non controlled substances</b>: Prescriptions are sent immediately and the status is indicated with a gray arrow in the Patient's Active Medications. After refreshing the page, the gray arrow will turn into a green check mark.</p>
<p class="MarginBottomZero"><b>Controlled substances</b>: The prescribing provider must Register for EPCS before sending. See <a href="dosespotsetup.html">DoseSpot Setup</a>. </p>
<ol class="MarginBottomGap">
<li>Confirm the pharmacy and prescription.</li>
<li>Click Ready to Sign.</li>
<li>Enter the provider's PIN. If needed, select the link to your states PDMP website. You will need to provide your username and password.</li>
<li>Open the Duo Mobile app on the provider's mobile device and enter the two-factor authentication (TFA) code.</li>
<li>Click Approve &amp; Send.</li>
</ol>
<h2>Favorites</h2>
<p>Favorites are prescriptions that you have already set up and use commonly that can quickly be prescribed for a patient. Favorites can be edited on a individual basis, but will default to the information included when the prescription was favorited. Favorites can be created on both a Clinic and User level. To create Favorites, see <a href="dosespotuse.html">DoseSpot eRx/Prescription</a>.</p>
<p class="MarginBottomZero"><b>Prescribing a Favorite</b></p>
<ol class="MarginBottomGap">
<li>In the Patient Details dashboard, click <b>Add Prescription</b>.</li>
<li>Select a drug and dosage amount from the favorites list, or begin typing a drug to narrow down the favorites list.</li>
<li>Verify the sig is correct and click <b>Save Prescription</b>.</li>
<li>Send prescription as normal.</li>
</ol>
</div>
</div>
</body>
</html>```
