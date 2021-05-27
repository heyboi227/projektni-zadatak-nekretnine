import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RealEstate, RealEstateService } from '../real-estate.service';

@Component({
  selector: 'app-search-estates',
  templateUrl: './search-estates.component.html',
  styleUrls: ['./search-estates.component.css']
})
export class SearchEstatesComponent implements OnInit {

  realEstateSource = new MatTableDataSource<RealEstate>(this.realEstateService.filteredRealEstates);

  constructor(private realEstateService: RealEstateService) { }

  ngOnInit(): void {
  }

  editAdvert(advertId: number): void {
    console.log(advertId);
  }

  deleteAdvert(advertId: number): void {
    console.log(advertId);
  }

}
