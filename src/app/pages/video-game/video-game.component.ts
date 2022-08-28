import { Component, OnInit } from '@angular/core';

import { VideoGameService } from '../../core/services/video-game.service';
import { VideoGame } from '../../core/models/video-game.model';

@Component({
  selector: 'app-video-game',
  templateUrl: './video-game.component.html',
  styleUrls: ['./video-game.component.scss']
})
export class VideoGameComponent implements OnInit {
  videoGames: VideoGame[] = [];
  isLoading = false;

  constructor(private videoGameService: VideoGameService) {
    this.isLoading = true;
    this.videoGameService.getVideoGames().subscribe(res => {
      this.videoGames = res;
      this.isLoading = false;
    });
  }

  ngOnInit(): void {}
}
