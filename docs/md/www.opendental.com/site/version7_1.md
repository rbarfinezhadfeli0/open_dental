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

# Version 7.1

See [Versions](versions.html)

Version 7.1 was released on 7/29/10

**Unit Testing:**  A framework was added for regression testing in order to provide greater stability between versions and better documentation of the expected behavior of the program.

**Recall List:** Columns are now customizable with Display Fields. Billing type column added. Can sort by billing type. [Recall List](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7recalllist.html).

**Task List:** Popup blocker remembers default for each user. New tasks show up on a new task list for each user, eliminating the need for the popups if desired. [Task List](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7tasksarea.html).

**Time Clock**: Overhauled to use one row per time pair instead of two. This takes less space, allows queries to be run, and will allow more features in the future. Timespans now show using colons instead of decimals. [Time Clock](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7timeclock.html).

**Security:** Can force passwords to be strong, and can track which ones are not strong. Users can change their own passwords. Added global security lock based on number of days in addtion to the existing date lock. [Security](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7security.html).

**Lab Slips:** Added to sheets, making them paperless. Can be digitally signed. [Lab Case](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7labcaseedit.html).

**Chart Graphics:** A checkbox has been added in the procedure edit window to allow hiding individual procedures from showing on the tooth chart. This is useful, for example, if a crown was performed, and then the tooth extracted.

**Trojan:** Added support for single crown percentages. Rebuilt the import logic to behave the same whether doing a single import or running the update process for multiple plans. Gives option of updating benefits. Gives control over note imports. Does not check the box for do not send electronically.

**Minor Changes**
 E-claim CLM01 now uses PatNum instead of ClaimNum so that claims can be looked up more easily. [E-Claims Complexities](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7eclaimscomplexities.html).
 Multiple versions of Setup.exe saved so that program can be installed to specific version more easily.
 .msi available for download using buttons in the Update window.
 Select Patient window, added a filter for subscriber ID.
 In the Production and Income report, it no longer closes window after running a report. Better for large offices trying to run a series.
 Option to default to using procedure date on reports.
 Show PatNum in reports: Outstanding Ins Claims, Aging, procs not billed to ins.
 Routing slip treatment plan show codes, proc descript, and fees.
 Medical 1500 claimform, added ReferringProvName, Preauthorization indicator, removed parentheses from phone numbers.
 Appointment views, added first name.
 Schedule double click, warn user if no permission.
 Added Priority to display fields for Chart module progress notes.
 Employer name in patient edit window allows longer names.
 Sheets: static clinic fields now also work for practice. Added gender.
 Referral phone number fields added to referral letter.
 Limitations override more general limitations.�(this allows CHIP to work by adding a separate limitation for preventive).
 Provider taxonomy code can be overridden.
 eClinicalWorks bridge sends pdfs of TPs and progress notes.