import {
  Component,
  Input,
  signal,
  SimpleChanges,
  OnChanges,
  OnInit,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent
  implements OnChanges, OnInit, AfterViewInit, OnDestroy
{
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';
  counter = signal(0);
  counterRef: number | undefined;

  constructor() {
    // NO ASYNC
    // before render
    console.log('Constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    // before and during render
    console.log('Changes');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }

    console.log('-'.repeat(10));
  }

  ngOnInit() {
    // after render
    // Una vez
    // Async, then, subscribe
    console.log('Init');
    console.log('-'.repeat(15));
    console.log('Duration:', this.duration);
    console.log('Message:', this.message);
    console.log('-'.repeat(15));

    this.counterRef = window.setInterval(() => {
      console.log('Run Counter:');
      this.counter.update((statPrev) => statPrev + 1);
    }, 1000);
  }

  ngAfterViewInit() {
    // after render - despues de ngOnInit()
    // despues de renderizar los hijos - si los hijos ya fueron renderizados
    // Una vez
    // Async, then, subscribe
    console.log('After View Init');
    console.log('-'.repeat(15));
    console.log('Duration:', this.duration);
    console.log('Message:', this.message);
    console.log('-'.repeat(15));
  }
  ngOnDestroy() {
    // before destroy
    // Una vez
    // Async, then, subscribe
    console.log('Destroy');
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef);
  }

  doSomething() {
    console.log('Change Duration');
  }
}
