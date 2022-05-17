import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* component section */
import { Day2TableComponent } from './day2-table/day2-table.component';
import { Day2PaginationTableComponent } from './day2-pagination-table/day2-pagination-table.component';
/* component section */

/* Material UI Import Section */
import { MatTableModule } from '@angular/material/table';
import { Day2SortingTableComponent } from './day2-sorting-table/day2-sorting-table.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Day2FilteringTableComponent } from './day2-filtering-table/day2-filtering-table.component';
import { MaterialExampleModule } from './material.module';
/* Material UI Import Section */

@NgModule({
  declarations: [
    AppComponent,
    Day2TableComponent,
    Day2PaginationTableComponent,
    Day2SortingTableComponent,
    Day2FilteringTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule, // Material Table imported
    MatPaginatorModule, // Material Paginator Table
    MatSortModule,
    MaterialExampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
