Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Referrals

Use referrals to track income from different sources, create referral slips or letters, and track treatment referred to other providers.

In the [Family Module](family.html), in the Patient Information section, double-click the referrals area.

![](images/referralsPatInfoNone.png)

There are three types of referrals; *Referred From*, *Referred To*, and *Refer Custom*. By default, when a referral type is added to a patient, it is listed in the referral section (green area) of the Family Module, Patient Information area.

![](images/referralPatientInfo.png)

To hide the section, remove *Referrals* from the fields showing in the Patient Information, [Display Fields](displayfields.html).

The Referrals label can also be customized in Display Fields. The label acts as the section title until a referral is added, then is used as the custom referral label. Customize the referral section color in [Definitions: Misc Colors](definitionsmisccolors.html).

![](images/youtubeLogo.png) Also see our Webinar: [Referral Setup](https://youtu.be/zm_i8BkSWR4).

## Add / Edit Referrals

Double-click the referrals section to add or edit a referral source. The Referrals for Patient window will open with the patient's existing referral sources.

![](images/referralsForPatient.png)

Add a referral by clicking one of the referral types, then single-click a referral from the [Referrals](referralsetup.html) list to select a referral source.

Note: If the referral is a patient, some fields can only be edited from the [Edit Patient Information](patientedit.html) window.

* **Referred From**: Select when a patient is referred from a source (e.g. internet, mailing, etc) or when referred from another provider or patient.
* **Refer To**: Select when a patient is referred to another provider. To track procedures, create this type of referral from the [Procedure Info](procedureedit.html) window (see Track Referrals below). When referring to a provider the [EHR Summaries of Care](ehrsummaryofcaresend.html) is automatically sent to the [Patient Portal](../site/patientportal.html) and a [WebMail](securewebmailsend.html) notification is sent to the patient. To turn off automatic summary of care WebMails, see [EHR Settings](ehrsettings.html).
* **Refer Custom**: Select to use the custom referral label. Custom referrals are useful for entering referrals you do not want to report on. Custom referrals are not tracked on referral reports but are an additional option in the Letters dropdown.

Added referrals will list in the **Referrals Attached** grid. To send a [Referral Slip](referralslips.html), select the referral then click **Referral Slip** or to send a [Referral Letter](letterreferral.html), click Letter from the [Main Toolbar](toolbar.html). Double-click an attached referral to open the Edit Referral Attachment window to edit or enter more details.

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

To save changes click **OK**. To remove the referral from the patient click **Detach**.

## Track Referrals

When a patient is referred to another provider for treatment, the treatment can be tracked. First, set the procedure status to Referred Out. Either double-click a procedure and select Referred Out from the Procedure Status dropdown in the [Procedure Info](procedureedit.html) window or in the [Chart Module](chart.html), check the Entry Status Referred, and [Enter Treatment](entertreatment.html).

Next, in the Procedure Info window, click [...] next to the Referral field to select the provider the procedure is being referred to. The Referrals window will open with a list of providers the patient has been referred to.

![](images/referralsForProc.png)

Click **Refer To**, then single-click a provider from the [Referral List](referralsetup.html) and click OK to select the referred provider. Click **Referral Slip** to generate the referrals default [Referral Slip](referralslips.html) then close the Referrals window to finish attaching the provider to the procedure.

The referred out procedure text and graphic color set in [Definitions: Prog Note Colors](definitionsprognotecolors.html) and [Definitions: Chart Graphic Colors](definitionschartgraphiccolors.html) is used. The referral information is also added to the Family module, referrals section. To update the status of the referred out procedure, double-click the referral and Edit Referral Attachment (see Add/Edit Referrals above).

The procedure fee for a referred procedure will only be $0 if the procedure is originally charted with a *Referred Out* status. If the procedure is charted, then the status changes to *Referred Out*, the procedure fee must be changed to $0 manually.

As referrals are added to patients, various reports may be run to see referral counts, track production, and referred out procedures.
[Referred Procedure Tracking Report](reportreferralproctrack.html): Track treatment referred to another provider.
[Referral Analysis Report](reportreferralanalysis.html):Track production for referrals in a date range.
[Query Examples](https://opendentalsoft.com:1943/ODQueryList/QueryList.aspx): Choose from a variety of user requested reports. Use the *Return Queries About* dropdown and select Referral to narrow the list.
[Referral - Raw Report](reportreferralraw.html): Create a custom referral report.
[Referral List](referralsetup.html): Double-click a referral source from the list to quickly view a list and count of patients where the referral is used.