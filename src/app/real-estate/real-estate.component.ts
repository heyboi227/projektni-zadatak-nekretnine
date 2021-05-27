import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RealEstate, RealEstateService } from '../real-estate.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-real-estate',
  templateUrl: './real-estate.component.html',
  styleUrls: ['./real-estate.component.css']
})
export class RealEstateComponent implements OnInit {

  advertForEditing: RealEstate;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public realEstateService: RealEstateService, public userService: UserService) { }

  ngOnInit(): void {
    this.advertForEditing = {
      id: this.data.rEstate.id,
      category: this.data.rEstate.category,
      advertType: this.data.rEstate.advertType,
      title: this.data.rEstate.title,
      location: this.data.rEstate.location,
      description: this.data.rEstate.description,
      imagePath: this.data.rEstate.imagePath,
      isRegistered: this.data.rEstate.isRegistered,
      isOnALot: this.data.rEstate.isOnALot,
      isPermitted: this.data.rEstate.isPermitted,
      createdAt: this.data.rEstate.createdAt,
      price: this.data.rEstate.price,
      quadrature: this.data.rEstate.quadrature,
      numOfRooms: this.data.rEstate.numOfRooms,
      heating: this.data.rEstate.heating,
      numOfFloor: this.data.rEstate.numOfFloor,
      hasElevator: this.data.rEstate.hasElevator,
      hasTerrace: this.data.rEstate.hasTerrace,
      hasParking: this.data.rEstate.hasParking,
      hasCableTv: this.data.rEstate.hasCableTv,
      hasInternet: this.data.rEstate.hasInternet,
      hasPhone: this.data.rEstate.hasPhone,
      hasIntercom: this.data.rEstate.hasIntercom,
      createdBy: this.userService.currentUser.email
    };
  }

  finishEditing(form: NgForm): void {
    this.data.user.email = this.advertForEditing.category;
    this.data.user.password = this.advertForEditing.advertType;
  }

}
