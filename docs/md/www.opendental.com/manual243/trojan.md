Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Trojan Bridge

Trojan provides insurance benefit information.

In [Program Links](programlinks.html), double-click on **Trojan**.

![](images/bridgeTrojan.gif)

The benefit information is stored on a computer in the dental office and is frequently updated through the Internet. Instead of a direct integration with their database, we have chosen a simpler integration, using an intermediate standalone Trojan program. Website: [www.trojanonline.com](http://www.trojanonline.com/).

## Using Trojan

In Trojan:

1. Look up an insurance plan.
2. Click Export Plan at the lower right to export all the plan information to a text file which Open Dental can import.

In Open Dental:

1. On the [Insurance Plan](insplan.html), click Trojan to fill the insurance plan with the exported data from Trojan.
   ![](images/trojanButton.gif)

   A copy of the data will be stored.

   Each plan is tracked by a TrojanID which shows in the ID box. As long as you leave the TrojanID in the box, the plan will continue to be updated every time Trojan releases a new update. The update to Open Dental is performed after you install your new Trojan data update. Each time you start up Open Dental, it checks for changes in Trojan.
2. To view benefit notes, click Trojan/IAP Note.
   ![](images/trojanBenefitNotes.gif)

## Technical Information

* Trojan uses a registry to store the path to your Trojan files. The path to that registry should be **HKEY\_LOCAL\_MACHINE\SOFTWARE\Trojan**. The registry key values contain INSTALLDIR.
* If you are getting a message that says your Trojan has been updated, locate the ALLPLANS.txt file in the INSTALLDIR path and move the ALLPLANS.txt file to a new directory.