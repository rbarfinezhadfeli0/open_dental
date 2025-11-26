Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

ICD-10 Codes

Diagnosis codes can be sent with procedure codes (e.g., for [Medical Insurance](medicalins.html)).

* ICD-10 codes are an updated version of ICD-9 codes. The current ICD-10 download is for 2021.
* When updating to ICD-10 codes, first download the ICD-10 code system, then change the default settings to use ICD-10 codes (instead of ICD-9). The code system for procedures already created (treatment planned or completed) will not change.

## Downloading Codes

Downloading ICD diagnosis codes is optional.

* For problems, the codes must be downloaded then chosen from a pick list.
* For procedures, codes can be manually entered or downloaded then chosen from a pick list.

Download or update ICD code systems using the [Code System Importer](codesystemimport.html).

## Default ICD Code System

Set diagnosis coding system defaults in [Preferences](preferences.html):

* Enable *Use ICD-10 Diagnosis Codes* to use the ICD-10 Code System by default, instead of the ICD-9 system .
* Enter a *Default ICD-10 code for new procedures and when set complete* to apply a default diagnosis for all procedures. This code is entered as ICD-10 Diagnosis Code 1 in the [Procedure - Medical Tab](proceduremedical.html).

Set the code system for a specific procedure on the Procedure Info - Medical tab by checking or unchecking *Use ICD-10 Diagnosis Codes (uncheck for ICD-9)*. The field labels for diagnosis codes will change to reflect the setting.

## Assigning Codes

**For Problems**: Attach codes on the [Problem Def Edit](problemmaster.html) window. Click the pick list button **[...]** to select.
![](images/icd10Prob.png)

**For Procedures**: Attach codes on the Procedures - Medical tab. Enter the code(s) manually or click a pick list button **[...]** next to Diagnosis Code 1, 2, 3, 4.
![](images/icd10Procedure.png)

If choosing from a pick list, at first the list will be empty. Enter the first few characters of the description or code, then click **Search**. To see all diagnosis codes, leave the code and description blank, then click **Search**.

![](images/icd10.png)

Double-click the code to select it and close the window. The selected code is automatically entered into the corresponding diagnosis field.