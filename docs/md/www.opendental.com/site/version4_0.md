[![Open Dental Software](resources/logo.png)](../index.html)

503-363-5432

☰

* [Home](../index.html)
* [Trial Version](trial.html)
* [Order](order.html)
* [Documentation](documentation.html)
* [Forum](http://opendentalsoft.com/forum/)
* [Contact Us](contact.html)
* [![](resources/iconSearch.gif)](searchSite.html)

# Version 4.0

See [Versions](versions.html)

Beta version released on 2/2/06.
 Production version was never released. Use version 4.1 instead.

Switched to Visual Studio 2005 and .NET 2.0.

**Insurance Coverage Categories:** Previously, no overlapping of procedurecode ranges was allowed. This forced each procedurecode into exactly one category, like preventive. The improvement is to allow overlapping and subcategories. For instance, you can have crowns be a subcategory of major, and percentages can be assigned to either or both. In this example, the crown percentage takes priority over the major percentage.

**Plan Benefits:** Changed format of benefits. Examples of benefits include maximums, deductibles, percentages, fluoride age limit, x-ray frequency, exclusions, limitations, etc. Instead of being columns in the insplan table, each benefit is now a row in a new table. There is no limit to the number of rows. This new organization is much more flexible and powerful. It's also the way electronic benefit information will be coming from carriers as we move to electronic benefit requests.

**Insurance Plan Templating:** More optimizations for offices that have a lot of patients sharing insurance plans. When a change is made to a plan, you now have the option of applying the change to all identical plans. Copies all benefits from original plan, including percentages, maximums, etc.

**Time Cards:** Customizable pay periods added so that you don't have enter the date range each time. Tracks 40 hour workweek, computes overtime, allows adjustments, and prints.

**Chart module:** Right click on multiple selected procedures at once to set complete.

**Appointment Rules:** Enforce preventing certain types of double booking.

**Routing Slips:** For offices without computers in the operatories. Prints patient info, insurance info, today's appointment, and treatment plan all on one sheet. Does this as a batch for all appointments on one day.

**General Accounting:** Includes a chart of accounts and a check register. Intended to replace QuickBooks for small offices.

**New Reporting Framework:** We have included the open source RDL Project with Open Dental. It has been completely integrated and customized to work specifically for Open Dental reports. Over the next few versions, many existing reports and printouts will be gradually rewritten using RDL. This will allow any power user to totally customize any report. It will also allow export to PDF and some significant enhancements to various reports, like grouping and charts.

Enhanced Trophy bridge-Lets you set a specific folder for each patient.
 Dental Eye bridge
 Select patient window has a new grid so you can double click anywhere on a row.
 Set mixed dentition with one click.
 New grid for patient info in Family module.
 Easy Option to hide insurance features in Family module.
 Copy-paste in the Images module. Can be used to duplicate an image or to copy to another family member.
 Medical note added to confirmation list.
 Fixed birthday report for international use.
 Birthday postcards.
 Added Canadian lab fee field to procedures.
 Divorced added.
 Show quadrant letters on claimforms
 Undo billing process. In case something goes wrong during batch billing, you can remove the 'Statement Sent' entries quickly.
 TP procedures should paint on top of existing procedures in tooth chart
 After adding a new family member in Family module, that patient is now selected when switching to another module.
 Jump from Claim Send window directly to the Account of that patient.
 Stick appointment on pinboard directly from the Chart module.
 Right click-copy appointment to pinboard.
 Trojan: Added an update feature so that our Trojan interface can get officially certified (still awaiting certification)