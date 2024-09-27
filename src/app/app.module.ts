import { importProvidersFrom, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./Header/header";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { CardComponent } from "./shared/card/card.component";
import { TaskComponent } from "./tasks/task/task.component";
import { NgFor } from "@angular/common";
import { NgIf } from "@angular/common";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { DatePipe } from "@angular/common";

import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [AppComponent,HeaderComponent, UserComponent,TasksComponent, TaskComponent,CardComponent ,NewTaskComponent],
    bootstrap:[AppComponent,/*Here can be more*/],

    imports:[BrowserModule, DatePipe ,FormsModule]
})

export class AppModule {}