Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

eCW Bridge Modes

If using Open Dental with [eClinicalWorks](bridgeeclinicalworks.html), there are three different bridging modes to consider. Each is described below.

## Tight Integration Mode

This is the most common mode used. In this mode, patients are accessed in eCW first. Clicking a link will launch Open Dental for the same patient. Open Dental is closed to transfer the user back to eCW.

* You will only use Open Dental for clinical charting, and all completed procedures will then pass to eCW for billing.
* All other functions will be done in eCW:
  + All practice management functions (including patient selection, accounts, and appointments).
  + All bills.
  + Entering of medical information (medication, problems, allergies).
  + Patient and insurance claims.
  + EHR meaningful use data.

## Full Mode

In this mode, features will show that you may not use, or that may be complicated to integrate into your processes. This is the only mode that allows users to send pre-authorizations from Open Dental. Most eCW users use Tight Integration instead.

In Open Dental you will have full access to most features including:

* [Insurance Plans](insplanlist.html)
* [Preauthorization](preauth.html).
* The [Main Toolbar](toolbar.html), including email, patient and referral letters, forms, and popups.

Insurance plans are only used for pre-authorizations, and in some cases to show more accurate insurance estimates. You will need to re-enter plan and subscriber information in Open Dental. You should discuss this benefit in detail with a specialist before using Full mode.

You will not have access to:

* The [Appointments Module](appointments.html). You will still make appointments in eCW.
* Some sections of the [Account Module](account.html). Since billing will still be done in eCW, some areas will be hidden.

## Standalone Mode

In this mode, Open Dental runs as an entirely separate program. Patients added or demographic information changed in eCW are automatically synced in Open Dental, but no other information will transfer. The user has to log in twice, once for eCW and once for Open Dental. Primary keys must be used to uniquely identify patients in both systems. Because Open Dental has no control over the PatNum, the ChartNumber is used instead. As patients are added, Open Dental will attempt to fill in the ChartNumber field of existing patients to match the internal patient ID from eCW. Once ChartNumber field has been set, it allows straightforward future synchronization.

* In eCW, you will enter and edit all demographic information. If entered in Open Dental, changes may be overwritten by the synch process.
* In Open Dental you will:
  + Re-enter medications; they are not synched or copied from eCW.
  + Create bills for dental procedures. These will be entirely separate from bills created in eCW. Dental insurance information will need to be entered in Open Dental.
  + Create dental prescriptions. You will need to manually copy prescriptions entered in Open Dental to eCW's medical chart if needed.

## Choosing a Bridge Mode

The simplest way to choose a mode is to answer one question: Are you already using Open Dental side-by-side with eCW?

* If yes, you would likely choose Standalone Mode.
* If you are an existing eCW customer, and have not yet started using Open Dental, you would likely choose Tight Integration.

Changing modes:

* Changing modes between tight and full is very simple and can be done at any time.
* Changing modes from tight/full to or from standalone is very complex and would involve a conversion service provided by programmers from both eCW and Open Dental, resulting in a significant fee. For example:
  + Switching from Tight Integration to Standalone will result in existing Open Dental accounts needing adjustments to avoid duplicate billing from both systems.
  + Switching from Standalone to Tight Integration will result in all account balances needing to be transferred to eCW.