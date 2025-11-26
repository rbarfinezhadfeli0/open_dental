Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Email Address Edit

Set up an email address to send and receive email in Open Dental.

In [Email Setup](emailsetup.html), click **Add**, or double-click on an existing address.

![](images/emailByUser.png)

Alternatively, for user-specific emails, in the Main Menu, click File, User Email Address. When accessed this way, only the user-specific email displays. No other users can see emails sent to the address.

Enter the email settings. Some known settings for different email hosts can be found on [Email Errors](emailerrors.html).

## Email Address

![](images/emailAddressUsername.png)

* **Username**: The full email address.
* **Use SSL**: Check the box to enable SSL/TLS. Uncheck it to disable SSL/TLS.

## Email Authentication

![](images/emailAuthentication.png)

* **Password**: Select to see the password box. Only select this option if not using a Gmail or Microsoft account and entering email settings manually.
* **Gmail**: Select to see Gmail options. Gmail account users must utilize this option. See Gmail Authorization below.
* **Required for Microsoft addresses**: Select to see Microsoft options. Microsoft account users must utilize this option. See Microsoft Authorization below.

## Gmail Authorization

This section displays when Gmail is selected as the *Email Authentication* option.

![](images/emailGmailAuth.png)

**Sign in with Google**: Click to open Gmail Authorization in a web browser. Follow the prompts in the browser.

* **Access Token**  / **Refresh Token**: Automatically populated once Gmail Authorization is complete and access is granted.
* Gmail users must have a valid registration key for Open Dental.

**Sign Out**: Clears saved tokens.

**Download incoming emails**: Check the box to download incoming emails from Gmail mailbox into the [Email Inbox](emailinbox.html). When checked, Outgoing Email Settings display. When unchecked, Outgoing Email Settings remain blank.

**Inbox Search Operators for Filtering**: Only available when *Download incoming emails* is checked. Enter terms to filter which emails are downloaded into Open Dental. For example,  *is:unread* only downloads unread email or *is:starred* only downloads starred emails from Gmail.

**Get unread mail only**: Only available when *Download incoming emails* is checked. Only download unread mail from the inbox.

## Microsoft Authorization

This section displays when Microsoft is selected as the *Email Authentication* option.

![](images/emailMicrosoftAuth.png)

**Sign in with Microsoft**: Click to open Microsoft Authorization in a web browser. Follow the prompts in the browser.

* **Access Token**  / **Refresh Token**: Automatically populated once Microsoft Authorization is complete and access is granted.
* Microsoft users must have a valid registration key for Open Dental.

**Sign Out**: Clears saved tokens.

**Download incoming emails**: Check the box to download incoming emails from Microsoft mailbox into the Email Inbox. When checked, Outgoing Email Settings display. When unchecked, Outgoing Email Settings remain blank.

## Incoming Email Settings

Incoming email settings are only required if using the [Email Inbox](emailinbox.html). These settings are only enabled when Password is selected as the *Email Authentication* option.

![](images/emailIncoming.png)

* **Incoming POP3 Server**: Enter the Incoming POP3 Server.
* **Incoming Port**: Enter the incoming port.

## Outgoing Email Settings

Outgoing email settings are required to send email from Open Dental. These settings are only enabled when Password is selected as the *Email Authentication* option.

![](images/emailOutgoing.png)

* **Outgoing SMTP Server**: Enter the outgoing SMTP server. Some known options are listed.
* **Outing Port**: Enter the outgoing port.
* **Email address of sender**: This email address is the display name. Not recognized by all email providers. Appears in the From address instead of the username (full email address), though username credentials are still used. (e.g., If *Sparkly Dental <bob@gmail.com>* the recipient sees *Sparkly Dental* as the sender instead of *bob@gmail.com*.)
  + Do not use this field when utilizing Microsoft Authorization. Doing so may cause an error when sending emails.
  + When sending encrypted email, this field is ignored.

## User

This section only displays when:

* accessed from File, User Email Address. The signed-in user displays but cannot be changed.
* adding a new email address.
* editing an existing email address that is not marked as *default* or *WebMail Notify*.

![](images/emailUser.png)

* **User**: The user associated with the email address. Click **[...]** to select a user.
  + Users must have the *securityadmin* permission to change the user assigned to an email address.

## Buttons

![](images/emailButtons.png)

* **Delete**: Remove the selected email address from [Email Setup](emailsetup.html).
* **Certificate**: See [Email Certificate Hosting](emailcerthost.html).
* Click **Save** to close the window and keep changes.