Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Edit Referral Attachment

The Edit Referral Attachment window is used to enter more details or edit an attached referral.

In the [Referrals for Patient](referrals.html) window, double-click an attached referral.

![](images/referralEditAttachment.png)

* **Referral Type**: Defaults to the type selected when the referral was created. Select a new type to change.
* **Name**: First and last name or description of the referral source.
  + **Edit Referral**: Edit the referrals general information (affects all patients with this referral)
  + **Change Referral**: Select another referral source for this patient. When a referral is changed, an entry is made in the [Audit Trail](audittrail.html).
* **Notes about referral source**: Auto-populates with the notes from the referral.
* **Referring Provider**: Click **[...]** to choose the provider referring the patient for treatment. To clear the selection, click **None**.

  Note: The default Referring Provider is chosen in the following order:
  1. The provider attached to the logged-on user.
  2. The provider attached to today's appointment.
  3. The provider attached to the most recent appointment.
  4. The patient's primary provider.
* **Date**: The date the referral source was attached to the patient.
* **Order**: The order the referral source is listed. To change, in the Referrals for Patient window, select the referral then use the Up/Down arrows.
* **Status (if referred out)**: The status of the treatment that has been referred to another provider. Use the dropdown to select a different status.
* **Patient note**: Referral notes specific to this patient. Also shows in the Referrals Attached grid under Notes.
* **Referral Slips**: A list of referral slips generated for this source. Double-click a slip to open. To generate a slip, see [Referral Slip](referralslips.html).**Transition of Care**: Check if this is a referral for [EHR Summaries of Care](ehrsummaryofcaresend.html).
* **Procedure**: Abbreviation of a procedure that has been referred to another provider (see Track Referrals below for how to attach).
* **Date Proc Completed**: Enter the date the referred out procedure was completed.

Click **Save** to keep changes. To remove the referral from the patient click **Detach**.