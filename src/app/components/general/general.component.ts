import {Component, OnInit} from '@angular/core';

export const priceManufacturers = {
  classic: 680,
  premium: 840,
  evolution: 990,
  teqtum_km: 2790,
  teqtum_euro: 2890,
  lumfer: 1890,
  cold_stretch: 1410,
  d_premium: 3390
}

export const priceWork = {
  priceAngle: 290,
  preiceLamp: 310,
  priceLuster: 450
}

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  facture = 'Матовая'
  manufacturer = 680
  area: number = 0
  angles: number = 0
  lamps: number = 0
  lusters: number = 0
  price: any

  ngOnInit() {
    this.price = priceManufacturers
  }

  get result() {
    return this.manufacturer * this.area
      + (this.angles * priceWork.priceAngle)
      + (this.lamps * priceWork.preiceLamp)
      + (this.lusters * priceWork.priceLuster)
  }

  areaPlus() {
    return this.area += 1
  }

  areaMinus() {
    return this.area -= 1
  }


  anglesPlus() {
    return this.angles += 1
  }

  anglesMinus() {
    return this.angles -= 1
  }


  lampPlus() {
    return this.lamps += 1
  }

  lampMinus() {
    return this.lamps -= 1
  }


  lusterPlus() {
    return this.lusters += 1
  }

  lusterMinus() {
    return this.lusters -= 1
  }
}
