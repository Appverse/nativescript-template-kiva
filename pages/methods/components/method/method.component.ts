import { Component, Input } from '@angular/core';
import { KivaMethod, KivaService } from '../../../../services/kiva.service';
import * as dialogs from 'ui/dialogs';

@Component({
  moduleId: module.id,
  selector: 'kv-method',
  templateUrl: 'method.component.html',
  styleUrls: ['method.component.css']
})
export class MethodComponent {

  @Input() method: KivaMethod;
  constructor(private kivaService: KivaService) { }

  fetchMethod() {
    this.kivaService
      .getMethod(this.method)
      .subscribe(method => dialogs.alert({
        title: method.uri,
        message: 'Status: ' + method.status,
        okButtonText: 'OK'
      }), error => {
        alert('Unhandled error');
        console.error('[MethodComponent]', JSON.stringify(error));
      });
  }
}
