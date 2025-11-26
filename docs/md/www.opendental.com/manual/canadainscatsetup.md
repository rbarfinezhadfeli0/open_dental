Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Canada Insurance Categories

Canadian insurance categories allow automatic calculations of insurance coverage based on the procedure code.

For [Canada](canada.html) users, in the [Main Menu](mainmenu.html), click Setup, Family/Insurance, Insurance Categories.

![](images/canadaInsCat.png)

Note:

* We do not recommend altering insurance categories. Changes affect benefit information for all [Canada Insurance Plans](canadainsplan.html).
* The insurance categories above are the recommended setup for Canada.
* If spans contain Part A, Part B, Part C, and Endo, convert to the recommended setup. See Convert Four-Part Insurance Categories to Default Insurance Categories below.

**Coverage Spans Grid**: Displays the currently set categories and spans.

**Categories**: Coverage categories have specific procedure code spans attached according to typical insurance groupings. Categories are used to calculate the actual insurance coverage for specific procedures.

* **Up / Down Arrows**: Highlight a category, then click an arrow to reorder it.
  + The General category should be at the top, because it keeps track of annual maximums for all patients.
  + If a category is a subset of another span, then that category should be lower in the list.
* **Add**: Click to add a new category. See Add Category below.

**Add Span**: Click to add a new coverage span. See Add Spans below.

* Each coverage category can have unlimited spans of procedure codes attached. The default spans should work for most offices. Adding extra spans does not increase complexity for the staff. They still only see the coverage categories set up. Spans simply allow whatever procedures are needed into each category. A span can be as short as a single code. Spans can be deleted although this affects patient data if the span includes a patient's procedure (it does not corrupt the data). Changes to spans affect the treatment plans of multiple patients.

**Set to Defaults**: Update existing spans in categories with an E-Benefit Categories assigned. The database must set to *English (Canada)*. All E-Benefit Categories must be represented by an non-hidden Insurance Category in the list for the button to work.

## Add Category

Click **Add**, or double-click a category row to edit.

![](images/insCatEditCan.png)

* **Description**: Name of category.
* **Default Percent**: The percentage default for new insurance plans. Changing this number only changes the default value for future insurance plans. It does not affect any patient records.
* **Is Hidden**: Check to hide this category.
* **Electronic Benefit Category**: There must be exactly one of each E-Benefit Category. There can be no duplicates and no missing categories. Coverage categories are completely unrelated to procedure code categories in [Definitions](definitions.html).

## Add Spans

Click **Add Span**, or double-click a coverage span row to edit.

![](images/canadaInsCatCovSpan.png)

**From Code / To Code**: Enter the procedure codes for the span. Open Dental warns users if the code is not in the correct CDA format (at least the first 5 digits), but the codes can still be used if needed.

## Convert Four-Part Insurance Categories to Default Insurance Categories

Older Open Dental installations may be using a Four-Part setup. Follow these instructions to convert to the recommended setup.

![](images/canadaInsCat4part.gif)

1. Rename *Part C* category to *Ortho*.
2. Add new categories to match the recommended setup. Do not add Endo and Ortho because they already exist. Do not change Part A or Part B. For each new category, select the electronic benefit category and enter a default percentage.
   * The Category and E-Benefit Category must match exactly.
   * The default category percentages affect all patients. Do not change any default percentages from their old values unless certain they were wrong. Use the percentage values from Part A and Part B for reference.![](images/canadaInsCat4partTable.gif)
3. Reorder categories to match the recommended setup. Place Part A and Part B categories between General and Diagnostic. The first 4 categories must be in the following order:
   * General
   * Part A
   * Part B
   * Diagnostic
4. Manually change the code spans for each category to match the recommended setup. Do not modify existing coverage spans for Part A or Part B.
5. Hide the Part A and Part B categories.

The resulting insurance category spans will look like this:

![](images/canadaInsCatConverted.gif)

As new insurance plans are added, they will only use the new insurance categories. Part A and Part B categories will not be used.

Existing insurance plans will continue to use the old insurance categories and percentages unless the plans are manually edited. To do so, we recommend changing insurance plan Benefit Information via the [Insurance Plans](insplanlist.html) (Lists, Insurance Plans) so all subscribers are affected by the change.