Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Edit Claim - Medical Tab

In a [Claim](claimedit.html), click the Medical tab.

![](images/claimEditMedical.png)

Medical tab shows information for medical claims. Only enter information on this tab if sending a medical claim. It is only visible if [Medical Insurance](medicalins.html) is turned on.

**Ordering Provider Override**: Set a general ordering provider override for procedures on this claim. This override is only be assigned to procedures on the claim that do not have an override set on the procedure level ([Procedure - Medical Tab](proceduremedical.html)). By default, there is no override and the treating provider is used. See [E-Claims Complexities](eclaimscomplexities.html), Ordering Provider, for the logic.

* **Internal**: Select a provider from the [Providers](providers.html).
* **Referral**: Select a provider from the [Referral List](referralsetup.html).
* **None**: Clear the override.

**UB04**: The UB04 is typically used for institutional claims (e.g., hospitals or outpatient facilities). The Claim Forms are printed; they are not sent in e-claims. Check with the insurance company to verify the values they accept for each of the values in this section.

Information on codes used on a UB04 claim cannot be published by Open Dental and is owned by the [American Hospital Association](https://www.aha.org/front).

**Printing**: It is helpful to have a background image for setup purposes. The background image should not print because preprinted forms should be used. To see the background, save the file [UB04.jpg](../resources/UB04.jpg) in the [A to Z Folder](atozfolder.html) (i.e., OpenDentImages folder), then add it to the [Claim Form](claimforms.html).