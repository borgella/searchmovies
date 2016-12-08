import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfilComponent } from './components/profil/profil.component';

const ApplicationRoutes: Routes = [
    {
        path: '',
        component: NavbarComponent
    },

    {
        path: 'profile',
        component: ProfilComponent
    }
];

export const AppModuleRoutes: ModuleWithProviders = RouterModule.forRoot(ApplicationRoutes);
