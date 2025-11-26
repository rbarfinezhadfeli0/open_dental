Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Sheet ComboBox

Combo boxes are Sheet Field Types that allow users to select a single option from a pick list.

In [Edit Sheet Def](sheetsetup.html), click **ComboBox**.

![](images/sheetsComboBoxSetup.png)

Alternatively, double-click an existing combo box from the Sheet Def Edit window to edit it.

![](images/sheetsComboBox.gif)

Users will click the combo box to view options, then click an option to select it.

The list on the right indicates the current options in the combo box.

**X/Y Pos**: Determines the position of the upper left corner of the combo box in relation to the x and y axis. X = horizontal. Y = vertical.

**Width/Height**: The size of the combo box.

**Tab Order**: The order of the combo box when users press Tab on the generated form.

**Reportable Name**: A unique name tied to the combo box. Used to report this data in custom queries.

**Mobile Caption**: Caption to identify field in a Mobile Sheet.

**Option**: Type in the box and and click **Add** to the list of available response for this combo box. See Add a Combo Box below.

## Add a Combo Box

There are two different types of combo boxes that can be added.

**Combo Box with custom options**:

1. Click **ComboBox**.
2. Select *General* as the combo box type.
3. Add options to the combo box.

* Type an option into the Option box.
* Click **Add** to add an item to the list on the right.* Use the **Remove** button to delete options.
  * Use the **Up**/**Down** arrows to reorder options.

4. Change the width and height of the combo box so that it fits all text.
5. Click **OK** to add the combo box to the sheet.
6. Move the combo box to the correct location on the sheet.

**Combo Box with preset options**:

1. Click **ComboBox**.
2. Select a type other than *General* (e.g., *Gender Identity*, *Race*, etc) as the combo box type.
3. Change the width and height of the combo box so that it fits all text.
4. Click **OK**.
5. Add additional options to the combo box as needed.

* *Gender Identity* and *Sexual Orientation* have preset options that cannot be changed.
* *Patient Race*, *Patient Grade*, and *Urgency* will fill the list with preset options. These options can be added to.

+ Type an option into the Option box.
+ Click **Add** to add an item to the list on the right.

6. Click **OK** to add the combo box to the sheet.
7. Move the combo box to the correct location on the sheet.

After the combo box is added to a sheet, users can double-click an existing combo box field to edit options. Changing the combo box type will clear out any existing options.