# File: ./www.opendental.com/manual243/patientedit.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Edit Patient Information</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('patientedit','family','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/patientedit.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/patientedit.html" >v24.2</option><option value="https://www.opendental.com/manual241/patientedit.html" >v24.1</option><option value="https://www.opendental.com/manual233/patientedit.html" >v23.3</option><option value="https://www.opendental.com/manual232/patientedit.html" >v23.2</option><option value="https://www.opendental.com/manual231/patientedit.html" >v23.1</option><option value="https://www.opendental.com/manual224/patientedit.html" >v22.4</option><option value="https://www.opendental.com/manual223/patientedit.html" >v22.3</option><option value="https://www.opendental.com/manual222/patientedit.html" >v22.2</option><option value="https://www.opendental.com/manual221/patientedit.html" >v22.1</option><option value="https://www.opendental.com/manual214/patientedit.html" >v21.4</option><option value="https://www.opendental.com/manual213/patientedit.html" >v21.3</option><option value="https://www.opendental.com/manual212/patientedit.html" >v21.2</option><option value="https://www.opendental.com/manual211/patientedit.html" >v21.1</option><option value="https://www.opendental.com/manual205/patientedit.html" >v20.5</option><option value="https://www.opendental.com/manual204/patientedit.html" >v20.4</option><option value="https://www.opendental.com/manual203/patientedit.html" >v20.3</option><option value="https://www.opendental.com/manual202/patientedit.html" >v20.2</option><option value="https://www.opendental.com/manual201/patientedit.html" >v20.1</option><option value="https://www.opendental.com/manual194/patientedit.html" >v19.4</option><option value="https://www.opendental.com/manual193/patientedit.html" >v19.3</option><option value="https://www.opendental.com/manual192/patientedit.html" >v19.2</option><option value="https://www.opendental.com/manual191/patientedit.html" >v19.1</option><option value="https://www.opendental.com/manual184/patientedit.html" >v18.4</option><option value="https://www.opendental.com/manual183/patientedit.html" >v18.3</option><option value="https://www.opendental.com/manual182/patientedit.html" >v18.2</option><option value="https://www.opendental.com/manual181/patientedit.html" >v18.1</option><option value="https://www.opendental.com/manual174/patientedit.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Edit Patient Information</p></div>
<div class="GeneralPageContent">
<p>Add and edit patient demographic and contact information from the Edit Patient Information window.</p>
<p>In the <a href="family.html">Family Module</a>, double-click in the Patient Info area.</p>
<img src="images/patientEdit.png" width="915" height="677"/><p class="MarginBottomZero">Alternatively: </p>
<ul class="MarginBottomGap">
<li>In the <a href="chart.html">Chart Module</a>, double-click in the Patient Info area.</li>
<li>In the <a href="patientselect.html">Select Patient</a> window, click <b>Add Pt</b> to create a new patient account.</li>
<li>In the Family Module, click <b>Add</b> to create new family member.</li>
</ul>
<h2>Patient Name</h2>
<img src="images/patientEditName.png" width="379" height="166"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Appointment scheduling is restricted</b>: If checked, appointments cannot be scheduled for the selected patient. This includes scheduling new appointments, sending existing or planned appointments to the pinboard, moving an appointment to another time slot, scheduling via Web Sched Recall, Web Sched Existing Patient, or scheduling an appointment from the unscheduled list. If unchecked, appointment scheduling is not restricted. <ul>
<li>To create automation that automatically checks/unchecks this box based on billing type, see <a href="automation.html">Automation</a>.</li>
<li>In <a href="displayfields.html">Display Fields</a>, add <i>Pat Restrictions</i> to the Patient Information grid to view scheduling restrictions associated to the selected patient.</li>
<li>Requires the <i>Patient Restriction Edit</i> permission.</li>
</ul>
</li>
<li><b>Patient Number</b>: Assigned automatically by the system and shown for reference. Numbers are assigned sequentially. The patient number is not equivalent to the count of patients in the database. Gaps can occur when a database split is performed or when patients are deleted. To find a patient count, use a query instead.</li>
<li><b>Last Name, First Name</b>: Patient formal last and first name.</li>
<li><b>Preferred Name, Middle Initial</b>: Enter the patient's preferred name (e.g., Sam instead of Samuel). For easy reference, the Preferred Name is shown before the first name in most areas of Open Dental. Enter a middle initial if needed.</li>
<li><b>Title</b>: Insert the patient's applicable title (e.g., Dr.)</li>
<li><b>Salutation</b>: Useful for sheets (e.g., Dear Dr. Smith).</li>
<li><b>Preferred Pronoun</b>: Only displays when <i>Show Preferred Pronouns for Patients</i> is enabled in <a href="preferences.html">Preferences</a>. Select a preferred pronoun to override the pronouns used for sheets. When set to <i>None</i>, the default pronouns for the patient's selected gender are used. </li>
</ul>
<h2>Status, Gender, Position, and Relationships</h2>
<img src="images/patientEditStatus.png" width="467" height="111"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Status</b>: The patient's current status. Use the <a href="patientstatussetter.html">Patient Status Setter</a> tool to edit the status of multiple patients at once. <ul>
<li>Patient: This is the default. Use for patients who are active.</li>
<li>NonPatient: Someone who is not a patient but needs to be entered in Open Dental (e.g., the parent of a child, a guarantor, or an insurance subscriber).</li>
<li>Inactive: Patient who is no longer active. </li>
<li>Archived: Patient who is not coming back. To edit archived patient information, the logged on user must have the <i>Archived Patient Edit</i> permission.</li>
<li>Deceased: A deceased patient.  <ul>
<li>Consider zeroing out the account at the same time if the office does not wish to collect amounts due.</li>
<li>To lock the patient's age as of the deceased date, see <a href="patienteditehr.html">Edit Patient Information: EHR Misc Tab</a>.</li>
<li>If a patient has upcoming appointments scheduled, and they are marked as deceased, there is a prompt to remove future appointments.</li>
</ul>
</li>
<li>Prospective: Someone who has never been in before, but might become a patient. This status can be automated in <a href="operatories.html">Operatories</a>.</li>
<li>Deleted: A hidden status that the users do not see. The patient is no longer shown anywhere in the program and the integrity of the database is maintained.</li>
</ul>
</li>
<p><div class="Note">Note: When changing status to anything other than <i>Patient</i>, <a href="recall.html">Recall</a> is automatically disabled. If the status is changed back to <i>Patient</i>, recall is automatically re-enabled.</div>
</p>
<li><b>Gender</b>: The biological sex of the patient. <i>Unknown</i> is for HIPAA compliance in case a patient does not wish for the office to record or track their gender. To record gender identity or sexual orientation, see <a href="patienteditpublichealth.html">Edit Patient Information: Public Health Tab</a>. <i>Other</i> is converted to <i>Unknown</i> when creating printed claims, sending electronic claims, or sending prescriptions in DoseSpot. </li>
<li><b>Position</b>: Marital status of the patient.</li>
<li><b>Family Relationships</b>: Indicates this patient's family relationship (e.g., guardian, spouse, father, mother) to other patients. See <a href="familyrelationship.html">Family Relationships</a> for additional details and instructions for setting up Family Relationships. </li>
</ul>
<h2>Miscellaneous Information</h2>
<img src="images/patientEditMisc.png" width="354" height="109"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Birthdate/Age</b>: The patient's date of birth. Age is calculated automatically based on the birthdate. <ul>
<li> Birthdates entered from <a href="patientselect.html">Select Patient</a> automatically carry over when adding a new patient.</li>
<li>When the <i> Mask patient date of birth</i> is enabled in <a href="preferences.html">Preferences</a> , the birthdate is hidden by default (e.g., xx/xx/xxxx), and there is a <b>View</b> button. </li>
<li>Users with the <i>Patient Birthdate View </i> permission can click <b>View</b> to show the birthdate.</li>
<li>Two digit years are converted to four digit years by the computer's <a href="https://support.microsoft.com/en-us/office/change-the-date-system-format-or-two-digit-year-interpretation-aaa2159b-4ae8-4651-8bce-d4707bc9fb9f">Windows Settings</a>, which can be changed. </li>
<li>Age is calculated upon clicking out of the Birthdate field when the date is added or changed. </li>
</ul>
</li>
<li><b>Medicaid ID, State</b>: This field is only visible when Medicaid is enabled in <a href="showfeatures.html">Show Features</a>. If entered here, also enter the number in the insurance plan as the Subscriber ID. Enter the two-letter <a href="stateabbreviations.html">State Abbreviations</a> for the Medicaid State. Entering the first letter of the abbreviation prompts a dropdown of choices beginning with that letter.</li>
<li><b>Chart Number</b>: Optional, but not recommended. Useful to enter patient IDs if the database was converted from another program or to enter numbers used for paper charts. Click <b>Auto</b> to assign the next available numeric chart number to the patient. This does not work if using alphanumeric ChartNumbers. ChartNumbers are only displayed in the Family Module.</li>
<li><b>Ask to Arrive Early</b>: If a value (in minutes) is entered, a reminder message, with requested arrival time, appears each time an Appointment is made for this patient. See <a href="timeasktoarrive.html">Time Ask to Arrive</a> for more information. <ul>
<li> If <b>Same for entire family</b> is checked, when this is changed for one family member, it is updated for all family members. When adding a new family member this is always unchecked by default.</li>
</ul>
</li>
<li><b>Employer</b>: Enter the patient's employer. When entered, the employer is automatically inserted into new insurance plans for the patient.</li>
</ul>
<h2>Email and Phone</h2>
<img src="images/patientEditEmail.png" width="482" height="104"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Same for entire family</b>: If checked, when information in this area is changed for one family member, it is updated for all family members. This does not apply to the <i>Text OK</i> status.</li>
<li><b>Wireless</b>: The patient's wireless (i.e., cell) phone number. Phone numbers are automatically formatted when typing.</li>
<li><b>Text OK</b>: Indicate if patient can or want to receive text messages.  <ul>
<li>Yes: Patients can receive text messages.</li>
<li>No: Patient cannot or do not want to receive text messages.</li>
<li>Neither option selected: If the preference, <i>Text Msg OK, assume default is 'No' for patients with no selection</i> is enabled, this is treated as No. If the preference is disabled, this is treated as Yes.</li>
<li>When changing a patient's Text OK setting to <i>Yes</i>, there is a prompt to send a message to the patient. <br/><img src="images/patEditTextOKChange.png" width="388" height="146" class="ImageInParagraph"/><p>Click <b>Yes</b> to generate a message informing the patient they will now receive recurring <a href="appointmenttexts.html">Appointment Texts</a>.</p>
<img src="images/textOptIn.png" width="379" height="366"/><p> The message text can be edited before sending. Click <b>Send</b> to text the patient.</p>
</li>
<li>Optionally, to automatically send an opt-out message, enable the preference, <i>Send opt-out msg when changing 'Text OK' status from 'Yes' to 'No'</i>.</li>
</ul>
</li>
<li><b>Work Phone</b>: The patient's work phone number. Phone numbers are automatically formatted when typing..</li>
<li><b>Email Addresses</b>: Enter the patient's email address. Separate multiple email addresses with a comma (e.g., email1@email.com,email2@email.com). <br/><ul>
<li>Email addresses must be valid (e.g., name@email.com) for emails to send. Invalid email addresses are skipped.</li>
<li>If an email address is cut off, click <b>[...]</b> to see full email addresses. There is a 100 character limit. <br/><img src="images/emailAddressEdit.png" width="442" height="195" class="ImageInParagraph"/></li>
</ul>
</li>
</ul>
<h2>Contact Information</h2>
<img src="images/patientEditContact.png" width="385" height="175"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Prefer Contact Method</b>: Preferred general contact method. The corresponding contact information is shown in bold in the Family Module, Patient Information area.</li>
<li><b>Prefer Confirm Method</b>: Preferred method when confirming appointments. The corresponding contact information is shown in the Contact column of the <a href="confirmationlist.html">Confirmation List</a>.</li>
<li><b>Prefer Recall Method</b>: Preferred method when scheduling recall appointments. The corresponding contact information is shown in the Contact column of the <a href="recalllist.html">Recall List</a>.<br/><div class="Note">Note: There are multiple options for each preferred method:  <ul>
<li>None: No preferred method has been set.</li>
<li>DoNotCall: <i>DoNotCall</i> is shown.</li>
<li>HmPhone: The patient's Home Phone number is displayed.</li>
<li>WkPhone: The patient's Work Phone number is displayed.</li>
<li>Wireless: The patient's Wireless Phone number, preceded by <i>Cell </i>(typically used for calling a wireless number) is displayed.</li>
<li>Email: The patient's email address is displayed.</li>
<li>SeeNotes: <i>SeeNotes</i> is shown.</li>
<li>Mail: <i>Mail</i> is shown.</li>
<li>TextMessage: Lists the patient's wireless phone number, preceded by <i>Text</i> (used for text messaging which is available from the Confirmation List).</li>
</ul>
<br/><p class="MarginBottomZero">The preferred method can affect defaults in other areas including: </p>
<ul class="MarginBottomGap">
<li>When emailing Web Sched Recall reminders (manual and automated).</li>
<li>When emailing recall reminders or printing recall postcards from the Recall List (text messages can only be sent individually, not via the Recall List).</li>
<li>When emailing or texting confirmation reminders or printing confirmation postcards from the Confirmation List.</li>
<li>When sending automated appointment reminders about scheduled appointments. See <a href="../site/ereminders.html">eReminders</a>.</li>
</ul>
</div>
</li>
<li><b>Exclude Automated Msgs:</b> Exclude this patient from receiving text or email automated messages. Automated messages include: eReminders, eConfirmations, Automated Thank-Yous, WebSched Recall, WebSched ASAP, WebSched New Patient, WebSched Notify, Patient Portal Invites, Birthday Emails, and Statements. <ul>
<li>None: Patient receives messages based on the setup rules for each service.</li>
<li>Text: Do not send the patient automated messages via text. </li>
<li>Email: Do not email the patient automated messages. </li>
</ul>
</li>
<li><b>Trophy Folder</b>: Only visible when using the <a href="bridgetrophyenhanced.html">Trophy (Enhanced) Bridge</a>.</li>
<li><b>Language</b>: Select the patient's preferred language. See the <i>Languages used by patients</i> preference to edit available languages. When a language is set, if a language translation exists for <a href="sheets.html">Sheets</a>, <a href="econfirmationsetup.html">eConfirmations</a>, or <a href="ereminderssetup.html">eReminders</a>, the preferred language is used.</li>
<li><b>Clinic</b>: Only available when Clinics are enabled in <a href="showfeatures.html">Show Features</a>. Set the patient's default clinic for patient payments, claim payments, and adjustments. If <i>unassigned</i>, the default is none. To force users to assign a clinic, disable the preference <i>Allow new patients to be added with an unassigned clinic</i>.</li>
<li><b>Referred From</b>: Click <b>[...]</b> to select a referral source. Double-click the field to open the <a href="referrals.html">Referrals</a> for Patient window. New referral sources can be added from the <a href="referralsetup.html">Referral List</a>.</li>
<li><b>Specialty</b>: Select a specialty. Customize options in <a href="definitionsclinicspecialties.html">Definitions: Clinic Specialties</a>. Useful to differentiate <a href="patientclone.html">Patient Clones</a>.</li>
</ul>
<h2>Address and Phone</h2>
<img src="images/patientEditAddress.png" width="482" height="165"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Same for entire family</b>: If checked, when information in this area is changed for one family member, it is updated for all family members. </li>
<li><b>Same for entire super family</b>: Only visible when the patient is the head of a <a href="superfamily.html">Super Family</a> and the <i>Allow syncing patient information to all super family members</i> preference is enabled. When checked, address and phone information for the Super Family head are applied to all super family members (not just guarantors). </li>
<li><b>Home Phone</b>: Enter the patient's home phone.</li>
<li><b>Address / City / State / Zip</b>: Enter the patient's mailing address. </li>
<li><b>Edit Zip</b>: Associate cities and states with zip codes and add them to the master list. See <a href="zipcodes.html">Zip Code List</a>.</li>
<li><b>Map</b>: Only available if <i>Show Google Maps in Patient Edit window</i> option is enabled in Preferences. Open the patient's address in Google Maps. </li>
</ul>
<p class="MarginBottomZero">If the preference <i>Verify Addresses with USPS</i> is enabled, the address is verified when saving.  </p>
<ul>
<li>If a recommended address is found, Address Compare opens. Click Yes to use the recommended address.</li>
<li>If no recommended address is found, a warning is shown indicating <i>Failed to verify address with USPS</i>. </li>
</ul>
<p class="MarginBottomGap"><div class="Note">Note: This preference is only available for United States users.</div>
</p>
<h2>Address and Phone Notes</h2>
<img src="images/patEditAddressNotes.png" width="482" height="89"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Same for entire family</b>: If checked, when information in this area is changed for one family member, it is updated for all family members. We recommend checking notes for other family members before applying to entire family as to not accidentally overwrite another note.</li>
<li><b>Address and Phone Notes</b>: Make notes about when to call a patient, which number the patient prefers, extra phone numbers, extensions, bad phone numbers, bad addresses, alternate addresses, etc. Notes are shown in bold red in the Patient Information area of the Family Module. These notes also show in the Unscheduled List, Recall List, and appointment. <a href="rightclicktextboxes.html">Right-Click</a> the text box for additional options.</li>
</ul>
<h2>Billing and Provider(s)</h2>
<img src="images/patEditBilling.png" width="482" height="147"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Same for entire family</b>: If checked, when information in this area is changed for one family member, it is updated for all family members. </li>
<li><b>Credit Type</b>: A one letter code that the office can use to track credit worthiness of patients based on credit reports, history of payment, or another preferred criteria. These letters are informational only. One method is using A, B, or C. If credit is unknown, 0 can be used. The code displays in appointments when <i>CreditType</i> is added to an <a href="appointmentvieweditwindow.html">Appointment View</a>, and in other places throughout the program. Corresponds with the ABC0 <a href="displayfields.html">Display Field</a>.</li>
<li><b>Included in Super Family Billing</b>: Only visible when the patient is a guarantor of a family included in a Super Family. If checked, this patient is shown as the patient on Super Family statements (statements that include the account activity for all super family members).</li>
<li><b>Billing Type</b>: The patient's billing type. Customize options in <a href="definitionsbillingtypes.html">Definitions: Billing Types</a>. The default Billing Type is set in <a href="practice.html">Practice Setup</a> or <a href="cliniceditwindow.html">Edit Clinic</a> when using Clinics. The <i>Patient Billing Type Edit</i> security permission is required to make changes. <ul>
<li>If the preference <i>Adding new primary insurance plan to patient sets billing type</i> is enabled, when a new primary insurance plan is created for the patient, and a billing type is set for the plan, the patient's billing type is automatically changed to match. (If a user changes an existing plan's billing type, this does not automatically change the patient's billing type).</li>
</ul>
</li>
<li><b>Primary Provider</b>: Select the provider who usually sees the patient. The default is the provider set as the practice or clinic default. For Clinics users, if providers are restricted to clinics, only providers available for the patient's assigned clinic are options. The <i>Patient Primary Provider Edit</i> security permission is required to make changes.</li>
<li><b>Secondary Provider</b>: The patient's secondary provider, often the hygienist. If using clinics and providers are restricted to clinics, only providers available for the patient's assigned clinic are options.</li>
<li><b>Fee Schedule (rarely used)</b>: Only set this when the patient has a fee schedule different than the UCR fees. Typically this selection is <i>none</i> and the fee schedule is determined by a provider's default fee schedule, or the insurance plan fee schedule. See <a href="feeschedulelogic.html">Fee Schedule Logic</a> for detailed information. If the patient needs a discount fee schedule, use <a href="discountplans.html">Discount Plans</a> instead.</li>
</ul>
<h2>Tabs</h2>
<img src="images/patientEditTabs.png" width="345" height="29"/><p class="MarginBottomZero"> The following tabs may be available depending on what options are turned on in Show Features. </p>
<ul class="MarginBottomGap">
<li><a href="patienteditpublichealth.html">Edit Patient Information: Public Health Tab</a> (race, ethnicity, grade level, school, responsible party)</li>
<li><a href="patientedithospitals.html">Edit Patient Information: Hospitals Tab</a> (ward, admit date)</li>
<li><a href="patienteditother.html">Edit Patient Information: Other Tab</a> (SSN, date of first visit, student status)</li>
<li><a href="patienteditemergencycontact.html">Edit Patient Information: Emergency Contact Tab</a></li>
<li><a href="patienteditehr.html">Edit Patient Information: EHR Misc Tab</a> (mother's maiden name, date deceased)</li>
</ul>
<h2>Saving Changes</h2>
<p class="MarginBottomZero">Click <b>Save</b> to exit the window and keep changes.  </p>
<ul class="MarginBottomGap">
<li>If the status of any <b>Same for entire family</b> or <b>Same for entire super family</b> checkboxes was switched from checked to unchecked, information in the pertaining area (e.g., Address and Phone, Billing and Provider(s), etc.) must also be changed for the checkbox status to be updated.</li>
<li>If the status of any <b>Same for entire family</b> or <b>Same for entire super family</b> checkboxes was switched from unchecked to checked, information in the pertaining area (e.g., Address and Phone, Billing and Provider(s), etc.) for all family members or super family members is updated to match the patient.</li>
<li>If a zip code is entered without a city or state, the Add Zip Code window displays.</li>
</ul>
<p><b>Cancel</b>: Close the window without saving any changes</p>
<p>Offices can prompt staff to complete certain fields using <a href="requiredfields.html">Required Fields</a> marked with an asterisk (*). If required fields are incomplete when clicking <b>Save</b> on the Edit Patient Information window, a message notifies them that required fields are missing or incorrect.</p>
<img src="images/requiredFieldPopup.png" width="394" height="146"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>Click <b>Cancel</b> to return to Edit Patient Information and view the incomplete fields, marked by a red exclamation point, then enter the required information. </li>
<li>Click <b>OK</b> to save changes without entering required fields.</li>
</ul>
</div>
</div>
</body>
</html>```
