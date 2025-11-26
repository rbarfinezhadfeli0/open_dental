Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Production Totals

Daily gross and net production, as well as a daily goal, can be displayed in the Appointments Module.

In the [Appointments Module](appointments.html), at the right, production and daily production goals can be viewed.

![](images/dailyproduction.png)

**Daily Prod**: By default, the value reflects the daily production sum for all procedures attached to appointments where at least one provider has a provider bar showing in the appointment view. Uses provider on the appointment, rather than provider on each procedure.

* To instead calculate the sum for all procedures scheduled in operatories that show in the appointment view, enable the *Appointment Module production use operatories* preference.
* To calculate adjustments in the net production total, enable to *Add daily adjustments to net production* preference.
* If the gross and net amounts are the same, only one number shows.
* If there are two numbers displayed, the first number is the gross (sum) of the procedure fees. The second number is the net after subtracting all write-offs and write-off estimates.
* The net production amount reflects write-off estimates. If the write-off estimate changes, the net production will update to reflect this. Once an insurance claim is received the net production total reflects the actual write-off.

**Daily Goal**: View the total daily production goal for all providers scheduled in the appointment view. The value is calculated multiplying the hourly production goal by the hours scheduled for the provider. Hourly goals are entered on the [Edit Provider](providerseditwindow.html) window.

Note:

* To view actual production numbers, see [Production and Income Reports](reportprodinc.html).
* Net production can be greater than gross production if a patient in the appointment view has received a refund

## Production by Operatory

Hover over an operatory header, or single-click on the header to view production totals for the operatory.

![](images/dailyProductionOperatory.png)

## Setup

To calculate *Daily Prod*, *Daily Goal*, and *Production by Operatory* values:

* *Production* or *NetProduction* must be added to the [Appointment View](appointmentviews.html).
* Providers must be associated to the appointment view.
* Providers must be scheduled in an operatory.
* If using Clinics, appointments must be assigned to the clinic selected.

[Preferences](preferences.html) that affect production and production goals:

* *Appointment Module production use operatories*: Calculate the value based on the sum for all procedures scheduled in operatories that show in the appointment view. This preference ignores any providers on the appointments.
* *Add daily adjustments to net production*: Controls whether or not adjustments are included in the net production total. The net production on appointments may not equal net production total if adjustments are not attached to procedures.