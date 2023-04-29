import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../models/team.model';
import { ProductServiceService } from '../service/product.service';
@Component({
  selector: 'app-list-team',
  templateUrl: './list-team.component.html',
  styleUrls: ['./list-team.component.css']
})
export class ListTeamComponent implements OnInit {

   // Filter to get names by search
   public filter: string | undefined;
   searchText: any;

   constructor(private service: ProductServiceService) {}

   @Input() team: Team | undefined;
   teams: Team[] = [];
   selectedTeam: Team | null = null;

   ngOnInit(): void {
     this.service.getTeam(
       (teams: Team[]) => (this.teams = teams)
     );
     console.log('All of the team are now displayed',this.teams);
   }

   onSelectTeam(team: Team) {
     this.selectedTeam = team;
   }

}
