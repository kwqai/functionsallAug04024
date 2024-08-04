function ScheduleAppointment(patientName: string, appointmentDate: string, reason: string): string {
    return "Appointment scheduled for " + patientName + " on " + appointmentDate + " for " + reason;
}

// Example usage of the function
let appointment1 = ScheduleAppointment("John Doe", "2024-04-01", "Routine check-up");
console.log(appointment1);

let appointment2 = ScheduleAppointment("Jane Smith", "2024-04-03", "Dental cleaning");
console.log(appointment2);
