import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'sp-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class AboutComponent {

}
