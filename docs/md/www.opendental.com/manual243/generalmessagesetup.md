Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

General Messages

General Messages are texts or emails sent after an appointment.

In [eServices Setup](eservicessetup.html), click [Automated Messaging](automatedmessaging.html).

![](images/generalmessage.png)

An example of a general message could be a text that goes out after the appointment inviting the patient to leave a review. Emailed messages can be sent at no additional cost. To send messages by text, [eServices Texting](textintegratedusage.html) is required and a per text message fee applies.

## Activate / Deactivate General Messages

General Messages can be activated or deactivated as needed.

![](images/generalMessageActivate.png)

* To enable General Messages, click **Activate General Messages**. The General Messages row displays in green with a status of *Active*.
* To disable General Messages, click **Deactivate General Messages**. The General Messages row displays in red with a status of *Inactive*.

After activating General Messages, set up General Message Rules.

## General Message Rules

To edit an existing General Message Rule, double-click a General Message Rule from the Automated Messaging Rules grid. To add a new rule, click **Add General Message**.

For information on adding and editing rules, see [Edit Rule](editrule.html).

## Using General Messages

1. Activate General Messages.
2. In [Automated Messaging Advanced Settings](automatedmessagingadvanced.html), choose which appointment statuses receive a general message once set complete.
   * To exclude patients from receiving general messages, create a new [Appointment Confirmation Status](definitionsapptconfirmed.html) or choose existing statuses and ensure *Send General Message* is disabled in Automated Messaging Advanced Settings for those statuses.
3. Update the confirmation status of the appointment to a status that has enabled *Send General Message*.
   * To not send the general message (e.g., if the general message is a survey link that you don't want to send to a patient) make sure the updated appointment status has disabled *Send General Message* instead.
4. Set the appointment complete.

Any general message is sent automatically as scheduled after the appointment's end time has passed and the appointment is set complete.