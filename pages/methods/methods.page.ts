import { Component, OnInit } from '@angular/core';
import {Page} from 'ui/page';
import {KivaService, KivaMethod} from '../../services/kiva.service';

@Component({
  moduleId: module.id,
  selector: 'kv-methods',
  templateUrl: 'methods.page.html',
  styleUrls: ['methods.page.css']
})
export class MethodsPage implements OnInit {

  progressValue: number = 0;
  methods: KivaMethod[];

  private intervalId: number;

  constructor(private kivaService: KivaService, page: Page) {
    page.actionBar.title = 'API';
    this.kivaService
      .getMethods().subscribe(methods => {
        this.methods = methods;
        clearInterval(this.intervalId);
      }, error => {
        alert('Unhandled error');
        console.error('[MethodsPage]', JSON.stringify(error));
      });
  }

  ngOnInit() {
    this.intervalId = setInterval(() => this.progressValue += 4, 50);
  }
}
