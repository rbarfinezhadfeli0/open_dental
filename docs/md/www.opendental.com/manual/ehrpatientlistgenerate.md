Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

EHR Generate Patient List

Patient lists for can be generated for a single condition or many. The intended purpose is for quality improvement, reduction of disparities, and research or outreach. This is not a reporting requirement for [EHR Modified Stage 2](../site/ehrmodified2.html).

1. On the [EHR Dashboard](ehrdashboard1.html), click **Generate List** (Patient List row, Click to Take Action column).
   ![](images/ehrPatientList.gif)

   When you first open the window, there will be no data elements. As you select criteria, a line item will show for each.
2. Click a button on the right to add criteria. Some criteria have start/stop date options.

   **Birthdate**: Include patients greater than, less than, or equal to a certain age.

   **Problem**: Include patients with a certain [Problem](problempatient.html), [ICD-10 Codes](icdcodes.html), or [SNOMED CT Codes](snomedct.html).

   **Medication**: Include patients with a certain [Medication](medicationspatient.html).

   **LabResult**: Include patients with lab results for specific [LOINC Codes](loinc.html) that are greater than, less than, or equal to a specific value.

   **Gender**: Include gender information in the list.

   **Comm Pref**: Include patients with a specific communication preference as set on the Reminders window. See [EHR Document Reminders Sent to Patients](ehrreminderssend.html).

   Allergy: Include patients with a certain [Allergy](allergiespatient.html).
3. Click Results to generate the list based on the criteria defined. To sort the list by a specific criteria, click on a column header.
   ![](images/ehrPatientListResults.gif)
4. To print the list, click Print.

List criteria will not be saved when you close the Patient List window. Each time you generate a list, you must define the criteria you want.

For EHR supporting documentation we recommend saving screenshots of the criteria and generated list.