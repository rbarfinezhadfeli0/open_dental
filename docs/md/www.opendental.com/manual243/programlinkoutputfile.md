Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Program Link Output File

Output files are used to create custom program bridges.

In a [Custom Program Bridge](bridgecustom.html), click **Output File**.

![](images/customBridgeOutputFile.png)

Use this window to build a custom output file (TXT or INI). This requires technical knowledge of output file builds and should only be attempted by those who know how. Do not create an output file for bridges that do not require one.

**Output File Path:** Click [...] to select the path to the output file on the computer.

**Output Template:** Enter the body of the output file.

**Replacements:** Click to insert replacement fields that map data fields in the bridge output file to patient data fields.

![](images/bridgeCustomReplacement.png)

Select field then click OK to insert field at cursor. Example: PATID (bridge) maps to [PatNum] in Open Dental.

Note: Always select a patient in Open Dental prior to launching a bridge.