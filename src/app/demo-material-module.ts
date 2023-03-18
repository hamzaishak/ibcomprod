/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
// @ts-ignore
import { MatAutocompleteModule } from '@angular/material/autocomplete';
// @ts-ignore
import { MatButtonModule } from '@angular/material/button';
// @ts-ignore
import { MatButtonToggleModule } from '@angular/material/button-toggle';
// @ts-ignore
import { MatCardModule } from '@angular/material/card';
// @ts-ignore
import { MatCheckboxModule } from '@angular/material/checkbox';
// @ts-ignore
import { MatChipsModule } from '@angular/material/chips';
// @ts-ignore
import { MatDatepickerModule } from '@angular/material/datepicker';
// @ts-ignore
import { MatDialogModule } from '@angular/material/dialog';
// @ts-ignore
import { MatExpansionModule } from '@angular/material/expansion';
// @ts-ignore
import { MatFormFieldModule } from '@angular/material/form-field';
// @ts-ignore
import { MatGridListModule } from '@angular/material/grid-list';
// @ts-ignore
import { MatIconModule } from '@angular/material/icon';
// @ts-ignore
import { MatInputModule } from '@angular/material/input';
// @ts-ignore
import { MatListModule } from '@angular/material/list';
// @ts-ignore
import { MatMenuModule } from '@angular/material/menu';
// @ts-ignore
import { MatPaginatorModule } from '@angular/material/paginator';
// @ts-ignore
import { MatProgressBarModule } from '@angular/material/progress-bar';
// @ts-ignore
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// @ts-ignore
import { MatRadioModule } from '@angular/material/radio';
// @ts-ignore
import { MatSelectModule } from '@angular/material/select';
// @ts-ignore
import { MatSidenavModule } from '@angular/material/sidenav';
// @ts-ignore
import { MatSliderModule } from '@angular/material/slider';
// @ts-ignore
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// @ts-ignore
import { MatSnackBarModule } from '@angular/material/snack-bar';
// @ts-ignore
import { MatSortModule } from '@angular/material/sort';
// @ts-ignore
import { MatTableModule } from '@angular/material/table';
// @ts-ignore
import { MatTabsModule } from '@angular/material/tabs';
// @ts-ignore
import { MatToolbarModule } from '@angular/material/toolbar';
// @ts-ignore
import { MatTooltipModule } from '@angular/material/tooltip';
// @ts-ignore
import { MatStepperModule } from '@angular/material/stepper';
// @ts-ignore
import { MatBadgeModule } from '@angular/material/badge';
// @ts-ignore
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
// @ts-ignore
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
// @ts-ignore
import { CdkTableModule } from '@angular/cdk/table';
// @ts-ignore
import { CdkAccordionModule } from '@angular/cdk/accordion';
// @ts-ignore
import { A11yModule } from '@angular/cdk/a11y';
// @ts-ignore
import { BidiModule } from '@angular/cdk/bidi';
// @ts-ignore
import { OverlayModule } from '@angular/cdk/overlay';
// @ts-ignore
import { PlatformModule } from '@angular/cdk/platform';
// @ts-ignore
import { ObserversModule } from '@angular/cdk/observers';
// @ts-ignore
import { PortalModule } from '@angular/cdk/portal';

/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
@NgModule({
    exports: [
        MatAutocompleteModule,
        MatButtonModule,
        MatBottomSheetModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatTableModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatBadgeModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatSnackBarModule,
        MatSortModule,
        MatStepperModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatNativeDateModule,
        CdkTableModule,
        A11yModule,
        BidiModule,
        CdkAccordionModule,
        ObserversModule,
        OverlayModule,
        PlatformModule,
        PortalModule
    ]
})
export class DemoMaterialModule { }
