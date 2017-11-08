import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import moment from 'moment';
import 'react-day-picker/lib/style.css';
const DAY_FORMAT = 'DD/MM/YYYY';

class Calendar extends React.Component
{
    state = {selectedDay: null};
    handleDayClick = (selectedDay,{selected}) =>
    {
        this.setState({
            selectedDay:selected ? undefined : selectedDay

        });
    };

        render()
        {
            const {selectedDay} = this.state;
            const formattedDay = selectedDay ? moment(selectedDay).format(DAY_FORMAT) : '';
            const dayPickerProps =
                {
                    enabledOutsideDays: true,
                    modifiers: {monday: {daysOfWeek: [1]}}
                };
            return (
                <div>
                    <DayPickerInput
                        value={formattedDay}
                        onDayChange={this.handleDayClick}
                        format={DAY_FORMAT}
                        placeholder={moment().locale('en').format(DAY_FORMAT)}
                        dayPickerProps={dayPickerProps}
                    />
                    <p>
                        {!selectedDay && 'Pick a day'}
                        {selectedDay && `You chose ${formattedDay}`}
                    </p>
                </div>);
        }
    }
export default Calendar;