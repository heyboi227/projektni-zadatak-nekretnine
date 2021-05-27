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

  finishEditing(): void {
    this.data.rEstate.category = this.advertForEditing.category;
    this.data.rEstate.advertType = this.advertForEditing.advertType;
    this.data.rEstate.title = this.advertForEditing.title;
    this.data.rEstate.location = this.advertForEditing.location;
    this.data.rEstate.description = this.advertForEditing.description;
    this.data.rEstate.imagePath = this.advertForEditing.imagePath;
    this.data.rEstate.isRegistered = this.advertForEditing.isRegistered;
    this.data.rEstate.isOnALot = this.advertForEditing.isOnALot;
    this.data.rEstate.isPermitted = this.advertForEditing.isPermitted;
    this.data.rEstate.price = this.advertForEditing.price;
    this.data.rEstate.quadrature = this.advertForEditing.quadrature;
    this.data.rEstate.numOfRooms = this.advertForEditing.numOfRooms;
    this.data.rEstate.heating = this.advertForEditing.heating;
    this.data.rEstate.numOfFloor = this.advertForEditing.numOfFloor;
    this.data.rEstate.hasElevator = this.advertForEditing.hasElevator;
    this.data.rEstate.hasTerrace = this.advertForEditing.hasTerrace;
    this.data.rEstate.hasParking = this.advertForEditing.hasParking;
    this.data.rEstate.hasCableTv = this.advertForEditing.hasCableTv;
    this.data.rEstate.hasInternet = this.advertForEditing.hasInternet;
    this.data.rEstate.hasPhone = this.advertForEditing.hasPhone;
    this.data.rEstate.hasIntercom = this.advertForEditing.hasIntercom
  }

}
