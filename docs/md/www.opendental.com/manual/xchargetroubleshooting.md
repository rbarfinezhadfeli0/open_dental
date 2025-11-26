Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

XCharge Troubleshooting

Below are some troubleshooting steps when using [XCharge (OpenEdge)](xcharge.html).

Note: XCharge was a previous option available through Global Payments Integrated. Existing XCharge installations can still be used, though Global Payments Integrated no longer supports it. Users should contact Global Payments Integrated to switch to EdgeExpress, an updated payment processing option.

**Problem: After the XCharge window is closed, the wrong information goes into the Payment window in Open Dental. For example patient A paid $200 using XCharge and when going to patient B account to make a $150 patient payment it shows patient A's $200 payment.**

The correct amount is posting to the accounts, the textual information coming back is from the previous transaction. Do not re-run cards without looking in the XCharge reports.

This is happening because of a problem with the text file used in the bridge. The text file is located in the same place as the Program Path in the XCharge Setup window [XCharge Setup](xchargesetup.html). The typical path to the text file is: **C:\Program Files\X-Charge\XResult.txt**. Look for that file.

1. If using the new version of XCharge (requires a username and password) delete the information in the XResult.txt but not the file itself. Otherwise Open Dental will not be able to re-create this TXT file the next time it is run.
2. If using an older version of XCharge that does not require a username and password, the file may be deleted. Make sure the user has full security access to the file's folder.

**Problem: When making a patient payment in the Account module, you are required to enter your username and password every time you go to process it.**

Check to make sure you have the correct username and password entered in the XCharge Setup window. If that is not the issue, reach out to XCharge. They installed the standalone version instead of the integrated version.

**Problem: Receive error "Could not delete XResult.txt file. It may be in use by another program, flagged as read only, or you might not have sufficient permissions."**

Run Open Dental as the administrator.

**Problem: Something went wrong during a claim payment transaction using a prepaid insurance card ([Finalize Insurance Payment](claimpayfinalize.html)). How can I determine if the transaction was successful?**

In XCharge reports, search for transactions with a receipt number of Prepaid, which indicate they are payments using a prepaid insurance card.