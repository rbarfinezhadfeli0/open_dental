Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Annoyances

In our [Previous Versions](https://opendentalsoft.com:1943/ODBugTracker/PreviousVersions.aspx) page, we try to list out all confirmed bugs. But sometimes, we get a bug that turns out to only be a minor annoyance rather than an actual bug. In some cases, we do not plan on fixing the annoyance for one reason or another. It could be hard to duplicate, impossible to fix, or be very expensive to fix with no real benefit. We list those annoyances here to avoid having them resubmitted as bugs. We list job numbers just for our internal use.

* At the bottom of the Zoom page, there is a section for Window Resizing that describes some annoyances and limitations with our current zoom technology.
* Some grids can temporarily go black. It seems to happen when database is being accessed in the background. Examples include Billing and Task List. In Chart Module, it happens when typing into the search field under the show tab. We cannot duplicate this in a test environment. Job 23166.
* The [Fill Sheet](0_sheets.html) window is slow if there are many items on it. It's complex to fix, but we plan on doing so eventually.
* [Graphic Reports](0_reports.html) and related windows do not include a ? to access the associated manual page and FAQs.
* Fonts may vary slightly between windows. The old font was MS Sans Serif 8.25. The new font is Segoe UI 8.6, as recommended by Microsoft. The two fonts look very similar, but the new one can be slightly wider. The new font is gradually replacing the old one, but both fonts may coexist indefinitely.
* Sometimes, when text is highlighted in a text box, the copy and cut options are unavailable when right-clicking outside of the highlighted area. This is normal Microsoft behavior, as would be found in any other product like Word, but older versions of Open Dental used to behave differently.
* Previously, a user could click a button, hold the click, and move the mouse away without triggering an action. Now, actions are triggered immediately when clicked in some windows.
* In a mount, drawings do not flip or rotate with the rest of the image. Mounts should always be organized prior to any drawing. For single images, drawings will move with the image when flipping, rotating, or cropping. (Fixed in 25.3.30)
* Using undo after selecting a spelling suggestion may cause some misspelled words to no longer show suggested corrections (was fixed in 25.2).
* In the Imaging Module, when viewing an image, zoom gets reset too frequently.
* When using two monitors and the Windows task bar is hidden on the second monitor, and Open Dental is full-screen, unable to access task bar sometimes.
* In the Change Password window, when the Show checkbox is checked, the cursor is forced to the beginning of the New Password text box.
* When printing from some areas of Open Dental, a page range can be entered but is not supported. In 25.4 and greater, these unsupported page range fields are disabled.
* In the Text Messaging window, Conversation area, text messages with too many characters can cause messages to be cut off, and certain Zoom settings can cause text cutoffs or blank tails. (Fixed in 25.4)
* In various prompts, the Yes/No or OK/Cancel buttons were not scaling with Zoom. (Fixed in 25.4)