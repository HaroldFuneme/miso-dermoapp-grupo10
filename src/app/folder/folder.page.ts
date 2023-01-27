import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Geolocation, Position } from '@capacitor/geolocation';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public url: string;
  public position: Position;

  constructor(private activatedRoute: ActivatedRoute) { }

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

}
