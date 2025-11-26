Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

NewCrop eRX / Prescription

Use Ensora eRx (formerly NewCrop eRx) to send electronic prescriptions for patients.

In the [Chart Module](chart.html), click **eRx**.

![](images/newCropeRx.png)

Other Resources:

* ![](images/YouTube_PlayButton_15px.png) See our Webinar: [NewCrop](https://youtu.be/ycg-ysusKyI).
* Click **Help** in any Ensora eRx tab to open the help guide for the current tab.
* Go to the **Admin** tab to find additional Support Documentation for Ensora eRx.
* To electronically prescribe controlled substances the prescriber must go through additional identity proofing and set up two-factor verification. See [Ensora eRx EPCS Setup](newcropepcs.html).

## To Create and Send a Prescription

1. Microsoft Edge opens with the Compose Rx tab selected. If the interface is not visible, check the task bar to ensure Microsoft Edge is the focus.
2. To find a drug:
   * In the **Drug Search** field, enter the drug name and click **Drug Search**.
   ![](images/newCropDrugSearch.png)

   All matching drugs are displayed. If there are more 20 results total, click the dropdown next to a drug name to display all dosing options. If using the comprehensive version and there is an insurance formulary attached to this patient, formulary status appears in the first column. Click a formulary link to see therapeutic alternatives. See [Ensora eRx Drug Formulary Checks](newcropformularychecks.html).

   * Click **Favorites** to choose from a list of saved prescriptions.
   * Click **Drug Sets** to choose from a list of saved groups of prescriptions.
   * Click **Compounds** to choose from a list of saved compound drugs.
3. Click the drug and dosing combination to select it.
If using Ensora eRx Comprehensive, the monograph, leaflet, and patient education links show at the right. Click to access.4. Enter the Sig information. Some information may automatically populate. Edit as needed.
   * This window is not shown when prescribing a Drug Set or Compound.
   * Frequency must always be selected.
   * If the prescription requires a CDT Code, enter it in the *Pharmacist Message* area.
   * If prescribing , this window does not appear.

   Note:
   * If the *Route* or *Frequency* selected is *as directed* an *Additional Sig* must be entered.
   * The *Additional Sig* field is limited to 140 characters.
   * To associate an ICD code to the prescription, assign the code in the [Procedure - Medical Tab](proceduremedical.html) of a completed or treatment planned procedure in Open Dental before clicking eRx. Up to two ICD 10 codes can be added to a prescription.
   * To save this drug to the Doctor's Favorites List, check **Add to Favorites**.
![](images/newCropPending.png)5. Click **Prescribe**.
   * When using Ensora eRx Comprehensive, the system checks for interactions with current medications, allergies, and diagnoses and displays applicable alerts. See [Ensora eRx Drug-Drug, Drug-Allergy Interaction Checks](newcropdruginteraction.html). If necessary, edit medications.
6. By default, Location Pharmacies are listed. Uncheck *Show Location Pharmacies* to see patient's preferred pharmacies. Click **Search** to find a specific pharmacy. Click the pharmacy name to select.
7. Once a pharmacy is selected, click one of the following buttons:
   * **Transmit**: Non-controlled substances are sent automatically to the selected pharmacy.
      If sending a controlled substance proceed to Step 8.
   * **Record**: Adds the prescription to patient's active medications list. This is not sent electronically.
   * **Print**: Print the prescription. This is not sent electronically.
   * **Leave for Staff**: Send the prescription back to the pending status.
8. The prescribing provider must enter their 4-digit pin. If this is the first time the prescriber has transmitted a controlled substance, they are prompted to create a pin instead.
![](images/legacyEnterPin.JPG)9. Enter the one-time passcode. There are three options for receiving the passcode:
   1. Click **Send Push Notification** in the Ensora eRx interface. The prescriber receives a notification in the Authy App on their mobile device. Click *Approve* or *Deny*.
   2. Click the Hardware Token radio button in the EnsoraRx interface. Press the button on the hardware token, and enter the generated code into the **Enter Code** field.
   3. Open the Authy App and enter the displayed code.
10. Click **Sign & Transmit Rx**. The prescription is sent electronically to the selected pharmacy.

The completed prescription is automatically copied to the patient's Medication List and Progress Notes in Open Dental after one of the following:

* The first time the Chart Module is opened after a patient is selected.
* After clicking the eRx button, then closing the eRx window.
* Manually clicking the eRx drop down in the toolbar, then Refresh.

## Compounds Maintenance

In the Ensora eRx window, click **Admin** in the top toolbar.

![](images/newCropAdmin.png)

Click **Compounds Maintenance** in the *List Maintenance* area on the left.

**To add a Compound Medication**:

1. Click **New Compound**.
2. Enter a name for the compound (e.g., Magic Mouthwash) in the **Label** box.
3. Click **Add Ingredient**.
4. Type drug name in the *Active Ingredients* column and enter the quantity.
5. Repeat for each drug in the compound.
6. Enter the sig for the compound.
7. Select the dispense amount dispense form from the dropdown.
8. Select the schedule of the compound using the **Schedule** dropdown.
9. Click **Save** to save to the Compounds List.

![](images/newCropNewCompound.png)

**To edit a Compound Medication**:

1. Click **Edit** next an existing medication in Compounds List Maintenance.
![](images/newCropCompoundMedEdit.png)2. Make any changes to the medication (e.g., add ingredients, default sig, etc.).
3. Click **Save**.

## Drug Sets Maintenance

In the Ensora eRx window, click **Admin** in the top toolbar.

![](images/newCropAdmin.png)

Click **Drug Sets Maintenance** in the *List Maintenance* area on the left.

**To Add a Drug Set**:

1. Click **Add Set**
2. Enter a name for the drug set (e.g., Pre-Surgery)
3. Click **Add**.
![](images/newCropDrugSetAddSet.png)4. Click **Add** under the name of the Drug Set to add a drug.
![](images/newCropDrugSetAddDrug.png)5. Use the search box to look up the first drug.
![](images/newCropDrugSetSearchDrug.png)6. Click the drug name to add it to the drug set.
7. Enter the sig for the drug.
8. Click **Add to Drug Set.**
![](images/newCropDrugSetSig.png)9. Repeat Steps 4-8 for as needed to add any additional drugs to the drug set.

**To edit a Drug Set**:

1. Click the arrow below a drug set to see the existing drugs.
![](images/newCropDrugSetEdit.png)2. Use the **Add** and **Remove** buttons to edit the drugs in the drug set.
   * **Add** See Steps 4-8 in *To Add a Drug Set* above for instructions on adding a new drug.
   * **Remove**: Click to delete an existing drug from the drug set. Click **Yes, delete** when prompted to confirm the deletion.

## Prescriber Report

Run the Prescriber Report in Ensora eRx to get information on the prescriptions created for a provider in a date range.

1. In the Ensora interface, click the Admin tab.
2. In the *Reporting* section, click *Prescriber Report*.
3. Enter the Start/End Dates.
4. Click **Generate Report**.
5. To save the report, choose one of the following:
   * **Export to Excel**: Exports the report to an XLS file.
   * **Print**: Send the report to a printer.

## Additional Information

* To verify if a prescription has gone through or see if it has failed, see [Report a Failed or Missing Prescription in Ensora eRx](newcropmissingrx.html). Offices should periodically check for rejected prescriptions, so no prescriptions slip through the cracks.
* When a medication is marked as discontinued in Ensora eRx, the medication is also marked discontinued (a *Stop Date* entered) in Open Dental when the Chart Module is refreshed.
* EHR users should make sure [RxNorms](rxnorms.html) are attached to medications.
* To set up automation options in Open Dental when prescriptions are created, see [Automation](automation.html), *RxCreate* trigger.