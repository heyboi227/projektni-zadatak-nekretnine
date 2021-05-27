import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RealEstateService } from '../real-estate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public realEstateService: RealEstateService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    this.realEstateService.filteredRealEstates = this.realEstateService.filterEstates(
      form.value.category,
      form.value.advertType,
      form.value.location,
      form.value.quadrature,
      form.value.price,
    );
    this.router.navigate(['/view']);
  }

}
