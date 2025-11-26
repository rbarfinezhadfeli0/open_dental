# File: ./www.opendental.com/manual243/cliniceditwindow.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Clinic</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('cliniceditwindow','clinicsetup','+lists','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/cliniceditwindow.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/cliniceditwindow.html" >v24.2</option><option value="https://www.opendental.com/manual241/cliniceditwindow.html" >v24.1</option><option value="https://www.opendental.com/manual233/cliniceditwindow.html" >v23.3</option><option value="https://www.opendental.com/manual232/cliniceditwindow.html" >v23.2</option><option value="https://www.opendental.com/manual231/cliniceditwindow.html" >v23.1</option><option value="https://www.opendental.com/manual224/cliniceditwindow.html" >v22.4</option><option value="https://www.opendental.com/manual223/cliniceditwindow.html" >v22.3</option><option value="https://www.opendental.com/manual222/cliniceditwindow.html" >v22.2</option><option value="https://www.opendental.com/manual221/cliniceditwindow.html" >v22.1</option><option value="https://www.opendental.com/manual214/cliniceditwindow.html" >v21.4</option><option value="https://www.opendental.com/manual213/cliniceditwindow.html" >v21.3</option><option value="https://www.opendental.com/manual212/cliniceditwindow.html" >v21.2</option><option value="https://www.opendental.com/manual211/cliniceditwindow.html" >v21.1</option><option value="https://www.opendental.com/manual205/cliniceditwindow.html" >v20.5</option><option value="https://www.opendental.com/manual204/cliniceditwindow.html" >v20.4</option><option value="https://www.opendental.com/manual203/cliniceditwindow.html" >v20.3</option><option value="https://www.opendental.com/manual202/cliniceditwindow.html" >v20.2</option><option value="https://www.opendental.com/manual201/cliniceditwindow.html" >v20.1</option><option value="https://www.opendental.com/manual194/cliniceditwindow.html" >v19.4</option><option value="https://www.opendental.com/manual193/cliniceditwindow.html" >v19.3</option><option value="https://www.opendental.com/manual192/cliniceditwindow.html" >v19.2</option><option value="https://www.opendental.com/manual191/cliniceditwindow.html" >v19.1</option><option value="https://www.opendental.com/manual184/cliniceditwindow.html" >v18.4</option><option value="https://www.opendental.com/manual183/cliniceditwindow.html" >v18.3</option><option value="https://www.opendental.com/manual182/cliniceditwindow.html" >v18.2</option><option value="https://www.opendental.com/manual181/cliniceditwindow.html" >v18.1</option><option value="https://www.opendental.com/manual174/cliniceditwindow.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Clinic</p></div>
<div class="GeneralPageContent">
<p>Set up and edit general contact and billing information for a Clinic</p>
<p>In <a href="clinicsetup.html">Clinics</a>, click <b>Add</b>, or double-click an existing clinic to edit.</p>
<img src="images/clinicEdit.png" width="915" height="384"/><p>Enter or edit <a href="clinics.html">Clinic</a> details from this window.</p>
<h2>Basic Details</h2>
<p>Enter general details about the Clinic.</p>
<img src="images/clinicEditDetails.png" width="564" height="407"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Is Medical</b>: Mark the Clinic as a non-dental Clinic. When this Clinic is selected in the <a href="mainmenu.html">Main Menu</a>, a <a href="nondentalinterface.html">Non-Dental</a> interface is shown.</li>
<li><b>Clinic ID</b>: Read-only. A system-generated unique identifier that is useful for third-party reporting.</li>
<li><b>External ID</b>: A customizable identifier that can be used for mapping purposes.</li>
<li><b>Abbreviation</b>: A Clinic identifying abbreviation that is shown in dropdowns and pick lists throughout Open Dental. Optionally, enable <i>Use clinic abbreviation in main title bar</i> in <a href="preferences.html">Preferences</a> to display this abbreviation in the Open Dental title bar instead of the Description.</li>
<li><b>Description</b>: The Clinic name. This is shown on statements, letters, etc.</li>
<li><b>Phone, Fax</b>: The Clinic phone and fax number.</li>
<li><b>Region</b>: The Clinic's region. Customize options in <a href="definitionsregions.html">Definitions: Regions</a>.</li>
<li><b>Hide from Insurance Verification List</b>: Determines if this Clinic's appointments are shown in the <a href="insverifylist.html">Insurance Verification List</a>. <ul>
<li>Checked: Exclude this Clinic's appointments from the list.</li>
<li>Unchecked: Include this Clinic's appointments in the list.</li>
</ul>
</li>
<li><b>Proc code required on Rx from this Clinic:</b> Determines if this clinic is required to add a procedure code to prescriptions. This option is only available if <i>Procedure code required on some prescriptions</i> is checked for the prescription in the <a href="rxsetup.html">Rx / Prescriptions List</a>. Useful for Clinics in states that require a procedure code on prescriptions (e.g., Ohio). <ul>
<li>Checked: Requires printed prescriptions to include a procedure code.</li>
<li>Unchecked: Do not require a printed prescription to include a procedure code.</li>
</ul>
</li>
<li><b>Email Address</b>: Click <b>[...]</b> to assign the Clinic's default <a href="emailsetup.html">Email Address</a>. Click <b>None</b> to clear the field. If using eServices that utilize email notifications (e.g., <a href="automatedmessaging.html">Automated Messaging</a>, <a href="../site/patientportal.html">Patient Portal</a>, or <a href="../site/websched.html">WebSched</a>), an email address must be assigned to the clinic. This email address is used in patient communication for eServices for this Clinic.</li>
<li><b>Email Sender Alias Override</b>: Enter an email alias for the Clinic (i.e., email address as displayed to patients). If using Microsoft as the email provider, the Email Sender Alias Override is ignored due to Microsoft limitations. </li>
<li><b>Bank Account Number</b>: The default bank account number to use for this clinic's <a href="depositslip.html">Deposit Slip</a>.</li>
<li><b>Scheduling Note</b>: Text entered here displays when the user clicks on an Operatory header in the Appointments Module schedule and this Clinic is selected.</li>
<img src="images/clinicScheduleNote.png" width="465" height="134"/><li><b>Time Zone (additional info for FHIR)</b>: Enter time zone information for the Clinic if using FHIR.</li>
<li><b>Is Hidden</b>: Mark the Clinic as hidden. This removes the Clinic as a selection option in various areas of Open Dental. <ul>
<li>If Clinic has patients assigned to it, a warning appears when attempting to mark as hidden. The warning does not show if the only patients are of status Deleted, Archived, Deceased, or NonPatient</li>
<li>If a user only has access to a single clinic, the clinic cannot be hidden until the user restriction is removed. </li>
</ul>
</li>
</ul>
<h2>Address and Specialty Tabs</h2>
<p>Enter the default Clinic address used on statements, sheets, etc., and the Billing Address used on claims. Also, assign Clinic specialties. For more information on which Clinic address, practice setup address, and phone number is used on claims, see <a href="claimsaddresses.html">Claim Addresses</a>.</p>
<img src="images/clinicEditAddresses.png" width="464" height="145"/><p><div class="Note">Note: A 9-digit zip code is required for all addresses when sending 5010 e-claims.</div>
</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Physical Treating Address</b>: Enter the address of the physical location where treatment is performed. This is used as the treating address on claims and the Clinic address on statements.</li>
<li><b>Billing Address</b>: Enter the Billing Address used on claims if different than the physical treating address. Check <i>Use on Claims</i> to use this address as the Billing Address on claims. If checked, the address cannot be a PO Box for e-claims.</li>
<li><b>Pay To Address</b>: Enter the address where insurance payments go if different than the Physical Treating Address. This can be a PO Box. It is used as the Billing Address on claims. If the Billing Address is also entered, and <i>Use on Claims</i> is checked, the Pay To address is sent with the Billing Address on e-claims but overrides the Billing Address on printed claims.</li>
<li><b>Specialty</b>: Assign one or more Clinic specialties. Customize options in <a href="definitionsclinicspecialties.html">Definitions: Clinic Specialties</a>. Clinic specialties are useful to differentiate <a href="patientclone.html">Patient Clones</a>. <ul>
<li>To assign a specialty to this Clinic, click<b> Add</b>.</li>
<li>To remove, select the specialty and click <b>Remove</b>.</li>
</ul>
</li>
</ul>
<h2>Billing Details</h2>
<p>Select billing and other additional Clinic details.</p>
<img src="images/clinicEditBilling.png" width="544" height="212"/><p class="MarginBottomZero"><b>Default Insurance Billing Provider</b>: Set the default provider for claims. </p>
<ul class="MarginBottomGap">
<li>Default Practice Provider: Use <i>Default Provider</i> set in <a href="practice.html">Practice Setup</a>.</li>
<li>Treating Provider: The treating provider. See <a href="claimedit.html">Claim</a>, Treating Provider for logic that determines who the treating dentist is.</li>
<li>Specific Provider: Choose a specific provider for the Clinic. Click the dropdown or <b>[...]</b> to select the provider. Click <b>None</b> to clear the field.</li>
</ul>
<p class="MarginBottomZero">Other Billing Details </p>
<ul class="MarginBottomGap">
<li><b>Default Proc Place of Service</b>: The default place of service assigned to procedures for this Clinic (<a href="proceduremisc.html">Procedure - Misc Tab</a>). Usually for Public Health. This gives accurate Public Health reports about the exact Clinic and place of service where each procedure is performed (useful for mobile vans or nursing homes). If using mobile vans, <a href="sites.html">Sites</a> can also be used to track schools or community locations where a service is performed.</li>
<li><b>Default Provider</b>: Select the default primary provider when a new patient is created for this clinic.</li>
<li><b>Default Billing Type</b>: Choose whether to Use Global Preference set by <i>Default Billing Type</i> in <a href="practice.html">Practice Setup</a> or set a clinic-level default Billing Type.</li>
<li><b>Auto receive claims with no assignment of benefits</b>: Choose whether to Use Global Preference set by <i>Auto receive claims with no assignment of benefits </i> in <a href="preferences.html">Preferences</a> or set a clinic-level override.</li>
<li><b>Always Assign Benefits to the Patient</b>: Determines the assignment of benefits for claims. <ul>
<li>Checked: Claims attached to the Clinic always assigns benefits to the patient and never to the provider, regardless of the subscriber's settings on the <a href="insplan.html">Insurance Plan</a>.</li>
<li>Unchecked: Claims attached to the Clinic uses the subscriber setting in the insurance plan.</li>
</ul>
</li>
</ul>
</div>
</div>
</body>
</html>```
