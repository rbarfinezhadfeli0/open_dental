Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

CareCredit Action

See [CareCredit Setup](carecreditsetup.html).

Use the CareCredit Action window to navigate CareCredit options.

In the [Treatment Plan Module](treatmentplan.html), click **CareCredit**.

![](images/careCreditAction.png)

Alternatively, in the [Account Module](account.html), click **CareCredit**.

This window only appears when CareCredit is enabled. When CareCredit is not enabled, the CareCredit website opens.

A patient must be selected as most of these buttons pertain to the selected patient.

Do not select another patient while the CareCredit interface is open. Changes made in CareCredit occur on the currently selected patient, not the patient selected when the interface was opened.

The fields below only appear if Clinics are enabled in [Show Features](showfeatures.html) and are dependent on the *Merchant number by Provider* setting in [CareCredit Setup](carecreditsetup.html) .

* **Clinic**: The clinic associated with CareCredit.
  + If *Merchant number by Provider* is enabled, this can be changed.
  + If *Merchant number by Provider* is disabled, this field is read only and corresponds with the clinic selected in the [Main Menu](mainmenu.html).
* **Provider**: Only appears when *Merchant number by Provider* is enabled. The provider associated with CareCredit.

**Apply**: Opens the CareCredit Apply portal for patients who are not preapproved. The selected patient information is sent, so the information is prefilled. For patients who are preapproved, opens Individual Batch Quickscreen.

**Lookup**: Opens the CareCredit Lookup portal. Find transaction history for patient. The selected patient information is sent, so it is prefilled.

* To find patient information for someone who has applied for and been approved by CareCredit, but does not have a transaction history, use the Lookup option from the Payment Window, CareCredit instead.

Note: If *Mark online payments as processed* is enabled in [Preferences](preferences.html), payments made through Apply or Lookup are allocated automatically using [Allocation Settings](allocationssetup.html) and automatically marked as processed.

**Reports**: Opens the CareCredit Report portal. This is office wide information. No patient information needed or is sent.

**Manage**: Opens the CareCredit Manage portal. Allows offices to set promotions. No patient information is sent.

**Transactions**: Opens the [CareCredit Transactions](carecredittransactions.html) window.