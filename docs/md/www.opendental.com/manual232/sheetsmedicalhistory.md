Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Medical History Layout

Medical History forms can be customized to meet the needs of the practice.

In [Sheets](sheets.html), double-click on a custom sheet with the type of MedicalHistory.

![](images/sheetMedicalHistory.png)

Alternatively, in Sheets:

* Click **New** and choose *MedicalHistory* as the Sheet Type to create a new medical history form from blank.
* Select an existing Custom *MedicalHistory* sheet and click **Duplicate** to create a copy of an existing medical history form.
* Select the existing Internal *MedicalHistory* sheet and click **Copy** to create a copy of a default medical history sheet that can be edited.

Patients can fill them out Medical History forms on a computer (e.g., in an operatory), via a Kiosk, [eClipboard](../site/eclipboard.html), or online using an internet browser (see [Web Forms Feature](../site/webforms.html)). If Input Fields are setup on the medical history, entered data can be imported into the database.

* ![](images/youtubeLogo.png) See our Webinar: [Medical History Form](https://youtu.be/DQE2FNC9BKw)
* [Patient Forms](patientform.html)
* [Import Patient Forms and Medical Histories](patientformsimport.html)

Before use, review internal sheets carefully and customize for the practice. The Medical History sheet uses special input and checkbox fields for medications, allergies, and problems. The internal sheet is only an example and may contain allergies and problems that do not exist in the Open Dental master lists.

It is important that the master [Medications List](medicationmaster.html), [Allergy List](allergiesmaster.html), and [Problem List](problemmaster.html) do not contain duplicates. Each input field and checkbox on a medical history sheet corresponds to a specific item in the master list. When importing, spelling is compared to find matches. If exact matches are not found, import will not work properly. For example, if the allergy on the medical history is attached to 'Penicillin', but the patient's medication list contains *Pen*, the allergies will not match and the import will not work.

Medication, problem, and allergy input fields and checkboxes require special setup. See below for additional information. For general information on customizing the Medical History sheet, see the following pages:

* [Sheet Def Properties](sheetproperties.html)
* [Sheet Field Types](sheetsaddelements.html)

## Medications

Input fields and checkboxes fields can be used independently or together for medications.

![](images/medhistoryCheckInput.gif)

Patients will enter medication names in Input Fields (inputMed##). Up to twenty inputMed fields are allowed on a sheet. Each inputMed# can be only used once on a single sheet. Also see [Sheet Input Field](sheetsinputfield.html).

* For new medications: Patients can type any new medications into the input field.
* For medication updates: If a patient's medication list contains a medication that matches an inputMed# field value, the field will automatically populate with the current medication. Patients can overwrite the entry if desired.

To add an input field:

1. On the Edit Sheet Def window, click **Input Field**.
   ![](images/sheetInputFieldMedical.gif)
2. Select an inputMed# field that is not currently in use, enter its properties.
3. If utilizing the mobile layout, enter a *Mobile Caption*. This is required.
4. Click **OK**. Each inputMed field can only be used once on a sheet.

Note: [Web Forms Feature](../site/webforms.html) will not populate inputMed fields automatically.

Checkboxes can be used with Input Fields as No indicators. This is useful for Medical History Updates so a patient can indicate if they are no longer taking a medication. Since current medications automatically populate the input field, patients just need to indicate if they are no longer taking the med. See [Sheet Checkbox and Radio Button](sheetscheckbox.html).

Note: Checkboxes with checkMed# fields do not work in [Web Forms](../site/webforms.html) as the inputMed fields will not populate automatically.

Ensure the *Static Text* instructs the patient that the checkboxes indicate *No*.

To add a checkbox:

1. On the Edit Sheet Def window, click **Check Box**.
   ![](images/sheetMedicalHistCheckbox.gif)
2. Click on the checkMed# field that corresponds to an inputMed# field (e.g., *checkMed1* corresponds to *inputMed1*).
3. If utilizing the mobile layout, enter a *Mobile Group Caption*. This is required.
4. Click **OK**.

Importing: When a user imports medications into the database, medications manually typed in by the patient are always treated as new medications, regardless if the checkbox is marked.

## Allergies and Problems

Checkboxes can be used as Yes/No indicators for allergies and problems. If allergies or problems are already entered in a patient's record, the checkbox will automatically be marked on the medical history form when adding a new form to the patient.

![](images/medicalhistoryAllergy.gif)

To add a problem or allergy checkbox:

1. On the Edit Sheet Def window, click **Check Box**.
   ![](images/sheetCheckBoxMedical.png)
2. Select the allergy or problem field name. The Allergies or Problems list will display items entered in the master [Allergy List](allergiesmaster.html) and [Problem List](problemmaster.html). If a user is editing a Checkbox linked to an Allergy or Problem missing from the master lists, a prompt will display to add them. Click **Yes** to create the new Allergy or Problem.
   ![](images/sheetsAllergyAddPrompt.png)
3. Click on the allergy or problem this checkbox applies to. Click the **Add Allergy/Add Problem** button to add new items to the master lists of each. See [Allergy List](allergiesmaster.html) and [Problem List](problemmaster.html) for details on adding each.
4. On the right, select whether the checkbox indicates Yes or No. Users can create all yes boxes, or, typically, will create both a yes and a no box for each Allergy or Problem, and they will be linked together. This will cause them to toggle as a radio button, meaning there can be only a Yes or No answer not both.
5. If utilizing the mobile layout, enter a *Mobile Group Caption*. This is required.
6. Click **OK**.
7. Add a *Static Text* field next to the checkbox to label it.

## Troubleshooting

**I've renamed a Problem or Allergy in my master list, do I need to do anything on my sheets?**

If a problem or allergy is renamed in the master Allergies or Problems lists, ensure all medical history sheets that use the allergy or problem are updated.

1. Open the medical history sheet where the allergy or problem is used.
2. Double-click on the pertinent check boxes.
3. Select the new allergy or problem to update it on on the sheet.
4. Repeat the steps for each medical history sheet the allergy or problem is used.

**My patient marked yes for a problem or allergy that is in the Problems or Allergies list, but there is no option to import.**

The spelling in the Problems or Allergies List does not match the spelling on the sheet. If spelling is inconsistent, then importing will not work properly. Correct the spelling on either the sheet or the master list to allow for importing. The problem or allergy can also be added manually. See [Problems](problempatient.html) and [Allergies](allergiespatient.html).