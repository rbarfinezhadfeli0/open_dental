Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

EHR Object Identifiers (OIDs)

Object identifiers are global unique identifiers used when sending or exporting [EHR Continuity of Care Document ( CCD )](ehrccd.html), medical lab orders, or [EHR Clinical Quality Measures](ehrcqm.html). It uniquely identifies a patient in the database. OIDs are made up of the Root + Type identifier.

1. In the [Main Menu](mainmenu.html), click Setup, Chart, [EHR](ehrsetupwindow.html), then click **Internal OID Registry**.
   ![](images/ehrOids.gif)
2. To determine your Root OID you have two options:
   * Use a unique OID based on Open Dental's OID and your registration key. Click *Retrieve OIDs* and each value will automatically populate.
   * Obtain and enter your own unique root OID. Visit <https://www.hl7.org/oid/index.cfm> to register and obtain an OID. Enter it on the OID window in the Actual Value column.

   If you have multiple databases that use the same Open Dental registration key, you must manually assign a unique root OID to each database. We recommend retrieving an unique OID for your registration key, then inserting a unique identifier for each database at the end of the root. For example:

   | SAMPLE ROOT OID | Description |
   | --- | --- |
   | 2.16.840.1.113883.19.3.999.1.1 | 1st database |
   | 2.16.840.1.113883.19.3.999.1.2 | 2nd database |
   | 2.16.840.1.113883.19.3.999.1.3 | 3rd database |
   | 2.16.840.1.113883.19.3.999.1.4 | 4th database |
   | 2.16.840.1.113883.19.3.999.1.5 | 5th database |
   | 2.16.840.1.113883.19.3.999.1.6 | 6th database |
3. If you manually entered a root OID, enter the Actual Value for each type. If you Retrieved OIDs and did not change any values, this step is done automatically.

   The values you use are up to you, but we recommend the following:

   **Root**: The database's Root OID

   **LabOrder**: Root OID + an identifier for lab orders (We recommend adding .1 to your root)

   **Patient**: Root OID + an identifier for patient (We recommend adding .2 to your root)

   **Provider**: Root OID + an identifier for provider (We recommend adding .3 to your root)

   **CqmItem**: Root OID + an identifier for CQM (We recommend adding .4 to your root)

   | SAMPLE | Description |
   | --- | --- |
   | 2.16.840.1.113883.19.3.999.1 | 1st database |
   | 2.16.840.1.113883.19.3.999.1.1 | - laborders |
   | 2.16.840.1.113883.19.3.999.1.2 | - patient |
   | 2.16.840.1.113883.19.3.999.1.3 | - provider |
   | 2.16.840.1.113883.19.3.999.1.4 | - cqmitem |
4. Click OK to save.