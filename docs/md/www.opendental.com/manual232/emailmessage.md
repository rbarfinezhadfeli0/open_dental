Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Email Message Edit

Emails can be sent to patients directly from the Open Dental program.

In the [Main Toolbar](toolbar.html), click **Email**.

![](images/emailEdit.png)

Alternatively, click the Email dropdown and select a referral source to send an email to a referral attached to the selected patient. Emails can also be generated and sent in various other parts of Open Dental.

## Edit Template

![](images/emailEditTemplate.png)

To insert [Email Templates](emailtemplates.html), select it and click **Insert**. The template's subject and message will replace any existing text (including autographs) and associated attachments will be added.

## Email Autograph

![](images/emailEditAutograph.png)

Select an [E-mail Autograph](emailautographs.html) from the list and click **Insert** to add it to the end of the email. Plain Text Autographs are inserted automatically. Autographs with HTML formatting can only be added via the [Email HTML Edit](emailhtml.html) window.

If the *From* email address is associated to a Plain Text Autograph, it is added to the email automatically. If the *From* email address is associated with an HTML Autograph, the Autograph will be appended to the email when sending.

## Email Addresses

![](images/emailEditFromInfo.png)

* **Username**: The currently logged-in Open Dental user.
* **Sent/Received**: Displays if the email was sent or received. When sending, the window is in compose mode and this status will be *Neither*
* **Date/Time**: The date and time of the sent or received email. When sending, this will display as *Unsent*.
* **From**: The email address used to send the email. The default address used differs depending on how the email is generated.
  + Click **[...]** to open all email address options for this user and change the From address.
    ![](images/emailAddresses.png)- Double-click an address or highlight and click **OK** to replace the current From address.
    - Alternatively, type an email address and alias manually (e.g., If bob@gmail.com is selected in the dropdown, and *Sparkly Dental <bob@gmail.com*> is entered, the recipient will see *Sparkly Dental* instead of *bob@gmail.com*).
  + When clicking the **Email** button:
    - If the logged-on user has a user email set up, this is the default.
    - If the logged-on user does not have a user email set up and Clinics are enabled, the default email address for the patient's assigned Clinic, in [Clinic Edit](cliniceditwindow.html), is used.
    - If the logged-on user does not have a user email set up and Clinics are not enabled (or the patient's assigned Clinic has no default email address), the Default email address in [Email Setup](emailsetup.html) is used.
  + When generating a referral email from the Email dropdown, the default email address for the patient's assigned Clinic is used by default. If Clinics are not enabled (or the patient's assigned Clinic has no default email address), the Default email address in Email Setup is used.
* **To**: Defaults to the patient's email address on file. When starting to type a new email address, a contact list populates with email addresses of previous recipients. Select from the list or continue typing the address. If multiple addresses are entered, all recipients can view and reply to other recipients on the email.
* **CC**: Enter email addresses that will receive a copy of the message. Blank by default. Cannot be used with Secure Email.
* **BCC**: Enter email addresses that will be sent a copy of the message, but who will not show as a recipient on any other recipient's email copy. Blank by default. Cannot be used with Secure Email.
* **Signed By**: Obsolete. Previously used for Encrypted Email. See Digital Signatures below.

## Attachments

![](images/emailEditAttachments.png)

Attach files to the email. Click **Add** an attachment. Users are prompted to locate and select the file.

If images and documents are stored in a local or network folder (see [Data Paths Setup](paths.html)), a list of all images in the selected patient's [A to Z Folder](atozfolder.html) (i.e., OpenDentImages) on the local or network folder will display first. Locate the file and click Open to select it.

If images and documents are stored in [Dropbox](dropbox.html), a Select Files window opens listing all images in the selected patient's Dropbox A to Z folder.

**Right-Click Options:**

* Open: Open the selected attachment.
* Rename: Rename the selected attachment.
* Remove: Remove the selected attachment from the email.
* Double-click a file to view it.

Note: Microsoft account users cannot send attachments that include file names with invalid characters. Invalid characters include spaces and the following: ; , ( ) [ ] { } % $ + ! \* = & ? @ # ~ ' " " < > ` ^

## Show Email

![](images/emailEditShowEmail.png)

Select where in Open Dental an individual email will show or not show. To show the email in an area, highlight it. To hide the email in the area, deselect it. By default, all areas are selected.

* Email Inbox
* Appointment Edit: [Edit Appointment](aptedit.html), Communications Log area. Only displays emails sent from [eConfirmations](econfirmationsetup.html) and [eReminders](ereminderssetup.html).
* Chart Progress Notes: [Chart Module](chart.html), Progress Notes
* Account Progress Notes: [Account Module](account.html), Progress Notes
* Account Comm Log: Account module, Communications Log area

To view emails that have been hidden in all areas, go to the [Email Client](emailinbox.html) and check *Show Hidden Emails*.

## Subject and Body

![](images/emailEditSubject.png)

* **Subject**: The subject of the email message.
* **Body**: The message text. If an [Email Autograph](emailautographs.html) is associated with the From address, it is inserted by default. If the autograph is associated to multiple email addresses, the autograph listed first is inserted.

## Buttons

![](images/emailEditButtons.png)

* **Delete**: Delete a sent email from Open Dental. It will remain on the mail server, but will not download again. Emails attached to a patient, once deleted, are removed from the Sent Messages tab, yet still visible in the Commlog and Progress Notes. Emails not attached to a patient are permanently removed.
* **Raw Message**: Only displays for downloaded emails. Informational only.
* **Save**: Save an email without sending. Saved emails are attached to a patient list in the Chart module and Commlog. If Open Dental shuts down unexpectedly, emails that are in progress are automatically saved.
* **Refresh**: Only displays for downloaded emails. Refresh the window.
* **Edit Text**: Edit the message using basic plain text.
* **Edit HTML**: Edit the message using HTML coding (for images, fonts, etc.) See [HTML Email](emailhtml.html) for more information.

  Note: If the message has been edited using Edit HTML, clicking Edit Text switches the email to plain-text formatting. The HTML tags are not stripped from the message automatically and must be deleted before sending.
* There are three options for sending an email. The default button may change, depending on setup. Click the dropdown to see additional options.
  + **Send**: Send a regular, unencrypted, email. This option is the default if Secure Email is not enabled.
  + **Send Secure**: Send using Secure Email. This option is the default if Secure Email is enabled. See [Secure Email Setup](secureemailsetup.html).
  + **Direct Messaging**: Obsolete. Was used for [Email Encryption Options](emailencrypted.html).
  + Click **Cancel** to close the Edit Email Message window without saving changes.

## Sent Emails

Double-click a sent email preview to launch the email in a new window. The message contents are read-only.

* **Delete**: Click to delete the email from Open Dental.
* **Save**: Click to save changes to the Show Email tab.

## Digital Signatures

If the **Sig** button or *Signed By* field displays, this email was sent using [Encrypted Email](emailencrypted.html). Click **Sig** to view signature details. This feature is now obsolete.