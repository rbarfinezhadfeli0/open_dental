Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Web Form Setup

Set up web forms to be filled online by patients.

In [Web Forms Retrieve](webformsretrieve.html), click **Setup** in the upper left.

![](images/webFormSetup.png)

Alternatively, in the Main Menu, click Setup, Web Forms.

## Available Web Forms

The Available Web Forms grid displays all forms currently uploaded to the Open Dental web server. These forms are available to use online.

Only sheets with a type of *PatientForm* or *MedicalHistory* are listed. If there are no custom patient forms or medical histories, the internal versions show.

![](images/webFormSetupAvailable.png)

**Add**: Click to add a new form to the available list. Pick Sheet opens. Highlight a form, then click OK to upload it.
![](images/webFormPickSheet.png)

* **Search**: Type a sheet name to filter the list. Results update automatically.
* Sheets with a type of *PatientForm* or *MedicalHistory* are listed. Sheets listed in this window depend on the following:
  + If a sheet type (i.e., *PatientForm* or *MedicalHistory*) has a custom sheet, only the custom sheets are listed. If no custom sheets exist for the sheet type, the Internal sheets for that type are listed.
  + To show the internal sheets, if custom sheets have been created, create a copy of the Internal sheet in [Sheet Defs](sheets.html).
* Double-click a sheet or highlight and click **OK** to add it to Available Web Forms.

**Update**: When changes have been made to a sheet, the form must be updated to take affect. Highlight the form in the Available grid, then click to update it. Alternatively, web forms in use can be updated immediately after updating the sheet by clicking Yes to the prompt.

**Delete**: Highlight a form, then click to delete it from the Available grid. The form will no longer be available for online use.

## Preferences

These settings affect every web form uploaded to the web server.

![](images/webFormSetupPrefs.png)

* **Host Server Address**: The address where web forms are hosted. Do not edit this address.
* **Date Format**: Select the preferred date format for patients filling web forms.
  + Selected *Date Format* should match the format set in Windows Region settings.
  + If there is a mismatch of the date format, birthdates are considered invalid when [Retrieving Web Forms](webformsretrieve.html) and when [Importing Forms](patientformsimport.html), the correct format must be manually selected to import the birthdate.
* **Border Color:** The background color of the Web Form window. Click Change to select a different color.
* **Disable Web Form Signatures:** Select whether to allow signatures on web forms.
  + Checked: Do not allow signatures on any web form. The text "Signature will be recorded later" replaces the signature box. When the patient arrives to the office for their appointment, office staff can retrieve the signature via kiosk, eClipboard, or by printing.
  + Unchecked: Allow signatures on all web forms.
* **Enable automatic download of web forms**: Determines whether web forms automatically download when a patient match is found. The [Open Dental Service](opendentalservice.html) must be installed and running to utilize this preference.
  + Checked: Enable automatic download of web forms. All web forms are retrieved automatically, even those with no match. Users are shown web forms for patients that do not have a match (e.g., new patients) the next time *Retrieve New Forms* is used. When enabled, the OpenDentalService checks for retrieval every two minutes.
  + Unchecked: Do not enable automatic download of web forms. Users must manually retrieve all web forms.

Click **Save** to keep any changes to preferences in Web Form Setup.

## Construct URL

Build a URL for patients to access web form(s). Parameters in the URL also determine options available on the web form. Patients can use the web form URL to access the form via the office website, email, etc.

Upon exiting Web Form Setup, these settings, including the URLs, are cleared. New URLs only need to be constructed if settings (e.g., forms, order, etc.) are changed.

To construct a URL, start by highlighting one or more forms in the *Available Web Forms* list. Each selected form generates a unique URL.

![](images/webFormSetupConstruct.png)

**Redirect URL**: When patients complete their forms, they can be automatically redirected back to the office website. Enter the full URL (e.g., https://opendental.com) where patients should be redirected to. The URLs area will update to include the redirect code.

![](images/webFormsConstructRedirect.png)

**Next Forms**: Link multiple web forms together in a single URL. Patients see a list of all linked forms on and can click on each one to continue to the next form.

1. In the *Available Web Forms* list, highlight the first web form patients will view.
2. Click **[...]** next to Next Forms.
3. Select Next Forms opens.
![](images/webFormsNextForms.png)

* Forms listed under Available Web Forms can be added to a URL.
* Forms listed under Web Forms Selected will be added to the URL.
* Highlight a form, then use the Left and Right arrows to move it to the appropriate list.
* Highlight a form, then use the Up and Down arrows to reorder forms that display for a patient.
* Do not include the form highlighted in Step 1. The form selected in Step 1 will always be the first form for the patient.

4. Click **OK**. The URLs area will update to include code for the new 'linked' forms (&NFID=12345).

![](images/webFormsConstructNext.png)

**Clinic**: Click the Clinic dropdown to associate a clinic, or click **[...]** to select from the Clinic List. When a new patient fills out a form and no patient record exists yet, the clinic associated to the web form(s) will be assigned to the patient. This clinic will not override clinic selection on any existing patient records.

![](images/webFormsConstructClinic.png)

**Inherit (Auto Fill) Last Name, First Name, and Birthdate from Previous Form**: When including *Next Forms*, a patient's last name, first name, and birthdate they've entered from the previous form is auto-filled into subsequent forms.

* To turn off this option for web forms in this URL, uncheck this box.
* &AFNAB=N is added to the URL.

**Disable Typed Signature**: Allow or block patient from typing a signature.

* Checked: Patients cannot type a signature into a Web Form Signature box. &DTS=Y is added to the URL.
* Unchecked: This is the default. Patients can type a signature into a Web Form signature box.

![](images/webformsConstructSign.png)

**URLs**: As the URL is built, the box updates to include the URL code. This is the URL sent to patients via email, or can be used as a link on the office website.

* **Navigate to URL(s)**: Click to open the URL(s) in a browser.
* **Copy to Clipboard**: Copy the URL to the computer's clipboard.

## Details

Every uploaded web form sheet must contain [Input Fields](inputfieldnames.html) for LastName, FirstName, and Birthdate so that the completed, retrieved form can be matched to the correct patient. The Birthdate field should only be used once per sheet. If additional date fields are needed (e.g., insurance effective date), use the Misc input field instead. Forms can be uploaded or deleted from the server at any time without damaging patient records.

Other sheet types, such as *PatientLetter* or *Consent*, are not available for use as web forms. Web forms are designed to have information input (i.e., patient is updating information). Patient Letters are designed to have information output (i.e., patient is receiving information). Consents are designed to have information input by the office (e.g., tooth number or procedure).

Only [dateToday] and [dateTodayLong] [Static Text Fields](statictextfields.html) are populated on web forms. As other Static Text Fields are unique to the patient, they are left blank.