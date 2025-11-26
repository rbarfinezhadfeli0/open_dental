Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Email Setup

To utilize email features in Open Dental, set up Email Addresses.

In the [Main Menu](mainmenu.html), click Setup, Manage, Email.

![](images/emailsetup.png)

Alternatively, in the [Email Client](emailinbox.html), in the top menu, click Setup.

Each clinic can be assigned one outgoing email address. Add the clinic email address here, then assign it in the [Clinic Edit](cliniceditwindow.html) window. Clinic email addresses must be assigned in Clinic Edit if using eServices that utilize email.

**Email Addresses**: A list of email addresses that have been added for use in Open Dental can be used by all staff members (e.g. general practice, clinic, or group email addresses).

* User Name: The email address.
* Sender Address: The *Email address of sender* as entered on the Edit Email Address window.
* User: The user associated with the email address. Only the assigned user can utilize this address when sending emails.
* Default: The address marked X is the default *From* address for outgoing emails.
* Notify: The address marked X is the *From* email used to send secure WebMail notifications to patients.

Double-click an existing address to edit.

**Set Default**: Set the selected email address as the *From* email address for outgoing emails. If an email address is assigned to the [Clinic](cliniceditwindow.html), this is used instead. If the logged-in user is assigned an email address this is used instead of the default or Clinic email.

**WebMail Notify**: Set the selected email address as the *From* email address for [WebMail](securewebmail.html) notifications to patients.

Note: Default and WebMail Notify email addresses are required for [eServices](eservicessignup.html) to function correctly.

**Add**: Open [Email Address Edit](emailaddressedit.html) to add a new email account.

**Inbox Receive Interval**: Set the time, in minutes, to automatically check for and download new emails to the [Email Inbox](emailinbox.html) using the [Open Dental Service](opendentalservice.html). Five minutes is the default.

**Include Opt-Out Statement**: Determines if an opt-out statement is included in all eService emails. The statement includes [Practice](practice.html) or the patient's assigned [Clinic](clinicsetup.html) address and instructions about how to unsubscribe from [eService](eservices.html) emails (see example below).

* Checked: Include the opt-out statement at the bottom of all eServices emails. The opt-out statement cannot be edited.
* Unchecked: Do not include the opt-out statement in eServices emails. When unchecked, there is a warning that the opt-out statement is required by US law. Click **OK** to continue.

Example:
*This email has been sent to you from:
 North Clinic
 123 Walrus Way
 Portland, OR 97338.

 How to unsubscribe:
 If you no longer want to receive any email messages from us, simply reply to this email with the word "unsubscribe" in the subject line.*

Note:

* When a patient emails a response to *unsubscribe*, they are not automatically removed from an eService email list. To stop sending them eServices emails, remove their email address on [Edit Patient Information](patientedit.html).
* If a patient has unsubscribed from eServices emails, their email address must be manually entered for future non-eServices emails..

See [Email Errors](emailerrors.html) for detailed information on potential errors.