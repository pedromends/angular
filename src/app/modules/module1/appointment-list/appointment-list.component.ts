import { Component, OnInit } from '@angular/core';
import { CalendarServiceService } from 'src/app/services/calendar/calendar-service.service';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';

export interface FormsData {
  type: string;
  title: number;
  details: number;
  date: string;
  time: number;
}

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {

  constructor(
    private calendarService: CalendarServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formsData = this.calendarService.get()
  }

  formsData:any[] = []
  displayedColumns: string[] = ['title', 'type', 'details', 'date', 'time', 'actions'];

  formatDate(date:any){
    return formatDate(date, 'dd-MM-yyyy', 'en');
  }

  edit(a:any){
    this.router.navigate(['/hours-edit'], {queryParams: {date: this.formatDate(a.date)}});
  }

  deleted(a:any) {
    if (confirm("Quer MESMO deletar este registro?") == true) {
      this.calendarService.delete(a)
    }
    this.formsData = this.calendarService.get()
    alert('Deletado com sucesso')
    this.router.navigate(['/'])
  }
}
