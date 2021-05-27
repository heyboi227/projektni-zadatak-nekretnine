import { Injectable } from '@angular/core';

export interface RealEstate {
  id: number;
  category: "Kuća" | "Stan";
  advertType: "Prodaja" | "Izdavanje";
  title: String;
  location: String;
  description: String;
  imagePath: String;
  isRegistered: boolean;
  isOnALot: boolean;
  isPermitted: boolean;
  createdAt: String;
  price: number;
  quadrature: number;
  numOfRooms: number;
  heating: String;
  numOfFloor: String;
  hasElevator: boolean;
  hasTerrace: boolean;
  hasParking: boolean;
  hasCableTv: boolean;
  hasInternet: boolean;
  hasPhone: boolean;
  hasIntercom: boolean;
  createdBy: String;
}

@Injectable({
  providedIn: 'root'
})
export class RealEstateService {

  filteredRealEstates: Array<RealEstate> = [];

  dummyRealEstateList: Array<RealEstate> = [
    {
      id: 1,
      category: "Kuća",
      advertType: "Prodaja",
      title: "Prelepa kuca na prodaju",
      location: "Karaburma",
      description: "Kuca u samom centru Karaburme, blizu pijace, vrtica, crkve...",
      imagePath: "../assets/kuca1.jpg",
      isRegistered: true,
      isOnALot: true,
      isPermitted: true,
      createdAt: new Date('2021-05-01').toDateString(),
      price: 90000,
      quadrature: 85.70,
      numOfRooms: 3,
      heating: "TA",
      numOfFloor: "1/1",
      hasElevator: false,
      hasTerrace: false,
      hasParking: true,
      hasCableTv: true,
      hasInternet: true,
      hasPhone: true,
      hasIntercom: false,
      createdBy: "test1@test.com"
    },
    {
      id: 2,
      category: "Stan",
      advertType: "Prodaja",
      title: "Stan novogradnja na prodaju",
      location: "Vracar",
      description: "Stan u blizini Kaleniceve pijace, godina izgradnje 2019.",
      imagePath: "../assets/stan1.jpg",
      isRegistered: true,
      isOnALot: false,
      isPermitted: true,
      createdAt: new Date('2021-03-16').toDateString(),
      price: 130000,
      quadrature: 100,
      numOfRooms: 4,
      heating: "Centralno",
      numOfFloor: "2/5",
      hasElevator: true,
      hasTerrace: true,
      hasParking: true,
      hasCableTv: true,
      hasInternet: true,
      hasPhone: true,
      hasIntercom: true,
      createdBy: "test2@test.com"
    },
    {
      id: 3,
      category: "Stan",
      advertType: "Izdavanje",
      title: "Garsonjera na izdavanje",
      location: "Savski Venac",
      description: "Garsonjera blizu Medicinskog fakulteta, idealna za studente.",
      imagePath: "../assets/stan2.jpg",
      isRegistered: true,
      isOnALot: false,
      isPermitted: true,
      createdAt: new Date('2021-02-11').toDateString(),
      price: 200,
      quadrature: 20,
      numOfRooms: 1,
      heating: "TA",
      numOfFloor: "4/6",
      hasElevator: false,
      hasTerrace: false,
      hasParking: false,
      hasCableTv: true,
      hasInternet: true,
      hasPhone: true,
      hasIntercom: false,
      createdBy: "test3@test.com"
    },
    {
      id: 4,
      category: "Kuća",
      advertType: "Prodaja",
      title: "Vikendica pokraj reke",
      location: "Visnjica",
      description: "Kuca idealna za porodicu, u blizini reke, prelepi pejzazi.",
      imagePath: "../assets/kuca2.jpg",
      isRegistered: true,
      isOnALot: true,
      isPermitted: true,
      createdAt: new Date('2021-05-12').toDateString(),
      price: 60000,
      quadrature: 70,
      numOfRooms: 3,
      heating: "TA",
      numOfFloor: "1/1",
      hasElevator: false,
      hasTerrace: true,
      hasParking: true,
      hasCableTv: true,
      hasInternet: true,
      hasPhone: true,
      hasIntercom: false,
      createdBy: "mjeknic@hotmail.com"
    },
    {
      id: 5,
      category: "Stan",
      advertType: "Prodaja",
      title: "Stan u centru grada",
      location: "Stari Grad",
      description: "Stan u centru Knez Mihajlove",
      imagePath: "../assets/stan4.jpg",
      isRegistered: true,
      isOnALot: false,
      isPermitted: true,
      createdAt: new Date('2021-04-14').toDateString(),
      price: 200000,
      quadrature: 100,
      numOfRooms: 4,
      heating: "Centralno grejanje",
      numOfFloor: "6/7",
      hasElevator: true,
      hasTerrace: true,
      hasParking: false,
      hasCableTv: true,
      hasInternet: true,
      hasPhone: true,
      hasIntercom: true,
      createdBy: "mbogo@bogo.com"
    },
    {
      id: 6,
      category: "Kuća",
      advertType: "Izdavanje",
      title: "Kuca na izdavanje povoljno",
      location: "Vozdovac",
      description: "Kuca u blizini Dvanaeste beogradske gimnazije, okruzena zelenilom, prava idila!",
      imagePath: "../assets/kuca3.jpg",
      isRegistered: true,
      isOnALot: true,
      isPermitted: true,
      createdAt: new Date('2021-03-03').toDateString(),
      price: 150000,
      quadrature: 120,
      numOfRooms: 5,
      heating: "Centralno",
      numOfFloor: "1/1",
      hasElevator: false,
      hasTerrace: false,
      hasParking: true,
      hasCableTv: true,
      hasInternet: true,
      hasPhone: true,
      hasIntercom: false,
      createdBy: "test1@test.com"
    },
  ];

  currentRealEstate: RealEstate = this.dummyRealEstateList[0];

  getRealEstates(): RealEstate[] {
    return this.dummyRealEstateList;
  }

  getRealEstate(realEstateTitle: String): RealEstate {
    this.currentRealEstate = this.dummyRealEstateList.find(estateToFind => estateToFind.title == realEstateTitle)!;
    return this.currentRealEstate;
  }

  getRealEstateById(id: number): RealEstate {
    var foundRealEstate: RealEstate
    this.dummyRealEstateList.forEach(rEstate => {
      if (rEstate.id == id) {
        foundRealEstate = rEstate;
      }
    });
    this.currentRealEstate = foundRealEstate;
    return foundRealEstate;
  }

  addAdvert(category: "Kuća" | "Stan",
    advertType: "Prodaja" | "Izdavanje",
    title: String,
    location: String,
    description: String,
    imagePath: String,
    isRegistered: boolean,
    isOnALot: boolean,
    isPermitted: boolean,
    createdAt: String,
    price: number,
    quadrature: number,
    numOfRooms: number,
    heating: String,
    numOfFloor: String,
    hasElevator: boolean,
    hasTerrace: boolean,
    hasParking: boolean,
    hasCableTv: boolean,
    hasInternet: boolean,
    hasPhone: boolean,
    hasIntercom: boolean,
    createdBy: String): RealEstate {

    var maxId: number = 0;
    this.dummyRealEstateList.forEach(rEstate => {
      if (maxId < rEstate.id) {
        maxId = rEstate.id;
      }
    });

    var id = ++maxId;

    var realEstate: RealEstate = {
      id,
      category,
      advertType,
      title,
      location,
      description,
      imagePath,
      isRegistered,
      isOnALot,
      isPermitted,
      createdAt,
      price,
      quadrature,
      numOfRooms,
      heating,
      numOfFloor,
      hasElevator,
      hasTerrace,
      hasParking,
      hasCableTv,
      hasInternet,
      hasPhone,
      hasIntercom,
      createdBy
    };

    this.dummyRealEstateList.push(realEstate);

    this.currentRealEstate = realEstate;

    return realEstate;
  }

  filterEstates(category: String, advertType: String, location: String, quadrature: number, price: number): RealEstate[] {
    return this.dummyRealEstateList.filter(function (element) {
      if (category && advertType && location && quadrature && price) {
        return element.category == category && element.advertType == advertType && element.location == location && element.quadrature >= quadrature && element.price <= price;
      }
      else if (category && advertType && location && quadrature && !price) {
        return element.category == category && element.advertType == advertType && element.location == location && element.quadrature >= quadrature;
      }
      else if (category && advertType && location && !quadrature && price) {
        return element.category == category && element.advertType == advertType && element.location == location && element.price <= price;
      }
      else if (category && advertType && location && !quadrature && !price) {
        return element.category == category && element.advertType == advertType && element.location == location;
      }
      else if (category && advertType && !location && quadrature && price) {
        return element.category == category && element.advertType == advertType && element.quadrature >= quadrature && element.price <= price;
      }
      else if (category && advertType && !location && quadrature && !price) {
        return element.category == category && element.advertType == advertType && element.quadrature >= quadrature;
      }
      else if (category && advertType && !location && !quadrature && price) {
        return element.category == category && element.advertType == advertType && element.price <= price;
      }
      else if (category && advertType && !location && !quadrature && !price) {
        return element.category == category && element.advertType == advertType;
      }
      else if (category && !advertType && location && quadrature && price) {
        return element.category == category && element.location == location && element.quadrature >= quadrature && element.price <= price;
      }
      else if (category && !advertType && location && quadrature && !price) {
        return element.category == category && element.location == location && element.quadrature >= quadrature;
      }
      else if (category && !advertType && location && !quadrature && price) {
        return element.category == category && element.location == location && element.price <= price;
      }
      else if (category && !advertType && location && !quadrature && !price) {
        return element.category == category && element.location == location;
      }
      else if (category && !advertType && !location && quadrature && price) {
        return element.category == category && element.quadrature >= quadrature && element.price <= price;
      }
      else if (category && !advertType && !location && quadrature && !price) {
        return element.category == category && element.quadrature >= quadrature;
      }
      else if (category && !advertType && !location && !quadrature && price) {
        return element.category == category && element.price <= price;
      }
      else if (category && !advertType && !location && !quadrature && !price) {
        return element.category == category;
      }
      else if (!category && advertType && location && quadrature && price) {
        return element.advertType == advertType && element.location == location && element.quadrature >= quadrature && element.price <= price;
      }
      else if (!category && advertType && location && quadrature && !price) {
        return element.advertType == advertType && element.location == location && element.quadrature >= quadrature;
      }
      else if (!category && advertType && location && !quadrature && price) {
        return element.advertType == advertType && element.location == location && element.price <= price;
      }
      else if (!category && advertType && location && !quadrature && !price) {
        return element.advertType == advertType && element.location == location;
      }
      else if (!category && advertType && !location && quadrature && price) {
        return element.advertType == advertType && element.quadrature >= quadrature && element.price <= price;
      }
      else if (!category && advertType && !location && quadrature && !price) {
        return element.advertType == advertType && element.quadrature >= quadrature;
      }
      else if (!category && advertType && !location && !quadrature && price) {
        return element.advertType == advertType && element.price <= price;
      }
      else if (!category && advertType && !location && !quadrature && !price) {
        return element.advertType == advertType;
      }
      else if (!category && !advertType && location && quadrature && price) {
        return element.location == location && element.price >= quadrature && element.price <= price;
      }
      else if (!category && !advertType && location && quadrature && !price) {
        return element.location == location && element.price >= quadrature;
      }
      else if (!category && !advertType && location && !quadrature && price) {
        return element.location == location && element.price <= price;
      }
      else if (!category && !advertType && location && !quadrature && !price) {
        return element.location == location;
      }
      else if (!category && !advertType && !location && quadrature && price) {
        return element.quadrature >= quadrature && element.price <= price;
      }
      else if (!category && !advertType && !location && quadrature && !price) {
        return element.quadrature >= quadrature;
      }
      else if (!category && !advertType && !location && !quadrature && price) {
        return element.price <= price;
      }
      else {
        return [];
      }
    });
  }

  constructor() { }
}
