import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatButtonModule } from "@angular/material/button";
import { FlexLayoutModule } from "@angular/flex-layout";
import { TimelineModule, TitleModule } from "../../components/index";
import { ProjectsComponent } from "./projects.component";

@NgModule({
  imports: [
    CommonModule,
    TimelineModule,
    FlexLayoutModule,
    MatButtonModule,
    TitleModule,
  ],
  declarations: [ProjectsComponent],
  exports: [ProjectsComponent],
})
export class ProjectsModule {}
