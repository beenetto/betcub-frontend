import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ngx-bootstrap-modal";
import { Deal } from '../../model/Deal';


@Component({
  selector: 'deal-detail',
  templateUrl: './deal-detail.component.html',
  styleUrls: ['./deal-detail.component.css']
})
export class DealDetailComponent extends DialogComponent<Deal, boolean>
                                 implements OnInit {

  constructor(dialogService: DialogService) {
      super(dialogService);
  }

  ngOnInit() {}

}
