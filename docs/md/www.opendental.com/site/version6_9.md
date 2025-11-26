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

# Version 6.9

See [Versions](versions.html)

Version 6.9 was released on 2/22/2010

**3D Tooth Chart:** Moved from OpenGL to DirectX for simpler hardware support. Tooth outlines are now antialiased. Veneer graphics added. Primary pulp graphics added (use PostBU paint type). Primary teeth can be selected more easily. Scales better in fullscreen mode. [Graphics](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7graphics.html).

**Graphical Perio Chart:** A graphical version of the perio chart was added. It can be viewed, printed, or saved as an image. [Perio](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7perio.html).

**Clinics:** Added ClinicNum to [PaySplit](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7paysplit.html), [ClaimProc](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7claimprocedure.html), [Adjustment](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7adjustments.html), and [PayPlanCharge](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7paymentplanpatient.html) tables. All existing PaySplit entries have been assigned the clinic of the corresponding Payment. All existing ClaimProc entries have been assigned the clinic of the Procedure, or if no procedure then the Claim. Clinic viewable as column in Account module using [Display Fields](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7displayfields.html). [Provider Income Transfer](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7incometransfer.html) window removed, and instead incorporated into the ordinary [Payment](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7payment.html) window. Daily Prod & Inc report now prints in landscape if using clinics.

**Providers:** A better way to select providers for very large offices was implemented in a variety of windows. Instead of using a list or a dropdown, users can open a large selection window.

**Automation:** An automation framework was added. Users can set up their own actions (3 so far including printing a letter) based on certain trigger events (3 so far including setting procedures complete). More triggers and actions can easily be added as users request. Will allow program to behave differently depending on the preference of the office. [Automation](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7automation.html).

**Insurance Overpaid Report:** To help find situations where the insurance payment plus any writeoff exceeds the procedure fee.

**Minor Changes**
 Bridge to [Mountainside](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7bridgemountainside.html) Software.
The main daily and monthly reports all standardized with the same provider and clinic selection controls.
 Writeoff report now splits out different providers better.
 Appointment views now have a time filter for morning vs. afternoon views. [Appt Views](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7appointmentviews.html).
 Sheet descriptions now show in Progress Notes instead of sheet type.
 Added address to appointment view options.
 Planned appointments can be reordered and the order shows in make appt window.
 Security added to Aging report and A/R report.
 Another Trophy bridge for numbered mode.
 Undo button for recall commlog entries.
 Electronic benefits now has a viewing mode for insurance companies that send message text rather than computer-readable fields. Website links are clickable.
 Birthdate show in appt edit window for eCW.
 Fee schedule import for eCW. [eClinicalWorks](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7bridgeeclinicalworks.html).