Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Procedure - Medical Tab

Enter information on this tab when sending medical claims or if insurance requires ICD-10 diagnosis codes attached to a procedure.

In the [Procedure](procedureedit.html) Edit window, click the Medical tab.

![](images/procedureInfoMedical.png)

The Medical tab appears when [Medical Insurance](medicalins.html) is enabled in [Show Features](showfeatures.html).

**Medical Code:** Corresponding medical code for the dental procedure. If a default medical code is set on the [Procedure Code](procedurecodeedit.html), it automatically shows. Required when sending a medical e-claim.

**Mods:** Medical code modifiers.

**Unit Quantity:** Refers to the type. (e.g., 5 (unit quantity) minutes of anesthesia (unit type)). Procedure fee is multiplied by the unit quantity.

**Unit Type**: Type of quantity.

* MultProcs
* MinutesAnesth
* ServiceUnits
* Days

**Revenue Code:** If a Default Revenue Code is set for the procedure code, it is added automatically.

**Drug NDC:** National Drug Code. If a default value for the procedure code is set, it is added automatically.

**Drug Unit/Drug Qty**: Quantity refers to the unit. (e.g., 5 (drug quantity) milligrams (drug unit)).

**Is Emergency**: Check this box when the procedure is a medical procedure. When the *P1IsEmergency*field is added to the [HCFA 1500 Claim Form](claimform1500.html), the procedure is marked as an emergency.

**SNOMED CT Body Site:** Only visible if [EHR](../site/ehrlicense.html) is enabled.

* **[...]**: Select [SNOMED CT Codes](snomedct.html) that references an anatomical site.
* **None**: Clear the box.

**Princ Diag:** Indicates that Diagnosis Code 1 is a Principal Diagnosis. At least one claim procedure must have this box checked.

**Use ICD-10 Diagnosis Codes (uncheck for ICD-9):** Affects this procedure only. Check the box to use ICD-10 codes. Only ICD-10 codes should be used on new claims.

**ICD-9/ICD-10 Diagnosis Code 1 - 4:** Enter diagnosis codes. If set in the [Edit Procedure Code](procedurecodeedit.html) window, ICD-10 codes are pre-filled.

* Manually enter [ICD-10 Codes](icdcodes.html) into the box.
* **[...]**: Select up to four codes from Diagnosis Code pick list.
* **None**: Clear the box.

Note: Only [ICD-10 Codes](icdcodes.html) should be used on new claims. ICD-9 codes are available for historical purposes and should not be sent on new claims. Default settings for diagnosis codes can be set in Preferences.

**Ordering Provider Override:** Ordering provider for procedure on claim. Provider overrides any other providers. By default, there is no override and the treating provider is used. See [E-Claims Complexities](eclaimscomplexities.html), Ordering Provider, for the logic.

* Internal: Select a provider from the [Providers](providers.html).
* Referral: Select a provider from the [Referral List](referralsetup.html).
* None: Clear the override.