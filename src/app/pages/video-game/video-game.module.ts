import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoGameRoutingModule } from './video-game-routing.module';
import { VideoGameComponent } from './video-game.component';

@NgModule({
  declarations: [VideoGameComponent],
  imports: [CommonModule, VideoGameRoutingModule]
})
export class VideoGameModule {}
