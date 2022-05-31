import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  errorMsg = "";
  newMemberName = '';
  numberOfTeams: number | "" = "";
  members: string[] = [];
  teams: string[][] = [];

  onNumberOfTeamInput(value: string) {
    this.numberOfTeams = Number(value);
  }

  onInput(member: string) {
    this.newMemberName = member;
  }
  addMember() {
    if (!this.newMemberName) {
      this.errorMsg = "cant be empty value"
      return
    }
    this.members.push(this.newMemberName);
    this.newMemberName = '';
    this.errorMsg = '';
  }
  generateTeams() {
    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errorMsg = 'invalid generate value!'
      return;
    }
    if (this.members.length < this.numberOfTeams) {
      this.errorMsg = 'Not enough members'
      return;
    }
    this.errorMsg = '';
    const allMembers = [...this.members];

    while (allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {

        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];

        if (!member) break;

        if (this.teams[i]) {
          this.teams[i].push(member);
        }
        else {
          this.teams[i] = [member];
        }




        console.log(this.teams)
      }

    }
    this.members = [];
    this.numberOfTeams = '';



  }

}
