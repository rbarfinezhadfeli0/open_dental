Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

SNOMED CT Codes

SNOMED CT codes are a standardized clinical health coding terminology.

In the [EHR Setup Window](ehrsetupwindow.html), click **SNOMED CTs**.

![](images/snomeds.gif)

To import SNOMED CT codes, see [Importing Code Systems](codesystemimport.html).

When first opened the list will be empty. Enter the first few characters of the description or code, then click Search to filter results.

## EHR

The following information was relevant to EHR Users. [EHR](../site/ehrlicense.html) is no longer used in Open Dental as we do not support attestation past 2018.

For EHR, every problem in the master list must be assigned a SNOMED CT code. This will ensure that medication reconciliation and clinical decision support interventions work correctly, and that problems show on a patient's clinical documents (e.g. [Continuity of Care Document (CCD)](ehrccd.html)).

If the user has the **Show i CDS** permission ([EHR CDS Permissions](ehrcdspermissions.html)), the [EHR InfoButton](ehrinfobutton.html) will show in the first column. If the code is used in [EHR Clinical Quality Measures](ehrcqm.html), the number of the CQM is listed.

To associate a SNOMED code with a Problem open the [Problem List](problemmaster.html), double-click on an existing problem, or Add a new one, and select the SNOMED CT code from the pick list (...).

**Map to ICD9**: This is a one time tool that can be used to map a SNOMED CT code to an existing problem, if that problem has an ICD-9 code that correlates to exactly one SNOMED CT code. If there is any ambiguity, the code will not be added to the problem. The button only shows if the user is logged in as a user associated to a provider with a valid EHR provider key.

*This material includes SNOMED Clinical Terms (SNOMED CT) which is used by permission of the International Health Terminology Standards Development Organization (IHTSDO). All rights reserved. SNOMED CT was originally created by the College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of IHTSDO.*