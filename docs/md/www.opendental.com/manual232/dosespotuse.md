Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

DoseSpot eRx / Prescription

Use DoseSpot to send electronic prescriptions for patients.

In the [Chart Module](chart.html), click **eRx**.

![](images/doseSpotPatientDetails.png)

Providers and proxy (non provider) clinicians can begin using DoseSpot to send e-Prescriptions after [DoseSpot Setup](dosespotsetup.html) is complete.

* ![](images/youtubeLogo.png) See our Webinar: [Using DoseSpot](https://youtu.be/x7TPzYe0TGA)
* DoseSpot can also be used with [ODMobile](opendentalmobile.html) and [ODTouch](odtouchsetup.html).
* Also see the [DoseSpot User Guide](https://opendental.com/resources/DoseSpot%20Prescribing%20App%20User%20Guide%20-%20Standalone%20Guide%20March%202019.pdf). Not all functionality noted in the DoseSpot User Guide is supported by Open Dental.

Overview: There are six main steps to using DoseSpot. See each section below for details.

1. Select a patient.
2. Add allergies.
3. Add current medications.
4. Add a pharmacy.
5. Prescribe new medications.
6. Subscribe to eRx alerts. See [Alert Subscription](alertsubscribe.html).

## Select a Patient

Select a patient in Open Dental, then click **eRx** to launch the DoseSpot interface. To change patients in DoseSpot, close the interface, then select the needed patient in Open Dental and relaunch DoseSpot.

Note:

* If prescribing for a patient under the age of 18, first enter their height and weight in [Vital Signs](vitalsignsenter.html).
* Patient information updated within Open Dental also updates the patient in DoseSpot.
* When proxy (non-provider) users select the eRx button, they need to select the provider they are creating the prescription for from the list. Providers who are scheduled for today, or are the patient's default provider, display. If the provider is not scheduled, they can use the "show all" box to see a full list of providers.
* Proxy users can only create pending prescriptions. A registered provider must complete the sending process.

## Add Allergies

1. In the Patient Details dashboard, Drug Allergies area, click **Add/Edit Drug Allergies**. Allergy information already entered for the selected patient shows here.
2. Check No Known Allergies if the patient has no allergies.
   ![](images/doseSpotAddAllergy.png)
3. Fill in the information.
   * **Allergy**: Begin typing the drug name and a list appears. Select the correct drug from the list.
   * **Status**: Select Active or Inactive. The default is Active.
   * **Reaction Type**: Select Allergy or Adverse Reaction.
   * **Reaction**: Enter the reaction the patient gets from the drug.
   * **Onset**: The date of the first occurrence of the allergy.
4. Click **Save**.

Prescribing a drug the patient is allergic to results in a warning in the Patient Details dashboard.

![](images/doseSpotDrugAllergy.png)

## Add Existing Medications

DoseSpot supports two-way medication syncing. Medications added to DoseSpot automatically list in Open Dental, and medications added in Open Dental automatically list in DoseSpot. Self-reported medications can be edited from both Open Dental and DoseSpot.

By default, all medications added in Open Dental import to DoseSpot as Patient Reported.

1. In the Patient Details dashboard, click **Add Patient Reported**. ![](images/doseSpotAddMed.png)
2. In the Search field, begin typing the medication name and it appears. Select the correct medication from the list. If the medication does not appear, manually enter it and click Add.
3. The medication appears in Medications to Add.
4. Click **Save**.

Patient reported (or self reported) medications appear in [Medications](medicationspatient.html) in Open Dental and in the Patient's Active Medications area as a comment icon in DoseSpot.

![](images/doseSpotPatActiveMed.png)

## Deleting Medications

Medications deleted in DoseSpot are deleted from Open Dental.

Medications deleted in Open Dental are not deleted in DoseSpot. The medication must be manually deleted from DoseSpot.

Self-reported medications must be deleted from both Open Dental and DoseSpot manually.

## Add a Preferred Pharmacy

Add a pharmacy to the patient before sending medications electronically. Preferred pharmacies list under Add/Edit Pharmacies in the Patient Details dashboard.

![](images/doseSpotPatPrefPharm.png)

1. In Patient's Preferred Pharmacies, click **Add/Edit Pharmacies**.
![](images/doseSpotManagePharm.png)2. Use the Search By or Specialty dropdowns to filter the pharmacy list, or enter the pharmacy info in the provided fields. Select EPCS in Specialty for EPCS pharmacies.

   Note: Searching for a pharmacy must be exact. For example "rite aid" would not result in "Rite-Aid". We recommend using city, state, or zip when searching.
3. Click Search.
4. Click the preferred pharmacy from the pharmacy list to add it to the patient.
5. To remove a pharmacy, click Add/Edit Pharmacies and select the 'x' next to Pharmacy Name.

## Prescribe and Send New Medications

Prescribing New Medications: These steps can be completed by a proxy user or registered provider.

1. In the Patient Details dashboard, click **Add Prescription**.
2. In the Search field, begin typing the medication name and it appears. Select the correct medication from the list.
3. Click the dosage amount listed under the medication.
4. Fill out the following fields:
   * **Effective Date**: This is a required field for controlled substances, and must be within six months of the day the prescription is written.
   * **Patient Directions**
   * **Dispense Amount**
   * **Number of Refills**: Schedule II medications cannot have a refill. Enter zero (0) in that case. Schedule III, IV and V may have five (5) or fewer refills. Non-controlled substances may have 99 or fewer refills.
   * **Days Supply**: Cannot exceed 365 days. Schedule II medications require this field and cannot exceed 90 days.
   * Check **No substitutions** if needed.
5. If the provider's state requires it, add ICD/ADA code in the Pharmacy Notes. Click Show Pharmacy Notes below Save Prescription.
6. Click the star icon to save this medication to favorites. Click Save Prescription to mark the prescription as Pending.

A registered provider must complete the remaining steps to send a prescription.

Sending New Medications

1. Scroll down to Pending Medications.
2. Check the box next to the medication to select it.
3. Enter the provider's PIN.
4. Click Approve & Send.

Non-controlled substances: Prescriptions are sent immediately and the status is indicated with a gray arrow in the Patient's Active Medications. Once the pharmacy electronically confirms receipt of the prescription, the grey arrow turns into a green checkmark.

Controlled substances: The prescribing provider must Register for EPCS before sending. See [DoseSpot Setup](dosespotsetup.html).

1. Confirm the pharmacy and prescription.
2. Click Ready to Sign.
3. Enter the provider's PIN. If needed, select the link to the state's PDMP website. A username and password is required.
4. Open the Duo Mobile app on the provider's mobile device and enter the two-factor authentication (TFA) code.
5. Click Approve & Send.

The prescription is sent and the status is indicated with a gray arrow in the Patient's Active Medications. Once the pharmacy electronically confirms receipt of the prescription, the grey arrow turns into a green checkmark.

## Favorites

Favorites are prescriptions that you have already set up and use commonly that can quickly be prescribed for a patient. Favorites can be edited on a individual basis, but will default to the information included when the prescription was favorited. Favorites can be created on both a Clinic and User level.

**Creating a Clinic Favorites List**

1. From the Admin Console website, click **Edit** under the Details area for the desired clinic.
2. Select the Clinic Favorites tab.
3. Click **Add New Favorite** and add prescription information. Medication name, name of favorite, strength, patient directions, dispense amount, dispense unit, and days supply are required. Pharmacy notes and Substitution Allowed are optional.
4. Click **Submit.**

**Copying Clinic Favorites**

1. Select the prescriptions by checking the box to the right of each prescription. The **Check All** box only applies to medications on that page. You may need to go to additional pages to select additional medications.
2. Select **Copy to Clinic(s)**.
3. Check the box to the right of each clinic that needs the list. You can use the search box to look them up by name or clinic ID.
4. Select either **Overwrite Clinic Favorites** or **Append Clinic Favorites**. This will add the clinic favorites for the selected clinic.

**Creating a User Favorites List**

1. Launch DoseSpot with the user logged into Open Dental.
2. Select **Add Prescription**.
3. Select the drug, drug type and dosage.
4. Fill out all sig information.
5. Click the star button.
6. Click **Save**.
7. Name the favorite.

Note: User Favorites are specific to the user that created them, and cannot be copied to other users. Use Clinic Favorites for multiple users.

**Prescribing a Favorite**

1. In the Patient Details dashboard, click **Add Prescription**.
2. Select a drug and dosage amount from the favorites list, or begin typing a drug to narrow down the favorites list.
3. Verify the sig is correct and click **Save Prescription**.
4. Send prescription as normal.

## Lexicomp Access

Providers can access the Lexicomp Database for Dentistry via the DoseSpot interface.

* Providers do not have access to the full version of Lexicomp and will not receive credentials to access the Lexicomp website. Instead, use DoseSpot to access the Lexicomp database."
* To access Lexicomp in dosespot, click the name of a drug in the *pending* or *active* status. Once Lexicomp is accessed, providers are able to browse the Lexicomp website

Note: Patient reported medications (including medications added in Open Dental) do not link to Lexicomp through Open Dental.