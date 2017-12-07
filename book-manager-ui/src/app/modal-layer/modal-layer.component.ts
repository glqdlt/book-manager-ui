import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-layer',
  templateUrl: './modal-layer.component.html',
  styleUrls: ['./modal-layer.component.css']
})
export class ModalLayerComponent implements OnInit {
  modalDisplay: boolean;

  constructor() {
    this.modalDisplay = false;
  }

  ngOnInit() {
  }

}
