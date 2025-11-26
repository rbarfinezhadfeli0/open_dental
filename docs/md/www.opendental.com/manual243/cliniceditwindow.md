Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Clinic

Set up and edit general contact and billing information for a Clinic

In [Clinics](clinicsetup.html), click **Add**, or double-click an existing clinic to edit.

![](images/clinicEdit.png)

Enter or edit [Clinic](clinics.html) details from this window.

## Basic Details

Enter general details about the Clinic.

![](images/clinicEditDetails.png)

* **Is Medical**: Mark the Clinic as a non-dental Clinic. When this Clinic is selected in the [Main Menu](mainmenu.html), a [Non-Dental](nondentalinterface.html) interface is shown.
* **Clinic ID**: Read-only. A system-generated unique identifier that is useful for third-party reporting.
* **External ID**: A customizable identifier that can be used for mapping purposes.
* **Abbreviation**: A Clinic identifying abbreviation that is shown in dropdowns and pick lists throughout Open Dental. Optionally, enable *Use clinic abbreviation in main title bar* in [Preferences](preferences.html) to display this abbreviation in the Open Dental title bar instead of the Description.
* **Description**: The Clinic name. This is shown on statements, letters, etc.
* **Phone, Fax**: The Clinic phone and fax number.
* **Region**: The Clinic's region. Customize options in [Definitions: Regions](definitionsregions.html).
* **Hide from Insurance Verification List**: Determines if this Clinic's appointments are shown in the [Insurance Verification List](insverifylist.html).
  + Checked: Exclude this Clinic's appointments from the list.
  + Unchecked: Include this Clinic's appointments in the list.
* **Proc code required on Rx from this Clinic:** Determines if this clinic is required to add a procedure code to prescriptions. This option is only available if *Procedure code required on some prescriptions* is checked for the prescription in the [Rx / Prescriptions List](rxsetup.html). Useful for Clinics in states that require a procedure code on prescriptions (e.g., Ohio).
  + Checked: Requires printed prescriptions to include a procedure code.
  + Unchecked: Do not require a printed prescription to include a procedure code.
* **Email Address**: Click **[...]** to assign the Clinic's default [Email Address](emailsetup.html). Click **None** to clear the field. If using eServices that utilize email notifications (e.g., [Automated Messaging](automatedmessaging.html), [Patient Portal](../site/patientportal.html), or [WebSched](../site/websched.html)), an email address must be assigned to the clinic. This email address is used in patient communication for eServices for this Clinic.
* **Email Sender Alias Override**: Enter an email alias for the Clinic (i.e., email address as displayed to patients). If using Microsoft as the email provider, the Email Sender Alias Override is ignored due to Microsoft limitations.
* **Bank Account Number**: The default bank account number to use for this clinic's [Deposit Slip](depositslip.html).
* **Scheduling Note**: Text entered here displays when the user clicks on an Operatory header in the Appointments Module schedule and this Clinic is selected.
![](images/clinicScheduleNote.png)* **Time Zone (additional info for FHIR)**: Enter time zone information for the Clinic if using FHIR.
* **Is Hidden**: Mark the Clinic as hidden. This removes the Clinic as a selection option in various areas of Open Dental.
  + If Clinic has patients assigned to it, a warning appears when attempting to mark as hidden. The warning does not show if the only patients are of status Deleted, Archived, Deceased, or NonPatient
  + If a user only has access to a single clinic, the clinic cannot be hidden until the user restriction is removed.

## Address and Specialty Tabs

Enter the default Clinic address used on statements, sheets, etc., and the Billing Address used on claims. Also, assign Clinic specialties. For more information on which Clinic address, practice setup address, and phone number is used on claims, see [Claim Addresses](claimsaddresses.html).

![](images/clinicEditAddresses.png)

Note: A 9-digit zip code is required for all addresses when sending 5010 e-claims.

* **Physical Treating Address**: Enter the address of the physical location where treatment is performed. This is used as the treating address on claims and the Clinic address on statements.
* **Billing Address**: Enter the Billing Address used on claims if different than the physical treating address. Check *Use on Claims* to use this address as the Billing Address on claims. If checked, the address cannot be a PO Box for e-claims.
* **Pay To Address**: Enter the address where insurance payments go if different than the Physical Treating Address. This can be a PO Box. It is used as the Billing Address on claims. If the Billing Address is also entered, and *Use on Claims* is checked, the Pay To address is sent with the Billing Address on e-claims but overrides the Billing Address on printed claims.
* **Specialty**: Assign one or more Clinic specialties. Customize options in [Definitions: Clinic Specialties](definitionsclinicspecialties.html). Clinic specialties are useful to differentiate [Patient Clones](patientclone.html).
  + To assign a specialty to this Clinic, click **Add**.
  + To remove, select the specialty and click **Remove**.

## Billing Details

Select billing and other additional Clinic details.

![](images/clinicEditBilling.png)

**Default Insurance Billing Provider**: Set the default provider for claims.

* Default Practice Provider: Use *Default Provider* set in [Practice Setup](practice.html).
* Treating Provider: The treating provider. See [Claim](claimedit.html), Treating Provider for logic that determines who the treating dentist is.
* Specific Provider: Choose a specific provider for the Clinic. Click the dropdown or **[...]** to select the provider. Click **None** to clear the field.

Other Billing Details

* **Default Proc Place of Service**: The default place of service assigned to procedures for this Clinic ([Procedure - Misc Tab](proceduremisc.html)). Usually for Public Health. This gives accurate Public Health reports about the exact Clinic and place of service where each procedure is performed (useful for mobile vans or nursing homes). If using mobile vans, [Sites](sites.html) can also be used to track schools or community locations where a service is performed.
* **Default Provider**: Select the default primary provider when a new patient is created for this clinic.
* **Default Billing Type**: Choose whether to Use Global Preference set by *Default Billing Type* in [Practice Setup](practice.html) or set a clinic-level default Billing Type.
* **Auto receive claims with no assignment of benefits**: Choose whether to Use Global Preference set by *Auto receive claims with no assignment of benefits*  in [Preferences](preferences.html) or set a clinic-level override.
* **Always Assign Benefits to the Patient**: Determines the assignment of benefits for claims.
  + Checked: Claims attached to the Clinic always assigns benefits to the patient and never to the provider, regardless of the subscriber's settings on the [Insurance Plan](insplan.html).
  + Unchecked: Claims attached to the Clinic uses the subscriber setting in the insurance plan.