import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { RealEstate, RealEstateService } from '../real-estate.service';
import { RealEstateComponent } from '../real-estate/real-estate.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-search-estates',
  templateUrl: './search-estates.component.html',
  styleUrls: ['./search-estates.component.css']
})
export class SearchEstatesComponent implements OnInit {

  realEstateSource = new MatTableDataSource<RealEstate>(this.realEstateService.filteredRealEstates);
  realEstateOpened: boolean = false;

  constructor(private realEstateService: RealEstateService, private dialog: MatDialog, public userService: UserService) { }

  ngOnInit(): void {
  }

  editAdvert(advertId: number): void {
    this.realEstateService.currentRealEstate = this.realEstateService.dummyRealEstateList.find(rEstate => (rEstate.id == advertId));
    this.realEstateOpened = true;

    const profileDialog = this.dialog.open(RealEstateComponent, {
      disableClose: false,
      width: "35vw",
      data: { rEstate: this.realEstateService.getRealEstateById(advertId) }
    });

    profileDialog.afterClosed().subscribe(result => {
      this.realEstateOpened = false;
    })
  }

  deleteAdvert(advert: RealEstate): void {
    var adIndex = this.realEstateService.dummyRealEstateList.indexOf(advert);
    if (adIndex > -1 && confirm("Da li ste sigurni da želite da obrišete ovaj oglas?")) {
      this.realEstateService.dummyRealEstateList.splice(adIndex, 1);
    }
  }

}
