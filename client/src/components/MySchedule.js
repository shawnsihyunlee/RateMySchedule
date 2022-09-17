import React, {Component} from 'react';
import {DayPilot, DayPilotCalendar} from "@daypilot/daypilot-lite-react";

const styles = {
  wrap: {
    display: "flex"
  },
  left: {
    marginRight: "10px"
  },
  main: {
    flexGrow: "1"
  }
};



class Calendar extends Component {
    constructor(props) {
        super(props);
        this.calendarRef = React.createRef();
        this.state = {

        heightSpec: "BusinessHours",
        viewType: "Resources",
        durationBarVisible: false,
        
        };
    }

    get calendar() {
      return this.calendarRef.current.control;
    }

    //THIS IS THE IMPORTANT FUNCTION FUCK YES I FOUND THIS AT 8:30AM -shawn

    loadCalendarData(){
      const startDate = "2022-09-12";

      const columns = [
        {name: "Monday", id: "0"},
        {name: "Tuesday", id: "1"},
        {name: "Wednesday", id: "2"},
        {name: "Thursday", id: "3"},
        {name: "Friday", id: "4"},
      ];

      const events = this.props.events;

    this.calendar.update({startDate, columns, events});
  }

    

  componentDidMount() {
    this.loadCalendarData();
  }

  render() {
    return (
      <div style={styles.wrap}>
        <div style={styles.left}>
        </div>
        <div style={styles.main}>
          <DayPilotCalendar
            {...this.state}
            ref={this.calendarRef}
          />
        </div>
      </div>
    );
  }
}

export default Calendar;