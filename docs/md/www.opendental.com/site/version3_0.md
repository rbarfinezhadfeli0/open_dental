[![Open Dental Software](resources/logo.png)](../index.html)

503-363-5432

☰

* [Home](../index.html)
* [Trial Version](trial.html)
* [Order](order.html)
* [Documentation](documentation.html)
* [Forum](http://opendentalsoft.com/forum/)
* [Contact Us](contact.html)
* [![](resources/iconSearch.gif)](searchSite.html)

# Version 3.0

See [Versions](versions.html)

## Version 3.0

Released on 10/25/04. Here are some of the features:

**E-mail:** Send [Email](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7emailmessage.html) to any patient and keep a copy of what was sent.

**Images:** Separate buttons to scan [Images](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7images.html) at high resolution for x-rays and photos. Rotate and flip tools. Drag and right click features enabled. View image thumbnails in the lower half of the [Chart](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7chart.html) module. Separate image viewer for second monitor.

**Appointments module:** Many more [Appointment View](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7appointmentviews.html) options on exactly what data shows on an appointment in the main screen of the [Appointments](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7appointments.html) module. Added fields include phone numbers, fees, medical notes, chart numbers, and many others. You can customize the order and color of each item. Instead of the previous 10 minute increments, you now also have the option of 15 minute increments. An additional option is to use multiple rows per increment which is helpful if you want to see more data on each appointment. If you have any views set up, the first view is now used upon startup.

**Accounts:** This is the most significant change for this version. In the [Procedure Edit](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7procedureedit.html) window, the lower section is now a list of insurance estimates and payments for this procedure. The old estimate section in that window is gone. This gives you much more control over estimates, and allows the program to handle estimates even when very complex insurance situations exist. For instance, mixing capitation and fee for service, including triple or quadruple coverage, unusual deductible situations, or mixing dental with medical. It also takes us one step closer to line item accounting.

**Quick Paste Notes:** See [Quick Paste Notes Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7quickpastenotessetup.html). It is common to need to insert a frequently used note into a text field. That feature was present as quick paste notes on various screens. Now, the notes are all organized into a single interface with multiple categories. You can access the notes or insert a date by right clicking on any text box. Or, you can type a ? followed by an abbreviation, and your note will immediately be insterted in place of the abbreviation. This makes inserting notes very fast. Multiline notes are allowed.

**Treatment Plan:** See [Treatment Plan](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7treatmentplan.html) module. Graphical tooth chart is now included on printout. You also have an option to not show any insurance on a treatment plan.

**Claim Forms:** (for other programmers) Import and export feature for [Claim Forms](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7claimforms.html) to make it possible for anyone to make updates to claim forms for their customers. Any claim form can be exported as an XML file and sent to any user who can then import that claim form.

**Technical Improvements that are only meaningful to programmers:**
 && being replaced with AND in all queries for better generic SQL compliance.
 Structs being converted to classes. Global variables eliminated. Converted so far: Procedure,ClaimProc,ClaimForm,ClaimFormItem

**Miscellaneous:**
[Message](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7messaging.html) buttons now 100% reliable.
 Does not allow adding a new family unless a search has been done to see if that patient already exists.
 Language translation features fixed.
 Select Patient button includes dropdown feature for last five patients and for other family members.
 Date fields now respond to +, -, up, and down keypresses to change date.
 Default entry date can now be set in Chart module.
 When entering existing conditions like missing teeth, the dates are set to 01/01/0001 so that they will go to the top of the Progress Notes.
 Treatment plan now prints on size A5 paper for New Zealand.
 Statements: walkout button to hide payment options. Attach notes. Show next appt. (thanks to Spectra Data Solutions in New Zealand)
 Prints appointment cards (thanks to Spectra Data Solutions in New Zealand)
 Statements sent no longer show in the Comm log, but only in account, reducing clutter.
 If (Next) Planned appointment is all hygiene procedures, then default appt prov to patient's hygiene prov.
 In Claim Edit window, warning now shows if you try to enter payments by double clicking on the claim procedures instead of buttons.
 All payment splits forced to have same date as the payment they are attached to, which is the only way to get accurate production reports until line item accounting is done.
 Medications section now works much more smoothly. Allowed to delete. Not allowed to change med name if attached.
 When making an appointment, the NP box is less likely to be checked automatically.
 Production and Income reports optimized for patient refund checks.
 Deposit slip shows types and shows a patient name next to insurance check.
 Twain support for scanners and cameras (thanks to [Practice Web](http://www.practice-web.com/) )
 On tooth chart, primary teeth no longer show procedures if extracted.
 When charting a bridge, a pontic will now be triggered even if the tooth is just treatment planned for Extraction.
 When extracting a tooth, the old procedures no longer show on the graphical chart. But you can still set them to show.
 Adjustment note lengthened from 255 characters to unlimited.
 Appointments report. (Thanks to Dan Crawford)
 Recall edit window now shows family information.
 Daily and annual production and income reports.
 Procedure codes for Netherlands.
 Belgian claim form for Dutch region.