Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

EHR Setup Education Resources and Triggers

Education resources are triggered for a patient based on problems, medications, lab results, or tobacco use status. When a patient meets a defined criteria, the resource can be generated, viewed, and printed. See [EHR Educational Resources](ehredresourcesprovide.html).

1. In the [Main Menu](mainmenu.html), click Setup, Chart, [EHR](ehrsetupwindow.html), then click **Educational Resources**.
   ![](images/ehrEdResourcesSetup.gif)

   All existing education resources will list, along with the criteria that triggers it.
2. Click Add, or double click an existing resource to edit.
   ![](images/ehrEdResourcesEdit.gif)
3. Define the condition that must be met to show this resource for a patient.
   * **Problem**: Click [...] to select a problem from the Problem Master List. The associated ICD-9 and SNOMED CT codes will also show.
   * **Medication**: Click [...] to select a medication from the Medication Master List.
   * **Tobacco Use Assessment**: Click [...] to select a SNOMED CT code that matches a tobacco use status entered on the Tobacco Use window.
   * **Lab Results**: Enter the ID, Test Name and Value.
   * **Resource URL**: Enter the path used to access the educational resource. It can be a full URL path (**http://www.example.com**) or a full document path (**C:\resources\resources.doc**).

   In the example above, if a patient's has 'bad breath' in their Problem List, the resource and link will list on the Education Resources window.
4. Click OK to save.

To create more than one reference to the same resource, add separate resources, each with a different condition, and point them to the same URL. For example, reference the same brochure on analgesics when a patient is prescribed ibuprofen, aspirin, or acetaminophen/(paracetamol).