Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

EHR Export Vaccine Data

If you administer and record vaccines, data can exported in HL7 format. See [EHR Vaccine Data](ehrvaccine.html).

Open Dental does not currently support automatic submission of vaccine date to immunization registries. Rather, you must manually export data, then submit to the registry using the required transport method. Since most dentists don't administer vaccines, attesting to an exclusion is a good option. However, we recommend checking with your state for final recommendations.

## Before exporting

The immunization registry may require sign up and additional steps before data can be accepted. Contact your state to determine requirements, sign legal agreements, or begin the on-boarding process.

## Export data

1. On the [EHR Dashboard](ehrdashboard1.html), click Vaccines.
   ![](images/ehrVaccine.gif)

   Listed are all vaccines administered to the patient.
2. Indicate whether the patient does or does not want the vaccine data exported for use by other dental or medical offices. This is a per patient setting.
   * ??: unknown.
   * Yes: Patient has sanctioned vaccine information sharing.
   * No: Patient wants to keep the vaccine data within the dental office only. This setting never blocks the vaccine data export.
3. Select the vaccine data to export, then click **Export HL7**. You can select multiple vaccines to export at once.
4. Select the location in which to save the exported txt file, then click Save.

Note: The **Submit HL7** button currently cannot be used because email is not secure.