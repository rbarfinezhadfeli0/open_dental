Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Automated Messaging

In [eServices Setup](eservicessetup.html), click **Automated Messaging**.

![](images/automatedMessagingWindow.png)

Automated messaging includes [eReminders](ereminderssetup.html), [eConfirmations](econfirmationsetup.html), [Automated Thank-Yous](autothankyousetup.html), [Arrivals](arrivalssetup.html), [Patient Portal](portalhostedbyod.html) Invites, and [General Messages](generalmessagesetup.html). Use this window to enable and set up each feature.

Some features require an additional fee. First, sign up for these features in [eServices Signup](eservicessignup.html).

**Advanced Settings**: Click to open [Automated Messaging Advanced Settings](automatedmessagingadvanced.html).

**Preferences**: Click to open [Automated Messaging Preferences](automatedmessagingpreferences.html).

## Activate / Deactivate Features

Choose which features to activate in the upper left.

![](images/automatedMessagingActivate.png)

Active features display in green. Inactive features display in red.

To activate a feature, click the **Activate** button. To deactivate a feature, click the **Deactivate** button.

## Add Rules

Rules determine the timing and message sent on automated messages. See the [Edit Rule](editrule.html) window for details.

![](images/automatedMessagingAddRule.png)

Before Appointment: These rules apply to messages sent before the appointment time.

* **Add eReminder**: Add rules for eReminders.
* **Add Confirmation**: Add rules for eConfirmations.
* **Add Auto Thank-You**: Add rules for Automated Thank-You messages.
* **Add New Patient Thank-You**: Add rules for New Patient Thank-You messages.
* **Add Patient Portal Invite**: Add rules for Patient Portal invites sent before the appointment.

At Appointment: These rules apply to messages sent at the time of the appointment.

* **Add Arrival**: Add rules for Arrival messages.

After Appointment: These rules apply to messages sent after an appointment has been set complete.

* **Add Patient Portal Invite**: Add rules for Patient Portal Invites sent after an appointment.
* **Add General Message**: Add a rule for general/generic messages sent after an appointment.

Note: When adding rules for a specific clinic, a *Use Defaults* checkbox appears. See below for details.

## Automated Messaging Rules Grid

Existing rules display in the Automated Messaging Rules grid. Double-click a rule to edit.

![](images/automatedMessagingGrid.png)

**Clinic**: Before creating or editing a rule, use the Clinic dropdown to select the clinic and any clinic-specific settings.

* To create default rules, select **Defaults** as the clinic, then create the rules.
* To apply default rules to a clinic, select the clinic, then check **Use Defaults**.
* To create clinic-specific rules, select the clinic, uncheck **Use Defaults**, then create the rules.
* To turn on/off automation by clinic, select the clinic, then check/uncheck **Enable Automation for Clinic**.

Grid Headings:

* Type: The type of rule (e.g., Confirmations, Reminders, etc).
* Lead Time: How far in advance of an appointment, or after an appointment, the message is sent to the patient.
* Send Order: The order and method in which the message is sent to the patient.