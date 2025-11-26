Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Insurance Categories

In the [Main Menu](mainmenu.html), click Setup, Family/Insurance, Insurance Categories.

![](images/insCatsSetup.png)

Insurance categories allow automatic calculations of insurance coverage based on the procedure code.

Note: Do not alter insurance categories without full understanding of what this does. Insurance Categories are global. Changes may affect all plans.

**Coverage Spans**: Insurance categories with specific procedure code ranges according to typical insurance groupings. Categories are used to calculate the actual insurance coverage for specific procedures. The categories that exist correspond to the Category options available when creating [Other Benefits](otherbenefits.html) for an [Insurance Plan](insplan.html). Coverage categories are completely unrelated to procedure code categories.

* Double-click a gray Category row to edit category information. Opens Edit Insurance Categories (see below).
* Double-click a coverage span row to edit. Opens Edit Ins Coverage Spans (see below).
* If a category is a subset of another span, then that category should be lower in the list.
* If an E-Benefit Category is assigned to the Category, this corresponds to a fixed row in [Benefits](benefitinfo.html). These are also used for [Electronic Eligibility and Benefits](ebenefits.html). See Electronic Benefit Categories below.

Categories: Use the buttons to reorganize or create new Coverage Spans.

* **Up**/**Down**: Highlight a gray Category row and click to move the category up or down in the Coverage Spans list.
* **Add**: Click to create a new Category. Opens Edit Insurance Categories (see below).

**Add Span**: Highlight a gray Category row and click to add a procedure code span. Opens Edit Ins Coverage Spans (see below).

**Set to Defaults**: Reverts Coverage Spans list to Open Dental defaults. All customization to categories and procedure code spans will be lost.

## Edit Insurance Categories

Click **Add** to create a new Coverage Span *Category* or double-click and existing gray Category row in the list to edit.

![](images/insCatEdit.png)

**Description**: Category name.

**Default Percent**: Coverage percentage assigned to category when creating a new [Insurance Plan](insplan.html).

* Changing this number only changes the default value for future insurance plans and does not affect existing plans.
* When left blank, the category is not added as a default benefit to new insurance plans.

**Is Hidden**: Remove this category as a selection option on [Edit Benefit](editbenefit.html).

**Electronic Benefit Category**: Corresponds to a fixed row in the Benefits window. Also used for Electronic Eligibility and Benefits. See Electronic Benefit Categories below for additional information.

Click **OK** to save.

## Edit Ins Coverage Spans

Highlight a gray Category row and click **Add Span** to create a new procedure code coverage span, or double-click an existing procedure code coverage span row to edit.

![](images/insCovSpan.png)

**From Code**: Enter the starting procedure code of the coverage span.

**To Code**: Enter the last procedure code of the coverage span.

**Delete**: Remove this coverage span from the category.

Click **OK** to save.

## Electronic Benefit Categories

One of each *Electronic Benefit Category* (E-Benefit Categories) must be assigned to a corresponding *Category*. There can be no duplicates and no missing categories in order to use the [Benefits](benefitinfo.html), Simplified View. If E-Benefit categories are not assigned to categories as described, the [Edit Benefits - Row View](benefitinforowview.html) must be used instead.

E-Benefit Categories correspond to the following fixed rows in Benefits, Simplified view:

* **General**: *No rows*
* **Diagnostic**: Diagnostic (includes x-ray)
* **DiagnosticXRay**: X-Ray (if different)
* **RoutinePreventive**: Routine Preventive
* **Restorative**: Restorative
* **Endodontics**: Endo
* **Periodontics**: Perio
* **OralSurgery**: Oral Surgery
* **Crowns**: Crowns
* **Prosthodontics**: Prosthodontics
* **MaxillofacialProsth**: Maxillofacial Prosth
* **Accident**: Accident
* **Orthodontics**: (Ortho area) Lifetime Max, Percentage, Ortho Through Age
* **Adjunctive**: *No rows*

## Additional Information

Each Category can have unlimited coverage spans of procedure codes attached. The default spans should work for most offices. Adding extra spans does not increase complexity for the staff, as only categories are shown in the Insurance Plan.

Spans simply allow the office to put whatever procedures are needed into each category. A span can be as short as a single code. Spans can be deleted although this will affect patient data if the span includes a patient's procedure (it does not corrupt the data). Changes to spans affect the treatment plans of patients.