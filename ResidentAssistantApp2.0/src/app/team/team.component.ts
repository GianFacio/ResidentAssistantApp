import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from '../models/team.model';
import { ProductServiceService } from '../service/product.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private router: Router ) { }


  @Input() team!: Team;

  ngOnInit(): void {
  }

}
