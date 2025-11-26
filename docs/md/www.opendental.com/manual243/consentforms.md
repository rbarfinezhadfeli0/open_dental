Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Consent Form

Quickly create Consent forms from the Chart Module to print or have patients sign digitally.

In the [Chart Module](chart.html) toolbar, click **Consent**.

![](images/consent.png)

Alternatively, in the [Treatment Plan Module](treatmentplan.html) click **Consent**.

If only one Consent form exists, it is generated. If more than one Consent form exists, click the dropdown, then select the form to generate instead.

* To customize layout or content, see [Consent Form Layout](sheetsconsent.html).
* View patient Consent forms in the Chart Module, Progress Notes, and [Account Module](account.html).
* Consent forms can be sent to the [eClipboard](../site/eclipboard.html) or generated in [ODTouch](../site/odtouch.html) when [Mobile Layout](sheetsetupmobile.html) is enabled.
* Consent forms can be used with [Automation](automation.html).

## Generating and Filling Out Consent Forms

If the Consent form includes the *ProcsWithFee* or *ProcsNoFee*  [Sheet Grid](sheetsgrid.html):

* When generating the form from the Chart Module, procedures can be selected from the Sheet Procedure Select window after clicking **Consent**.
* When generating the form from the Treatment Plan Module, highlight procedures before clicking **Consent** to include them on the form.

To include information for all treatment planned procedures in the Active Treatment Plan, the sheet must include the *treatmentplanProcs* or *treatmentplanProcsPriority* static text fields.

The form is opened in the [Fill Sheet](sheetsfillout.html) window. Enter information as necessary. Pale yellow areas (e.g., Tooth numbers) indicate input areas.

## Signing Consent Forms

[Electronic Signatures](electronicsignatures.html) are supported for Consent forms.

There are multiple ways a patient can sign a Consent form:

* Print the Consent for the patient to sign, then scan the Consent form into the Imaging Module.
* Have the patient sign electronically in the office via [eClipboard](eclipboardworkflow.html) or ODTouch.
  + With eClipboard, the Consent form can be signed when seated in the operatory or prior to the appointment when checking in.
* Have the patient sign electronically in the office via the kiosk. See Workflow in [Kiosk Manager](kiosk.html).