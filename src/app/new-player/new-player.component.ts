import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HighloGameService } from './../services/highlo-game.service';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.css']
})
export class NewPlayerComponent implements OnInit {
  playerName: String = "";
  gameId: number;

  constructor(private router: Router,
              private route : ActivatedRoute,
              private service: HighloGameService) {
    this.gameId = this.route.snapshot.params['id'];
  }

  ngOnInit() {
  }

  submit(){
    this.service.createPlayer(this.gameId, this.playerName)
                .subscribe(game => this.router.navigate(['/games/highlo/' + game.id]));
  }

}
