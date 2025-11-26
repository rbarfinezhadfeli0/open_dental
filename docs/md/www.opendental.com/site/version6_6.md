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

# Version 6.6

See [Versions](versions.html)

Version 6.6 was released 7/27/09. It includes the following new features:

**Web Service/Middle Tier:** Instead of directly connecting to the database, an enterprise can run a middle tier layer that provides data for the clients. (done, but due to distribution complexity, it will be phased in over the next few weeks rather than being part of the first beta). [Middle Tier](middletier.html)

**Shutdown Workstations:** From any computer, see which other workstations are running, and forcefully shut them all down. Gives users a 15 second warning. [Shutdown Workstations](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7shutdown.html).

**Workstation Update:** Copies files instead of running the Setup.exe. This results in much faster update on each workstation and requires only one mouse click. [Update](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7update.html).

**Update Lockout:** During the update process, all other workstations are locked out and not permitted to connect to the database. This replaces the old strategy of having to separately inform users that it's ok to open the program again. Now, users can just attempt to connect as desired.

**Minor Changes:**
 Bridge to [iCat](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7bridgeicat.html).
 Prevents entry of both Family and Individual benefits until that feature is supported. [Benefits](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7benefitinfo.html).
 Program loads faster.
 Recall list window reorganized to avoid horizontal scroll.
 New patient report is now based on completed procedures instead of first visit date. This is more accurate when new patients cancel their first appointment.