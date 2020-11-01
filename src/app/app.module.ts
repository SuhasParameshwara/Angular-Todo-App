
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TodoListModule } from './todo-list/todo-list.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    TodoListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
