Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Web Forms: What Patient Sees

In [Web Form Setup](webformsupload.html), click **Navigate to URL(s)**.

![](images/webFormFill.png)

Web forms can be viewed on a desktop (see above) or on a mobile device (see below). The view is responsive and automatically detects the user's device and adapts accordingly.

![](images/webformMobile.png)

## Fields

**Language**: If sheets have [Language Translations](sheetsetuplanguage.html) added, a Language dropdown is visible allowing patients to select their preferred language.

**Prev / Next**: Use these to navigate forms that are linked together. On desktop, all forms are listed on the left. Forms that have not been opened are marked as *new.*

**Submit**: Click to submit forms. Required fields are verified before sending. If any required fields are not filled in, they are turned red. On mobile, *Submit* is only enabled on the last form and appears at both the top and bottom of the screen.

## Filling Out the Form

* [Web Form Setup](webformsupload.html) determines Web Form settings such as whether patient Last Name, First Name, and Birthdate is inherited on 'next' forms, whether there are 'next' forms, the clinic associated to the web form, whether a redirect occurs after submit, and whether typed signatures are allowed. These settings come through to the web form via the URL.
* Pale yellow areas indicate fillable fields.
* Birthdate validation is based on Windows region settings (format, date format) for the office. To import patient birthdates successfully into Open Dental, make sure the region settings expected on the web form match the region settings on the workstation running Open Dental.
* If web form signatures are turned on, patients can electronically sign web forms using a mouse or stylus, or they can opt to type their name. When the form is imported into the database by the office, a date stamp appears in place of the signature. To erase a signature, click **Clear**. To type, check **Enable typed signature**, then enter the Full Name.
  ![](images/webFormSignature.png)
* Font support is dependent on the browser used to view the form. If the browser doesn't support a font used in the form, a supported font is substituted.
* The form is pure HTML with some JavaScript to validate certain fields.
* Free-form drawing does not work.

## Troubleshooting

**On a mobile device, the web form is not displaying a mobile view.**

In [Sheet Def Properties](sheetproperties.html), *Use Mobile Layout* must been enabled for each form.

**In Mobile View, when a patient clicks (Add text) the screen darkens and patient is forced to scroll way down to find the text entry popup.**

You have most likely embedded your web form in an iFrame. There are two options options:

* Do not embed in an iFrame, just navigate the patient directly to the link provided by Open Dental.
* Call support so we can evaluate the height setup of your iFrame in your HTML source and help you format your iFrame in a way that alleviates this issue.

**Would a patient (or parent/guardian) be able to digitally sign a web-based consent form?**

The practice would do better to have the patient (or parent/guardian) complete the document online, then sign it in the office, rather than online.