Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Letter Merge

Letter Merge allows users to create a Word document for a single patient only.

In the [Main Toolbar](toolbar.html), click the [Letter](letterspatient.html) dropdown. Select **Merge**.

![](images/letterMerge.gif)

Letter Merge is an old method for patient letters. Consider using the internal [Sheets](sheets.html) function for a more updated option. Sheets can be used for any patient letter or form and can be customized within Open Dental.

Letter Merge only works with Microsoft Word 2002 or later.

* **Edit Categories**: Open [Definitions: Letter Merge Cats](definitionslettermerge.html) to create letter categories and set the category order.
* **Add**: Click to create a new letter.

In Open Dental, create the letter from the Letter Merge window. There are four options listed in the Create area.

* **Data File**: Create a data file only.
* **View Data**: View the data file only.
* **Print**: Print the full letter.
* **Preview**: Preview the full letter.
* **Image Folder**: Informational only. View the image folder this letter will save to. Make changes to the default save folder by double clicking the letter to open the Edit Letter Merge window.

Note: Keep in mind this is a merge letter for only one patient, so the data file will always have only one row of data.

## Create a New Letter

1. In the Letter Merge window, highlight a category, then click **Add**.
2. The Edit Letter Merge window will open. Enter each field as needed. See below for a description of each field.
3. Click **New** to create a new file template. Word will open a blank document.
4. Close Word.
5. In the Letter Merge window, highlight the letter and click **Edit Template**.
6. Word will open your blank template, create a data file with one row, and attach the data file to the template as a data source.
7. In Word, click Mailings, then Start Mail Merge, Letters.
8. In Word, click Select Recipients, Use an Existing List.
9. Browse to your Letter Merge path. Select the Data Source you wish to use.
10. Type your letter. Any place where you want a merge field, click Insert Merge Fields. From here, you can insert fields, set up address fields using the Match Fields button, etc.
11. Save your template and return to Open Dental. You can return here anytime to further edit your template, add more fields, etc.

## Edit Letter Merge

Click Add or double-click an existing letter to edit.

![](images/letterMergeEdit.gif)

* **Description**: Enter the letter name.
* **Letter Merge Path**: Displays the path where letters are stored. Click **Edit Paths** to change the location. A file location must already exist before one can be selected.
* **Template File Name**: Enter the name of the file you are creating or editing.
  + Click **Browse** to copy an existing letter.
  + Click **New** to create a new letter.
* **Category**: Select the category to show the letter in.
* **Save to Image Folder**: Save copy of letter to patient's selected image folder.
* **Patient Fields**: Select the patient fields to merge into the letter. (e.g. Patient Last Name, Address, Email, etc.).
* **Referred From**: Optional. Select the referral information to merge into the letter.
* **Other**: Optional. Select additional information to merge into the letter.