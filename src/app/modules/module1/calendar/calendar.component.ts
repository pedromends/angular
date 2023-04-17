import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CalendarServiceService } from 'src/app/services/calendar/calendar-service.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor(private calendarService: CalendarServiceService) { }

  ngOnInit(): void {
  }

  public form: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    type_meeting: new FormControl(null, [Validators.required]),
    details: new FormControl(null, [Validators.required]),
    date: new FormControl(null, [Validators.required]),
    time: new FormControl(null, [Validators.required]),
  });

  public save(){

    this.calendarService.post(this.form.value)
    alert('Saved successfully')

    this.form.get('title')?.setValue('')
    this.form.get('type_meeting')?.setValue('')
    this.form.get('details')?.setValue('')
    this.form.get('date')?.setValue('')
    this.form.get('time')?.setValue('')
  }

  public update(data:any){
    console.log(this.form.value)
    this.calendarService.put(this.form.value)
  }

  formatDate(date:any){
    return formatDate(date, 'yyyy-MM-dd', 'en');
  }
}
