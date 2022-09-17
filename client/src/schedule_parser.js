
const ical = require('cal-parser');
const fs = require("fs");

function parseSchedule () {
    
    const MY_ICAL_STRING = fs.readFileSync("./schedules/asdf_schedule.ics", "utf-8");
    
    let parsedCal = ical.parseString(MY_ICAL_STRING);
    let summary;
    
    // reformatting objects
    for (let i = 0; i < parsedCal.events.length; i++) {
        let curr_obj = parsedCal.events[i];
        summary = curr_obj.description.value;
        let parts = summary.split(" :: ");
        let instructors = parts[1].split(" ").slice(3, -1);
        curr_obj.course = {};
        curr_obj.course.name = parts[0];
        curr_obj.course.no = parts[1].slice(0, 5);
        curr_obj.course.section = parts[1].split(" ")[1];
        curr_obj.course.instructor = instructors;
        let building = curr_obj.location.value.split("- ")[0]
        let room = curr_obj.location.value.split("- ")[1]
        curr_obj.location = {"building" : building, "room" : room}
        delete curr_obj.dtstamp
        delete curr_obj.description;
        delete curr_obj.summary;
        // delete curr_obj.recurrenceRule;
        curr_obj.dtstart = curr_obj.dtstart.value;
        curr_obj.dtend = curr_obj.dtend.value;
    }

    // console.log("Cal Object: \n", parsedCal); // for calendar metadata
    // console.log("Data Object: \n", parsedCal.calendarData); // for calendar metadata
    console.log("Event Object: \n", parsedCal.events);       // for calendar events
    
    return parsedCal;
}
const cal = JSON.stringify(parseSchedule().events);

fs.writeFile('./assets/scheduleJSONs/gg_user.json', cal, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});

module.exports = { parseSchedule };