import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { RealEstate, RealEstateService } from '../real-estate.service';
import { RealEstateComponent } from '../real-estate/real-estate.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-real-estate-view',
  templateUrl: './real-estate-view.component.html',
  styleUrls: ['./real-estate-view.component.css']
})
export class RealEstateViewComponent implements OnInit {

  realEstateSource = new MatTableDataSource<RealEstate>(this.realEstateService.dummyRealEstateList);
  realEstateOpened: boolean = false;

  constructor(private realEstateService: RealEstateService, private dialog: MatDialog, public userService: UserService) { }

  ngOnInit(): void {
    this.realEstateSource.data = this.realEstateService.getRealEstates();
  }

  editAdvert(advertId: number): void {
    this.realEstateService.currentRealEstate = this.realEstateService.dummyRealEstateList.find(rEstate => (rEstate.id == advertId));
    this.realEstateOpened = true;

    const profileDialog = this.dialog.open(RealEstateComponent, {
      disableClose: true,
      width: "35vw",
      data: { rEstate: this.realEstateService.getRealEstateById(advertId) }
    });

    profileDialog.afterClosed().subscribe(result => {
      this.realEstateOpened = false;
    })
  }

  deleteAdvert(advertId: number): void {
    console.log(advertId);
  }


}
