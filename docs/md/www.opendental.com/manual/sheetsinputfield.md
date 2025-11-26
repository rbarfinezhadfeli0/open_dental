Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Sheet Input Field

Use Input Fields to indicate to users or patients where data is entered on a sheet.

In [Edit Sheet Def](sheetsetup.html), click **Input Field**.

![](images/sheetsInputField.png)

Alternatively, double-click an existing Input Field from the Fields list to edit.

Input fields are [Sheet Field Types](sheetsaddelements.html) used to indicate areas where a user will enter data.

They are commonly added to [Patient Form](sheetspatientform.html) and [Medical History](sheetsmedicalhistory.html) sheets where entered data can be imported directly to the database. See: [Import Patient Forms and Medical Histories](patientformsimport.html).

When a new sheet is created and viewed on a device connected to the office database, including office computers, kiosks, and eClipboard tablets, the Input Fields will automatically show any data from the chart that is in an importable field.

Note: Medication, allergy, and problem input fields for Medical History sheets require special setup.

**Field Name**: The available input fields for the selected sheet type. Available fields will change depending on the sheet type.

* Database fields can be imported.
* *misc* can be used to collect information that doesn't correspond to a database field. The entered data cannot be imported, but can be reported in a custom query. Entered data is stored in the sheetfield.fieldvalue column in the sheetfield table. Make sure to enter a corresponding *Reportable Name*. An example of a custom query is at the bottom of this page.

**Reportable Name**: Only shows when *misc* is the selected Field Name. Enter an identifying name for the *misc* field.

**Mobile Caption**: Caption to identify field when viewing sheet on a mobile device.

**Font**: These properties affect the appearance of the text.

* **Name**: We recommend using common fonts (e.g., Times New Roman, Arial, Courier) and testing sheets on a browser and device the office plans to support. Font support is dependent on the browser used to view the [Web Form](../site/webforms.html). If a browser doesn't support a font, a different font will be substituted and this can affect layout of the sheet.
* **Size**: Font point size.
* **Bold** (checked) or not bold (unchecked).

**Growth Behavior**: This attribute can be set when it is not known ahead of time how large the text input will be. Setting the growth behavior causes a field to grow bigger; it will never cause a field to shrink. Click the dropdown to select an option:

* None: No growth behavior.
* Down Local: Typically used for the address because it is not known ahead of time if it will span one or two lines. If the field grows to two lines, the fields immediately below are bumped down (like CityStateZip).
* Down Global: Useful for table style data and letter bodies. Bumps down all fields on the entire sheet that are below the field that's growing.

**X/Y Pos**: Determines the placement of the upper left corner of the field in relation to the x and y axis. X = horizontal. Y = vertical.

**Width**: The width of the input field.

**Height**: The height of the input field. If font size is increased, field height may need to be increased so all text is visible.

**Required**: If checked, the user will be required to input data in the field before saving the form.

**Tab Order**: The order of the field when users press Tab on the generated form. (Hint: Click Tab Order in the right panel to view and edit the tab order of all elements on a sheet.

**Auto Note**: Click **[...]** to choose an [Auto Notes](autonotes.html) template to assign to this Input Field. The Auto Note is automatically inserted when the sheet is generated in the [Fill Sheet](sheetsfillout.html) window. Not functional with mobile apps (e.g., eClipboard) or Web Forms.

## Query Example for a Misc Field

Each time data is input into a reportable name input field, the value is stored in the sheetfield.fieldvalue column in the sheetfield table.

[Query Example](https://opendentalsoft.com:1943/ODQueryList/QueryList.aspx) 1832 can be used to report on misc field data in a data range. See [User Query](queryoverview.html) for more information on running queries.