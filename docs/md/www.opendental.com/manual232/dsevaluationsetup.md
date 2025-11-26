Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Dental School Evaluation Setup

Set up Evaluations to track student progress.

In [Dental School Setup](dsusergroupdefaults.html), click **Evaluations**.

![](images/dsevaluationdefs.png)

Setting up [Dental Student Evaluations](dsevaluations.html) for [Dental Schools](dentalschools.html) includes attaching a grading scale and defining the criteria that will be evaluated. To set up evaluations, the logged-on user must have the *Setup* security permission. The list of evaluation definitions can be filtered by dental course.

**Evaluation Definitions**: Evaluations matching the selected course are listed

**Course**: Select a course from dropdown to filter the Evaluation Definitions list.

**Duplicate**: Highlight an evaluation in the grid and click to create a copy. All details are copied, but the Title is appended with *-copy*.

**Add**: Click to create a new evaluation. Opens the Evaluation Definition Edit window (see below).

## Evaluation Definition Edit

From Evaluation Definitions, click **Add** to create a new Evaluation Definition or double-click an existing Evaluation Definition to edit. The Evaluation Definition Edit window opens.

![](images/dsevaluationdefedit.png)

Enter general evaluation information.

* **Title**: The identifying name of this evaluation.
* **Grading Scale**: Click **[...]** to attach a [Dental School Grading Scale](dsgradingscale.html).
* **Course**: Click **[...]** to attach this evaluation to a [Dental School Course](dscourses.html).

**Criteria Used**: Lists the any criteria currently added to the Evaluation. If using a weighted grading scale, the total points for all criteria is shown at the bottom

* **Up** / **Down** arrows: Select a criterion and click to reorder in the list.
* **Add**: Click to add Evaluation Criterion. Opens the Evaluation Criterion Def Edit window (see below).

Reorder criteria using the ..

## Evaluation Criterion Def Edit

From Evaluation Definition Edit, click **Add** to create new criterion or double-click an existing criterion from the list to edit.

![](images/dsevalcriteria.png)

* **Description**: The identifying name of the criterion.
* **Grading Scale**: The scale that will be applied to this criterion. By default, the scale of the evaluation is selected. Click **[...]** to change. The overall grade calculation is always be based on the evaluation's grading scale.
* **Points**: Only shows if using a weighted grading scale. Enter the maximum number of points possible for this criterion.
* **Is Category Name**: Check this box to use this criterion as a header in the evaluation. No points or grades will be associated with this row; it will be for organization purposes only.

**Delete**: Remove this criterion from the evaluation.

Click  **OK** to save changes.