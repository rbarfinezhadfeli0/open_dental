Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Web Sched Notify Setup

When a patient successfully books a Web Sched Recall, Web Sched New Patient, or Web Sched ASAP appointment online, you can opt to send them an automated message via text, email, or both to notify them about the appointment details.

In [Web Sched New Patient](webschednewpatsetup.html), click **Notification Settings**.

![](images/webschedNotify.png)

Alternatively,

* in [Web Sched Existing Patient](webschedexistingpatsetup.html), click **Notification Settings**.
* in [Web Sched Recall](webschedrecallsetup.html), click **Notification Settings**.
* in the [ASAP List](asaplist.html) click **Notification Settings**.

Notify messages can be turned on by clinic and by service.

The Notification Settings window is similar for each Web Sched feature. The heading of the window will display which Web Sched feature Notify is being set up for.

**Clinic**: When you have multiple clinics, you can create default messages for all or some clinics, or customize messages per clinic.

* To set defaults for multiple clinics, select Defaults, then change the settings.
* To customize the settings for a specific clinic, select the clinic, uncheck Use Defaults, then change the settings.
* To apply default settings to a clinic, select the clinic, then check Use Defaults.

**Communication Method**: For each service, select the method of sending the notify messages.

* None: Do not send notify messages for the service.
* Text: Only send notify messages via text.
* Email: Only send notify messages via email.
* Text and Email: Send both email and text notify messages.

**Text Message**: Customize the message sent via text. Right-click in the text box to insert a Message Replacement Fields that dynamically inserts patient data into the message text. The default message varies by Web Sched Feature.

**Email Subject and Body**: Customize the email subject line and body text. The default email message varies by Web Sched Feature.

* **Edit**: See [HTML Email](emailhtml.html) for details on editing HTML elements.

**Undo All**: Undo all changes made since the window was last opened

## Message Replacement Fields

Both email and text messages can include Message Replacement Fields that dynamically insert patient data from the database. The fields available for each service vary.

1. Right-click in the Text Message, Subject, or Body text box, then click Insert Fields to view available Message Replacement Fields.
   ![](images/webschedVerifyFields.png)
    Fields in black text are available for the service. Fields in red text are not. Greyed out fields are considered protected health information (PHI) and cannot be inserted into text messages because texting is not a secure method of sending PHI.
2. Double-click a field to insert it in the current cursor location.