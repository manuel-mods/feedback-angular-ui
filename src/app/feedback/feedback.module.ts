import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbackComponent } from './feedback.component';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [FeedbackComponent],
  imports: [CommonModule, FormsModule, NgxSpinnerModule.forRoot(), FeedbackRoutingModule],
})
export class FeedbackModule {}
