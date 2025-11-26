Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Auto Codes

Auto Codes work behind the scenes to insert and validate the correct procedure code depending on a variety of conditions.

In the [Main Menu](mainmenu.html), click Setup, Auto Codes.

![](images/autoCodes.png)

![](images/YouTube_PlayButton_15px.png) See our video: [Procedure Buttons, Quick Buttons, and Auto Codes Webinar](https://www.youtube.com/watch?v=QmAf8Ux0f-I).

Auto Codes can be associated with [Procedure Buttons](procedurebuttons.html). Open Dental comes preloaded with many Auto Codes, but additional can be created.

Examples:

* When a primary tooth and two surfaces is selected, then a user clicks the Amalgam procedure button, the Auto Code inserts the correct procedure code.
* While [Entering Treatment](entertreatment.html), if a user selects three surfaces for a two surface procedure code, Open Dental recognizes the mismatch and prompts the user to change to the recommended three-surface procedure code.

To require that staff accept Auto Code suggestions, enable *Require use of suggested auto codes* in [Preferences](preferences.html).

To reset Auto Codes to the default settings, see [Procedure Code Tools](procedurecodetools.html).

**Add**: Create a new Auto Code. Opens Edit Auto Code. See Edit Auto Code section below for more information.

**Delete**: Highlight an existing Auto Code and click to permanently remove.

## Edit Auto Code

Double-click an existing Auto Code from the Auto Codes list to edit.

![](images/autoCodeEdit.png)

**Description**: Name of the Auto Code.

**Hidden**: Remove this Auto Code as available in [Procedure Button Edit](procedurebuttonedit.html) Procedure Button Edit.

**Do not check codes in the procedure edit window, but only use this Auto Code for procedure buttons**: If checked, this Auto Code is only used when entering treatment using a Procedure Button. It is not used for validating procedure codes entered on the [Procedure](procedureedit.html) Info window or charted using any other method.

**Add**: Create a new Auto Code Item. See Edit Auto Code Item section below for additional details.

**Delete**: Highlight an Auto Code Item in the list, then click to remove it from the Auto Code.

All possible conditions must be defined for the Auto Code to work correctly.

Click **OK** to save changes.

## Edit Auto Code Item

In the Edit Auto Code window, click **Add** to open Edit Auto Code Item to set up additional Procedure Codes and conditions for an Auto Code. Double-click an existing item row to edit.

![](images/autoCodeItem.png)

**Code**: Click **Change** to open [Procedure Codes](procedurecodes.html) list and select a Procedure Code to attach.

**Conditions**: Highlight conditions to trigger the procedure code. Available conditions are:

* Anterior: Grouped with Posterior. Can also be grouped with Molar and Premolar.
* Posterior: Grouped with Anterior.
* Premolar: Grouped with Molar and Anterior.
* Molar: Grouped with Premolar and Anterior.
* One\_Surf: Grouped with other Surfaces (e.g., Two\_Surf, Three\_Surf, etc.)
* Two\_Surf: Grouped with other Surfaces (e.g., One\_Surf, Three\_Surf, etc.)
* Three\_Surf: Grouped with other Surfaces (e.g., One\_Surf, Two\_Surf, etc.)
* Four\_Surf: Grouped with other Surfaces (e.g., One\_Surf, Two\_Surf, etc.)
* Five\_Surf: Grouped with other Surfaces (e.g., One\_Surf, Two\_Surf, etc.)
* First: Grouped with Each Additional.
* Each Additional: Grouped with First.
* Maxillary: Grouped with Mandibular.
* Mandibular: Grouped with Maxillary.
* Primary: Grouped with Permanent.
* Permanent: Grouped with Primary
* Pontic: Grouped with Retainer. Used if a tooth is missing. Mark teeth as missing from the Chart Module [Missing/Primary Teeth](missingteeth.html) tab. Teeth with treatment planned extractions are also considered Pontic.
* Retainer: Grouped with Pontic. Used if a tooth is not missing.
* AgeOver18: This condition is not functional and should not be used.

## Tips

Users may receive an error when attempting to save the Auto Code if the conditions selected for Auto Code Items do not match or all conditions from a category are not used.

Multiple conditions from the same category grouping should not be assigned to a single Auto Code Item, as it is not possible for multiple conditions to be met simultaneously. If the same code is used for multiple conditions in the Auto Code, create separate Auto Code Items (e.g., D2394 is used for both Four\_Surf and Five\_Surf).

Most of the conditions are based on tooth number.

* For example, for tooth number 5, the Anterior condition is false, the Posterior condition is true, and the Premolar condition is true.
* First and Each Additional generally only apply when multiple teeth are selected on the Graphical Tooth Chart and a user clicks a Procedure Button (e.g., for a PA). The first one meets the First condition, and the remaining will be Each Additional.
* For Pontic and Retainer, a tooth is considered missing if it has been marked as missing in the [Chart Module](chart.html) (an extraction or using [Missing/Primary Teeth](missingteeth.html)), this includes a tooth where an implant may be placed. So the Pontic condition is met if the tooth is missing, and the Retainer condition is met if the tooth is not missing.