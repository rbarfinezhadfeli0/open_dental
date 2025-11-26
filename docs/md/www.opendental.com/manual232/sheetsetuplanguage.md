Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Language Translations for Sheets

Sheets can have multiple copies for different languages used in the office.

In the [Edit Sheet Def](sheetsetup.html) window, click the Language dropdown.

![](images/sheetsLanguageTranslation.png)

![](images/youtubeLogo.png) See our video: [Language Translations for Sheets](https://youtu.be/-MKhc8QMeF8).

Setting up language translations allows for easier communication with patients as they are seen in the office. Once set up, translations are automatically used for patients who have a preferred language.

## Set Up

Ensure the following is set up before creating a language translation.

* Add languages in [Miscellaneous Setup](miscsetup.html).
* Set patients to their preferred language in the [Edit Patient Information](patientedit.html) window.

## Creating a Language Translation for a Sheet

1. Open a sheet to translate.
2. Click the Language Dropdown to select the language to edit, or click **Add New**.
   ![](images/sheetsLanguagePick.png)
    When adding a new sheet, click OK to continue
3. A copy of the default sheet will be created. Make edits, add in translations, and any other needed information.
   * Translations are not done by the system. A user must go into each field and manually enter the translation into the selected language version.
   * A user may need to move the field or edit the size.
   * Edited fields on a translated sheet show in green. Fields that have not been changed show in blue.
4. Click OK to save.

Patients will now automatically use the sheet that matches their preferred language when filling [Patient Forms](patientform.html) on the kiosk or when filling forms using [eClipboard](../site/eclipboard.html).

To delete a language translation, select the translation from the dropdown menu, then click **Delete**. This will only delete the selected language translation, not the entire sheet.

**Synch matched fields**: Determine if new fields added to the default language sheet are added to secondary language sheets automatically and movement syncs automatically. Checked by default.

* Checked: New fields added to the *Default* sheet will be added to all other languages. If the field is moved on the default sheet, it will be moved to the same position on the other sheets. Once a field is edited from a translated sheet (i.e., not the default), movements made on the default will no longer synch to that translation. Fields that will not synch will be outlined in green on the translated sheet. Fields that will synch will be outlined in blue on the translated sheet.
* Unchecked: New fields added to the *Default* sheet will need to be added to other languages manually. Any movements will also need to be made manually on other sheets.

## Web Forms

When filling [Web Forms](../site/webforms.html), patients can use the dropdown in the upper left to select their preferred language.

![](images/webformLanguage.png)

## Pros & Cons

Some offices may find creating language translations to be more useful, while other offices might find it affects their workflow.

**Pros**:

* All languages are found on one form, in one place. This reduces clutter in sheets and forms by only displaying one sheet, rather than multiple sheets for each language. This is especially useful for offices that cater to a number of languages.
* Forms used in the Kiosk or eClipboard automatically use the preferred language for the selected patient. The office does not need additional notes or popups reminding them of the patient's preferred language.

**Cons**:

* If using Web Forms, the office cannot have a link to each language (e.g., a new patient packet available in Spanish and English). Instead, the patient must select their preferred language from the dropdown. While this is easy to do, it may be missed by some patients.
* If the office already had separate sheets created for each language, they must re-create them as language translations.

  Note: It may be possible for Open Dental HQ to merge these sheets for an additional fee. See [Custom Sheets](https://opendentalsoft.com:1943/ODCustomSheetForm/CustomSheetForm.aspx) for a quote.