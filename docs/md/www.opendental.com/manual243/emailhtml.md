Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

HTML Email

Emails sent from Open Dental can have HTML coding to include images, fonts, and colors.

In the [Email Message Edit](emailmessage.html) window, click **Edit HTML**.

![](images/htmlEmail.png)

Additionally, click **Edit HTML** in [Email Templates](emailtemplates.html) window to create HTML formatted templates.

The following options are available when editing HTML emails.

* **Setup**: View the master HTML code template. This sets the default for various HTML tags listed below.

  Note: It is not recommended to manually edit the default template. To customize HTML styling, the *Use Raw HTML* edit option can be used for individual messages or email templates .
* **Ext Link**: Add a link to an external website (enter the full URL path: **http://www.mysite.com**).
* **Heading 1, 2, 3**: Format text as Page Title (h1), Subtitle (h2), or smaller category (h3). Properties of all tags can be customized in the master template.
* **Table**: Add a table. Adding a table in emails follows the same structure as tables created on a wiki page. See the *Tables* section on [Wiki Edit](wikiaddedit.html) for more information.
* **Image**: Images can be added to emails by clicking *Image*, selecting from available images, or importing into the image list.
  + To import an image, click **Import**, select the file, and double-click on the image name.
  + PDFs cannot be imported as images.
  + Microsoft account users cannot send emails using images that include file names with invalid characters. Invalid characters include spaces and the following: ; , ( ) [ ] { } % $ + ! \* = & ? @ # ~ ' " " < > ` ^
* **Autograph**: Insert a saved email autograph, or create a new autograph for future use.
* **Cut**: Removes text and copies to the clipboard.
* **Copy**: Copies text to the clipboard.
* **Paste**: Pastes text from the clipboard.
* **Undo**: Undo the previous action. Only able to undo one action.
* **Bold**: Bold specific words or multiple lines at once.
* **Italic**: Italicize specific words or multiple lines at once.
* **Color**: Make the selected text red. Change the color by replacing the color name in the Markup, for example: color:blue. Not usable on links.
* **Font**: Change the font of the selected text. The default font family is Courier. To change, edit the font name in the Markup (e.g., font:Courier.) Other examples: Times, Serif, Arial, etc.

Other valid HTML tags work with the except *break <br>* tag. Do not use *head* or *body* tags in the email, they are already present in the default template.

**Use Raw HTML (don't use master template):** This option is for advanced users with expertise in crafting custom HTML. Check to edit the raw HTML to be sent in the email. No error checking is provided to validate raw HTML.

Note: Different email clients render HTML code differently. Ensure any raw HTML has been well-tested for errors and visual problems across various possible email programs (e.g., Outlook, Thunderbird, Gmail, etc).

Click **Save** once editing is complete to keep changes and insert the HTML into the email message.