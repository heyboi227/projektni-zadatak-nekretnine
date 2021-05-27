import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RealEstate, RealEstateService } from '../real-estate.service';

@Component({
  selector: 'app-real-estate-view',
  templateUrl: './real-estate-view.component.html',
  styleUrls: ['./real-estate-view.component.css']
})
export class RealEstateViewComponent implements OnInit {

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
