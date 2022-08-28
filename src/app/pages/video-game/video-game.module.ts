import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoGameRoutingModule } from './video-game-routing.module';
import { VideoGameComponent } from './video-game.component';
import { FilterComponent } from './filter/filter.component';
import { VideoGameListItemComponent } from './video-game-list-item/video-game-list-item.component';

@NgModule({
  declarations: [VideoGameComponent, FilterComponent, VideoGameListItemComponent],
  imports: [CommonModule, VideoGameRoutingModule]
})
export class VideoGameModule {}
