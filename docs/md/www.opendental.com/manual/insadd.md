Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Add Insurance

In the [Family Module](family.html) toolbar, click **Add Insurance**.

![](images/insPlanPatSubscriber.png)

## Subscriber

Click **Yes** if the current patient is the plan subscriber. Always enter insurance plan information for the subscriber before separately assigning the plan to non-subscriber family members.

A blank [Insurance Plan](insplan.html) opens if this patient has never been the subscriber on any insurance plan.

If this patient has been the subscriber on prior insurance plan, Select Insurance Plan (see below) opens.

## Non-subscriber

Click **No** if the current patient is not the subscriber for the insurance plan. Select Subscriber opens.

Note: Many insurance carriers have switched to each patient being their own subscriber. In that case, do not enter any non-subscriber family members.

![](images/insplanSubscriber.png)

Double-click the subscriber to select or highlight the subscriber and click OK.

Alternatively, if the subscriber is a non-family member, click **More Patients** to select anyone in the database as the subscriber.

Once a subscriber is selected, if any insurance plan has previously been entered for the subscriber, Select Insurance Plan (see below) opens. If an insurance plan has not previously been entered for the subscriber, a blank Insurance Plan opens instead.

## Select Insurance Plan

All insurance plans for the selected subscriber are displayed. Those marked *not in use* have since been dropped.

![](images/insplanSelectInsPlan.png)

**New Plan**: Click to open a blank insurance plan. Create a brand new plan or use Pick from List to choose from all existing insurance plans in the database.

**OK**: After selecting an insurance plan from the list, click to add to the patient.

**Cancel**: Click to close the window without adding insurance.

Note: Security permission *PatPlanCreate* is used to log an entry when a new patient insurance plan is created.

## Edit Insurance Plan

Once in the [Insurance Plan](insplan.html) window, use the **Pick From List** button to select an existing plan from the [Insurance Plans](insplanlist.html) list.

At a minimum, select the patient's *Relationship to Subscriber*. If the patient is the subscriber, at minimum, the *Subscriber ID* is required.