import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { CounterComponent } from '@shared/components/counter/counter.component';
import { WaveAudioComponent } from '@info/components/wave-audio/wave-audio.component';
import { HighlightDirective } from '@shared/directives/highlight.directive';

import { BehaviorSubject, delay, Subject } from 'rxjs';
@Component({
  selector: 'app-about',
  imports: [
    CounterComponent,
    WaveAudioComponent,
    HighlightDirective,
    FormsModule,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export default class AboutComponent {
  duration = signal(1000);
  message = signal('hola');

  obsWithInit$ = new BehaviorSubject<string>('init value ----');
  $withInit = toSignal(this.obsWithInit$, {
    requireSync: true,
  });

  obsWithoutInit$ = new Subject<string>();
  $withoutInit = toSignal(this.obsWithoutInit$.pipe(delay(3000)), {
    initialValue: '----',
  });

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber);
  }

  changeMessage(event: string) {
    console.log('changeMessage', event);
  }

  emitWithInit() {
    this.obsWithInit$.next('new Value');
  }

  emitWithoutInit() {
    this.obsWithoutInit$.next('******');
  }
}
