Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Carriers

Carriers are automatically added to the main list when entered on an insurance plan, but carriers can also be added manually without being attached to a plan.

In the [Main Menu](mainmenu.html), click Lists, Insurance Carriers.

![](images/carrier.png)

The number of plans a carrier is attached to is indicated in the Plans column. To narrow or sort the list of carriers, enter filter criteria:

* **Carrier:** Filter by carrier name.
* **ElectID**: Filter by Electronic ID.
* **Phone**: Filter by carrier name.
* **Show Hidden**: Check to include carriers that have been marked as *Hidden*.
* **CDAnet Only**: Check to only show CDAnet carriers in the list. (Canadian Dental Association)

If multiple entries for the same carrier exist, combine them. See [Combine Carriers](carrierscombine.html).

## Add a Carrier

Double-click to edit an existing carrier, or click **Add** to create a new one.

![](images/carrierEdit.png)

The *Carrier Edit* [Permission](permissions.html) is required to edit or update an existing carrier. The *Carrier Edit* and *Carrier Create* permissions are required to create a new carrier.

**Carrier ID**: A system generated unique identifier that is useful for third-party reporting.

**Name, Phone, Address, Address2**: Carrier name, phone, and mailing address.

**Electronic ID**: The electronic ID used when submitting e-claims. Insurance companies will provide the correct number.

**Send Electronically**: Determines the carrier's default setting for Send Electronically on the [Insurance Plan](insplan.html).

* Send Claims Electronically: Allow sending [E-Claims](clearinghouses.html) to this carrier.
* Don't Send Claims Electronically: Do not allow sending e-claims to this carrier (e.g., claims must be printed and mailed).
* Don't Send Secondary Claims Electronically: Do not allow sending secondary e-claims to this carrier (e.g., when carrier requires that secondary claims are mailed with a copy of the primary EOB).

**Send Paid By Other Insurance At**: Determines how primary paid amounts are sent to secondary insurance claims.

* Default: Uses the default as set in [Preferences](preferences.html).
* Claim Level: Send claim level paid amounts (e.g., amount of the claim paid overall).
* Procedure Level : Send procedure level paid amounts (e.g., amount of claim paid procedure by procedure).
* Both: Send both claim and procedure level paid amounts.

**ERA Automation**: Determines how ERAs for this carrier are processed.

* Use Global Preference: Uses the global preference as set in Preferences.
* Review All: All ERAs must be processed manually for this carrier.
* Semi-automatic: ERAs for this carrier can be processed with a single click of the Auto Process button on the ERA window. This will receive the claims associated with the ERA, and finalize the payment. They can also be processed manually, if needed.
* Fully-automatic: ERAs for this carrier will be automatically processed when imported, receiving the claims associated with the ERA and finalizing the payment. If an ERA does not get automatically processed while being imported for any reason, the user can still attempt to process them by clicking the Auto Process button on the ERA window, or process them manually.

**Consolidate Ortho Ins Payments**: Option to set plan level preference for Consolidate Ortho Ins Payments, or use Global Preference. See [Ortho Setup](orthosetup.html).

**Carrier Group**: Only visible if carrier group names exist in [Definitions: Carrier Group Names](definitionscarriergroupnames.html). Select a carrier group to associate to the carrier. Useful for queries.

**Hidden**: Hide this carrier so it is no longer available as a selection.

**Is trusted for real-time eligibility**: Check to enable to automated import of [Electronic Eligibility and Benefits](ebenefits.html) when using [Scheduled Processes](scheduledprocesses.html) for this carrier.

**Appt Text Back Color (black=none)**: Background color for the carrier's name in the appointment box when *Insurance Color* is added to the appointment view. See [Appointment View Edit](appointmentvieweditwindow.html). Click **None** to clear current color selection.

Note: Selecting the color black is equivalent to having no color selected.

**Import Benefit Coinsurance:** When importing benefits using Electronic Eligibility, select how Open Dental imports received carrier benefit information. This affects insurance estimates.

* Carrier sends patient % (default): The carrier will send the percentage covered by the patient. Open Dental will import this as the percentage covered by insurance. For example, if patient pays 20%, Open Dental will import this as Insurance Pays 80%.
* Carrier sends insurance %: The carrier will send the percentage covered by insurance. Open Dental imports these benefits as they are.

**Ins Plan Subscribers**: Indicates how many insurance plan subscribers use this carrier. Click the dropdown to see all current and previous subscribers.

**Delete:** Only carriers not attached to any insurance plans or subscribers can be deleted. Usually this is a carrier that was added, but never used. For duplicate carriers attached to subscibers, use [Combine Carriers](carrierscombine.html) from the Carriers list instead.