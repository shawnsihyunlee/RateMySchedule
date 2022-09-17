//my life's work is in this function pls -shawn
export function parseScheduleData(data){
    let e = [];
    let counter = 0;
    
    for(let course of data){
    
      for(let i = 0; i<course["recurrenceRule"]["options"]["byweekday"].length; i++){
        let courseObj = {};
        courseObj.id = counter++;
        courseObj.text = course["course"]["no"] + ": " + course["course"]["name"];
        courseObj.start = "2022-09-12" + course["dtstart"].substring(10, 19);
        courseObj.end = "2022-09-12" + course["dtend"].substring(10, 19);
        courseObj.resource = String(course["recurrenceRule"]["options"]["byweekday"][i]);
        courseObj.barColor = "#fcb711";
        e.push(courseObj);
      }
    }
    return e;
}


