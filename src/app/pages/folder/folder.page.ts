import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Geolocation, Position } from '@capacitor/geolocation';
import { DemoService } from '../../services/demo.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public url: string;
  public position: Position;
  public lagns: string [] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    public demoService: DemoService,
    private translateService: TranslateService) {
      this.lagns = translateService.getLangs();
    }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  onClick(){
    console.log('test');
    const printCurrentPosition = async () => {
      const coordinates = await Geolocation.getCurrentPosition();
      console.log('Current position:', coordinates);
      this.position = coordinates;
      this.url = `https://www.google.com/maps/search/?api=1&query=${coordinates.coords.latitude}%2C${coordinates.coords.longitude}`;
    };
    printCurrentPosition();
  }

  changeLang(event){
    console.log(event);
    this.translateService.use(event.detail.value);

  }

}
