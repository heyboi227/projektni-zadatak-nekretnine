import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RealEstateService } from '../real-estate.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-addadvert',
  templateUrl: './addadvert.component.html',
  styleUrls: ['./addadvert.component.css']
})
export class AddadvertComponent implements OnInit {

  errorExists = false;
  errorText = "";

  constructor(private realEstateService: RealEstateService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {

    if (!this.realEstateService.getRealEstate(form.value.title)) {

      this.errorExists = false;

      form.value.imagePath = "../assets/" + (<HTMLInputElement>document.querySelector("#file-input")).files[0].name;

      this.realEstateService.addAdvert(form.value.category,
        form.value.advertType,
        form.value.title,
        form.value.location,
        form.value.description,
        form.value.imagePath,
        form.value.isRegistered,
        form.value.isOnALot,
        form.value.isPermitted,
        new Date().toDateString(),
        form.value.price,
        form.value.quadrature,
        form.value.numOfRooms,
        form.value.heating,
        form.value.numOfFloor,
        form.value.hasElevator,
        form.value.hasTerrace,
        form.value.hasParking,
        form.value.hasCableTv,
        form.value.hasInternet,
        form.value.hasPhone,
        form.value.hasIntercom,
        this.userService.currentUser.email);

      sessionStorage.setItem("currentRealEstate", form.value.title);

      this.router.navigate(['/view']);
      console.log(this.realEstateService.dummyRealEstateList);

    } else {

      this.errorExists = true;

      this.errorText = "Oglas sa zadatim imenom već postoji."

    }

  }

}
