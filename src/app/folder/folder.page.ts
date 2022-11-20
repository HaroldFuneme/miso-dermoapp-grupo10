import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Auth } from 'aws-amplify';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  async createUser() {
    console.log('twefasvd');
    try {
      const { user } = await Auth.signUp({
        username: 'Leonardo',
        password: 'LeonardoGarzon92%',
        attributes: {
          email: 'l.garzonr@uniandes.edu.co', // required
        },
      });
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }

  async signIn() {
    try {
      const user = await Auth.signIn('Leonardo', 'LeonardoGarzon92%');
      console.log(user)
    } catch (error) {
      console.log('error signing in', error);
    }
  }
}
