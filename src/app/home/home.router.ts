import{HomePage} from './home.page';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children:[
        {
            path:'',
            loadChildren:() => 
            import('../pages/home/home.module').then(
              m => m.HomePageModule
            )
        },
        {
            path:'forms',
            loadChildren:() => 
            import('../pages/forms/forms.module').then(
              m => m.FormsPageModule
            )
        },
        {
            path:'history',
            loadChildren:() => 
            import('../pages/history/history.module').then(
              m => m.HistoryPageModule
            )
        },
        {
            path:'account',
            loadChildren:() => 
            import('../pages/account/account.module').then(
              m => m.AccountPageModule
            )
        }
    ]
}];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRouter{}

