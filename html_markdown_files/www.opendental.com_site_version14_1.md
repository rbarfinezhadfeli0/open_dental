# File: ./www.opendental.com/site/version14_1.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
		<title>Open Dental: Version 14.1</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="resources/site.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/site.js" defer></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
</head>
<body>
	<div id="TitleAndNav">
		<div id="TitleAndSocial">
			<div id="Title">
				<a href="../index.html">
					<img src="resources/logo.png" alt="Open Dental Software">
				</a>
			</div>
			<div id="Phone">
				<a href="tel:1-503-363-5432" class="phoneLink">503-363-5432</a>
			</div>
		</div>
		<div id="NavWrapper">
			<nav>
				<div id="HamburgerMenu">&#9776;</div>
				<ul>
					<!--See notes in up in the head for explanation of relative path choices.-->
					<li><a href="../index.html">Home</a></li>
					<li><a href="trial.html">Trial Version</a></li>
					<li><a href="order.html">Order</a></li>
					<li><a href="documentation.html">Documentation</a></li>
					<li><a href="http://opendentalsoft.com/forum/">Forum</a></li>
					<li><a href="contact.html">Contact Us</a></li>
					<li><a href="searchSite.html"><img id="MenuIconSearch" src="resources/iconSearch.gif" alt=""/>Search</a> </li>
				</ul>
			</nav>
		</div>
	</div>
    <div id="PagePane"><!--The lighter foreground window that floats over the darker background-->
		<div id="PageTitle">
			<h1>Version 14.1</h1>
		</div>
		<div id="Content">
<p>See <a href="versions.html">Versions</a></p>
<p>Version 14.1 was released on 3/31/2014.</p>
<p><b>EHR:</b> Enhancements for MU and 2014 certification. <br>  - New measure calculations for Stage 2 Meaningful Use. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7ehrmeasures.html">EHR Stage 2 Measure Reports</a><br>  - Three new EHR measure calculations to handle exclusions for vital signs. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7vitalsignsenter.html">Vital Signs</a><br>  - CPOE medication orders include the optional alternate measure for measure calculation. <a href="ehrcpoe.html">CPOE Medication Orders</a><br> - Use the Electronic Prescription interface for Computerized Provider Order Entry (CPOE) of medication orders. <a href="electronicrx.html">Electronic Prescriptions</a><br>  - Create CPOE laboratory and radiology orders. <a href="ehrcpoe.html">EHR CPOE Radiology and Lab Orders</a><br>  - Set up Clinical Decision Support interventions based on specific conditions for specific users. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7ehrcdsintervention.html">CDS Interventions</a><br>  - Send and receive secure e-mail to and from patients using the enhanced Patient Portal. <a href="securewebmail.html">Secure Web Mail</a><br>  - Provide patients with the ability to access, download and transmit their health information online using the enhanced Patient Portal. <a href="patientportal.html">Patient Portal</a><br>  - Send and receive encrypted e-mail from one provider to another using the Direct standard. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7direct.html">Direct Messaging</a>- Vital signs includes optional exclusions. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7vitalsignsenter.html">Vital Signs</a><br>  - Export a detailed summary of care CCDA for all patients. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7ehrsummaryofcaresend.html">Summary of Care</a><br>  - Enhanced medication reconciliation of allergies, medications, and problems. <a href="ehrmedicationreconcile.html">Medication Reconciliation</a><br>  - Record family health history. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7familyhealthenter.html">Family Health History</a><br>  - Enter data for and report on 2014 Clinical Quality Measures (CQMs). <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7ehrcqm.html">Clinical Quality Measures</a><br>  - Enhanced patient lists. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7ehrpatientlistgenerate.html">Patient Lists</a><br>  - Import medical laboratory results using HL7 Lab Results Interface (LRI). <a href="ehrcpoe.html">Lab Results</a><br>  - Record electronic, searchable notes in patient records. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7procedureedit.html">Edit Procedures</a><br>  - Support for medical codes including SNOMED CT, ICD9, ICD10, RxNorms, CPT, CDCREC, CVX, HCPCS, LOINC, SOP, and UCUM. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7codesystemimport.html">Code System Import</a><br>  - Support for InfoButton through MedLine Plus. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7ehrinfobutton.html">InfoButton</a><br>  - Generate electronic syndromic surveillance data (appointment observations) for submission to registries. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7ehrsyndromicdataobs.html">Syndromic Surveillance</a><br>  - Enhanced entry and export of immunization data. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7ehrvaccine.html">Vaccines</a><br>  - NIST time sync. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7ehrnistsync.html">NIST Time Synch</a><br>  - More family relationship options on the Edit Patient Information window. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7familyrelationship.html">Family Relationships</a><br></p>
<p><b>E-mail:</b> Enhanced to include an inbox. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7emailinbox.html">E-mail Inbox</a></p>
<p><b>Timecard:</b> Enhanced to correspond with ADP format requirements. Options for differential and overtime hours added. Time card management includes additional features to automate calculations and simplify error fixing. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7timecardsetup.html">Time Card Setup</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7timecardmanage.html">Time Card Manage</a><br></p>
<p><b>Minor Changes<br></b>Electronic Dental Services (EDS) clearinghouse. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7eclaimseds.html">Electronic Dental Services</a><b><br></b>Wiki lists search and scrollbar behavior is enhanced. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7wikilists.html">Wiki Lists</a><b><br></b> Additional payment frequency options added to payment plan amortization schedules. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7paymentplanpatient.html">Payment Plans</a><br>  When anything is printed or copied within Open Dental, a log entry is added to the audit trail. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7audittrail.html">Audit Trail</a><br>  Changes to popups are now tracked in a popup audit trail and deleted popups are permanently archived. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7popups.html">Popups</a><br>  Schedules enhanced to include graphical chart of providers and employees scheduled on a single day. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7schedule.html">Schedules</a><br>  MedicalInfoViewed permission logs an audit trail entry when the Medical window is viewed. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7permissions.html">Permissions</a><br>  PatProbListEdit permission tracks additions, changes, and deletions to a patient's problems. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7permissions.html">Permissions</a><br>  PatMedicationListEdit permission tracks additions, changes, and deletions to a patient's medications. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7permissions.html">Permissions</a><br>  PatAllergyListEdit permission tracks additions, changes, and deletions to a patient's allergies. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7permissions.html">Permissions</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7allergiespatient.html">Allergies</a><br>  ClaimX/ExtraDent added as an electronic billing option. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7billingdefaults.html">Billing Defaults</a><br>  E-mail override added to dunning messages. [currentMonth] and [nameFLnoPref] added as e-mail variables. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7billing.html">Billing</a><br>  Formatting can be applied to multiple lines at once in the Wiki.<br>  Reduced number of clicks required in the Supply Inventory windows. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7supplyinventory.html">Supply Inventory</a><br>  For Canadian users supernumerary teeth can be entered as 99. <a href="https://www.opendental.com/manual174/modulesetupchart.html">Chart Module Preferences</a><br></p>

</div>	
	</div>
</body>
</html>```
