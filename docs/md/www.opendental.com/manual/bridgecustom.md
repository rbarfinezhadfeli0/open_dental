Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Custom Bridges

Custom bridges may be added if we do not offer a bridge for a program.

In [Program Links](programlinks.html), click **Add**.

![](images/bridgeCustom.png)

Adding a custom bridge is useful if a user knows how to write a [Program Link Output File](programlinkoutputfile.html). Only add custom bridges for bridges that are not already listed.

Examples for custom bridges:

* Create a bridge to launch Outlook with a path of outlook.exe or using the path to the executable. Add a button for Outlook to a toolbar, or add a command line arguments to the bridge (e.g., [PatNum]), then create a macro in Outlook that recognizes the command line argument and opens up the patient in the contact list.
* Create a bridge to launch Excel.
* Bridge to a custom program. The program could take the PatNum, use queries to load all the other necessary info, and function like an extension of Open Dental.
* Add a Toolbar button or Reports menu option that launches a web browser and loads a URL (e.g., a reporting URL).
  + A URL can be added to *Optional command line arguments*.

For a detailed understanding of each setting, see the Program Link Settings section on [Program Links](programlinks.html).