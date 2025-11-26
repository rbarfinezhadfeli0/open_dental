Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Sheet Troubleshooting

Below are common questions about [Sheets](sheets.html) as well as some troubleshooting steps.

**Some text is being cut off in my sheets. How do I fix this?**

When updating to 23.1 from previous version, the horizontal space between letters was increased. This may cause some text to be cut off if it no longer fits in the containing box. Use the *Sheet Font Size Reduction* tool in [Sheet Def Properties](sheetproperties.html) to reduce the font size of text in all fields on the sheet. Alternatively, you can adjust the text size of indivdual fields by double-clicking the field or increase the size of the containing box to fit all text.

**I accidentally deleted a custom sheet. How can I recover it?**

To recover a deleted custom sheet, retrieve a copy from a backup of the database that contains the sheet.

In the backup database:

1. Go to Setup, Sheets.
2. Highlight the custom sheet, then click Export. Save the file. It will be saved as a .xml file.
3. Close the backup database.

In the current database:

1. Go to Setup, Sheets.
2. Click Import.
3. Select the xml file saved from the backup.

**I type information into an Input Field or I mark a Checkbox, but when I hit save the field is blank.**

This is usually caused by overlapping fields. Other than a line or Static Image, fields cannot overlap each other. Make sure fields are not inside a big Static Text box. Have the Static Text box before and/or after an InputField or Checkbox, but do not cover the field.

**Blank pages are printing.**

Blank pages indicate there is a field, image, or element on the page. Make sure that no fields, elements, or images extend outside of the page. Check for blank or white images, extra space at the end of an image, too large fields, blank text boxes, etc. Then, move the item or change its properties.

**An image on my sheet isn't showing.**

This means the sheet cannot find the image in the OpenDentImages folder. All sheet images need to be located in the Open Dental database to show on a sheet. Static images should be in the SheetImages folder inside the OpenDentImages folder. Patient images should be in the folder selected for Pat Image in Definitions, Image Categories.

**When I view my sheet on a phone/tablet, the fields are out of order or are missing things.**

When a sheet is created, ensure there is a desktop view and a mobile view. Images do not show in the mobile view, so make sure that all text is entered as Static Text and check the box "Include in Mobile" if the text is not accompanied by another field with a Mobile Caption (e.g., a Static Text followed by an Input Field.) This will allow the text to show in both the desktop (main) view and the mobile view. Also, drag the fields in Mobile View to the position that matches the desktop view.

**On a Web Form or mobile device, mysterious fields are showing, but I don't see anything in the Sheet preview.**

If fields are showing only in the Web Form or the mobile layout, they are on the sheet, but perhaps outside of the page's left or right margins, or the hidden field may be below everything on an unseen page. On the Edit Sheet Def window, locate the item in the Fields list on the right, then double-click to change its properties.

**On Web Forms, the fonts are not showing correctly.**

Font support is dependent on the browser used to view the Web Form. If a browser doesn't support a font, a different font will be substituted. This can affect layout of the sheet. We recommend using common fonts (e.g., Times New Roman, Arial, Courier) and testing sheets on a variety of different browsers and devices. Static text fields in particular may need to be larger to fit text.

**I updated to version 23.1 (or higher) and now some of my existing Sheets have blank fields.**

In Version 23.1, there was major overhaul to how Sheets are displayed. This can cause some fields to appear blank. To resolve this, go to Tools, [Database Maintenance](databasemaintenance.html) from the Checks tab, select the *SheetFieldsWithEmptyItemColor* method, and click Fix.