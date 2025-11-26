Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Sheet Output Text Field

Output Text fields are Sheet Field Types that pull information from the database when filling out the form.

In [Edit Sheet Def](sheetsetup.html), click **Output Text**.

![](images/sheetFieldOutput.png)

Alternatively, double-click an existing Output Text field from the Fields list to edit.

For example, the *today.DayDate* output field will auto-populate with the current date or the *PracticeTitle* field will populate with the practice name. If the sheet type is previewed prior to printing, users can edit output text on the generated form.

**Field Name**: A list of available output fields for the sheet type.

For a list of all output text fields and their definitions, see [Output Text Field Names](outputtextfields.html).

**Font**: These properties affect the appearance of the text.

* **Name**: Select the font to use for the for the Output Text Field. We recommend using common fonts (e.g., Times New Roman, Arial, Courier) and testing sheets on a device the office plans to support. Font support is dependent on the device used to view the web form. If a device doesn't support a font, a different font will be substituted and this can affect layout of the sheet.
* **Size**: Font point size.
* **Bold**: Check to mark the text as bold.
* **Color**: Single click the color block to Select Text Color.
* **Align**: The position of text within the field (right, left, center).

**Growth Behavior**: This attribute can be set when it is not known ahead of time how large the output text will be. Setting the growth behavior causes a field to grow bigger; it will never cause a field to shrink. Click the dropdown to select an option:

* **None**: No growth behavior.
* **Down Local**: Typically used for the address because it is not known ahead of time if it will span one or two lines. If the field grows to two lines, the fields immediately below are bumped down (like CityStateZip).
* **Down Global**: Useful for table style data and letter bodies. Bumps down all fields on the entire sheet that are below the field that's growing.

**X/Y Pos:** Determines the placement of the upper left corner of the output field in relation to the x and y axis. X = horizontal, Y = vertical.

**Width**: The width of the output field. If the text output exceeds the width, the text may be cut off, unless the height is tall enough for text to span multiple lines.

**Height**: The height of the output field. If font size is large, the height may need adjusted so all text is visible.

**Lock Text Editing:** When checked, the output text fields cannot be edited when the form is open (e.g., by a patient).