Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Sheet Field Types

When editing a sheet in the [Edit Sheet Def](sheetsetup.html) window, various Field Types can be edited, added, or formatted as needed.

## Field Types

Available Field Types:

* [Output Text](sheetsoutputtext.html): Output data fields that will be pulled from the database so information does not need to be entered manually.
* [Input Field](sheetsinputfield.html): Fields that expect the user to input data. Data can be imported into the database. Importable data fields can also be pulled from the database in a new sheet.
* [Static Text](sheetsstatictext.html): Text information such as labels and large paragraphs. Also includes fields that can be inserted as static text so that resulting text is specific to the patient (e.g., patient address, gender, age, etc.)
* [Checkbox](sheetscheckbox.html): A defined area where the user can click to toggle an X on and off. Can allow multiple choices or be set as radio buttons that require users to select one option out of many.
* [Combo Box](sheetscombobox.html): Add pick lists that allow users to make a single selection from a list of options.
* [Static Image](sheetsstaticimage.html): Import large or small graphic images (JPG, GIF, PNG, TIF, BMP).
* [Pat Image](sheetspatimage.html): Add patient images stored in the Imaging Module (BMP, GIF, EXIF, JPG, PNG, and TIFF).
* [Line](sheetsline.html): Fixed lines for the background.
* [Rectangle](sheetsline.html): Fixed rectangles for the background. Used to create the box around a checkbox or radio button.
* [Signature](sheetssignature.html): Insert a box for an electronic signature.
* [SigPractice](sheetssignature.html): As above, but limited to [Treatment Plan](sheetstreatplan.html) sheets for practice staff to sign.
* [ScreenChart](sheetsscreenchart.html): Add up to two tooth charts to a custom public health screening form.
* [Grid](sheetsgrid.html): Insert a fixed group of items arranged in columns and rows.
* [Special](sheetsspecial.html): Add the tooth chart and tooth chart legend.

![](images/youtubeLogo.png) Also see our Webinar: [Understanding Sheet Field Types](https://youtu.be/l16y8s53CEI)

## Editing Fields

See [Edit Sheet Def](sheetsetup.html) for information on setting up sheets. The fields available for a sheet depend on the Sheet Type:The fields available for a sheet depend on the Sheet Type:

| Sheet Type | OutputText | InputField | StaticText | Checkbox | ComboBox | StaticImage | PatImage | Line | Rect | Signature | SigPractice | ScreenChart | Grid | Special |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LabelPatient | x |  | x |  |  | x | x | x | x |  |  |  |  |  |
| LabelCarrier | x |  | x |  |  | x | x | x | x |  |  |  |  |  |
| LabelAppointment | x |  | x |  |  | x | x | x | x |  |  |  |  |  |
| LabelReferral | x |  | x |  |  | x | x | x | x |  |  |  |  |  |
| ReferralSlip | x | x | x | x | x | x | x | x | x | x |  |  |  |  |
| Rx | x | x | x |  | x | x | x | x | x | x |  |  |  |  |
| Consent | x | x | x | x | x | x | x | x | x | x |  |  | x |  |
| PatientLetter | x |  | x |  | x | x | x | x | x | x |  |  | x |  |
| ReferralLetter | x |  | x | x | x | x | x | x | x | x |  |  | x | x |
| RoutingSlip | x |  | x |  |  | x | x | x | x |  |  |  |  |  |
| PatientForm |  | x | x | x | x | x | x | x | x | x |  |  | x |  |
| MedicalHistory |  | x | x | x | x | x | x | x | x | x |  |  |  |  |
| LabSlip | x | x | x | x | x | x | x | x | x | x |  |  |  |  |
| ExamSheet | x | x | x | x | x | x | x | x | x | x |  |  |  |  |
| DepositSlip | x |  | x |  |  | x |  | x | x |  |  |  |  |  |
| Statement | x |  | x |  |  | x | x | x | x |  |  |  | x |  |
| TreatmentPlan | x |  | x |  |  | x | x | x | x | x | x |  | x | x |
| Screening | x | x | x | x | x | x | x | x | x | x |  | x |  |  |
| Payment Plan | x |  | x |  | x | x | x | x | x | x |  |  | x |  |
| RxMulti | x | x | x |  | x | x | x | x | x | x |  |  |  |  |
| ERA | x |  | x |  |  | x |  | x | x |  |  |  |  |  |
| ERAGridHeader | x |  | x |  |  | x |  | x | x |  |  |  |  |  |
| Patient Dashboard |  |  | x |  |  |  | x | x | x |  |  |  | x | x |
| Chart Module |  |  |  |  |  |  |  |  |  |  |  |  | x | x |